const accessToken = process.env.TOKAN;

fetch('https://neededaafttwl.netlify.app/vat.js', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
