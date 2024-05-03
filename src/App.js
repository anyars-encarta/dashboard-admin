import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/new' element={<New />} />
          <Route path='/list' element={<List />} />
          <Route path='/single' element={<Single />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
