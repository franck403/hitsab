class hitsabnavigatorsandbox extends HTMLElement {
	constructor() {
		super();
        var sandbox = this.attributes.sandbox
        try {
            local.sanbox.active(sandbox,this.attributes.id,this.attributes.src)
        } catch {
            try {
                server.api.sanbox.active(sandbox,this.attributes.id,this.attributes.src)
            } catch {
                server.error.post_snapshot(server.error.snapshot.api())
            }
        }
	}
}
customElements.define("hitsab-navigator",hitsabnavigatorsandbox);