const App = () => {
  const topics = [
    {
      id: 1,
      title: "Unit 5: what would you like to Study?",
      desciption: "the school and university subjects ",
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
      ],
    },
    {
      id: 2,
      title: "unit 6: Have you ever been to Florida",
      desciption: "",
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
  return (
    <>
      <main>
        <h1>English App </h1>
        <h2>The first topics of test</h2>
        <p>
          These are the different topics covered in units 5 and 6 for the exam.
        </p>
        <div className="cards">
          {topics.map((topic) => (
            <article className="card" key={topic.id}>
              <h2>{topic.title}</h2>
              <p>{topic.desciption}</p>
              {topic.units.map((recurso) => (
                <div key={recurso.id}>
                  <h3>{recurso.title}</h3>
                  <ul>
                    {recurso.links.map((link) => (
                      <li key={link.id}>
                        <a href={link.url} target="blank">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
