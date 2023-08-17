"use client"

import { EventContext } from "@/context/EventContext";
import { useContext, useEffect, useRef, useState } from "react";
import { HiX, HiCheckCircle, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi";

// const time = new Date().getTime();

export default function CreateEventForm({
  modalShow,
  setModalShow,
  selectedDate,
}) {
  const eventContext = useContext(EventContext);
  const { eventsData, addEvent, updateEvent, removeEvent } = eventContext;

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      timeStyle: "short",
    })
  );


  const titleInputRef = useRef(null);

  // FOR DEFAULT FOCUSING ON TITLE_TEXT INPUT BOX AFTER MODAL SHOW
  useEffect(() => {
    if (modalShow && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [modalShow]);

 
  // FORMAT (TIME DISPLAY SYSTEM) :: 24 HOUR CLOCK TO 12 HOUR CLOCK
  const formatTimeSystem = (time) => {
    let [hour, minutes] = time.split(":");
    let ampm = hour < 12 ? "AM" : "PM";

    hour = hour === "00" || hour === "12" ? "12" : hour % 12;

    const formattedTime = `${hour}:${minutes} ${ampm}`;
    return formattedTime;
  };

  const addEventHandler = (e) => {
    e.preventDefault();

    addEvent({
      id: Math.floor(Math.random() * 100000),
      date,
      time,
      title,
      details,
    });

    setModalShow(false);
  };

  return (
    <>
      <div className="flex flex-col gap-7 py-4 px-4 shadow-md rounded-md bg-white">
        <header className="flex flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Add Event</h1>
            <p className="text-sm flex flex-row gap-1 items-center text-gray-500">
              <HiOutlineCalendar />
              {date}
              &nbsp; &nbsp;
              <HiOutlineClock />
              {formatTimeSystem(time)}
            </p>
          </div>
          <button
            onClick={() => setModalShow(false)}
            className="px-1 py-1 rounded-md border bg-white hover:bg-slate-50 group"
          >
            <HiX className="fill-gray-500 group-hover:fill-black" />
          </button>
        </header>

        <form onSubmit={addEventHandler} className="flex flex-col gap-6">
          <div>
            <div className="border rounded-md py-2 px-2 relative bg-white focus-within:border-black text-gray-400 focus-within:text-black">
              <label
                htmlFor="event-title"
                className="text-sm absolute -top-3 left-2 bg-white px-1 font-medium"
              >
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ref={titleInputRef}
                id="event-title"
                placeholder="Add Event Title"
                className="w-full outline-none px-1"
                required
              />
            </div>

            {/* ERROR MESSAGE */}
            {/* <span className="text-sm text-red-600 px-2">
                  Please Enter Event Title
                </span> */}
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div>
              <div className="border rounded-md py-2 px-2 relative bg-white focus-within:border-black text-gray-400 focus-within:text-black">
                <label
                  htmlFor="event-time"
                  className="text-sm absolute -top-3 left-2 bg-white px-1 font-medium"
                >
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="w-full outline-none px-1"
                  id="event-time"
                  required
                />
              </div>
              {/* ERROR MESSAGE */}
              {/* <span className="text-sm text-red-600 px-2">
                    Please Enter Event Time
                  </span> */}
            </div>

            <div className="border rounded-md py-2 px-2 relative bg-white focus-within:border-black text-gray-400 focus-within:text-black">
              <label
                htmlFor="event-date"
                className="text-sm absolute -top-3 left-2 bg-white px-1 font-medium"
              >
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                className="w-full outline-none px-1 text-sm"
                id="event-date"
                required
              />
              {/* <select className="w-full outline-none px-1" id="event-color">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select> */}
            </div>
          </div>

          <div className="border rounded-md py-2 px-2 relative bg-white h-20 focus-within:border-black text-gray-400 focus-within:text-black">
            <label
              htmlFor="event-details"
              className="text-sm absolute -top-3 left-2 bg-white px-1 font-medium"
            >
              Description
            </label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full outline-none px-1"
              id="event-details"
              placeholder="Add Event Description"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-2 rounded-md bg-blue-500 text-white"
          >
            Add Event
          </button>
        </form>
      </div>
    </>
  );
}
