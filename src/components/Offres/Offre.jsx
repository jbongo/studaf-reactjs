import React from 'react'

import TopMenuPage from '../TopMenu/TopMenuPage'



const Offre = () => {

    return(
    
    <>
<TopMenuPage/>
    
  

    <section class="overlape">
		<div class="block no-padding">
			<div data-velocity="-.1"  class="parallax scrolly-invisible no-parallax"></div>
			<div class="container fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="inner-header wform">
							<div class="job-search-sec">
								<div class="job-search">
									<h4>Recherchez un Job...</h4>
									<form>
										<div class="row">
											<div class="col-lg-7">
												<div class="job-field">
													<input type="text" placeholder="titre de l'offre" />
													<i class="la la-keyboard-o"></i>
												</div>
											</div>
											<div class="col-lg-4">
												<div class="job-field">
													<select data-placeholder="City, province or region" class="chosen-city">
														<option>Gabon</option>
														
													</select>
													<i class="la la-map-marker"></i>
												</div>
											</div>
											<div class="col-lg-1">
												<button type="submit"><i class="la la-search"></i></button>
											</div>
										</div>
									</form>
									<div class="tags-bar">
								 		<span>CDI<i class="close-tag">x</i></span>
								 		<span>UX/UI Design<i class="close-tag">x</i></span>
								 		<span>Gabon<i class="close-tag">x</i></span>
								 		<div class="action-tags">
								 			<a href="#" title=""><i class="la la-cloud-download"></i> Sauvegarder</a>
								 			<a href="#" title=""><i class="la la-trash-o"></i> Supprimer</a>
								 		</div>
								 	</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div class="block remove-top">
			<div class="container">
				 <div class="row no-gape">
				 	<aside class="col-lg-3 column">
				 		<div class="widget border">
				 			<h3 class="sb-title open">Date de candidature</h3>
				 			<div class="posted_widget">
								<input type="radio" name="choose" id="232"/><label for="232">Moins de 24 heures </label><br />
								<input type="radio" name="choose" id="wwqe"/><label for="wwqe">Moins d'une semaine</label><br />
					
								<input type="radio" name="choose" id="qweqw"/><label class="nm" for="qweqw">Tout</label><br />
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title open"> Type de l'offre</h3>
				 			<div class="type_widget">
								<p class="flchek"><input type="checkbox" name="choosetype" id="33r"/><label for="33r">Freelance (9)</label></p>
								<p class="ftchek"><input type="checkbox" name="choosetype" id="dsf"/><label for="dsf">CDD (8)</label></p>
								<p class="ischek"><input type="checkbox" name="choosetype" id="sdd"/><label for="sdd">cdi (8)</label></p>
								{/* <p class="ptchek"><input type="checkbox" name="choosetype" id="sadd"/><label for="sadd">Part Time (5)</label></p>
								<p class="tpchek"><input type="checkbox" name="choosetype" id="assa"/><label for="assa">Temporary (5)</label></p>
								<p class="vtchek"><input type="checkbox" name="choosetype" id="ghgf"/><label for="ghgf">Volunteer (8)</label></p> */}
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title open">Spécialité</h3>
				 			<div class="specialism_widget">
								<div class="field_w_search">
				 					<input type="text" placeholder="Search Spaecialisms" />
				 				</div>
				 				<div class="simple-checkbox scrollbar">
									<p><input type="checkbox" name="spealism" id="as"/><label for="as">Finance (2)</label></p>
									<p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banque (2)</label></p>
									<p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banque (2)</label></p>
									<p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banque (2)</label></p>
									<p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banque (2)</label></p>
									<p><input type="checkbox" name="spealism" id="asd"/><label for="asd">Banque (2)</label></p>
									
				 				</div>
				 			</div>
				 		</div>
				 		{/* <div class="widget border">
				 			<h3 class="sb-title closed">Offerd Salary</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="1"/><label for="1">10k - 20k</label></p>
									<p><input type="checkbox" name="smplechk" id="2"/><label for="2">20k - 30k</label></p>
									<p><input type="checkbox" name="smplechk" id="3"/><label for="3">30k - 40k</label></p>
									<p><input type="checkbox" name="smplechk" id="4"/><label for="4">40k - 50k</label></p>
				 				</div>
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title closed">Career Level</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="5"/><label for="5">Intermediate</label></p>
									<p><input type="checkbox" name="smplechk" id="6"/><label for="6">Normal</label></p>
									<p><input type="checkbox" name="smplechk" id="7"/><label for="7">Special</label></p>
									<p><input type="checkbox" name="smplechk" id="8"/><label for="8">Experienced</label></p>
				 				</div>
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title closed">Experince</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="9"/><label for="9">1Year to 2Year</label></p>
									<p><input type="checkbox" name="smplechk" id="10"/><label for="10">2Year to 3Year</label></p>
									<p><input type="checkbox" name="smplechk" id="11"/><label for="11">3Year to 4Year</label></p>
									<p><input type="checkbox" name="smplechk" id="12"/><label for="12">4Year to 5Year</label></p>
				 				</div>
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title closed">Gender</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="13"/><label for="13">Male</label></p>
									<p><input type="checkbox" name="smplechk" id="14"/><label for="14">Female</label></p>
									<p><input type="checkbox" name="smplechk" id="15"/><label for="15">Others</label></p>
				 				</div>
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title closed">Industry</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="16"/><label for="16">Meezan Job</label></p>
									<p><input type="checkbox" name="smplechk" id="17"/><label for="17">Speicalize Jobs</label></p>
									<p><input type="checkbox" name="smplechk" id="18"/><label for="18">Business Jobs</label></p>
				 				</div>
				 			</div>
				 		</div>
				 		<div class="widget border">
				 			<h3 class="sb-title closed">Qualification</h3>
				 			<div class="specialism_widget">
				 				<div class="simple-checkbox">
									<p><input type="checkbox" name="smplechk" id="19"/><label for="19">Matriculation</label></p>
									<p><input type="checkbox" name="smplechk" id="20"/><label for="20">Intermidiate</label></p>
									<p><input type="checkbox" name="smplechk" id="21"/><label for="21">Gradute</label></p>
				 				</div>
				 			</div>
				 		</div> */}
			 			<div class="banner_widget">
			 				<a href="#" title=""><img src="http://placehold.it/263x280" alt="" /></a>
						</div>
				 	</aside>
				 	<div class="col-lg-9 column">
				 		<div class="modrn-joblist np">
					 		<div class="filterbar">
					 			{/* <span class="emlthis"><a href="mailto:example.com" title=""><i class="la la-envelope-o"></i> Email me Jobs Like These</a></span> */}
					 			<div class="sortby-sec">
					 				<span>Trier par</span>
					 				<select data-placeholder="Most Recent" class="chosen">
										<option>Plus Recent</option>
										
									</select>
									<select data-placeholder="20 Per Page" class="chosen">
										<option>30 Par Page</option>
										<option>40 Par Page</option>
										<option>50 Par Page</option>
										<option>60 Par Page</option>
									</select>
					 			</div>
					 			<h5>98 Offres</h5>
					 		</div>
						 </div>
						 <div class="job-list-modern">
						 	<div class="job-listings-sec no-border">
								<div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
                                <div class="job-listing wtabs">
									<div class="job-title-sec">
										<div class="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Société Générale</span>
										<div class="job-lctn"><i class="la la-map-marker"></i>Libreville, Gabon</div>
									</div>
									<div class="job-style-bx">
										<span class="job-is ft">CDI</span>
										<span class="fav-job"><i class="la la-heart-o"></i></span>
										<i>Il y'a 1 heure</i>
									</div>
								</div>
				
					
							</div>
							<div class="pagination">
								<ul>
									<li class="prev"><a href=""><i class="la la-long-arrow-left"></i> Précédent</a></li>
									<li><a href="">1</a></li>
									<li class="active"><a href="">2</a></li>
									<li><a href="">3</a></li>
									<li><span class="delimeter">...</span></li>
									<li><a href="">14</a></li>
									<li class="next"><a href="">Suivant <i class="la la-long-arrow-right"></i></a></li>
								</ul>
							</div>
						 </div>
					 </div>
				 </div>
			</div>
		</div>
	</section>









    </>
//   Fin return
  )
}


export default Offre