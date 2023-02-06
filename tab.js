function setCookie(cname, cvalue) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(cname,cvalue)
    } else {
        console.log("[info] Web sotrage disable")
        alert("You need to activate the web storage for make work this website")
    }
}
function getCookie(cname) {
    return localStorage.getItem(cname)
}

console.log("-----------------------------");

var keys = localStorage.getItem("computerid");
var keyid = sessionStorage.getItem("session");
var logged = false

if (keys != null) {
    console.log("computer logged")
    var logged = true
}
else {
    localStorage.setItem("tab", 2);
    var key = Math.random();
    console.log("generating computer key");
    localStorage.setItem("computerid", key);
}

if (keyid != null) {
    console.log("session load")
}
else {
    localStorage.setItem("tab", 2);
    var session = Math.random();
    console.log("generating session keys");
    sessionStorage.setItem("session", session);
}

console.log("-----------------------------");
console.log("finish generating the session");
console.log("-----------------------------");

function end() {
    document.getElementById("loading").remove();
    const allElements = document.querySelectorAll('.class hide');

    allElements.forEach((element) => {
        element.classList.remove('hide');
        element.classList.add('tab');
    });
}

function tab(id){
    const mods3 = document.getElementById(id);
    mods3.setAttribute("class","active")
    const mods4 = document.getElementById(getCookie("actabn"));
    mods4.setAttribute("class","hide")

    url = getCookie("new_tab_" + id);
    if (url == null) {
        const mods1 = document.getElementById('input');
        const mods2 = document.getElementById('inputimg');
        mods2.setAttribute("onclick","search(" + id + ")")
        mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + id + ")}")
    } else {
        var iframe = document.createElement('iframe');
        document.getElementById("navigator").appendChild(iframe);
        iframe.setAttribute("class", "window");
        iframe.setAttribute("id", "new_tab_" + id);
        iframe.setAttribute("scrolling", "yes")
        iframe.setAttribute("frameborder", "0")
        iframe.setAttribute("allowfullscreen", "True")
        iframe.setAttribute("src",url)
    }
    try { 
        var other = document.getElementsByTagName('iframe')[getCookie("actab")];
        other.setAttribute("style","visibility: hidden;");
        var others = document.getElementsByTagName('iframe')["new_tab_" + id];
        others.setAttribute("style","visibility: visible;");
    }
    catch {
        console.log("[no active tab]")
    }
    setCookie("actab","new_tab_" + id)
    setCookie("actabn",id)
}
function close(id) {
    const button = document.getElementById(id);
    const button_close = document.getElementById("close_" + id);
    const tab = document.getElementById("new_tab_" + id);
    button.remove();
    button_close.remove();
    tab.remove();
}
function wtab(mtab) {
    let ntab = document.createElement('button');
    ntab.textContent = 'tab ' + mtab;
    ntab.onclick = 'tab' + mtab;
    ntab.id = mtab;
    ntab.class = "hide";
    document.getElementById('tab').appendChild(ntab);
    var jhs = "tab" + "(" + mtab + ")"
    ntab.setAttribute("onclick", jhs);
    ntab.setAttribute("class", "hide");
    let ntgb = document.createElement('button');
    const dtab = ntab
    ntgb.textContent = 'X';
    ntgb.id = "close_" + dtab;
    ntab.class = "close";
    document.getElementById(dtab).appendChild(ntab);
    var jhs = "close" + "(" + dtab + ")"
    ntgb.setAttribute("onclick", jhs);
}
function ltab() {
    if (typeof (Storage) !== "undefined") {
        const mtab = parseFloat(localStorage.getItem("tab"));
        if (logged == true){
            if (mtab < 30) {
            console.log("[info] tab added to the cache")
            localStorage.setItem("tab", mtab+1);
            wtab(mtab);
            } else {
                console.log("[info] maximum the tab is 30")
            }
        }
        else {
            localStorage.setItem("tab", 2);
        }
    } else {
        console.log("[info] Web sotrage disable")
        alert("You need to activate the web storage for make work this website")
    }
}
function fresh() {
    const mtab = parseFloat(localStorage.getItem("tab"));
    localStorage.setItem("tab", 1)
    if (mtab < 30) {
        var ctab = 0
        while (ctab < mtab) {
            console.log("[info] Loading tab.")
            wtab(parseFloat(localStorage.getItem("tab")));
            var ctab = ctab + 1
            localStorage.setItem("tab", ctab)
        }
        document.getElementById(1).remove();
        localStorage.setItem("tab", mtab);
        end();
    }else {
        localStorage.setItem("tab", 30);
        const stab = parseFloat(localStorage.getItem("tab"));
        var ctab = 0
        while (ctab < stab) {
            console.log("[info] Loading tab.")
            wtab(parseFloat(localStorage.getItem("tab")));
            var ctab = ctab + 1
            localStorage.setItem("tab", ctab)
        }
        document.getElementById(30).remove();
        localStorage.setItem("tab", stab);
        end();
    }
}

const mods1 = document.getElementById('input');
const mods2 = document.getElementById('inputimg');
mods2.setAttribute("onclick","search(" + 1 + ")")
mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + 1 + ")}")
setCookie("actabn",1)

fresh()
