import React from "react";
import axios from "axios";
import L from "leaflet";

function App() {
  const apicall = async () => {
    const res = await axios.get("/mapAPI");
    console.log(res);
  };

  React.useEffect(() => {
    apicall();
  }, []);

  return <div className="App"></div>;
}

export default App;
