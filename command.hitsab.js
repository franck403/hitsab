const local = {
    "command": {
        "sandbox_enable": (sandbox,id,url) => {
            try {
                fetch("http://localhost:8030/api/sandbox/enable?url=" + url)
                .then((response) => response.text())
                .then((text) => {
                    document.getElementById(id).innerHTML="<iframe src='" + url + "'>" + text + "</iframe>"
                });
            } catch {
                return Error("hitsab is running in a navigator that is not hitsab")
            }
        },
        "sandbox_disable":(sandbox,id,url) => {
            try {
                fetch("http://localhost:8030/api/sandbox/disable?url=" + url)
                .then((response) => response.text())
                .then((text) => console.log(text));
            } catch {
                return Error("hitsab is running in a navigator that is not hitsab")
            }
        }
    },
    "sandbox": {
        "active":(sandbox,id,url) => {
            local.command.sandbox_enable(sandbox,id)
        },
        "disable":(sandbox,id) => {
            document.getElementById(id).innerHTML = "Sandbox was diasbled"
            local.command.sandbox_disable(sandbox,id)
        }
    }
}

const server = {
    "command": {
        "sandbox_enable": (sandbox,id,url) => {
            try {
                fetch("https://hitsab.francoischouin1/api/sandbox/enable?url=" + url)
                .then((response) => response.text())
                .then((text) => {
                    document.getElementById(id).innerHTML="<iframe src='" + url + "'>" + text + "</iframe>"
                });
            } catch {
                return Error("Error will fetching public api to enable sandbox")
                document.getElementById(id).innerHTML="<iframe src=''>ERROR FAILED TO FETCH PUBLIC API</iframe>"
            }
        },
        "sandbox_disable":(sandbox,id,url) => {
            try {
                fetch("https://hitsab.francoischouin1/api/sandbox/disable?url=" + url)
                .then((response) => response.text())
                .then((text) => console.log(text));
            } catch {
                return Error("Error will fetching public api")
            }
        }
    },
    "api": {
        "sandbox": {
            "active":(sandbox,id,url) => {
                server.command.sandbox_enable(sandbox,id,url)
            },
            "disable":(sandbox,id,url) => {
                document.getElementById(id).innerHTML = "Sandbox was disabled"
                server.command.sandbox_disable(sandbox,id,url)
            }
        }
    },
    "error": {
        "snapshot": () => {
            var snapshot = document.getElementsByTagName("body")[0].innerHTML
            return snapshot
        },
        ".post_snapshot": (snapshot) => {
            try {
                fetch("https://HitsabStatus.francoischouin1/report/")
                .then((response) => response.text())
                .then((text) => console.log(text));
            } catch {
                alert("Hi, its seam like the navigator is crashing...If you don't have not wifi try later.If you do have wifi refresh the page with ctrl+r")
                return Error("ERROR WITH SERVER...")
            }
}
    }
}