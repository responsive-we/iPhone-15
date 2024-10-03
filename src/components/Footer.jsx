import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-sm text-gray">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">Find an Apple Store </span>
            or {""}
            <span className="underline text-blue cursor-pointer">other retailer </span> near
            you
          </p>
          <p className="font-semibold text-sm text-gray">
            Or call 0008400-8274-1278.{" "}
          </p>
        </div>
        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Developed by Ayan Siddiqui
          </p>
          <div className="flex-center">
            <a href="https://www.linkedin.com/in/md-ayan-" target="_blank" className="font-semibold hover:underline hover:text-blue text-gray text-xs">
              LinkedIn  
            </a>
              <span className="mx-2"> | </span>
            <a href="https://github.com/responsive-we" target="_blank" className="font-semibold hover:underline hover:text-blue text-gray text-xs">
              GitHub  
            </a>
              <span className="mx-2"> | </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
