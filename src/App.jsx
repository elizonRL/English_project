/* import { useEffect, useState } from "react";
import getDataService from "./services/getData.service"; */
import Card from "./components/Card";
import "@justinribeiro/lite-youtube";
import Video from "./components/Viddeo";
import YouTube from "./components/icons/Yotube";
import Book from "./components/icons/Book";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const App = () => {
  /* const [topic, setTopics] = useState([]); */
  const videos = [
    {
      id: 0,
      videoTitle: "Learn College Vocabulary Words with Legally Blonde",
      videoId: "Wv0_rOzy48c",
    },
    {
      id: 1,
      videoTitle: "College/University Vocabulary ",
      videoId: "sKpJXh8qx1Q",
    },
    {
      id: 2,
      videoTitle: "Obligation and prohibition",
      videoId: "Xhd1bEVXoZk",
    },
    {
      id: 3,
      videoTitle: "Diferencia MUST, HAVE TO, MUSTN'T y DON'T HAVE TO",
      videoId: "WGQIIBKf0I4",
    },
    {
      id: 4,
      videoTitle: "too and Enough",
      videoId: "0uDQLPVBTy4",
    },
    {
      id: 5,
      videoTitle: "Zero and first conditionals",
      videoId: "ttUbJjKBncQ",
    },
    {
      id: 6,
      videoTitle: "Gerund and infinitive",
      videoId: "gqtmM3bVMaE",
    },
  ];
  const topics = [
    {
      id: 1,
      title: "Unit 5: what would you like to Study?",
      desciption: "the school and university subjects, learming Grammar",
      units: [
        {
          id: 1,
          title: "subjects schools",
          links: [
            {
              id: 1,
              title: "vocabulary and Pronutiatios",
              url: "https://ieltsliz.com/education-vocabulary-and-pronunciation/",
            },
          ],
        },
        {
          id: 2,
          title: "obligation and prohibition",
          links: [
            {
              id: 1,
              title: "Have to, must and should for obligation and advice",
              url: "https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/have-must-should-obligation-advice",
            },
            {
              id: 2,
              title: "have to, have got to, must and mustn't",
              url: "https://test-english.com/grammar-points/b1/have-to-must-should/",
            },
          ],
        },
        {
          id: 3,
          title: "zero and first conditionals",
          links: [
            {
              id: 1,
              title: "Conditionals",
              url: "https://www.curso-ingles.com/aprender/cursos/nivel-avanzado/conditionals/conditional-sentences",
            },
          ],
        },
        {
          id: 4,
          title: "Enough and Too",
          links: [
            {
              id: 1,
              title: "Enough and Too",
              url: "https://www.curso-ingles.com/aprender/cursos/nivel-avanzado/adjectives-and-adverbs/enough-and-too",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      title: "unit 6: Have you ever been to Florida",
      desciption: "Sport and activities, learming Grammar",
      units: [
        {
          id: 1,
          title: "sports",
          links: [
            {
              id: 1,
              title: "Sports vocabulary",
              url: "https://www.myenglishpages.com/vocabulary-lesson-sports/",
            },
          ],
        },
        {
          id: 2,
          title: "Gammar: verb + infinitive/ verb + gerund",
          links: [
            {
              id: 1,
              title: "gerund or infinitive cuso ingles",
              url: "https://www.curso-ingles.com/aprender/cursos/nivel-intermedio/the-gerund-and-infinitive/the-gerund-and-infinitive",
            },
          ],
        },
      ],
    },
  ];
  /*  useEffect(() => {
    getDataService.getAllData().then((data) => {
      setTopics(data);
    });
  }, []); */

  return (
    <>
      <Container fixed>
      <main>
        <h1>
          English App <Book width="44" heigth="44" />
        </h1>
        <h2>The topics of the first test</h2>
        <p>
          These are the different topics covered in units 5 and 6 for the exam.
        </p>
        <Card topics={topics} />
        <section>
          <h2 className="title-video">
            List of videos <YouTube />{" "}
          </h2>
          <Video videos={videos} />
        </section>
        <section className="practices">
          <h2>practice about units 5 and 6</h2>
          <Button
            variant="contained"
            href="https://docs.google.com/forms/d/e/1FAIpQLSftWBM24h_a1gh284-3xcHmCYum5OHyvpJD90Hit3xL29EccA/viewform?usp=sf_link"
            target="blank"
          >
            link go to practice <Book width="22" height="22" />
          </Button>
        </section>
      </main>
      </Container>
    </>
  );
};

export default App;
