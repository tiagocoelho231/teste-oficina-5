import React from 'react';

const Header = () => {
	return (
		<header className="header">
			<div className="grid">
				<h1 className="logo">
					<img src={require('../img/logo.png')} alt="Logo" />
				</h1>
			</div>
		</header>
	)
}

export default Header;
