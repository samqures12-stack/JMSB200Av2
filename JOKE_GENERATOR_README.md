# Random Joke Generator

A fun and interactive joke generator that fetches random jokes from an external API. Supports multiple joke categories and includes features like copying jokes to clipboard and tracking total jokes generated.

## 🎭 Features

✨ **Key Features:**
- 🎲 Random joke generation from external API
- 📂 Multiple joke categories (General, Knock-Knock, Programming)
- 📋 Copy joke to clipboard with one click
- 📊 Track total jokes generated (with localStorage persistence)
- 💻 Clean, responsive UI with smooth animations
- ⌨️ Keyboard shortcut support (Press Enter to generate)
- 🔄 Error handling with user-friendly messages
- 📱 Mobile-friendly design

## 🌐 API Used

**Official Joke API** - https://official-joke-api.appspot.com

Provides free, open-source jokes in JSON format. No authentication required!

### Available Endpoints:
- `/random_joke` - Any random joke
- `/jokes/general/random` - Random general joke
- `/jokes/knock-knock/random` - Random knock-knock joke
- `/jokes/programming/random` - Random programming joke

## 📁 Files

- `joke-generator.html` - Main HTML structure
- `joke-style.css` - Styling with gradient design and animations
- `joke-script.js` - JavaScript logic for API integration and UI interactions

## 🚀 How to Use

### Option 1: Direct Browser
1. Open `joke-generator.html` in your browser
2. Click "Get Joke" button to fetch a random joke
3. Use the dropdown to select joke category
4. Click "📋 Copy" to copy the joke to clipboard

### Option 2: Local Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
http-server
```

Then navigate to `http://localhost:8000/joke-generator.html`

## 💡 Features Explained

### Joke Categories
Select different joke types from the dropdown:
- **Any** - Random joke from any category
- **General** - Clean, general-audience jokes
- **Knock-Knock** - Classic knock-knock jokes
- **Programming** - Tech and programming humor

### Copy to Clipboard
Click the "📋 Copy" button to copy the current joke. The button will show "✓ Copied!" confirmation for 2 seconds.

### Joke Counter
Your joke count is saved to browser's localStorage and persists across sessions.

### Keyboard Shortcut
Press **Enter** key to quickly generate a new joke (when not already loading).

## 🛠️ Technical Details

### API Response Format
```json
{
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "delivery": "Because he was outstanding in his field!",
  "id": 1
}
```

### Error Handling
- Network failures are caught and displayed to user
- HTTP error codes are handled gracefully
- Loading state prevents multiple simultaneous requests

### Data Persistence
- Joke count is stored in `localStorage` with key `jokeCount`
- Persists across browser sessions
- Can be reset by clearing browser data

## 🎨 Customization

### Change Colors
Edit `joke-style.css`:
```css
/* Primary gradient color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Add More Joke Categories
Edit `joke-script.js`:
```javascript
const JOKE_APIS = {
    // Add new category
    'knock-knock': 'https://official-joke-api.appspot.com/jokes/knock-knock/random'
};
```

Then update `joke-generator.html`:
```html
<option value="knock-knock">Knock-Knock</option>
```

## 🌐 Browser Support

✅ All modern browsers:
- Chrome/Edge 50+
- Firefox 55+
- Safari 11+
- Opera 37+

## 📊 API Rate Limits

Official Joke API has reasonable rate limits suitable for casual use. For heavy usage, consider:
- Implementing request throttling
- Caching joke responses
- Using alternative APIs

## 🔗 Alternative Joke APIs

If you want to use different APIs:
- **JokeAPI** - https://jokeapi.dev (supports filtering)
- **Jokes API** - https://jokes.one/api
- **Random.D** - https://random-d.uk/api/random

## 🐛 Troubleshooting

### Jokes not loading?
- Check browser console (F12) for errors
- Verify internet connection
- Try refreshing the page
- Check if the API is accessible

### Copy button not working?
- Ensure your browser supports Clipboard API
- Check browser permissions for clipboard access
- Try using a different browser

## 📝 License

Open source and free to use. Jokes provided by Official Joke API.

## 👨‍💻 Author

Created for the JMSB200Av2 project with ❤️

---

**Enjoy infinite laughter! 😂**