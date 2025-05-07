function Toglle() {
  const html = document.documentElement;
  if (html.id === 'light') {
    html.removeAttribute('id');
  } else {
    html.id = 'light';
  }
}
function Change() {
  const html = document.getElementById("theme");

  if (html.style.backgroundImage === "url('./imgs/bg-mobile.jpg')") {
    alert("baguio");
  }
  
}