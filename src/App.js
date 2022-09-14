import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import Search from './components/Search';
import Home from './view/Home';
import File_page from './view/File_page';
import PDF_try from './components/PDF_try';
import { Link, Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>


    <div className="App">
      <Header/><br/>
      <Search/><br/>

      <Routes>
      <Route path="File_page" element={<File_page />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Page/><br/> */}
      {/* <PDF_try/> */}

    </div>
    </BrowserRouter>
  );
}

export default App;
