import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "../src/assets/css/dashboard/container.css";
import Homepages from "./pages/Homepages";
import { useMemo } from "react";
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
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PricePage from "./pages/pricePages/PricePage.jsx";
import "./App.css";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/material/styles";
import UserProfile from "./pages/UserProfile.jsx";
import { useSelector } from "react-redux";
import Blogs from "./pages/widgets/Blogs.jsx";
import NewsPage from "./pages/newspage/NewsPage.jsx";
import CaseStudy from "./pages/caseStudy/CaseStudy.jsx";
function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/home' element={<Homepages />}>
            <Route path='/home' element={<Blogs />}></Route>
          </Route>

          <Route
            path='/myprofile'
            // element={isAuth ? <ProfilePage /> : <Navigate to="/home" />}
            element={<ProfilePage />}
          />
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
        </Routes>
      </ThemeProvider>

      <section className='mv__heading'>
        <Routes>
          <Route path='/' element={<NavbarTab />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/gioi-thieu' element={<FeaturePages />} />
          <Route path='/chi-phi' element={<PricePage />} />
          <Route path='/editprofile' element={<UserProfile />} />
          <Route path='/tin-tuc' element={<NewsPage />} />
          <Route path='nghien-cuu-dien-hinh' element={<CaseStudy />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
