export function loadFile(accept: string) {
    return new Promise<FileList>((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = accept;
        input.multiple = false;

        input.onchange = () => resolve(input.files);
        input.onerror = () => reject();

        input.click();
    });
}

export function readFileToObject<T = any>(file: File) {
    return new Promise<T>((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            try {
                const obj = JSON.parse(reader.result as string);
                resolve(obj);
            } catch (e) {
                reject('Invalid data format');
            }
        };

        reader.onerror = () => reject();

        reader.readAsText(file);
    });
}