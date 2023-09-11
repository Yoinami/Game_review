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
            console.log(data[100])
            for (let i = 0; i < data.length; i++) {
                console.log(typeof data);
                
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
});
