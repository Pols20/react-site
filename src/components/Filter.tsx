import React from 'react'

export class Filter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filters: [
				{
					key: 'AOS',
					name: 'AOS',
					className: 'flBrand'
				},
				{
					key: 'ARIEL',
					name: 'ARIEL',
					className: 'flBrand'
				},
				{
					key: 'BIMAX',
					name: 'BIMAX',
					className: 'flBrand'
				},
				{
					key: 'Sorti',
					name: 'Sorti',
					className: 'flBrand'
				},
				{
					key: 'BioMio',
					name: 'BioMio',
					className: 'flBrand'
				},
				{
					key: 'YVES ROSHER',
					name: 'YVES ROSHER',
					className: 'flBrand'
				},
				{
					key: 'STEBLANC',
					name: 'STEBLANC',
					className: 'flBrand'
				},
				{
					key: 'HORSE FORCE',
					name: 'HORSE FORCE',
					className: 'flBrand'
				},
				{
					key: 'MEDIPHARMA COSMETICS',
					name: 'MEDIPHARMA COSMETICS',
					className: 'flBrand'
				},
				{
					key: 'Garnier',
					name: 'Garnier',
					className: 'flBrand'
				},
				{
					key: 'KLORANE',
					name: 'KLORANE',
					className: 'flBrand'
				},
				{
					key: 'FLORESAN',
					name: 'FLORESAN',
					className: 'flBrand'
				},
				{
					key: 'U DRY',
					name: 'U DRY',
					className: 'flBrand'
				},
				{
					key: 'NESTI DANTE',
					name: 'NESTI DANTE',
					className: 'flBrand'
				},
				{
					key: 'PATRICEM',
					name: 'PATRICEM',
					className: 'flBrand'
				},
				{
					key: 'DRYDRY',
					name: 'DRYDRY',
					className: 'flBrand'
				},
				{
					key: 'L’OREAL',
					name: 'L’OREAL',
					className: 'flBrand'
				},
				{
					key: 'AphtoFix',
					name: 'AphtoFix',
					className: 'flBrand'
				},
				{
					key: 'MON RULON',
					name: 'MON RULON',
					className: 'flBrand'
				}

			]
		}
	}
	render() {
		return (
			<div className="filter-brand">
				{this.state.filters.map(el =>(
					<div className="flBrand" key={el.key} onClick={() => this.props.chooseFilter(el.key)}>{el.name}</div>
				))}
			</div>
		)
	}
}

export default Filter