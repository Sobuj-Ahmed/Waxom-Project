let sliders = document.querySelectorAll("._swiper");
if (sliders) {
    for (let e = 0; e < sliders.length; e++) {
        let t = sliders[e];
        if (!t.classList.contains("swiper-bild")) {
            let e = t.children;
            if (e)
                for (let t = 0; t < e.length; t++) {
                    e[t].classList.add("swiper-slide")
                }
            let o = t.innerHTML
                , l = document.createElement("div");
            if (l.classList.add("swiper-wrapper"),
                l.innerHTML = o,
                t.innerHTML = "",
                t.appendChild(l),
                t.classList.add("swiper-bild"),
                t.classList.contains("_swiper_scroll")) {
                let e = document.createElement("div");
                e.classList.add("swiper-scrollbar"),
                    t.appendChild(e)
            }
        }
        t.classList.contains("_gallery")
    }
    sliders_bild_callback()
}
function sliders_bild_callback(e) {}
let sliderScrollItems = document.querySelectorAll("._swiper_scroll");
if (sliderScrollItems.length > 0)
    for (let e = 0; e < sliderScrollItems.length; e++) {
        const t = sliderScrollItems[e]
            , o = t.querySelector(".swiper-scrollbar");
        new Swiper(t,{
            observer: !0,
            observeParents: !0,
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: !0,
            scrollbar: {
                el: o,
                draggable: !0,
                snapOnRelease: !1
            },
            mousewheel: {
                releaseOnEdges: !0
            }
        }).scrollbar.updateSize()
    }
function sliders_bild_callback(e) {}
let sliderAbout = new Swiper(".intro-slide__container",{
    effect: "fade",
    autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
    },
    observer: !0,
    observeParents: !0,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: !0,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    navigation: {
        nextEl: ".intro-slide__button-next",
        prevEl: ".intro-slide__button-prev"
    },
    on: {
        lazyImageReady: function() {
            ibg()
        }
    }
})
    , sliderPosts = new Swiper(".recent-posts__items",{
    observer: !0,
    observeParents: !0,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: !0,
    speed: 800,
    navigation: {
        nextEl: ".recent-posts__prev.icon-right",
        prevEl: ".recent-posts__next.icon-left"
    },
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            autoHeight: !0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1268: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    on: {
        lazyImageReady: function() {
            ibg()
        }
    }
});
var ua = window.navigator.userAgent
    , msie = ua.indexOf("MSIE ")
    , isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    }
};
function isIE() {
    return (ua = navigator.userAgent).indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1
}
function testWebP(e) {
    var t = new Image;
    t.onload = t.onerror = function() {
        e(2 == t.height)
    }
        ,
        t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}
function ibg() {
    if (isIE()) {
        let t = document.querySelectorAll("._ibg");
        for (var e = 0; e < t.length; e++)
            t[e].querySelector("img") && null != t[e].querySelector("img").getAttribute("src") && (t[e].style.backgroundImage = "url(" + t[e].querySelector("img").getAttribute("src") + ")")
    }
}
isIE() && document.querySelector("html").classList.add("ie"),
isMobile.any() && document.querySelector("html").classList.add("_touch"),
    testWebP((function(e) {
            !0 === e ? document.querySelector("html").classList.add("_webp") : document.querySelector("html").classList.add("_no-webp")
        }
    )),
    ibg(),
    window.addEventListener("load", (function() {
            document.querySelector(".wrapper") && setTimeout((function() {
                    document.querySelector(".wrapper").classList.add("_loaded")
                }
            ), 0)
        }
    ));
