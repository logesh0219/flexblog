/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './GatsbyCard.css'

const GatsbyCard = ({GatsbyData}) => {

  return (
    <div className='container'>
    <div className="card-data-wrapper">
      <div className="card-title-container">
        <div className='card-heading'>
          <h2 className="card-heading-text">
            {GatsbyData.category}
          </h2>
        </div>
        <button className="view-more-btn card-btn">View More</button>
      </div>
      <div className="divider"></div>
      <div className="card-data-container">
        {
          GatsbyData.data.map((item, index) => (
            <div key={index} className="card-data-wrapper-container">
              <div className="card-data-details">
                <div className="card-data">
                  <div className="card-data-img">
                    <div className="left-side-card-img" style={{ backgroundColor: GatsbyData.background, color: GatsbyData.color }}>
                      <div className="left-side-card-wrapper">
                        <div className="card-data-svg">{GatsbyData.svgIcon}</div>
                        <div className="card-name">{GatsbyData.category}</div>
                      </div>
                      <div className="card-data-bg-img"></div>
                    </div>
                  </div>
                  <div className="card-data-content">
                    <div className="card-data-btn">
                      <a href='#' className="card-data-title-btn" style={{backgroundColor:GatsbyData.background,color:GatsbyData.color}}>{GatsbyData.category}</a>
                    </div>
                    <h2 className="card-heading-title">{item.title}</h2>
                    <div className="card-item-profile-data">
                      <h2 className="card-profile-name">{item.author}</h2>
                      <h2 className="card-profile-date">{item.date}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default GatsbyCard