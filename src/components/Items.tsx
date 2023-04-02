import React from 'react'
import Item from './Item.tsx'


export class Items extends React.Component {
	render() {
		return (
			<div>
				
				
				<main>
					{this.props.items.map(el => (
						<Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
					))}
				</main>

				
			</div>
		)
	}
}

export default Items