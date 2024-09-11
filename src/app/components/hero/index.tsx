import React from "react";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[85vh] rounded-[32px]">
      <div className="flex items-center space-x-4">
        <h1 className="text-[12rem] font-bold font-monumentExtended text-white">
          NIKU
        </h1>
        <h1 className="text-[12rem] font-bold font-monumentExtended text-transparent text-stroke text-stroke-2 text-stroke-white">
          SINGH
        </h1>
      </div>
      <div className="w-[50vw] flex items-center  flex-col gap-4">
        <p className="text-center text-white">
          Navigating the tech world, one open-source project at a time. I'm a
          technology enthusiast with a deep passion for Blockchain and Bitcoin.
          My idea of fun? Tackling intricate bugs and diving into code,
          unraveling its mysteries. Beyond the screen, I'm an avid reader, a
          movie buff, and a friendly conversationalist. I believe in the power
          of collaboration and I'm open to exciting projects. You can catch me
          on Twitter @nikusingh_ and for collaboration, reach out to me at
          nikusingh1729@gmail.com. Let's build something amazing together!
        </p>
        <button className="bg-white text-black p-4 rounded-xl ">
          Click here to view more
        </button>
      </div>
    </div>
  );
}

export default Index;
