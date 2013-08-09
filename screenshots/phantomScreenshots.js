/*
 * Take a set of full height screenshots for a range of screensizes.
 *   phantomjs responsive-screens.js http://www.cnn.com/ png
 *
 * This will create a directory tree in your current directory which
 * mirrors the URL. All files will be named with the viewport size.
 **/

var page = new WebPage(),
    address, output, size, filename_parts, ext, filename, dirs;

var fs = require('fs');

var now = new Date();

var viewports = [
    { width: 1920, height: 1200 },
    { width: 1025, height: 768 },
    { width: 768, height: 1024 },
    { width: 480, height: 640 },
    { width: 320, height: 480 }
]

page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.57 Safari/537.17';

if (phantom.args.length < 2 || phantom.args.length > 3) {
    console.log('Usage: responsive-screens.js URL png|pdf');
    phantom.exit();
} else {
    address = phantom.args[0];
    dir = url_to_dir(address);
    ext = phantom.args[1];
    page.viewportSize = viewports[0];
    output = dir + "/" + viewports[0].width + "x" + viewports[0].height+ "." + ext;
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('Unable to load the address!');
        } else {
            window.setTimeout(function () {
                console.log('Saving '+output+'...');
                page.render(output);
                for (var i=1; i<viewports.length; i++) {
                    page.viewportSize = viewports[i];
                    output = dir + "/" + viewports[i].width + "x" + viewports[i].height + "." + ext;
                    console.log('Saving '+output+'...');
                    page.render(output);
                }
                phantom.exit();
            }, 30000);
        }
    });
}

function url_to_dir( url ) {
    var dir;
    dir = url.replace('http://', '');
    if (dir.charAt(dir.length-1) == '/') dir = dir.substr(0, dir.length-2);
    fs.makeTree(dir);
    return dir;
}

function date_string() {
    var month = now.getMonth()+1,
        day = now.getDate(),
        minutes = now.getMinutes();

    if ( month < 10 ) month = '0'+month;
    if ( day < 10 ) day = '0'+day;
    if ( minutes < 10 ) minutes = '0'+minutes;

    return [now.getFullYear(), month, day].join('-') + "_" + [now.getHours(), minutes].join(':');
}
