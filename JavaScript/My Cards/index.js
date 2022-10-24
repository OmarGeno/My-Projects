import HtmlElement from "./MyCardHtmlGenerator.js";

class Td extends HtmlElement {
  constructor(
    attributes = [
      `style="display: flex;margin-left: 2.65rem;align-items: center;width: 100%;height: auto;height: 25px;"`,
    ]
  ) {
    super("td", attributes);
  }
}
class Tr extends HtmlElement {
  constructor(
    attributes = [
      `style="display: flex;justify-content: center;align-items: center;width: 100%;height: auto;border-bottom:  1px solid rgb(210, 210, 210);padding: .6rem 0rem;"`,
    ]
  ) {
    super("tr", attributes);
  }
}
class Table extends HtmlElement {
  constructor(
    attributes = [
      `style="width: 100%;height: auto;width: 100%;height: auto;background-color: rgb(255, 255, 255);padding-bottom: 0.5rem;"`,
    ]
  ) {
    super("table", attributes);
  }
}

let myRequest = new Request("/data/exam_data.json");
fetch(myRequest)
  .then((response) => response.text())
  .then(createHtml);

function createHtml(data) {
  const dataObjs = JSON.parse(data);
  let htmlSection = new HtmlElement("div", [
    'style="width: 100%; background-color: bisque; display: flex;justify-content: center;align-items: center;   height: auto;flex-wrap: wrap; flex-direction: row;font-family: sans-serif;"',
  ]);

  for (let dataObj of dataObjs) {
    const htmlBlock = generateHtmlBlock(dataObj);
    htmlSection.insertElement(htmlBlock);
  }
  htmlSection.printElement();
}

