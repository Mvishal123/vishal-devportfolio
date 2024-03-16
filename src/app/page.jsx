import React from "react";
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/render-model";
import Wizard from "@/components/models/wizard";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="home-page-background"
        fill
        className="h-full w-full object-cover object-center opacity-25"
      />
      
      <div className="w-full h-screen">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
    </div>
  );
};

export default Page;
