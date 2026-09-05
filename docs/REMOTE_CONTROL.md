# Remote Control Web Interface - Comprehensive Documentation

## Overview

Web-based remote control interface for Jio STB JMSB200Av2 with IR emulation, channel management, and advanced features.

## Features

### 1. IR Remote Control
- Standard IR remote emulation
- All number buttons (0-9)
- Function buttons (Power, Menu, Back, OK/Select)
- Arrow navigation (Up, Down, Left, Right)
- Color buttons (Red, Green, Yellow, Blue)
- Quick access buttons
- Macro recording for sequences
- Customizable key bindings

### 2. Channel Management
- Channel list with names and numbers
- Favorite channels marking
- Recent channels history
- Quick channel switching
- Search functionality
- Channel information (genre, resolution)
- EPG (Electronic Program Guide) integration

### 3. Volume & Audio Control
- Volume up/down buttons
- Volume percentage display
- Mute toggle
- Audio output selection (Stereo, Surround, Mono)
- Audio language selection
- Equalizer settings

### 4. Input/Source Management
- HDMI input switching
- Analog AV input option
- Composite video input
- Auto-detect connected inputs
- Display resolution settings
- Picture mode selection

### 5. Recording Management
- View scheduled recordings
- Cancel recordings
- View recording storage usage
- Playback recorded content
- Recording quality settings
- Recording duration configuration

### 6. Program Guide (EPG)
- TV schedule display
- Channel-wise programs
- Time-based navigation
- Program details (genre, rating, synopsis)
- Set reminders
- Quick record option

### 7. Settings Menu Access
- Network settings
- System settings
- Picture settings
- Sound settings
- Recording preferences
- Parental controls

### 8. Advanced Features
- Macro/Sequence recording
- Custom remote layouts
- Gesture support (swipe for channels)
- Touch remote simulation
- Voice command support (via Web Speech API)
- Accessibility features

## Technical Specifications

### Communication Protocol
- **Primary**: HTTP REST API
- **Alternative**: WebSocket for real-time
- **Protocol**: JSON
- **Authentication**: Session-based tokens

### Supported IR Codes
```
Power:         0x00
Menu:          0x01
Up:            0x02
Down:          0x03
Left:          0x04
Right:         0x05
OK/Select:     0x06
Back:          0x07
0-9:           0x20-0x29
Red:           0x40
Green:         0x41
Yellow:        0x42
Blue:          0x43
Volume Up:     0x50
Volume Down:   0x51
Mute:          0x52
Channel Up:    0x60
Channel Down:  0x61
```

## Configuration

### Remote Profiles
```json
{
  "name": "Standard IR",
  "type": "IR",
  "protocol": "NEC",
  "carrier_frequency": 38000,
  "keys": [
    {
      "name": "Power",
      "code": "0x00",
      "repeat": 1
    }
  ]
}
```

## API Reference

### Send IR Command
```
POST /api/remote/send
Body: { "command": "POWER", "repeat": 1 }
Response: { "status": "success" }
```

### Get Channel List
```
GET /api/tv/channels
Response: {
  channels: Array<{
    number: number,
    name: string,
    genre: string,
    resolution: string,
    favorite: boolean
  }>
}
```

### Change Channel
```
POST /api/tv/channel
Body: { "number": 101 }
Response: { "status": "success" }
```

### Get EPG
```
GET /api/tv/epg?channel=101&date=2026-09-05
Response: {
  programs: Array<{
    time: string,
    title: string,
    duration: number,
    genre: string,
    rating: string
  }>
}
```

### Manage Recordings
```
GET /api/recording/list
POST /api/recording/schedule
DELETE /api/recording/:id
```

## Keyboard Shortcuts

- **Arrow Keys**: Navigate menu
- **Enter**: Select/OK
- **Backspace**: Back/Exit
- **0-9**: Direct number entry
- **+/-**: Volume control
- **M**: Mute toggle
- **R**: Record button
- **F**: Favorite toggle
- **H**: Home/Menu
- **Spacebar**: Play/Pause

## Voice Control

### Supported Commands
- "Next channel"
- "Previous channel"
- "Channel 101"
- "Volume up"
- "Volume down"
- "Mute"
- "Record"
- "Play"
- "Pause"
- "Rewind"
- "Forward"

### Browser Support
- Chrome 25+
- Firefox 55+
- Safari 14.1+
- Edge 79+

## Customization

### Create Custom Remote Layout
```json
{
  "layout": "custom",
  "rows": [
    {
      "buttons": [
        { "label": "Power", "command": "POWER" },
        { "label": "Menu", "command": "MENU" }
      ]
    }
  ]
}
```

## Troubleshooting

### Remote Not Responding
1. Check STB is powered on
2. Verify network connection
3. Try sending single command first
4. Check STB IR receiver
5. Restart interface

### Commands Delayed
1. Check network latency
2. Reduce command frequency
3. Use wired connection
4. Restart STB

### Voice Commands Not Working
1. Check microphone permissions
2. Try different browser
3. Verify language settings
4. Check internet connection

## Future Enhancements

- [ ] Bluetooth remote support
- [ ] WiFi direct control
- [ ] Mobile app companion
- [ ] Multi-room support
- [ ] Smart home integration
- [ ] AI program recommendations