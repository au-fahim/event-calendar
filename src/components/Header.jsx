"use client"

import { useContext } from "react";
import {
  HiOutlineMenu,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineCalendar,
} from "react-icons/hi";
import { VscChevronLeft, VscChevronRight, VscAccount } from "react-icons/vsc";


import MainWrapper from "./MainWrapper";
import ViewNav from "./Nav/ViewNav";
import { CalendarContext } from "@/context/CalendarContext";

export default function Header() {
  const calendarDate = useContext(CalendarContext);

  let {
    nav,
    setNav,
    dt,
    currMonth,
    currYear,
    monthNames,
    weekShortString,
    monthLongString,
    firstDayOfMonth,
    lastDateOfMonth,
  } = calendarDate;

  return (
    <header className="border-b sticky top-0 bg-white">
      <MainWrapper>
        <div className="flex flex-row gap-10 lg:gap-20 h-14">
          {/* LOGO */}
          <div className="grow-0 flex flex-row gap-4 items-center">
            <div className="md:hidden">
              <HiOutlineMenu size={24} />
            </div>

            <div className="flex flex-row gap-2 items-center text-xl font-bold">
              <HiOutlineCalendar size={24} />
              <h1>Calendar</h1>
            </div>
          </div>

          {/* CURRENT DATE STATUS */}
          <nav className="grow flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center">
              {/* GO TO TODAY's DATE */}
              <button
                onClick={() => setNav(0)}
                className="text-btn"
              >
                Today
              </button>

              {/* MONTH LEFT RIGHT SWITCH BUTTON */}
              <div className="flex flex-row gap-1">
                {/* SWITCH TO PREVIOUS MONTH */}
                <button onClick={() => setNav((nav -= 1))} className="icon-btn">
                  <HiOutlineChevronLeft />
                </button>

                {/* SWITCH TO NEXT MONTH */}
                <button onClick={() => setNav((nav += 1))} className="icon-btn">
                  <HiOutlineChevronRight />
                </button>
              </div>

              {/* CURRENT MONTH STATUS */}
              <h1>
                {monthLongString} {currYear}
              </h1>

              
            </div>

            <div className="flex flex-row gap-4 items-center">
              {/* DAY, WEEK, MONTH NAVIGATION */}
              <ViewNav />

              {/* USER PROFILE BUTTON */}
              <VscAccount size={22} />
            </div>
          </nav>
        </div>
      </MainWrapper>
    </header>
  );
}