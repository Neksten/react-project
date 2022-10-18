const Profile = () => {
	return (
		<main className="profile">
			<div className="profile__top">
				<div className="profile__header">
					<div className="profile__container-info">
						<div className="profile__user-info">
							<div className="profile__user">@user</div>
							<div className="profile__active">Active 43 seconds ago</div>
						</div>
					</div>
				</div>
				<div className="profile__container profile__container">
					<div className="profile__avatar">
						<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
					</div>
				</div>
				<nav className="profile__navbar profile-navbar">
					<div className="profile__container profile__container-navbar">
						<ul className="profile-navbar__list">
							<li className="_active"><img src="./../img/page-navbar/1.svg" alt="" onContextMenu="return false"/></li>
							<li><img src="./../img/page-navbar/2.svg" alt="" onContextMenu="return false"/></li>
							<li><img src="./../img/page-navbar/3.svg" alt="" onContextMenu="return false"/></li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="profile__content-wrapper">
				<div className="profile__container">
					<div className="profile__content">
						<div className="profile__content-info info-profile">
							<div className="info-profile__row">
								<div className="info-profile__column">
									<div className="info-profile__count">0</div>
									<div className="info-profile__text">Friends</div>
								</div>
								<div className="info-profile__column">
									<div className="info-profile__count">5</div>
									<div className="info-profile__text">Groups</div>
								</div>
							</div>
							<div className="info-profile__title">My photos</div>
							<div className="info-profile__line"></div>
							<div className="info-profile__images">
								<div className="info-profile__image">
									<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
								</div>
								<div className="info-profile__image">
									<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
								</div>
								<div className="info-profile__image">
									<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
								</div>
							</div>
						</div>
						<div className="profile__posts post-profile">
							<div className="post-profile__post">
								<div className="post-profile__header">
									<div className="post-profile__info">
										<div className="post-profile__avatar">
											<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
										</div>
										<div className="post-profile__user-info">
											<div className="post-profile__user">@user</div>
											<div className="post-profile__data">11.10.22</div>
										</div>
									</div>
									<div className="post-profile__settings">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
								<div className="post-profile__post-content">
									<div className="post-profile__title">Title</div>
									<div className="post-profile__text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum id pariatur delectus, ut
										repudiandae iusto, laboriosam labore dignissimos aliquid rerum tenetur eaque mollitia debitis
										veritatis? Rem ea dolorem exercitationem.
									</div>
								</div>
							</div>
							<div className="post-profile__post">
								<div className="post-profile__header">
									<div className="post-profile__info">
										<div className="post-profile__avatar">
											<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
										</div>
										<div className="post-profile__user-info">
											<div className="post-profile__user">@user</div>
											<div className="post-profile__data">05.09.22</div>
										</div>
									</div>
									<div className="post-profile__settings">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
								<div className="post-profile__post-content">
									<div className="post-profile__title">Title</div>
									<div className="post-profile__text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
								</div>
							</div>
							<div className="post-profile__post">
								<div className="post-profile__header">
									<div className="post-profile__info">
										<div className="post-profile__avatar">
											<img src="./../img/page-avatar/kCPYV9aiM5k.jpg" alt=""/>
										</div>
										<div className="post-profile__user-info">
											<div className="post-profile__user">@user</div>
											<div className="post-profile__data">23.07.22</div>
										</div>
									</div>
									<div className="post-profile__settings">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
								<div className="post-profile__post-content">
									<div className="post-profile__title">Title</div>
									<div className="post-profile__text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum id pariatur delectus, ut
										repudiandae iusto, laboriosam labore dignissimos aliquid rerum tenetur eaque mollitia debitis
										veritatis? Rem ea dolorem exercitationem.
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum id pariatur delectus, ut
										repudiandae iusto, laboriosam labore dignissimos aliquid rerum tenetur eaque mollitia debitis
										veritatis? Rem ea dolorem exercitationem.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
export default Profile