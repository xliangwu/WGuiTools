const { app, BrowserWindow } = require('electron')

let mainWindow

// 创建主窗口，设置了宽高等信息
function createWindow() {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        webPreferences: {
            // node集成，即是否注入node能力
            nodeIntegration: true
        }
    })

    // 加载主页面内容 index.html
    // 改为使用loadURL加载 draw.io 的url地址
    mainWindow.maximize();
    mainWindow.loadURL('https://www.baidu.com/')

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)
