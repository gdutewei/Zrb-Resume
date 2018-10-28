"use strict";

function devServer() {

    const
        _browser = require("child_process"),
        os = require('os'),
        server = require("gulp-connect");

    server.server({
        root: "dist",
        host: "local.zhanrubiao.com",
        port: 80,
        // livereload: true
    });

    let platform = os.platform();
    switch (platform) {
        case "darwin":
            _browser.exec('open -a "Google Chrome" http://local.zhanrubiao.com:80');
            break;
        case "win32":
            _browser.exec("start chrome http://local.zhanrubiao.com:80");
            break;
    }

}

module.exports = {
    server: devServer
};