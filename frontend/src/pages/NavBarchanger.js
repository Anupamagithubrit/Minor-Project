// Define a function that contains your code
function updateNavbar() {
  var currentSituation = window.location.href.substring(22);
  var h3 = document.createElement("h3");
  h3.textContent = "Student Saathi";
  var div = document.createElement("div");
  div.className = "navbar_items";
  // Get the navbar element
  var navbar = document.getElementById("navbar"); // Replace 'navbar' with the ID or selector of your navbar element
  // Remove any existing anchor tags from the navbar
  while (navbar.firstChild) {
    navbar.removeChild(navbar.firstChild);
  }

  var anchorTag1 = document.createElement("a");
  var anchorTag2 = document.createElement("a");
  var anchorTag3 = document.createElement("a");

  anchorTag3.href = "/contact";
  anchorTag3.textContent = "Contact Us";

  // Set the attributes of the anchor tag based on the current situation
  switch (currentSituation) {
    case "":
      anchorTag1.href = "login";
      anchorTag1.textContent = "Login";
      anchorTag2.href = "signup";
      anchorTag2.textContent = "Signup";
      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      break;
    case "login":
      anchorTag1.href = "signup";
      anchorTag1.textContent = "Signup";
      anchorTag2.href = "/";
      anchorTag2.textContent = "Home";
      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      break;
    case "signup":
      anchorTag1.href = "login";
      anchorTag1.textContent = "Login";

      anchorTag2.href = "/";
      anchorTag2.textContent = "Home";
      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      break;
    case "feedback":
      anchorTag1.href = "/semselection";
      anchorTag1.textContent = "Sem selection";

      anchorTag2.href = "/..";
      anchorTag2.textContent = "Log Out";
      anchorTag2.addEventListener("click", (e) => {
        var result = window.confirm("You sure want to Log Out?");
        if (result) return true;
        else {
          e.preventDefault();
          return false;
        }
      });
      anchorTag3.href = "/contact";
      anchorTag3.textContent = "Contact Us";

      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      div.appendChild(anchorTag3);
      break;
    case "contact":
      anchorTag1.href = "/semselection";
      anchorTag1.textContent = "Sem Selection";

      anchorTag2.href = "/feedback";
      anchorTag2.textContent = "Feedback";

      anchorTag3.href = "/..";
      anchorTag3.textContent = "Log Out";
      anchorTag3.addEventListener("click", (e) => {
        var result = window.confirm("You sure want to Log Out?");
        if (result) return true;
        else {
          e.preventDefault();
          return false;
        }
      });
      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      div.appendChild(anchorTag3);
      break;
    default:
      anchorTag1.href = "/..";
      anchorTag1.textContent = "Log Out";

      anchorTag1.addEventListener("click", (e) => {
        var result = window.confirm("You sure want to Log Out?");
        if (result) return true;
        else {
          e.preventDefault();
          return false;
        }
      });
      anchorTag2.href = "/feedback";
      anchorTag2.textContent = "Feedback";
      div.appendChild(anchorTag1);
      div.appendChild(anchorTag2);
      div.appendChild(anchorTag3);
    // anchorTag2.href = "/feedback";
    // anchorTag2.textContent = "Feedback";
  }
  navbar.append(h3);
  navbar.appendChild(div);
}

// window.onload = updateNavbar;
window.addEventListener("load", updateNavbar);
