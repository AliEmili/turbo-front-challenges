const table = document.getElementById('table');
let coordinate = [0, 0];
const write = (table, word) => {
    const COLOR = 'blue';
    const rows = 4;

    if (table.rows.length === 0) {
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
        }
    }
    const paint = (r, c, COLOR) => {
        table.rows[r].cells[c].style.backgroundColor = COLOR;
    }
    const color_evens = (r, c) => {
        if (r % 2 !== 0) {
            paint(r, c, COLOR);
        }
    }
    const color_last_three = (r, c) => {
        if (r > 0) {
            paint(r, c, COLOR);
        }
    }
    const createEmptyPlaces = (quantity) => {
        for (let j = 0; j < quantity; j++) {
            for (let i = 0; i < rows; i++) {
                const td = document.createElement('td');
                table.rows[i].appendChild(td);
            }
        }
    }
    const coloring = (word) => {
        if (word === 'b') {
            createEmptyPlaces(4);
            for (let c = coordinate[0]; c < coordinate[0] + 4; c++) {
                for (let r = coordinate[1]; r < rows; r++) {
                    if (c === coordinate[0]) {
                        paint(r, c, COLOR);
                    } else if (c === coordinate[0] + 1) {
                        color_evens(r, c)
                    } else if (c === coordinate[0] + 2) {
                        color_last_three(r, c);
                    } else {
                        break;
                    }
                }
            }
            coordinate[0] += 4;
        } else if (word === 'a') {
            createEmptyPlaces(5);
            for (let c = coordinate[0]; c < coordinate[0] + 5; c++) {
                for (let r = coordinate[1]; r < rows; r++) {
                    if ([coordinate[0], coordinate[0] + 2].includes(c)) {
                        color_last_three(r, c)
                    } else if ([coordinate[0] + 1, coordinate[0] + 3].includes(c)) {
                        color_evens(r, c);
                    } else {
                        break;
                    }
                }
            }
            coordinate[0] += 5;
        } else if (word === 'c') {
            createEmptyPlaces(4);
            for (let c = coordinate[0]; c < coordinate[0] + 4; c++) {
                for (let r = coordinate[1]; r < rows; r++) {
                    if ([coordinate[0]].includes(c)) {
                        color_last_three(r, c);
                    } else if ([coordinate[0] + 1, coordinate[0] + 2].includes(c)) {
                        color_evens(r, c);
                    } else {
                        break;
                    }
                }
            }
            coordinate[0] += 4;
        }
    }
        // main action
    coloring(word);
}

document.addEventListener('keydown', e => write(table, e.key));