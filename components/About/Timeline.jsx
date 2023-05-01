import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image'

function Timeline() {
    return (

        <div className='w-full mt-10'>

            <ol class="relative border-l-8 border-[#5939C6]">
                <li class="mb-10 ml-6 ">
                    <span class="flex absolute -left-6 justify-center items-center w-10 h-10 rounded-full bg-[#5939C6]">
                    </span>
                    <div class=" relative ml-10 border-l-[16px] border-[#5939C6] h-48 p-4 rounded-xl border shadow-xl">
                        <h1 class="text-xl font-semibold text-black h-10">Software Engineer @Zerodha</h1>
                        <div class="text-xl font-semibold text-black h-10 absolute top-0 right-0">
                            <Image src="/rocket.svg" height="150px" width="150px" className='absolute h-96 w-96 -top-10 right-0 z-0' />
                        </div>
                        <div>
                            <ol>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                            </ol>
                        </div>
                    </div>
                </li>
                <li class="mb-10 ml-6 ">
                    <span class="flex absolute -left-6 justify-center items-center w-10 h-10 rounded-full bg-[#5939C6]">
                    </span>
                    <div class=" relative ml-10 border-l-[16px] border-[#5939C6] h-48 p-4 rounded-xl border shadow-xl">
                        <h1 class="text-xl font-semibold text-black h-10">Software Engineer @Zerodha</h1>
                        <div class="text-xl font-semibold text-black h-10 absolute top-0 right-0">
                            <Image src="/rocket.svg" height="150px" width="150px" className='absolute h-96 w-96 -top-10 right-0 z-0' />
                        </div>
                        <div>
                            <ol>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects
                                </li>
                            </ol>
                        </div>
                    </div>
                </li>


            </ol>
        </div>
    )
}

export default Timeline




