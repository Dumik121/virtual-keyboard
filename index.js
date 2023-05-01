document.body.onload = addElement;

// Retrieve the stored value or default to false
let isUkrainian = localStorage.getItem("isUkrainian") === "true" || false;

// Save the current value in local storage before the page unloads
window.addEventListener("beforeunload", () => {
  localStorage.setItem("isUkrainian", isUkrainian);
});

//function getLocalStorage() {
 // if (localStorage.getItem("isUkrainian")) {
   // isUkrainian = localStorage.getItem("isUkrainian");
   // console.log(isUkrainian)
  //}
//}
//window.addEventListener("load", getLocalStorage);
//console.log(isUkrainian)
const keys = [
  { eventcode: "Backquote", value: "`", class: "keycap-small" },
  { eventcode: "Digit1", value: "1", class: "keycap-small" },
  { eventcode: "Digit2", value: "2", class: "keycap-small" },
  { eventcode: "Digit3", value: "3", class: "keycap-small" },
  { eventcode: "Digit4", value: "4", class: "keycap-small" },
  { eventcode: "Digit5", value: "5", class: "keycap-small" },
  { eventcode: "Digit6", value: "6", class: "keycap-small" },
  { eventcode: "Digit7", value: "7", class: "keycap-small" },
  { eventcode: "Digit8", value: "8", class: "keycap-small" },
  { eventcode: "Digit9", value: "9", class: "keycap-small" },
  { eventcode: "Digit0", value: "0", class: "keycap-small" },
  { eventcode: "Minus", value: "-", class: "keycap-small" },
  { eventcode: "Equal", value: "=", class: "keycap-small" },
  { eventcode: "Backspace", value: "Backspace", class: "keycap-middle" },
  { eventcode: "Tab", value: "Tab", class: "keycap-middle " },
  { eventcode: "KeyQ", value: "q", class: "keycap-small" },
  { eventcode: "KeyW", value: "w", class: "keycap-small" },
  { eventcode: "KeyE", value: "e", class: "keycap-small" },
  { eventcode: "KeyR", value: "r", class: "keycap-small" },
  { eventcode: "KeyT", value: "t", class: "keycap-small" },
  { eventcode: "KeyY", value: "y", class: "keycap-small" },
  { eventcode: "KeyU", value: "u", class: "keycap-small" },
  { eventcode: "KeyI", value: "i", class: "keycap-small" },
  { eventcode: "KeyO", value: "o", class: "keycap-small" },
  { eventcode: "KeyP", value: "p", class: "keycap-small" },
  { eventcode: "BracketLeft", value: "[", class: "keycap-small" },
  { eventcode: "BracketRight", value: "]", class: "keycap-small" },
  { eventcode: "Backslash", value: "\\", class: "keycap-small" },
  { eventcode: "Delete", value: "Del", class: "keycap-small" },
  { eventcode: "CapsLock", value: "CapsLock", class: "keycap-middle" },
  { eventcode: "KeyA", value: "a", class: "keycap-small" },
  { eventcode: "KeyS", value: "s", class: "keycap-small" },
  { eventcode: "KeyD", value: "d", class: "keycap-small" },
  { eventcode: "KeyF", value: "f", class: "keycap-small" },
  { eventcode: "KeyG", value: "g", class: "keycap-small" },
  { eventcode: "KeyH", value: "h", class: "keycap-small" },
  { eventcode: "KeyJ", value: "j", class: "keycap-small" },
  { eventcode: "KeyK", value: "k", class: "keycap-small" },
  { eventcode: "KeyL", value: "l", class: "keycap-small" },
  { eventcode: "Semicolon", value: ";", class: "keycap-small" },
  { eventcode: "Quote", value: "'", class: "keycap-small" },
  { eventcode: "Enter", value: "Enter", class: "keycap-middle" },
  { eventcode: "ShiftLeft", value: "Shift", class: "keycap-middle" },
  { eventcode: "KeyZ", value: "z", class: "keycap-small" },
  { eventcode: "KeyX", value: "x", class: "keycap-small" },
  { eventcode: "KeyC", value: "c", class: "keycap-small" },
  { eventcode: "KeyV", value: "v", class: "keycap-small" },
  { eventcode: "KeyB", value: "b", class: "keycap-small" },
  { eventcode: "KeyN", value: "n", class: "keycap-small" },
  { eventcode: "KeyM", value: "m", class: "keycap-small" },
  { eventcode: "Comma", value: ",", class: "keycap-small" },
  { eventcode: "Period", value: ".", class: "keycap-small" },
  { eventcode: "Slash", value: "/", class: "keycap-small" },
  { eventcode: "ArrowUp", value: "↑", class: "keycap-small" },
  { eventcode: "ShiftRight", value: "Shift", class: "keycap-middle" },
  { eventcode: "ControlLeft", value: "Ctrl", class: "keycap-small" },
  { eventcode: "MetaLeft", value: "Win", class: "keycap-small" },
  { eventcode: "AltLeft", value: "Alt", class: "keycap-small" },
  { eventcode: "Space", value: "", class: "keycap-big" },
  { eventcode: "AltRight", value: "Alt", class: "keycap-small" },
  { eventcode: "ArrowLeft", value: "←", class: "keycap-small" },
  { eventcode: "ArrowDown", value: "↓", class: "keycap-small" },
  { eventcode: "ArrowRight", value: "→", class: "keycap-small" },
  { eventcode: "ControlRight", value: "Ctrl", class: "keycap-small" },
];
const Shiftkeys = [
  { value: "~" },
  { value: "!" },
  { value: "@" },
  { value: "#" },
  { value: "$" },
  { value: "%" },
  { value: "^" },
  { value: "&" },
  { value: "*" },
  { value: "(" },
  { value: ")" },
  { value: "_" },
  { value: "+" },
  { value: "Backspace" },
  { value: "Tab" },
  { value: "Q" },
  { value: "W" },
  { value: "E" },
  { value: "R" },
  { value: "T" },
  { value: "Y" },
  { value: "U" },
  { value: "I" },
  { value: "O" },
  { value: "P" },
  { value: "{" },
  { value: "}" },
  { value: "|" },
  { value: "Del" },
  { value: "CapsLock" },
  { value: "A" },
  { value: "S" },
  { value: "D" },
  { value: "F" },
  { value: "G" },
  { value: "H" },
  { value: "J" },
  { value: "K" },
  { value: "L" },
  { value: ":" },
  { value: '"' },
  { value: "Enter" },
  { value: "Shift" },
  { value: "Z" },
  { value: "X" },
  { value: "C" },
  { value: "V" },
  { value: "B" },
  { value: "N" },
  { value: "M" },
  { value: "<" },
  { value: ">" },
  { value: "?" },
  { value: "↑" },
  { value: "Shift" },
  { value: "Ctrl" },
  { value: "Win" },
  { value: "Alt" },
  { value: "" },
  { value: "Alt" },
  { value: "←" },
  { value: "↓" },
  { value: "→" },
  { value: "Ctrl" },
];
const ShiftkeysUA = [
  { value: "~" },
  { value: "!" },
  { value: "@" },
  { value: "#" },
  { value: "$" },
  { value: "%" },
  { value: "^" },
  { value: "&" },
  { value: "*" },
  { value: "(" },
  { value: ")" },
  { value: "_" },
  { value: "+" },
  { value: "Backspace" },
  { value: "Tab" },
  { value: "Й" },
  { value: "Ц" },
  { value: "У" },
  { value: "К" },
  { value: "Е" },
  { value: "Н" },
  { value: "Г" },
  { value: "Ш" },
  { value: "Щ" },
  { value: "З" },
  { value: "Х" },
  { value: "Ї" },
  { value: "/" },
  { value: "Del" },
  { value: "CapsLock" },
  { value: "Ф" },
  { value: "І" },
  { value: "В" },
  { value: "А" },
  { value: "П" },
  { value: "Р" },
  { value: "О" },
  { value: "Л" },
  { value: "Д" },
  { value: "Ж" },
  { value: "Є" },
  { value: "Enter" },
  { value: "Shift" },
  { value: "Я" },
  { value: "Ч" },
  { value: "С" },
  { value: "М" },
  { value: "И" },
  { value: "Т" },
  { value: "Ь" },
  { value: "Б" },
  { value: "Ю" },
  { value: "," },
  { value: "↑" },
  { value: "Shift" },
  { value: "Ctrl" },
  { value: "Win" },
  { value: "Alt" },
  { value: "" },
  { value: "Alt" },
  { value: "←" },
  { value: "↓" },
  { value: "→" },
  { value: "Ctrl" },
];
const UAkeys = [
  { value: "`" },
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "0" },
  { value: "-" },
  { value: "=" },
  { value: "Backspace" },
  { value: "Tab" },
  { value: "й" },
  { value: "ц" },
  { value: "у" },
  { value: "к" },
  { value: "е" },
  { value: "н" },
  { value: "г" },
  { value: "ш" },
  { value: "щ" },
  { value: "з" },
  { value: "х" },
  { value: "ї" },
  { value: "\\" },
  { value: "Del" },
  { value: "CapsLock" },
  { value: "ф" },
  { value: "і" },
  { value: "в" },
  { value: "а" },
  { value: "п" },
  { value: "р" },
  { value: "о" },
  { value: "л" },
  { value: "д" },
  { value: "ж" },
  { value: "є" },
  { value: "Enter" },
  { value: "Shift" },
  { value: "я" },
  { value: "ч" },
  { value: "с" },
  { value: "м" },
  { value: "и" },
  { value: "т" },
  { value: "ь" },
  { value: "б" },
  { value: "ю" },
  { value: "." },
  { value: "↑" },
  { value: "Shift" },
  { value: "Ctrl" },
  { value: "Win" },
  { value: "Alt" },
  { value: "" },
  { value: "Alt" },
  { value: "←" },
  { value: "↓" },
  { value: "→" },
  { value: "Ctrl" },
];

