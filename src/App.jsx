import { Route, Routes } from "@solidjs/router";
import Home from './pages/Home'
import Now from './pages/Now'
import Readme from './pages/Readme'

function App() {
  return (
    <Routes>
      <Route path="/" component={Home}/>
      <Route path="/now" component={Now}/>
      <Route path="/readme" component={Readme}/>
    </Routes>
  );
}

export default App;
