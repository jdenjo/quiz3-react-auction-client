import React from "react";
import FormErrors from "./FormErrors";
import $ from "jquery";


function PostForm(props) {
 const { errors = [], onSubmit, currentPrice } = props;


 function handleSubmit(event) {
   event.preventDefault();
   const { currentTarget } = event;
   const fD = new FormData(currentTarget);

   $("#bid-warning").html("")
   $("#bid-success").html("")

   if( fD.get("amount") > currentPrice){


    if (typeof onSubmit === "function") {


     onSubmit({
       amount: fD.get("amount"),
       auction_id: props.auction_id,
     });

     

     $("#bid-success").html("Bid succeeded: You are now the highest bidder")
   }
   }
   else{

    $("#bid-warning").html("Bid failed: must be higher than highest bid")
   }

   
 }

 return (
   <form className="PostForm" onSubmit={handleSubmit} >
   
     <div>
       <label htmlFor="Amount">Bid Amount ($CAD)</label> <br />
       <FormErrors forField="title" errors={errors} />
       <input name="amount" id="amount" />
       <input type="submit" value="Bid on Item" />
     </div>
     <br />
     <div id="bid-warning" />
     <div id="bid-success" />
   </form>
 );
}

export default PostForm;