function generateHtmlBlock(data) {
  let containerDiv = new HtmlElement("div", [
    'style="width:20em; height: 635px; background-color: white; margin: 50px; border: 1px double rgb(209, 179, 255);box-shadow: 1px 1px 10px .1px; border-radius: 20px; padding:10px"',
    'class="container items-center"',
  ]);
  let upperDiv = new HtmlElement("div", [
    'style="width: auto; height: 6em; display: flex;justify-content: center;align-items: center; margin:0 auto;transform: translateY(55px);transition: all 0.4s ease-in-out"',
  ]);
  let img = new HtmlElement("img", [
    `src="${data.profile_img}"`,
    'style="border-radius: 50%; border: 5px solid rgb(209, 179, 255); align-items: center; margin: 0 auto; background-color: black;"',
  ]);
  let infoDiv = new HtmlElement("div", [
    'style=" width: auto;padding: .1em;margin: 10px auto; height: auto; background-color: rgb(209, 179, 255);box-shadow: 0px 0px 3px .1px; border-radius: 20px;transform: translateY(55px);transition: all 0.4s ease-in-out "',
  ]);
  let h2 = new HtmlElement("h2", [
    'style="display: flex;justify-content: center;align-items: center; margin-top: 10px;"',
  ]);
  let jobTitle = new HtmlElement("p", [
    'style="display: flex;color: rgb(255, 255, 255) ;justify-content: center;align-items: center; margin-bottom: 7px; margin-top: -10px"',
  ]);
  let btnDiv = new HtmlElement("div", [
    'style="display: flex;justify-content: center;align-items: center;border-bottom: rgb(225, 225, 225) 1px solid;padding-bottom: 1rem;"',
  ]);
  let follow = new HtmlElement("button", [
    'style="display: flex;justify-content: center;cursor: pointer;align-items: center;transition: all .4s ease-in-out; background-color: rgb(228, 210, 255);margin: .1em; padding: .8em 1.5em;visibility: hidden;border-radius: 7px";border: .1px blue solid;"',
  ]);
  let message = new HtmlElement("button", [
    'style="display: flex;justify-content: center;visibility: hidden;cursor: pointer;align-items: center; background-color: white;margin: .1em; padding: .8em 1.5em;border-radius: 7px; transition: all .4s ease-in-out;"',
  ]);
  let mediaDiv = new HtmlElement("div");
  let address = new HtmlElement("p", [
    'style="display: flex;justify-content: center;align-items: center;border-bottom: rgb(225, 225, 225) 1px solid;padding: .5rem;"',
  ]);
  let socialMediatable = new Table();
  let mainTr = new Tr();

  containerDiv.insertElement(upperDiv);
  containerDiv.insertElement(infoDiv);
  containerDiv.insertElement(btnDiv);
  containerDiv.insertElement(mediaDiv);
  containerDiv.insertElement(socialMediatable);

  upperDiv.insertElement(img);
  infoDiv.insertElement(h2);
  infoDiv.insertElement(jobTitle);
  btnDiv.insertElement(follow);
  btnDiv.insertElement(message);
  mediaDiv.insertElement(address);
  socialMediatable.insertElement(mainTr);

  follow.insertText("Follow");
  message.insertText("Message");

  let imgSrc = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    "https://pngfolio.com/images/all_img/copy/1631443365tiktok-icon.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png",
    "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",
    "https://www.citypng.com/public/uploads/preview/-51609794436soaav8dnrc.png",
  ];
  for (let i = 0; i < data.media.length; i++) {
    socialMediatable.insertElement(CreateTableRow(imgSrc[i], data.media[i]));
  }

  function CreateTableRow(imgSrc, textContent) {
    let mainTr = new Tr();
    let imgTextTd = new Td();
    let iconImg = new HtmlElement("img", [
      `src="${imgSrc}"`,
      'style=" width: 25px;height: 25px;margin-right: .5rem;"',
    ]);
    let linkTd = new Td();
    let Alink = new HtmlElement("a", [
      'style="text-decoration: none;cursor: pointer;"',
    ]);

    mainTr.insertElement(imgTextTd);
    imgTextTd.insertElement(iconImg);
    iconImg.insertText(textContent);
    mainTr.insertElement(linkTd);
    linkTd.insertElement(Alink);
    Alink.insertText(`@${textContent}_`);
    return mainTr;
  }

  h2.insertText(`${data.title} ${data.first_name} ${data.last_name}`);

  jobTitle.insertText(`${data.job_title} at ${data.company_name}`);

  address.insertText(
    `${data.address.street.number} ${data.address.street.name}, ${data.address.city}, ${data.address.country}`
  );

  {
    message.addEventListener("mouseover", function () {
      message.element.style.backgroundColor = "rgb(134, 207, 255)";
    });
    message.addEventListener("mouseout", function () {
      message.element.style.backgroundColor = "white";
    });
    follow.addEventListener("mouseover", function () {
      follow.element.style.backgroundColor = "rgb(184, 137, 253)";
    });
    follow.addEventListener("mouseout", function () {
      follow.element.style.backgroundColor = "rgb(228, 210, 255)";
    });
  }

  {
    containerDiv.addEventListener("mouseover", function () {
      follow.element.style.visibility = "initial";
      message.element.style.visibility = "initial";
      upperDiv.element.style.transform = "translateY(0)";
      infoDiv.element.style.transform = "translateY(0)";
      infoDiv.element.style.transition = "all 1.1s";
      upperDiv.element.style.transition = "all 1.1s";
    });
    containerDiv.addEventListener("mouseout", function () {
      follow.element.style.visibility = "hidden";
      message.element.style.visibility = "hidden";
      upperDiv.element.style.transform = "translateY(55px)";
      infoDiv.element.style.transform = "translateY(55px)";
    });
  }

  {
    upperDiv.addEventListener("click", function () {
      alert(`${data.title} ${data.first_name} ${data.last_name}`);
    });
  }

  {
    follow.addEventListener("click", function () {
      if (follow.element.innerText == "Follow") {
        alert(
          `You started to follow ${data.title} ${data.first_name} ${data.last_name}`
        );
        follow.element.innerText = "Following";
      } else if (follow.element.innerText == "Unfollow") {
        alert(
          `You stoped following ${data.title} ${data.first_name} ${data.last_name}`
        );
        follow.element.innerText = "Follow";
      }
    });
    message.addEventListener("click", function () {
      alert(`Messaged ${data.title} ${data.first_name} ${data.last_name}`);
    });
  }
  {
    follow.addEventListener("mouseover", function () {
      if (follow.element.innerText == "Following")
        follow.element.innerText = "Unfollow";
    });
    follow.addEventListener("mouseout", function () {
      if (follow.element.innerText == "Unfollow")
        follow.element.innerText = "Following";
    });
  }
  return containerDiv;
}
