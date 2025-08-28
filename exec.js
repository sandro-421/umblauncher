const { app, BrowserWindow, Menu } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    height: 550,
    webPreferences: {
      nodeIntegration: true, // This allows direct use of Node.js modules in the renderer process
      contextIsolation: false // This exposes Node.js APIs to the renderer process
    }
  });

  win.loadFile('index.html');
};

Menu.setApplicationMenu(null);

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});