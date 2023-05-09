class hitsabnavigator extends HTMLElement {
	constructor() {
		super();
		var html = this.innerHTML
		console.log(html)
		var url = this.src
		var url = url.replaceAll("https://","https$|")
		var url = url.replaceAll("http://","http$|")
		var get = () => {
			return fetch("https://hitsabenvsystems.francoischouin1.repl.co/proxy/" + url)
			.then((reponse) => reponse.text())
			.then((data) => {
				return data
			})
		}
		var url = this.src
		var website = get()
		var urlr = url.replaceAll("https://","https$|")
		var urlr = url.replaceAll("http://","http$|")
		var website = website.replaceAll(url,"https://hitsabenvsystems.francoischouin1.repl.co/proxy/" + url)
		this.innerHTML = website
	}
}

customElements.define("hitsab-navigator",hitsabnavigator);