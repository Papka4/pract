let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function () {
  let header = document.querySelector("header");
  if (header.classList.contains("open")) {
    close_popup();
  } else {
    header.classList.add("open");
    header_button.querySelector("img").src = "menuclose.png";
  }
});

function close_popup() {
  document.querySelector("header").classList.remove("open");
  header_button.querySelector("img").src = "ic_menu.png";
}

document.querySelector("#grid").addEventListener("click", close_popup, false);

document
  .querySelector("header .popup")
  .addEventListener("click", close_popup, false);

document
  .querySelector("#show_add_photo")
  .addEventListener("click", function () {
    document.querySelector("#add_new_photo").classList.add("open");
  });

document.querySelector("#cancel").addEventListener("click", function () {
  document.querySelector("#add_new_photo").classList.remove("open");
});

document.querySelector("#add_photo").addEventListener("click", function () {
  let src = document.querySelector("#new_photo_src").value;
  let text = document.querySelector("#new_photo_text").value;
  if (src) {
    let new_p_d = document.createElement("div");
    new_p_d.classList.add("photo");
    let new_img = document.createElement("img");
    new_img.src = src;
    new_p_d.append(new_img);
    let new_p = document.createElement("p");
    new_p.innerText = text ? text : "Тут забыли про текст";
    new_p_d.append(new_p);
    document.querySelector("#grid").prepend(new_p_d);
    document.querySelector("#add_new_photo").classList.remove("open");
    document.querySelector("new_photo_src").value = "";
    document.querySelector("#new_photo_text").value = "";
    new_p_d.addEventListener("click", open_photo, false);
  } else {
    if (!src) {
      document.querySelector("#new_photo_src").classList.add("error");
    }
  }
});

function open_photo() {
  let src = this.querySelector("img").src,
    popup_photo = document.querySelector("#popup_photo");
  popup_photo.querySelector("img").src = src;
  popup_photo.classList.add("open");
}

let photos = document.querySelectorAll(".photo");
for (let photo of photos) {
  photo.addEventListener("click", open_photo, false);
}

document.querySelector("#popup_photo").addEventListener("click", function () {
  this.classList.remove("open");
});
