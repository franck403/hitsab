class hitsabnavigator extends HTMLElement {
	constructor() {
		super();
        var url = this.attributes.src.value
        var url = url.replaceAll("https://","https$|")
        var url = url.replaceAll("http://","http$|")
        console.log("https://hitsabenvsystems.francoischouin1.repl.co/proxy/" + url)
        var get = async () => {
            return fetch(url)
            .then((reponse) => reponse.text())
            .then((data) => {
                var website = data
                var website = website.replaceAll(url,"https://hitsabenvsystems.francoischouin1.repl.co/proxy/" + url)
                this.innerHTML = website
                return data
            })
        }
        await get()
	}
}
customElements.define("hitsab-navigator",hitsabnavigator);