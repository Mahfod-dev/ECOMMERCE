import React, { Component } from "react";
import "./shop.data";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/preview-collections/PreviewCollection";

class Shop extends Component {
	state = {
		collections: SHOP_DATA,
	};

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ title, items, id }) => {
					return <PreviewCollection key={id} title={title} items={items} />;
				})}
			</div>
		);
	}
}

export default Shop;
