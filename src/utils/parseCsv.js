import { getMatrialNames, getPurchasedPartsNames } from "./getAllMaterials";

const numberDataColumns = [
    'length',
    'width',
    'thickness',
    'quantity',
];

/**
 * Kontrollida: ItemNumber peab olema unikaalne!!!
 * On juhtumeid, kus ItemNumber kordub.
 * (Tundub, et inventori failinimes ei tohi olla täpitähti)?!
 */

export function parseToObject(headers, data) {

    const fullList = parseAll(headers, data);

    fullList.forEach((parent) => {
        // Ostutooted ei sisalda komponente. Lülita check sisse kui on jamasid.
        // if (parent.type === 'Purchased') return;
        parent.Children = fullList.filter((child) => child.parentID === parent.ID);
    });
    // vaja on ainult kõige esimest elementi (tellimus)
    const result = fullList.filter(first => first.parentID === '')[0];
    result.type = 'Order';
    result.Children.push({
        type: '_List',
        name: 'materjalid',
        list: getMatrialNames(result),
        Children: [],
    });
    result.Children.push({
        type: '_List',
        name: 'ostutooted',
        list: getPurchasedPartsNames(result),
        Children: [],
    });
    return result;
}

function parseAll(headers, data) {
    return data.map((row) => {
        return headers.reduce((rowObject, header, index) => {
            numberDataColumns.includes(header) ? rowObject[header] = toNumber(row[index]) : rowObject[header] = row[index];
            return rowObject;
        }, {});
    });
}

function toNumber(string) {
    return Number(string.replace(',', '.'))
}