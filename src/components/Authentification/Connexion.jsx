import React from 'react'
import {NavLink} from 'react-router-dom';

import TopMenuPage from '../TopMenu/TopMenuPage'


const Connexion = () => {

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
								<h3>Connexion</h3>
								{/* <span>Keep up to date with the latest news</span> */}
							</div>
							{/* <div className="page-breacrumbs">
								<ul className="breadcrumbs">
									<li><a href="#" title="">Home</a></li>
									<li><a href="#" title="">Pages</a></li>
									<li><a href="#" title="">Login</a></li>
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
						<div className="account-popup-area signin-popup-box static">
							<div className="account-popup">
							<h3>Connectez-vous !</h3>

								{/* <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span> */}
								<form>
									<div className="cfield">
										<input type="text" placeholder="Identifiant" />
										<i className="la la-user"></i>
									</div>
									<div className="cfield">
										<input type="password" placeholder="********" />
										<i className="la la-key"></i>
									</div>
									<p className="remember-label">
										<input type="checkbox" name="cb" id="cb1"/><label htmlFor="cb1">Se souvenir de moi</label>
									</p>
									<a href="#" title="">Mot de passe oublié ?</a>
									<button type="submit">Se Connecter</button>
								</form>
								<div className="extra-login">
									<span>ou</span>
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




<div className="account-popup-area signin-popup-box">
	<div className="account-popup">
		<span className="close-popup"><i className="la la-close"></i></span>
		<h3>User Login</h3>
		<span>Click To Login With Demo User</span>
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
			<p className="remember-label">
				<input type="checkbox" name="cb" id="cbwq"/><label htmlFor="cbwq">Remember me</label>
			</p>
			<a href="#" title="">Forgot Password?</a>
			<button type="submit">Login</button>
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


export default Connexion