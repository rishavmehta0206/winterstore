import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Shared = lazy(() => import("./pages/Shared"));
const Home = lazy(() => import("./pages/Home"));
const Favourite = lazy(() => import("./context/Fav/Favourite"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Single = lazy(() => import("./components/Single/Single"));
// import Shared from "./pages/Shared";
// import Home from "./pages/Home";
// import Favourite from "./context/Fav/Favourite";
// import Cart from "./components/Cart/Cart";
// import Single from "./components/Single/Single";
// const Favourite = React.lazy(() => import("./context/Fav/Favourite"));
function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Single />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
