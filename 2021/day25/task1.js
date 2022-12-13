const lines = require('fs').readFileSync('data25.txt').toString().trim().split('\n');

const seafloor = lines.map(line => line.split(''))

const clone = (seafloor) => [...seafloor.map(line => [...line])];

let moved = 1;
let turns = 0;

while(moved > 0) {
    moved = 0;
    console.log(moved, turns)
    turns++;
    let cloned = clone(seafloor);
    cloned.forEach((line, i) => {
        console.log(line.join(''))
        line.forEach((spot, j) => {
            if(spot === '>') {
                const next = cloned[i][(j+1) % (line.length)]
                if(next === '.') {
                    moved++;
                    seafloor[i][j] = '.';
                    seafloor[i][(j+1) % (line.length)] = '>';
                }
            }
        })
    })
    cloned = clone(seafloor);
    cloned.forEach((line, i) => {
        line.forEach((spot, j) => {
            if (spot === 'v') {
                const next = cloned[(i + 1) % (seafloor.length)][j]
                if (next === '.') {
                    moved++;
                    seafloor[i][j] = '.';
                    seafloor[(i + 1) % (seafloor.length)][j] = 'v';
                }
            }
        })
    });
}

console.log('task1 -> ', turns);
