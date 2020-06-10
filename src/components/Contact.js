import React, { Component } from 'react';

export default class Contact extends Component {
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
						<a href='#'>
							<img src='img/logo.png' alt='' />
						</a>
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
											</ul>
										</li>
										<li className='active'>
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
									<h2>Contact Us</h2>
									<div className='breadcrumb__option'>
										<a href='./index.html'>Home</a>
										<span>Contact Us</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Breadcrumb Section End */}
				{/* Contact Section Begin */}
				<section className='contact spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-3 col-sm-6 text-center'>
								<div className='contact__widget'>
									<span className='icon_phone' />
									<h4>Phone</h4>
									<p>+01-3-8888-6868</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-3 col-sm-6 text-center'>
								<div className='contact__widget'>
									<span className='icon_pin_alt' />
									<h4>Address</h4>
									<p>181-004 GTC Westlands Nairobi</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-3 col-sm-6 text-center'>
								<div className='contact__widget'>
									<span className='icon_clock_alt' />
									<h4>Open time</h4>
									<p>10:00 am to 23:00 pm</p>
								</div>
							</div>
							<div className='col-lg-3 col-md-3 col-sm-6 text-center'>
								<div className='contact__widget'>
									<span className='icon_mail_alt' />
									<h4>Email</h4>
									<p>hello@zerohunger.com</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Contact Section End */}
				{/* Map Begin */}
				<div className='map'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd'
						height={500}
						style={{ border: 0 }}
						allowFullScreen
						aria-hidden='false'
						tabIndex={0}
					/>
					<div className='map-inside'>
						<i className='icon_pin' />
						<div className='inside-widget'>
							<h4>New York</h4>
							<ul>
								<li>Phone: +12-345-6789</li>
								<li>Add: 16 Creek Ave. Farmingdale, NY</li>
							</ul>
						</div>
					</div>
				</div>
				{/* Map End */}
				{/* Contact Form Begin */}
				<div className='contact-form spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='contact__form__title'>
									<h2>Leave Message</h2>
								</div>
							</div>
						</div>
						<form action='#'>
							<div className='row'>
								<div className='col-lg-6 col-md-6'>
									<input type='text' placeholder='Your name' />
								</div>
								<div className='col-lg-6 col-md-6'>
									<input type='text' placeholder='Your Email' />
								</div>
								<div className='col-lg-12 text-center'>
									<textarea placeholder='Your message' defaultValue={''} />
									<button type='submit' className='site-btn'>
										SEND MESSAGE
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				{/* Contact Form End */}
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
											<a href='https://zerohunger.com' target='_blank'>
												zerohunger
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
