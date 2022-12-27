const text = document.getElementById("text");
let i = 0;
const message = "Project Sunshine";
const typing = () => {
  if (i < message.length) {
    text.innerHTML += message.charAt(i);
    i++;
    setTimeout(typing, 40);
  }
};
typing();