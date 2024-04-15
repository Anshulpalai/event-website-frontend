import React, { useState, useEffect } from 'react';
import '../App.css';
import '../styles/RecommendedShow.css'

function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

function RecommendedShow() {
    const [recommendedEvents, setRecommendedEvents] = useState([]);

    useEffect(() => {
        fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco")
            .then(res => res.json())
            .then(data => {
                // Update the state with the fetched events
                setRecommendedEvents(data.events);
            })
            .catch(error => {
                console.error('Error fetching recommended events:', error);
            });
    }, []); // Empty dependency array to ensure useEffect only runs once

    return (
        <div className='absolute text-white text-xl font-bold recom-div'>
            <h4 className='py-3 recom-header'>Recommended Shows <i className='fa fa-arrow-right'></i></h4>
            <div className="scroll-container">
                {/* Render recommended events with horizontal scrolling */}
                <div className="cards-wrapper">
                    {recommendedEvents.map(event => (
                        <div key={event.eventName} className="card mx-3" style={{ background: `url(${event.imgUrl.replace("https://drive.google.com/file/d/", "https://drive.google.com/thumbnail?id=").replace("/view", "&sz=w1000")}) no-repeat center center/cover`, height: '293px', padding: '0px' }}>
                            <div className='card-content flex h-full justify-evenly' style={{ color: 'white', fontSize: '0.8rem', width: '220px' }}>
                                <div className='h-full flex flex-col items-center justify-end text-start'>
                                    <h4>Make Agree</h4>
                                    <p style={{fontSize: '0.6rem'}}><i class="fa fa-map-marker"></i> {event.cityName}</p>
                                </div>
                                <div className='h-full flex flex-col items-center justify-end gap-0'>
                                    <p style={{fontSize: '0.6rem'}}>{formatDate(event.date.replace("T00:00:00.000Z", ""))}<br/>{event.weather.replace(/.$/, "°C")} | {event.distanceKm.match(/.{1,2}/)[0]}km</p>
                                </div>
                                {/* Add more event details as needed */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendedShow;
