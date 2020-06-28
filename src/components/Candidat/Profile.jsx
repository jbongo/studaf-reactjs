import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';
import LeftMenuCandi from '../LeftMenu/LeftMenuCandi';


const ChangePassword = () => {

    return (
        <>
        <TopMenuPage/>
        <section className="overlape">
		<div className="block no-padding">
			<div data-velocity="-.1"  className="parallax scrolly-invisible no-parallax"></div>
			<div className="container fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner-header">
							<h3>Bienvenue Toti TATA</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
		<LeftMenuCandi/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="profile-title">
					 			<h3>My Profile</h3>
					 			<div className="upload-img-bar">
					 				<span className="round"><img src="http://placehold.it/140x140" alt="" /><i>x</i></span>
					 				<div className="upload-info">
					 					<a href="#" title="">Browse</a>
					 					<span>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>
					 				</div>
					 			</div>
					 			<div className="upload-img-bar">
					 				<span className="round"><img src="http://placehold.it/140x140" alt="" /><i>x</i></span>
					 				<div className="upload-info">
					 					<a href="#" title="">Browse</a>
					 					<span>Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png</span>
					 				</div>
					 			</div>
					 		</div>
					 		<div className="profile-form-edit">
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Full Name</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="Ali TUFAN" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Job Title</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="UX / UI Designer" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Allow In Search</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Allow In Search" className="chosen">
													<option>Yes</option>
													<option>No</option>
												</select>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Minimum Salary</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="$4250" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Experience</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Allow In Search" className="chosen">
													<option>2-6 Years</option>
													<option>6-12 Years</option>
												</select>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Age</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Allow In Search" className="chosen">
													<option>22-30 Years</option>
													<option>30-40 Years</option>
													<option>40-50 Years</option>
												</select>
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title">Current Salary($) min</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="20K" />
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title">Max</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="30K" />
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title">Expected Salary($) min</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="30k" />
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title">Max</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="40K" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Education Levels</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Diploma</option>
													<option>Inter</option>
													<option>Bachelor</option>
													<option>Graduate</option>
												</select>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Languages</span>					 						
					 						<div className="pf-field">
						 						<div className="pf-field">
						 							<select data-placeholder="Please Select Specialism" className="chosen">
														<option>English</option>
														<option>German</option>
													</select>
						 						</div>
											</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Categories</span>					 						
					 						<div className="pf-field no-margin">
						 						<ul className="tags">
										           <li className="addedTag">Photoshop<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" value="Photoshop"/></li>
										           <li className="addedTag">Digital & Creative<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" value="Digital"/></li>
										           <li className="addedTag">Agency<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" value="Agency"/></li>
							            			<li className="tagAdd taglist">  
							              				 <input type="text" id="search-field"/>
										            </li>
												</ul>
											</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Description</span>
					 						<div className="pf-field">
					 							<textarea>Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed severalnew methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer ollaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present</textarea>
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<button type="submit">Update</button>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="social-edit">
					 			<h3>Social Edit</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Facebook</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.facebook.com/TeraPlaner" />
					 							<i className="fa fa-facebook"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Twitter</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.twitter.com/TeraPlaner" />
					 							<i className="fa fa-twitter"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Google</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.google-plus.com/TeraPlaner" />
					 							<i className="la la-google"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Linkedin</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.Linkedin.com/TeraPlaner" />
					 							<i className="la la-linkedin"></i>
					 						</div>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="contact-edit">
					 			<h3>Contact</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-4">
					 						<span className="pf-title">Phone Number</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="+90 538 963 58 96" />
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Email</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="demo@jobhunt.com" />
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Website</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.jobhun.com" />
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Country</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Web Development</option>
													<option>Web Designing</option>
													<option>Art & Culture</option>
													<option>Reading & Writing</option>
												</select>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">City</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Web Development</option>
													<option>Web Designing</option>
													<option>Art & Culture</option>
													<option>Reading & Writing</option>
												</select>
					 						</div>
					 					</div>
					 				
					 					
					 					<div className="col-lg-12">
					 						<button type="submit">Update</button>
					 					</div>
					 				</div>
					 			</form>
					 		</div>


							 <div className="contact-edit" id="ci">
					 			<h3>Changement du mot de passe</h3>
								 <form>
						 				<div className="row">
						 					<div className="col-lg-6">
						 						<span className="pf-title">Ancien mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" />
						 						</div>
						 						<span className="pf-title">Nouveau mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" />
						 						</div>
						 						<span className="pf-title">Confirmez le mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" />
						 						</div>
						 						<button type="submit">Modifier</button>
						 					</div>
						 					<div className="col-lg-6">
						 						<i className="la la-key big-icon"></i>
						 					</div>
						 				</div>
						 			</form>
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

export default ChangePassword;