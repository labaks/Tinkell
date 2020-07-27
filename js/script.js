var openDialog = function (dialogName) {
    $("#" + dialogName).show();
}

var closeDialog = function (dialogName) {
    $("#" + dialogName).hide();
}

var openLogoMenu = function () {
    if (!$(".header .logo").hasClass("droppedMenu")) {
        $(".logoBlock_menu").show();
        $(".header .logo").addClass("droppedMenu");
    } else {
        $(".logoBlock_menu").hide();
        $(".header .logo").removeClass("droppedMenu");
    }
}

jQuery(function ($) {
    $(document).mouseup(function (e) {
        var logoMenu = $(".header .logo");
        var dialogBackground = $(".dialogBackground");
        if (!logoMenu.is(e.target) && logoMenu.has(e.target).length === 0) {
            $(".logoBlock_menu").hide();
            $(".header .logo").removeClass("droppedMenu");
        }
        if (dialogBackground.is(e.target)) {
            dialogBackground.hide();
        }
    })
})

var setActiveSearchButton = function (e) {
    $(e).siblings().removeClass('active');
    $(e).addClass('active');
}

var setActivePaginationPage = function (e) {
    var target = $(e).parent();
    target.siblings().removeClass('activePage');
    target.addClass('activePage');
}

var admin = true;
var signedIn = true;

$(document).ready(function () {
    if (signedIn) {
        $('.notSignedIn').hide();
        if (admin) {
            $('.notAdmin').hide();
        } else {
            $('.ifAdmin').hide();
        }
    } else {
        $('.signedIn').hide();
        $('.ifAdmin').hide();
    }
})
