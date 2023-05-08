class sandbox extends HTMLElement {
	constructor() {
	 super();
	 var html = this.innerHTML
	 console.log(html)
	 var url = this
	 var get = () => {
		return fetch("")
		.then((reponse) => reponse.text())
		.then((data) => {
			return data
		})
	 }
	 var website = 
	 this.innerHTML = website
	}
}