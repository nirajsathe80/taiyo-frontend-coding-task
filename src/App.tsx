import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";

const HomePage = lazy(() => import("../src/pages/homepage"));
const Contact = lazy(() => import("../src/pages/contact"));
const NewContact = lazy(() => import("./pages/contact/new-contact"));
const EditContact = lazy(() => import("./pages/contact/edit-contact"));
const ViewContact = lazy(() => import("./pages/contact/view-contact"));
const ChartAndMaps = lazy(() => import("./pages/charAndMaps"));

const App = function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/new" element={<NewContact />} />
          <Route path="/contact/:id/edit" element={<EditContact />} />
          <Route path="/contact/:id" element={<ViewContact />} />
          <Route path="/charts-and-maps" element={<ChartAndMaps />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
