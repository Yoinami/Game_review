// Select the button and pre element to display JSON data
const loadDataButton = document.getElementById('loadDataButton');
const jsonDataElement = document.getElementById('jsonData');

// Event listener for the button click
loadDataButton.addEventListener('click', () => {
    console.log('button clicked')
    // Use the fetch function to request the JSON file
    fetch('../html_text_files.json')
        .then(response => {
            // Check if the response status is OK (200)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON data from the response
            return response.json();
        })
        .then(data => {
            // Display the JSON data in the pre element
            key_array = Object.keys(data)
            let x = Math.floor(Math.random() * key_array.length);
            console.log(data[key_array[x]]);
            addContent(data[key_array[x]])
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});

function addContent(dic) {
    let container = document.getElementsByClassName("below-container-flex");
    container[0].innerHTML += `
    <div class="individual-content">
        <img src="image/${dic["preview-img"]}" alt="${dic["name"]}">
        <div class="under-cap">
            <p>${dic["name"]}</p>
            <div>
                <img class="icon" src="editorial/small-star2.png">
                <p>${dic["rating"]}/10</p>
            </div>
        </div>
        <div class="type"><p>${dic["genre"][0]}</p></div>
    </div>
    `
}