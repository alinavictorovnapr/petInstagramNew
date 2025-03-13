import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local",
    );
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", { status: 400 });
  }

  const eventType = evt.type;
  const data = JSON.parse(body).data;

  console.log(
    `Received webhook with ID ${evt.data.id} and event type of ${eventType}`,
  );
  console.log("Webhook payload:", body);

  try {
    if (eventType === "user.created") {
      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: data.username || "unknown",
          avatar: data.image_url || "/noAvatar.png",
          cover: "/noCover.jpg",
        },
      });
      return new Response("User has been created", { status: 200 });
    }

    if (eventType === "user.updated") {
      await prisma.user.update({
        where: { id: evt.data.id },
        data: {
          username: data.username || "unknown",
          avatar: data.image_url || "/noAvatar.png",
        },
      });
      return new Response("User has been updated", { status: 200 });
    }
  } catch (err) {
    console.error(err);
    return new Response("Failed to process the user", { status: 500 });
  }

  return new Response("Webhook received", { status: 200 });
}
