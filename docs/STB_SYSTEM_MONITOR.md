# STB System Monitor - Comprehensive Documentation

## Overview

Real-time monitoring dashboard for Jio STB JMSB200Av2 with detailed system metrics, performance graphs, and alert system.

## Features

### 1. CPU Monitoring
- Real-time CPU usage percentage
- Per-core breakdown
- CPU frequency scaling
- Thermal throttling detection
- Historical CPU usage graph
- Load average (1min, 5min, 15min)

### 2. Memory Monitoring
- Total/Used/Free RAM display
- Memory percentage visualization
- Swap usage statistics
- Memory cache information
- Memory trend analysis

### 3. Temperature Monitoring
- Multiple thermal sensor readings
- Real-time temperature display
- Temperature alerts (warning/critical)
- Thermal history graph
- Sensor location mapping

### 4. Network Monitoring
- Interface speed and status
- Download/Upload speed
- Packet statistics
- Network errors and dropped packets
- Bandwidth graph
- Speed test capability

### 5. Process Monitoring
- Top processes by CPU usage
- Top processes by memory usage
- Process details (PID, status, priority)
- Process start time
- Memory allocation per process

### 6. System Logs
- Real-time system event logs
- Log filtering by type
- Search functionality
- Log export to file
- Auto-refresh capability

### 7. Advanced Features
- Alert threshold configuration
- Performance statistics
- System uptime tracking
- Device info display
- Export data as JSON/CSV

## Technical Specifications

### Data Collection
- **Interval**: 1 second updates
- **Data Points**: Last 1 hour (3600 samples)
- **Chart Library**: Chart.js
- **Data Format**: JSON

### Performance
- **CPU Usage**: <5% on host
- **Memory Usage**: <20 MB
- **Network**: Minimal bandwidth
- **Browser Compatibility**: All modern browsers

## Configuration

### Alert Thresholds (Configurable)
```json
{
  "cpu_warning": 70,
  "cpu_critical": 90,
  "memory_warning": 75,
  "memory_critical": 90,
  "temperature_warning": 65,
  "temperature_critical": 85,
  "disk_warning": 80,
  "disk_critical": 95
}
```

## API Reference

### System Info API
```
GET /api/system/info
Response: {
  uptime: number,
  kernel: string,
  hostname: string,
  platform: string
}
```

### CPU Stats API
```
GET /api/cpu/stats
Response: {
  usage: number,
  cores: number,
  frequency: number,
  temperature: number
}
```

### Memory API
```
GET /api/memory/stats
Response: {
  total: number,
  used: number,
  free: number,
  percentage: number
}
```

### Network API
```
GET /api/network/stats
Response: {
  interfaces: Array,
  download: number,
  upload: number
}
```

## Troubleshooting

### No Data Showing
1. Check STB is online
2. Verify network connectivity
3. Clear browser cache
4. Try different browser

### High CPU Usage
- Close other applications
- Restart monitoring tool
- Check for background processes

### Temperature Warnings
- Improve ventilation
- Clean air vents
- Reduce room temperature
- Check thermal paste condition

## Performance Tips

1. **Reduce Update Frequency**: Change to 5-second updates for lower resource usage
2. **Limit History**: Keep last 30 minutes instead of 1 hour
3. **Disable Charts**: Use text view only for minimal usage
4. **Optimize Network**: Use wired connection instead of WiFi

## Future Enhancements

- [ ] Remote alerts via email/SMS
- [ ] Historical data storage (database)
- [ ] Advanced prediction analytics
- [ ] Mobile app version
- [ ] Multi-device monitoring
- [ ] Custom dashboard layouts