let unlock = !0;
if (location.hash) {
    const e = location.hash.replace("#", "");
    document.querySelector(".popup_" + e) ? popup_open(e) : document.querySelector("div." + e) && _goto(document.querySelector("." + e), 500, "")
}
let iconMenu = document.querySelector(".icon-menu");
if (null != iconMenu) {
    let e = 500
        , t = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (function(o) {
            unlock && (body_lock(e),
                iconMenu.classList.toggle("_active"),
                t.classList.toggle("_active"))
        }
    ))
}
function menu_close() {
    let e = document.querySelector(".icon-menu")
        , t = document.querySelector(".menu__body");
    e.classList.remove("_active"),
        t.classList.remove("_active")
}
function body_lock(e) {
    document.querySelector("body").classList.contains("_lock") ? body_lock_remove(e) : body_lock_add(e)
}
function body_lock_remove(e) {
    let t = document.querySelector("body");
    if (unlock) {
        let o = document.querySelectorAll("._lp");
        setTimeout(()=>{
                for (let e = 0; e < o.length; e++) {
                    o[e].style.paddingRight = "0px"
                }
                t.style.paddingRight = "0px",
                    t.classList.remove("_lock")
            }
            , e),
            unlock = !1,
            setTimeout((function() {
                    unlock = !0
                }
            ), e)
    }
}
function body_lock_add(e) {
    let t = document.querySelector("body");
    if (unlock) {
        let o = document.querySelectorAll("._lp");
        for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
        }
        t.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px",
            t.classList.add("_lock"),
            unlock = !1,
            setTimeout((function() {
                    unlock = !0
                }
            ), e)
    }
}
let title = document.querySelectorAll("._letter-animation");
if (title)
    for (let e = 0; e < title.length; e++) {
        let t = title[e]
            , o = t.innerHTML.replace("  ", " ").split(" ")
            , l = "";
        for (let e = 0; e < o.length; e++) {
            let n = o[e]
                , i = n.length;
            l += "<p>";
            for (let e = 0; e < i; e++) {
                let t = n.substr(e, 1);
                " " == t && (t = "&nbsp;"),
                    l = l + "<span>" + t + "</span>"
            }
            t.innerHTML = l,
                l += "&nbsp;</p>"
        }
    }
let tabs = document.querySelectorAll("._tabs");
for (let e = 0; e < tabs.length; e++) {
    let t = tabs[e]
        , o = t.querySelectorAll("._tabs-item")
        , l = t.querySelectorAll("._tabs-block");
    for (let e = 0; e < o.length; e++) {
        let t = o[e];
        t.addEventListener("click", (function(n) {
                for (let e = 0; e < o.length; e++) {
                    o[e].classList.remove("_active"),
                        l[e].classList.remove("_active")
                }
                t.classList.add("_active"),
                    l[e].classList.add("_active"),
                    n.preventDefault()
            }
        ))
    }
}
let spollers = document.querySelectorAll("._spoller")
    , spollersGo = !0;
if (spollers.length > 0) {
    function spollerCLick(e) {
        const t = e.target;
        if (spollersGo) {
            if (spollersGo = !1,
                t.closest("._spollers").classList.contains("_one")) {
                let e = t.closest("._spollers").querySelectorAll("._spoller");
                for (let o = 0; o < e.length; o++) {
                    let l = e[o];
                    l != t && (l.classList.remove("_active"),
                        _slideUp(l.nextElementSibling))
                }
            }
            t.classList.toggle("_active"),
                _slideToggle(t.nextElementSibling),
                setTimeout((function() {
                        spollersGo = !0
                    }
                ), 500)
        }
    }
    function spollersInit() {
        for (let e = 0; e < spollers.length; e++) {
            const t = spollers[e];
            let o = t.getAttribute("data-max");
            o && window.innerWidth > o ? t.classList.contains("_init") && (t.classList.remove("_active"),
                t.classList.remove("_init"),
                t.nextElementSibling.style.cssText = "",
                t.removeEventListener("click", spollerCLick)) : t.classList.contains("_init") || (t.classList.add("_init"),
                t.addEventListener("click", spollerCLick))
        }
    }
    function spollersShowActive() {
        for (let e = 0; e < spollers.length; e++) {
            const t = spollers[e];
            t.classList.contains("_active") && _slideToggle(t.nextElementSibling)
        }
    }
    window.addEventListener("resize", spollersInit),
        setTimeout((function() {
                spollersShowActive(),
                    spollersInit()
            }
        ), 0)
}
function search_in_list(e) {
    let t = e.parentNode.querySelector("ul").querySelectorAll("li")
        , o = e.value.toUpperCase();
    for (i = 0; i < t.length; i++) {
        let e = t[i]
            , l = e;
        txtValue = l.textContent || l.innerText,
            txtValue.toUpperCase().indexOf(o) > -1 ? e.style.display = "" : e.style.display = "none"
    }
}
function digi(e) {
    return e.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
}
function digi_animate(e) {
    if (e.length > 0)
        for (let t = 0; t < e.length; t++) {
            const o = e[t]
                , l = parseInt(o.innerHTML.replace(" ", ""));
            o.classList.contains("_done") || digi_animate_value(o, 0, l, 1500)
        }
}
function digi_animate_value(e, t, o, l) {
    var n = e
        , i = o - t
        , s = Math.abs(Math.floor(l / i));
    s = Math.max(s, 50);
    var r, c = (new Date).getTime() + l;
    function a() {
        var e = (new Date).getTime()
            , t = Math.max((c - e) / l, 0)
            , s = Math.round(o - t * i);
        n.innerHTML = digi(s),
        s == o && clearInterval(r)
    }
    r = setInterval(a, s),
        a(),
        e.classList.add("_done")
}
let popup_link = document.querySelectorAll("._popup-link")
    , popups = document.querySelectorAll(".popup");
for (let e = 0; e < popup_link.length; e++) {
    const t = popup_link[e];
    t.addEventListener("click", (function(e) {
            if (unlock) {
                popup_open(t.getAttribute("href").replace("#", ""), t.getAttribute("data-video"))
            }
            e.preventDefault()
        }
    ))
}
for (let e = 0; e < popups.length; e++) {
    popups[e].addEventListener("click", (function(e) {
            e.target.closest(".popup__body") || popup_close(e.target.closest(".popup"))
        }
    ))
}
function popup_open(e, t="") {
    document.querySelectorAll(".popup._active").length > 0 && popup_close("", !1);
    let o = document.querySelector(".popup_" + e);
    if (o && unlock) {
        if ("" != t && null != t) {
            document.querySelector(".popup_video").querySelector(".popup__video").innerHTML = '<iframe src="https://www.youtube.com/embed/' + t + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        }
        document.querySelector(".menu__body._active") || body_lock_add(500),
            o.classList.add("_active"),
            history.pushState("", "", "#" + e)
    }
}
function popup_close(e, t=!0) {
    if (unlock) {
        if (e) {
            let t = e.querySelector(".popup__video");
            t && (t.innerHTML = ""),
                e.classList.remove("_active")
        } else
            for (let e = 0; e < popups.length; e++) {
                const t = popups[e];
                let o = t.querySelector(".popup__video");
                o && (o.innerHTML = ""),
                    t.classList.remove("_active")
            }
        !document.querySelector(".menu__body._active") && t && body_lock_remove(500),
            history.pushState("", "", window.location.href.split("#")[0])
    }
}
let popup_close_icon = document.querySelectorAll(".popup__close,._popup-close");
if (popup_close_icon)
    for (let e = 0; e < popup_close_icon.length; e++) {
        const t = popup_close_icon[e];
        t.addEventListener("click", (function() {
                popup_close(t.closest(".popup"))
            }
        ))
    }
