import { useState } from "react";

export function CardInfo(props) {
  const [transitions, setTransitions] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [follow, setFollow] = useState("Follow");

  const enterDiv = () => {
    setTransitions("translate");
    setBgColor("visible");
  };
  const leaveDiv = () => {
    setTransitions();
    setBgColor();
  };

  const FollowButton = () => {
    follow === "Follow" ? setFollow("Following") : setFollow("Follow");
    follow === "Follow"
      ? alert(
          `You started to follow ${props.title} ${props.firstName} ${props.lastName}`
        )
      : alert(
          `You stoped to follow ${props.title} ${props.firstName} ${props.lastName}`
        );
  };

  return (
    <>
      <div
        className={`main-card`}
        onMouseEnter={enterDiv}
        onMouseLeave={leaveDiv}
      >
        <div className={`upper-div ${transitions}`}>
          <img src={props.profileImg} alt="" className="upper-img" />
        </div>
        <div className={`info-div ${transitions}`}>
          <h4 className="h2-e" style={{ textAlign: "center" }}>
            {props.title} {props.firstName} {props.lastName}
          </h4>{" "}
          <br />
          <p>
            {props.jobTitle} at {props.companyName}
          </p>
        </div>

        <div className={`btn-class ${bgColor}`}>
          <button
            className={`follow ${bgColor}`}
            onClick={FollowButton}
            onMouseEnter={() => {
              follow === "Following"
                ? setFollow("Unfollow")
                : setFollow("Follow");
            }}
            onMouseLeave={() => {
              if (follow === "Unfollow") setFollow("Following");
            }}
          >
            {follow}
          </button>
          <button className={`message ${bgColor}`}>Message</button>
        </div>

        <div className="">
          <p className="media">
            {props.number}, {props.name}, {""}
            {props.city}, {""}
            {props.country}
          </p>
        </div>

        <div className="down-div">
          <div className="icon-div">
            {props.icon.map((ic) => (
              <div>
                <img key={ic.toString()} src={ic} alt="" className="ic" />
              </div>
            ))}
          </div>

          <div className="icon-text">
            {props.media.map((me) => (
              <p className="ic-text" key={me.toString()}>
                {me}
              </p>
            ))}
          </div>
          
          <div className="icon-link">
            {props.media.map((med) => (
              <a
                className="links"
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
                key={med.toString()}
              >
                @{med}_
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
