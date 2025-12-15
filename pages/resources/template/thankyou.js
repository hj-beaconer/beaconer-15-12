import React from "react";
import {
  IC_Email,
  Ic_Mail_Colored,
  Ic_Phone,
  Ic_Phone_Colored,
} from "../../../Utils/svg";

const thankyou = () => {
  return (
    <div className="flex flex-col mt-32 gap-6 items-center min-h-[calc(100vh-260px)] justify-center mx-[5%]">
      <div className="text-center flex flex-col md:!gap-5 gap-2 items-center">
        <div className="text-lg md:text-[28px] font-bold ">
          Thanks for Submitting !
        </div>
        <div className="text-sm md:text-base font-normal md:w-[52%]">
          An Beaconer email with download attachment has been sent on the
          provided address. Please check your email inbox or Spam/Junk folder.
        </div>
        <div className="text-[#F76324] text-sm md:text-base font-normal">
          We appreciate you reaching out!
        </div>
      </div>
      <div className="flex flex-col md:!gap-6 gap-4 w-full items-center">
        <div className="md:text-2xl/normal text-lg font-bold">
          Connect with us
        </div>
        <div className="grid md:flex md:!gap-4 gap-2 items-center justify-center w-full">
          <div className="text-sm md:text-base font-normal p-6 border !border-[#E856566a] rounded-3xl flex flex-col gap-3 items-center max-w-[350px] w-full">
            {Ic_Mail_Colored.icon()}
            <div className="flex flex-col gap-1 text-center">
              <div className="text-lg sm:text-2xl/[38.4px] font-semibold">
                Email Address
              </div>
              <div className="sm:text-xl/[36px] text-base font-normal">
                info@beaconer.com
              </div>
            </div>
          </div>
          <div className="text-sm md:text-base font-normal p-6 border !border-[#E856566a] rounded-3xl flex flex-col gap-3 items-center max-w-[350px] w-full">
            {Ic_Phone_Colored.icon()}
            <div className="flex flex-col gap-1 text-center">
              <div className="text-lg sm:text-2xl/[38.4px] font-semibold">
                Phone Number
              </div>
              <div className="sm:text-xl/[36px] text-base font-normal">
                + 1 416 731 7477
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thankyou;
