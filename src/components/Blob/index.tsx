import React from "react";

const Blob = ({ className }: { className: string }) => {
  return (
    <div
      className={`${className} h-[50rem] w-[50rem] bg-[#B059E3]/40 rounded-full blur-[10rem]`}
    ></div>
  );
};

export default Blob;
