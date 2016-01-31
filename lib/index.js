export default (/* options */) => (input) => {
    return function clean(log) {
        const pify = require('pify');
        const rimraf = pify(require('rimraf'));

        return Promise.all(
            input.map(file => {
                return rimraf(file, { glob: false }).then(() => {
                    log(file);

                    return file;
                });
            })
        );
    };
};
