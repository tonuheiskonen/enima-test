const csvSeparator = ';';
const validHeadersArray = [
    'parentID',
    'ID',
    'code',
    'name',
    'comments',
    'hasGrain',
    'length',
    'width',
    'thickness',
    'quantity',
    'units',
    'coverSide',
    'type',
    'materialType',
    'materialCode',
    'colorCode',
];
/**
 * function removes all duplicate rows from csv file
 * @param {String} csvString 
 * @returns {Set} 'csv string with unique rows'
 */
const normalizeCsv = csvString => {
    const newRow = '\r\n';
    const csvSet = new Set();
    const csvArray = csvString.trim().split(newRow);

    csvArray.forEach(row => csvSet.add(row));
    return csvSet;
}

/**
 * function separates headers (1st row) and data (...rest) from Set
 * @param {String} csvString 
 * @returns {Array} 'array with [headers[], data[]]'
 */
export const getHeadersAndData = csvString => {
    const csvSet = normalizeCsv(csvString);
    const [headers, ...rest] = csvSet;

    return [
        headers.split(csvSeparator),
        rest.map(row => row.split(csvSeparator)),
    ];
}

/**
 * 
 * @param {Array} headers 
 */
export function hasValidHeaders(headers) {
    return headers.every(header => validHeadersArray.includes(header));
}

function makeValidHeadersArray(csvArray) {
    return csvArray[0].split(csvSeparator);
}