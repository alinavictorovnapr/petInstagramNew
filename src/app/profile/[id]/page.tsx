import LeftMenu from "@/app/components/LeftMenu";
import Image from "next/image";


import Feed from "@/app/components/Feed";
import RightMenu from "@/app/components/RightMenu";

const ProfilePage = () => {
    return (
        <div className="flex gap-6 pt-6">
            <div className="hidden xl:block w-[20%]">
                <LeftMenu type={"profile"}/>
            </div>
            <div className="w-full lg:w-[70%] xl:w-[50%]">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image
                                src="https://images.pexels.com/photos/237228/pexels-photo-237228.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt="" fill className="rounded-md object-cover"/>
                            <Image
                                src="https://images.pexels.com/photos/19808114/pexels-photo-19808114/free-photo-of-an-orange-cat-wrapped-in-a-white-duvet.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                                width={128}
                                height={128}
                                className="rounded-full w-32 h-32 absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white z-10 object-cover"
                            />
                        </div>
                        <h1 className="mt-20 mb-1 text-2xl font-medium items-center"
                        >Sunny </h1>
                        <p className="text-sm mb-4 text-gray-500 items-center">Sweet orange cat</p>
                        <div className="flex items-center justify-center gap-12 mb-4">
                            <div className="flex flex-col items-center">
                                <span className="font-medium">123</span>
                                <span className="text-sm">Posts</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">15K</span>
                                <span className="text-sm">Followers</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-medium">1.2K</span>
                                <span className="text-sm">Following</span>
                            </div>
                        </div>

                    </div>
                    <Feed/>
                </div>
            </div>
            <div className="hidden lg:block w-[30%]">
                <RightMenu userId="test"/>
            </div>
        </div>
    )
};

export default ProfilePage;
