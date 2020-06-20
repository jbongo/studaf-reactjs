import React from 'react';
import {NavLink} from 'react-router-dom';


const LeftMenuCandi = () => {

    return (
        <aside className="col-lg-3 column border-right">
            <div className="widget">
                <div className="tree_widget-sec">
                    <ul>
                        <li><NavLink to="/candidat/profile" title=""><i className="la la-file-text"></i>Profile</NavLink></li>
                        <li><NavLink to="/candidat/cv" title=""><i className="la la-paper-plane"></i>CV</NavLink></li>
                        <li><NavLink to="/candidat/favoris" title=""><i className="la la-briefcase"></i>Mes favoris</NavLink></li>
                        <li><NavLink to="/candidat/candidatures" title=""><i className="la la-file-text"></i>Mes candidatures</NavLink></li>
                        <li><NavLink to="/candidat/alertes" title=""><i className="la la-flash"></i>Mes alertes</NavLink></li>
                        <li><NavLink to="/candidat/identifiants" title=""><i className="la la-lock"></i>Modifier mes identifiants</NavLink></li>
                        <li><NavLink to="/logout" title=""><i className="la la-unlink"></i>Déconnexion</NavLink></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}


export default LeftMenuCandi;