import Image from "next/image";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/*STORY*/}
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mia</span>
        </div>
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/56733/pexels-photo-56733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Kesha</span>
        </div>
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/28282874/pexels-photo-28282874/free-photo-of-portrat-eines-kleinen-hundes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Lucky</span>
        </div>
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Busi</span>
        </div>
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 object-cover"
          />
          <span className="font-medium">Ronda</span>
        </div>
        <div className="flex flex-col items-center ga-2 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mia</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
