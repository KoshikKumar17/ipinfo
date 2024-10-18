// Function to fetch the user's public IP address
async function getIPAddress() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    return data.ip;  // Return the IP address
}

// Function to fetch IP details using the IP address
async function getIPDetails(ip) {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    // Extract necessary details from the data
    const ipDetails = `
        <p><strong>IP Address:</strong> ${data.ip}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Region:</strong> ${data.region}</p>
        <p><strong>Country:</strong> ${data.country_name}</p>
        <p><strong>Latitude/Longitude:</strong> ${data.latitude}, ${data.longitude}</p>
        <p><strong>Organization:</strong> ${data.org}</p>
    `;

    // Display the details on the webpage
    document.getElementById('ip-details').innerHTML = ipDetails;
}

// Main function to fetch and display IP information
async function displayIPInfo() {
    try {
        const ip = await getIPAddress();  // Get the user's IP
        await getIPDetails(ip);           // Fetch and display IP details
    } catch (error) {
        document.getElementById('ip-details').innerHTML = `<p>Error fetching IP details. Please try again later.</p>`;
    }
}

// Call the main function when the page loads
displayIPInfo();
