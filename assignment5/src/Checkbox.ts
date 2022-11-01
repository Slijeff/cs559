export class Checkbox {
    private selection: HTMLInputElement;

    constructor(querySelector: string) {
        this.selection = document.querySelector(querySelector);
        this.selection.addEventListener('change', (ev) => {
            this.selection.checked = !!this.selection.checked;
        })
    }

    public get checked() {
        return this.selection.checked;
    }

}