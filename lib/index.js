export default function(patterns) {
    return function clean(resolve, reject) {
        const del = require('del');

        del(patterns).then(resolve, reject);
    };
}
