import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return <div className="p-4 bg-white rounded-lg  shadow-md text-sm">

    {/*TOP*/}
    <div className="flex item-center justify-between text-gray-500 font-medium">
      <span>Sponsored Ads</span>
      <Image src="/more.png" alt="" width={16} height={16} />

    </div>
    {/*BOTTOM*/}
    <div className={`flex flex-col justify-between  mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
      <div className={`relative w-full ${
        size==="sm" ? "h-24" : size==="md"? "h-48" : "h-58"
      }`}>
        <Image src="https://images.pexels.com/photos/4755184/pexels-photo-4755184.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="rounded-lg object-cover" />
      </div>
      <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width={24} height={24} className="rounded-full w-6 h-6 object-cover"
        />
        <span className="text-blue-500 font-medium">Cat tree</span>
      </div>
        <p className={size==="sm"? "text-xs" : "text-sm"}>
          {size==="sm"
              ?"Treat your cat to their own space to climb, scratch, and lounge"
              : size==="md"
                  ? "Treat your cat to their own space to climb, scratch, and lounge. This multi-level cat tree ..."
                  :"Treat your cat to their own space to climb, scratch, and lounge. This multi-level cat tree is designed to keep your feline entertained, relaxed, and happy."
          }
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg"
        >Learn more</button>

    </div>

  </div>;
};

export default Ad;
