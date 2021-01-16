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
app.config.globalProperties.$owlReload = () => {
    $(".listing-carousel").each(function () {
        $(this).data("owlCarousel").reload();
    });
};
app.mount(el);
