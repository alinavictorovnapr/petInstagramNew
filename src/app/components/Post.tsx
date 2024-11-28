import Image from "next/image";
import Comments from "@/app/components/Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/*USER div*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/10822580/pexels-photo-10822580.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Garry</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/*DESC*/}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/29442589/pexels-photo-29442589/free-photo-of-adorable-shih-tzu-puppy-with-tongue-out.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Meet Garry, the most spirited, tail-wagging bundle of joy you'll ever
          come across! With his fluffy coat and eyes full of mischief, Garry is
          always up for an adventure. Whether he's bounding through fields,
          chasing butterflies, or snuggling up for some belly rubs, Garry’s
          playful nature brightens every room he enters. He’s not just a dog;
          he’s a best friend, a little guardian, and a constant source of
          laughter. Life is simply better with Garry by your side!
        </p>
      </div>

      {/*INTERACTION*/}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex gap-8">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
              <Image
                src="/share.png"
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">
                23 <span className="hidden md:inline">Shares</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
