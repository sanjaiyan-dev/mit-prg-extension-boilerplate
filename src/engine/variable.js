/**
 * @fileoverview
 * Object representing a Scratch variable.
 */

const uid = require('../util/uid');

class Variable {
    /**
     * @param {string} id Id of the variable.
     * @param {string} name Name of the variable.
     * @param {(string|number)} type Type of the variable, one of "" or "list"
     * @param {boolean} isCloud Whether the variable is stored in the cloud.
     * @constructor
     */
    constructor (id, name, type, isCloud) {
        this.id = id || uid();
        this.name = name;
        this.type = type;
        this.isCloud = isCloud;
        switch (this.type) {
        case '':
            this.value = 0;
            break;
        case 'list':
            this.value = [];
            break;
        }
    }

    toXML () {
        return `<variable type="${this.type}" id="${this.id}">${this.name}</variable>`;
    }
}

module.exports = Variable;
