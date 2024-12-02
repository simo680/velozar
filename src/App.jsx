import ClientExperience from "./components/ClientExperience/ClientExperience";
import BikeInfo from "./components/BikeInfo/BikeInfo";
import Header from "./components/Header/Header";
import OfferList from "./components/OfferList/OfferList";
import ServiceDescription from "./components/ServiceDescription/ServiceDescription";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <ServiceDescription />
      <ClientExperience />
      <OfferList />
      <BikeInfo />
    </>
  );
}

export default App;
