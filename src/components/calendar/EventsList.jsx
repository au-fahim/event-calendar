export default function EventsList () {
  return (
    <aside className="h-[78vh] border rounded-md flex flex-col justify-between overflow-hidden">
      <div>
        <div className="bg-slate-50 py-2 text-center">
          <span>Events</span>
          <nav>
            <div className="py-1 px-1 bg-slate-50 flex flex-row">
              <button className={`py-1 px-4 rounded-md text-sm`}>All</button>
              <button className={`py-1 px-4 rounded-md text-sm`}>
                Current Month
              </button>
            </div>
          </nav>
        </div>

        <main className="mx-2 my-2">
          <span className="text-center">Empty List</span>
        </main>
      </div>

      <footer className="mx-2 my-2">
        <button className="w-full py-2 px-2 rounded-md bg-blue-500 text-white text-center">Add Event</button>
      </footer>
    </aside>
  );
}