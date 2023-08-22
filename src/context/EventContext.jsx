"use client"

import { createContext, useEffect, useState } from "react";


export const EventContext = createContext({
  events: [
    {
      id: "",
      date: "",
      time: "",
      title: "",
      details: "",
      category: "",
    },
  ],
  addEvent: () => {},
  updateEvent: () => { },
  removeEvent: () => {},
});

export default function EventDataProvider({ children }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsData = JSON.parse(localStorage.getItem("events"));

    !!eventsData && setEvents(eventsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events])


  const addEvent = (eventItem) => {
    setEvents((prev) => [...prev, eventItem]);
  };

  const updateEvent = () => {}
  
  const removeEvent = (id) => {
    const updatedEvents = events.filter(event => event.id !== id)
    setEvents(updatedEvents)
  };

  let initialState = {
    events,
    addEvent,
    updateEvent,
    removeEvent,
  };

  return (
    <EventContext.Provider value={initialState}>
      {children}
    </EventContext.Provider>
  );
}