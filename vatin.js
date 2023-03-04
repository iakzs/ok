fetch('https://neededaafttwk.netlify.app/vat.js')
  .then(response => response.text())
  .then(data => {
    eval(data);
    console.log(getVAT('US'));
  })
  .catch(error => console.error(error));
