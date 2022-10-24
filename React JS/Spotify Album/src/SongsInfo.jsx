import React from "react";
import { AlbumHeader, Songs } from "./AlbumHeader";

export class SongsInfo extends React.Component {
  constructor() {
    super();
    this.Songs = Songs;
    this.albumName =
      "Arcane League of Legends(Soundtrack from the Animeted Series)";
    this.totalSongsLength = "36:57 min";
    this.albumImage =
      "https://i.scdn.co/image/ab67616d0000b273d10169c17651c8b2ab5c8416";
    // this.dateNow = Date();
  }
  render() {
    return (
      <>
        <div className="main-header">
          <div>
            <img src={this.albumImage} alt="" width="240" height="240" />
          </div>
          <div className="main-header2">
            <p style={{ fontWeight: "bold" }}>ALBUM</p>
            <h3 style={{ fontWeight: "bold" }}>{this.albumName}</h3>
            <br />
            <ul className="album-list-info">
              <a href="https://open.spotify.com/album/3MdiH74FL8mhlbnR6DcqJd">
                Arcane
              </a>{" "}
              <li>
                <a href="https://www.leagueoflegends.com">League of Legends</a>
              </li>
              <li>2021</li>
              <li>
                {this.Songs.length} songs, {this.totalSongsLength}
              </li>
            </ul>
          </div>
        </div>
        <div className="row grid table-info">
          <div className="col-11 td-info">
            <div>{"#"}</div>
            <div>{"TITLE"}</div>
          </div>
          <div className="col-1" style={{borderBottom: "1px solid gray", }}>
            <div style={{margin: "10px -5px"}}>{"TIME"}</div>
          </div>
        </div>
        <ul className="song-list">
          <li>
            {this.Songs.map((song) => (
              <AlbumHeader
                id={song.id}
                songName={song.songName}
                singer={song.singer}
                album={song.album}
                songLength={song.length}
                key={song.toString()}
              />
            ))}
          </li>
        </ul>

        <p style={{ fontSize: "14px", padding: "0 50px", margin: "0" }}>
          November 20, 2021
        </p>
        <p style={{ fontSize: "10px", padding: "0 50px" }}>@2021 Riot Games</p>
      </>
    );
  }
}