document.addEventListener("keydown", (function(e) {
        "Escape" === e.code && popup_close()
    }
));
let _slideUp = (e,t=500)=>{
        e.style.transitionProperty = "height, margin, padding",
            e.style.transitionDuration = t + "ms",
            e.style.height = e.offsetHeight + "px",
            e.offsetHeight,
            e.style.overflow = "hidden",
            e.style.height = 0,
            e.style.paddingTop = 0,
            e.style.paddingBottom = 0,
            e.style.marginTop = 0,
            e.style.marginBottom = 0,
            window.setTimeout(()=>{
                    e.style.display = "none",
                        e.style.removeProperty("height"),
                        e.style.removeProperty("padding-top"),
                        e.style.removeProperty("padding-bottom"),
                        e.style.removeProperty("margin-top"),
                        e.style.removeProperty("margin-bottom"),
                        e.style.removeProperty("overflow"),
                        e.style.removeProperty("transition-duration"),
                        e.style.removeProperty("transition-property"),
                        e.classList.remove("_slide")
                }
                , t)
    }
    , _slideDown = (e,t=500)=>{
        e.style.removeProperty("display");
        let o = window.getComputedStyle(e).display;
        "none" === o && (o = "block"),
            e.style.display = o;
        let l = e.offsetHeight;
        e.style.overflow = "hidden",
            e.style.height = 0,
            e.style.paddingTop = 0,
            e.style.paddingBottom = 0,
            e.style.marginTop = 0,
            e.style.marginBottom = 0,
            e.offsetHeight,
            e.style.transitionProperty = "height, margin, padding",
            e.style.transitionDuration = t + "ms",
            e.style.height = l + "px",
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(()=>{
                    e.style.removeProperty("height"),
                        e.style.removeProperty("overflow"),
                        e.style.removeProperty("transition-duration"),
                        e.style.removeProperty("transition-property"),
                        e.classList.remove("_slide")
                }
                , t)
    }
    , _slideToggle = (e,t=500)=>{
        if (!e.classList.contains("_slide"))
            return e.classList.add("_slide"),
                "none" === window.getComputedStyle(e).display ? _slideDown(e, t) : _slideUp(e, t)
    }
;
function _wrap(e, t) {
    e.parentNode.insertBefore(t, e),
        t.appendChild(e)
}
function _removeClasses(e, t) {
    for (var o = 0; o < e.length; o++)
        e[o].classList.remove(t)
}
function _is_hidden(e) {
    return null === e.offsetParent
}
let moreBlocks = document.querySelectorAll("._more-block");
if (moreBlocks.length > 0) {
    let e = document.querySelector(".wrapper");
    for (let t = 0; t < moreBlocks.length; t++) {
        const o = moreBlocks[t];
        let l = o.querySelectorAll("._more-item");
        if (l.length > 0) {
            let t, n = o.querySelector("._more-link"), i = o.querySelector("._more-content"), s = i.getAttribute("data-view");
            function setSize(o) {
                let n, r = 0, c = 0;
                for (let e = 0; e < l.length; e++)
                    e < s && (r += l[e].offsetHeight),
                        c += l[e].offsetHeight;
                n = "start" === o ? c : r,
                    t = window.innerWidth - e.offsetWidth,
                    i.style.height = n + "px"
            }
            function updateSize() {
                let o = window.innerWidth - e.offsetWidth;
                (0 === t && o > 0 || t > 0 && 0 === o) && (n.classList.contains("_active") ? setSize("start") : setSize())
            }
            "0s" === getComputedStyle(i).getPropertyValue("transition-duration") && (i.style.cssText = "transition-duration: 1ms"),
                n.addEventListener("click", (function(e) {
                        n.classList.contains("_active") ? setSize() : setSize("start"),
                            n.classList.toggle("_active"),
                            e.preventDefault()
                    }
                )),
                i.addEventListener("transitionend", updateSize, !1),
                window.addEventListener("resize", (function(e) {
                        n.classList.contains("_active") ? setSize("start") : setSize()
                    }
                )),
                setSize()
        }
    }
}
function animate({timing: e, draw: t, duration: o}) {
    let l = performance.now();
    requestAnimationFrame((function n(i) {
            let s = (i - l) / o;
            s > 1 && (s = 1);
            let r = e(s);
            t(r),
            s < 1 && requestAnimationFrame(n)
        }
    ))
}
function makeEaseOut(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}
function makeEaseInOut(e) {
    return function(t) {
        return t < .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
    }
}
function quad(e) {
    return Math.pow(e, 2)
}
function circ(e) {
    return 1 - Math.sin(Math.acos(e))
}
Element.prototype.closest || (Element.prototype.closest = function(e) {
        for (var t = this; t; ) {
            if (t.matches(e))
                return t;
            t = t.parentElement
        }
        return null
    }
),
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
let header = document.getElementById("#header")
    , introH = document.getElementById("#intro");
