import './App.css';
import React from "react";
import Navigation from "./components/navigation";
import MyRoutes from './routes/myRoutes';


const App = () => (
  <>    
    <div>
      <Navigation />
    </div>
    <MyRoutes/>
  </>
);

export default App;
