# Jio STB (JMSB200Av2) Utility Suite

A comprehensive toolkit for monitoring, managing, and analyzing Jio Set-Top Box (STB) JMSB200Av2. This suite includes system monitoring, remote control interface, firmware documentation, and hardware info collection tools.

## ⚠️ IMPORTANT DISCLAIMER

**USE AT YOUR OWN RISK**
- These tools are for educational and informational purposes only
- Modifying STB firmware or OS may void warranty
- Unauthorized modifications may violate carrier terms of service
- Always backup your current firmware before any modifications
- We are not responsible for bricked devices or data loss

## 📦 Project Structure

```
JMSB200Av2/
├── stb-system-monitor/        # Real-time system monitoring
├── stb-remote-control/        # Web-based remote control interface
├── firmware-analyzer/         # Firmware documentation & analysis
├── hardware-info-collector/   # Hardware information tool
├── docs/                      # Comprehensive documentation
└── README.md                  # This file
```

## 🎯 Features Overview

### 1. 🖥️ STB System Monitor
- Real-time CPU, Memory, Temperature monitoring
- Network statistics and bandwidth usage
- Process monitoring and management
- System logs viewer
- Performance graphs and charts
- Alert system for anomalies

### 2. 🎮 Remote Control Web Interface
- Power on/off control
- Channel navigation
- Volume control
- Input switching
- Recording management
- Program guide (EPG) viewer
- Favorite channels management

### 3. 📚 Firmware Analyzer
- Firmware version information
- Bootloader details
- Partition information
- File system browser
- Firmware changelog
- Known issues database

### 4. 🔧 Hardware Info Collector
- CPU specifications
- RAM details
- Storage information
- Network interfaces
- Serial number and model info
- HDMI capabilities
- Thermal sensors data

## 🚀 Quick Start

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Network connection to STB
- STB must be on same network or have network access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samqures12-stack/JMSB200Av2.git
cd JMSB200Av2
```

2. Navigate to desired tool:
```bash
cd stb-system-monitor
# or
cd stb-remote-control
# etc.
```

3. Start a local server:
```bash
python -m http.server 8000
# or
http-server
```

4. Open in browser:
```
http://localhost:8000
```

## 📋 Detailed Component Documentation

### STB System Monitor
**Location:** `stb-system-monitor/`

Provides real-time monitoring of:
- **CPU Usage**: Per-core breakdown with frequency and temperature
- **Memory Stats**: Used/Free/Total with visual indicators
- **Network**: Speed test, bandwidth usage, packet loss
- **Temperature**: Thermal sensors monitoring with warning thresholds
- **Processes**: Top processes by CPU and memory usage
- **Logs**: System event logs with filtering options

**API Endpoints Used:**
- `/sys/class/thermal/` - Temperature data
- `/proc/stat` - CPU statistics
- `/proc/meminfo` - Memory information
- `/proc/net/dev` - Network interface statistics
- `/proc/loadavg` - System load average

### Remote Control Web Interface
**Location:** `stb-remote-control/`

Features:
- **IR Control Emulation**: Send IR commands to STB
- **Channel Management**: Change channels, save favorites
- **Volume Control**: Adjust volume with real-time feedback
- **Input Switching**: Switch between HDMI, AV, etc.
- **Program Guide**: Browse TV schedule (if available)
- **Recording**: Manage scheduled and current recordings
- **Settings**: Access STB settings menu

**Compatible Remote Codes:**
- Standard IR remote codes
- Custom key bindings
- Macro support for sequences

### Firmware Analyzer
**Location:** `firmware-analyzer/`

Provides:
- **Version Info**: Current firmware version, build date, developer
- **Partition Map**: Storage allocation breakdown
- **Bootloader**: Bootloader version and flags
- **File System**: Browse installed files and directories
- **Changelog**: Version history and patch notes
- **Known Issues**: Database of reported bugs and fixes

**Analysis Tools:**
- Firmware extraction (if enabled)
- Checksum verification
- Signature validation
- Compatibility checker

### Hardware Info Collector
**Location:** `hardware-info-collector/`

Gathers information about:
- **Processor**: Model, cores, clock speed, temperature limits
- **Memory**: Total RAM, DDR version, frequency
- **Storage**: HDD/SSD capacity, model, health status
- **Network**: Ethernet MAC, WiFi capabilities
- **Video**: HDMI version, supported resolutions, color spaces
- **Audio**: Supported audio formats, outputs
- **Thermal**: Sensor locations, current readings, limits
- **Device ID**: Serial number, MAC addresses, OEM info

## 🔌 Network Configuration

### Connecting to STB

1. **Ethernet (Recommended)**
   - Most reliable and fastest
   - Direct connection to STB network interface
   - IP: Usually 192.168.x.x or 10.x.x.x

2. **WiFi (if available)**
   - Connect STB to same WiFi network
   - May have latency issues
   - Requires STB with WiFi module

3. **Telnet/SSH Access**
   - Enable in STB settings (if available)
   - Port: 23 (Telnet) or 22 (SSH)
   - Username/Password: Usually `root`/`root`

### Finding STB IP Address

```bash
# Option 1: Check STB menu
# Settings > System > Network > IP Address

