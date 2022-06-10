import fs from 'fs';


const START_DIR = ['C:/ENIMA WW 2022/PROJECTS'];

function isDir(path) {
    const stat = fs.lstatSync(path);
    return stat.isDirectory();
}

const loadFiles = (dir) => {
    dir.forEach(element => {
        const list = fs.readdirSync(element).reduce((res, name) => {
            if (isDir(`${element}/${name}`)) {
                res.push(`${element}/${name}`);
            }
            return res;
        }, []);
        if (list.length === 0) return;
        console.log(list)
        loadFiles(list)
    });
}

export const get = () => {
    const test = loadFiles(START_DIR);
    return {
        body: {
            test,
        }
    }
}