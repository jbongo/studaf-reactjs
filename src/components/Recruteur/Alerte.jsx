import React from 'react';
import NavLink from 'react-router-dom';
import LeftMenuRecru from '../LeftMenu/LeftMenuRecru';
import TopMenuPage from '../TopMenu/TopMenuPage';


const Alerte = () => {

    return (
        <>
        <TopMenuPage/>



    <section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
			    <LeftMenuRecru/>

				 </div>
			</div>
		</div>
	</section>



    </>
    )
}

export default Alerte;