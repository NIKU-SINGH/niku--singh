import React from "react";

function Logo() {
  return (
    <div>
      <div className="fixed top-5 left-5">
        <div className="bg-white text-2xl font-monumentExtended font-bold p-2 rounded-lg leading-none z-50">
          <p className="-mb-1">NI</p>
          <p>KU.</p>
          <div className="bg-black h-6 w-6 rounded absolute -bottom-2 -right-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
