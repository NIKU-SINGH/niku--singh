import { Video } from "lucide-react";
import React from "react";

function ScheduleButton() {
  return (
    <div>
      <button className="px-8 py-4 bg-white rounded-md text-base flex gap-4 fixed bottom-10 right-10 z-50">
        <Video />
        Schedule a call
      </button>
    </div>
  );
}

export default ScheduleButton;
