import Link from "next/link";
import Image from "next/image";

const PetInfoCard = ({ userId }: { userId: string }) => {
    return (

            <div className="p-4 bg-white rounded-lg  shadow-md text-sm flex flex-col gap-4">
                {/*TOP*/}
                <div className="flex justify-between items-center font-medium">
                    <span className="text-gray-500">Pet Information</span>
                    <Link href="/" className="text-blue-500 text-xs">
                        See all
                    </Link>
                </div>
                {/*BOTTOM*/}
                <div className="flex flex-col gap-4 text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="text-xl text-black">Orange Sunny </span>
                        <span className="text-sm">@sunny</span>
                    </div>
                    <p>Meet Sunny, the sleek and clever orange cat who’s redefining what it means to be pawsome! 🐾  Need a mouse problem solved?
                        One "hunt" command, and Sunny’s on the case like a tiny orange detective. 🕵️‍♂️🐭
                    </p>
                    <div className="flex items-center gap-2">
                        <Image src="/map.png" alt="city" width={16} height={16}/>
                        <span> Living in <b>San-Frankivsk</b></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/work.png" alt="city" width={16} height={16}/>
                        <span> Work at <b>Marketing Agency</b></span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1 items-center">
                            <Image src="/link.png" alt="city" width={16} height={16}/>
                            <Link href="https://www.instagram.com/supernova.ua" className="text-blue-500 font-medium"
                            > My works </Link>
                        </div>
                        <div className="flex gap-1 items-center">
                            <Image src="/date.png" alt="city" width={16} height={16}/>
                            <span>Joined November 2024</span>
                        </div>

                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded-md text-sm"
                    >Follow</button>
                    <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>

                </div>
            </div>
    );
};

export default PetInfoCard;
