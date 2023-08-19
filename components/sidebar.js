export function sidebar() {
    return {
        MediumScreen: 768,
        openSidebar: window.innerWidth >= this.MediumScreen,
        openUserPreferencesSidebar: false,

        toggleSidebar() {
            this.openSidebar = !this.openSidebar;
            this.openUserPreferencesSidebar = false;

            let isSmallScreen = window.innerWidth < this.MediumScreen;

            if (isSmallScreen) {
                this.$refs.sidebar.classList.toggle('-ml-[500px]');

                return;
            }

            this.$refs.sidebar.classList.toggle('md:ml-0');
            this.$refs.main.classList.toggle('md:ml-64');
            this.$refs.header.classList.toggle('md:ml-64');  
        },

        toggleOpenUserPreferencesSidebar() {
            this.openUserPreferencesSidebar = !this.openUserPreferencesSidebar;
        }
    };
}