/**
 * function removes all duplicate rows from csv file
 * @param {String} csvFile 
 * @returns 'csv string with unique rows'
 */
export const normalizeCsv = csvFile => {
    const newRow = '\r\n';
    const csvSet = new Set();
    const csvArray = csvFile.split(newRow);
    csvArray.forEach(row => csvSet.add(row));
    const csvString = Array.from(csvSet).reduce((string, row) => string + newRow + row);
    console.log('normalize', getHeadersAndData(csvSet));
    return csvString;
}

/**
 * function separates headers (1st row) and data (...rest) from Set
 * @param {Set} set 
 * @returns 'array with [headers, data]'
 */
const getHeadersAndData = set => {
    const [headers, ...rest] = set;
    // headers must be array
    return [headers, rest];
}