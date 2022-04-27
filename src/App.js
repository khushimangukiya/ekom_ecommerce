import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path={"/"} component={Home} />
    {/* <Route path={"/Departments"} component={Departments} /> */}
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
