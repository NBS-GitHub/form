import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, Prompt, Redirect } from 'react-router-dom';
import User from './components/User';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';


class App extends Component {
  state = {

  }

  render() {
    return (
      <>
        {/* Navigation */}
        <Router>
          <>
            <Navigation />
            <Switch>
              <Route path='/' exact strict component={Home}>Home</Route>
              <Route path='/about' exact strict component={About}>About</Route>
              <Route path='/contact' exact strict component={Contact}>Contact</Route>
              <Route component={Error}></Route>
            </Switch>
          </>
        </Router>

        {/* Content */}
        <article>
          <h3>Article title</h3>
          <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa optio, error quos cupiditate vel quidem nam velit modi suscipit? Nesciunt!</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore totam perferendis magni itaque porro debitis, iure placeat rerum error voluptates facilis unde, repellat, ipsum blanditiis sunt illo! Quos repellendus, ad amet consequuntur, aut ea modi ratione dolorem cupiditate rerum delectus ipsam tempore sint in nemo soluta obcaecati nobis vel iusto? Unde id ratione delectus sapiente vel, placeat ut quas eos exercitationem repellat, quia odio eligendi deserunt earum blanditiis modi laborum veritatis voluptatum tenetur eum, maxime aut? Id, libero saepe nostrum magnam, pariatur in ratione hic illum maiores sapiente quia a optio minus et nobis iure placeat ea, ad doloribus. Perferendis?</p>
        </article>
      </>
    );
  }
}

export default App;



// class App extends Component {
//   render() {
//     return (
//       <>

//         <Router>
//           <>
//             <Navigation />
//             <Switch>
//               <Route path='/' component={Home} exact />
//               <Route path='/about' component={About} />
//               <Route path='/contact' component={Contact} />
//               <Route component={Error} />
//             </Switch>
//           </>
//         </Router>

//       </>
//     );
//   }
// }