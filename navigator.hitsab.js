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
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.search(urlRegex, function(url) {return url;})
  }
function iframe_check(id) {
    try {
        console.log(id)
        var iframe = document.getElementById("new_tab_" + id);
        var elmnt = iframe.contentWindow.document.getElementsByClassName("neterror");;
        console.log(wlmnt)
        return "error"
    } catch {
        return "ok"
    }
}

function search(id) {
    document.getElementById("hitsab_loader").setAttribute("style","visibility: visible");
    var moteur = "https://www.google.com/search?q="
    var url = document.getElementById("inputb").value;
    console.log(urlify(url))
    if (urlify(url) == -1) {
        var nurl = moteur + url + "&igu=1"
    }
    else {
        var nurl = url
    }
    var iframe = document.createElement('iframe');
    const mtab = parseFloat(localStorage.getItem("tab"));
    localStorage.setItem("tab", 1)
    var ctab = 0
    while (ctab < mtab) {
        var iframes = document.getElementsByTagName('iframe')[parseFloat(localStorage.getItem("tab"))];
        iframe.setAttribute("style","visibility: hidden;");
        var ctab = ctab + 1
        localStorage.setItem("tab", ctab)
    }
    localStorage.setItem("tab", mtab);
    document.getElementById("navigator").appendChild(iframe);
    iframe.setAttribute("class", "window");
    iframe.setAttribute("id", "new_tab_" + id);
    iframe.setAttribute("scrolling", "yes")
    iframe.setAttribute("frameborder", "0")
    iframe.setAttribute("allowfullscreen", "True")
    if (localStorage.getItem("proxy") == 'on') {
        iframe.setAttribute("src","https://HitsabEnvSystems.francoischouin1.repl.co/fetch/" + nurl.replace("https://",""))
    } else{
        iframe.setAttribute("src",nurl)
    }
    var other = document.getElementsByTagName('iframe')["new_tab_" + id];
    try { 
        setCookie("actab", "new_tab_" + id);
        setCookie("actabn",id)
        other.setAttribute("style","visibility: visible;");
        var test = iframe_check(id);
        if (test == "error") {
            tester.document.getElementById("new_tab_" + id);
            tester.remove();
            elerror.document.getElementById("iframe_error");
            elerror.test('The page does not accept iframe on this website');
        }
    }
    catch {
        console.log("[no active tab]")
    }
    document.getElementById("inputb").value = "";
    var iframe = document.getElementById("vew_tab_" + id)
    // const iname = iframe.contentWindow.document.title;
    // document.getElementById(id).textContent = iname;
    document.querySelector("#new_tab_" + id).addEventListener("load", ev => {
        document.getElementById("hitsab_loader").setAttribute("style","visibility: hidden");
    })
}
function searchV2(id) {
    document.getElementById("hitsab_loader").setAttribute("style","visibility: visible");
    var moteur = "https://www.google.com/search?q="
    var url = document.getElementById("inpuVt2").value;
    console.log("data : " + url)
    console.log(urlify(url))
    if (urlify(url) == -1) {
        var nurl = moteur + url + "&igu=1"
    }
    else {
        var nurl = url
    }
    var iframe = document.createElement('iframe');
    const mtab = parseFloat(localStorage.getItem("tab"));
    localStorage.setItem("tab", 1)
    var ctab = 0
    while (ctab < mtab) {
        var iframes = document.getElementsByTagName('iframe')[parseFloat(localStorage.getItem("tab"))];
        iframe.setAttribute("style","visibility: hidden;");
        var ctab = ctab + 1
        localStorage.setItem("tab", ctab)
    }
    localStorage.setItem("tab", mtab);
    document.getElementById("navigator").appendChild(iframe);
    iframe.setAttribute("class", "window");
    iframe.setAttribute("id", "new_tab_" + id);
    iframe.setAttribute("scrolling", "yes")
    iframe.setAttribute("frameborder", "0")
    iframe.setAttribute("allowfullscreen", "True")
    if (localStorage.getItem("proxy") == 'on') {
        iframe.setAttribute("src","https://HitsabEnvSystems.francoischouin1.repl.co/fetch/" + nurl.replace("https://",""))
    } else{
        iframe.setAttribute("src",nurl)
    }
    var other = document.getElementsByTagName('iframe')["new_tab_" + id];
    try { 
        setCookie("actab", "new_tab_" + id);
        setCookie("actabn",id)
        other.setAttribute("style","visibility: visible;");
    }
    catch {
        console.log("[no active tab]")
    }
    document.getElementById("inpuVt2").value = "";
    var iframe = document.getElementById("vew_tab_" + id)
    // const iname = iframe.contentWindow.document.title;
    // document.getElementById(id).textContent = iname;
    document.querySelector("#new_tab_" + id).addEventListener("load", ev => {
        document.getElementById("hitsab_loader").setAttribute("style","visibility: hidden");
    })
}