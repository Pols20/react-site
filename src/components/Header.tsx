import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import imgAdress from './img/adress.png';
import imgMessage from './img/message.png';
import imgLogo from './img/logo.png';
import imgCatalog from './img/catalog.png';
import imgAvatar from './img/avatar.png';
import imgDownload from './img/download.png';
import Order from './Order.tsx';

const showOrders = (props) => {
	return (
		<div>
			{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el.id} item={el} />
			))}
		</div>
	)
}

const showNothing = () => {
	return (
		<div className='empty'>
			<h2>Корзина пуста</h2>
		</div>
	)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false);
	let summa = 0;
	props.orders.forEach(el => summa += Number.parseFloat(el.price))

	return (
		<div className="top-header">	
			<div className="menu">
				<div className="menu-left">
					<div className="adress">
						<img src={imgAdress} alt="img-adress" />
						<p><span className="b">г. Кокчетав, ул. Ж. Ташенова 129Б</span><br />
						(Рынок Восточный)</p>
					</div>
					<div className="message">
						<img src={imgMessage} alt="img-message" />
						<p><span className="b">opt.sultan@mail.ru</span><br />
						На связи в любое время</p>
					</div>
				</div>
				<div className="menu-right">
					<a href="#"><span>О компании</span></a>
					<a href="#"><span>Доставка и оплата</span></a>
					<a href="#"><span>Возврат</span></a>
					<a href="#"><span>Контакты</span></a>
				</div>
			</div>
			<div className="div-hr"></div>

			<div className="menu-header">
				<span className="logo"><img src={imgLogo} alt="img-logo"/></span>
				<button className="button-first">
					<span>Каталог</span>
					<img src={imgCatalog} alt="img-catalog" />
				</button>
				<input type="search" placeholder="Поиск..." className="inputSearch" />
				<div className="telephone">
					<div className="telephone-text">
						<p className="telephone-number">+7 (777) 490-00-91</p>
						<p className="telephone-time">время работы: 9:00-20:00</p>
						<a href="#"><p className="telephone-bell">Заказать звонок</p></a>
					</div>
					<img src={imgAvatar} alt="img-avatar" />
				</div>
				<button className="button-second">
					<span>Прайс-лист</span>
					<img src={imgDownload} alt="img-download" />
				</button>
				
				<div className="basket" onClick={() => setCartOpen( cartOpen = !cartOpen)} >
					<div className="basket-content">
						<p className="basket-volume"></p>
					</div>
					
					<div className="basket-text">
						
						<p className="basket-text-name">Корзина</p>
						<p className="basket-text-price summa">{new Intl.NumberFormat().format(summa)} ₸</p>

					</div>
				</div>

				{cartOpen && (
					<div className="shop-cart">
						{props.orders.length > 0 ? 
							showOrders(props) : showNothing()
						}
					</div>
				)}
				
				
			</div>
			<div className="div-hr"></div>
		</div>

	)
}