// window.onload = function() {
//   getUsers();
// };

function append(parent, element) {
  return parent.appendChild(element);
}
const ul = document.getElementById("all-users");
const url = "https://randomuser.me/api/?results=10";
const getUsers = () => {
  fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
      let users = data.results;
      return users.map(function(user) {
        let li = document.createElement("li"),
          image = document.createElement("img"),
          span = document.createElement("span");

        image.setAttribute("src", user.picture.medium);
        span.innerHTML = `${user.name.first} ${user.name.last}`;
        append(li, span);
        append(li, image);
        append(ul, li);
      });
    });
};
