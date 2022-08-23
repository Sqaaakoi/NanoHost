const events = require("node:events")
let http = require("http")
let https = require("https")

global.EVENTS = new events.EventEmitter()

console.log("Starting server")

let config = require("./config.js")
config.load()