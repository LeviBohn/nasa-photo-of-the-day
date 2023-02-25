import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const dummyData = {
  copyright: "Fefo Bouvier",
  date: "2023-02-25",
  explanation: "On February 22, a young Moon shared the western sky at sunset with bright planets Venus and Jupiter along the ecliptic plane. The beautiful celestial conjunction was visible around planet Earth. But from some locations Jupiter hid for a while, occulted by the crescent lunar disk. The Solar System's ruling gas giant was captured here just before it disappeared behind the the Moon's dark edge, seen over the Río de la Plata at Colonia del Sacramento, Uruguay.  In the serene river and skyscape Venus is not so shy, shining brightly closer to the horizon through the fading twilight. Next week Venus and Jupiter will appear even closer in your evening sky.",
  hdurl: "https://apod.nasa.gov/apod/image/2302/JupiterOccultationFefoBouvier.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Crescent Moon Occultation"
}

function App() {
  const [data, setData] = useState(dummyData);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
