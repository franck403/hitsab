function index(number){
    document.querySelector(".tabs button").dataset.status="inactive";
    document.getElementById(number).dataset.status="active";
}