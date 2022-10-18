const Header = () => {
	return (
		<header className="header">
			<div className="header__menu menu">
				<div className="menu__icon icon-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="menu__body">
					<div className="header__logo">
						<img src="./../img/logo/NT.png" alt=""/>
					</div>
					<div className="header__search">
						Search...
					</div>
					<div className="header__lk">
						Login
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header