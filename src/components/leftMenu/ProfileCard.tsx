import Image from "next/image";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";

const ProfileCard = async () => {
  const { userId } = auth();
  if (!userId) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });
  console.log(user);
  if (!user) return null;
  return (
    <div className="flex flex-col gap-6 p-4 bg-white rounded-lg  shadow-md text-sm text-gray-500">
      <div className="h-20 relative">
        <Image
          src={user.cover || "./noCover.jpg"}
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={user.avatar || "./noAvatar.png"}
          alt=""
          width={52}
          height={52}
          className="rounded-full w-16 h-16 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10 object-cover"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">
          {user.name && user.surname
            ? user.name + " " + user.surname
            : user.username}
        </span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://images.pexels.com/photos/19808114/pexels-photo-19808114/free-photo-of-an-orange-cat-wrapped-in-a-white-duvet.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/19808114/pexels-photo-19808114/free-photo-of-an-orange-cat-wrapped-in-a-white-duvet.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
            <Image
              src="https://images.pexels.com/photos/19808114/pexels-photo-19808114/free-photo-of-an-orange-cat-wrapped-in-a-white-duvet.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={12}
              height={12}
              className="rounded-full w-3 h-3 object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">
            {" "}
            {user._count.followers} Followers
          </span>
        </div>
        <button className="bg-blue-500 text-white text-xs p-2 rounded-md">
          {" "}
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
