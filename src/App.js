import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import "./styles/navbar.css";
import ContactUs from "./routes/ContactUs";
import Registration from "./routes/Registration";
import Batches from "./routes/Batches";
import EventsGallery from "./routes/EventsGallery";
import Initiator from "./routes/Initiator";
import UpdateEventDetails from "./routes/UpdateEventDetails";
import InfoContextProvider from "./context/InfoContextProvider";
import Dashboard from "./components/dashboard/Dashboard";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./components/NotFound";
import MembersDashboard from "./components/dashboard/MembersDashboard";
import EventsDashboard from "./components/dashboard/EventsDashboard";
import GalleryDashboard from "./components/dashboard/GalleryDashboard";
import Login from "./components/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="events-gallery" element={<EventsGallery />} />
        <Route path="batches" element={<Batches />} />
        <Route path="registration" element={<Registration />} />
        <Route path="initiator" element={<Initiator />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="add/upcoming/events" element={<UpdateEventDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="members" element={<MembersDashboard />} />
        <Route path="events" element={<EventsDashboard />} />
        <Route path="gallery" element={<GalleryDashboard />} />
        <Route path="*" element={<NotFound />} />
         <Route path="/login" element={<Login />} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <InfoContextProvider>
      <RouterProvider router={router} />
    </InfoContextProvider>
  );
}
