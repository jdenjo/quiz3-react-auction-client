import React from "react";
import FormErrors from "./FormErrors";

function PostForm(props) {
 const { errors = [], onSubmit } = props;

 function handleSubmit(event) {
   event.preventDefault();
   const { currentTarget } = event;
   const fD = new FormData(currentTarget);

   if (typeof onSubmit === "function") {
       
     onSubmit({
       amount: fD.get("amount"),
       auction_id: props.auction_id,
     });
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
   </form>
 );
}

export default PostForm;
