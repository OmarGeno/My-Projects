import "./App.css";
import { Header } from "./Header";
import { LeftComponent } from "./LeftComponent";
import { NavBar } from "./NavBar";
import { SongsInfo } from "./SongsInfo";

function App() {
  return (
    <section className="main">
      <div className="grid" >
        <div className="row">
          <div className="col-2 color-l height sticky">
            <LeftComponent />
          </div>
          <div className="col color-r height">
            <div className="sticky">
              <NavBar />
            </div>
            <div>
              <Header />
            </div>
            <div className="hov-li">
              <SongsInfo/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
