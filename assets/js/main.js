// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Search Functionality
document.getElementById('searchIcon').addEventListener('click', performSearch);

function performSearch() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.querySelectorAll('.recentOrders tbody tr');

    rows.forEach(function (row) {
        var trackingNumber = row.querySelector('td:first-child').textContent.toLowerCase();

        if (trackingNumber.includes(searchTerm)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
}