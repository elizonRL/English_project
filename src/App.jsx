
const App = () => {
  const topics =[
    {
      id: 1,
      theme:"University and School",
      recusos:[
        {
          id:1,
          name:"vocabulary and Pronutiatios",
          url:"https://ieltsliz.com/education-vocabulary-and-pronunciation/"
        },
        
      ]
    }
  ]
  return (
    <>
      <h1>English App</h1>
      {topics.map((topic) => (
        <div key={topic.id}>
          <h2>{topic.theme}</h2>
          <ul>
            {topic.recusos.map((recurso) => (
              <li key={recurso.id}>
                <a href={recurso.url} target="blank">{recurso.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default App;
