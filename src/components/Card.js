import React from 'react'
import './Card.css'
export default function Card(props) {
    return (
        <div className='description'>
            <img src={props.imageUrl} alt="" srcset="" />
            <div className="card-details">

           <div className="location-country">
                <i className = "fa fa-map-marker-alt" aria-hidden='true'/> {props.location}
            </div>
            <div className="location-place">
                    {props.title}
            </div>
            <div className="duration">
                {props.startDate}-{props.endDate}
            </div>
            <div className="about">
                    {props.description}
                    
            </div>
            </div>

        </div>
    )
}
