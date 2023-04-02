import React from 'react';
import imgLogoWhite from './img/logo-white.png';
import imgDownload from './img/download.png';
import imgWhatsapp from './img/whatsapp.png';
import imgTelegram from './img/telegram.png';
import imgVisa from './img/visa.png';
import imgMastercard from './img/mastercard.png';

export default function Footer() {
	return (
		<footer>
			
			<div className="footer-logo">

				<img src={imgLogoWhite} alt="logo-white" />
				<p>Компания «Султан» — снабжаем розничные магазины товарами 
				"под ключ" в Кокчетаве и Акмолинской области</p>
				<div className="email-content">
					<p>Подпишись на скидки и акции</p>
					<input type="email" placeholder="Введите ваш E-mail" className="inputEmail" />
				</div>	
			</div>
			<div className="menu-footer">
				<p>Меню сайта:</p>
				<div className="menu-content">
					<a href="#"><p>О компании</p></a>
					<a href="#"><p>Доставка и оплата</p></a>
					<a href="#"><p>Возврат</p></a>
					<a href="#"><p>Контакты</p></a>
				</div>
			</div>
			<div className="category">
				<p>Категории:</p>
				<div className="category-content">
					<a href="#"><p>Бытовая химия</p></a>
					<a href="#"><p>Косметика и гигиена</p></a>
					<a href="#"><p>Товары для дома</p></a>
					<a href="#"><p>Товары для детей и мам</p></a>
					<a href="#"><p>Посуда</p></a>
				</div>
			</div>
			<div className="price-list">
				<p>Скачать прайс-лист:</p>
				<button className="price-button">
					<span>Прайс-лист</span>
					<img src={imgDownload} alt="img-download" />
				</button>
				<p className="p-second">Связь в мессенджерах:</p>
				<div className="price-img">
					<img src={imgWhatsapp} alt="whatsapp" className="price-img-whatsapp" />
					<img src={imgTelegram} alt="telegram" className="price-img-telegram" />
				</div>
			</div>
			<div className="contacts">
				<p>Контакты:</p>
				<div className="footer-telephone">
					<span className="footer-number">+7 (777) 490-00-91</span><br />
					<span className="footer-time">время работы: 9:00-20:00</span><br />
					<a href="#"><span className="footer-bell">Заказать звонок</span></a>
				</div>
				<div className="footer-mail">
					<p>opt.sultan@mail.ru <br />
					<span>На связи в любое время</span></p>	
				</div>
				<div className="footer-card-img">
					<img src={imgVisa} alt="visa" className="visa" />
					<img src={imgMastercard} alt="mastercard" className="mastercard" />
				</div>
			</div>
		</footer>
	)
}