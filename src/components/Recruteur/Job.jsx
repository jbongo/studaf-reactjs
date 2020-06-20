import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';


const Job = () => {

    return (
        <>
        <TopMenuPage/>

        <section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
                    <LeftMenuRecru/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="manage-jobs-sec">
					 			<h3>Gestion des offres d'emplois</h3>
					 			<div className="extra-job-info">
						 			<span><i className="la la-clock-o"></i><strong>9</strong> Offres</span>
						 			<span><i className="la la-file-text"></i><strong>20</strong> Candidatures</span>
						 			<span><i className="la la-users"></i><strong>18</strong> Offres actives </span>
						 		</div>
						 		<table>
						 			<thead>
						 				<tr>
						 					<td>Titre</td>
						 					<td>Candidatures</td>
						 					<td>Date de création et expiration</td>
						 					<td>Statut</td>
						 					<td>Action</td>
						 				</tr>
						 			</thead>
						 			<tbody>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Expert comptable</a></h3>
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<span className="applied-field">3+ Candidatures</span>
						 					</td>
						 					<td>
						 						<span> 27 Mai, 2020</span><br />
						 						<span>05 Juillet , 2020</span>
						 					</td>
						 					<td>
						 						<span className="status active">Active</span>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Afficher</span><a href="#" title=""><i className="la la-eye"></i></a></li>
						 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
										 <tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Expert comptable</a></h3>
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<span className="applied-field">3+ Candidatures</span>
						 					</td>
						 					<td>
						 						<span> 27 Mai, 2020</span><br />
						 						<span>05 Juillet , 2020</span>
						 					</td>
						 					<td>
						 						<span className="status active">Active</span>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Afficher</span><a href="#" title=""><i className="la la-eye"></i></a></li>
						 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
										 <tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Expert comptable</a></h3>
						 							<span><i className="la la-map-marker"></i>Libreville, Gabon</span>
						 						</div>
						 					</td>
						 					<td>
						 						<span className="applied-field">3+ Candidatures</span>
						 					</td>
						 					<td>
						 						<span> 27 Mai, 2020</span><br />
						 						<span>05 Juillet , 2020</span>
						 					</td>
						 					<td>
						 						<span className="status active">Active</span>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Afficher</span><a href="#" title=""><i className="la la-eye"></i></a></li>
						 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
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

export default Job;