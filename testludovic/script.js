function index(number){
    document.querySelector("button").dataset.status="inactive";
    document.getElementById(number).dataset.status="active";
}