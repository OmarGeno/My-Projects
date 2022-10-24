import { useState } from "react";
import { useEffect } from "react";
import { CardInfo } from "./CardInfo";
import axios from "axios";

export function FetchData() {
  const [cards, setCard] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63473cd965b57a31e6944819")
      .then((r) => {
        console.log(r);
        setCard(r.data.record);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-100" >
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="form-control me-2"
          placeholder="Filter By Name"
        />
      </div>
      <div className="card-generated">
        {cards
          .filter((card) => {
            return search.toLocaleLowerCase() === ""
              ? card
              : `${card.title} ${card.first_name} ${card.last_name}`
                  .toLocaleLowerCase()
                  .includes(search);
          })
          .map((card) => (
            <CardInfo
              profileImg={card.profile_img}
              title={card.title}
              firstName={card.first_name}
              lastName={card.last_name}
              jobTitle={card.job_title}
              companyName={card.company_name}
              number={card.address.street.number}
              name={card.address.street.name}
              city={card.address.city}
              country={card.address.country}
              icon={card.icon}
              media={card.media}
              key={card.toString()}
            />
          ))}
      </div>
    </div>
  );
}
