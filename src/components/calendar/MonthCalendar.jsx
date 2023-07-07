"use client"

import { CalendarContext } from "@/context/CalendarContext"
import { useContext } from "react"

export default function MonthCalendar() {
  const calendarDate = useContext(CalendarContext)

  let { month, setMonth, weekShortString, firstDayOfMonth, lastDateOfMonth } =
    calendarDate;
  

  const weekNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  // const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  // const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  const lastDaysOfPrevMonth = weekNames.indexOf(weekShortString);

  console.log(lastDaysOfPrevMonth);
  console.log(weekShortString);


  return (
    <section className="py-4">
      <div className="border-t border-l rounded-lg overflow-hidden">
        <header className="grid grid-cols-7 items-center justify-center bg-slate-50 py-3 border-b border-r">
          {weekNames.map((week, index) => (
            <div
              key={index}
              className="text-center uppercase font-medium text-slate-800"
            >
              {week}
            </div>
          ))}
        </header>

        <main className="grid grid-cols-7">
          {Array.from({ length: lastDaysOfPrevMonth }).map((_, index) => (
            <div
              key={index}
              className={`h-36 border-r border-b bg-transparent select-none`}
            ></div>
          ))}

          {Array.from({ length: lastDateOfMonth }).map((_, index) => (
            <div
              key={index}
              className={`h-36 border-r border-b hover:bg-slate-50 ${
                index + 1 === new Date().getDate() && "bg-slate-50 font-bold"
              }`}
            >
              <h1 className="py-2 px-3 text-sm md:text-base">{index + 1}</h1>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}