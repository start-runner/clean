export default (/* options */) => (input) => {
  return function clean(log) {
    const makethen = require('makethen');
    const rimraf = makethen(require('rimraf'));

    return Promise.all(
      input.map((file) => {
        return rimraf(file, { glob: false }).then(() => {
          log(file);

          return file;
        });
      })
    );
  };
};
