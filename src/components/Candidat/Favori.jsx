import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';
import LeftMenuCandi from '../LeftMenu/LeftMenuCandi';


const Favoris = () => {

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
					 			<div className="border-title"><h3>Mes favoris</h3></div>
						 		<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Web Designer / Developer</a></h3>
										<span>Massimo Artemisistator</span>
										<div className="job-lctn">November 6, 2017</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="pagination">
									<ul>
										<li className="prev"><a href=""><i className="la la-long-arrow-left"></i> Prev</a></li>
										<li><a href="">1</a></li>
										<li className="active"><a href="">2</a></li>
										<li><a href="">3</a></li>
										<li><span className="delimeter">...</span></li>
										<li><a href="">14</a></li>
										<li className="next"><a href="">Next <i className="la la-long-arrow-right"></i></a></li>
									</ul>
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

export default Favoris;