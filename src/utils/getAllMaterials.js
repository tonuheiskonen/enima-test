/**
 * 
 * @param {Object} assembly 
 */

const materialTypes = [
    'Board',
    'Laminated Board',
    'Edge Band',
    'Paint',
];

const materials = new Set();
const purchasedParts = new Set();

export function getMatrialNames(assembly) {
    if (assembly.Children.length === 0) return;
    assembly.Children.forEach(child => {
        if (materialTypes.includes(child.materialType)) {
            materials.add(`${child.materialCode}${child.colorCode ? '_' + child.colorCode : ''}_${child.thickness}mm`);
        }
        getMatrialNames(child);
    });
    return Array.from(materials);
}

export function getPurchasedPartsNames(assembly) {
    if (assembly.Children.length === 0) return;
    assembly.Children.forEach(child => {
        if (child.type === 'Purchased') {
            purchasedParts.add(child.code);
        }
        getPurchasedPartsNames(child);
    });
    return Array.from(purchasedParts);
}