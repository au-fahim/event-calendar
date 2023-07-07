"use client"

import { createContext, useState } from "react"

export const CalendarContext = createContext()

let dt = new Date(),
  currMonth = dt.getMonth(),
  date = dt.getDate(),
  year = dt.getFullYear();
  
  export default function CalendarProvider({ children }) {
  const [month, setMonth] = useState(currMonth);
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  
  // GET WEEK SHORT NAME (Sat, Sun, Mon, etc.)
  const weekShortString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "short",
    })
  
  // const increaseMonth = () => {
  //   setCurrDate((prev) => {
  //     return { ...prev, "month": (month += 1) };
  //   });
  // };
  // const decreaseMonth = () => {};

  let calendarValue = {
    month,
    setMonth,
    weekShortString,
    firstDayOfMonth,
    lastDateOfMonth,
  };

  return (
    <CalendarContext.Provider value={calendarValue}>
      {children}
    </CalendarContext.Provider>
  )
}