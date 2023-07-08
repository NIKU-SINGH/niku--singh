import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

function Timeline() {
  return (
    <div className="w-full mt-10 ">
      <ol class="relative border-l-8 border-[#5939C6] ">
        {/* Type 1 */}
        <li class="mb-10 ml-6 cursor-pointer">
          <span class="flex absolute -left-6 justify-center items-center w-10 h-10 rounded-full bg-[#5939C6]"></span>
          <div class="flex-col relative ml-10 border-l-[16px] border-[#5939C6]  p-4 rounded-xl border   hover:shadow-2xl shadow-slate-200">
            <h1 class="text-xl md:text-2xl mb-10 sm:mb-6 font-semibold text-gray-800 h-10">
              Google Summer Of Code (GSoC’23) Gitlab{" "}
            </h1>
            <div class="text-xl font-semibold text-black h-10 absolute -top-10 -right-14">
              <Image
                src="/rocket.svg"
                height="150px"
                width="150px"
                className="absolute h-96 w-96 -top-10 right-0 z-0"
              />
            </div>
            <div className="text-slate-700 sm:w-11/12">
              <ul class="list-disc ml-10 space-y-4">
                <li>
                  Contributed to GitLab projects, pinpointing roadblocks for new
                  contributors in their documentation and working with the
                  Contributor &apos;s Success Team to improve the process.
                </li>
                <li>
                  Enhanced GitLab &apos;scontribution experience by proactively
                  identifying and addressing 80% of identified gaps through a
                  comprehensive report tailored for developers utilizing both
                  local and cloud-based IDEs.
                </li>
              </ul>
            </div>
          </div>
        </li>

        {/* Type 2  */}
        <li class="mb-10 ml-6 cursor-pointer ">
          <span class="flex absolute -left-6 justify-center items-center w-10 h-10 rounded-full bg-[#5939C6]"></span>
          <div class="flex-col relative ml-10 border-l-[16px] border-gray-100  p-4 rounded-xl border  bg-[#5939C6] hover:shadow-2xl shadow-slate-200">
            <h1 class="text-xl md:text-2xl mb-10 sm:mb-6 font-semibold text-gray-100 h-10">
              LFX'23 Mentor @Hyperledger Foundation
            </h1>
            <div class="text-xl font-semibold h-10 absolute -top-10 -right-14">
              <Image
                src="/rocket.svg"
                height="150px"
                width="150px"
                className="absolute h-96 w-96 -top-10 right-0 z-0"
              />
            </div>
            <div className="text-gray-100 sm:w-11/12">
              <ul class="list-disc ml-10 space-y-4">
                <li>
                  Collaborated with a mentee to revamp Hyperledger&apos;s
                  onboarding experience, creating a comprehensive resource for
                  new community members, and empowering them with a profound
                  understanding of the Hyperledger ecosystem.
                </li>
                <li>
                  Collaborated with a mentee to revamp Hyperledger&apos;s
                  onboarding experience, creating a comprehensive resource for
                  new community members, and empowering them with a profound
                  understanding of the Hyperledger ecosystem.
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li class="mb-10 ml-6 cursor-pointer">
          <span class="flex absolute -left-6 justify-center items-center w-10 h-10 rounded-full bg-[#5939C6]"></span>
          <div class="flex-col relative ml-10 border-l-[16px] border-[#5939C6] min-h-48 p-4 rounded-xl border   hover:shadow-2xl shadow-slate-200">
            <h1 class="text-xl md:text-2xl mb-10 sm:mb-6 font-semibold text-gray-800 h-10">
              LFX’22 Mentee Hyperledger Foundation
            </h1>
            <div class="text-xl font-semibold text-black h-10 absolute -top-10 -right-14">
              <Image
                src="/rocket.svg"
                height="150px"
                width="150px"
                className="absolute h-96 w-96 -top-10 right-0 z-0"
              />
            </div>
            <div className="text-slate-700 sm:w-11/12">
              <ul class="list-disc ml-10 space-y-4">
                <li>
                  Conceptualized and designed website mockups and Created
                  Frontend for Start-here-Hyperledger
                </li>
                <li>
                  Resulting in a 40% increase in user engagement and
                  streamlining the onboarding process for new contributors.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Timeline;
