import React from "react";
import { Routes, Route } from "react-router-dom";
import MiniDrawer from "./components/Drawer";
import {
  General,
  Blog,
  Homepage,
  Lead,
  Manufacturer,
  Product,
  Revenue,
  Review,
  Subscription,
  User,
} from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MiniDrawer />}>
        <Route index element={<General />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/review" element={<Review />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
