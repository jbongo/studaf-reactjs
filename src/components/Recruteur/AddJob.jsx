import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';


const Profile = () => {

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
					 		<div className="profile-title">
					 			<h3>Ajouter une offre</h3>
					 	
					 		</div>
					 		<div className="profile-form-edit">
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-12">
					 						<span className="pf-title">Titre de l'offre</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="" />
					 						</div>
					 					</div>

					 					<div className="col-lg-12">
					 						<span className="pf-title">Description</span>
					 						<div className="pf-field">
					 							<textarea></textarea>
					 						</div>
					 					</div>
										 <div className="col-lg-12">
					 						<span className="pf-title">Description du profil recherché</span>
					 						<div className="pf-field">
					 							<textarea></textarea>
					 						</div>
					 					</div>

					 					<div className="col-lg-6">
					 						<span className="pf-title">Catégorie de l'emploi</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Marketing</option>
													<option>Informatique</option>
													<option>Art & Culture</option>
													
												</select>
					 						</div>
					 					</div>
					 					
					 					<div className="col-lg-6">
					 						<span  for="customRange1" className="pf-title">Salaire</span>
					 						<div className="pf-field">
												<input type="range" class="custom-range" id="customRange1"></input>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title"  for="customRange2">Expérience réquise (mois)</span>
					 						<div className="pf-field">
												<input type="range" class="custom-range" id="customRange2"></input>
					 							
					 						</div>
					 					</div>
					 		
					 					<div className="col-lg-6">
					 						<span className="pf-title">Sexe</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>H/F</option>
													<option>H</option>
													<option>F</option>
												
												</select>
					 						</div>
					 					</div>
					 					
					 					
					 					<div className="col-lg-12">
					 						<span className="pf-title">Date d'expiration de l'offre</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="01.11.207" className="form-control datepicker" />
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Compétences réquises</span>
					 						<div className="pf-field">
						 						<ul className="tags">
										           <li className="addedTag">Photoshop<span onclick="$(this).parent().remove();" className="tagRemove">x</span><input type="hidden" name="tags[]" value="Web Deisgn"/></li>
							            			<li className="tagAdd taglist">  
							              				 <input type="text" id="search-field"/>
										            </li>
												</ul>
											</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Pays de l'offre</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Gabon</option>
													<option>Benin</option>
													
												</select>
					 						</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Ville de l'offre</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="" />
					 						</div>
					 					</div>

										 <div className="col-lg-12">
					 						<button type="submit">Ajouter</button>
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

export default Profile;