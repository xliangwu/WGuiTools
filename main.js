const { app, BrowserWindow } = require('electron')

let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true
        }
    })

    var webUrl = process.env.ELECTRON_WEB_URL
    if (!webUrl) {
        webUrl = 'http://localhost:8888'
    }

    // 加载主页面内容 index.html
    mainWindow.maximize();
    mainWindow.setMenu(null);
    mainWindow.loadURL(webUrl)
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)
