import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Player from "./Components/Player";
import Footer from "./Components/Footer";

function App() {
  const videoId = "1hLsI4Gnb2k";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <Player videoId={videoId} />
      <Footer></Footer>
    </div>
  );
}

export default App;
