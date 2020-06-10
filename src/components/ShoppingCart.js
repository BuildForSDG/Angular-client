import React, { Component } from 'react';

export default class ShoppingCart extends Component {
	render() {
		return (
			<div>
				{/* Page Preloder */}
				<div id='preloder'>
					<div className='loader' />
				</div>
				{/* Humberger Begin */}
				<div className='humberger__menu__overlay' />
				<div className='humberger__menu__wrapper'>
					<div className='humberger__menu__logo'>
						<a href='#'>{/* <img src='img/logo.png' alt='' /> */}</a>
					</div>
					<div className='humberger__menu__cart'>
						<ul>
							<li>
								<a href='#'>
									<i className='fa fa-heart' /> <span>1</span>
								</a>
							</li>
							<li>
								<a href='#'>
									<i className='fa fa-shopping-bag' /> <span>3</span>
								</a>
							</li>
						</ul>
						<div className='header__cart__price'>
							item: <span>Kes.150.00</span>
						</div>
					</div>
					<div className='humberger__menu__widget'>
						<div className='header__top__right__auth'>
							<a href='#'>
								<i className='fa fa-user' /> Login
							</a>
						</div>
					</div>
					<nav className='humberger__menu__nav mobile-menu'>
						<ul>
							<li className='active'>
								<a href='./index.html'>Home</a>
							</li>
							<li>
								<a href='./shop-grid.html'>Farm Shop</a>
							</li>
							<li>
								<a href='#'>Pages</a>
								<ul className='header__menu__dropdown'>
									<li>
										<a href='./shop-details.html'>Farm Shop Details</a>
									</li>
									<li>
										<a href='./shoping-cart.html'>Farm Shoping Cart</a>
									</li>
									<li>
										<a href='./checkout.html'>Check Out</a>
									</li>
									<li>
										<a href='./blog-details.html'>Blog Details</a>
									</li>
								</ul>
							</li>
							<li>
								<a href='./blog.html'>Blog</a>
							</li>
							<li>
								<a href='./contact.html'>Contact</a>
							</li>
						</ul>
					</nav>
					<div id='mobile-menu-wrap' />
					<div className='header__top__right__social'>
						<a href='#'>
							<i className='fa fa-facebook' />
						</a>
						<a href='#'>
							<i className='fa fa-twitter' />
						</a>
						<a href='#'>
							<i className='fa fa-linkedin' />
						</a>
						<a href='#'>
							<i className='fa fa-pinterest-p' />
						</a>
					</div>
					<div className='humberger__menu__contact'>
						<ul>
							<li>
								<i className='fa fa-envelope' /> hello@zerohunger.com
							</li>
							<li>Free Delivery for all Order of Kes.1000</li>
						</ul>
					</div>
				</div>
				{/* Humberger End */}
				{/* Header Section Begin */}
				<header className='header'>
					<div className='header__top'>
						<div className='container'>
							<div className='row'>
								<div className='col-lg-6'>
									<div className='header__top__left'>
										<ul>
											<li>
												<i className='fa fa-envelope' /> hello@zerohunger.com
											</li>
											<li>Free Delivery for all Order of Kes.1000</li>
										</ul>
									</div>
								</div>
								<div className='col-lg-6'>
									<div className='header__top__right'>
										<div className='header__top__right__social'>
											<a href='#'>
												<i className='fa fa-facebook' />
											</a>
											<a href='#'>
												<i className='fa fa-twitter' />
											</a>
										</div>
										<div className='header__top__right__auth'>
											<a href='#'>
												<i className='fa fa-user' /> Login
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3'>
								<div className='header__logo'>
									<a href='./index.html'>
										<img src='img/logo.png' alt='' />
									</a>
								</div>
							</div>
							<div className='col-lg-6'>
								<nav className='header__menu'>
									<ul>
										<li>
											<a href='./index.html'>Home</a>
										</li>
										<li className='active'>
											<a href='./shop-grid.html'>Farm Shop</a>
										</li>
										<li>
											<a href='#'>Pages</a>
											<ul className='header__menu__dropdown'>
												<li>
													<a href='./shop-details.html'>Farm Shop Details</a>
												</li>
												<li>
													<a href='./shoping-cart.html'>Farm Shoping Cart</a>
												</li>
												<li>
													<a href='./checkout.html'>Check Out</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='./contact.html'>Contact</a>
										</li>
									</ul>
								</nav>
							</div>
							<div className='col-lg-3'>
								<div className='header__cart'>
									<ul>
										<li>
											<a href='#'>
												<i className='fa fa-heart' /> <span>1</span>
											</a>
										</li>
										<li>
											<a href='#'>
												<i className='fa fa-shopping-bag' /> <span>3</span>
											</a>
										</li>
									</ul>
									<div className='header__cart__price'>
										item: <span>Kes.150.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className='humberger__open'>
							<i className='fa fa-bars' />
						</div>
					</div>
				</header>
				{/* Header Section End */}
				{/* Hero Section Begin */}
				<section className='hero hero-normal'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3'>
								<div className='hero__categories'>
									<div className='hero__categories__all'>
										<i className='fa fa-bars' />
										<span>All departments</span>
									</div>
									<ul>
										<li>
											<a href='#'>Fresh Meat</a>
										</li>
										<li>
											<a href='#'>Vegetables</a>
										</li>
										<li>
											<a href='#'>Fruit &amp; Nut Gifts</a>
										</li>
										<li>
											<a href='#'>Fresh Berries</a>
										</li>
										<li>
											<a href='#'>Ocean Foods</a>
										</li>
										<li>
											<a href='#'>Butter &amp; Eggs</a>
										</li>
										<li>
											<a href='#'>Fresh Onion</a>
										</li>
										<li>
											<a href='#'>Papayaya &amp; Crisps</a>
										</li>
										<li>
											<a href='#'>Oatmeal</a>
										</li>
										<li>
											<a href='#'>Fresh Bananas</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-9'>
								<div className='hero__search'>
									<div className='hero__search__form'>
										<form action='#'>
											<div className='hero__search__categories'>
												All Categories
												<span className='arrow_carrot-down' />
											</div>
											<input type='text' placeholder='What do yo u need?' />
											<button type='submit' className='site-btn'>
												SEARCH
											</button>
										</form>
									</div>
									<div className='hero__search__phone'>
										<div className='hero__search__phone__icon'>
											<i className='fa fa-phone' />
										</div>
										<div className='hero__search__phone__text'>
											<h5>+254 7001 0011</h5>
											<span>support 24/7 time</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Hero Section End */}
				{/* Breadcrumb Section Begin */}
				<section
					className='breadcrumb-section set-bg'
					data-setbg='img/breadcrumb.jpg'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12 text-center'>
								<div className='breadcrumb__text'>
									<h2>Farm Shopping Cart</h2>
									<div className='breadcrumb__option'>
										<a href='./index.html'>Home</a>
										<span>Farm Shopping Cart</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Breadcrumb Section End */}
				{/* Farm Shoping Cart Section Begin */}
				<section className='shoping-cart spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='shoping__cart__table'>
									<table>
										<thead>
											<tr>
												<th className='shoping__product'>Products</th>
												<th>Price</th>
												<th>Quantity</th>
												<th>Total</th>
												<th />
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='shoping__cart__item'>
													<img src='img/cart/cart-1.jpg' alt='' />
													<h5>Vegetable’s Package</h5>
												</td>
												<td className='shoping__cart__price'>Kes.55.00</td>
												<td className='shoping__cart__quantity'>
													<div className='quantity'>
														<div className='pro-qty'>
															<input type='text' defaultValue={1} />
														</div>
													</div>
												</td>
												<td className='shoping__cart__total'>Kes.110.00</td>
												<td className='shoping__cart__item__close'>
													<span className='icon_close' />
												</td>
											</tr>
											<tr>
												<td className='shoping__cart__item'>
													<img src='img/cart/cart-2.jpg' alt='' />
													<h5>Fresh Garden Vegetable</h5>
												</td>
												<td className='shoping__cart__price'>Kes.39.00</td>
												<td className='shoping__cart__quantity'>
													<div className='quantity'>
														<div className='pro-qty'>
															<input type='text' defaultValue={1} />
														</div>
													</div>
												</td>
												<td className='shoping__cart__total'>Kes.39.99</td>
												<td className='shoping__cart__item__close'>
													<span className='icon_close' />
												</td>
											</tr>
											<tr>
												<td className='shoping__cart__item'>
													<img src='img/cart/cart-3.jpg' alt='' />
													<h5>Organic Bananas</h5>
												</td>
												<td className='shoping__cart__price'>Kes.69.00</td>
												<td className='shoping__cart__quantity'>
													<div className='quantity'>
														<div className='pro-qty'>
															<input type='text' defaultValue={1} />
														</div>
													</div>
												</td>
												<td className='shoping__cart__total'>Kes.69.99</td>
												<td className='shoping__cart__item__close'>
													<span className='icon_close' />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='shoping__cart__btns'>
									<a href='#' className='primary-btn cart-btn'>
										CONTINUE SHOPPING
									</a>
									<a href='#' className='primary-btn cart-btn cart-btn-right'>
										<span className='icon_loading' /> Upadate Cart
									</a>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='shoping__continue'>
									<div className='shoping__discount'>
										<h5>Discount Codes</h5>
										<form action='#'>
											<input type='text' placeholder='Enter your coupon code' />
											<button type='submit' className='site-btn'>
												APPLY COUPON
											</button>
										</form>
									</div>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='shoping__checkout'>
									<h5>Cart Total</h5>
									<ul>
										<li>
											Subtotal <span>Kes.454.98</span>
										</li>
										<li>
											Total <span>Kes.454.98</span>
										</li>
									</ul>
									<a href='#' className='primary-btn'>
										PROCEED TO CHECKOUT
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Farm Shoping Cart Section End */}
				{/* Footer Section Begin */}
				<footer className='footer spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-6 col-sm-6'>
								<div className='footer__about'>
									<div className='footer__about__logo'>
										<a href='./index.html'>
											<img src='img/logo.png' alt='' />
										</a>
									</div>
									<ul>
										<li>Address: 181-004 GTC Westlands Nairobi</li>
										<li>Phone: +254 7001 0011</li>
										<li>Email: hello@zerohunger.com</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-4 col-md-6 col-sm-6 offset-lg-1'>
								<div className='footer__widget'>
									<h6>Useful Links</h6>
									<ul>
										<li>
											<a href='#'>About Us</a>
										</li>
										<li>
											<a href='#'>About Farm Products</a>
										</li>
										<li>
											<a href='#'>Secure Farm Shopping</a>
										</li>
										<li>
											<a href='#'>Delivery infomation</a>
										</li>
										<li>
											<a href='#'>Privacy Policy</a>
										</li>{' '}
									</ul>
									<ul>
										<li>
											<a href='#'>Who We Are</a>
										</li>
										<li>
											<a href='#'>Our Services</a>
										</li>
										<li>
											<a href='#'>Projects</a>
										</li>
										<li>
											<a href='#'>Contact</a>
										</li>
										<li>
											<a href='#'>Innovation</a>
										</li>
										<li>
											<a href='#'>Testimonials</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-lg-4 col-md-12'>
								<div className='footer__widget'>
									<h6>Join Our Newsletter Now</h6>
									<p>Get E-mail updates about Fresh trends in Farm Products.</p>
									<form action='#'>
										<input type='text' placeholder='Enter your mail' />
										<button type='submit' className='site-btn'>
											Subscribe
										</button>
									</form>
									<div className='footer__widget__social'>
										<a href='#'>
											<i className='fa fa-facebook' />
										</a>
										<a href='#'>
											<i className='fa fa-instagram' />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='footer__copyright'>
									<div className='footer__copyright__text'>
										<p>
											{/* Link back to zerohunger can't be removed. Template is licensed under CC BY 3.0. */}
											Copyright © All rights reserved |
											<i className='fa fa-heart' aria-hidden='true' /> by
											<a href='https://kujaonline.io' target='_blank'>
												0Hunger
											</a>
											{/* Link back to zerohunger can't be removed. Template is licensed under CC BY 3.0. */}
										</p>
									</div>
									<div className='footer__copyright__payment'>
										<h3>Happy when Healthy</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/* Footer Section End */}
			</div>
		);
	}
}