# Option 2: Check router DHCP clients
# Access router admin panel (usually 192.168.1.1)
# Look for JMSB or Jio device

# Option 3: Network scan
arp-scan --localnet | grep -i jio
# or
nmap -p 22,23,80,8080 192.168.1.0/24
```

## 🔑 Accessing Hidden Features

### Developer Mode (if available)

1. Navigate to `Settings > About`
2. Tap Build Number 7 times
3. Developer mode should be enabled
4. Access `Settings > Developer Options`

### SSH/Telnet Access

```bash
# Connect via SSH (if available)
ssh root@<STB-IP>

# Or Telnet
telnet <STB-IP>

# Default credentials
# Username: root
# Password: root (or leave blank)
```

## 📊 Performance Benchmarks

### JMSB200Av2 Specifications
- **Processor**: ARM-based (typically Cortex-A53/A72)
- **RAM**: 1-2 GB DDR3/DDR4
- **Storage**: 4-8 GB eMMC/Flash
- **Display**: 1080i/1080p/720p output
- **Audio**: Dolby Digital 5.1 support
- **Network**: 10/100 Mbps Ethernet, optional WiFi
- **Power**: ~20W typical consumption

### Expected System Load
- **Idle**: 5-10% CPU, 300-400 MB Memory
- **Recording**: 25-40% CPU, 500-600 MB Memory
- **Playback**: 30-50% CPU, 400-500 MB Memory
- **Max Load**: 80-100% CPU, 900+ MB Memory

## 🛠️ Troubleshooting

### Tools Not Connecting
1. Verify STB is powered on and connected to network
2. Check firewall settings - allow port 80, 8080, 22, 23
3. Try pinging STB: `ping <STB-IP>`
4. Check STB network settings for correct IP

### Performance Issues
1. Restart STB: Settings > System > Reboot
2. Clear cache: Settings > Apps > Clear Cache
3. Check available storage space
4. Monitor temperature - may throttle if too hot

### Remote Control Not Responding
1. Verify IR receiver is functional
2. Check line of sight to IR receiver
3. Try SSH/web control as alternative
4. Restart remote/control interface

### Firmware Update Issues
1. Never interrupt update process
2. Ensure stable power supply
3. Check available storage space (min 500MB)
4. Use official Jio firmware only
5. Backup current firmware before update

## 📚 Additional Resources

- **Jio Official Support**: https://www.jio.com/support
- **Linux STB Resources**: https://elinux.org/
- **ARM Architecture**: https://www.arm.com/
- **OpenWrt Project**: https://openwrt.org/ (for similar devices)

## 🔐 Security Considerations

1. **Firmware Integrity**
   - Always verify firmware checksums
   - Use official sources only
   - Check digital signatures when available

2. **Network Security**
   - Use VPN if accessing remotely
   - Change default credentials
   - Enable firewall rules

3. **Data Privacy**
   - Be aware of data collection by monitoring tools
   - Don't share device logs containing sensitive data
   - Secure remote access with strong passwords

## 📖 Firmware Versions

### Known Versions
- **v2.0.x** - Initial release
- **v2.1.x** - Bug fixes and improvements
- **v2.2.x** - Enhanced features
- **v2.3.x** - Latest stable
- **v3.0.x** - Next generation (beta)

### Update Methods
1. **OTA (Over-The-Air)**: Settings > System > Software Update
2. **Manual USB**: Download from Jio site, use USB stick
3. **Network**: Via browser using web recovery mode

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Test thoroughly
4. Submit pull request
5. Include documentation

## 📝 License

Open source for educational purposes. See LICENSE file for details.

## ⚖️ Legal Notice

This toolkit is provided "AS IS" without warranty. Users are solely responsible for:
- Compliance with local laws and regulations
- Adherence to Jio terms of service
- Device integrity and data security
- Any damages resulting from use of these tools

## 👨‍💻 Author

Created for the JMSB200Av2 project with ❤️

---

**Last Updated**: 2026-09-05  
**Version**: 1.0.0  
**Status**: Active Development

**⭐ If you find this helpful, please star the repository!**