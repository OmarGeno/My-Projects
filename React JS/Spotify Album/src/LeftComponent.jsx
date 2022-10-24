export function LeftComponent() {
  return (
    <>
      <div className="grid sticky" style={{margin: "40px",}}>
        <ul className="list-group row g-col-12 danger-text sticky">
          <div>
            <h3>
              <img src="https://i.pinimg.com/736x/f0/5c/bc/f05cbc8c0f8b075d2b4f1f68fee49649.jpg" alt="" width="47.5" height="34"/>
              Spotify
            </h3><br />
          </div>

          <div>
            <li className="list-group-item bg-black text-light">Home</li>
            <li className="list-group-item bg-black text-light">Search</li>
            <li className="list-group-item bg-black text-light">Your Library</li>
            <br />

            <li className="list-group-item bg-black text-light">Create Playlist</li>
            <li className="list-group-item bg-black text-light">Liked Songs</li>
          </div>
        </ul>
      </div>
    </>
  );
}
