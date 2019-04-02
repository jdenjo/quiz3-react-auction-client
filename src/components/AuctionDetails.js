import React from 'react'

function AuctionDetails(props) {
 return (
   <div className="AuctionDetails">
     <h1>{props.title}</h1>
     
     <p> Description: {props.description}<br />

    Started: {new Date (props.created_at).toLocaleString()}<br /> 
    Ends: {new Date (props.end).toLocaleString()}<br />
    Reserve price: ${props.reserve}</p>

   </div>
 )
}

AuctionDetails.propTypes = {}

export default AuctionDetails
