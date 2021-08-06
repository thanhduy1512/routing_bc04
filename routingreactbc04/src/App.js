import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import DemoApiClass from './Pages/DemoApi/DemoApiClass';
import DemoFunctionApi from './Pages/DemoApi/DemoFunctionApi';
import Detail from './Pages/Detail/Detail';
import { Fragment } from "react";
import HomeTemplate from './Templates/HomeTemplates/HomeTemplate';
import LoginTemplate from './Templates/LoginTemplate/LoginTemplate';


//Cấu hình chuyển hướng trang trên route
import { createBrowserHistory } from "history";
export const history = createBrowserHistory(); //Cho phép điều hướng trang

function App() {
  return (

    <Router history={history}>
      <div className="App">

        <Switch>

          <HomeTemplate path="/home" component={Home} />

          <LoginTemplate path="/login" exact component={Login} />
          <LoginTemplate path="/register" exact component={Register} />
          <HomeTemplate path="/about" exact component={About} />
          <HomeTemplate path="/" exact component={Home} />
          <HomeTemplate path="/DemoApiClass" exact component={DemoApiClass} />
          <HomeTemplate path="/DemoFunctionApi" exact component={DemoFunctionApi} />
          <HomeTemplate path="/detail/:id" exact component={Detail} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
