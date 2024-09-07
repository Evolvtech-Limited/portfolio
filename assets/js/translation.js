// Function to get the user's public IP address using ipify
async function getUserIP() {
    try {
        const response = await fetch('https://ipinfo.io/json');
        const data = await response.json();
        return data.ip; // Returns the user's public IP address
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return null; // Return null in case of error
    }
}

// Function to get geolocation data (country code) using FreeGeoIP
async function getGeolocation(ip) {
    try {
        const response = await fetch(`https://ipinfo.io/json`);
        const data = await response.json();

        // Log the full API response
        console.log('Full IP info response:', data);
        return data.country; // Returns the user's country code, e.g., "US", "FR"
    } catch (error) {
        console.error('Error fetching geolocation:', error);
        return 'EN'; // Default to English if there's an error
    }
}

// Function to detect the user's country via IP
async function getCountryCode() {
    const ip = await getUserIP(); // Fetch the user's IP address
    if (!ip) return 'EN'; // Return 'EN' if there's an error fetching IP

    const countryCode = await getGeolocation(ip); // Fetch geolocation data using IP
    // console.log('Detected country code:', countryCode); // Log the detected country code
    if (!countryCode) {
        console.warn('Country code not found, defaulting to EN.')
        return 'EN';
    }
    return countryCode; // Return the country code
}

// Utility function to safely update innerText of HTML elements
function updateElementText(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    } else {
        console.error(`Element with id ${id} not found.`);
    }
}

// Function to load and apply the appropriate translation
async function loadTranslation(language) {
    try {
        const response = await fetch(`assets/lang/${language}.json`);
        const translations = await response.json();

        // Log the loaded translations
        console.log('Loaded translations:', translations);

        // Map translation keys to corresponding HTML element IDs
        updateElementText('abts', translations.abts);
        updateElementText('experiense', translations.experiense);
        updateElementText('welcome', translations.welcome);
        updateElementText('fullstack_developer', translations.fullstack_developer);
        updateElementText('about_me', translations.about_me);
        updateElementText('contact_me', translations.contact_me);
        updateElementText('download_cv', translations.download_cv);
        updateElementText('contact_info', translations.contact_info);

    } catch (error) {
        console.error('Error loading translation:', error);
    }
}

// Initialize the translation process
async function initTranslation() {
    const countryCode = await getCountryCode(); // Get the user's country code
    let language = 'en'; // Default language

    // Set language based on country code
    if (countryCode === 'FR') {
        language = 'fr';
    } else if (countryCode === 'ES') {
        language = 'es';
    }
    // Additional conditions for other languages can be added here

    console.log('Loading language: ', language); // Log the language being loaded
    loadTranslation(language); // Load the appropriate translations
}

// Trigger translation initialization on page load
document.addEventListener('DOMContentLoaded', initTranslation);