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
const userNotFound = document.querySelector("#notFound");

usernameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  GetPlusSetUserInfoPromise();
});

const GetPlusSetUserInfoPromise = async () => {
  try {
    //takes form user value
    console.log(usernameValue.value);
    //get java objject from fetch to api
    const res = await fetch(
      `https://api.github.com/users/${usernameValue.value}`
    );
    //checks if there is any error status
    if (res.status == 404) {
      throw "No results";
    }
    if (res.status == 403) {
      throw "Request limit exceeded";
    }
    //if there is no status error then parse the streamline on the fetch return object
    //to a parsed json object
    const data = await res.json();
    //log for debugging
    console.log(data);
    SetUserProfileImg(data);
    SetUserNickName(data);
    SetProfileLink(data);
    SetJoinedDate(data);
    SetbioDescription(data);
    SetFollowersQuantity(data);
    SetFollowingQuantity(data);
    SetReposQuantity(data);
    SetLocation(data);
    SetBlog(data);
    SetTwitter(data);
    SetWorkplace(data);
  } catch (error) {
    userNotFound.innerText = error;
    console.log(error);
    usernameValue.value = "";
    usernameValue.placeholder = "";
    userNotFound.style.opacity = 1;
    await userNotFound.classList.add("animation");
    await setTimeout(() => {
      userNotFound.classList.remove("animation");
      usernameValue.placeholder = "Search GitHub username...";
      userNotFound.style.opacity = 0;
    }, 2000);
  }
};
function SetUserProfileImg(data) {
  const userImg = document.querySelector("#userImg");
  userImg.src = data.avatar_url;
}
function SetUserNickName(data) {
  const userNickName = document.querySelector("#userNickName");
  userNickName.innerText = data.login;
}
function SetProfileLink(data) {
  const profileLink = document.querySelector("#profileLink");
  profileLink.innerText = `@${data.login}`;
  profileLink.href = data.html_url;
}
function SetJoinedDate(data) {
  const joinedDate = document.querySelector("#joinedDate");
  const createdDate = new Date(data.created_at);
  let day = createdDate.toLocaleString(undefined, { day: "numeric" });
  let month = createdDate.toLocaleString(undefined, { month: "long" });
  let year = createdDate.toLocaleString(undefined, { year: "numeric" });
  joinedDate.innerText = `${day} ${month} ${year}`;
}
function SetbioDescription(data) {
  const bioDescription = document.querySelector("#bioDescription");
  if (data.bio == null) {
    bioDescription.innerText = "Biography not available";
  } else {
    bioDescription.innerText = data.bio;
  }
}
function SetReposQuantity(data) {
  const reposQuantity = document.querySelector("#reposQuantity");
  reposQuantity.innerText = data.public_repos;
}
function SetFollowersQuantity(data) {
  const followersQuantity = document.querySelector("#followersQuantity");
  followersQuantity.innerText = data.followers;
}
function SetFollowingQuantity(data) {
  const followingQuantity = document.querySelector("#followingQuantity");
  followingQuantity.innerText = data.following;
}
function SetLocation(data) {
  const location = document.querySelector("#location");
  const locationText = document.querySelector("#locationText");
  if (data.location == null) {
    location.classList.add("notAvailable");
    locationText.innerText = "Not available";
  } else {
    location.classList.remove("notAvailable");
    locationText.innerText = data.location;
  }
}
function SetBlog(data) {
  const blog = document.querySelector("#blog");
  const blogText = document.querySelector("#blogText");
  if (data.blog == "") {
    blog.classList.add("notAvailable");
    blog.href = "";
    blogText.innerText = "Not available";
  } else {
    blog.classList.remove("notAvailable");
    blogText.innerText = data.blog;
  }
}
function SetTwitter(data) {
  const twitter = document.querySelector("#twitter");
  const twitterText = document.querySelector("#twitterText");
  if (data.twitter == null) {
    twitter.classList.add("notAvailable");
    twitterText.innerText = "Not available";
  } else {
    twitter.classList.remove("notAvailable");
    twitterText.innerText = data.twitter;
  }
}
function SetWorkplace(data) {
  const workplace = document.querySelector("#workplace");
  const workplaceText = document.querySelector("#workplaceText");
  if (data.workplace == null) {
    workplace.classList.add("notAvailable");
    workplaceText.innerText = "Not available";
  } else {
    workplace.classList.remove("notAvailable");
    workplaceText.innerText = data.workplace;
  }
}
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
// const workplace = document.querySelector("#workplace")
