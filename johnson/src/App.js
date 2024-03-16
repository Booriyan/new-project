import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import SearchResults1 from "./pages/SearchResults1";
import SearchResults2 from "./pages/SearchResults2";
import SearchResults3 from "./pages/SearchResults3";
import SearchResults from "./pages/SearchResults";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/search-results2":
        title = "";
        metaDescription = "";
        break;
      case "/search-results3":
        title = "";
        metaDescription = "";
        break;
      case "/search-results":
        title = "";
        metaDescription = "";
        break;
      case "/search-results1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/search-results2" element={<SearchResults1 />} />
      <Route path="/search-results3" element={<SearchResults2 />} />
      <Route path="/search-results" element={<SearchResults3 />} />
      <Route path="/search-results1" element={<SearchResults />} />
    </Routes>
  );
}
export default App;
