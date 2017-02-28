export class App {
    constructor() {
        this.things = [
            { id: 1, name: 'This has an optional property', optional: "Hi, I'm optional"  },
            { id: 2, name: "This doesn't have an optional property",  },
        ];

        this.selectedThings = null;
    }
}