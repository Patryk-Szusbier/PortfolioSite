import "./App.css";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden ">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;
