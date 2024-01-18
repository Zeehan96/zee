import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { post_List } from './utilis';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Seen from './components/seen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Seen/>
      <BrowserRouter>
      <Routes>
          <Route index element={<PostList/>} />
      </Routes>
    </BrowserRouter>      
    </div>
  );
}

export default App;
