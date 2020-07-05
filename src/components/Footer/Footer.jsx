import React from 'react'
import ScriptTag from 'react-script-tag';
import {NavLink} from 'react-router-dom';


const Footer = () => {

    return(
    
    <>
        
	
		<footer>
		<div className="block">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 column">
						<div className="widget">
							<div className="about_widget">
								<div className="logo">
									<a href="#" title=""><img src="http://placehold.it/178x40" alt="" /></a>
								</div>
							
								<span>+33 05 05 05 05</span>
								<span>info@studafrik.com</span>
								<div className="social">
									<a href="#" title=""><i className="fa fa-facebook"></i></a>
									<a href="#" title=""><i className="fa fa-twitter"></i></a>
									<a href="#" title=""><i className="fa fa-linkedin"></i></a>
									<a href="#" title=""><i className="fa fa-pinterest"></i></a>
									<a href="#" title=""><i className="fa fa-behance"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 column">
						<div className="widget">
							<h3 className="footer-title">Questions fréquemment posées</h3>
							<div className="link_widgets">
								<div className="row">
									<div className="col-lg-6">
										<a href="#" title="">Politique de confidentialté </a>
										<a href="#" title="">Qui somme nous ?</a>
										<a href="#" title="">Qui somme nous ?</a>
									
									</div>
									<div className="col-lg-6">
										<a href="#" title="">Support </a>
										<a href="#" title="">Aide </a>
										<NavLink to="/recruteur/profile" title="">Récruteurs</NavLink>
										<NavLink to="/candidat/profile" title="">Candidats </NavLink>
										<NavLink to="/contact" title="">Nous contacter</NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-2 column">
						<div className="widget">
							<h3 className="footer-title">Trouvez un emplois</h3>
							<div className="link_widgets">
								<div className="row">
									<div className="col-lg-12">
										<a href="#" title="">Gabon</a>	
										<a href="#" title="">Côte d'Ivoire</a>	
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 column">
						<div className="widget">
							<div className="download_widget">
								<a href="#" title=""><img src="http://placehold.it/230x65" alt="" /></a>
								<a href="#" title=""><img src="http://placehold.it/230x65" alt="" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</footer>
{/* 	
	<ScriptTag  type="text/javascript" src="../../assets/js/jquery.min.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/modernizr.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/script.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/bootstrap.min.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/wow.min.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/slick.min.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/parallax.js" />
	<ScriptTag  type="text/javascript" src="../../assets/js/select-chosen.js" /> */}

    </>
//   Fin return
  )
}


export default Footer