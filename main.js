//Jorge Andre Franco Hernandez 27/09/2022
//The program starts setting the dark mode if it is set on the device

darkThemeSetter();

//Elements to be listened get created
//Button for changing theme
const themeToogler = document.querySelector("#themeToogler");
//Theme media query to be listened to
const deviceThemeListener = window.matchMedia("(prefers-color-scheme: dark)");

//For changing the theme on click
themeToogler.addEventListener("click", (e) => {
  themeChanger();
});
//For setting the theme according to the device setting
deviceThemeListener.addEventListener("change", (e) => {
  darkThemeSetter();
});

function darkThemeSetter() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function themeChanger() {
  console.log("clickheard");
  if (document.documentElement.getAttribute("data-theme") == "dark") {
    console.log("setting light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    console.log("setting dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
//this are all the id's of the elements that will be used with the API
// id = "usernameForm";
// id = "usernameValue";
// id = "usernameSearchButton";
// id = "userImg";
// id = "userNickName";
// id = "profileLink";
// id = "joinedDate";
// id = "bioDescription";
// id = "reposQuantity";
// id = "followersQuantity";
// id = "followingQuantity";
// id = "location";
// id = "blog";
// id = "twitter";
// id = "workplace";

const usernameForm = document.querySelector("#usernameForm");
const usernameValue = document.querySelector("#usernameValue");
const usernameSearchButton = document.querySelector("#usernameSearchButton");

usernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getUserInfoPromise();
});

const getUserInfoPromise = async () => {
  try {
    console.log(usernameValue.value);
    const res = await fetch(
      `https://api.github.com/users/${usernameValue.value}`
    );
    if (res.status == 404) {
      throw "User not found!";
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const setUserImg = async;
// const userImg = document.querySelector("#userImg");
// const userNickName = document.querySelector("#userNickName");
// const profileLink = document.querySelector("#profileLink");
// const joinedDate = document.querySelector("#joinedDate");
// const bioDescription = document.querySelector("#bioDescription");
// const reposQuantity = document.querySelector("#reposQuantity");
// const followersQuantity = document.querySelector("#followersQuantity");
// const followingQuantity = document.querySelector("#followingQuantity");
// const location = document.querySelector("#location");
// const blog = document.querySelector("#blog");
// const twitter = document.querySelector("#twitter");
// const workplace = document.querySelector("#workplace");
