import React from 'react'
import '../App.css'
import '../styles/Header-tablet.css'

function Header() {
    return (
        <>
            <div className="flex items-center px-4 py-3 top-class">
                <h2 className='text-xl mx-2' style={{ color: '#CF2D2D', fontWeight: '600' }}>BookUsNow</h2>
                <div className='flex gap-2 justify-between' style={{maxWidth: '62rem'}}>
                    <div className='search-category flex gap-2'>
                        <button className='bg-black text-white rounded-md p-2 category-btn' style={{ width: '9rem' }}> <i className='fa fa-bars mx-2'></i> Categories</button>
                        <input type="text" className='rounded-md px-1 category-inp' style={{ border: "1px solid #B0BABF", width: '25rem' }} />
                        <button className='search-btn show'><i className='fa fa-search'></i></button>
                    </div>
                    <div className='fav-sign flex justify-center items-center gap-2 p-1'>
                        <span className='cursor-pointer mx-2 favorites'>Favorites</span>
                        <span className='cursor-pointer favorites show fav-span'><i className='fa fa-heart'></i></span>
                        <button className='mx-2 sign-in-btn' style={{ border: '1px solid #B0BABF', padding: '0.5rem', borderRadius: '0.4rem' }}>Sign in</button>
                        <button className='mx-2 show' ><i className='fa fa-user'></i></button>
                    </div>
                </div>
            </div>

            <div className='bottom-class flex flex-wrap px-2 justify-around' style={{ maxWidth: '70rem' }}>
                <div className='location px-3 location-header'> <i class="fa fa-map-marker"></i> Mumbai, India</div>
                <div className="nav-items">
                    <ul className='flex gap-10 ul-items'>
                        <li><a href="#">LiveShows</a></li>
                        <li><a href="#">Streams</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Plays</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Activities</a></li>
                    </ul>
                </div>
            </div>
            <div className='header-landing-div flex flex-col justify-center items-center shadow-2xl'>
                <div className='text-center flex flex-col justify-center items-center absolute'>
                    <h1 className=' text-white font-bold text-center landing-header' style={{ width: '60%', fontWeight: '500' }}>Discover Exciting Events Happening Near You - Stay Tuned For Updates!</h1>

                    <p className='text-white text-center landing-para' style={{ width: '60%', textWrap: 'balance', padding: '5px 0px', fontWeight: '300' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, neque excepturi vel ex recusandae vitae beatae odio numquam cum quis? Delectus, eius. Quibusdam, alias provident ullam, repudiandae hic quo dolorum excepturi nulla, porro sint obcaecati voluptate. Optio enim saepe quae necessitatibus doloremque, eius ut possimus.</p>
                </div>
            </div>
        </>
    )
}

export default Header