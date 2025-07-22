import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-100 min-h-screen flex flex-col">
          <Nav />
          <main className="container mx-auto px-4 py-8 flex-grow">
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
