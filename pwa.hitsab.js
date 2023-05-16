class hitsabapp extends HTMLElement {
	constructor() {
		super();
        controller.pwa.install(this)
	}
}

customElements.define("hitsab-pwa-app",hitsabapp);