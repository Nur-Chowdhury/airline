import React from 'react'

import paris from '../../assets/paris.jpg';

import user from "../../assets/user1.jpg";

function Travelers() {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top Travelers of this month!</h2>

        <div className="travelersContainer grid">
          {/*Single Passenger card */}
          <div className="singleTraveler">
            <img src={paris} alt="Paris" className='designationImage' />

            <div className="travelerDetails">
              <div className="travelerImage">
                <img src={user} alt="User" className='TravelerImage'  />
              </div>
              <div className="travelerName">
                <span>Lorem</span>
                <p>@Ipsum</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Travelers
