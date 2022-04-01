/**
 * Kontrollida: ItemNumber peab olema unikaalne!!!
 * On juhtumeid, kus ItemNumber kordub.
 */

const csvSeparator = ';';

export function parseCsv(fileContent) {

    const csvRows = fileContent.trim().split('\r\n');
    const headers = csvRows.shift().split(csvSeparator);

    const list = parseAll(headers, csvRows);

    list.forEach((parent, i) => {
        parent.Children = [];
        if (parent['Item Type'] === 'Purchased') return;
        parent.Children = list.filter(child => child.Parent === parent.ItemNumber);
    });

    const result = list.filter(first => first.Parent === '')[0];
    // console.log(result);
    result['Item Type'] = 'Order';
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
