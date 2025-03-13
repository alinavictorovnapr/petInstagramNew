import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "../Ad";
import PetInfoCard from "./PetInfoCard";
import PetMediaCard from "./PetMediaCard";
import { User } from "@prisma/client";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <PetInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <PetMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
