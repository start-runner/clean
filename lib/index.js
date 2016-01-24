export default function(patterns) {
    return function clean() {
        return require('del')(patterns);
    };
}
