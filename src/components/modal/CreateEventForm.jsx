import { HiX, HiCheckCircle } from "react-icons/hi";

export default function CreateEventForm({
  headerText,
  submitBtnText,
  setModalShow,
}) {
  return (
    <>
      <div className="py-4 px-4 shadow-md rounded-md bg-white">
        <header className="flex flex-row justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">{headerText}</h1>
          <button
            onClick={() => setModalShow(false)}
            className="px-1 py-1 rounded-md border bg-white hover:bg-slate-50 group"
          >
            <HiX className="fill-gray-500 group-hover:fill-black" />
          </button>
        </header>

        <form className="flex flex-col gap-6">
          <div>
            <div className="border rounded-md py-2 px-2 relative bg-white">
              <label
                htmlFor="event-title"
                className="text-sm absolute -top-3 left-2 bg-white px-1 text-gray-400 font-medium"
              >
                Title
              </label>
              <input
                type="text"
                className="w-full outline-none px-1"
                id="event-title"
                placeholder="Add Event Title"
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
              <div className="border rounded-md py-2 px-2 relative bg-white">
                <label
                  htmlFor="event-time"
                  className="text-sm absolute -top-3 left-2 bg-white px-1 text-gray-400 font-medium"
                >
                  Time
                </label>
                <input
                  type="time"
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

            <div className="border rounded-md py-2 px-2 relative bg-white">
              <label
                htmlFor="event-color"
                className="text-sm absolute -top-3 left-2 bg-white px-1 text-gray-400 font-medium"
              >
                Priority
              </label>
              <select className="w-full outline-none px-1" id="event-color">
                <option value="high">
                  High
                </option>
                <option value="medium">
                  Medium
                </option>
                <option value="low">
                  Low
                </option>
              </select>
            </div>
          </div>

          <div className="border rounded-md py-2 px-2 relative bg-white h-20">
            <label
              htmlFor="event-desc"
              className="text-sm absolute -top-3 left-2 bg-white px-1 text-gray-400 font-medium"
            >
              Description
            </label>
            <input
              type="text"
              className="w-full outline-none px-1"
              id="event-desc"
              placeholder="Add Event Description"
            />
          </div>

          <button
            type="submit"
            className="py-2 px-2 rounded-md bg-blue-500 text-white"
          >
            {submitBtnText}
          </button>
        </form>
      </div>
    </>
  );
}
