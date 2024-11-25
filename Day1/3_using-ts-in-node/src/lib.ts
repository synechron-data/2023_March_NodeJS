export class Employee {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }
}