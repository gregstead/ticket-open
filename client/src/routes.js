
import AddNewPatron from "./pages/AddNewPatron";
import AddNewUser from "./pages/AddNewUser";
import Patrons from "./pages/Patrons";
import Users from "./pages/Users"
import EditPatron from "./pages/EditPatron/EditPatron";

const routes = [
  {
    path: "/patron/edit",
    component: EditPatron,
  },
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
  {
    path: "/user",
    component: Users,
  }, 
];

export default routes;
