class VigenereCipheringMachine {
    constructor(modeMarker) {
        mode: modeMarker;
    }
    genTable() {
        let table = [];
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%';
        for (let i = 0; i < alphabet.length; i++) {
            let row = alphabet.slice(i);
            row += alphabet.slice(0, i);
            table.push(row);
        }
        console.log(table);
        return table;
    }
    getKeyScript(str1, str2) {
        let res = '';
        let k = 0;
        for (let i = 0; i < str2.length; i++) {
            if (i % str1.length === 0) {
                k = 0;
            }
            res += str1[k];
            k++;
        }
        return res;
    }
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error();
        }
        let string = "";
        key.toUpperCase();
        message.toUpperCase();
        let keyScript = this.getKeyScript(key, message);
        let table = this.genTable();
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%';
        for (let k = 0; k < message.length; k++) {
            let i = alphabet.indexOf(message[k]);
            let j = alphabet.indexOf(keyScript[k]);
            string += table[i][j];
        }
        return this.mode ? string.reverse() : string;
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error();
        }
        let string = '';
        return this.mode ? string.reverse() : string;
    }
}

module.exports = VigenereCipheringMachine;
