import React from 'react';
import { container, spaceAndCenter, navMenu } from './Layout.module.css';
import { Link } from 'gatsby';

const Layout = ({ pageTitle, children }) => {
	return (
		<>
			<header>
				<div className={container}>
					<nav className={spaceAndCenter}>
						<Link to="/">
							<span className="logo-text">LOGO</span>
						</Link>
						<ul className={`${spaceAndCenter} ${navMenu}`}>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<div className={container}>
					<h1>{pageTitle}</h1>
					{children}
				</div>
			</main>
		</>
	);
};

export default Layout;
