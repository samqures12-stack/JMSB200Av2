# Hardware Info Collector - Comprehensive Documentation

## Overview

Detailed hardware information gathering tool for Jio STB JMSB200Av2 with specifications, performance benchmarks, and health monitoring.

## Features

### 1. Processor Information
- CPU model and architecture
- Core count and thread count
- Clock speed (current and max)
- Cache sizes (L1, L2, L3)
- CPU flags and capabilities
- Instruction set (NEON, etc.)
- Temperature and throttling
- Power consumption estimation

### 2. Memory Details
- Total RAM capacity
- RAM type (DDR3, DDR4, LPDDR4)
- Memory frequency
- Timing specifications
- Manufacturer information
- Memory stability test
- Virtual memory/Swap info

### 3. Storage Information
- Primary storage capacity
- Storage type (eMMC, SSD, HDD)
- Model and manufacturer
- Storage health status
- Bad block count
- Write cycles remaining (if SSD)
- Partition information
- Available space

### 4. Network Interface Details
- Ethernet MAC address
- Network speed (10/100 Mbps)
- Current IP address
- Gateway and DNS
- Link quality and status
- Hardware address
- MTU settings
- Driver version
- WiFi capabilities (if available)

### 5. Video Output Capabilities
- HDMI version supported
- Maximum resolution
- Supported color depths
- Refresh rates
- Color spaces (RGB, YCbCr)
- HDCP version
- Audio format support
- 3D capabilities

### 6. Audio Output Capabilities
- Audio outputs (HDMI, S/PDIF, etc.)
- Supported audio formats
- Maximum channels
- Sample rates
- Bit depths
- Audio codec support
- Dolby support (Digital, Atmos)
- DTS support

### 7. Thermal Sensors
- Sensor count and locations
- Current temperature readings
- Temperature thresholds
- Thermal history
- Cooling system info
- Throttling status
- Fan speed (if available)

### 8. Device Identification
- Device serial number
- Model number (JMSB200Av2)
- Manufacturer
- Manufacturing date
- Region/Locale information
- Device ID/UUID
- MAC addresses
- IMEI (if cellular capable)

### 9. USB Ports
- Port count
- USB version (2.0, 3.0)
- Connected devices
- Power availability
- Transfer rate
- Device detection

### 10. System Information
- Kernel version
- Build number and fingerprint
- Supported instruction sets
- Hardware version
- Board information
- Bootloader version
- System time and timezone

## Technical Specifications - JMSB200Av2

### Processor
```
Model: ARM Cortex-A53/A72 (Quad-core or Dual-core)
Clock: 1.5 - 2.0 GHz
Bit: 64-bit
Architecture: ARMv8
Cache: L1: 32KB (I+D), L2: 512KB-1MB, L3: 2-4MB
Instruction Set: NEON, VFPv4
TDP: 5-10W
```

### Memory
```
Type: DDR3L or DDR4
Capacity: 1 GB or 2 GB
Frequency: 1333-1600 MHz
Timings: CAS 8-11
Bandwidth: 10-12 GB/s
Support: ECC capable (may not be enabled)
```

### Storage
```
Type: eMMC 5.0 or UFS 2.0
Capacity: 4 GB or 8 GB
Speed: 200-300 MB/s
Interface: MMC/HS-MMC
Manufacturer: Micron, Samsung, Kingston, etc.
```

### Display
```
Output: HDMI 1.4a (typically)
Maximum Resolution: 1080p @ 60Hz
Supported Resolutions: 480i/p, 720i/p, 1080i/p
Color Depth: 24-bit (8-bit per channel)
Refresh Rates: 50Hz, 59.94Hz, 60Hz
EDID Support: Yes
```

### Audio
```
Outputs: HDMI, S/PDIF (if available)
Formats: PCM, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3)
Channels: Up to 6 (5.1 surround)
Sample Rate: 48 kHz (typical)
Bit Depth: 16-24 bit
Codec Support: AAC, MP3, FLAC (via application)
```

