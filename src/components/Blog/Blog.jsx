import React from 'react'

import TopMenuPage from '../TopMenu/TopMenuPage'

import {NavLink} from 'react-router-dom';

import Aside from './Aside';

const Blog = () => {

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
								<h3>Blog</h3>
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
		<div class="block">
			<div class="container">
				 <div class="row">
				 	<div class="col-lg-9">
				 		<div class="blog-sec">
							<div class="row" id="masonry">
								
								
					
								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="my-blog">
										<div class="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div class="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div class="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<NavLink to="/article/conseil-emploi" title="">Lire la suite <i class="la la-long-arrow-right"></i></NavLink>
										</div>
									</div>
								</div>

								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="my-blog">
										<div class="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div class="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div class="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<NavLink to="/article/conseil-emploi" title="">Lire la suite <i class="la la-long-arrow-right"></i></NavLink>
										</div>
									</div>
								</div>

								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="my-blog">
										<div class="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div class="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div class="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<NavLink to="/article/conseil-emploi" title="">Lire la suite <i class="la la-long-arrow-right"></i></NavLink>
										</div>
									</div>
								</div>


								<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div class="my-blog">
										<div class="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div class="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div class="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<NavLink to="/article/conseil-emploi" title="">Lire la suite <i class="la la-long-arrow-right"></i></NavLink>
										</div>
									</div>
								</div>
								
							</div>

							<div class="pagination">
								<ul>
									<li class="prev"><a href=""><i class="la la-long-arrow-left"></i> Précédent</a></li>
									<li><a href="">1</a></li>
									<li class="active"><a href="">2</a></li>
									<li><a href="">3</a></li>
									<li><span className="delimeter">...</span></li>
									<li><a href="">14</a></li>
									<li class="next"><a href="">Suivant <i class="la la-long-arrow-right"></i></a></li>
								</ul>
							</div>
						</div>
						
					</div>

				   <div className="col-lg-3">
					  <Aside/> 
				   </div>
				 </div>
				 
			</div>
		</div>
	</section>








    </>
//   Fin return
  )
}


export default Blog