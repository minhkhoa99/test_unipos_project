import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import { Routes, Route } from "react-router-dom";
import "../src/assets/css/dashboard/container.css";
import Homepages from "./pages/Homepages";
import ContentHome from "./components/Contenthome";
import Rank from "./components/Rank";
import Support from "./components/Support";
import History from "./components/History";
import About from "./components/About";
import Sendpoint from "./components/ContentHistory/SendPoint";
import ReceivePoint from "./components/ContentHistory/ReceivePoint";
import Clap from "./components/ContentHistory/Clap";
import All from "./components/ContentHistory/All";
import NavbarTab from "./components/dashboard/NavbarTab";
import FeaturePages from "./components/Feature/FeaturePages";

import "./App.css";
import UserProfile from "./pages/UserProfile.jsx";

function App() {
  return (
    <div>
      <section className='mv__heading'>
        <Routes>
          <Route path='/home' element={<Homepages />}>
            <Route index element={<ContentHome />}></Route>
            <Route path='/home/blog' element={<ContentHome />}></Route>
            <Route path='/home/history' element={<History />}>
              <Route index element={<All />}></Route>
              <Route path='/home/history/all' element={<All />}></Route>
              <Route
                path='/home/history/sendpoint'
                element={<Sendpoint />}
              ></Route>
              <Route
                path='/home/history/receivepoint'
                element={<ReceivePoint />}
              ></Route>
              <Route path='/home/history/clap' element={<Clap />}></Route>
            </Route>
            <Route path='/home/about' element={<About />}></Route>
          </Route>
          <Route path='/' element={<NavbarTab />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/gioi-thieu' element={<FeaturePages />} />
          
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
