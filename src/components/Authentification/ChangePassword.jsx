import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';


const ChangePassword = () => {

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
					 			<h3>Modifez votre mot de passe</h3>
						 		<div className="change-password">
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
		</div>
	</section>






    </>
    )
}

export default ChangePassword;