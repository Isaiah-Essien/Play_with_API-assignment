# COVID-19 Statistics Web App

This web application displays the latest COVID-19 statistics for various countries using the RapidAPI. It utilizes JavaScript's Fetch API to retrieve data and dynamically update the user interface.

![App Screenshot](/images/Screenshot-Covid19%20webApp.png)

## Features

- Display COVID-19 statistics for all countries
- Select a specific country to view its statistics
- Responsive design for mobile and desktop devices
- Interactive user interface with up-to-date information

## Technologies Used

- HTML5
- CSS3
- JavaScript (Fetch API)
- Javascript DOM
- Bootstrap (for responsive design)
  I have used a Media Query of 567 for mobile view.

## API Integration

This project uses the RapidAPI for COVID-19 to fetch the latest statistics. The JavaScript `fetch` function is used to make API requests and update the user interface with the received data.

### API Endpoint

- Endpoint: [API Endpoint URL](https://covid-193.p.rapidapi.com/statistics)

### Example API Request

```javascript
fetch('https://covid-193.p.rapidapi.com/statistics', {
method: 'GET',
headers: {
 'X-RapidAPI-Key': 'your_api_key_here'
}
})
.then(response => response.json())
.then(data => {
 // Update UI with data
})
.catch(error => console.error('Error fetching data:', error));


### How the Javascript code works:

The JavaScript code in this project is responsible for fetching the latest COVID-19 statistics using the RapidAPI. It dynamically updates the user interface with the retrieved data based on user interaction.

### `onLoad` Function

The `onLoad` function is immediately invoked when the page loads. It sets up button functions and fetches the latest COVID-19 data.

### `setButtonFunctions` Function

The `setButtonFunctions` function sets up an event listener for the `countries` dropdown. When a country is selected, the function filters the COVID-19 data to find the selected country's data and updates the UI accordingly.

### `getLatestCOVID19Data` Function

The `getLatestCOVID19Data` function makes a `GET` request to the COVID-19 statistics API using the Fetch API. It populates the `countries` dropdown with all available countries and saves the retrieved COVID-19 data to the `covid19data` global variable.



## How to Use

1. Clone this repository to your local machine using:
2. Navigate to the project directory:

3. Open the `index.html` file in your web browser.
4. The app will display the latest COVID-19 statistics for all countries.
5. Select a specific country from the dropdown to view its statistics

- I have deployed this app on Netlify: https://nimble-crumble-1dd6f9.netlify.app/
Feel free to check it out.

- Please, don't copy my codes. 😂😂😂!
- And don't use my application key 😒😒
- This is all done by Isaiah Essien. Wow me by doing it your self, mate.
```
## License and Credit:
- RapidAPI 
- https://rapidapi.com/categories