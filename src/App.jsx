import { createSignal } from "solid-js";
import AdminProducts from "./pages/AdminProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { Route } from "@solidjs/router";
//import IndividualProducts from "./pages/IndividualProducts";
import InquireNow from "./components/InquiryForm";

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
      />
      <Route path="/inquiry" component={InquireNow} />
      <Route path="/sign-up" component={Register} />
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
