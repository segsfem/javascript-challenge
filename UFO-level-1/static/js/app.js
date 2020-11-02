// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select button
var button = d3.select("#filter-btn");
// Select form
var form = d3.select("#datetime");
// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data)
//Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select input elements
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredDate = tableData.filter(ufo => ufo.datetime === inputValue);
    var filteredCity = tableData.filter(ufo => ufo.city === inputValue);
    var filteredState = tableData.filter(ufo => ufo.state === inputValue);
    var filteredCountry = tableData.filter(ufo => ufo.country === inputValue);
    var filteredShape = tableData.filter(ufo => ufo.state === inputValue);
    var filteredDuration = tableData.filter(ufo => ufo.durationMinutes === inputValue);
    var filteredComments = tableData.filter(ufo => ufo.comments === inputValue);

    console.log(filteredDate);
    console.log(filteredCity);

}

//remove any children from the list
List.html("");

//append filter to list
list.append("li").text(`${filteredDate}`);