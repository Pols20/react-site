import React from 'react'

export class Item extends React.Component {
	render() {
		return (
			<div className="item">
				<img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
				<p className="size-span">{this.props.item.size}</p>
				<h2>{this.props.item.title}</h2>
				<p>Штрихкод: <span>{this.props.item.barcode}</span></p>
				<p>Производитель: <span>{this.props.item.maker}</span></p>
				<p className="last-p">Бренд: <span>{this.props.item.brand}</span></p>
				<div className="but-price">
					<b>{this.props.item.price}</b>
					<div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}>
						<button>
							В КОРЗИНУ							
						</button>
					</div>
				</div>	
			</div>
		)
	}
}

export default Item