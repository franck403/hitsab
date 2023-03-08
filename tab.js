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
var rest = {
    'actab' : 'new_tab_1',
    'tab' : 1,
    'actabn' : 1,
    'actabm' :	1,
    'proxy' : 'off'
}

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

function tab0(id){
    const mods3 = document.getElementById("div_" + id);
    mods3.setAttribute("class","active")
    const mods4 = document.getElementById("div_" + getCookie("actabn"));
    mods4.setAttribute("class","hide")

    url = getCookie("new_tab_" + id);
    if (url == null) {
        const mods1 = document.getElementById('input');
        const mods2 = document.getElementById('inputimg');
        const mods3 = document.getElementById('inputs');
        mods2.setAttribute("onclick","search(" + id + ")")
        mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + id + ")}")
        mods3.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + id + ")}")
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
function tab1(id){
    try { 
        var other = document.getElementsByTagName('iframe')[getCookie("actab")];
        other.setAttribute("style","visibility: hidden;");
        var others = document.getElementsByTagName('iframe')["new_tab_" + id];
        others.setAttribute("style","visibility: visible;");
    }
    catch {}
    setCookie("actab","new_tab_" + id)
    setCookie("actabn",id)
}
function tab(id){
   tab0(id);
   tab1(id);
}
function close() {
    var id = getCookie("actabn")
    if (id == 1) {
        console.log("[info] You can't delete the first tab ")
        try {
            const iframe = document.getElementById("new_tab_" + id);
            iframe.remove();
        } catch {
            console.log("[info] no iframe open")
        }
    } else {
        const button = document.getElementById(id);
        const iframe = document.getElementById("new_tab_" + id);
        const tab = document.getElementById("div_" + id);
        button.remove();
        try {
            iframe.remove();
        } catch {
            console.log("[info] no iframe open ")
        }
        setCookie("tab",parseFloat(getCookie("tab")) -1 );
        setCookie("actabn",parseFloat(getCookie("actabn")) -1 );
        setCookie("actab",parseFloat(getCookie("actab")) -1 );
        var id = getCookie("actabn")
        setCookie("actabm",id + 1)
        tab0(id);
        tab1(id);
        tab.remove();
    }

}
function ftab(mtab){
    let ntab = document.createElement('button');
    ntab.textContent = 'tab ' + mtab;
    ntab.onclick = 'tab' + mtab;
    ntab.id = mtab;
    document.getElementById('div_' + mtab).appendChild(ntab);
    var jhs = "tab" + "(" + mtab + ")"
    ntab.setAttribute("onclick", jhs);
    ntab.setAttribute("class", "buttab");;
}
function wtab(mtab) {
    let ntab = document.createElement('section');
    ntab.id = "div_" + mtab;
    document.getElementById('tab').appendChild(ntab);
    ntab.setAttribute("class", "hide");
    ftab(mtab)
}
function ltab() {
    if (typeof (Storage) !== "undefined") {
        const mtab = parseFloat(localStorage.getItem("tab"));
        if (logged == true){
            if (mtab < 30) {
            console.log("[info] tab added to the cache")
            localStorage.setItem("tab", mtab+1);
            setCookie("actabm",mtab + 1)
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
        var ctab = 1
        while (ctab < mtab) {
            console.log("[info] Loading tab.")
            wtab(parseFloat(localStorage.getItem("tab")));
            var ctab = ctab + 1
            localStorage.setItem("tab", ctab)
        }
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
        document.getElementById("div_30").remove();
        localStorage.setItem("tab", stab);
        end();
    }
}

const mods1 = document.getElementById('input');
const mods2 = document.getElementById('inputimg');
const mods3 = document.getElementById('inputs');
mods2.setAttribute("onclick","search(" + 1 + ")")
mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + 1 + ")}")
mods3.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + 1 + ")}")
setCookie("actabn",1)

fresh()

document.getElementById("close").addEventListener("click", close);

document.getElementById("close2").addEventListener("click", close);