import React from "react";
import { store } from "../store/store";
import { Component } from "react";
import "../assets/wishlistComponent.css";
import Lacquers from "../components/lacquers";
import "../assets/wishlistComponent.css";
    
export default class WishlistComponent extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    
    removeToWishList  (lacquer) {
        store.dispatch(
          {
          type: 'REMOVE',
          lacquer
          }
        );
      }

    render() {
       
        const wishlist = store.getState();

        return (
            <div  className="lacquers">
                
                {
                wishlist.map(lacquer=>(<div key={lacquer.id}><button onClick={e=>this.removeToWishList(lacquer)}>Remove</button><Lacquers item={lacquer} /></div>))
                }

            </div>
        )
    }
}