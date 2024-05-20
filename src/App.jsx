import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route } from "@solidjs/router";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Register} />
    </>
  );
}

export default App;
