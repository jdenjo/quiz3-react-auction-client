import React, { Component } from "react";
import { Auction } from "../Requests";
import AuctionForm from "./AuctionForm"

class AuctionNewPage extends Component {
   constructor(props) {
       super(props);

       this.state = {
           errors: []
       };

       this.createAuction = this.createAuction.bind(this);
   }

   createAuction(params) {

       Auction.create(params).then(data => {

           if (data.errors) {

               this.setState({
                   errors: data.errors
               });
           } else {
               this.props.history.push(`/Auctions/${data.id}`);
           }
       });
   }

   render() {
       const { errors = [] } = this.state;

       return (
           <main>
               <h1>New Auction</h1>
               <AuctionForm  onSubmit={this.createAuction} />
           </main>
       );
   }
}

export default AuctionNewPage;
