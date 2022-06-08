import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookShelf from "./pages/BookShelf";
import Login from "./pages/Login";
import Record from "./pages/Record";
import "./style/common.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/bookshelf" element={<BookShelf />} />
            <Route path="/record" element={<Record />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
