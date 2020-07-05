import React from 'react'
import {NavLink} from 'react-router-dom';


const TopMenuHome = () => {

    return(
    
    <>
           <div className="theme-layout" id="scrollup">
	
	<div className="responsive-header">
		<div className="responsive-menubar">
			<div className="res-logo"><a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a></div>
			<div className="menu-resaction">
				<div className="res-openmenu">
					<img src="images/icon.png" alt="" /> Menu
				</div>
				<div className="res-closemenu">
					<img src="images/icon2.png" alt="" /> Close
				</div>
			</div>
		</div>
		<div className="responsive-opensec">
			<div className="btn-extars">
					<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><NavLink to="/inscription" title=""><i className="la la-key"></i> Inscription</NavLink></li> */}
					<li className="signin-popup"><NavLink to="/mon-compte" title=""><i className="la la-key"></i> Mon compte</NavLink></li>
						
					</ul>
				</div>
			{/* <form className="res-search">
				<input type="text" placeholder="Titre de l'offre" />
				<button type="submit"><i className="la la-search"></i></button>
			</form> */}
			<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
			<div className="responsivemenu">
				<ul>
				<li className="menu-item">
							<NavLink to="/" title="">Accueil</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/recruteur/profile" title="">Recruteurs</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/candidat/profile" title="">Candidats</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/blog" title="">Blog</NavLink>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" title="">Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<NavLink to="/contact" title="">Nous contacter</NavLink>
						
						</li>
					</ul>
			</div>
		</div>
	</div>
	
	<header className="gradient">
		<div className="menu-sec">
			<div className="container">
				<div className="logo">
					<a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a>
				</div>
				<div className="btn-extars">
					<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><NavLink to="/inscription" title=""><i className="la la-key"></i> Inscription</NavLink></li> */}
					<li className="signin-popup"><NavLink to="/mon-compte" title=""><i className="la la-key"></i> Mon compte</NavLink></li>
						
					</ul>
				</div>
				<nav>
					<ul>
						<li className="menu-item">
							<NavLink to="/" title="">Accueil</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/recruteur/profile" title="">Recruteurs</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/candidat/profile" title="">Candidats</NavLink>
							
						</li>
						<li className="menu-item">
							<NavLink to="/blog" title="">Blog</NavLink>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" title="">Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<NavLink to="/contact" title="">Nous contacter</NavLink>
						
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>



</div>
  
  </>
//   Fin return
  )
}


export default TopMenuHome