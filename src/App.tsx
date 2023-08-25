import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./scss/App.scss";
import { RouterProvider } from "react-router-dom";
import { baseroute } from "./routes/Main";

function App() {
  return (
    <Container
      fluid
      className="App"
    >
      <RouterProvider router={baseroute} />

      <Footer />
    </Container>
  );
}

export default App;
