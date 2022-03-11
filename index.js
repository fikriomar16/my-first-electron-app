const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 450,
		height: 220,
		webPreferences: {
			preload: path.join(__dirname, 'app.js')
		}
		,frame: false
	})

	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})