import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './pages/index'
// import List from './pages/list'
// import Home from './pages/home'

import './index.css'

import Video from './pages/video'


// function Index() {
//     return <h2>JSPang.com</h2>;
//   }
  
// function List() {
//     return <h2>List-Page</h2>;
// }

//单路由部分
  
  // function AppRouter() {
  //   return (
  //     <Router>
  //         <ul>
  //             <li> <Link to="/">首页</Link> </li>
  //             <li><Link to="/list/123">列表</Link> </li>
  //         </ul>
  //         <Route path="/" exact component={Index} />
  //         <Route path="/list/:id" component={List} />
  //         <Route path="/home/" component={Home} />
        
  //     </Router>
  //   );
  // }


  //嵌套路由部分


  function AppRouter () {
      return (
          <Router>
            <div className="mainDiv">
              <div className="leftNav">
                  <h3>一级导航</h3>
                  <ul>
                      <li> <Link to="/">博客首页</Link> </li>
                      <li><Link to="/video/">视频教程</Link> </li>
                      <li><Link to="">职场技能</Link> </li>
                  </ul>
              </div>
              
              <div className="rightMain">
                  <Route path="/"  exact component={Index} />
                  <Route path="/video/"   component={Video} />
              </div>
            </div>
        </Router>
      )
  }
  export default AppRouter;