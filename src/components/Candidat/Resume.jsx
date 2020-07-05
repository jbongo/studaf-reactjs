import React from 'react';
import {NavLink} from 'react-router-dom';
import TopMenuPage from '../TopMenu/TopMenuPage';
import LeftMenuCandi from '../LeftMenu/LeftMenuCandi';


const Resume = () => {

    return (
        <>
        <TopMenuPage/>
       
	<section>
		<div className="block remove-top">
			<div className="container">
				 <div className="row no-gape">
				 	<LeftMenuCandi/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="manage-jobs-sec">
					 			<div className="border-title"><h3>Formations</h3><a href="#" title=""><i className="la la-plus"></i> Ajouter Formation</a></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>Université LAPIN</h3>
		 									<i>2008 - 2012</i>
		 									<i>Informatique de gestion</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 						
		 						</div>
								 <div className="edu-history-sec">
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>Université LAPIN</h3>
		 									<i>2008 - 2012</i>
		 									<i>Informatique de gestion</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 						
		 						</div>
							
		 						<div className="border-title"><h3>Expériences Professionnelle</h3><a href="#" title=""><i className="la la-plus"></i> Ajouter Expérience</a></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Web Designer <span>ICA </span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
									 <div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Web Designer <span>ICA </span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							
		 						</div>
		 		
		 						<div className="border-title"><h3>Compétences professionnelles </h3><a href="#" title=""><i className="la la-plus"></i> Ajouter Compétences</a></div>
		 						<div className="progress-sec">
		 							<div className="progress-sec with-edit">
		 								<span>Microsoft Office</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "80%" }}><span>80%</span></div> </div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="progress-sec with-edit">
		 								<span>Rédaction</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "60%" }}><span>60%</span></div> </div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							
		 						</div>
		 						
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

export default Resume;