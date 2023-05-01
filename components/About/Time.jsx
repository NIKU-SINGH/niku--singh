import React from 'react'

function Time() {
    return (
        <div>
            <div class="mx-auto relative py-10 p-10">
                <div class="border-l-8 border-l-[#5939C6] mt-10 p-2"> 
                    {/* <!-- Card 1 --> */}
                    <div class="w-10 h-10 bg-red-400 absolute  transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded-3xl mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Dot Follwing the Left Vertical Line --> */}
                        <div class="w-10 h-10 bg-[#5939C6] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        {/* <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div> */}

                        {/* <!-- Content that showing in the box --> */}
                        <div class="flex-auto h-96 rounded-3xl">
                            <h1 class="text-lg">Day 1</h1>
                            <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>

                    {/* <!-- Card 2 --> */}
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Dot Follwing the Left Vertical Line --> */}
                        <div class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div class="flex-auto">
                            <h1 class="text-lg">Day 1</h1>
                            <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>

                    {/* <!-- Card 3 --> */}
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Dot Follwing the Left Vertical Line --> */}
                        <div class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div class="flex-auto">
                            <h1 class="text-lg">Day 1</h1>
                            <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>

                    {/* <!-- Card 4 --> */}
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        {/* <!-- Dot Follwing the Left Vertical Line --> */}
                        <div class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div class="flex-auto">
                            <h1 class="text-lg">Day 1</h1>
                            <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>

                    {/* <!-- Card 5 --> */}
                    <div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
                        {/* <!-- Dot Follwing the Left Vertical Line --> */}
                        <div class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                        {/* <!-- Line that connecting the box with the vertical line --> */}
                        <div class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

                        {/* <!-- Content that showing in the box --> */}
                        <div class="flex-auto">
                            <h1 class="text-lg">Day 1</h1>
                            <h1 class="text-xl font-bold">Orientation and Briefing on Uniliver basics</h1>
                            <h3>Classroom</h3>
                        </div>
                        <a href="#" class="text-center text-white hover:text-gray-300">Download materials</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Time