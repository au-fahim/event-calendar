"use client"

import { CalendarContext } from "@/context/CalendarContext"
import { useContext, useState } from "react"

import Modal from "../modal/Modal";
import CreateEventForm from "../modal/CreateEventForm";
import { EventContext } from '@/context/EventContext';

export default function MonthCalendar() {
  const [modalShow, setModalShow] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const calendarDate = useContext(CalendarContext)
  let {
    nav,
    setNav,
    dt,
    currMonth,
    currYear,
    weekShortString,
    monthLongString,
    firstDayOfMonth,
    lastDateOfMonth,
  } = calendarDate;
  
  const { events } = useContext(EventContext);

  const weekNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const lastDaysOfPrevMonth = weekNames.indexOf(weekShortString);

  // FORMATE TEXT STYLE (e.g: 1 --> 01)
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num
  }

  const showModalFunc = (date) => {
    setSelectedDate(`${currYear}-${formatNumber(currMonth + 1)}-${formatNumber(date)}`);
    setModalShow(true);
  }

  console.log("Selected Date" + selectedDate)


  return (
    <main className="py-4">
      <div className="border-t border-l rounded-lg overflow-hidden">
        <header className="grid grid-cols-7 items-center justify-center bg-slate-50 py-2 border-b border-r">
          {weekNames.map((week, index) => (
            <div
              key={index}
              className="text-center uppercase font-medium text-slate-800"
            >
              {week}
            </div>
          ))}
        </header>

        <section className="grid grid-cols-7 h-[78vh]">
          {/* ARRAY OF PREVIOUS MONTH'S LAST DATES */}
          {Array.from({ length: lastDaysOfPrevMonth }).map((_, index) => (
            <div
              key={index}
              className={`border-r border-b bg-transparent select-none`}
            ></div>
          ))}

          {/* ARRAY OF CURRENT MONTH */}
          {Array.from({ length: lastDateOfMonth }).map((_, index) => (
            <div
              key={index}
              onClick={() => showModalFunc(index + 1)}
              className={`border-r border-b hover:bg-slate-50 ${
                index + 1 === new Date().getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear() &&
                "bg-slate-100 font-semibold text-black"
              }`}
            >
              <div className="py-2 px-3 text-sm md:text-base">{index + 1}</div>

              {/* EVENT'S CONTENT */}
              <div className="flex flex-col gap-1">
                {events?.map((event) => {
                  if (
                    `${currYear}-${formatNumber(currMonth + 1)}-${formatNumber(index + 1)}` === event.date
                  ) {
                    
                    return (
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-sm text-xs ml-1 text-black bg-blue-100 hover:bg-blue-300"
                      >
                        <span className="line-clamp-1">{event.title}</span>
                      </button>
                    );
                  }
                })}

                {/* <button
                  onClick={(e) => e.stopPropagation()}
                  className="pl-1 rounded-sm text-xs ml-2 text-white bg-orange-500 hover:bg-orange-600"
                >
                  <span className="line-clamp-1">
                    Have a Meeting with Shovon.
                  </span>
                </button>
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="pl-1 rounded-sm text-xs ml-2 text-white bg-indigo-500 hover:bg-indigo-600"
                >
                  <span className="line-clamp-1">
                    Have a Meeting with Shovon.
                  </span>
                </button> */}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* CREATE NEW EVENT MODAL */}
      {modalShow && (
        <Modal setModalShow={setModalShow}>
          {/* CREATE NEW MODAL CONTENT */}
          <CreateEventForm
            modalShow={modalShow}
            setModalShow={setModalShow}
            selectedDate={selectedDate}
          />
        </Modal>
      )}
    </main>
  );
}