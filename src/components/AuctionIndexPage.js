import React, { Component } from 'react'
import { Auction } from '../Requests';
import { Link } from "react-router-dom";

export class AuctionIndexPage extends Component {
 constructor(props) {
   super(props)
   this.state = {
     auctions: [],
     isLoading: true,
   };
 }
 componentDidMount() {
   console.log("mounting");
   Auction.all().then(auctions => {
     this.setState({
       auctions: auctions,
       isLoading: false,
     });
   })
 }

 render() {

   if (this.state.isLoading) {
     return <div>Loading ..</div>
   }

   if (!this.state.isLoading) {
     return (
       <div className="AuctionIndexPage">
         <h1>Auctions</h1>
         <ul>
           {this.state.auctions.map((auction) => {
             return (
               <li key={auction.id}>
                 <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
               </li>
             )
           })}
         </ul>
       </div>
     )
   }
 }
}

export default AuctionIndexPage
