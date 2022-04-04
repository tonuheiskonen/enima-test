/**
 * Kontrollida: ItemNumber peab olema unikaalne!!!
 * On juhtumeid, kus ItemNumber kordub.
 */

const csvSeparator = ';';

function toNumber(string) {
    return Number(string.replace(',', '.'))
}

// function hasThisChild(parent, childId) {
//     return (parent.filter(child => child.ItemNumber === childId).length > 0);
// }

export function parseCsv(fileContent) {

    const csvRows = fileContent.trim().split('\r\n');
    const headers = csvRows.shift().split(csvSeparator);

    console.log('parse', [headers, csvRows]);

    const list = parseAll(headers, csvRows);

    list.forEach((parent) => {
        parent.Children = [];
        // Ostutooted ei sisalda komponente
        // if (parent['Item Type'] === 'Purchased') return;
        parent.Children = list.filter((child) => child.Parent === parent.ItemNumber);
        // parent.Children.forEach(child => {
        //     child.sum = toNumber(parent['Quantity']) * toNumber(child['Quantity']);
        // });
    });

    const result = list.filter(first => first.Parent === '')[0];
    result['Item Type'] = 'Order';
    result['sum'] = '1';
    return result;
}

function parseAll(headers, csv) {
    const csvArr = [];
    csv.forEach((row, i) => {
        csvArr.push(parseRow(headers, row));
    });
    return csvArr;
}

function parseRow(headers, row) {
    const rowArray = row.split(csvSeparator);
    const rowObj = {
        // ID: nr + 1
    };
    rowArray.forEach((value, i) => {
        // if (i === 0) return;
        rowObj[headers[i]] = value.trim();
    });
    return rowObj;
}
