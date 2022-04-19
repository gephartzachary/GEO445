function dropdown(name) {
    let div = document.getElementById(name);
    if (div.childElementCount == 0) {
        if (name == "labContent") {
            for (let i = 1; i < 11; i++) {
                let temp = document.createElement('a');
                let link = document.createTextNode("Lab "+ i);
                temp.appendChild(link);
                temp.href = "lab_" + i + "/geo455_lab" + i + ".html";
                temp.classList.add("menuitem");
                div.appendChild(temp);
            }
        } else if (name == "exContent") {
            for (let i = 1; i < 8; i++) {
                let temp = document.createElement('a');
                let link = document.createTextNode("Ex "+ i);
                temp.appendChild(link);
                temp.href = "ex_" + i + "/geo455_ex" + i + ".html";
                temp.classList.add("menuitem");
                div.appendChild(temp);
            }
        } else {
            let temp = document.createElement('p');
            let link = document.createTextNode("Big things are coming...");
            temp.appendChild(link);
            temp.classList.add("menuitem");
            div.appendChild(temp);
        }
    } else {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }
}
