import { useEffect, useState } from "react";
import Card from "./components/Card";
import getDataService from "./services/getData.service";
import "@justinribeiro/lite-youtube";
import Video from "./components/Viddeo";
import YouTube from "./components/icons/Yotube";

const App = () => {
  const [topic, setTopics] = useState([]);
  const videos = [
    {
      id: 1,
      videoTitle: "Obligation and prohibition",
      videoId: "Xhd1bEVXoZk",
    },
    {
      id: 2,
      videoTitle: "Diferencia MUST, HAVE TO, MUSTN'T y DON'T HAVE TO",
      videoId: "WGQIIBKf0I4",
    },
  ];
  useEffect(() => {
    getDataService.getAllData().then((data) => {
      setTopics(data);
    });
  }, []);

  return (
    <>
      <main>
        <h1>English App</h1>
        <h2>The first topics of test</h2>
        <p>
          These are the different topics covered in units 5 and 6 for the exam.
        </p>
        <Card topics={topic} />
        <section>
          <h2 className="title-video">List of videos <YouTube/> </h2>
          <Video videos={videos}/>
        </section>
      </main>
    </>
  );
};

export default App;
