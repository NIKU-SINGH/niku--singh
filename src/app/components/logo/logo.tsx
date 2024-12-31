import React from "react";

function Logo() {
  return (
    <div>
      <div className="fixed top-5 left-5">
        <div className="bg-white text-2xl font-monumentExtended font-bold  p-2 rounded-lg leading-none z-50">
          <p className="-mb-1">NI</p>
          <p>KU</p>
          <div className="bg-black h-4 w-4 absolute rounded  -bottom-1 -right-1 flex items-center justify-center">
            <div className="bg-white h-2 w-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
