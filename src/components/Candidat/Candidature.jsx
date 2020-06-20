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
					 			<h3>Manage Jobs</h3>
						 		<table>
						 			<thead>
						 				<tr>
						 					<td>Applied Job</td>
						 					<td>Position</td>
						 					<td>Date</td>
						 					<td></td>
						 				</tr>
						 			</thead>
						 			<tbody>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>Massimo Artemisis</i><br />
						 							<span><i className="la la-map-marker"></i>Sacramento, California</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Web Designer / Developer</a></h3>
						 						</div>
						 					</td>
						 					<td>
						 						<span>October 27, 2017</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>StarHealth</i><br />
						 							<span><i className="la la-map-marker"></i>Rennes, France</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Regional Sales Manager South east Asia</a></h3>
						 						</div>
						 					</td>
						 					<td>
						 						<span>October 27, 2017</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>Altes Bank</i><br />
						 							<span><i className="la la-map-marker"></i>Istanbul, Turkey</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">C Developer (Senior) C .Net</a></h3>
						 						</div>
						 					</td>
						 					<td>
						 						<span>October 27, 2017</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<i>MediaLab</i><br />
						 							<span><i className="la la-map-marker"></i>Ajax, Ontario</span>
						 						</div>
						 					</td>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Marketing Director</a></h3>
						 						</div>
						 					</td>
						 					<td>
						 						<span>October 27, 2017</span><br />
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
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