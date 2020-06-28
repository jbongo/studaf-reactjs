import React from 'react'
import {NavLink} from 'react-router-dom'
import TopMenuHome from '../TopMenu/TopMenuHome'

import Footer from '../Footer/Footer'
class Home extends React.Component {


    render(){
    return (
        <>
           
     

<div className="theme-layout" id="scrollup">
	
    {/* <TopMenuHome/> */}


	<section>
		<div className="block no-padding">
			<div className="container fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="main-featured-sec">
							<div className="new-slide">
								<img src="http://placehold.it/1920x800" alt="" />
							</div>
							<div className="job-search-sec">
								<div className="job-search">
									<h3>La façon la plus simple d'obtenir un emplois</h3>
									<span>Trouvez votre premier emploi</span>
									<form>
										<div className="row">
											<div className="col-lg-7 col-md-5 col-sm-12 col-xs-12">
												<div className="job-field">
													<input type="text" placeholder="Titre du poste..." />
													<i className="la la-keyboard-o"></i>
												</div>
											</div>
											<div className="col-lg-4 col-md-5 col-sm-12 col-xs-12">
												<div className="job-field">
													<select data-placeholder="City, province or region" className="chosen-city">
														<option>Gabon </option>
														<option>Côte d'ivoire</option>
														
													</select>
													<i className="la la-map-marker"></i>
												</div>
											</div>
											<div className="col-lg-1 col-md-2 col-sm-12 col-xs-12">
												<button type="submit"><i className="la la-search"></i></button>
											</div>
										</div>
									</form>
									
								</div>
							</div>
							<div className="scroll-to">
								<a href="#scroll-here" title=""><i className="la la-arrow-down"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="scroll-here">
		<div className="block">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading">
							<h2>Catégorie populaire</h2>
							{/* <span>37 jobs live - 0 added today.</span> */}
						</div>
						<div className="cat-sec">
							<div className="row no-gape">
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-bullhorn"></i>
											<span>Art & médias</span>
											<p>(22 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-graduation-cap"></i>
											<span>Education </span>
											<p>(6 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-line-chart "></i>
											<span>Comptabilité / Finance</span>
											<p>(3 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-users"></i>
											<span> Ressource Humaine</span>
											<p>(3 offres)</p>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="cat-sec">
							<div className="row no-gape">
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-phone"></i>
											<span>Telecommunications</span>
											<p>(22 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-cutlery"></i>
											<span>Restauration </span>
											<p>(6 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-building"></i>
											<span>Construction / Immobilier</span>
											<p>(3 offres)</p>
										</a>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6">
									<div className="p-category">
										<a href="#" title="">
											<i className="la la-user-md"></i>
											<span>Santé</span>
											<p>(3 offres)</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="browse-all-cat">
							<a href="#" title="">Voir toutes les Catégories</a>
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
					<div className="col-lg-12">
						<div className="heading">
							<h2>Dernières offres</h2>
							{/* <span>Leading Employers already using job and talent.</span> */}
						</div>
						<div className="job-listings-sec">
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
							
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
							<div className="job-listing">
								<div className="job-title-sec">
									<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
									<h3><a href="#" title="">Expert comptable </a></h3>
									<span>Société générale </span>
								</div>
								<span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
								<span className="fav-job"><i className="la la-heart-o"></i></span>
								<span className="job-is ft">CDI</span>
							</div>
					

						</div>
					</div>
					<div className="col-lg-12">
						<div className="browse-all-cat">
							<NavLink to="/offre-emplois" title="">Voir toute la liste</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="block">
			<div data-velocity="-.1"  className="parallax scrolly-invisible layer color light"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading light">
							<h2>Dernières offres</h2>							
						</div>
						<div className="reviews-sec" id="reviews-carousel">
						
							<div className="col-lg-6">
								<div className="reviews">
									<img src="http://placehold.it/101x101" alt="" />
									<h3>Expert comptable<span>Société générale</span></h3>
									<p> <span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
										<span className="fav-job"><i className="la la-heart-o"></i><span className="job-is ft">CDI</span></span>
										
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="reviews">
									<img src="http://placehold.it/101x101" alt="" />
									<h3>Expert comptable<span>Société générale</span></h3>
									<p> <span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
										<span className="fav-job"><i className="la la-heart-o"></i><span className="job-is ft">CDI</span></span>
										
									</p>
								</div>
							</div>

							<div className="col-lg-6">
								<div className="reviews">
									<img src="http://placehold.it/101x101" alt="" />
									<h3>Expert comptable<span>Société générale</span></h3>
									<p> <span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
										<span className="fav-job"><i className="la la-heart-o"></i><span className="job-is ft">CDI</span></span>
										
									</p>
								</div>
							</div>
								<div className="col-lg-6">
								<div className="reviews">
									<img src="http://placehold.it/101x101" alt="" />
									<h3>Expert comptable<span>Société générale</span></h3>
									<p> <span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
										<span className="fav-job"><i className="la la-heart-o"></i><span className="job-is ft">CDI</span></span>
										
									</p>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="reviews">
									<img src="http://placehold.it/101x101" alt="" />
									<h3>Expert comptable<span>Société générale</span></h3>
									<p> <span className="job-lctn"><i className="la la-map-marker"></i>Bamako, Mali</span>
										<span className="fav-job"><i className="la la-heart-o"></i><span className="job-is ft">CDI</span></span>
										
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>
	</section>



<Footer/>
</div>





        </>
        )
	}
	

}

export default Home