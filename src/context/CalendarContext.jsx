"use client"

import { createContext, useEffect, useState } from "react"

export const CalendarContext = createContext()


const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
  
export default function CalendarProvider({ children }) {
  const [nav, setNav] = useState(0)
  const dt = new Date()

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav)
  }
  
  let currDate = dt.getDate();
  let currMonth = dt.getMonth();
  let currYear = dt.getFullYear();

  const firstDayOfMonth = new Date(currYear, currMonth, 1);
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();

  // GET WEEK SHORT NAME (Sat, Sun, Mon, etc.)
  const weekShortString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "short",
  });
  
  const monthLongString = firstDayOfMonth.toLocaleDateString("en-us", {
    month: "long",
  });
  
  

  let calendarValue = {
    nav,
    setNav,
    dt,
    currDate,
    currMonth,
    currYear,
    monthNames,
    weekShortString,
    monthLongString,
    firstDayOfMonth,
    lastDateOfMonth,
  };

  return (
    <CalendarContext.Provider value={calendarValue}>
      {children}
    </CalendarContext.Provider>
  )
}