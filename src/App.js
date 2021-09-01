import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./component/Navbar";
import  {Users} from './component/Users'
import  {About} from './component/About'
import {Switch, Route,Router} from "react-router-dom";
import Home from "./component/Home";
import Footer from "./component/Footer";




function App() {
  return (
<>
<Navibar/>
  <Switch>
   <Route exact path='/' component={Home}/>
    <Route path='/users' component={Users}/>
    <Route path='/about' component={About}/>
  </Switch>
    <Footer/>
</>  );
}

export default App;
