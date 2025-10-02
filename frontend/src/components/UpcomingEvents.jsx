import React from 'react';
import up from '../assets/up1.png';
import up2 from '../assets/up2.png';

import up3 from '../assets/up3.png';

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events container">
      <h2 className="section-title">Upcoming Events</h2>
      <p className="section-sub">Don't miss these exciting happenings!</p>
      <div className="event-grid">
        {/* Event Card 1 */}
        <div className="event-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <img src={up} alt="Music Fiesta" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
          <h3 class="find">Music Fiesta</h3>
          <p class="find">Live bands performing all night! 🎸</p>
          <span className="event-date">Oct 25, 2025</span>
        </div>

        {/* Event Card 2 */}
        <div className="event-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <img src={up2} alt="Art Exhibition" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
          <h3 class="find">Art Exhibition</h3>
          <p class="find"> Explore creative artworks by local artists. 🎨</p>
          <span className="event-date">Nov 2, 2025</span>
        </div>

        {/* Event Card 3 */}
        <div className="event-card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <img src={up3} alt="Food Carnival" style={{ width: '120px', height: '120px', objectFit: 'cover' }} />
          <h3 class="find">Food Carnival</h3>
          <p class="find">Delicious treats and fun food stalls! 🍔</p>
          <span className="event-date">Nov 10, 2025</span>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
