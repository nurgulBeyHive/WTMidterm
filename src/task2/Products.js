import React, { Component } from 'react';
import './App.css';


var Products = [ {
	id=1,
	name:Bread,
	price:20
},
{
	id=2,
	name:Juice,
	price:50
},
{
	id=3,
	name:Cookies,
	price:45

}
];
class Products extends Component {
	constructor (props){
		super(props);
		this.state= {
      		productlist: Products,
      		totalprice:0
      	}
	}

	onProductClicked = (index) =>
		let cprice=this.state.totalprice;
		let add=this.state.productlist[index].price;
		let nprice=cprice+add;
		this.setState({
			totalprice:nprice
		})

	render() {
		return (
			<div classname= "productlist"


			)