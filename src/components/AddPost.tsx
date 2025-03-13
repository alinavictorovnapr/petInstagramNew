import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import AddPostButton from "@/components/AddPostButton";
import prisma from "@/lib/client";

const AddPost = () => {
  const { userId } = auth();

  const testAction = async (formData: FormData) => {
    "use server";
    if (!userId) return;
    const desc = formData.get("desc") as string;
    try {
      const res = await prisma.post.create({
        data: {
          userId: userId,
          desc: desc,
        },
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm">
      {/*AVATAR*/}
      <Image
        src="https://images.pexels.com/photos/736532/pexels-photo-736532.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="avatar"
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/*POST*/}
      <div className="flex-1">
        {/*TEXT INPUT*/}
        <form action={testAction} className="flex gap-4">
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            id=""
            name="desc"
          ></textarea>
          <Image
            src="/cat-emoji.png"
            alt="avatar"
            width={25}
            height={20}
            className="w-6 h-5 cursor-pointer self-end"
          />
          <AddPostButton />
        </form>

        {/*POSTOPTIONS*/}
        <div className="flex items-center gap-4 mt-4 text-grey-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="avatar" width={20} height={20} />
            Photo
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="avatar" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="avatar" width={20} height={20} />
            Event
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="avatar" width={20} height={20} />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
