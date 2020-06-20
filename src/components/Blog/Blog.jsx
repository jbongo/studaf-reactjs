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
		<div className="block">
			<div className="container">
				 <div className="row">
				 	<div className="col-lg-9 column">
				 		<div className="bloglist-sec">



				 			<div className="blogpost style2">
				 				<div className="blog-posthumb"> <a href="#" title=""><img src="http://placehold.it/322x280" alt="" /></a> </div>
				 				<div className="blog-postdetail">
				 					<ul className="post-metas"><li><a href="#" title=""><i className="la la-calendar-o"></i>6 Juin, 2020</a></li><li><a className="metascomment" href="#" title=""><i className="la la-comments"></i>4 commentaires</a></li></ul>
				 					<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploi</a></h3>
				 					<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 					<NavLink className="bbutton" to="/article/11" title="">Lire la suite <i className="la la-long-arrow-right"></i></NavLink>
				 				</div>
				 			</div>
                             
				 			<div className="blogpost style2">
				 				<div className="blog-posthumb"> <a href="#" title=""><img src="http://placehold.it/322x280" alt="" /></a> </div>
				 				<div className="blog-postdetail">
				 					<ul className="post-metas"><li><a href="#" title=""><i className="la la-calendar-o"></i>6 Juin, 2020</a></li><li><a className="metascomment" href="#" title=""><i className="la la-comments"></i>4 commentaires</a></li></ul>
				 					<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploi</a></h3>
				 					<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 					<NavLink className="bbutton" to="/article/11-conseils" title="">Lire la suite <i className="la la-long-arrow-right"></i></NavLink>
				 				</div>
				 			</div>
                             
				 			<div className="blogpost style2">
				 				<div className="blog-posthumb"> <a href="#" title=""><img src="http://placehold.it/322x280" alt="" /></a> </div>
				 				<div className="blog-postdetail">
				 					<ul className="post-metas"><li><a href="#" title=""><i className="la la-calendar-o"></i>6 Juin, 2020</a></li><li><a className="metascomment" href="#" title=""><i className="la la-comments"></i>4 commentaires</a></li></ul>
				 					<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploi</a></h3>
				 					<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 					<NavLink className="bbutton" to="/article/11-conseils" title="">Lire la suite <i className="la la-long-arrow-right"></i></NavLink>
				 				</div>
				 			</div>
                             
				 			<div className="blogpost style2">
				 				<div className="blog-posthumb"> <a href="#" title=""><img src="http://placehold.it/322x280" alt="" /></a> </div>
				 				<div className="blog-postdetail">
				 					<ul className="post-metas"><li><a href="#" title=""><i className="la la-calendar-o"></i>6 Juin, 2020</a></li><li><a className="metascomment" href="#" title=""><i className="la la-comments"></i>4 commentaires</a></li></ul>
				 					<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploi</a></h3>
				 					<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 					<NavLink className="bbutton" to="/article/11-conseils" title="">Lire la suite <i className="la la-long-arrow-right"></i></NavLink>
				 				</div>
				 			</div>
				 			
				 			
				 		
				 			<div className="pagination">
								<ul>
									<li className="prev"><a href=""><i className="la la-long-arrow-left"></i> Précédent</a></li>
									<li><a href="">1</a></li>
									<li className="active"><a href="">2</a></li>
									<li><a href="">3</a></li>
									<li><span className="delimeter">...</span></li>
									<li><a href="">14</a></li>
									<li className="next"><a href="">Suivant <i className="la la-long-arrow-right"></i></a></li>
								</ul>
							</div>
				 		</div>
					</div>
					
					<Aside/>
				 </div>
			</div>
		</div>
	</section>





    </>
//   Fin return
  )
}


export default Blog