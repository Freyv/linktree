function Toglle() {
  const html = document.documentElement;
  if (html.id === 'light') {
    html.removeAttribute('id');
  } else {
    html.id = 'light';
  }
}