import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-[150vh] relative justify-center items-center px-10 bg-black text-white">
      <div className="flex pt-24 items-start gap-6 md:px-48 md:pt-48 flex-col w-full ">
        <h2 className="font-bold text-2xl text-left">DISCLAIMER</h2>
        <div className="flex flex-col gap-4 text-white/80">
          {/* <p className="">
            All information provided on this website is for informational
            purposes only and does not constitute professional advice.
          </p> */}
          <p className="">
            All information provided on this website is for informational
            purposes only and does not constitute professional advice.
          </p>
          <p className="">
            KOI MOBILIZE makes no representations or warranties, express or
            implied, regarding the completeness, accuracy, or reliability of any
            information on this website.
          </p>
          <p className="">
            Any actions you take based on the information provided on this
            website are strictly at your own risk. KOI MOBILIZE will not be
            liable for any losses or damages in connection with the use of our
            website.
          </p>
          <p className="">
            From time to time, this website may also include links to other
            websites. These links are provided for your convenience to provide
            further information. They do not signify that we endorse the
            website(s). We have no responsibility for the content of the linked
            website(s).
          </p>
          <p className="">
            Please consult a professional or seek professional advice before
            making any decisions based on the information provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
