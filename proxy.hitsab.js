// proxy controler
// id for proxy content id="pros" and id="proe"
function proxy_start(){
    var v = localStorage.getItem("proxy");
    if (v == null) {
        console.log("[info] starting the api");
        fetch("options/proxy.js");
        let ntab = document.createElement('script');
        document.getElementById('head').appendChild(ntab);
        console.log("[info] api is started")
        localStorage.setItem("proxy", "on");
        document.getElementById('pros').setAttribute("class","menu-item menu-active");
        document.getElementById('proe').setAttribute("class","menu-item");
    } 
}

function proxy_end(){
    var v = localStorage.getItem("proxy");
    if (v == null) {}
    else {
        console.log("[info] stoping the proxy");
        localStorage.removeItem("proxy");
        document.getElementById('proe').setAttribute("class","menu-item menu-active");
        document.getElementById('pros').setAttribute("class","menu-item");
        console.log("[info] proxy stopped");
    }
}

var prv = localStorage.getItem("proxy");
if (prv == null) {
    document.getElementById('pros').setAttribute("class","menu-item menu-active");
    document.getElementById('proe').setAttribute("class","menu-item");
}
else {
    document.getElementById('proe').setAttribute("class","menu-item menu-active");
    document.getElementById('pros').setAttribute("class","menu-item");
}
