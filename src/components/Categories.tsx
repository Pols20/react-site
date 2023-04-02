import React from 'react'

export class Categories extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'Все',
					className: 'zero-block'
				},
				{
					key: 'body care',
					name: 'Уход за телом',
					className: 'first-block'
				},
				{
					key: 'hand care',
					name: 'Уход за руками',
					className: 'first-block'
				},
				{
					key: 'foot care',
					name: 'Уход за ногами',
					className: 'first-block'
				},
				{
					key: 'facial care',
					name: 'Уход за лицом',
					className: 'first-block'
				},
				{
					key: 'hair care',
					name: 'Уход за волосами',
					className: 'second-block'
				},
				{
					key: 'tanning products',
					name: 'Средства для загара',
					className: 'second-block'
				},
				{
					key: 'shaving products',
					name: 'Средства для бритья',
					className: 'second-block'
				},
				{
					key: 'gift sets',
					name: 'Подарочные наборы',
					className: 'second-block'
				},
				{
					key: 'hygienic products',
					name: 'Гигиеническая продукция',
					className: 'third-block'
				},
				{
					key: 'oral hygiene',
					name: 'Гигиена полости рта',
					className: 'second-block'
				},
				{
					key: 'paper products',
					name: 'Бумажная продукция',
					className: 'second-block'
				}

			]
		}
	}
	render() {
		return (
			<div className="categories">
				{this.state.categories.map(el => (
					<div className={el.className} key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
				))}
			</div>
		)
	}
}

export default Categories