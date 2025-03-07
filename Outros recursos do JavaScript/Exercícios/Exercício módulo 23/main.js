document.addEventListener("DOMContentLoaded", () => {
  const url = "http://api.github.com/users/BrunoAndradeDinis";
  const avatar = document.getElementById("avatar");
  const name = document.getElementById("name");
  const username = document.getElementById("username");
  const repos = document.getElementById("repos");
  const followers = document.getElementById("followers");
  const following = document.getElementById("following");
  const userLink = document.getElementById("userLink");

  fetch(url)
    .then((response) => {
      if (!response) {
        throw new Error(`Xii deu ruim aqui! :${response.status}`);
      }

      return response.json();
    })
    .then((json) => {
      avatar.src = json.avatar_url;
      name.innerText = json.name;
      username.innerText = `@${json.login}`;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
      userLink.href = json.html_url;
    })
    .catch((error) => {
      console.log("Ocorreu o erro: ", error)
    });
});
