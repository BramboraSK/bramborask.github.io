function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('commandSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("commands");
    li = ul.getElementsByTagName('div');
  
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function retheme() {
    var cc = document.body.className;
    if (cc.indexOf("darktheme") > -1) {
        document.body.className = cc.replace("darktheme", "");
        document.getElementById("dlbtn").src = "./sun.png"
    } else {
        document.body.className += " darktheme";
        document.getElementById("dlbtn").src = "./moon.png"
    }
}

function logged() {
    var lb = document.getElementById("logbutton");
    lb.innerHTML = "{{ logged }}";
}

function clicked(clickid) {
    var x = document.getElementById(clickid+"n");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showcontent() {
    var x = document.getElementById("dropcont");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function closecontent() {
    var x = document.getElementById("dropcont");
    if (x.style.display === "block") {
        x.style.display = "none";
    }
}
