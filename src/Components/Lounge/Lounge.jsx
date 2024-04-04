import React from 'react'

import imageGrid from "../../assets/imageGrid.png"

function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={imageGrid} alt="grid"  />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <span className='gridTitle'>
                Help through the Airport
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Care on the Flight
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>

            <div className="singleGrid">
              <span className='gridTitle'>
                Chauffe-drive Service
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Lounge
