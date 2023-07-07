"use client"

import { createContext, useState } from "react"

export const CalendarContext = createContext()

let dt = new Date(),
  month = dt.getMonth(),
  date = dt.getDate(),
  year = dt.getFullYear();

const firstDayOfMonth = new Date(year, month, 1);
const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

// GET WEEK SHORT NAME (Sat, Sun, Mon, etc.)
  const monthLongString = firstDayOfMonth.toLocaleDateString("en-us", { month: "long" }),
    monthShortString = firstDayOfMonth.toLocaleDateString("en-us", { month: "short"}),
    weekLongString = firstDayOfMonth.toLocaleDateString("en-us", { weekday: "long" }),
    weekShortString = firstDayOfMonth.toLocaleDateString("en-us", { weekday: "short" });

export default function CalendarProvider({ children }) {
  const [currDate, setCurrDate] = useState({ dt, month, date, year });
  const [dateString, setDateString] = useState({monthShortString, monthLongString, weekShortString, weekLongString})

  let calendarValue = {
    currDate,
    setCurrDate,
    dateString,
    firstDayOfMonth,
    lastDateOfMonth,
  };

  return (
    <CalendarContext.Provider value={calendarValue}>
      {children}
    </CalendarContext.Provider>
  )
}