Demarcus Johnson
Project 1
Project Overview: In this project, I developed a responsive web application using React. The application fetches and displays real-time data from two endpoints provided by the National Institute of Standards and Technology (NIST), specifically related to manufacturing processes.

Project Structure:
	•	App.js: This file contains the main component of my application.
	•	axios: I utilized this library for making HTTP requests to fetch data from the NIST endpoints.
Features:
	•	Real-time Data Update: My application automatically refreshes the displayed data every second.
	•	Current Data Display: I show the current manufacturing data obtained from the NIST API.
	•	Sample Data Display: I present the sample manufacturing data retrieved from the NIST API.
	•	Error Handling: I log errors to the console if there's any issue fetching data from the API.
 Dependencies:
	•	React: A JavaScript library for building user interfaces.
	•	axios: A promise-based HTTP client for browser and node.js.
	•	useState: React hook for managing state in functional components.
	•	useEffect: React hook for performing side effects in functional components.
Usage:
		Clone the repository.
		Install dependencies using npm install.
		Run the application using npm start.
		Open the application in a web browser.
Additional Notes:
	•	My application continuously retrieves data from the NIST API every second using setInterval.
	•	Fetched data is displayed in separate sections for current and sample data.
	•	I implemented error handling to capture and log any errors occurring during data retrieval
