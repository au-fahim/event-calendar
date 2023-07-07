"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  {
    name: "Month",
    link: "/month"
  },
  {
    name: "Week",
    link: "/week"
  },
  {
    name: "Day",
    link: "/day"
  },
]

export default function () {
  const pathname = usePathname();

  return (
    <>
      {/* DAY, WEEK, MONTH NAVIGATION */}
      <div className="py-1 px-1 bg-slate-50 flex flex-row rounded-md border">
        {navItem.map((item, index) => (
          <Link href={item.link} key={index}>
            <button className={`py-1 px-4 rounded-md text-sm ${pathname == item.link && "active-nav-btn"}`}>
              {item.name}
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}