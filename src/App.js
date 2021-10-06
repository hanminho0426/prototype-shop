import Header from "./componenets/Header";
import Prototypes from "./componenets/Prototypes";
import Orders from "./componenets/Orders";
import Footer from "./componenets/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;
