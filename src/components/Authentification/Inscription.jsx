import React from 'react'

import TopMenuPage from '../TopMenu/TopMenuPage'
import {NavLink} from 'react-router-dom';



const Inscription = () => {

    return(
    
    <>
<TopMenuPage/>
    
       <section>
		<div className="block no-padding  gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner2">
							<div className="inner-title2">
								<h3>Inscription</h3>
								{/* <span>Keep up to date with the latest news</span> */}
							</div>
							{/* <div className="page-breacrumbs">
								<ul className="breadcrumbs">
									<li><a href="#" title="">Home</a></li>
									<li><a href="#" title="">Pages</a></li>
									<li><a href="#" title="">Register</a></li>
								</ul>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="block remove-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="account-popup-area signup-popup-box static">
							<div className="account-popup">
								<h3>Créez Votre Compte</h3>
								{/* <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span> */}
								<div className="select-user">
									<span>Je suis Candidats</span>
									<span>Je suis recruteur</span>
								</div>
								<form>
									<div className="cfield">
										<input type="text" placeholder="Identifiant" />
										<i className="la la-user"></i>
									</div>
									<div className="cfield">
										<input type="password" placeholder="********" />
										<i className="la la-key"></i>
									</div>
									<div className="cfield">
										<input type="text" placeholder="Email" />
										<i className="la la-envelope-o"></i>
									</div>
								
									<div className="cfield">
										<input type="text" placeholder="Phone Number" />
										<i className="la la-phone"></i>
									</div>
									<button type="submit">Enregistrer</button>
								</form>
								<div className="extra-login">
											
								<span><NavLink to="/connexion" title="">J'ai déjà un compte <i class="la la-long-arrow-right"></i></NavLink></span>

									
									<div className="login-social">
										<a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
										<a className="li-login" href="#" title=""><i className="fa fa-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>






<div className="account-popup-area signup-popup-box">
	<div className="account-popup">
		<span className="close-popup"><i className="la la-close"></i></span>
		<h3>Sign Up</h3>
		<div className="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div className="cfield">
				<input type="text" placeholder="Username" />
				<i className="la la-user"></i>
			</div>
			<div className="cfield">
				<input type="password" placeholder="********" />
				<i className="la la-key"></i>
			</div>
			<div className="cfield">
				<input type="text" placeholder="Email" />
				<i className="la la-envelope-o"></i>
			</div>
			<div className="dropdown-field">
				<select data-placeholder="Please Select Specialism" className="chosen">
					<option>Web Development</option>
					<option>Web Designing</option>
					<option>Art & Culture</option>
					<option>Reading & Writing</option>
				</select>
			</div>
			<div className="cfield">
				<input type="text" placeholder="Phone Number" />
				<i className="la la-phone"></i>
			</div>
			<button type="submit">Signup</button>
		</form>
		<div className="extra-login">
			<span>Or</span>
			<div className="login-social">
				<a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
				<a className="tw-login" href="#" title=""><i className="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div>
    </>
//   Fin return
  )
}


export default Inscription