import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      {/*WRITE*/}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/26221072/pexels-photo-26221072/free-photo-of-a-dog-with-a-ball.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/cat-emoji.png"
            alt="avatar"
            width={25}
            height={20}
            className="w-6 h-5 cursor-pointer self-end"
          />
        </div>
      </div>

      {/*COMMENTS*/}
      <div className="">
        {/*COMMENT*/}
        <div className="flex gap-4 justify-between mt-6">
          {/*AVATAR*/}
          <Image
            src="https://images.pexels.com/photos/29415738/pexels-photo-29415738/free-photo-of-street-dog-in-snowy-talgar-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          {/*DESC*/}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Spenser</span>
            <p>
              Garry sounds like an absolute delight friend 🐾! Does he have any
              funny or quirky habits?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                  123 <span className="hidden md:inline">Likes</span>
                </span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/*ICON*/}
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
