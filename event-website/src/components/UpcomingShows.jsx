import React, { useEffect, useState } from 'react'
import '../styles/UpcomingShows.css'

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

function UpcomingShows() {
  const [upcomingShows, setUpcomingShows] = useState([]);

  useEffect(() => {
    fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming").then((res) => res.json()).then((data) => setUpcomingShows(data.events)).catch(error => {
      console.error('Error fetching recommended events:', error);
    });
  }, []);

  return (
    <div className='font-bold upcoming-div'>
      <h4>Upcoming Shows <i className='fa fa-arrow-right'></i></h4>
      <div className="flex flex-wrap upcom-div-card">
        {upcomingShows.map((event) => (
          <div key={event.eventName} className="flex flex-col mx-4 my-6 h-80 p-2" style={{ border: '1px solid #B0BABF', borderRadius: '0.8rem', width: '22rem' }}>
            <div style={{ position: 'relative' }}>
              <img src={event.imgUrl.replace("https://drive.google.com/file/d/", "https://drive.google.com/thumbnail?id=").replace("/view", "&sz=w300")} alt="card-images" style={{ borderRadius: '0.8rem', width: '100%' }} />
              <h4 style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1', backdropFilter: "blur(2px)",backgroundColor: 'rgba(0, 0, 0, 0.43)', color: 'white', fontSize: '1rem', width: '90%', padding: '7px 8px', borderRadius:'0.2rem' }}>{formatDate(event.date.replace("T00:00:00.000Z", ""))}</h4>
            </div>
            <div className='flex justify-around items-end'>
              <div className='flex flex-col'>
                <h4 className='upcom-card-header'>After note only</h4>
                <p className='text-sm' style={{color: ' #989090'}}><i class="fa fa-map-marker"></i> {event.cityName}</p>
              </div>
              <div>
                <p className='text-sm' style={{color: ' #989090'}}>{event.weather.replace(/.$/, "°C").replace(" ", ", ")} | {event.distanceKm.match(/.{1,2}/)[0]}km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingShows