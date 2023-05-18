const local = {
    "command":{
        "sanbox_enable": (sandbox,id) => {
            try {
                fetch("http://localhost:8030/api/sandbox/enable?url" + sanbox)
                .then((response) => response.test())
                .then((text) => {
                    document.getElementById(id).innerHTML="<iframe src=''>" + text + "</iframe>"
                });
            } catch {
                return Error("hitsab is running in a navigator that is not hitsab")
            }
        },
        "sanbox_disable":(sandbox,id) => {
            try {
                fetch("http://localhost:8030/api/sandbox/disable?url" + sanbox)
                .then((response) => response.test())
                .then((text) => console.log(text));
            } catch {
                return Error("hitsab is running in a navigator that is not hitsab")
            }
        }
    },
    "sandbox": {
        "active":(sandbox,id,url) => {
            local.command.sanbox_enable(sandbox,id)
        },
        "disable":(sandbox,id) => {
            document.getElementById(id).innerHTML = "Sandbox was diasbled"
            local.command.sanbox_disable(sandbox,id)
        }
    }
}

const server = {
    "command":{
        "sanbox_enable": (sandbox,id) => {
            try {
                fetch("https://hitsab.francoischouin1/api/sandbox/enable?url=" + sandbox)
                .then((response) => response.test())
                .then((text) => {
                    document.getElementById(id).innerHTML="<iframe src=''>" + text + "</iframe>"
                });
            } catch {
                return Error("Error will fetching public api")
            }
        },
        "sanbox_disable":(sandbox,id) => {
            try {
                fetch("https://hitsab.francoischouin1/api/sandbox/disable?url=" + sandbox)
                .then((response) => response.test())
                .then((text) => console.log(text));
            } catch {
                return Error("Error will fetching public api")
            }
        }
    },
    "api": {
        "sandbox":{
            "active":(sandbox,id,url) => {
                server.command.sanbox_enable()
            },
            "disable":(sandbox,id) => {
                document.getElementById(id).innerHTML = "Sandbox was disabled"
                server.command.sanbox_enable()
            }
        }
    }
}
