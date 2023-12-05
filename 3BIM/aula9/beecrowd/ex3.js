var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var N = [];
for (var i = 0; i < 20; i++) {
    N[i] = Number(lines.shift());
}

for (var i = 0; i < 10; i++) {
    var temp = N[i];
    N[i] = N[19 - i];
    N[19 - i] = temp;
}

for (var i = 0; i < 20; i++) {
    console.log("N[" + i + "] = " + N[i]);
}