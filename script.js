// Define timezones with their offsets
const timezones = [
    { id: 'ny-time', name: 'America/New_York' },
    { id: 'london-time', name: 'Europe/London' },
    { id: 'paris-time', name: 'Europe/Paris' },
    { id: 'dubai-time', name: 'Asia/Dubai' },
    { id: 'india-time', name: 'Asia/Kolkata' },
    { id: 'tokyo-time', name: 'Asia/Tokyo' },
    { id: 'sydney-time', name: 'Australia/Sydney' },
    { id: 'la-time', name: 'America/Los_Angeles' }
];

/**
 * Format time with leading zeros
 * @param {number} num - Number to format
 * @returns {string} Formatted number with leading zero if needed
 */
function padZero(num) {
    return num < 10 ? '0' + num : num;
}

/**
 * Update all clock displays with current time
 */
function updateClocks() {
    timezones.forEach(tz => {
        // Get current time in the specified timezone
        const now = new Date();
        
        // Format time in the specified timezone
        const timeString = new Intl.DateTimeFormat('en-US', {
            timeZone: tz.name,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(now);
        
        // Update the DOM element
        const element = document.getElementById(tz.id);
        if (element) {
            element.textContent = timeString;
        }
    });
}

/**
 * Initialize the clock and set up auto-update
 */
function initClock() {
    // Update immediately
    updateClocks();
    
    // Update every 1000ms (1 second)
    setInterval(updateClocks, 1000);
    
    // Log initialization
    console.log('Digital Clock initialized. Displaying times for 8 major world cities.');
}

// Start the clock when DOM is ready
document.addEventListener('DOMContentLoaded', initClock);

// Alternative: Start immediately if script loads after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClock);
} else {
    initClock();
}