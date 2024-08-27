import { Link } from "@mui/material";
import Weblink from "./icons/Weblink";

const Card = ({ topics }) => {
  console.log(topics);
  return (
    <>
      <div className="cards">
        {topics.map((topic) => (
          <article className="card" key={topic.id}>
            <h3>{topic.title}</h3>
            <p>{topic.desciption}</p>
            {topic.units.map((recurso) => (
              <div key={recurso.id}>
                <h3>{recurso.title}</h3>
                <ul>
                  {recurso.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} underline="hover" target="blank">
                        {link.title} <Weblink/>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </article>
        ))}
      </div>
    </>
  );
};

export default Card;
