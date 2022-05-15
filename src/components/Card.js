import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="badgeCard">{badgeText}</div>}
            <img src={`${props.item.coverImg}`} className="imageCard" />
            <div className="statCard">
                <img src="star.png" className="starCard" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="titleCard">{props.item.title}</p>
            <p className="priceCard"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}