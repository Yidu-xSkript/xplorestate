import "chosen-js";
var config = {
    ".chosen-select": { disable_search_threshold: 10, width: "100%" },
    ".chosen-select-deselect": { allow_single_deselect: true, width: "100%" },
    ".chosen-select-no-single": {
        disable_search_threshold: 100,
        width: "100%",
    },
    ".chosen-select-no-single.no-search": {
        disable_search_threshold: 10,
        width: "100%",
    },
    ".chosen-select-no-results": { no_results_text: "Oops, nothing found!" },
    ".chosen-select-width": { width: "95%" },
};
export function onMount() {
    $(".select-input").each(function () {
        var thisContainer = $(this);
        var $this = $(this).children("select"),
            numberOfOptions = $this.children("option").length;
        $this.addClass("select-hidden");
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next("div.select-styled");
        $styledSelect.text($this.children("option").eq(0).text());
        var $list = $("<ul />", {
            class: "select-options",
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $("<li />", {
                text: $this.children("option").eq(i).text(),
                rel: $this.children("option").eq(i).val(),
            }).appendTo($list);
        }
        var $listItems = $list.children("li");
        $list.wrapInner('<div class="select-list-container"></div>');
        $(this)
            .children("input")
            .on("click", function (e) {
                $(".select-options").hide();
                e.stopPropagation();
                $styledSelect
                    .toggleClass("active")
                    .next("ul.select-options")
                    .toggle();
            });
        $(this)
            .children("input")
            .keypress(function () {
                $styledSelect.removeClass("active");
                $list.hide();
            });
        $listItems.on("click", function (e) {
            e.stopPropagation();
            $(thisContainer)
                .children("input")
                .val($(this).text())
                .removeClass("active");
            $this.val($(this).attr("rel"));
            $list.hide();
        });
        $(document).on("click", function (e) {
            $styledSelect.removeClass("active");
            $list.hide();
        });
        var fieldUnit = $(this).children("input").attr("data-unit");
        $(this)
            .children("input")
            .before('<i class="data-unit">' + fieldUnit + "</i>");
    });
    for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
            $(selector).chosen(config[selector]);
        }
    }
}
