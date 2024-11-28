import ProfileCard from "@/app/components/ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Ad from "@/app/components/Ad";

const LeftMenu = ({type}:{type:"home"|"profile"}) => {
  return (
      <div className="flex flex-col gap-6">

        {type === "home" && <ProfileCard/>}
        <div className="flex flex-col gap-2 p-4 bg-white rounded-lg  shadow-md text-sm text-gray-500 ">
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
          <Image src="/posts.png" alt="city" width={20} height={20}/>
           <span>My Posts</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/albums.png" alt="city" width={20} height={20}/>
            <span>Gallery</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/events.png" alt="city" width={20} height={20}/>
            <span>Stories Highlights</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/videos.png" alt="city" width={20} height={20}/>
            <span>Fun Video</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/courses.png" alt="city" width={20} height={20}/>
            <span>Tricks & Training</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/courses.png" alt="city" width={20} height={20}/>
            <span>Shop My Favorites</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/paw.png" alt="city" width={20} height={20}/>
            <span>Charity & Donations</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/pet-home.png" alt="city" width={20} height={20}/>
            <span>Community</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>
          <Link href="/" className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
            <Image src="/settings.png" alt="city" width={20} height={20}/>
            <span>Settings</span>
          </Link>
          <hr className="border-t-1 border-gray-50 w-36 self-center"/>

        </div>
        <Ad size={"sm"}/>

      </div>
)
};

export default LeftMenu;
