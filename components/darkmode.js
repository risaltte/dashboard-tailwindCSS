import Cookies from "js-cookie";

export function darkmode() {
    return {
        darkmodeOn: JSON.parse(Cookies.get('darkmodeOn') ?? false),

        toggleDarkmode() {
            this.darkmodeOn = !this.darkmodeOn
            
            Cookies.set('darkmodeOn', JSON.stringify(this.darkmodeOn));
        }
    };
}