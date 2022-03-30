import React from 'react'

export default function Card(card){
  let badgeText
  if(card.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(card.location === 'Online'){
    badgeText = `ONLINE & REMANING ${card.openSpots}`
  } else if(card.location !== 'Online'){
    badgeText = `REMANING ${card.openSpots}`
  }


    return (
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={`../images/${card.coverImg}`} className="card-image" />
        <div className="card-stats">
          <img src="../images/star.png" className="card-star" />
          <span>{card.stats.rating}</span>
          <span className="grey">({card.stats.reviewCount}) •</span>
          <span className="grey">{card.location}</span>
        </div>
        <p>{card.title}</p>
        <p>
          <b>From ${card.price}</b> / person
        </p>
      </div>
    );
}