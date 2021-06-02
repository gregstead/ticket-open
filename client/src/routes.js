import AddNewPatron from "./pages/AddNewPatron";
import AddNewUser from "./pages/AddNewUser";
import Patrons from "./pages/Patrons";

const routes = [
  {
    path: "/patron/new",
    component: AddNewPatron,
  },
  {
    path: "/patron",
    component: Patrons,
  },
  {
    path: "/user/new",
    component: AddNewUser,
  },
];

export default routes;
