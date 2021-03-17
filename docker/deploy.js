const fs = require('fs');
const cssRegex = /(<link\s+href=\")([a-zA-Z\/\.0-9]+)(\"\s+rel=\"stylesheet\">)/g;
const jsRegex = /(<script\s+src=\")([\/a-zA-Z.0-9]+)(\"><\/script>)/g;

const getFileList = (data, regex) => {
    let match = data.matchAll(regex);
    let fileList = [];
    for (let item of match) {
        fileList.push(item[2].replace(/^\//, ''));
    }
    return fileList;
};
const getScript = (data) => {
    let regex = /(<script>)(.+)(<\/script>)/;
    let match = data.match(regex);
    let script = '';
    if (match) {
        script = match[2].replace(
            /(<\/script><script src=\".+\">)/,
            ''
        );
    }
    return script;
};
const readFile = (file, action) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            action(data);
        }
    });
};
const writeToFile = (file, data) => {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(`${file} saved.`);
        }
    });
};

readFile('/app/public/index.html', (data) => {
    writeToFile('/app/public/setup.js', getScript(data));
    let css = getFileList(data, cssRegex);
    let js = ['setup.js', ...getFileList(data, jsRegex)];
    writeToFile(
        '/app/assets/files.json',
        JSON.stringify({
            css: css,
            js: js,
        })
    );
});
