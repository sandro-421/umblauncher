const { exec } = require('child_process');
const { shell } = window.require('electron');
const os = require('os');
const path = require('path');

const html = document;
const cli = console;

const gameBackground = html.getElementById('bg');
const gameIcon = html.getElementById('logo');
const gameName = html.getElementById('gameName');
let gameExe = null;

function selectGame(game) {
    let bg = null;
    let ico = null;
    let title = null;
    let executable = null;

    switch(game) {
        default:
            cli.log("Invalid Game");
            break;
        case "mbg":
            bg = "images/backgrounds/mbg.png";
            ico = "images/gameIcons/mbg.png";
            title = "Marble Blast Gold";
            executable = "%HOME%/games/installs/mbg";
            break;
        case "mbu":
            bg = "images/backgrounds/mbu.png";
            ico = "images/gameIcons/mbu.png";
            title = "Marble Blast Ultra";
            executable = "%HOME%/games/installs/mbu";
            break;
        case "mbpu":
            bg = "images/backgrounds/mbpu.jpg";
            ico = "images/gameIcons/mbg.png";
            title = "Marble Blast Powered Up";
            executable = "%HOME%/games/installs/mbpu";
            break;
        case "mbp":
            bg = "images/backgrounds/mbp.png";
            ico = "images/gameIcons/mbp.png";
            title = "Marble Blast Platinum";
            executable = "%HOME%/games/installs/mbp";
            break;
        case "stop":
            bg = "images/backgrounds/stop.png";
            ico = "images/gameIcons/stop.webp";
            title = "Stop DeluXe";
            executable = "%HOME%/games/installs/stop";
            break;
        case "pq":
            bg = "images/backgrounds/pq.png";
            ico = "images/gameIcons/pq.png";
            title = "PlatinumQuest";
            executable = "%HOME%/games/installs/pq";
            break;
        case "mbe":
            bg = "none";
            ico = "images/gameIcons/mbg.png";
            title = "Marble Blast Elite";
            executable = "%HOME%/games/installs/mbe";
            break;
        case "mbfuture":
            bg = "none";
            ico = "images/gameIcons/mbg.png";
            title = "Marble Blast Future";
            executable = "%HOME%/games/installs/mbfuture";
            break;
        case "gmb":
            bg = "none";
            ico = "images/gameIcons/mbg.png";
            title = "GMBGMM";
            executable = "%HOME%/games/installs/gmb";
            break;
    }

    gameBackground.style.backgroundImage = "url(" + bg + ")";
    gameIcon.style.backgroundImage = "url(" + ico + ")";
    gameName.innerHTML = title;
    gameExe = executable;
}

function play() {
    if (gameExe) {
        const homePath = os.homedir();
        const gameDirectory = gameExe.replace(/%HOME%/g, homePath);

        exec(`wine "marbleblast.exe"`, { cwd: gameDirectory }, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                console.error(`Failed to launch 'marbleblast.exe' from directory: "${gameDirectory}"`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }
}

function openWeb(site) {
    switch(site) {
        default:
            console.log("Unable to open this website");
            break;
        case "mbcom":
            shell.openExternal("https://marbleblast.com");
            break;
        case "ml":
            shell.openExternal("https://marbleland.vaniverse.io/");
            break;
        case "archive":
            shell.openExternal("https://marbleblast.com/index.php/downloads/custlevels/cla");
            break;
        case "tools":
            shell.openExternal("https://marbleblast.com/index.php/downloads/extras/category/18-extras");
    }
}