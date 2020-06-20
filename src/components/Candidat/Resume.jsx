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
					 			<div className="border-title"><h3>Candidates Dashboard</h3><a href="#" title=""><i className="la la-plus"></i> Add Education</a></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>University</h3>
		 									<i>2008 - 2012</i>
		 									<span>Middle East Technical University <i>Computer Science</i></span>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>High School</h3>
		 									<i>2008 - 2012</i>
		 									<span>Tomms College <i>Bachlors in Fine Arts</i></span>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 						</div>
		 						<div className="border-title"><h3>Work Experience</h3><a href="#" title=""><i className="la la-plus"></i> Add Experience</a></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Web Designer <span>Inwave Studio</span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>CEO Founder <span>Inwave Studio</span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 						</div>
		 						<div className="border-title"><h3>Portfolio</h3><a href="#" title=""><i className="la la-plus"></i> Add Portfolio</a></div>
		 						<div className="mini-portfolio">
		 							<div className="mp-row">
		 								<div className="mp-col">
		 									<div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
		 									<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 								</div>
		 								<div className="mp-col">
		 									<div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
		 									<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 								</div>
		 								<div className="mp-col">
		 									<div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
		 									<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 								</div>
		 								<div className="mp-col">
		 									<div className="mportolio"><img src="http://placehold.it/165x115" alt="" /><a href="#" title=""><i className="la la-search"></i></a></div>
		 									<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 								</div>
		 							</div>
		 						</div>
		 						<div className="border-title"><h3>Professional Skills</h3><a href="#" title=""><i className="la la-plus"></i> Add Skills</a></div>
		 						<div className="progress-sec">
		 							<div className="progress-sec with-edit">
		 								<span>Adobe Photoshop</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "80%" }}><span>80%</span></div> </div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="progress-sec with-edit">
		 								<span>Production In Html</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "60%" }}><span>60%</span></div> </div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="progress-sec with-edit">
		 								<span>Graphic Design</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "75%" }}><span>75%</span></div> </div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 						</div>
		 						<div className="border-title"><h3>Professional Skills</h3><a href="#" title=""><i className="la la-plus"></i> Add Skills</a></div>
		 						<div className="edu-history-sec">
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Perfect Attendance Programs</h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Top Performer Recognition</h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
				 						</ul>
		 							</div>
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>King LLC</h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Edit</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
				 							<li><span>Delete</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
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