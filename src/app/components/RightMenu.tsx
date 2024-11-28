import FriendRequests from "@/app/components/FriendRequests";
import Birthdays from "@/app/components/Birthdays";
import Ad from "@/app/components/Ad";
import PetInfoCard from "@/app/components/PetInfoCard";
import PetMediaCard from "@/app/components/PetMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">

        {userId?(
            <>
            <PetInfoCard userId={userId}/>
            <PetMediaCard userId={userId}/>
            </>
        ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
