// proxy controler

function proxy_start(){
    var v = localStorage.getItem("proxy");
    if (v == null) {
        console.log("[info] starting the api");
        fetch("options/proxy.js");
        console.log("[info] api is started")
        localStorage.setItem("proxy", "on");
    } 
}

function proxy_end(){
    var v = localStorage.getItem("proxy");
    if (v == null) {}
    else {
        console.log("[info] stoping the proxy");
        localStorage.removeItem("proxy");
        console.log("[info] proxy stopped");
    }
}