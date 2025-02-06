

import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RoomPage from "./pages/index.jsx";
function App() {
  return (
    <div className="App">
     <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/room/:roomId" element={<RoomPage />} />
     </Routes>
    </div>
  );
}

export default App;
