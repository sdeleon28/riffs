import { app, BrowserWindow, Menu, shell, ipcMain } from 'electron';
import { spawn } from 'child_process';

let menu;
let template;
let mainWindow = null;


if (process.env.NODE_ENV === 'development') {
  require('electron-debug')(); // eslint-disable-line global-require
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

const getFileManagerCommandForPath = pathToOpen => {
  let args, command;
  switch (process.platform) {
    case 'darwin':
      return {
        command: 'open',
        args: ['-R', pathToOpen]
      };
    case 'win32':
      args = ["/select," + pathToOpen];
      if (process.env.SystemRoot) {
        command = path.join(process.env.SystemRoot, 'explorer.exe');
      } else {
        command = 'explorer.exe';
      }
      return {
        command: command,
        args: args
      };
    default:
      return {
        command: 'xdg-open',
        args: [pathToOpen]
      };
  }
}

const openDirectory = path => {
  const { command, args } = getFileManagerCommandForPath(path);
  spawn(command, args);
};

const installExtensions = async () => {
  if (process.env.NODE_ENV === 'development') {
    const installer = require('electron-devtools-installer'); // eslint-disable-line global-require

    const extensions = [
      'REACT_DEVELOPER_TOOLS',
      'REDUX_DEVTOOLS'
    ];
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    for (const name of extensions) {
      try {
        await installer.default(installer[name], forceDownload);
      } catch (e) {} // eslint-disable-line
    }
  }
};

app.on('ready', async () => {
  await installExtensions();

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app/app.html`);

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.openDevTools();
    mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;

      Menu.buildFromTemplate([{
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(x, y);
        }
      }]).popup(mainWindow);
    });
  }

  ipcMain.on('open-directory', (event, arg) => openDirectory(arg));
});
