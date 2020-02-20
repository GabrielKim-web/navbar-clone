import React, {Component} from 'react';
import './stylesheet/NavBar.css'

class NavBar extends Component {
   constructor() {
      super();

      this.state = {
         menuStatus: 'closed'
      }
      this.toggleMenu=this.toggleMenu.bind(this);
   }

   toggleMenu = () => {
      if (this.state.menuStatus === 'closed') {
         this.setState({menuStatus: 'opened'});
      } else {this.setState({menuStatus: 'closed'});}
   }
   render() {
      return (
         <>
         <div id="NavBar">
            <div className="logo">
               <a className="icon" href='.App'>Start Bootstrap</a>
            </div>
            <div className="navmenu">
               <ul className="button-container">
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>About</li>
                  <li>Team</li>
                  <li>Contact</li>
               </ul>
            </div>
            <img onClick={this.toggleMenu} className="hamburger" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="oof" />
         </div>
         <div className={`mobile-nav ${this.state.menuStatus}`}>
            <ul className="mobile-button-container">
               <li>Services</li>
               <li>Portfolio</li>
               <li>About</li>
               <li>Team</li>
               <li>Contact</li>
            </ul>
         </div>
         </>
      )
   }
}

export default NavBar;