const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const readFile = (file, action) => {
    fs.readFile(
        path.resolve(__dirname, file),
        'utf8',
        (err, data) => {
            if (err) {
                console.log(err.message);
            } else {
                action(data);
            }
        }
    );
};

const isEnv = (line) => {
    if (line.length > 0 && line[0] !== '#') {
        let match = line.match(/^COMPOSE_|^APP_PORT/);
        return match === null ? true : false;
    }
    return false;
};

const getEnvVar = (data) => {
    let lines = data.split('\n');
    let env_vars = [];
    lines.forEach((line) => {
        if (isEnv(line)) {
            let modLine = line.replace(
                /(^[A-Z_]+=)(.+)/,
                '$1"$2"'
            );
            env_vars.push(modLine);
        }
    });
    return env_vars;
};

const runCommand = (command) => {
    exec(command, (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }
        console.log(stdout);
    });
};

readFile('../.env', (data) => {
    let env_vars = getEnvVar(data).join(' ');
    runCommand(`heroku config:set ${env_vars}`);
    runCommand('heroku config');
});
