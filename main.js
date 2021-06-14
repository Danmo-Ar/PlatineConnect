
// Use electron 

const {app , BrowserWindow} = require('electron');

// Create New Window

let mainWindow;

function createWindow() {

    mainWindow = new BrowserWindow({
        width : 1000 , height : 800,
        webPreferences : {
            contextIsolation : false,
            nodeIntegration : true
        } 

    })


//load file 

    mainWindow.loadFile('./dist/index.html');

// Event when windows close

    mainWindow.on('closed' , ()=> {
        mainWindow = null;
    })
}


// app event 


app.on('ready' , createWindow);

//si toutes les instance de l'application son fermer

app.on('window-all-closed' , ()=> {
    if(process.platform == 'darwin') app.quit();
})


//si l'application est ferme et qu'on click sur l app

app.on('activate' , ()=> {
    if(mainWindow === null) createWindow();
})