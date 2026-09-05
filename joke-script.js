// API URLs
const JOKE_APIS = {
    any: 'https://official-joke-api.appspot.com/random_joke',
    general: 'https://official-joke-api.appspot.com/jokes/general/random',
    'knock-knock': 'https://official-joke-api.appspot.com/jokes/knock-knock/random',
    programming: 'https://official-joke-api.appspot.com/jokes/programming/random'
};

// DOM Elements
const jokeText = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const jokeTypeSelect = document.getElementById('joke-type');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error-message');
const jokeCountSpan = document.getElementById('joke-count');

// State
let jokeCount = 0;
let currentJoke = '';
let isLoading = false;

/**
 * Fetch a random joke from the API
 * @returns {Promise<string>} The joke text
 */
async function fetchJoke() {
    const jokeType = jokeTypeSelect.value;
    const apiUrl = JOKE_APIS[jokeType];
    
    try {
        showLoading(true);
        hideError();
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Handle array response (for general, knock-knock, programming)
        if (Array.isArray(data)) {
            return formatJoke(data[0]);
        }
        
        // Handle single object response
        return formatJoke(data);
    } catch (error) {
        console.error('Error fetching joke:', error);
        showError(`Failed to load joke: ${error.message}`);
        throw error;
    } finally {
        showLoading(false);
    }
}

/**
 * Format joke data from API response
 * @param {Object} jokeData - The joke data from API
 * @returns {string} Formatted joke text
 */
function formatJoke(jokeData) {
    if (jokeData.type === 'knock-knock') {
        return `${jokeData.setup}\n${jokeData.delivery}`;
    }
    return `${jokeData.setup}\n${jokeData.delivery}`;
}

/**
 * Display a joke on the page
 */
async function displayJoke() {
    if (isLoading) return;
    
    try {
        isLoading = true;
        generateBtn.disabled = true;
        
        const joke = await fetchJoke();
        currentJoke = joke;
        
        // Animate joke display
        jokeText.style.animation = 'none';
        setTimeout(() => {
            jokeText.textContent = joke;
            jokeText.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
        
        // Increment joke counter
        jokeCount++;
        jokeCountSpan.textContent = jokeCount;
        
        // Save to localStorage
        localStorage.setItem('jokeCount', jokeCount);
    } catch (error) {
        console.error('Error displaying joke:', error);
    } finally {
        isLoading = false;
        generateBtn.disabled = false;
    }
}

/**
 * Copy current joke to clipboard
 */
function copyToClipboard() {
    if (!currentJoke) return;
    
    navigator.clipboard.writeText(currentJoke).then(() => {
        // Visual feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showError('Failed to copy joke to clipboard');
    });
}

/**
 * Show loading indicator
 */
function showLoading(show) {
    if (show) {
        loadingDiv.classList.add('active');
    } else {
        loadingDiv.classList.remove('active');
    }
}

/**
 * Show error message
 */
function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
}

/**
 * Hide error message
 */
function hideError() {
    errorDiv.classList.remove('active');
    errorDiv.textContent = '';
}

/**
 * Handle joke type change
 */
jokeTypeSelect.addEventListener('change', () => {
    // Reset joke display when type changes
    jokeText.textContent = 'Click the button to get a random joke!';
    currentJoke = '';
});

// Event Listeners
generateBtnaddEventListener('click', displayJoke);
copyBtn.addEventListener('click', copyToClipboard);

// Keyboard shortcut: Enter key to generate new joke
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !isLoading) {
        displayJoke();
    }
});

/**
 * Initialize the app
 */
function init() {
    // Load joke count from localStorage
    const savedCount = localStorage.getItem('jokeCount');
    if (savedCount) {
        jokeCount = parseInt(savedCount);
        jokeCountSpan.textContent = jokeCount;
    }
    
    console.log('Joke Generator initialized successfully!');
    console.log('API: Official Joke API (https://official-joke-api.appspot.com)');
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}