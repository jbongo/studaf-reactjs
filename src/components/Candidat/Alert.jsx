import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';
import LeftMenuCandi from '../LeftMenu/LeftMenuCandi';


const Alert = () => {

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
					 			<h3>Job Alerts</h3>
						 		<table className="alrt-table">
						 			<thead>
						 				<tr>
						 					<td>Alert Details</td>
						 					<td className="text-right">Email Frequency</td>
						 				</tr>
						 			</thead>
						 			<tbody>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Test Title</a></h3>
						 							<span>Search Keywords: 2, 60, Crawley RH10 8XH, United Kingdom</span>
						 						</div>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 						<span>Never</span>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Test Title</a></h3>
						 							<span>Search Keywords: 2, 60, Crawley RH10 8XH, United Kingdom</span>
						 						</div>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 						<span>Never</span>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Test Title</a></h3>
						 							<span>Search Keywords: 2, 60, Crawley RH10 8XH, United Kingdom</span>
						 						</div>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 						<span>Never</span>
						 					</td>
						 				</tr>
						 				<tr>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">Test Title</a></h3>
						 							<span>Search Keywords: 2, 60, Crawley RH10 8XH, United Kingdom</span>
						 						</div>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 						<span>Never</span>
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

export default Alert;