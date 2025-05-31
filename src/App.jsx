import Header from "./components/Header";
import Keto from "./components/Keto";
import MyIcons from "./components/Icons";
import Filter from "./components/Filter";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="mainDiv">
        <Filter />
        <Keto />
      </div>
      <Footer />
    </div>
  );
};

export default App;
