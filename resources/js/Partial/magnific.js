require("magnific-popup");
export function popMagnific({
    element = "",
    type = "image",
    delegate = "",
    fixedContentPos = "auto",
    fixedBgPos = "auto",
    overflowY = "auto",
    closeBtnInside = true,
    preloader = true,
    removalDelay = 0,
    mainClass = "",
    galleryEnabled = false,
    midClick = false,
    closeOnContentClick = false,
    image = {}
}) {
    $(element).magnificPopup({
        type: type,
        delegate: delegate,
        fixedContentPos: fixedContentPos,
        fixedBgPos: fixedBgPos,
        overflowY: overflowY,
        closeBtnInside: closeBtnInside,
        preloader: preloader,
        removalDelay: removalDelay,
        mainClass: mainClass,
        gallery: { enabled: galleryEnabled },
        midClick: midClick,
        closeOnContentClick: closeOnContentClick,
        image: image
    });
}
