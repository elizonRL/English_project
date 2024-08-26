import { useEffect, useState } from "react";
import Card from "./components/Card";
import getDataService from "./services/getData.service";

const App = () => {
  const [topic, setTopics] = useState([]);
  useEffect(() => {
    getDataService.getAllData().then((data) => {
      setTopics(data)
      console.log("data fromt api =>", data);
    });
  }, []);
  console.log("topic useState =>", topic)
  
  return (
    <>
      <main>
        <h1>English App</h1>
        <h2>The first topics of test</h2>
        <p>
          These are the different topics covered in units 5 and 6 for the exam.
        </p>
        <Card topics={topic} />
      </main>
    </>
  );
};

export default App;
