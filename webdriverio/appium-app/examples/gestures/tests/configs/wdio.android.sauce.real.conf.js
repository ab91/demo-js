const {config} = require('./wdio.shared.sauce.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung.*',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=sample-app-android.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    newCommandTimeout: 240,
    language: 'en',
    locale: 'en',
  },
  {
    deviceName: 'OnePlus.*',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=sample-app-android.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    newCommandTimeout: 240,
    language: 'en',
    locale: 'en',
  },
  {
    deviceName: 'Google.*',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=sample-app-android.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    newCommandTimeout: 240,
    language: 'en',
    locale: 'en',
  },
];

exports.config = config;
