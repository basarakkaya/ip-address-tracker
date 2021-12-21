import React from "react";
import axios from "axios";

import Form from "./components/Form";
import Info from "./components/Info";
import Map from "./components/Map";

function App() {
  const [coordinates, setCoordinates] = React.useState(null);
  // const [inputVal, setInputVal] = React.useState("");
  const [data, setData] = React.useState(null);

  const handleIPSearch = async (address, type) => {
    try {
      const res = await axios.get(`/ipAPI/${type}/${address}`);

      const ipData = res?.data;

      setData(ipData);
      setCoordinates([ipData.lat, ipData.lng]);
    } catch (error) {
      alert(error.message);
      setData(null);
    }
  };

  return (
    <div className="App">
      <header>
        <h3>IP Address Tracker</h3>
      </header>
      <Form onSubmit={handleIPSearch} />
      {data && <Info data={data} />}
      <Map location={coordinates} />
    </div>
  );
}

export default App;