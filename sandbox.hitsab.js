class hitsabnavigatorsandbox extends HTMLElement {
	constructor() {
		super();
        var sandbox = this.attributes.sandbox
        try {
            local.sanbox.active(sandbox,this.attributes.id,this.attributes.src)
        } catch {
            server.api.sanbox.active(sandbox,this.attributes.id,this.attributes.src)
        }
	}
}
customElements.define("sanbox",hitsabnavigatorsandbox,{ extends: "hitsab-navigator" });