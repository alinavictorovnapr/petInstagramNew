import Link from "next/link";
import Image from "next/image";

const PetMediaCard = ({ userId }: { userId: string }) => {
    return (

            <div className="p-4 bg-white rounded-lg  shadow-md text-sm flex flex-col gap-4">
                {/*TOP*/}
                <div className="flex justify-between items-center font-medium">
                    <span className="text-gray-500">Pet Media</span>
                    <Link href="/" className="text-blue-500 text-xs">
                        See all
                    </Link>
                </div>
                {/*BOTTOM*/}
                <div className="flex gap-4 justify-between flex-wrap">
                    <div className="relative w-1/5 h-24">
                        <Image
                        src="https://images.pexels.com/photos/12241709/pexels-photo-12241709.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt=""
                        fill
                        className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/11500108/pexels-photo-11500108.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/29435527/pexels-photo-29435527/free-photo-of-street-cat-lounging-in-historic-istanbul-neighborhood.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/16462859/pexels-photo-16462859/free-photo-of-orange-adorable-cat-called-winniefred-the-ginger-cat.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/27739112/pexels-photo-27739112/free-photo-of-katerchen.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/5670919/pexels-photo-5670919.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div className="relative w-1/5 h-24">
                        <Image
                            src="https://images.pexels.com/photos/27739112/pexels-photo-27739112/free-photo-of-katerchen.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>

                </div>

        </div>
    );
};

export default PetMediaCard;
