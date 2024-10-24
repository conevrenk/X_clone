import { API } from "./api.js";
import { setLocal } from "./helper.js";
import { authEle } from "./ui.js";

//! API CLASININ BİR ÖRNEĞİ ALINDI
const api = new API();

// regex:regex belirli şartları kontrol etmek için sorgudur

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

//! form kontrolü sonrasında hataları render eden fonk

// !Auth sayfasında yer alan form gönderildiğinde çaşışacak fonk

const renderWarns = (nameWarning, passWarning) => {
  // isim hatası varsa
  if (nameWarning) {
    authEle.nameArea.innerHTML = `<p class="warning">${nameWarning} </p> `;
  } else {
    authEle.nameArea.innerHTML = "";
  }
  // şifre hatası varsa
  if (passWarning) {
    authEle.passArea.innerHTML = `<p class="warning">${passWarning} </p>`;
  } else {
    authEle.passArea.innerHTML = "";
  }
};

authEle.loginForm.addEventListener("submit", async (e) => {
  // form gönderildiğinde sayfa yenilenmesi iptal edilir
  e.preventDefault();
  // formun içerisindeki verilere erişme
  const name = authEle.nameInp.value;
  const pass = authEle.passwordInp.value;

  let nameWarning = null;
  let passWarning = null;

  // formdaki isim kontrol et
  if (!name) {
    nameWarning = "İsim kısmı boş bırakılamaz";
  } else if (name.length < 5) {
    nameWarning = "İsim en az 5 karakter olmalıdır";
  } else {
    nameWarning = null;
  }

  // formdaki şifre ksımını kontrol
  if (!pass) {
    passWarning = "şifre kısmı boş bırakılamaz";
  } else if (pass.length < 6) {
    passWarning = "şifre en az 6 karakter olmalıdır";
  } else if (!regex.test(pass)) {
    passWarning = "zayif şifre";
  } else {
    passWarning = null;
  }

  renderWarns(nameWarning, passWarning);

  if (!nameWarning && !passWarning) {
    // Api dan kullanıcının adı ile bu kullanıcını verilerini al
    const userData = await api.getUser(name);
    // kullanıcı verilerini localstorage a set et
    setLocal("user", userData);
    // eğer hiç hata yoksa form gönder
    // beni anasayfaya yönlendir
    window.location = "/";
  }
});
