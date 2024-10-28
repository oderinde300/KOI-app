"use client";
import React from "react";
import { Button } from "../ui/button";

const WhitePaperButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/Web3SOC Whitepaper.pdf"; // Path to your PDF file in the public folder
    link.download = "Web3SOC Whitepaper.pdf"; // Name of the downloaded file
    link.click();
  };

  return (
    <Button
      variant={"outline"}
      className="py-5 w-32 md:w-48"
      //   onClick={() => handleDownload()}
      onClick={handleDownload}
    >
      Whitepaper
    </Button>
  );
};

export default WhitePaperButton;
