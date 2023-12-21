import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../HomePage/homePage.jsx";
import Layout from "../../Layout/layout.jsx";
import Questions from "../Questions/questionsSection.jsx";
import Success from "../Questions/success/success.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" index element={<HomePage />} />
      <Route path="queries" element={<Questions />} />
      <Route path="success" element={<Success/>} />

    </Route>
  )
);
export default router;
