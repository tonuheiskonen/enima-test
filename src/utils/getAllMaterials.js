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
        if (materialTypes.includes(child['Material Type'])) {
            materials.add(`${child['Material Code']}_${child['Color Code']}`);
        }
        getMatrialNames(child);
    });
    return materials;
}

export function getPurchasedPartsNames(assembly) {
    if (assembly.Children.length === 0) return;
    assembly.Children.forEach(child => {
        if (child['Item Type'] === 'Purchased') {
            purchasedParts.add(child['Item Code']);
        }
        getPurchasedPartsNames(child);
    });
    return purchasedParts;
}