import React from 'react'

import TopMenuPage from '../TopMenu/TopMenuPage'
import Aside from './Aside'


const Article = () => {

    return(
    
    <>

<TopMenuPage/>



<section className="overlape">
		<div className="block no-padding">
			<div data-velocity="-.1"  className="parallax scrolly-invisible no-parallax"></div>
			<div className="container fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner-header">
							<h3>Blog</h3>
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
				 		<div className="blog-single">
				 			<div className="bs-thumb"><img src="https://etudiantafricain.files.wordpress.com/2019/09/bourse-irlande.jpg?w=825&h=400&crop=1" alt="" /></div>
				 			<ul className="post-metas"><li><a href="#" title=""><img src="http://placehold.it/40x40" alt="" />Ali TUFAN</a></li><li><a href="#" title=""><i className="la la-calendar-o"></i>November 23, 2017</a></li><li><a className="metascomment" href="#" title=""><i className="la la-comments"></i>4 comments</a></li><li><a href="#" title=""><i className="la la-file-text"></i>Travel, Skill, Jobs</a></li></ul>
				 			<h2>11 conseils pour vous aider à obtenir un nouvel emploi</h2>
				 			<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 			<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. Nous avons passé un week-end à importer des banjos à West Palm Beach, en Floride.</p>
				 			

				 			<blockquote><p><i>“</i><span>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street. Géré une petite équipe achetant et vendant des bâtons de pogo pour les agriculteurs. J'ai passé plusieurs années à concéder de la réglisse avec des banjos sur le marché secondaire. jos à West Palm Beach, en Floride.<i>”</i></span></p></blockquote>

				 			<div className="tags-share">
						 			<div className="tags_widget">
						 				<span>Tags</span>
						 				<a href="#" title="">Cv</a>
						 				<a href="#" title="">Emploi</a>
						 				<a href="#" title="">Entretien</a>
						 			</div>
						 		<div className="share-bar">
					 				<a href="#" title="" className="share-fb"><i className="fa fa-facebook"></i></a><a href="#" title="" className="share-twitter"><i className="fa fa-twitter"></i></a><span>Partagez</span>
					 			</div>
				 			</div>
				 		
				 			<div className="comment-sec">
				 				<h3>2 Commentaires</h3>
				 				<ul>
				 					<li>
				 						<div className="comment">
				 							<div className="comment-avatar"> <img src="http://placehold.it/90x90" alt="" /> </div>
				 							<div className="comment-detail">
				 								<h3>Yves Pérrier</h3>
				 								<div className="date-comment"><a href="#" title=""><i className="la la-calendar-o"></i>16 Mai, 2020</a></div>
				 								<p>Merci ! pour vos conseils. J'ai été récruté grâce à vos annonces</p>
				 								<a href="#" title=""><i className="la la-reply"></i>Répondre</a>
				 							</div>
				 						</div>
				 				
				 					</li>
                                     <li>
				 						<div className="comment">
				 							<div className="comment-avatar"> <img src="http://placehold.it/90x90" alt="" /> </div>
				 							<div className="comment-detail">
				 								<h3>Yves Pérrier</h3>
				 								<div className="date-comment"><a href="#" title=""><i className="la la-calendar-o"></i>16 Mai, 2020</a></div>
				 								<p>Merci ! pour vos conseils</p>
				 								<a href="#" title=""><i className="la la-reply"></i>Répondre</a>
				 							</div>
				 						</div>
				 				
				 					</li>
				 				</ul>
				 			</div>
				 			<div className="commentform-sec">
				 				<h3>Laissez votre commentaire</h3>
				 				<form>
				 					<div className="row">
				 						<div className="col-lg-12">
					 						<span className="pf-title">Votre message</span>
					 						<div className="pf-field">
					 							<textarea></textarea>
					 						</div>
					 					</div>
					 	
					 					<div className="col-lg-12">
					 						<button type="submit">Répondre</button>
					 					</div>
				 					</div>
				 				</form>
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


export default Article