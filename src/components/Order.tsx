import React from 'react';
import imgCrossClose from './img/close-cross.png';

export class Order extends React.Component {
	render() {
		return (
			<div className="item">
				<img src={"./img/" + this.props.item.img} />
				<h2>{this.props.item.title}</h2>
				<p>{this.props.item.price}</p>
				<img src={imgCrossClose} alt="img-cross" className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
			</div>
		)
	}
}

export default Order