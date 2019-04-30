
const BASE_URL = `http://localhost:3000/api/v1/`;

const Bid = {
    create(params) {
        return fetch(`http://localhost:3000/bids`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(params)
        }).then(res => res.json());
      },
      one(auctionID) {
        return fetch(`http://localhost:3000/bids/${auctionID}`).then(
          res => console.log(res.json())
          
        );
      }
}

const Auction = {
 // fetch all questions from server
 all() {
   return fetch(`${BASE_URL}auctions`).then(
     res => res.json()
   );
 },
 // fetch a single question
 one(id) {
   return fetch(`${BASE_URL}auctions/${id}`).then(res => res.json());
 },
 // creating a question
 create(params) {
   // `params` is an object that represents a question
   // { body: 'qBody', title: 'qTitle' }
   return fetch(`http://localhost:3000/auctions`, {
     method: "POST",
     credentials: "include",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(params)
   }).then(res => res.json());
 },
 
 // updating a question
 update(id, params) {
   return fetch(`${BASE_URL}posts/${id}`, {
     method: "PATCH",
     credentials: "include",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(params)
   }).then(res => res.json());
 },
 
 delete(id) {
   return fetch(`${BASE_URL}posts/${id}`, {
     method: "DELETE",
     credentials: "include"
   }).then(res => res.json());
 }
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
 create(params) {

   // `params` is an object that represents a user
   // { email: 'some@email.com', password: 'some-password' }
   return fetch(`http://localhost:3000/sessions`, {
     method: "POST",
     credentials: "include",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(params)
   }).then(res => res.json());
 },

 destroy() {
   return fetch(`http://localhost:3000/sessions`, {
     method: "DELETE",
     credentials: "include"
   }).then(res => res.json());
 }
};

const User = {
 current() {
   return fetch(`http://localhost:3000/users/current`, {
     method: "GET",
     credentials: "include"
   }).then(res => res.json());
 }
};

export { Auction, Bid, Session, User };
