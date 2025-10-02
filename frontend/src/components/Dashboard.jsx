import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Tag, Users, Image } from "lucide-react";
import "./styles/Dashboard.css";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("userId"); // logged-in user

  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/events/my-events/${userId}`)
        .then(res => res.json())
        .then(data => setEvents(data))
        .catch(err => console.error("Failed to fetch user events:", err));
    }
  }, [userId]);

  return (
    <div className="dashboard-container">
      <h1>My Events Dashboard</h1>
      <button onClick={() => window.location.href="/create-event"}>+ Create New Event</button>

      {events.length === 0 ? (
        <p>No events created yet. Click above to create one!</p>
      ) : (
        <div className="events-grid">
          {events.map(event => (
            <div key={event._id} className="event-card">
              <img
                src={event.image ? `http://localhost:5000/uploads/${event.image}` : ""}
                alt={event.eventName}
                className="event-image"
              />
              <h2>{event.eventName}</h2>
              <p><Calendar size={16} /> {new Date(event.date).toLocaleDateString()}</p>
              <p><Clock size={16} /> {event.time}</p>
              <p><MapPin size={16} /> {event.location}</p>
              <p><Tag size={16} /> {event.category}</p>
              <div className="tickets-info">
                <p><Users size={16} /> VIP: ${event.tickets.vip.price} ({event.tickets.vip.capacity})</p>
                <p><Users size={16} /> Normal: ${event.tickets.normal.price} ({event.tickets.normal.capacity})</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
