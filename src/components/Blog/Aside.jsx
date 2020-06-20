import React from 'react'
import {NavLink} from 'react-router-dom';




const Aside = () => {

    return(
    
    <>

    
	<aside className="col-lg-3 column">
						<div className="widget">
				 			<div className="search_widget_job no-margin">
				 				<div className="field_w_search">
				 					<input placeholder="Rechercher un mot clé" type="text"/>
				 					<i className="la la-search"></i>
				 				</div>
				 			</div>
				 		</div>
				 		<div className="widget">
				 			<h3>Catégories</h3>
				 			<div className="sidebar-links">
				 				<a href="#" title=""><i className="la la-angle-right"></i>Education</a>
				 				<a href="#" title=""><i className="la la-angle-right"></i>Information</a>
				 				<a href="#" title=""><i className="la la-angle-right"></i>Emploi</a>
				 			
				 			</div>
				 		</div>
				 		<div className="widget">
				 			<h3>Posts récents</h3>
				 			<div className="post_widget">
				 				<div className="mini-blog">
				 					<span><a href="#" title=""><img src="http://placehold.it/74x64" alt="" /></a></span>
				 					<div className="mb-info">
				 						<h3><a href="#" title="">Réuissir son entretien d'embauche</a></h3>
				 						<span>12 Mars, 2020</span>
				 					</div>
				 				</div>
                                 <div className="mini-blog">
				 					<span><a href="#" title=""><img src="http://placehold.it/74x64" alt="" /></a></span>
				 					<div className="mb-info">
				 						<h3><a href="#" title="">Réuissir son entretien d'embauche</a></h3>
				 						<span>12 Mars, 2020</span>
				 					</div>
				 				</div>
                                 <div className="mini-blog">
				 					<span><a href="#" title=""><img src="http://placehold.it/74x64" alt="" /></a></span>
				 					<div className="mb-info">
				 						<h3><a href="#" title="">Réuissir son entretien d'embauche</a></h3>
				 						<span>12 Mars, 2020</span>
				 					</div>
				 				</div>
				 				
				 			</div>
				 		</div>
				 		
				 		
				 	
					</aside>



    </>
//   Fin return
  )
}


export default Aside