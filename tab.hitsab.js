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
var restlist = ['actab','tab','actabn','actabm','proxy','tab_log']
var rest = {
    'actab' : 'new_tab_1',
    'tab' : 0,
    'actabn' : 0,
    'actabm' :	0,
    'proxy' : 'on',
    'tab_log':''
}

if (keys != null) {
    console.log("computer logged")
    var logged = true
    rts = restlist[5]
    localStorage.getItem(rts)
    console.log(rts + "    " + Array.isArray(rts))
    if (Array.isArray(rts)){
        rts.forEach(tg => {
            localStorage.removeItem(tg)
        });
    } else {}
}
else {
    localStorage.setItem("tab", 0);
    var key = Math.random();
    console.log("generating computer key");
    localStorage.setItem("computerid", key);
    restlist.forEach(to_rest => {
        var gc = rest[to_rest]
        localStorage.setItem(to_rest, gc);
    });
}

if (keyid != null) {
    console.log("session load")
}
else {
    localStorage.setItem("tab", 0);
    var session = Math.random();
    console.log("generating session key");
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

function float(data) {
    return parseFloat(data)
}

function old_new_log(id,act,sact="nothing") {
    if (act == "get") {
        // exemple of the look in localStorage
        // tab_content_*num* = *actual page in the list*!*number of tab in the history*!1'https://revu.geoloup.com,2'https://revu.geoloup.com/view
        // tab_log = *tab_id*,*tab_id*,*tab_id*
        
        // code for get the data and verfy if its good
        ids = localStorage.getItem("tab_log");
        id1 = localStorage.getItem("tab_content_" + id);
        fy = ids.split("!")
        fh = ids.split(",")
        verfy = "no"
        fh.forEach((data) => {if (data == "tab_" + id) {verfy = "yes"} else {}});
        // check is here
        if (verfy == "yes") {
            fij = id1.split("!") // get the actual number of the tab in the history
            fi = id1.split(",")

            fi.forEach((data) => {
                var data2 = data.split("'")
                if (data2 == hact) {
                    verfy2 = "yes"
                } else {}
            });
            return datre
        } else { // if check not pass
            console.log("[info] nothing about this tab")
            return (error)
        }
    } else if(act == "collect") {
        // tab_content_*num* = *actual page in the list*!*number of tab in the history*!1'https://revu.geoloup.com,2'https://revu.geoloup.com/view
        // tab_log = *tab_id*,*tab_id*,*tab_id*

        // first check if the tab is in the history
        ids = localStorage.getItem("tab_log")
        fk = ids.split(",")
        verfy = "no"
        fk.forEach((data) => {if (data == "tab_" + id) {verfy = "yes";console.log("[info] Tab found")} else {}});
        if (verfy == "yes") { // if verfy pass the check set the new information
            localStorage.setItem("tab_content_" + id,ids + "," + sact + ",");
            dus = localStorage.getItem("tab_content_" + id)
            dus1 = dus.split("!");dus1[1] = float(dus1[1]) + 1;dus1[0] = float(dus1[0]) - 1;dus1[0] = float(dus1[0]) + 2;dus1[0] = float(dus1[0]) - 1;dus1[2] = String(dus[2]) + ids + "," + sact + ","
            localStorage.setItem("tab_content_" + id,dus );
        } else { // if not pass the check add the tab to the list
            localStorage.setItem("tab_log",ids + ",tab" + ",")
            localStorage.setItem("tab_content_" + id,"1!1'" + sact + ",");
        }
    } else{}

}
function snew(id) {
    old_new_log(id,"get","new")
}
function old(id) {
    old_new_log(id,"get","old")
}

function tab0(id){
    const mods3 = document.getElementById("div_" + id);
    mods3.setAttribute("class","active")
    const mods4 = document.getElementById("div_" + getCookie("actabn"));
    mods4.setAttribute("class","hide")

    url = getCookie("new_tab_" + id);
    if (url == null) {
        // change all the search bar
        const mods1 = document.getElementById('input');
        const mods2 = document.getElementById('inputimg');
        const mods3 = document.getElementById('inputs');
        const mods4 = document.getElementById('refresh');
        const mods5 = document.getElementById('old');
        const mods6 = document.getElementById('new'); 
        mods5.setAttribute("onclick","old(" + id + ")")
        mods6.setAttribute("onclick","snew(" + id + ")")
        mods4.setAttribute("onclick","refresh(" + id + ")")
        mods2.setAttribute("onclick","search(" + id + ")")
        mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + id + ")}")
        mods3.setAttribute("onkeydown","if(event.key == 'Enter'){searchV2(" + id + ")}")
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
            localStorage.setItem("tab", 1);
        }
    } else {
        console.log("[info] Web sotrage disable")
        alert("You need to activate the web storage for make work this website")
    }
}
function fresh() {
    const mtab = parseFloat(localStorage.getItem("tab"));
    localStorage.setItem("tab", 0)
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

// function for refresh the iframe
function refresh(id) {
    document.getElementById('new_tab_' + id).contentWindow.location.reload();
}

const mods1 = document.getElementById('input');
const mods2 = document.getElementById('inputimg');
const mods3 = document.getElementById('inputs');
mods2.setAttribute("onclick","search(" + 1 + ")")
mods1.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + 1 + ")}")
mods3.setAttribute("onkeydown","if(event.key == 'Enter'){search(" + 1 + ")}")
setCookie("actabn",0)

fresh()

document.getElementById("close").addEventListener("click", close);

document.getElementById("close2").addEventListener("click", close);