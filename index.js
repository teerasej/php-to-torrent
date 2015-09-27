var glob = require("glob"),
    fs = require('fs');



// options is optional
glob("../*.php", {}, function(er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.
    if (er) {
        console.log(er);
    } else {
        console.log(files);

        for (var i = 0; i < files.length; i++) {
            var targetFile = files[i];
            var finalFile = targetFile.replace('php', 'torrent');
            fs.rename(targetFile, finalFile, function(err) {
                if (err) console.log('ERROR: ' + err);
            });
        };

    }
})
