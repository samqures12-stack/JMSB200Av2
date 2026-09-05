# Digital Clock - Multiple Time Zones

A beautiful, responsive digital clock application that displays the current time in 8 major world cities across different time zones.

## Features

✨ **Key Features:**
- 🌍 Real-time display for 8 major world cities
- 🎨 Modern glassmorphism UI design
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Updates every second with precision
- 🌐 Uses browser's native timezone handling
- 💚 Green digital clock aesthetic
- 🎯 Clean and intuitive layout

## Supported Time Zones

1. **New York** - EST (UTC-5)
2. **London** - GMT (UTC+0)
3. **Paris** - CET (UTC+1)
4. **Dubai** - GST (UTC+4)
5. **India** - IST (UTC+5:30)
6. **Tokyo** - JST (UTC+9)
7. **Sydney** - AEDT (UTC+11)
8. **Los Angeles** - PST (UTC-8)

## Files

- `index.html` - HTML structure with clock cards
- `style.css` - Styling with gradient background and glassmorphism effects
- `script.js` - JavaScript for real-time clock updates using Intl API

## How to Use

### Option 1: Open Directly in Browser
1. Download or clone this repository
2. Open `index.html` in your web browser
3. The clocks will automatically start displaying current times

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if http-server is installed)
http-server
```

Then open `http://localhost:8000` in your browser.

## Technical Details

### JavaScript Implementation
The application uses the `Intl.DateTimeFormat` API to convert the current time to different timezones:

```javascript
const timeString = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Tokyo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}).format(new Date());
```

### Styling
- **Gradient Background**: Purple to indigo gradient (`#667eea` to `#764ba2`)
- **Glassmorphism**: Semi-transparent cards with backdrop blur
- **Responsive Grid**: Auto-fit layout that adapts to screen size
- **Glow Effect**: Green text shadow for digital clock authenticity

## Browser Compatibility

✅ Works on all modern browsers:
- Chrome/Edge 26+
- Firefox 29+
- Safari 10+
- Opera 15+

## Customization

### Add More Time Zones
Edit `script.js` and add entries to the `timezones` array:

```javascript
{ id: 'beijing-time', name: 'Asia/Shanghai' }
```

Then add corresponding HTML in `index.html`:

```html
<div class="clock-card">
    <h2>Beijing (CST)</h2>
    <div class="time" id="beijing-time">00:00:00</div>
    <div class="timezone">UTC+8</div>
</div>
```

### Change Colors
Modify the gradient and colors in `style.css`:
- Background gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Time text color: `color: #00ff88` (green)
- Glow effect: Adjust the text-shadow values

## Performance

- **Lightweight**: No external dependencies
- **Efficient**: Updates only at 1-second intervals
- **Optimized**: Uses native browser APIs (Intl)
- **Smooth**: GPU-accelerated animations via CSS transforms

## License

This project is open source and available for personal and commercial use.

## Author

Created with ❤️ for JMSB200Av2 project

---

**Enjoy tracking time across the world! 🌍🕐**