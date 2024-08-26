const Card = (topics) => {
    console.log(topics)
  return (<>
  <div className="cards">
          {topics.topics.map((topic) => (
            <article className="card" key={topic.id}>
              <h3>{topic.title}</h3>
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
  </>);
};

export default Card;
