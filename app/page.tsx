import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="shadow-xl border-[#E5EAF0] border-[1px] w-[368px] flex flex-col px-[16px] pb-[20px] pt-[16px] rounded-[16px]">
        <Image
          src="/assets/cactus_img.jpg"
          className="object-contain rounded-[16px] mb-[16px]"
          alt="cactus"
          width={336}
          height={152}
        />
        <div className=" rounded-full w-[fit-content] px-[16px] py-[5px] bg-[#E6D6FC]">
          <p className="text-[12px] font-semibold text-[#883AE1]">Design</p>
        </div>
        <h1 className="font-semibold mt-[16px] text-lg text-[#20293A]">
          Embracing Minimalism
        </h1>
        <p className="text-wrap mt-[6px] text-[#6C727F]">
          From minimalist sculptures to minimalist paintings, this blog will
          inspire you to appreciate the beauty that lies in simplicity.
        </p>
        <div className="bg-[#E5EAF0] mt-[20px] w-full h-[1px]" />
        <div className="flex justify-end flex-col h-[5vh] items-start text-bottom">
          <p className="text-[#6C727F] text-sm">
          Annie Spratt
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
