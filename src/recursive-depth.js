module.exports = class DepthCalculator {
    calculateDepth = (arr) => {
        let count = 1;
        while (arr.some(i => Array.isArray(i))) {
            arr = arr.flat(1);
            count++;
        }
        return count;
    }
};