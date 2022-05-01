"use strict"

const Database = require('better-sqlite3')

const db = new Database('log.db')

const query = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`)

if (query.get() == undefined) {
    const sqlInit = `
        CREATE TABLE accesslog ( 
            id INTEGER PRIMARY KEY, remoteaddr STRING, remoteuser STRING, time STRING, method STRING, url STRING, protocol STRING, httpversion STRING, status INTEGER, referer STRING, useragent STRING);
    `
    db.exec(sqlInit)
}

module.exports = db;