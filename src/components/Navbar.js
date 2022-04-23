import React from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
	return (
		<nav>
			<div className='brand'>
				<i style={{ color: 'white' }}>
					<img src={logo} alt='logo'style={{height:"4vh", margin:"5px"}}/>
				</i>
				<a href='/'> Geet-Hub Editor</a>
			</div>
		</nav>
	);
};

export default Navbar;
