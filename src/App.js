import React , {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


import "./assets/css/bootstrap-grid.css"
import "./assets/css/icons.css"
import "./assets/css/animate.min.css"
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import "./assets/css/chosen.css"
import "./assets/css/colors/colors.css"
import "./assets/css/bootstrap.css"


import Home from './components/Home/Home'
import Connexion from './components/Authentification/Connexion'
import Inscription from './components/Authentification/Inscription'
import Contact from './components/Contact/Contact'
import TopMenuHome from './components/TopMenu/TopMenuHome';
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog';
import Article from './components/Blog/Article';
import ProfileRecru from './components/Recruteur/Profile';
import Job from './components/Recruteur/Job';
import ResumeRecru from './components/Recruteur/Resume';
import AddJob from './components/Recruteur/AddJob';
import AlertsRecru from './components/Recruteur/Alerte';
import ChangePassword from './components/Authentification/ChangePassword';

import ProfileCandi from './components/Candidat/Profile';
import Favoris from './components/Candidat/Favori';
import AlertsCandi from './components/Candidat/Alert';
import ResumeCandi from './components/Candidat/Resume';
import Candidatures from './components/Candidat/Candidature';
import Offre from './components/Offres/Offre';


// class App extends React.Component {


 const App = () => {
  
  
  return (
    <div className="App">
    {/* //   <header className="App-header"> */}
       
        <BrowserRouter>
        <TopMenuHome/>
        <Switch>
          <Route path="/mon-compte" component={Inscription}/>
          <Route path="/connexion" component={Connexion}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/article/:article" component={Article}/>

          <Route path="/recruteur/profile" component={ProfileRecru}/>
          <Route path="/recruteur/manage/job" component={Job}/>
          <Route path="/recruteur/cv" component={ResumeRecru}/>
          <Route path="/recruteur/add-job" component={AddJob}/>
          <Route path="/recruteur/alertes" component={AlertsRecru}/>
          <Route path="/recruteur/identifiants" component={ChangePassword}/>

          <Route path="/candidat/profile" component={ProfileCandi}/>
          <Route path="/candidat/favoris" component={Favoris}/>
          <Route path="/candidat/candidatures" component={Candidatures}/>
          <Route path="/candidat/alertes" component={AlertsCandi}/>
          <Route path="/candidat/cv" component={ResumeCandi}/>
          <Route path="/candidat/identifiants" component={ChangePassword}/>


          <Route path="/offre-emplois" component={Offre}/>


          <Route path="/" component={Home}/>
        </Switch>
        
        </BrowserRouter>
     
      //  {/* <Footer/> */}
      
      {/* // </header> */}
     </div>
  );

  
useEffect(() => {

  console.log("cccccccccccccccccc");

  const script0 = document.createElement("script");
	  
  script0.src = "./assets/js/jquery.min.js";
  script0.async = true;
  document.body.appendChild(script0);
  
  const script = document.createElement("script");
  
  

  const script1 = document.createElement("script");
    script1.src = "./assets/js/modernizr.js";
  script1.async = true;
  document.body.appendChild(script1);
  
  const script2 = document.createElement("script");
  script2.src = "./assets/js/bootstrap.js";
  script2.async = true;
  document.body.appendChild(script2);
  
  const script3 = document.createElement("script");
  script3.src = "./assets/js/script.js";
  script3.async = true;
  document.body.appendChild(script3);
  
  const script4 = document.createElement("script");
  script4.src = "./assets/js/wow.min.js";
  script4.async = true;
  document.body.appendChild(script4);
  
  const script5 = document.createElement("script");
  script5.src = "./assets/js/slick.min.js";
  script5.async = true;
  document.body.appendChild(script5);
  
  const script6 = document.createElement("script");
  script6.src = "./assets/js/parallax.js";
  script6.async = true;
  document.body.appendChild(script6);
  
  const script7 = document.createElement("script");
  script7.src = "./assets/js/select-chosen.js";
  script7.async = true;
  document.body.appendChild(script7);

  
  
}, []);

var loadScript = function(src) {
  var tag = document.createElement('script');
  tag.async = false;
  tag.src = src;
  document.getElementsByTagName('body').appendChild(tag);
}

loadScript("./assets/js/jquery.min.js")
loadScript("./assets/js/modernizr.js")
loadScript("./assets/js/bootstrap.js")
loadScript("./assets/js/script.js")
loadScript("./assets/js/wow.min.js")
loadScript("./assets/js/slick.min.js")
loadScript("./assets/js/parallax.js")
loadScript("./assets/js/select-chosen.js")



}




export default App;
