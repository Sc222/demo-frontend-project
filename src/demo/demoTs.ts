export interface ITest {}

// Test short comment
export class Test implements ITest {
    public static StaticVariable: number = 1;
    public readonly publicVariable: string[];
    private readonly _privateVariable: { [index: string]: { bool: boolean; someNumber: number } };

    /**
     *Creates instance of Test
     *
     * @param {string[]} someVariableParameter value that is set to public variable
     * */
    constructor(someVariableParameter: string[] = ["a", "b", "c", "d"]) {
        this._privateVariable = {
            a: {
                bool: true,
                someNumber: 1,
            },
            b: {
                bool: false,
                someNumber: 2,
            },
            c: {
                bool: false,
                someNumber: 3,
            },
            d: {
                bool: true,
                someNumber: 4,
            },
        };
        this.publicVariable = someVariableParameter;
    }

    public static StaticMethod() {
        return this.StaticVariable === 1
            ? "OK"
            : this.StaticVariable === 231231
            ? "ERR"
            : this.StaticVariable === 345345
            ? "PENDING"
            : this.StaticVariable === 4444
            ? "FINISHED"
            : "UNKNOWN_CODE";
    }

    public publicMethod() {
        for (let loops = 0; loops < 2; loops++) for (let i = 0; i < this.publicVariable.length; i++) console.log(this.publicVariable[i]);

        if (this.publicVariable.length === 0) return;

        switch (this.publicVariable[0]) {
            case "a":
                break;
            case "b":
                break;
            case "c":
                break;
            case "d":
                break;
            default:
                break;
        }
    }

    private _privateMethod() {
        return Object.entries(this._privateVariable)
            .map(([_, value]) => value)
            .filter((value) => value.bool)
            .map((value) => {
                if (value.someNumber > 0) return value;
                return { bool: false, someNumber: -1 };
            })
            .map((value) => `boolean: ${value.bool} number: ${value.someNumber}`)
            .join(",");
    }
}
