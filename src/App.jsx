import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import EzoicPageviewTracker from "./components/EzoicPageviewTracker";
import EzoicAd from "./components/EzoicAd";

function App() {
  return (
    <>
      <BrowserRouter>
        <EzoicPageviewTracker />
        <div className="bg-slate-700 min-h-screen flex flex-col">
          <Nav />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <EzoicAd placeholderId={101} />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/post/:postID" element={<PostPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
