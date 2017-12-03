var a = 0;
function more1() {
    if (a % 2 == 0) {
        var b = document.getElementById("button1");
        b.style.display = "block";
        document.getElementById("more1").innerHTML = "Less";
    }
    else {
        var b = document.getElementById("button1");
        b.style.display = "none";
        document.getElementById("more1").innerHTML = "more";

    }

    a += 1;
    return y;
}

var c = 0;
function more2() {
    if (c % 2 == 0) {
        var d = document.getElementById("button2");
        d.style.display = "block";
        document.getElementById("more2").innerHTML = "Less";
    }
    else {
        var d = document.getElementById("button2");
        d.style.display = "none";
        document.getElementById("more2").innerHTML = "more";

    }

    c += 1;
    return c;
}

var e = 0;
function more3() {
    if (e % 2 == 0) {
        var f = document.getElementById("button3");
        f.style.display = "block";
        document.getElementById("more3").innerHTML = "Less";
    }
    else {
        var f = document.getElementById("button3");
        f.style.display = "none";
        document.getElementById("more3").innerHTML = "more";

    }

    e += 1;
    return e;
}

var g = 0;
function more4() {
    if (g % 2 == 0) {
        var h = document.getElementById("button4");
        h.style.display = "block";
        document.getElementById("more4").innerHTML = "Less";
    }
    else {
        var h = document.getElementById("button4");
        h.style.display = "none";
        document.getElementById("more4").innerHTML = "more";

    }

    g += 1;
    return g;
}

var h = 0;
function dro() {
    if (h % 2 == 0) {
        var i = document.getElementById("dro-list");
        i.style.display = "block";
    }
    else {
        var i = document.getElementById("dro-list");
        i.style.display = "none";
    }

    h += 1;
    return h;
}

var j = 0;
function InvertColor() {
    if (j % 2 == 0) {
        var k = document.getElementById("main-nav");
        var n = document.getElementById("dropdown-navbar");
        var r = document.getElementById("icon-on");
        var s = document.getElementById("icon-off");
        var t = document.getElementById("dro-icon-on");
        var u = document.getElementById("dro-icon-off");
        k.style.backgroundColor = "#343a40";
        n.style.backgroundColor = "#343a40";
        r.style.display = "none";
        s.style.display = "inline";
        t.style.display = "none";
        u.style.display = "block";
        var l = document.getElementsByTagName("a");
        var o = document.getElementsByTagName("h4");
        var q = document.getElementsByTagName("h1");
        var t = document.getElementById("dro-icon-on");
        var u = document.getElementById("dro-icon-off");
        for (m = 0; m < 20; m++) { l[m].style.color = "yellow"; }
        l[16].style.backgroundColor = "#343a40"
        for (p = 0; p < 5; p++) {
            o[p].style.color = "yellow";
            o[p].style.backgroundColor = "#343a40";
        }
        q[0].style.color = "yellow";
    }
    else {
        var k = document.getElementById("main-nav");
        var n = document.getElementById("dropdown-navbar");
        var r = document.getElementById("icon-on");
        var s = document.getElementById("icon-off");
        var t = document.getElementById("dro-icon-on");
        var u = document.getElementById("dro-icon-off");
        k.style.backgroundColor = "#3097D1";
        n.style.backgroundColor = "#3097D1";
        r.style.display = "inline";
        s.style.display = "none";
        t.style.display = "inline";
        t.style.color = "white";
        u.style.display = "none";
        var l = document.getElementsByTagName("a");
        var o = document.getElementsByTagName("h4");
        var q = document.getElementsByTagName("h1");
        for (m = 0; m < 20; m++) { l[m].style.color = "white"; }
        l[16].style.color = "#212529";
        l[16].style.backgroundColor = null;
        for (p = 0; p < 5; p++) {
            o[p].style.color = "#343a40";
            o[p].style.backgroundColor = "rgba(0, 0, 0, .03)"
        }
        q[0].style.color = "white";
    }

    j += 1;
    return j;
}

var fs = 16
function incFontSize() {
    var fontS1 = document.getElementById("font1")
    var fontS2 = document.getElementById("font2")
    var fontS3 = document.getElementById("font3")
    var fontS4 = document.getElementById("font4")
    var fontS5 = document.getElementById("font5")
    if (fs == 16) {
        fontS1.style.fontSize = "18px";
        fontS2.style.fontSize = "18px";
        fontS3.style.fontSize = "18px";
        fontS4.style.fontSize = "18px";
        fontS5.style.fontSize = "18px";
        fs = 18
    } else if (fs == 18) {
        fontS1.style.fontSize = "20px";
        fontS2.style.fontSize = "20px";
        fontS3.style.fontSize = "20px";
        fontS4.style.fontSize = "20px";
        fontS5.style.fontSize = "20px";
        fs = 20;
    } else if (fs == 20) {
        fontS1.style.fontSize = "22px";
        fontS2.style.fontSize = "22px";
        fontS3.style.fontSize = "22px";
        fontS4.style.fontSize = "22px";
        fontS5.style.fontSize = "22px";
        fs = 22;
    } else if (fs == 22) {
        fontS1.style.fontSize = "24px";
        fontS2.style.fontSize = "24px";
        fontS3.style.fontSize = "24px";
        fontS4.style.fontSize = "24px";
        fontS5.style.fontSize = "24px";
        fs = 24;
    }
}

function decFontSize() {
    var fontS1 = document.getElementById("font1")
    var fontS2 = document.getElementById("font2")
    var fontS3 = document.getElementById("font3")
    var fontS4 = document.getElementById("font4")
    var fontS5 = document.getElementById("font5")
    if (fs == 24) {
        fontS1.style.fontSize = "22px";
        fontS2.style.fontSize = "22px";
        fontS3.style.fontSize = "22px";
        fontS4.style.fontSize = "22px";
        fontS5.style.fontSize = "22px";
        fs = 22
    } else if (fs == 22) {
        fontS1.style.fontSize = "20px";
        fontS2.style.fontSize = "20px";
        fontS3.style.fontSize = "20px";
        fontS4.style.fontSize = "20px";
        fontS5.style.fontSize = "20px";
        fs = 20;
    } else if (fs == 20) {
        fontS1.style.fontSize = "18px";
        fontS2.style.fontSize = "18px";
        fontS3.style.fontSize = "18px";
        fontS4.style.fontSize = "18px";
        fontS5.style.fontSize = "18px";
        fs = 18;
    } else if (fs == 18) {
        fontS1.style.fontSize = "16px";
        fontS2.style.fontSize = "16px";
        fontS3.style.fontSize = "16px";
        fontS4.style.fontSize = "16px";
        fontS5.style.fontSize = "16px";
        fs = 16;
    }
}