function checkedScroll() {
    introH && (window.pageYOffset >= introH.clientHeight ? header.classList.add("fixed") : header.classList.remove("fixed"))
}
window.addEventListener("scroll", checkedScroll);
let currentScroll, scr_body = document.querySelector("body"), scr_blocks = document.querySelectorAll("._scr-sector"), scr_items = document.querySelectorAll("._scr-item"), scr_fix_block = document.querySelectorAll("._side-wrapper"), scr_min_height = 750, scrolling = !0, scrolling_full = !0, scrollDirection = 0;
function scroll_scroll() {
    let e = currentScroll = pageYOffset
        , t = document.querySelector("header.header");
    if (null !== t && (e > 10 ? t.classList.add("_scroll") : t.classList.remove("_scroll")),
    scr_blocks.length > 0)
        for (let e = 0; e < scr_blocks.length; e++) {
            let t = scr_blocks[e]
                , o = offset(t).top
                , l = t.offsetHeight;
            pageYOffset > o - window.innerHeight / 1.5 && pageYOffset < o + l - window.innerHeight / 5 ? t.classList.add("_scr-sector_active") : t.classList.contains("_scr-sector_active") && t.classList.remove("_scr-sector_active"),
                pageYOffset > o - window.innerHeight / 2 && pageYOffset < o + l - window.innerHeight / 5 ? t.classList.contains("_scr-sector_current") || t.classList.add("_scr-sector_current") : t.classList.contains("_scr-sector_current") && t.classList.remove("_scr-sector_current")
        }
    if (scr_items.length > 0)
        for (let t = 0; t < scr_items.length; t++) {
            let o = scr_items[t]
                , l = offset(o).top
                , n = o.offsetHeight
                , i = window.innerHeight - (window.innerHeight - n / 3);
            window.innerHeight > n && (i = window.innerHeight - n / 3),
                e > l - i && e < l + n ? (o.classList.add("_active"),
                    scroll_load_item(o)) : o.classList.remove("_active"),
            e > l - window.innerHeight && o.querySelectorAll("._lazy").length > 0 && scroll_lazy(o)
        }
    scr_fix_block.length > 0 && fix_block(scr_fix_block, e);
    let o = document.querySelector("._custom-scroll__line");
    if (o) {
        let e = window.innerHeight
            , t = document.querySelector(".wrapper").offsetHeight
            , l = pageYOffset / (t - e) * 100
            , n = o.offsetHeight;
        o.style.transform = "translateY(" + (e - n) / 100 * l + "px)"
    }
    scrollDirection = e <= 0 ? 0 : e
}
function scroll_lazy(e) {
    let t = e.querySelectorAll("*[data-src]");
    if (t.length > 0)
        for (let e = 0; e < t.length; e++) {
            const o = t[e];
            o.classList.contains("_loaded") || (o.setAttribute("src", o.getAttribute("data-src")),
                o.classList.add("_loaded"))
        }
    let o = e.querySelectorAll("*[data-srcset]");
    if (o.length > 0)
        for (let e = 0; e < o.length; e++) {
            const t = o[e];
            t.classList.contains("_loaded") || (t.setAttribute("srcset", t.getAttribute("data-srcset")),
                t.classList.add("_loaded"))
        }
}
function scroll_load_item(e) {
    if (e.classList.contains("_load-map") && !e.classList.contains("_loaded-map")) {
        document.getElementById("map") && (e.classList.add("_loaded-map"),
            map())
    }
}
function scrParallax(e, t, o) {
    let l = e.querySelectorAll("._prlx-item");
    if (l.length > 0)
        for (let e = 0; e < l.length; e++) {
            const n = l[e];
            const i = o / 100 * t / (n.dataset.prlx ? n.dataset.prlx : 3) * -1;
            n.style.cssText = `transform: translateY(${i}px);`
        }
}
if (window.addEventListener("scroll", scroll_scroll),
    setTimeout((function() {
            scroll_scroll()
        }
    ), 100),
scr_blocks.length > 0 && !isMobile.any()) {
    disableScroll(),
        window.addEventListener("wheel", full_scroll);
    let e = document.querySelectorAll("._swiper_scroll");
    if (e.length > 0)
        for (let t = 0; t < e.length; t++) {
            const o = e[t];
            o.addEventListener("mouseenter", (function(e) {
                    window.removeEventListener("wheel", full_scroll)
                }
            )),
                o.addEventListener("mouseleave", (function(e) {
                        window.addEventListener("wheel", full_scroll)
                    }
                ))
        }
}
function getPrevBlockPos(e) {
    let t = window.innerHeight
        , o = e.offsetHeight
        , l = offset(e).top;
    return o >= t && (l += o - t),
        l
}
function full_scroll(e) {
    let t = window.innerHeight;
    if (t >= scr_min_height)
        if (scrolling_full) {
            let o = document.querySelector("._scr-sector._scr-sector_current")
                , l = offset(o).top
                , n = o.offsetHeight
                , i = o.nextElementSibling
                , s = o.previousElementSibling;
            if (40 == e.keyCode || 34 == e.keyCode || e.deltaX > 0 || e.deltaY < 0)
                n <= t ? s && full_scroll_to_sector(getPrevBlockPos(s)) : (enableScroll(),
                currentScroll <= l && s && full_scroll_to_sector(getPrevBlockPos(s)));
            else if (38 == e.keyCode || 33 == e.keyCode || e.deltaX < 0 || e.deltaY > 0)
                if (n <= t) {
                    if (i) {
                        full_scroll_to_sector(offset(i).top)
                    }
                } else if (enableScroll(),
                    i) {
                    let e = offset(i).top;
                    currentScroll >= e - t && full_scroll_to_sector(e)
                }
        } else
            disableScroll();
    else
        enableScroll()
}
function full_scroll_to_sector(e) {
    disableScroll(),
        scrolling_full = !1,
        _goto(e, 800);
    let t = 500;
    -1 != navigator.appVersion.indexOf("Mac") && (t = 1e3),
        setTimeout((function() {
                scrolling_full = !0
            }
        ), t)
}
function full_scroll_pagestart() {}
function full_scroll_pageend() {}
let link = document.querySelectorAll("._goto-block");
if (link) {
    let e = [];
    for (let t = 0; t < link.length; t++) {
        let o = link[t]
            , l = o.getAttribute("href").replace("#", "");
        "" == l || ~e.indexOf(l) || e.push(l),
            o.addEventListener("click", (function(e) {
                    document.querySelector(".menu__body._active") && (menu_close(),
                        body_lock_remove(500));
                    let t = o.getAttribute("href").replace("#", "");
                    _goto(document.querySelector("." + t), 300),
                        e.preventDefault()
                }
            ))
    }
    window.addEventListener("scroll", (function(t) {
            let o = document.querySelectorAll("._goto-block._active");
            if (o)
                for (let e = 0; e < o.length; e++) {
                    o[e].classList.remove("_active")
                }
            for (let t = 0; t < e.length; t++) {
                let o = e[t]
                    , l = document.querySelector("." + o);
                if (l) {
                    let e = offset(l).top
                        , t = l.offsetHeight;
                    if (pageYOffset > e - window.innerHeight / 3 && pageYOffset < e + t - window.innerHeight / 3) {
                        let e = document.querySelectorAll('._goto-block[href="#' + o + '"]');
                        for (let t = 0; t < e.length; t++) {
                            e[t].classList.add("_active")
                        }
                    }
                }
            }
        }
    ))
}
let goto_links = document.querySelectorAll("._goto");
if (goto_links)
    for (let e = 0; e < goto_links.length; e++) {
        let t = goto_links[e];
        t.addEventListener("click", (function(e) {
                let o = t.getAttribute("href").replace("#", "");
                _goto(document.querySelector("." + o), 300),
                    e.preventDefault()
            }
        ))
    }
