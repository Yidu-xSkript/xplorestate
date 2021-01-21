require("./bootstrap.js");
import { InertiaProgress } from "@inertiajs/progress/src";
import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

const el = document.getElementById("app");

InertiaProgress.init({
    delay: 250,
    color: "#006aff",
    includeCSS: true,
    showSpinner: false,
});

let app = createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) =>
                import(`./Pages/${name}`).then((module) => module.default),
        }),
});
app.use(plugin);
app.mixin({ methods: { route } });
app.config.globalProperties.$triggerMoreOptions = () => {
    $(".more-search-options, .more-search-options-trigger").toggleClass(
        "active"
    );
    $(".more-search-options.relative").animate(
        { height: "toggle", opacity: "toggle" },
        300
    );
};
app.config.globalProperties.$registerToolTip = (element) => {
    $(element).each(function () {
        var tipContent = $(this).attr("data-tip-content");
        $(this).append('<div class="tip-content">' + tipContent + "</div>");
    });
};
app.config.globalProperties.$toggleLike = (element) => {
    $(element).on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass("liked");
        $(this).children(".like-icon").toggleClass("liked");
    });
};
app.config.globalProperties.$addToCompareStyle = () => {
    $(".compare-slide-menu").addClass("active");
};
app.config.globalProperties.$inlineCSS = (element) => {
    $(element).each(function () {
        var attrImageBG = $(this).attr("data-background-image");
        var attrColorBG = $(this).attr("data-background-color");
        if (attrImageBG !== undefined) {
            $(this).css("background-image", "url(" + attrImageBG + ")");
        }
        if (attrColorBG !== undefined) {
            $(this).css("background", "" + attrColorBG + "");
        }
    });
};
app.config.globalProperties.$accordion = () => {
    var $accor = $(".accordion");

    $accor.each(function () {
        $(this).toggleClass("ui-accordion ui-widget ui-helper-reset");
        $(this)
            .find("h3")
            .addClass(
                "ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"
            );
        $(this)
            .find("div")
            .addClass(
                "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
            );
        $(this).find("div").hide();
    });

    var $trigger = $accor.find("h3");

    $trigger.on("click", function (e) {
        var location = $(this).parent();

        if ($(this).next().is(":hidden")) {
            var $triggerloc = $("h3", location);
            $triggerloc
                .removeClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top"
                )
                .next()
                .slideUp(300);
            $triggerloc.find("span").removeClass("ui-accordion-icon-active");
            $(this).find("span").addClass("ui-accordion-icon-active");
            $(this)
                .addClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top"
                )
                .next()
                .slideDown(300);
        } else if ($(this).is(":visible")) {
            var $triggerloc = $("h3", location);
            $triggerloc
                .removeClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top"
                )
                .next()
                .slideUp(300);
            $triggerloc.find("span").removeClass("ui-accordion-icon-active");
        }
        e.preventDefault();
    });
};
app.config.globalProperties.$tabs = () => {
    var $tabsNav = $(".tabs-nav"),
        $tabsNavLis = $tabsNav.children("li");
    $tabsNav.each(function () {
        console.log("something here");
        var $this = $(this);
        $this
            .next()
            .children(".tab-content")
            .stop(true, true)
            .hide()
            .first()
            .show();
        $this.children("li").first().addClass("active").stop(true, true).show();
    });
    $tabsNavLis.on("click", function (e) {
        var $this = $(this);
        $this.siblings().removeClass("active").end().addClass("active");
        $this
            .parent()
            .next()
            .children(".tab-content")
            .stop(true, true)
            .hide()
            .siblings($this.find("a").attr("href"))
            .fadeIn();
        e.preventDefault();
    });
    var hash = window.location.hash;
    var anchor = $('.tabs-nav a[href="' + hash + '"]');
    if (anchor.length === 0) {
        $(".tabs-nav li:first").addClass("active").show();
        $(".tab-content:first").show();
    } else {
        console.log(anchor);
        anchor.parent("li").click();
    }
};
app.config.globalProperties.$layoutInit = (resizeObjects) => {
    var winWidth = $(window).width();
    if (winWidth < 768) {
        if ($(this.listingsContainer).is(".list-layout")) {
            $(".listing-item").each(function () {
                $(this).find(resizeObjects).css("height", "auto");
            });
        }
    }
    if (winWidth < 1366) {
        if ($(".fs-listings").is(".list-layout")) {
            $(".listing-item").each(function () {
                $(this).find(resizeObjects).css("height", "auto");
            });
        }
    }
};
app.config.globalProperties.$ezecute = (listingsContainer, gridClear) => {
    if ($(listingsContainer).is(".list-layout")) {
        $(".layout-switcher a.grid").removeClass("active");
        $(".layout-switcher a.list").addClass("active");
    }

    if ($(listingsContainer).is(".grid-layout")) {
        $(".layout-switcher a.grid").addClass("active");
        $(".layout-switcher a.list").removeClass("active");
        gridClear;
    }
};
app.config.globalProperties.$gridClear = (gridColumns, listingsContainer) => {
    $(listingsContainer).find(".clearfix").remove();
    $(
        ".listings-container > .listing-item:nth-child(" + gridColumns + "n)"
    ).after("<div class='clearfix'></div>");
};
app.config.globalProperties.$listLayout = (
    listingsContainer,
    resizeObjects
) => {
    if ($(".layout-switcher a").is(".list.active")) {
        $(listingsContainer).each(function () {
            $(this).removeClass("grid-layout");
            $(this).addClass("list-layout");
        });
        $(".listing-item").each(function () {
            var listingContent = $(this).find(".listing-content").height();
            $(this)
                .find(resizeObjects)
                .css("height", "" + listingContent + "");
        });
    }
};
app.config.globalProperties.$gridLayout = (
    listingsContainer,
    resizeObjects
) => {
    if ($(".layout-switcher a").is(".grid.active")) {
        $(listingsContainer).each(function () {
            $(this).removeClass("list-layout");
            $(this).addClass("grid-layout");
        });
        $(".listing-item").each(function () {
            $(this).find(resizeObjects).css("height", "auto");
        });
    }
};
app.mount(el);
