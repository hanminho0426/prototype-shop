import Header from "./componenets/Header";
import Prototypes from "./componenets/Prototypes";
import Orders from "./componenets/Orders";
import Footer from "./componenets/Footer";
import AppStateProvider from "./providers/AppStateProvider";
function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
