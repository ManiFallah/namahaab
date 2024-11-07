let onLogin = false;
const slide = () => {
  console.log(1);
  let rightDiv = document.querySelector(".sellerLogin div div");
  let leftDiv = document.querySelectorAll(".sellerLogin div div")[1];
  let loginBtn = document.querySelector(".login");
  let signupBtn = document.querySelector(".signUp");
  if (onLogin) {
    signupBtn.style.zIndex = "2";
    loginBtn.style.zIndex = "-2";
    onLogin = false;
    leftDiv.style.backgroundImage = "none";
    rightDiv.style.backgroundImage = 'url("/assets/images/sep.png")';
    let form = document.querySelector(".loginForm");
    form.style.left = "12%";
    document.querySelectorAll(".loginForm h1")[1].style.display = "none";
    document.querySelectorAll(".loginForm h1")[0].style.display = "block";
    document.querySelectorAll(".loginForm label")[2].style.display = "none";
    document.querySelectorAll(".loginForm label")[3].style.display = "none";
    document.querySelectorAll(".loginForm label")[4].style.display = "none";
    document.querySelectorAll(".loginForm label")[0].style.display = "block";
    document.querySelectorAll(".loginForm label")[1].style.display = "block";
    document.querySelectorAll(".loginForm input")[2].style.display = "none";
    document.querySelectorAll(".loginForm input")[3].style.display = "none";
    document.querySelectorAll(".loginForm input")[4].style.display = "none";
    document.querySelectorAll(".loginForm input")[0].style.display = "block";
    document.querySelectorAll(".loginForm input")[1].style.display = "block";
  } else {
    let form = document.querySelector(".loginForm");
    form.style.left = "38%";
    rightDiv.style.backgroundImage = "none";
    leftDiv.style.backgroundImage = 'url("/assets/images/sep.png")';
    loginBtn.style.zIndex = "1";
    signupBtn.style.zIndex = "-2";
    document.querySelectorAll(".loginForm h1")[1].style.display = "block";
    document.querySelectorAll(".loginForm h1")[0].style.display = "none";
    document.querySelectorAll(".loginForm label")[2].style.display = "block";
    document.querySelectorAll(".loginForm label")[3].style.display = "block";
    document.querySelectorAll(".loginForm label")[4].style.display = "block";
    document.querySelectorAll(".loginForm label")[0].style.display = "none";
    document.querySelectorAll(".loginForm label")[1].style.display = "none";
    document.querySelectorAll(".loginForm input")[2].style.display = "block";
    document.querySelectorAll(".loginForm input")[3].style.display = "block";
    document.querySelectorAll(".loginForm input")[4].style.display = "block";
    document.querySelectorAll(".loginForm input")[0].style.display = "none";
    document.querySelectorAll(".loginForm input")[1].style.display = "none";
    onLogin = true;
  }
};
let isBuyerOnLogin = false;
const Buyerslide = () => {
  let rightDiv = document.querySelector(".buyerLogin div div");
  let leftDiv = document.querySelectorAll(".buyerLogin div div")[1];
  let loginBtn = document.querySelector(".buyerLoginBtn");
  let signupBtn = document.querySelector(".buyerSignUpBtn");
  if (isBuyerOnLogin) {
    signupBtn.style.zIndex = "1";
    loginBtn.style.zIndex = "-2";
    isBuyerOnLogin = false;
    rightDiv.style.backgroundImage = "none";
    leftDiv.style.backgroundImage = 'url("/assets/images/sep.png")';
    let form = document.querySelector(".buyerLoginForm");
    form.style.right = "12%";
    document.querySelectorAll(".buyerLoginForm h1")[1].style.display = "none";
    document.querySelectorAll(".buyerLoginForm h1")[0].style.display = "block";
    document.querySelectorAll(".buyerLoginForm label")[2].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm label")[3].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm label")[4].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm label")[0].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm label")[1].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm input")[2].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm input")[3].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm input")[4].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm input")[0].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm input")[1].style.display =
      "block";
  } else {
    let form = document.querySelector(".buyerLoginForm");
    form.style.right = "38%";
    leftDiv.style.backgroundImage = "none";
    rightDiv.style.backgroundImage = 'url("/assets/images/sep.png")';
    loginBtn.style.zIndex = "1";
    signupBtn.style.zIndex = "-2";
    document.querySelectorAll(".buyerLoginForm h1")[1].style.display = "block";
    document.querySelectorAll(".buyerLoginForm h1")[0].style.display = "none";
    document.querySelectorAll(".buyerLoginForm label")[2].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm label")[3].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm label")[4].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm label")[0].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm label")[1].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm input")[2].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm input")[3].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm input")[4].style.display =
      "block";
    document.querySelectorAll(".buyerLoginForm input")[0].style.display =
      "none";
    document.querySelectorAll(".buyerLoginForm input")[1].style.display =
      "none";
    isBuyerOnLogin = true;
  }
};
const chooseSeller = async () => {
  document.querySelector(".choose").style.display = "none";
  document.querySelector(".sellerLogin").style.display = "flex";
  document.querySelector(".loginForm").style.display = "flex";
  for (counter = -100; counter != 0; counter++) {
    await delay(6);
    document.querySelector(".sellerLogin").style.marginRight = `${counter}svw`;
  }
  for (counter = -78; counter != 24; counter++) {
    await delay(8);
    document.querySelector(".loginForm").style.left = `${counter / 2}svw`;
  }
  document.querySelector(".loginForm").style.transition = "0.8s";
  document.querySelector(".buyerBtn").style.display = "block";
};
const chooseBuyer = async () => {
  document.querySelector(".choose").style.display = "none";
  document.querySelector(".buyerLogin").style.display = "flex";
  document.querySelector(".buyerLoginForm").style.display = "flex";
  for (counter = -100; counter != 0; counter++) {
    await delay(6);
    document.querySelector(".buyerLogin").style.marginLeft = `${counter}svw`;
  }
  for (counter = -78; counter != 24; counter++) {
    await delay(8);
    document.querySelector(".buyerLoginForm").style.right = `${counter / 2}svw`;
  }
  document.querySelector(".buyerLoginForm").style.transition = "0.8s";
  document.querySelector(".sellerBtn").style.display = "block";
};
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
const goToSeller = async () => {
  document.querySelector(".sellerBtn").style.display = "none";
  document.querySelector(".buyerBtn").style.display = "none";
  document.querySelector(".buyerLogin").style.marginLeft = "-100svw";
  document.querySelector(".buyerLogin").style.display = "none";
  document.querySelector(".buyerLoginForm").style.display = "none";
  document.querySelector(".buyerLoginForm").style.right = "-34%";
  document.querySelector(".sellerLogin").style.display = "flex";
  document.querySelector(".loginForm").style.display = "flex";
  for (counter = -100; counter != 0; counter++) {
    await delay(6);
    document.querySelector(".sellerLogin").style.marginRight = `${counter}svw`;
  }
  for (counter = -78; counter != 24; counter++) {
    await delay(8);
    document.querySelector(".loginForm").style.left = `${counter / 2}svw`;
  }
  document.querySelector(".buyerLoginForm").style.transition = "none";
  document.querySelector(".loginForm").style.transition = "0.8s";
  document.querySelector(".buyerBtn").style.display = "block";
};
const goToBuyer = async () => {
  document.querySelector(".buyerBtn").style.display = "none";
  document.querySelector(".sellerLogin").style.display = "none";
  document.querySelector(".loginForm").style.display = "none";
  document.querySelector(".loginForm").style.left = "-34%";
  document.querySelector(".sellerLogin").style.marginRight = "-100svw";
  document.querySelector(".buyerLogin").style.display = "flex";
  document.querySelector(".buyerLoginForm").style.display = "flex";
  for (counter = -100; counter != 0; counter++) {
    await delay(6);
    document.querySelector(".buyerLogin").style.marginLeft = `${counter}svw`;
  }
  for (counter = -78; counter != 24; counter++) {
    await delay(8);
    document.querySelector(".buyerLoginForm").style.right = `${counter / 2}svw`;
  }
  document.querySelector(".loginForm").style.transition = "none";
  document.querySelector(".buyerLoginForm").style.transition = "0.8s";
  document.querySelector(".sellerBtn").style.display = "block";
};
