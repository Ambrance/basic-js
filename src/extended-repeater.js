module.exports = function repeater(str, options) {
    let res = str;
    if (options) {
        const times = options.repeatTimes || 1;
        let addition = options.addition || '';
        const separator = options.separator || '+';
        const additionRepeat = options.additionRepeatTimes || 1;
        const additionSeparator = options.additionSeparator || '|';
        let additionPattern = addition;
        if (additionRepeat > 1) {
            additionPattern = additionSeparator + addition;
        }
        const pattern = str + additionPattern.repeat(additionRepeat);
        res += addition + additionPattern.repeat(additionRepeat - 1);
        for (let i = 1; i < times; i++) {
            res += separator + pattern;
        }
    }
    return res;
};
