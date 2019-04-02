import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import { User, Session } from "./Requests";
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage'
import SignInPage from './components/SignInPage'
import AuthRoute from "./AuthRoute";


class App extends Component {

 //this is the constructor that sets state when the app starts
 constructor(props) {
   super(props);
   this.state = {
     currentUser: null,
     loading: true
   };
   // this binds the 2 methods so you can use this for shorthand
   this.getUser = this.getUser.bind(this);
   this.signOut = this.signOut.bind(this);
 }

 //this signs out the user when clicked in Navbar
 signOut() {
   Session.destroy().then(() => {
     this.setState({
       currentUser: null
     });
   });
 }

 // this gets the user from the server on a custom route
 // so we know who is in the session (or not) at all times
 getUser() {
   User.current()
     .then(data => {
       if (typeof data.id !== "number") {
         this.setState({ loading: false });
       } else {
         this.setState({ loading: false, currentUser: data });
       }
     })
     .catch(() => {
       this.setState({ loading: false });
     });
 }

 // this method always runs after the page successfully loads
 // in this case it will always get the user session if logged in
 componentDidMount() {
   this.getUser();
 }

 //render method always called when page is loaded
 //must always return some form of html or components
 render() {

   const { loading, currentUser } = this.state;

   if (loading) {
     return <div />;
   }

   //browser router allow for routing like routes.rb
   //the switch is needed because the regex may print 2 pages
   //while the switch will break on the first match
   return (
     <BrowserRouter>
       <div className="App">
         <header>
           <NavBar currentUser={currentUser} onSignOut={this.signOut} />
         </header>
         <article>
           <div className="container">
             <div className="article-content">
               {/* this is similar to the routes.rb page in ruby */}
               <Switch>
                 <Route path="/auctions" exact component={AuctionIndexPage} />
                 <Route path="/auctions/:id" exact component={AuctionShowPage} />
                 <Route path="/sign_in" exact component={SignInPage} />
               </Switch>
             </div>
           </div>
         </article>
       </div>
     </BrowserRouter>
   );
 }
}

export default App;
