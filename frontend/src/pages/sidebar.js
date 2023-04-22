function sidebar() {
  var link = window.location.href.substring(22);
  if (link !== "" && link !== "login" && link !== "signup") {
    var sidebar = document.getElementById("sidebar");
    while (sidebar.firstChild) sidebar.removeChild(sidebar.firstChild);
    var sidehead = document.createElement("h5");
    sidehead.textContent = "Navigate from here";
    sidebar.append(sidehead);
    for (let i = 1; i <= 5; i++) {
      var sem = document.createElement("a"); // Create a new 'a' element in each iteration
      sem.href = "/sem" + i;
      sem.textContent = "Semester " + i;
      sidebar.appendChild(sem); // Append the newly created 'a' element to the sidebar
    }
  } else {
    document.getElementById("sidebar").style.backgroundColor = "transparent";
  }
}

window.addEventListener("load", sidebar);
