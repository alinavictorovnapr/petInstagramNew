"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/public" className="font-bold text-xl logo-color">
          PetsInstagram
        </Link>
      </div>
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-grey-600">
          <Link href="/public" className="flex gap-2 items-center">
            <Image
              src="/pet-home.png"
              alt="HomePage"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/public" className="flex gap-2 items-center">
            <Image
              src="/footprint.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-5 h-5"
            />

            <span>Friends</span>
          </Link>
          <Link href="/public" className="flex gap-2 items-center">
            <Image
              src="/veterinary.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>Stories</span>
          </Link>
          <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
            <input
              type="text"
              placeholder="search..."
              className="bg-transparent outline-none"
            />
            <Image src="/search.png" alt="search" width={14} height={14} />
          </div>
        </div>
      </div>
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/footprint.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/email.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/pet-bowl1.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
