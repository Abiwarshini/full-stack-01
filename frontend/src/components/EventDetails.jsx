import React, { useEffect, useState } from "react";

const EventShow = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (events.length === 0) return <p>No events found.</p>;

  return (
    <div className="event-show-container">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <img
            src={event.image ? `http://localhost:5000/uploads/${event.image}` : "https://picsum.photos/400/200"}
            alt={event.eventName}
          />
          <h3>{event.eventName}</h3>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventShow;
