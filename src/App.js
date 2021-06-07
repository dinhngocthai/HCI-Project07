import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import RouterURL from "./RouterURL/RouterURL";

function App() {
  return (
    <div className="App">
      <Header />
      <Mobile/>
      <RouterURL/> 
      <Footer />
    </div>
  );
}

export default App;
