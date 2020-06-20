import React from 'react';
import {NavLink} from 'react-router-dom';


const LeftMenuRecru = () => {

    return (
        <aside className="col-lg-3 column border-right">
            <div className="widget">
                <div className="tree_widget-sec">
                    <ul>
                        <li><NavLink to="/recruteur/profile" title=""><i className="la la-file-text"></i>Profile</NavLink></li>
                        <li><NavLink to="/recruteur/manage/job" title=""><i className="la la-briefcase"></i>Offres d'emplois</NavLink></li>
                        <li><NavLink to="/recruteur/cv" title=""><i className="la la-paper-plane"></i>CV</NavLink></li>
                        <li><NavLink to="/recruteur/add-job" title=""><i className="la la-file-text"></i>Ajouter une offre</NavLink></li>
                        <li><NavLink to="/recruteur/alertes" title=""><i className="la la-flash"></i>Mes alertes</NavLink></li>
                        <li><NavLink to="/recruteur/identifiants" title=""><i className="la la-lock"></i>Modifier mes identifiants</NavLink></li>
                        <li><NavLink to="/logout" title=""><i className="la la-unlink"></i>Déconnexion</NavLink></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default LeftMenuRecru;