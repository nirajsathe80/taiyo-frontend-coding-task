import { lazy } from "react";

const HomePage = lazy(() => import("../src/pages/homepage"));
const Contact = lazy(() => import("../src/pages/contact"));
const NewContact = lazy(() => import("./pages/contact/new-contact"));
const EditContact = lazy(() => import("./pages/contact/edit-contact"));
const ViewContact = lazy(() => import("./pages/contact/view-contact"));
const ChartAndMaps = lazy(() => import("./pages/charAndMaps"));

export const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/contact/new",
    Component: NewContact,
  },
  {
    path: "/contact/:id",
    Component: ViewContact,
  },
  {
    path: "/contact/:id/edit",
    Component: EditContact,
  },
  {
    path: "/charts-and-maps",
    Component: ChartAndMaps,
  },
];
