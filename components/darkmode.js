export function darkmode() {
    return {
        darkmodeOn: false,

        toggleDarkmode() {
            this.darkmodeOn = !this.darkmodeOn
        }
    };
}