### Power
```
Input: 100-240V AC, 50-60Hz
Consumption: 15-25W typical
Standby: 3-5W
Output: 12V DC via coaxial connector
PSU Rating: 24-30W typical
```

### Thermal
```
Operating Temperature: 0°C to 40°C
Storage Temperature: -10°C to 65°C
Humidity: 10% to 90% non-condensing
Thermal Shutdown: 85-90°C
WARNING Threshold: 75-80°C
```

## Data Collection Methods

### Linux-based Collection
```bash
# CPU Information
cat /proc/cpuinfo
lscpu

# Memory Information
cat /proc/meminfo
free -h

# Storage Information
df -h
lsblk
hdparm -i /dev/sda

# Network Information
ifconfig
ip addr show
ethtool eth0

# Thermal Information
cat /sys/class/thermal/thermal_zone0/temp

# Device Information
cat /proc/version
uname -a
```

## API Reference

### Get System Information
```
GET /api/hardware/system
Response: {
  device_name: string,
  model: string,
  serial: string,
  kernel: string,
  uptime: number,
  boot_time: string
}
```

### Get CPU Information
```
GET /api/hardware/cpu
Response: {
  model: string,
  cores: number,
  threads: number,
  frequency: number,
  cache: object,
  temperature: number,
  usage: number
}
```

### Get Memory Information
```
GET /api/hardware/memory
Response: {
  total: number,
  used: number,
  free: number,
  type: string,
  frequency: number,
  timing: string
}
```

### Get Storage Information
```
GET /api/hardware/storage
Response: {
  partitions: Array<{
    name: string,
    size: number,
    used: number,
    type: string,
    health: string
  }>
}
```

### Get Network Information
```
GET /api/hardware/network
Response: {
  interfaces: Array<{
    name: string,
    mac: string,
    ip: string,
    status: string,
    speed: string
  }>
}
```

### Get Video Capabilities
```
GET /api/hardware/video
Response: {
  resolution: string,
  colorspace: string,
  refresh_rate: number,
  hdmi_version: string,
  hdcp: string
}
```

### Get Thermal Information
```
GET /api/hardware/thermal
Response: {
  sensors: Array<{
    name: string,
    current: number,
    warning: number,
    critical: number
  }>
}
```

## Performance Benchmarks

### CPU Benchmarks
- **Passmark Score**: 1500-2500 (typical)
- **Geekbench Score**: 150-250 per core
- **Single Thread**: 150-250 pts
- **Multi Thread**: 600-1000 pts

### Memory Benchmarks
- **Read Speed**: 5-8 GB/s
- **Write Speed**: 4-6 GB/s
- **Latency**: 50-100 ns

### Storage Benchmarks
- **Sequential Read**: 200-300 MB/s
- **Sequential Write**: 150-200 MB/s
- **Random Read**: 20-50 MB/s
- **Random Write**: 10-30 MB/s

## Health Monitoring

### CPU Health
- Monitor temperature (keep <75°C)
- Check for throttling
- Verify all cores functional
- Monitor clock speeds

### Memory Health
- Run memory test periodically
- Check for errors
- Monitor available space
- Verify no memory leaks

### Storage Health
- Monitor S.M.A.R.T. status (if available)
- Check bad blocks
- Track write cycles
- Monitor available space

### Thermal Health
- Monitor core temperatures
- Check thermal paste condition
- Verify cooling effectiveness
- Monitor ambient temperature

## Troubleshooting

### Can't Read Hardware Info
1. Check permissions (may need root)
2. Verify kernel support
3. Try alternative tools
4. Check /proc and /sys availability

### Incorrect Information
1. Update BIOS/firmware
2. Reinstall drivers
3. Check for hardware issues
4. Compare with known specifications

### Performance Issues
1. Monitor temperature
2. Check for thermal throttling
3. Run memory diagnostics
4. Check storage health

## Future Enhancements

- [ ] Real-time benchmarking suite
- [ ] Hardware stress testing
- [ ] Comparison with other STBs
- [ ] Predictive failure analysis
- [ ] Hardware upgrade recommendations
- [ ] Energy efficiency monitoring