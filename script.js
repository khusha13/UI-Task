// Get references to elements
const searchInput = document.querySelector('.search-input');
const tableBody = document.querySelector('tbody');

// Add event listener for search input
searchInput.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();
  const tableRows = tableBody.querySelectorAll('tr');

  tableRows.forEach(function(row) {
    const tableData = row.querySelectorAll('td');
    let rowVisible = false;

    tableData.forEach(function(cell) {
      const cellText = cell.textContent.toLowerCase();
      if (cellText.indexOf(searchTerm) !== -1) {
        rowVisible = true;
      }
    });

    row.style.display = rowVisible ? 'table-row' : 'none';
  });
});



// Functionality for dropdown menu (optional)
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-icon')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  //PAgination

document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector(".table-wrap");
    const rowsPerPage = 10; 
    const rows = table.querySelectorAll("tbody tr");
    const pageCount = Math.ceil(rows.length / rowsPerPage);
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= startIndex && index < endIndex) {
                row.style.display = "table-row";
            } else {
                row.style.display = "none";
            }
        });
    }

    function createPaginationLinks() {
        const paginationDiv = document.createElement("div");
        paginationDiv.classList.add("pagination");

        const prevLink = document.createElement("a");
        prevLink.href = "#";
        prevLink.innerHTML = "<i class='fas fa-chevron-left'> << </i>";
        prevLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentPage > 1) {
                showPage(currentPage - 1);
                currentPage--;
            }
        });
        paginationDiv.appendChild(prevLink);

        for (let i = 1; i <= pageCount; i++) {
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = i;
            link.addEventListener("click", function (event) {
                event.preventDefault();
                showPage(i);
                currentPage = i;
            });
            paginationDiv.appendChild(link);
        }

        const nextLink = document.createElement("a");
        nextLink.href = "#";
        nextLink.innerHTML = "<i class='fas fa-chevron-right'> >> </i>";
        nextLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentPage < pageCount) {
                showPage(currentPage + 1);
                currentPage++;
            }
        });
        paginationDiv.appendChild(nextLink);

        document.querySelector(".head-wrap").appendChild(paginationDiv);
    }

    showPage(1);
    createPaginationLinks();
});

// add items
function addProducts() {
    // Find all checked checkboxes
    const checkboxes = document.querySelectorAll('input[name="options"]:checked');
    
    // Iterate through each checked checkbox and add its corresponding row to the list
    checkboxes.forEach(function(checkbox) {
      const row = checkbox.closest('tr'); // Find the closest parent row
      const rowData = Array.from(row.children).map(cell => cell.textContent); // Get the data of each cell in the row
      // Create a new list item with the row data
      const listItem = document.createElement('li');
      listItem.textContent = rowData.join(', ');
      // Add the list item to a list or any container of your choice
      document.getElementById('product-list').appendChild(listItem);
    });
  }