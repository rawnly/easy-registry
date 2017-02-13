#!/usr/bin/env node

const d = new Date()

var day = (d.getDate() < 10) ? `0${d.getDate()}` : d.getDate();

var month = ((d.getMonth() + 1) < 10) ? `0${d.getMonth() + 1}` : d.getMonth() + 1;

// Get date YYY-MM-DD
var date = `${d.getFullYear()}-${month}-${day}`

module.exports = date;
