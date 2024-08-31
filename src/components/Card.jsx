import Weblink from "./icons/Weblink";
import { Card, CardContent, Paper } from "@mui/material";
import Divider from '@mui/material/Divider';

const Cards = ({ topics }) => {
  console.log(topics);
  return (
    <>
      <div className="cards">
        {topics.map((topic) => (
          <Paper elevation={3} key={topic.id}>	
          <Card  variant="outlined" >
            <CardContent>
              <h3>{topic.title}</h3>
              <Divider  flexItem />
              <p>{topic.desciption}</p>
              {topic.units.map((recurso) => (
                <div key={recurso.id}>
                  <Divider  flexItem />
                  <h3>{recurso.title}</h3>
                  <ul>
                    {recurso.links.map((link) => (
                      <li key={link.id}>
                        <a href={link.url} target="blank">
                          {link.title} <Weblink />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
          </Paper>
        ))}
      </div>
    </>
  );
};

export default Cards;
