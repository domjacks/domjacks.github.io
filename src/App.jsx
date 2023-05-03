import { Route, Routes } from "@solidjs/router";
import Home from './pages/Home'
import Now from './pages/Now'
import Readme from './pages/Readme'
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/now" component={Now} />
        <Route path="/readme" component={Readme} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
