const { app, BrowserWindow } = require("electron");

app.whenReady().then(() => {
  const Window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  Window.loadFile("views/time_tracker/view.html");
});
