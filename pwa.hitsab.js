class hitsabapp extends HTMLElement {
	constructor() {
		super();
        localapi(this)
	}
}

customElements.define("hitsab-pwa-app",hitsabapp);