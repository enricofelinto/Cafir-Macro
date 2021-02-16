const sleep = require('sleep');
//you don't actually need sleep, but it makes things easier

const {Builder, By, Key, util,} = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome');  
//here we get more libs

let download_path = 'C:\\Enrico\\Projects\\API-INCRA-master\\API-INCRA-master\\Macro pt2\\Downloads';
//set download_path, as your download path for the cafir files


let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().setUserPreferences({"download.default_directory" : download_path}))
    .build();
//here we create the webdriver

async function donwload () {;
    for(let i = 0; i < 10; i++){
        let link = `http://200.152.38.155/CAFIR/k34313e${i}.ods`;
        await driver.get(link);
        sleep.sleep((i+3)*60);
    }
}

//download() downloads all files by entering on each one on by one.
donwload();