"use client";
import Blob from "@/components/Blob";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Monokoily = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/waitlist", formData);
      // console.log("✅ Success:", res.data.message);
      toast.success(<SuccessSplitButtons />, {
        ariaLabel: "Successfully submitted!",
      });
      setFormData(initialState);
      setIsLoading(false);
    } catch (error: any) {
      // console.error(
      //   "❌ Error submitting form:",
      //   error?.response?.data || error.message
      // );
      const { error: errTitle, message: errMsg } = error?.response?.data || {
        error: "Submission failed.",
        message: "Please try again.",
      };

      toast.error(<ErrorSplitButtons message={errTitle} error={errMsg} />, {
        ariaLabel: errTitle,
      });
      setIsLoading(false);
    }
  };

  function SuccessSplitButtons() {
    return (
      <div className="w-full">
        <div className="flex flex-col p-4">
          <h3 className="text-[hsl(150,87%,60%)] text-sm font-semibold">
            Successfully submitted!
          </h3>
          <p className="text-sm text-white/80">
            Follow us on Telegram for the airdrop announcement.
          </p>
        </div>
      </div>
    );
  }

  function ErrorSplitButtons({ message, error }: any) {
    return (
      <div className="w-full">
        <div className="flex flex-col p-4">
          <h3 className="text-[hsl(344,97%,60%)] text-sm font-semibold">
            {message}
          </h3>
          <p className="text-sm text-white/80">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer theme="dark" autoClose={3000} />
      <div className="relative bg-black">
        <div className="flex justify-center md:pt-12 pb-6 md:pb-0 items-center text-white h-full relative after:content-[''] after:absolute after:w-full after:h-72 after:bottom-0 after:bg-gradient-to-t after:from-black after:to-transparent w-full mx-auto">
          <div className="flex justify-center items-center gap-6 md:gap-12 pt-24 flex-col-reverse md:flex-row z-10 px-4 lg:px-0 w-full lg:w-4/5">
            <div className="flex relative flex-col w-3/4 md:w-1/2 gap-2 md:gap-12">
              <div className="flex flex-col">
                <h2 className="text-2xl flex items-center gap-1 font-semibold md:text-5xl mb-2">
                  READY TO BE PIONEER TESTER
                </h2>
                <p className="text-[#FFA515] text-2xl flex items-center gap-1 font-semibold md:text-5xl">
                  in Monokoily?
                </p>
              </div>
              <p className="text-sm md:text-2xl text-white/80">
                Get ready to harness more power and prepare to combat the
                Inflation Mutants in every country!
              </p>
            </div>
            <div className="">
              <Image
                src="/light.png"
                alt="Monokoily"
                width={1000}
                height={1000}
                quality={100}
                className="object-cover absolute top-[20%] right-0 z-20"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/miss-koi.png"
                alt="Monokoily"
                width={700}
                height={700}
                quality={100}
                className="object-cover relative z-50"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/miss-koi.png"
                alt="Monokoily"
                width={500}
                height={500}
                quality={100}
                className="object-cover relative z-50"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-white">
          <div className="bg-gradient text-white py-2 px-10 clipped-banner font-semibold text-sm md:text-xl text-center">
            💰 Win up to $30,000 worth of $MONOKOI in Airdrop!
          </div>
        </div>
        <div className="py-8 md:py-32 relative">
          <div className="hidden md:flex absolute -top-[10%] -left-[40%] z-10">
            <Blob className="" />
          </div>
          <div className="hidden md:flex absolute -top-[-20%] -right-[40%] z-10">
            <Blob className="" />
          </div>
          <div className="text-2xl md:text-5xl flex flex-col justify-center items-center text-white font-bold">
            <p>JOIN 10M MONOKOI</p>
            <p>TOKEN AIRDROP</p>
          </div>
          <p className="text-2xl md:text-4xl font-bold text-center text-[#FFA515] py-6">
            Token Reward Entry Form
          </p>
          <div className="flex flex-col items-center justify-center gap-6 w-full relative md:z-20">
            <div className="flex flex-col gap-2">
              <label className="text-white/80">Name</label>
              <input
                className="py-3 px-4 md:w-[350px] w-[250px]"
                type="text"
                onChange={handleChange}
                name="name"
                required
                value={formData?.name}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/80">Phone Number</label>
              <input
                className="py-3 px-4 md:w-[350px] w-[250px]"
                type="tel"
                onChange={handleChange}
                name="phone"
                value={formData?.phone}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/80">Email</label>
              <input
                className="py-3 px-4 md:w-[350px] w-[250px]"
                type="email"
                onChange={handleChange}
                name="email"
                value={formData?.email}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/80">
                How Did You Hear About Us?
              </label>
              <input
                className="py-3 px-4 md:w-[350px] w-[250px]"
                type="text"
                onChange={handleChange}
                name="message"
                value={formData?.message}
                required
              />
            </div>
            <Button
              className="text-white w-[250px] md:w-[350px] py-6 disabled:cursor-wait"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              <Link href={"#welcome"}>
                {isLoading ? "Submittig..." : "Submit"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center px-4 md:px-0">
          <div className="p-[4px] flex items-center justify-center rounded-[10px] bg-[conic-gradient(at_top_left,_#a759ff_6.66%,_#f05615_21.75%,_#ffa515_39.84%)] w-[500px]">
            <div className="text-white py-8 bg-[#0E0724] rounded-[10px] w-full flex flex-col items-center">
              <p className="font-semibold pb-2">FOLLOW US ON TELEGRAM FOR</p>
              <p className="fomt-semibold">THE AIRDROP ANNOUNCEMENT!</p>
              <Link
                href="https://t.me/Monokoily"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"telegram"}
                  className="text-white w-[250px] mt-4"
                >
                  <div className="flex items-center justify-center gap-4 text-base font-semibold">
                    <FaTelegramPlane className="w-6 h-6" />
                    <p>Follow us on Telegram</p>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Monokoily;
