var through = require('through2');

var cwd = process.cwd();

module.exports = function(file) {
    var relativePath = '.' + file.replace(cwd, '').replace(/\\/g, '/');
    var printedFilename;
    return through(function(buf, enc, next) {
        if (!printedFilename) {
            printedFilename = true;
            this.push('// ===== FILE: ' + relativePath + ' =====\n');
        }
        this.push(buf.toString('utf8'));
        next();
    });
};
