import React from 'react'

import TopMenuPage from '../TopMenu/TopMenuPage'



const Contact = () => {

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
								<h3>Contact</h3>
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
		<div className="block">
			<div className="container">
				 <div className="row">
				 	<div className="col-lg-6 column">
				 		<div className="contact-form">
				 			{/* <h3>Ecrivez Nous</h3> */}
				 			<form>
				 				<div className="row">
				 					<div className="col-lg-12">
				 						<span className="pf-title">Nom ou Raison Sociale</span>
				 						<div className="pf-field">
				 							<input type="text" placeholder="" />
				 						</div>
				 					</div>
				 					<div className="col-lg-12">
				 						<span className="pf-title">Email</span>
				 						<div className="pf-field">
				 							<input type="text" placeholder="" />
				 						</div>
				 					</div>
				 					<div className="col-lg-12">
				 						<span className="pf-title">Sujet</span>
				 						<div className="pf-field">
				 							<input type="text" placeholder="" />
				 						</div>
				 					</div>
				 					<div className="col-lg-12">
				 						<span className="pf-title">Message</span>
				 						<div className="pf-field">
				 							<textarea></textarea>
				 						</div>
				 					</div>
				 					<div className="col-lg-12">
				 						<button type="submit">Envoyer</button>
				 					</div>
				 				</div>
				 			</form>
				 		</div>
				 	</div>
				 	<div className="col-lg-6 column">
					 	<div className="contact-textinfo">
					 		<h3></h3>
					 		<ul>
					 			<li><i className="la la-phone"></i><span>Contactez-nous au : +33015522000</span></li>
					 			
					 			<li><i className="la la-envelope-o"></i><span>Email : info@studafrik.com</span></li>
					 		</ul>
					 	</div>
					</div>
				 </div>
			</div>
		</div>
	</section>







    </>
//   Fin return
  )
}


export default Contact