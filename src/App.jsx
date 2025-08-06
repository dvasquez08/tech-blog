import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-linear-to-r from-sky-800 to-slate-800 min-h-screen flex flex-col">
          <Nav />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/post/:postID" element={<PostPage />} />
              <Route path="/About" element={<About />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
