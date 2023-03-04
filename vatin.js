const accessToken = process.env.TOKAN;

fetch('https://api.github.com/user', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
