import "./App.css";
import { RecetteProvider } from "./lib/contexts/recetteContext";

function App() {
  return (
    <RecetteProvider>
      <div></div>
    </RecetteProvider>
  );
}

export default App;
