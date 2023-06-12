const concerts = [
    {
      date: "Mon Sept 06 2021",
      venue: "Ronald Lane",
      location: "San Francisco, CA"
    },
    {
      date: "Tue Sept 21 2021",
      venue: "Pier 3 East",
      location: "San Francisco, CA "
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA "
    },
    {
        date: "Sat Nov 06 2021 ",
        venue: "Hyatt Agency",
        location: "San Francisco, CA "
    },
  
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA "
    },
    {
        date: "Wed Dec 15 2021 ",
        venue: "Press Club ",
        location: "San Francisco, CA "
    },

  ];

// Function to create a concert row. the style will then be flexed column;
function createConcertRow(arrayConcert) {

// Create divs for all the rows to append to
    const row = document.createElement("div");
    row.classList.add("concert-row");
  
// Create elements within the divs
    const dateCell = document.createElement("div");
    dateCell.innerText = arrayConcert.date;
    dateCell.classList.add("boldDate");
    row.appendChild(dateCell);
  
    const venueCell = document.createElement("div");
    venueCell.innerText = arrayConcert.venue;
    venueCell.classList.add("cell");
    row.appendChild(venueCell);
  
    const locationCell = document.createElement("div");
    locationCell.innerText = arrayConcert.location;
    locationCell.classList.add("cell");
    row.appendChild(locationCell);
  
    const buyTicketsCell = document.createElement("div");
    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.textContent = "BUY TICKETS";
    buyTicketsButton.classList.add("buy-tickets-button");
    buyTicketsCell.appendChild(buyTicketsButton);
    buyTicketsCell.classList.add("cell");
    row.appendChild(buyTicketsCell);
  
    // Add event listener to the row to handle row selection
    
    row.addEventListener("click", () => {
      // Remove "selected" class from all rows
      const rows = document.querySelectorAll(".concert-row");
      rows.forEach(row => row.classList.remove("selected"));
  
      // Add "selected" class to the clicked row
      row.classList.add("selected");
    });
  
    return row;
  }
  
  // Function to render the concerts table
  function renderConcertsTable(concerts) {
    const concertsContainer = document.getElementById("concertsContainer");
  
    // Create table header
    const headerRow = document.createElement("div");
    headerRow.classList.add("header-row");
  
    const dateHeader = document.createElement("div");
    dateHeader.innerText = "DATE";
    dateHeader.classList.add("header-cell");
    headerRow.appendChild(dateHeader);
  
    const venueHeader = document.createElement("div");
    venueHeader.innerText = "VENUE";
    venueHeader.classList.add("header-cell");
    headerRow.appendChild(venueHeader);
  
    const locationHeader = document.createElement("div");
    locationHeader.innerText = "LOCATION";
    locationHeader.classList.add("header-cell");
    headerRow.appendChild(locationHeader);
  
    const buyTicketsHeader = document.createElement("div");
    buyTicketsHeader.textContent = "";
    buyTicketsHeader.classList.add("header-cell");
    headerRow.appendChild(buyTicketsHeader);
  
    concertsContainer.appendChild(headerRow);
  
    // Create table rows for each concert by appending the latest concertRow
    concerts.forEach(concert => {
      const concertRow = createConcertRow(concert);
      concertsContainer.appendChild(concertRow);
    });
  }
  
  // Render the concerts table by passing in the concerts array
  renderConcertsTable(concerts);









