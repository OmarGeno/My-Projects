export const Songs = [
  {
    id: 1,
    songName: "Playground",
    singer: "Bea Miller",
    album: "Arcane",
    length: "3:50",
  },
  {
    id: 2,
    songName: "Our Love",
    singer: "Curtis Harding, Jazmine Sullivan",
    album: "Arcane",
    length: "3:38",
  },
  {
    id: 3,
    songName: "Goodbye",
    singer: "Ramsey",
    album: "Arcane",
    length: "3:51",
  },
  {
    id: 4,
    songName: "Dirty Little Animals",
    singer: "	BONES UK",
    album: "Arcane",
    length: "3:25",
  },
  {
    id: 5,
    songName: "Enemy",
    singer: "Imagine Dragons & JID",
    album: "Arcane",
    length: "2:53",
  },
  {
    id: 6,
    songName: "Guns for Hire",
    singer: "Woodkid",
    album: "Arcane",
    length: "3:46",
  },
  {
    id: 7,
    songName: "Misfit Toys",
    singer: "Pusha T & Mako",
    album: "Arcane",
    length: "3:09",
  },
  {
    id: 8,
    songName: "Dynasties and Dystopia",
    singer: "Denzel Curry, Gizzle, Bren Joy",
    album: "Arcane",
    length: "2:58",
  },
  {
    id: 9,
    songName: "Snakes",
    singer: "Pvris, Miyavi",
    album: "Arcane",
    length: "2:41",
  },
  {
    id: 10,
    songName: "When Everything Went Wrong",
    singer: "Fantastic Negrito",
    album: "Arcane",
    length: "3:13",
  },
  {
    id: 11,
    songName: "What Could Have Been",
    singer: "Sting, Ray Chen",
    album: "Arcane",
    length: "3:33",
  },
];
export function AlbumHeader(props) {
  return (
    <>
      <div className="row grid">
        <div className="col-11">
          <div className="numbers">
            <div>
              {props.id}
            </div>
            <div>
              <h6>{props.songName} (from the series Arcane League of Legends)</h6>
              <p style={{color: "rgb(132,132,133)"}}>{props.singer}</p>
            </div>
          </div>
        </div>
        <div className="col-1">
          <p style={{padding: "0", margin: "0"}}>{props.songLength}</p>
        </div>
      </div>
    </>
  );
}
