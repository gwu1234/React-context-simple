import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home} from "./home";
import { About } from "./about";
import { UserContext } from "./UserContext";

function App () {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <div>
          <div>
              <Link to="/">Home</Link>
          </div>
          <div>
              <Link to="/about/">About</Link>
          </div>
  
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
