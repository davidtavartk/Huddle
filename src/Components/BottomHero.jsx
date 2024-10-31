import React from "react";
import Button from "./Button";

const BottomHero = () => {
  return (
    <div className="flex justify-center items-center my-8 flex-col">
      <h1 className="text-[#00252E] text-[40px] font-bold">
        Ready To Build Your Community?
      </h1>
      <Button
        filled={true}
        className="drop-shadow-custom mt-9 px-[99px] py-7 text-xl font-bold rounded-[44px]"
      >
        {" "}
        Get Started For Free
      </Button>
    </div>
  );
};

export default BottomHero;
