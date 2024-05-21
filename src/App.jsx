import AdminProducts from "./pages/AdminProducts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Register from "./pages/Register";
import { Route } from "@solidjs/router";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Register} />
      <Route path="/products" component={Products} />
      <Route path="*" component={NotFound} />
    </>
  );
}

export default App;
