import { useState } from "react";
import dayjs from "dayjs";

function CalendarButton({onClick}){
  return (
    <div className="absolute text-[10px] text-gray-800 cursor-pointer bottom-[15px] right-[15px] " onClick = {onClick}>
      더보기 &gt;
    </div>
  )
}

const Calendar = () => {
  const today = dayjs();
  const [_selectedDate, setSelectedDate] = useState(today);

  const offsets = [-3, -2, -1, 0, 1, 2, 3];
  const dates = offsets.map((offset) => today.add(offset, "day"));

  return (
    <div className="flex justify-end p-4">
    <div className="relative bg-gray-100 rounded-3xl p-4 w-[400px] h-[450px]">
      <h1 className="text-sm font-semibold mb-2">캘린더</h1>
      <p className="text-s text-gray-600 mb-1">{today.format("M월")}</p>

      <div className="flex justify-between items-center mb-2">
        {dates.map((date) => {
          const isToday = date.isSame(today, "date");
          const isPast = date.isBefore(today, "date");
          return (
            <button
              onClick={() => setSelectedDate(date)}
              className={`w-6 h-6 flex items-center justify-center text-xs rounded-full
                ${isToday ? "bg-[#404AA6] text-white" : isPast ? "text-gray-400" : "text-gray-800"}
              `}
            >
                {date.date()}
            </button>
          );
        })}
        <CalendarButton text="캘린더" onClick={() => window.location.href = "/calendar"}/>
       </div>
      </div>
      <hr className="border-t border-gray-800" />
    </div>
  );
};

export default Calendar;