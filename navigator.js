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

  function verfy(text) {
    var test = fetch("https://api.geoloup.com:5000/verfy/adress/test?t=" + text)
        .then((response) => response.text());
    console.log(test)
}

function search(id) {
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
    iframe.setAttribute("scrolling", "no")
    iframe.setAttribute("frameborder", "0")
    iframe.setAttribute("allowfullscreen", "True")
    iframe.setAttribute("src",nurl)
    var other = document.getElementsByTagName('iframe')["new_tab_" + id];
    try { 
        other.setAttribute("style","visibility: visible;");
        setCookie("actab", "new_tab_" + id);
        setCookie("actabn",id)
    }
    catch {
        console.log("[no active tab]")
    }
    document.getElementById("inputb").value = "";
}