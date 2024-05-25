import { Route } from "@solidjs/router";
import { createSignal, onMount } from "solid-js";

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
import AdminInquiry from "./pages/AdminInquiry";

function App() {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/check-auth", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      setIsAuthenticated(false);
    }
  });

  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route
        path="/login"
        component={() => <Login setIsAuthenticated={setIsAuthenticated} />}
      />
      //Problem hereee
      <Route path="/sign-up" component={Register} />
      <Route path="/about us" component={About} />
      <Route path="/contact us" component={InquireNow} />
      <Route path="/products" component={Products} />
      <Route path="/inquiry" component={AdminInquiry} />
      <Route
        path="/admin"
        component={() =>
          isAuthenticated() ? (
            <AdminProducts />
          ) : (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )
        }
      />
      <Route path="*" component={NotFound} />
    </>
  );
}

export default App;
