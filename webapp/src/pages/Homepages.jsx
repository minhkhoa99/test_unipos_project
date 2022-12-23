import Leftbox from "../components/Leftbox";
import Rightbox from "../components/Rightbox/Rightbox";
import { Outlet } from "react-router-dom";
// import History from "../components/History";
// import About from "../components/About";
// import Sendpoint from "../components/ContentHistory/SendPoint";
// import ReceivePoint from "../components/ContentHistory/ReceivePoint";
// import Clap from "../components/ContentHistory/Clap";
// import All from "../components/ContentHistory/All";
import SubHeader from "../components/SubHeader";

function Homepages() {
  return (
    <>
      <div className='homepage'>
        <Leftbox />
        <div className='home-right'>
          <SubHeader />
          <div className='home-right-bottom'>
            <Outlet></Outlet>
            {/* <Routes>

              <Route path='/home' element={<ContentHome />}></Route>
              <Route path='/history' element={<History />}>
                <Route index element={<All />}></Route>
                <Route path='/history/all' element={<All />}></Route>
                <Route
                  path='/history/sendpoint'
                  element={<Sendpoint />}
                ></Route>
                <Route
                  path='/history/receivepoint'
                  element={<ReceivePoint />}
                ></Route>
                <Route path='/history/clap' element={<Clap />}></Route>
              </Route>
              <Route path='/about' element={<About />}></Route>
            </Routes> */}
            <Rightbox />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepages;
