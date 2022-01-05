import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Wishlist } from '../assets/wishlist.svg';
import { store } from "../store/store";
import { Component } from "react";
import "../assets/wishlistComponent.css";
    
export default class WishlistComponent extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }

    render() {
        const counter = store.getState().length;

        return (
            <Link to={`/wishlist`} className="wishlist">
                
                <Wishlist />
				Items: ({counter})
                
			</Link>	

        )
    }
}