import React from 'react';
import Main from './Main';
import ShopDetail from '../components/ShopDetail';
import ShopGrid from '../components/ShopGrid';
// import Contacts from '../components/Contacts';
import Checkout from '../components/Checkout';

const HomePage = () => (
	<Main>
		<h1>Farm Products</h1>
		{/* <Products /> */}
		{/* <Farm ShopDetail /> */}
		{/* <Farm ShopGrid /> */}
		<Checkout />
	</Main>
);

export default HomePage;
