import React from 'react';
import TopMenuPage from '../TopMenu/TopMenuPage';
import LeftMenuCandi from '../LeftMenu/LeftMenuCandi';


const Candidatures = () => {

    return (
        <>
        <TopMenuPage/>
		<section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
				 	<LeftMenuCandi/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="manage-jobs-sec">
					 			<h3>Mes candidatures</h3>
						 		<table>
						 			<thead>
						 				<tr>
						 					<td>Candidatures</td>
						 					<td>Offre</td>
						 					<td>Date</td>
						 					<td></td>
						 				</tr>
						 			</thead>
						 			<tbody>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>Société Génnérale</i><br />
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Développeur mobile</a></h3>
						 						</div>
						 					</td>
						 					<td><span>3 septembre 2020</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
										 
										 <tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>Société Génnérale</i><br />
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Développeur mobile</a></h3>
						 						</div>
						 					</td>
						 					<td><span>3 septembre 2020</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>

										 <tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>Société Génnérale</i><br />
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Développeur mobile</a></h3>
						 						</div>
						 					</td>
						 					<td><span>3 septembre 2020</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
						 				
						 			</tbody>
						 		</table>
					 		</div>
					 	</div>
					</div>
				 </div>
			</div>
		</div>
	</section>







    </>
    )
}

export default Candidatures;