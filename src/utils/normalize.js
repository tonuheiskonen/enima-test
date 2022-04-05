const csvSeparator = ';';
const validHeadersArray = [
    'parentID',
    'ID',
    'code',
    'name',
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
 * @param {String} csvFile 
 * @returns {String} 'csv string with unique rows'
 */
export const normalizeCsv = csvFile => {
    const newRow = '\r\n';
    const csvSet = new Set();
    const csvArray = csvFile.split(newRow);

    // console.log(makeValidHeadersString(csvArray));

    csvArray.forEach(row => csvSet.add(row));
    const csvString = Array.from(csvSet).reduce((string, row) => string + newRow + row);
    console.log('normalize', getHeadersAndData(csvSet));
    return csvString;
}

/**
 * function separates headers (1st row) and data (...rest) from Set
 * @param {Set} set 
 * @returns {Array} 'array with [headers, data]'
 */
const getHeadersAndData = set => {
    const [headers, ...rest] = set;

    return [
        headers.split(csvSeparator),
        rest.map(row => row.split(csvSeparator)),
    ];
}

/**
 * 
 * @param {Array} headers 
 */
function hasValidHeaders(headers) {
    return headers.every(header => validHeadersArray.includes(header));
}

function makeValidHeadersString(csvArray) {
    return csvArray[0].split(csvSeparator);
}