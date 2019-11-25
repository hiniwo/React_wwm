import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './pages/index'
import List from './pages/list'
import Home from './pages/home'


// function Index() {
//     return <h2>JSPang.com</h2>;
//   }
  
// function List() {
//     return <h2>List-Page</h2>;
// }
  
  function AppRouter() {
    return (
      <Router>
          <ul>
              <li> <Link to="/">首页</Link> </li>
              <li><Link to="/list/123">列表</Link> </li>
          </ul>
          <Route path="/" exact component={Index} />
          <Route path="/list/:id" component={List} />
          <Route path="/home/" component={Home} />
        
      </Router>
    );
  }
  export default AppRouter;