var textarea = document.createElement("textarea");
textarea.className = "textarea";
textarea.id = "textarea";
textarea.disabled = true;
var newDiv = document.createElement("div");
newDiv.className = "keyboard__Container";
newDiv.id = "content";
document.body.appendChild(textarea);
document.body.appendChild(newDiv);



//add elemets to html
function addElement() {
  const content = document.getElementById("content");
  if (content) {
    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }
  }
  let val = "";
  if (isUkrainian) {
    for (let i in keys) {
      val +=
        "<div class=" +
        `${keys[i].class}` +
        " id=" +
        `${keys[i].eventcode}` +
        ">" +
        `${UAkeys[i].value}` +
        "</div>";
    }
    document.querySelector("#content").innerHTML = val;
  } else {
    for (let i in keys) {
      val +=
        "<div class=" +
        `${keys[i].class}` +
        " id=" +
        `${keys[i].eventcode}` +
        ">" +
        `${keys[i].value}` +
        "</div>";
    }
    document.querySelector("#content").innerHTML = val;
  }
}

let fired = false;
let Throw = false;

document.onkeydown = function (event) {
  const textarea = document.querySelector("#textarea");
  const Upper = document.querySelector("#content").children;
  // Determine which key was pressed
  let keyPressed = event.key;
  if (
    event.code == "AltRight" ||
    event.code == "AltLeft" ||
    event.code == "Tab"
  ) {
    event.preventDefault();
  }
  if (event.code == "Space") {
    document
      .querySelector('#content .keycap-big[id="' + event.code + '"]')
      .classList.add("active");

    textarea.value += " ";
  } else if (
    event.code == "Backspace" ||
    event.code == "Tab" ||
    event.code == "CapsLock" ||
    event.code == "Enter" ||
    event.code == "ShiftLeft" ||
    event.code == "ShiftRight"
  ) {
    if (event.code != "CapsLock") {
      document
        .querySelector('#content .keycap-middle[id="' + event.code + '"]')
        .classList.add("active");
      //console.log('What')
    }
    // Update the value of the textarea based on the key pressed
    if (keyPressed === "Backspace" && !textarea.classList.contains("active")) {
      textarea.value = textarea.value.slice(0, -1);
    }
    if (keyPressed === "Enter" && !textarea.classList.contains("active")) {
      textarea.value += "\n";
    }
    if (!fired) {
      fired = true;
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        PressShift();
      }
    }

    if (!Throw) {
      Throw = true;
      if (event.code === "CapsLock") {
        document
          .querySelector('#content .keycap-middle[id="' + event.code + '"]')
          .classList.toggle("active");
        if (CapsLock.classList.contains("active")) {
          for (let i = 0; i < keys.length; i++) {
            if (Upper[i].textContent.length === 1) {
              Upper[i].textContent = Upper[i].textContent.toUpperCase();
            }
          }
        } else {
          for (let i = 0; i < keys.length; i++) {
            if (Upper[i].textContent.length === 1) {
              Upper[i].textContent = Upper[i].textContent.toLowerCase();
            }
          }
        }
      }
    }
  } else {
    document
      .querySelector('#content .keycap-small[id="' + event.code + '"]')
      .classList.add("active");
    if (
      keyPressed != "Alt" &&
      keyPressed != "Control" &&
      keyPressed != "Win" &&
      keyPressed != "Delete"
    ) {
      if (keyPressed == "ArrowUp") {
        keyPressed = "↑";
      }
      if (keyPressed == "ArrowLeft") {
        keyPressed = "←";
      }
      if (keyPressed == "ArrowDown") {
        keyPressed = "↓";
      }
      if (keyPressed == "ArrowRight") {
        keyPressed = "→";
      }
      textarea.value += getValue(keyPressed);
    }
    if (
      AltLeft.classList.contains("active") &&
      ControlLeft.classList.contains("active")
    ) {
      for (let j = 0; j < keys.length; j++) {
        if (!isUkrainian) {
          Upper[j].textContent = UAkeys[j].value;
        } else {
          Upper[j].textContent = keys[j].value;
        }
      }
      isUkrainian = !isUkrainian;
    }
  }
};

