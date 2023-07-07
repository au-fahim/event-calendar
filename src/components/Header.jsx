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

  let { currDate, setCurrDate, dateString, firstDayOfMonth } = calendarDate;
  let { dt, month, date, year } = currDate;
  let { monthLongString } = dateString;

  return (
    <header className="border-b sticky top-0 bg-white">
      <MainWrapper>
        <div className="flex flex-row gap-20 h-14">
          {/* LOGO */}
          <div className="grow-0 flex flex-row gap-4 items-center">
            <div className="lg:hidden">
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
              {/* GO TO TODAY BUTTON */}
              <button
                onClick={() =>
                  setCurrDate({ ...currDate, month: new Date().getMonth() })
                }
                className="text-btn"
              >
                Today
              </button>

              {/* MONTH LEFT RIGHT SWITCH BUTTON */}
              <div className="flex flex-row gap-1">
                {/* SWITCH TO PREVIOUS MONTH */}
                <button
                  onClick={() =>
                    setCurrDate({ ...currDate, month: (month -= 1) })
                  }
                  className="icon-btn"
                >
                  <HiOutlineChevronLeft />
                </button>

                {/* SWITCH TO NEXT MONTH */}
                <button
                  onClick={() =>
                    setCurrDate({ ...currDate, month: (month += 1) })
                  }
                  className="icon-btn"
                >
                  <HiOutlineChevronRight />
                </button>
              </div>

              {/* CURRENT MONTH STATUS */}
              <h1>
                {monthLongString} {year}
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