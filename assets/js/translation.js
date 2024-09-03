// Function to detect the user's country via IP
async function getCountryCode() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_code; // e.g., "US", "FR"
    } catch (error) {
        console.error('Error fetching country code:', error);
        return 'EN'; // Default to English if there's an error
    }
}

// Function to load and apply the appropriate translation
async function loadTranslation(language) {
    try {
        const response = await fetch(`assets/lang/${language}.json`);
        const translations = await response.json();

        // Map translation keys to corresponding HTML element IDs
        document.getElementById('abts').innerText = translations.abts;
        document.getElementById('experiense').innerText = translations.experiense;
        document.getElementById('welcome').innerText = translations.welcome;
        document.getElementById('fullstack_developer').innerText = translations.fullstack_developer;
        document.getElementById('about_me').innerText = translations.about_me;
        document.getElementById('experience').innerText = translations.experience;
        document.getElementById('contact_me').innerText = translations.contact_me;
        // document.getElementById('download_cv').innerText = translations.download_cv;
        // document.getElementById('contact_info').innerText = translations.contact_info;
        document.getElementById('download_cv').textContent = translations.download_cv;
        document.getElementById('contact_info').textContent = translations.contact_info;

    } catch (error) {
        console.error('Error loading translation:', error);
    }
}

// Initialize the translation process
async function initTranslation() {
    const countryCode = await getCountryCode();
    let language = 'en'; // Default language

    if (countryCode === 'FR') {
        language = 'fr';
    } else if (countryCode === 'ES') {
        language = 'es';
    }
    // Additional conditions for other languages can be added here


    console.log('Loading language: ', language);
    loadTranslation(language);
}

// Trigger translation initialization on page load
document.addEventListener('DOMContentLoaded', initTranslation);