function getValue(keyPressed) {
  if (
    ShiftLeft.classList.contains("active") ||
    ShiftRight.classList.contains("active")
  ) {
    if (isUkrainian) {
      const index = ShiftkeysUA.findIndex((el) => el.value.to === keyPressed);

      if (index !== -1) {
        return keyPressed;
      }
      const indexEn = Shiftkeys.findIndex((el) => el.value === keyPressed);

      if (indexEn !== -1) {
        return ShiftkeysUA[indexEn].value;
      }
    } else {
      const index = Shiftkeys.findIndex((el) => el.value === keyPressed);
      if (index !== -1) {
        return keyPressed;
      }
      const indexUA = ShiftkeysUA.findIndex((el) => el.value === keyPressed);

      if (indexUA !== -1) {
        return Shiftkeys[indexUA].value;
      }
    }
    return "";
  } else {
    if (isUkrainian) {
      const index = UAkeys.findIndex(
        (el) => el.value === keyPressed.toLowerCase()
      );

      if (index !== -1) {
        return keyPressed;
      }
      const indexEn = keys.findIndex(
        (el) => el.value === keyPressed.toLowerCase()
      );

      if (indexEn !== -1) {
        if (keyPressed === keyPressed.toUpperCase()) {
          return UAkeys[indexEn].value.toUpperCase();
        }
        return UAkeys[indexEn].value;
      }
    } else {
      const index = keys.findIndex(
        (el) => el.value === keyPressed.toLowerCase()
      );
      if (index !== -1) {
        return keyPressed;
      }
      const indexUA = UAkeys.findIndex(
        (el) => el.value === keyPressed.toLowerCase()
      );

      if (indexUA !== -1) {
        return keys[indexUA].value;
      }
    }
    return "";
  }
}

