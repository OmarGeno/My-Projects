// eslint-disable-next-line no-lone-blocks
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

  // eslint-disable-next-line no-lone-blocks
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

  // eslint-disable-next-line no-lone-blocks
  {
    upperDiv.addEventListener("click", function () {
      alert(`${data.title} ${data.first_name} ${data.last_name}`);
    });
  }

  // eslint-disable-next-line no-lone-blocks
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
  // eslint-disable-next-line no-lone-blocks
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