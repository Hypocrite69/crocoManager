// electron/main.ts

import { app, BrowserWindow } from 'electron';

import * as path from 'path';
 
function createWindow() {

  const win = new BrowserWindow({

    width: 800,

    height: 600,

    webPreferences: {

      contextIsolation: true,

      nodeIntegration: false,

    },

  });
 
  // Adjust the path to match your Angular build output

  win.loadFile(path.join(__dirname, '../dist/db-user-management/browser/index.html'));

}
 
app.whenReady().then(createWindow);