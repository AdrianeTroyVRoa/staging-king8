import { Route } from "@solidjs/router";
import { createSignal } from "solid-js";

import AdminProducts from "./pages/AdminProducts";
//import AdminInquiry from "./pages/AdminInquiry";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";
import AdminHeader from "./components/AdminHeader";
//import IndividualProducts from "./pages/IndividualProducts";
//import InquireNow from "./components/InquiryForm";
import InquireNow from "./pages/InquiryForm";
import About from "./pages/AboutUs";

function App() {
  const [isAuthenticated, setIsAuthenticated] = createSignal(
    localStorage.getItem("isAuthenticated") === "true",
  );

  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route
        path="/login"
        component={(props) => (
          <Login {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      /> //Problem hereee
      <Route
        path="/logout"
        component={(props) => (
          <AdminHeader {...props} setIsAuthenticated={setIsAuthenticated} />
        )}
      />
      <Route path="/sign-up" component={Register} />
      <Route path="/about us" component={About} />
      <Route path="/contact us" component={InquireNow} />
      <Route path="/products" component={Products} />
      <Route
        path="/admin"
        component={
          isAuthenticated() ? <AdminProducts /> : <div>Not authorized</div>
        }
      />
      
      <Route path="*" component={NotFound} />
    </>
  );
}

export default App;
