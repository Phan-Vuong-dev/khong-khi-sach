import "./App.css";
import { ToastContainer } from "react-toastify";
import RoutePage from "./routes";

function App() {
  return (
    <div className="relative bg-black App">
      <ToastContainer />
      <RoutePage />
    </div>
  );
}

export default App;
