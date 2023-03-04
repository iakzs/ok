<script type="module">
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
const octokit = new Octokit({ auth: process.env.TOKAN });

// make a request to get the current user's profile
octokit.users.getAuthenticated()
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

var accesstokenn = process.env.TOKAN;
<⁄script>