function _goto(e, t, o=0) {
    let l = {
        speedAsDuration: !0,
        speed: t,
        header: "",
        offset: o,
        easing: "easeOutQuad"
    };
    (new SmoothScroll).animateScroll(e, "", l)
}
function offset(e) {
    var t = e.getBoundingClientRect()
        , o = window.pageXOffset || document.documentElement.scrollLeft
        , l = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: t.top + l,
        left: t.left + o
    }
}
function disableScroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1),
        document.addEventListener("wheel", preventDefault, {
            passive: !1
        }),
        window.onwheel = preventDefault,
        window.onmousewheel = document.onmousewheel = preventDefault,
        window.ontouchmove = preventDefault,
        document.onkeydown = preventDefaultForScrollKeys
}
function enableScroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1),
        document.removeEventListener("wheel", preventDefault, {
            passive: !1
        }),
        window.onmousewheel = document.onmousewheel = null,
        window.onwheel = null,
        window.ontouchmove = null,
        document.onkeydown = null
}
function preventDefault(e) {
    (e = e || window.event).preventDefault && e.preventDefault(),
        e.returnValue = !1
}
function preventDefaultForScrollKeys(e) {}
function fix_block(e, t) {
    let o = parseInt(window.innerWidth)
        , l = parseInt(window.innerHeight)
        , n = parseInt(document.querySelector("header").offsetHeight) + 15;
    for (let s = 0; s < e.length; s++) {
        const r = e[s];
        let c = r.getAttribute("data-width");
        const a = r.querySelector("._side-block");
        c || (c = 0),
        o > c && (a.offsetHeight < l - (n + 30) ? (t > offset(r).top - (n + 15) ? a.style.cssText = "position:fixed;bottom:auto;top:" + n + "px;width:" + r.offsetWidth + "px;left:" + offset(r).left + "px;" : i(a),
        t > r.offsetHeight + offset(r).top - (a.offsetHeight + (n + 15)) && (r.style.cssText = "position:relative;",
            a.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%")) : i(a))
    }
    function i(e) {
        e.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;"
    }
}
function custom_scroll(e) {
    scr_body.style.overflow = "hidden";
    let t = window.innerHeight
        , o = document.querySelector("._custom-scroll__line")
        , l = document.querySelector(".wrapper").offsetHeight
        , n = Math.min(t, Math.round(t * (t / l)));
    if (l > t) {
        if (!o) {
            let e = document.createElement("div");
            o = document.createElement("div"),
                e.setAttribute("class", "_custom-scroll"),
                o.setAttribute("class", "_custom-scroll__line"),
                e.appendChild(o),
                scr_body.appendChild(e)
        }
        o.style.height = n + "px"
    }
}
isMobile.any();
let new_pos = pageYOffset;
function scroll_animate(e) {
    let t = window.innerHeight
        , o = document.querySelector(".wrapper").offsetHeight;
    pageYOffset;
    if (40 == e.keyCode || 34 == e.keyCode || e.deltaX > 0 || e.deltaY < 0 ? new_pos -= 100 : (38 == e.keyCode || 33 == e.keyCode || e.deltaX < 0 || e.deltaY > 0) && (new_pos += 100),
    new_pos > o - t && (new_pos = o - t),
    new_pos < 0 && (new_pos = 0),
        scrolling) {
        scrolling = !1,
            _goto(new_pos, 1e3);
        let e = 100;
        -1 != navigator.appVersion.indexOf("Mac") && (e *= 2),
            setTimeout((function() {
                    scrolling = !0,
                        _goto(new_pos, 1e3)
                }
            ), e)
    }
}
