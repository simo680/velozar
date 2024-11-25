import About from "./components/About/About";
import BikeInfo from "./components/BikeInfo/BikeInfo";
import Header from "./components/Header/Header";
import OfferList from "./components/OfferList/OfferList";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Services />
      <About />
      <OfferList />
      <BikeInfo />
    </>
  );
}

export default App;
