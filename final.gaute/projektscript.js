$(function () {
    $('#incFont').click(function () {
        curSize = parseInt($('main').css('font-size')) + 2; 
  if (curSize <= 24)
            $('main').css('font-size', curSize);
    });
    $('#decFont').click(function () {
        curSize = parseInt($('main').css('font-size')) - 2;
        if (curSize >= 16)
            $('main').css('font-size', curSize);
    });
});

var counter = 0;
$(function () {
    $("#color-blindness-button").click(function () {
        if (counter % 2 == 0) {
            $("div").addClass(" text-dark");
            $("a").addClass("text-white");
            $("h1").addClass("text-warning");
            $("h4").addClass("text-warning");
            $("button").addClass("bg-warning");
            $("nav").addClass("bg-dark");
            $("i.invert_colors").addClass("d-none");
            $("i.invert_colors_off").removeClass("d-none");
            $("body").addClass("bg-dark");
            $("p.footer").addClass("text-white");
        }
        else {
            $("div").removeClass(" text-light");
            $("i.invert_colors").removeClass("d-none");
            $("i.invert_colors_off").addClass("d-none");
            $("nav").removeClass("bg-dark");
            $("button").removeClass("bg-warning");
            $("h1").removeClass("text-warning");
            $("h4").removeClass("text-warning");
            $("body").removeClass("bg-dark");
            $("p.footer").removeClass("text-white");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button1").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext1").removeClass("d-none");
            $("span.dotting1").addClass("d-none");
            $("span.more1").addClass("d-none");
            $("span.less1").removeClass("d-none");
        }
        else {
            $("span.dtext1").addClass("d-none");
            $("span.dotting1").removeClass("d-none");
            $("span.less1").addClass("d-none");
            $("span.more1").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button2").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext2").removeClass("d-none");
            $("span.dotting2").addClass("d-none");
            $("span.more2").addClass("d-none");
            $("span.less2").removeClass("d-none");
        }
        else {
            $("span.dtext2").addClass("d-none");
            $("span.dotting2").removeClass("d-none");
            $("span.less2").addClass("d-none");
            $("span.more2").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button3").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext3").removeClass("d-none");
            $("span.dotting3").addClass("d-none");
            $("span.more3").addClass("d-none");
            $("span.less3").removeClass("d-none");
        }
        else {
            $("span.dtext3").addClass("d-none");
            $("span.dotting3").removeClass("d-none");
            $("span.less3").addClass("d-none");
            $("span.more3").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

var counter = 0;
$(function () {
    $("#button4").click(function () {
        if (counter % 2 == 0) {
            $("span.dtext4").removeClass("d-none");
            $("span.dotting4").addClass("d-none");
            $("span.more4").addClass("d-none");
            $("span.less4").removeClass("d-none");
        }
        else {
            $("span.dtext4").addClass("d-none");
            $("span.dotting4").removeClass("d-none");
            $("span.less4").addClass("d-none");
            $("span.more4").removeClass("d-none");
        }
        counter += 1;
        return counter;
    });
});

window.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    if (document.documentElement.scrollTop > 100) { 
        $("button.scroll-to-top").removeClass("d-none");
        $("scroll-to-top").addClass("d-inline");
    } else {
        $("button.scroll-to-top").removeClass("d-inline");
        $("button.scroll-to-top").addClass("d-none");
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0;
}

