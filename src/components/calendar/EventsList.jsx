"use client"

import { EventContext } from "@/context/EventContext";
import { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi2";

export default function EventsList () {
  const {events, addEvent, removeEvent} = useContext(EventContext)

  const allCalendarEvents = events.map((event, index) => (
    <div
      key={index}
      className="border-b py-2 px-2 rounded-md text-sm hover:bg-slate-50 flex flex-row justify-between items-center"
    >
      <div>
        <h1 className="capitalize">{event.title}</h1>
        <span className="text-xs">
          {event.date} - {event.time}
        </span>
      </div>
      <button className="w-8 h-8 rounded-md bg-white flex items-center justify-center hover:text-red-500" onClick={() => removeEvent(event.id)}>
        <HiOutlineTrash size={20} />
      </button>
    </div>
  ));

  return (
    <aside className="h-[80vh] border rounded-md flex flex-col justify-between overflow-hidden">
      {/* Event List Top Section */}
      <div className="h-full overflow-hidden relative group">
        <header className="bg-slate-50 flex flex-col gap-2 py-2 px-2 border-b z-30">
          <select className="px-2 py-2 rounded-md border text-sm">
            <option value="upcomming">Upcomming Events</option>
            <option value="all">All Events</option>
            <option value="completed">Completed Events</option>
            <option value="bymonth">Selected Month</option>
          </select>

          <nav>
            <div className="rounded-md text-sm overflow-hidden border bg-slate-50 flex flex-row">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-md"
                placeholder="Search your event"
              />
            </div>
          </nav>
        </header>

        <main className="h-3/4 ml-2 my-2 overflow-y-scroll">
          {events.length > 0 ? (
            <div className="flex flex-col items-stretch gap-0.5">
              {allCalendarEvents}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center">
              <span className="text-gray-300">Empty List</span>
            </div>
          )}
        </main>
        {/* For Scroll Bar Cover */}
        {/* <div className="w-2.5 h-4/5 absolute right-0 bottom-0 bg-white group-hover:bg-transparent transition-all duration-500 opacity-100 group-hover:opacity-0 z-20 group-hover:-z-30"></div> */}
      </div>

      <footer className="mx-2 my-2">
        <button className="w-full py-2 px-2 rounded-md bg-blue-500 text-white text-center">
          Add Event
        </button>
      </footer>
    </aside>
  );
}