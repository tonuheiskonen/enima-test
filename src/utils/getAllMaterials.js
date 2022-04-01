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

export function getMatrialNames(assembly) {
    if (assembly.Children.length === 0) return;
    assembly.Children.forEach(child => {
        // console.log(child['Material Type'], materialTypes.includes(child['Material Type']));
        if (materialTypes.includes(child['Material Type'])) {
            materials.add(`${child['Material Code']}_${child['Color Code']}`);
        }
        getMatrialNames(child);
    });
    return materials;
}