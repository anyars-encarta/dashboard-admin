import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from './pages/list/List';
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { userInputs, productInputs } from "./constants/formSource";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />

            <Route path='users'>
              <Route index element={<List type='user' />} />
              <Route path=':userId' element={<Single type='user' />} />
              <Route path='new' element={<New inputs={userInputs} title='Add New User' />} />
            </Route>

            <Route path='products'>
              <Route index element={<List type='product' />} />
              <Route path=':productId' element={<Single type='product' />} />
              <Route path='new' element={<New inputs={productInputs} title='Add New Product' />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
