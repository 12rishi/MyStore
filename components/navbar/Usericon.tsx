import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { LuUser } from "react-icons/lu";
const Usericon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="user profile"
        width={6}
        height={6}
        fill
        className="rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6" />;
};

export default Usericon;
