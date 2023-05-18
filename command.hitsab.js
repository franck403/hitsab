const local = {
    "command":{
        "sanbox_enable": (sandbox,id) => {
            try {
                fetch("http://localhost:8030/api/sandbox/disable")
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
                fetch("http://localhost:8030/api/sandbox/disable")
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
    "api": {
        "sandbox":{
            "active":(sandbox,id,url) => {
                document.getElementById(id).innerHTML = "<iframe src='" + url + "'></iframe>"
            },
            "disable":(sandbox,id) => {
                document.getElementById(id).innerHTML = "Sandbox was diasbled"
            }
        }
    }
}
