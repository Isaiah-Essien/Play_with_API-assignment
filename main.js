let covid19data
;(function onLoad() {
	// This code sets a function for the button
	setButtonFunctions()

	// This code fetches from the COVID-19 API when the page loads
	getLatestCOVID19Data()
})()

function setButtonFunctions() {
	document.getElementById("countries").onchange = function () {
		const selectedValue = document.getElementById("countries").value
		const countryData = covid19data.filter((c) => c.country == selectedValue)[0]

		// This code displays data
		const newConfirmed = document.getElementById("covidNewConfirmed")
		const totalConfirmed = document.getElementById("covidTotalConfirmed")
		const covidNewDeaths = document.getElementById("covidNewDeaths")
		const covidTotalDeaths = document.getElementById("covidTotalDeaths")
		const lastUpdated = document.getElementById("covidLastUpdate")

		countryData.cases.new
			? (newConfirmed.innerHTML =
					"New confirmed cases: " + countryData.cases.new)
			: (newConfirmed.innerHTML = "New confirmed cases: 0")
		countryData.cases.total
			? (totalConfirmed.innerHTML =
					"Total confirmed cases: " + countryData.cases.total)
			: (totalConfirmed.innerHTML = "Total confirmed cases: 0")
		countryData.deaths.new
			? (covidNewDeaths.innerHTML = "New deaths: " + countryData.deaths.new)
			: (covidNewDeaths.innerHTML = "New deaths: 0")
		countryData.deaths.total
			? (covidTotalDeaths.innerHTML =
					"Total deaths: " + countryData.deaths.total)
			: (covidTotalDeaths.innerHTML = "Total deaths: 0")
		lastUpdated.innerHTML = "Last updated: " + countryData.day
	}
}


// This is the COVID 19 Data from the API
async function getLatestCOVID19Data() {
	await fetch("https://covid-193.p.rapidapi.com/statistics", {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "2b1a2679a3msh2f05c5afba35dc2p1ed8c4jsnd91091012b68",
			"X-RapidAPI-Host": "covid-193.p.rapidapi.com",
		},
	})
		.then((response) => response.json())
		.then((response) => {
			console.log("COVID 19 API object:")
			console.log(response)
			console.log("\n")

			// This code adds all countries to select element
			response.response.forEach((c) => {
				const option = document.createElement("option")
				option.innerHTML = c.country
				document.getElementById("countries").appendChild(option)
			})

			// This code saves covid data to global variable
			covid19data = response.response
		})
		.catch((err) => {
			console.log(err)
		})
}
