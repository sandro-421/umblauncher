# uMBLauncher
## Manage "most" marble blast mods in one place

Built with Electronjs

![Launcher](https://github.com/sandro-421/umblauncher/blob/main/screenshot1.png?raw=true)

### Compatible with:
- Linux (WinE used for the mods)
- ~~Windows~~ (Soon)

### Games Included:
- Marble Blast Gold (Speedrun Edition) https://marbleblast.com/index.php/downloads/mbg/mbg-speedrun/category/44-mbg-speedrun
- Marble Blast Ultra (OpenMBU) https://github.com/MBU-Team/OpenMBU
- Marble Blast Platinum (Haxe Port) https://github.com/RandomityGuy/MBHaxe
- Marble Blast Powered Up
- Marble Blast Elite
- Marble Blast Future
- GMBGMM

### Needs manual install:
- PlatinumQuest https://marbleblast.com/index.php/games/pq/category/10-pq
- Stop DeluXe https://tekannabrand.org

## Installing the games
You can download all pf the games in one zip file, ready to go for the launcher to use. You can find the archive in the releases tab by the name "Binaries for uMBL". download and extract the zip file and put the contents of it in your home folder, like this:

`/home/YOUR_USERNAME/games/installs`
--- or ---
`~/games/installs`

If you want to use your own executable for each game use the sheet below to place the executables in correct folders. Make sure that the executable is names `marbleblast.exe`. The casing doesn't matter.

| Game | Location |
|--|--|
| PlatinumQuest | `~/games/installs/pq/marbleblast.exe` |
| Stop DeluXe | `~/games/installs/stop/marbleblast.exe` |
| Marble Blast Platinum | `~/games/installs/mbp/marbleblast.exe` |
| Marble Blast Gold | `~/games/installs/mbg/marbleblast.exe` |
| Marble Blast Ultra | `~/games/installs/mbu/marbleblast.exe` |
| Marble Blast Powered Up | `~/games/installs/mbpu/marbleblast.exe` |
| Marble Blast Elite | `~/games/installs/mbe/marbleblast.exe` |
| Marble Blast Future | `~/games/installs/mbf/marbleblast.exe` |
| GMBGMM | `~/games/installs/gmb/marbleblast.exe` |

## Manual Packaging
On Linux:
`git clone https://github.com/sandro-421/umblauncher.git`
`cd umblauncher`
`npm install electron --save-dev`
`npm install --save-dev electron-builder`
`npm run dist`