//remove key active while keyup event
document.onkeyup = function (event) {
  fired = false;
  Throw = false;

  if (event.code == "Space") {
    document
      .querySelector('#content .keycap-big[id="' + event.code + '"]')
      .classList.remove("active");
  } else if (
    event.code == "Backspace" ||
    event.code == "Tab" ||
    event.code == "CapsLock" ||
    event.code == "Enter" ||
    event.code == "ShiftLeft" ||
    event.code == "ShiftRight"
  ) {
    if (event.code != "CapsLock") {
      document
        .querySelector('#content .keycap-middle[id="' + event.code + '"]')
        .classList.remove("active");
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
        addElement();
      }
    }
  } else {
    document
      .querySelector('#content .keycap-small[id="' + event.code + '"]')
      .classList.remove("active");
  }
};

// press key by mouse
document.onclick = function (event) {
  const textarea = document.querySelector("#textarea");

  // console.log(event.target.id)
  if (
    !event.target.id ||
    event.target.id == "content" ||
    event.target.id == "textarea"
  ) {
    return;
  }
  if (event.target.id == "Space") {
    const key = document.querySelector(
      '#content .keycap-big[id="' + event.target.id + '"]'
    );
    textarea.value += " ";
    key.classList.add("active");
    setTimeout(function () {
      key.classList.remove("active");
    }, 200);
  } else if (
    event.target.id == "Backspace" ||
    event.target.id == "Tab" ||
    event.target.id == "CapsLock" ||
    event.target.id == "Enter" ||
    event.target.id == "ShiftLeft" ||
    event.target.id == "ShiftRight"
  ) {
    const key = document.querySelector(
      '#content .keycap-middle[id="' + event.target.id + '"]'
    );
    if (event.target.id === "Backspace") {
      textarea.value = textarea.value.slice(0, -1);
    }
    if (event.target.id === "Enter") {
      textarea.value += "\n";
    }
    if (event.target.id == "ShiftLeft" || event.target.id == "ShiftRight") {
      //PressShift();
    }

    if (event.target.id === "CapsLock") {
      key.classList.toggle("active");
      const Upper = document.querySelector("#content").children;
      if (CapsLock.classList.contains("active")) {
        for (let i = 0; i < keys.length; i++) {
          if (Upper[i].textContent.length === 1) {
            Upper[i].textContent = Upper[i].textContent.toUpperCase();
          }
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          if (Upper[i].textContent.length === 1) {
            Upper[i].textContent = Upper[i].textContent.toLowerCase();
          }
        }
      }
    }
    if (event.target.id != "CapsLock") {
      key.classList.add("active");
      setTimeout(function () {
        key.classList.remove("active");
      }, 200);
    }
  } else {
    const key = document.querySelector(
      '#content .keycap-small[id="' + event.target.id + '"]'
    );
    if (
      event.target.id != "AltRight" &&
      event.target.id != "AltLeft" &&
      event.target.id != "ControlRight" &&
      event.target.id != "ControlLeft" &&
      event.target.id != "MetaLeft" &&
      event.target.id != "Delete"
    ) {
      textarea.value += event.target.textContent;
    }
    key.classList.add("active");
    setTimeout(function () {
      key.classList.remove("active");
    }, 200);
  }
};

function PressShift() {
  const content = document.getElementById("content");
  if (content) {
    while (content.lastElementChild) {
      content.removeChild(content.lastElementChild);
    }
  }
  if (isUkrainian) {
    let val = "";
    for (let i in keys) {
      val +=
        "<div class=" +
        `${keys[i].class}` +
        " id=" +
        `${keys[i].eventcode}` +
        ">" +
        `${ShiftkeysUA[i].value}` +
        "</div>";
    }
    document.querySelector("#content").innerHTML = val;
  } else {
    let val = "";
    for (let i in keys) {
      val +=
        "<div class=" +
        `${keys[i].class}` +
        " id=" +
        `${keys[i].eventcode}` +
        ">" +
        `${Shiftkeys[i].value}` +
        "</div>";
    }
    document.querySelector("#content").innerHTML = val;
  }
}
