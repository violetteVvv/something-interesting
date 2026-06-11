let I = {};
function R(e={}) {
    I = {
        animate: !0,
        allowClose: !0,
        overlayOpacity: .7,
        smoothScroll: !1,
        showProgress: !1,
        stagePadding: 10,
        stageRadius: 5,
        popoverOffset: 10,
        showButtons: ["next", "previous", "close"],
        disableButtons: [],
        overlayColor: "#000",
        ...e
    }
}
function l(e) {
    return e ? I[e] : I
}
function D(e, t, o, i) {
    return (e /= i / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t
}
function j(e) {
    if (!e || ne(e))
        return;
    const t = l("smoothScroll");
    e.scrollIntoView({
        behavior: !t || oe(e) ? "auto" : "smooth",
        inline: "center",
        block: "center"
    })
}
function oe(e) {
    if (!e || !e.parentElement)
        return;
    const t = e.parentElement;
    return t.scrollHeight > t.clientHeight
}
function ne(e) {
    const t = e.getBoundingClientRect();
    return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
}
let W = {};
function P(e, t) {
    W[e] = t
}
function a(e) {
    return e ? W[e] : W
}
function ie() {
    W = {}
}
let N = {};
function A(e, t) {
    N[e] = t
}
function E(e) {
    var t;
    (t = N[e]) == null || t.call(N)
}
function re() {
    N = {}
}
function se(e, t, o, i) {
    let n = a("__activeStagePosition");
    const d = n || o.getBoundingClientRect()
      , h = i.getBoundingClientRect()
      , f = D(e, d.x, h.x - d.x, t)
      , r = D(e, d.y, h.y - d.y, t)
      , u = D(e, d.width, h.width - d.width, t)
      , s = D(e, d.height, h.height - d.height, t);
    n = {
        x: f,
        y: r,
        width: u,
        height: s
    },
    V(n),
    P("__activeStagePosition", n)
}
function K(e) {
    if (!e)
        return;
    const t = e.getBoundingClientRect()
      , o = {
        x: t.x,
        y: t.y,
        width: t.width,
        height: t.height
    };
    P("__activeStagePosition", o),
    V(o)
}
function le() {
    const e = a("__activeStagePosition")
      , t = a("__overlaySvg");
    if (!e)
        return;
    if (!t) {
        console.warn("No stage svg found.");
        return
    }
    const o = window.innerWidth
      , i = window.innerHeight;
    t.setAttribute("viewBox", `0 0 ${o} ${i}`)
}
function de(e) {
    const t = ae(e);
    document.body.appendChild(t),
    Z(t, o => {
        o.target.tagName === "path" && E("overlayClick")
    }
    ),
    P("__overlaySvg", t)
}
function V(e) {
    const t = a("__overlaySvg");
    if (!t) {
        de(e);
        return
    }
    const o = t.firstElementChild;
    if ((o == null ? void 0 : o.tagName) !== "path")
        throw new Error("no path element found in stage svg");
    o.setAttribute("d", X(e))
}
function ae(e) {
    const t = window.innerWidth
      , o = window.innerHeight
      , i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    i.classList.add("driver-overlay", "driver-overlay-animated"),
    i.setAttribute("viewBox", `0 0 ${t} ${o}`),
    i.setAttribute("xmlSpace", "preserve"),
    i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"),
    i.setAttribute("version", "1.1"),
    i.setAttribute("preserveAspectRatio", "xMinYMin slice"),
    i.style.fillRule = "evenodd",
    i.style.clipRule = "evenodd",
    i.style.strokeLinejoin = "round",
    i.style.strokeMiterlimit = "2",
    i.style.zIndex = "10000",
    i.style.position = "fixed",
    i.style.top = "0",
    i.style.left = "0",
    i.style.width = "100%",
    i.style.height = "100%";
    const n = document.createElementNS("http://www.w3.org/2000/svg", "path");
    return n.setAttribute("d", X(e)),
    n.style.fill = l("overlayColor") || "rgb(0,0,0)",
    n.style.opacity = `${l("overlayOpacity")}`,
    n.style.pointerEvents = "auto",
    n.style.cursor = "auto",
    i.appendChild(n),
    i
}
function X(e) {
    const t = window.innerWidth
      , o = window.innerHeight
      , i = l("stagePadding") || 0
      , n = l("stageRadius") || 0
      , d = e.width + i * 2
      , h = e.height + i * 2
      , f = Math.min(n, d / 2, h / 2)
      , r = Math.floor(Math.max(f, 0))
      , u = e.x - i + r
      , s = e.y - i
      , v = d - r * 2
      , c = h - r * 2;
    return `M${t},0L0,0L0,${o}L${t},${o}L${t},0Z
    M${u},${s} h${v} a${r},${r} 0 0 1 ${r},${r} v${c} a${r},${r} 0 0 1 -${r},${r} h-${v} a${r},${r} 0 0 1 -${r},-${r} v-${c} a${r},${r} 0 0 1 ${r},-${r} z`
}
function pe() {
    const e = a("__overlaySvg");
    e && e.remove()
}
function ce() {
    const e = document.getElementById("driver-dummy-element");
    if (e)
        return e;
    let t = document.createElement("div");
    return t.id = "driver-dummy-element",
    t.style.width = "0",
    t.style.height = "0",
    t.style.pointerEvents = "none",
    t.style.opacity = "0",
    t.style.position = "fixed",
    t.style.top = "50%",
    t.style.left = "50%",
    document.body.appendChild(t),
    t
}
function z(e) {
    const {element: t} = e;
    let o = typeof t == "string" ? document.querySelector(t) : t;
    o || (o = ce()),
    ue(o, e)
}
function ve() {
    const e = a("activeElement")
      , t = a("activeStep");
    e && (K(e),
    le(),
    J(e, t))
}
function ue(e, t) {
    const o = Date.now()
      , i = a("activeStep")
      , n = a("activeElement") || e
      , d = !n || n === e
      , h = e.id === "driver-dummy-element"
      , f = n.id === "driver-dummy-element"
      , r = l("animate")
      , u = t.onHighlightStarted || l("onHighlightStarted")
      , s = (t == null ? void 0 : t.onHighlighted) || l("onHighlighted")
      , v = (i == null ? void 0 : i.onDeselected) || l("onDeselected")
      , c = l()
      , w = a();
    !d && v && v(f ? void 0 : n, i, {
        config: c,
        state: w
    }),
    u && u(h ? void 0 : e, t, {
        config: c,
        state: w
    });
    const g = !d && r;
    let m = !1;
    ge();
    const p = () => {
        if (a("__transitionCallback") !== p)
            return;
        const C = Date.now() - o
          , L = 400 - C <= 400 / 2;
        t.popover && L && !m && g && (q(e, t),
        m = !0),
        l("animate") && C < 400 ? se(C, 400, n, e) : (K(e),
        s && s(h ? void 0 : e, t, {
            config: l(),
            state: a()
        }),
        P("__transitionCallback", void 0),
        P("previousStep", i),
        P("previousElement", n),
        P("activeStep", t),
        P("activeElement", e)),
        window.requestAnimationFrame(p)
    }
    ;
    P("__transitionCallback", p),
    window.requestAnimationFrame(p),
    j(e),
    !g && t.popover && q(e, t),
    n.classList.remove("driver-active-element"),
    e.classList.add("driver-active-element")
}
function he() {
    var e;
    (e = document.getElementById("driver-dummy-element")) == null || e.remove(),
    document.querySelectorAll(".driver-active-element").forEach(t => {
        t.classList.remove("driver-active-element")
    }
    )
}
function H() {
    const e = a("__resizeTimeout");
    e && window.cancelAnimationFrame(e),
    P("__resizeTimeout", window.requestAnimationFrame(ve))
}
function Y(e) {
    l("allowKeyboardControl"),
    e.key === "Escape" ? E("escapePress") : e.key === "ArrowRight" ? E("arrowRightPress") : e.key === "ArrowLeft" && E("arrowLeftPress")
}
function Z(e, t, o) {
    const i = (n, d) => {
        const h = n.target;
        e.contains(h) && ((!o || o(h)) && (n.preventDefault(),
        n.stopPropagation(),
        n.stopImmediatePropagation()),
        d == null || d(n))
    }
    ;
    document.addEventListener("pointerdown", i, !0),
    document.addEventListener("mousedown", i, !0),
    document.addEventListener("pointerup", i, !0),
    document.addEventListener("mouseup", i, !0),
    document.addEventListener("click", n => {
        i(n, t)
    }
    , !0)
}
function we() {
    window.addEventListener("keyup", Y, !1),
    window.addEventListener("resize", H),
    window.addEventListener("scroll", H)
}
function me() {
    window.removeEventListener("keyup", Y),
    window.removeEventListener("resize", H),
    window.removeEventListener("scroll", H)
}
function ge() {
    const e = a("popover");
    e && (e.wrapper.style.display = "none")
}
function q(e, t) {
    var o, i;
    let n = a("popover");
    n && document.body.removeChild(n.wrapper),
    n = ye(),
    document.body.appendChild(n.wrapper);
    const {title: d, description: h, showButtons: f, disableButtons: r, showProgress: u, nextBtnText: s=l("nextBtnText") || "Next &rarr;", prevBtnText: v=l("prevBtnText") || "&larr; Previous", progressText: c=l("progressText") || "{current} of {total}"} = t.popover || {};
    n.nextButton.innerHTML = s,
    n.previousButton.innerHTML = v,
    n.progress.innerHTML = c,
    d ? (n.title.innerText = d,
    n.title.style.display = "block") : n.title.style.display = "none",
    h ? (n.description.innerHTML = h,
    n.description.style.display = "block") : n.description.style.display = "none";
    const w = f || l("showButtons")
      , g = u || l("showProgress") || !1
      , m = (w == null ? void 0 : w.includes("next")) || (w == null ? void 0 : w.includes("previous")) || g;
    n.closeButton.style.display = w.includes("close") ? "block" : "none",
    m ? (n.footer.style.display = "flex",
    n.progress.style.display = g ? "block" : "none",
    n.nextButton.style.display = w.includes("next") ? "block" : "none",
    n.previousButton.style.display = w.includes("previous") ? "block" : "none") : n.footer.style.display = "none";
    const p = r || l("disableButtons") || [];
    p != null && p.includes("next") && n.nextButton.classList.add("driver-popover-btn-disabled"),
    p != null && p.includes("previous") && n.previousButton.classList.add("driver-popover-btn-disabled"),
    p != null && p.includes("close") && n.closeButton.classList.add("driver-popover-btn-disabled");
    const C = n.wrapper;
    C.style.display = "block",
    C.style.left = "",
    C.style.top = "",
    C.style.bottom = "",
    C.style.right = "";
    const L = n.arrow;
    L.className = "driver-popover-arrow";
    const $ = ((o = t.popover) == null ? void 0 : o.popoverClass) || l("popoverClass") || "";
    C.className = `driver-popover ${$}`.trim(),
    Z(n.wrapper, x => {
        var b, S, M;
        const B = x.target
          , _ = ((b = t.popover) == null ? void 0 : b.onNextClick) || l("onNextClick")
          , k = ((S = t.popover) == null ? void 0 : S.onPrevClick) || l("onPrevClick")
          , T = ((M = t.popover) == null ? void 0 : M.onCloseClick) || l("onCloseClick");
        if (B.classList.contains("driver-popover-next-btn"))
            return _ ? _(e, t, {
                config: l(),
                state: a()
            }) : E("nextClick");
        if (B.classList.contains("driver-popover-prev-btn"))
            return k ? k(e, t, {
                config: l(),
                state: a()
            }) : E("prevClick");
        if (B.classList.contains("driver-popover-close-btn"))
            return T ? T(e, t, {
                config: l(),
                state: a()
            }) : E("closeClick")
    }
    , x => !(n != null && n.description.contains(x)) && !(n != null && n.title.contains(x)) && x.className.includes("driver-popover")),
    P("popover", n),
    J(e, t),
    j(C);
    const y = ((i = t.popover) == null ? void 0 : i.onPopoverRendered) || l("onPopoverRendered");
    y && y(n, {
        config: l(),
        state: a()
    })
}
function G() {
    const e = a("popover");
    if (!(e != null && e.wrapper))
        return;
    const t = e.wrapper.getBoundingClientRect()
      , o = l("stagePadding") || 0
      , i = l("popoverOffset") || 0;
    return {
        width: t.width + o + i,
        height: t.height + o + i,
        realWidth: t.width,
        realHeight: t.height
    }
}
function F(e, t) {
    const {elementDimensions: o, popoverDimensions: i, popoverPadding: n, popoverArrowDimensions: d} = t;
    return e === "start" ? Math.max(Math.min(o.top - n, window.innerHeight - i.realHeight - d.width), d.width) : e === "end" ? Math.max(Math.min(o.top - (i == null ? void 0 : i.realHeight) + o.height + n, window.innerHeight - (i == null ? void 0 : i.realHeight) - d.width), d.width) : e === "center" ? Math.max(Math.min(o.top + o.height / 2 - (i == null ? void 0 : i.realHeight) / 2, window.innerHeight - (i == null ? void 0 : i.realHeight) - d.width), d.width) : 0
}
function O(e, t) {
    const {elementDimensions: o, popoverDimensions: i, popoverPadding: n, popoverArrowDimensions: d} = t;
    return e === "start" ? Math.max(Math.min(o.left - n, window.innerWidth - i.realWidth - d.width), d.width) : e === "end" ? Math.max(Math.min(o.left - (i == null ? void 0 : i.realWidth) + o.width + n, window.innerWidth - (i == null ? void 0 : i.realWidth) - d.width), d.width) : e === "center" ? Math.max(Math.min(o.left + o.width / 2 - (i == null ? void 0 : i.realWidth) / 2, window.innerWidth - (i == null ? void 0 : i.realWidth) - d.width), d.width) : 0
}
function J(e, t) {
    const o = a("popover");
    if (!o)
        return;
    const {align: i="start", side: n="left"} = (t == null ? void 0 : t.popover) || {}
      , d = i
      , h = e.id === "driver-dummy-element" ? "over" : n
      , f = l("stagePadding") || 0
      , r = G()
      , u = o.arrow.getBoundingClientRect()
      , s = e.getBoundingClientRect()
      , v = s.top - r.height;
    let c = v >= 0;
    const w = window.innerHeight - (s.bottom + r.height);
    let g = w >= 0;
    const m = s.left - r.width;
    let p = m >= 0;
    const C = window.innerWidth - (s.right + r.width);
    let L = C >= 0;
    const $ = !c && !g && !p && !L;
    let y = h;
    if (h === "top" && c ? L = p = g = !1 : h === "bottom" && g ? L = p = c = !1 : h === "left" && p ? L = c = g = !1 : h === "right" && L && (p = c = g = !1),
    h === "over") {
        const x = window.innerWidth / 2 - r.realWidth / 2
          , b = window.innerHeight / 2 - r.realHeight / 2;
        o.wrapper.style.left = `${x}px`,
        o.wrapper.style.right = "auto",
        o.wrapper.style.top = `${b}px`,
        o.wrapper.style.bottom = "auto"
    } else if ($) {
        const x = window.innerWidth / 2 - (r == null ? void 0 : r.realWidth) / 2
          , b = 10;
        o.wrapper.style.left = `${x}px`,
        o.wrapper.style.right = "auto",
        o.wrapper.style.bottom = `${b}px`,
        o.wrapper.style.top = "auto"
    } else if (p) {
        const x = Math.min(m, window.innerWidth - (r == null ? void 0 : r.realWidth) - u.width)
          , b = F(d, {
            elementDimensions: s,
            popoverDimensions: r,
            popoverPadding: f,
            popoverArrowDimensions: u
        });
        o.wrapper.style.left = `${x}px`,
        o.wrapper.style.top = `${b}px`,
        o.wrapper.style.bottom = "auto",
        o.wrapper.style.right = "auto",
        y = "left"
    } else if (L) {
        const x = Math.min(C, window.innerWidth - (r == null ? void 0 : r.realWidth) - u.width)
          , b = F(d, {
            elementDimensions: s,
            popoverDimensions: r,
            popoverPadding: f,
            popoverArrowDimensions: u
        });
        o.wrapper.style.right = `${x}px`,
        o.wrapper.style.top = `${b}px`,
        o.wrapper.style.bottom = "auto",
        o.wrapper.style.left = "auto",
        y = "right"
    } else if (c) {
        const x = Math.min(v, window.innerHeight - r.realHeight - u.width);
        let b = O(d, {
            elementDimensions: s,
            popoverDimensions: r,
            popoverPadding: f,
            popoverArrowDimensions: u
        });
        o.wrapper.style.top = `${x}px`,
        o.wrapper.style.left = `${b}px`,
        o.wrapper.style.bottom = "auto",
        o.wrapper.style.right = "auto",
        y = "top"
    } else if (g) {
        const x = Math.min(w, window.innerHeight - (r == null ? void 0 : r.realHeight) - u.width);
        let b = O(d, {
            elementDimensions: s,
            popoverDimensions: r,
            popoverPadding: f,
            popoverArrowDimensions: u
        });
        o.wrapper.style.left = `${b}px`,
        o.wrapper.style.bottom = `${x}px`,
        o.wrapper.style.top = "auto",
        o.wrapper.style.right = "auto",
        y = "bottom"
    }
    $ ? o.arrow.classList.add("driver-popover-arrow-none") : fe(d, y, e)
}
function fe(e, t, o) {
    const i = a("popover");
    if (!i)
        return;
    const n = o.getBoundingClientRect()
      , d = G()
      , h = i.arrow
      , f = d.width
      , r = window.innerWidth
      , u = n.width
      , s = n.left
      , v = d.height
      , c = window.innerHeight
      , w = n.top
      , g = n.height;
    h.className = "driver-popover-arrow";
    let m = t
      , p = e;
    t === "top" ? (s + u <= 0 ? (m = "right",
    p = "end") : s + u - f <= 0 && (m = "top",
    p = "start"),
    s >= r ? (m = "left",
    p = "end") : s + f >= r && (m = "top",
    p = "end")) : t === "bottom" ? (s + u <= 0 ? (m = "right",
    p = "start") : s + u - f <= 0 && (m = "bottom",
    p = "start"),
    s >= r ? (m = "left",
    p = "start") : s + f >= r && (m = "bottom",
    p = "end")) : t === "left" ? (w + g <= 0 ? (m = "bottom",
    p = "end") : w + g - v <= 0 && (m = "left",
    p = "start"),
    w >= c ? (m = "top",
    p = "end") : w + v >= c && (m = "left",
    p = "end")) : t === "right" && (w + g <= 0 ? (m = "bottom",
    p = "start") : w + g - v <= 0 && (m = "right",
    p = "start"),
    w >= c ? (m = "top",
    p = "start") : w + v >= c && (m = "right",
    p = "end")),
    m ? (h.classList.add(`driver-popover-arrow-side-${m}`),
    h.classList.add(`driver-popover-arrow-align-${p}`)) : h.classList.add("driver-popover-arrow-none")
}
function ye() {
    const e = document.createElement("div");
    e.classList.add("driver-popover");
    const t = document.createElement("div");
    t.classList.add("driver-popover-arrow");
    const o = document.createElement("div");
    o.classList.add("driver-popover-title"),
    o.style.display = "none",
    o.innerText = "Popover Title";
    const i = document.createElement("div");
    i.classList.add("driver-popover-description"),
    i.style.display = "none",
    i.innerText = "Popover description is here";
    const n = document.createElement("button");
    n.classList.add("driver-popover-close-btn"),
    n.innerHTML = "&times;";
    const d = document.createElement("div");
    d.classList.add("driver-popover-footer");
    const h = document.createElement("span");
    h.classList.add("driver-popover-progress-text"),
    h.innerText = "";
    const f = document.createElement("span");
    f.classList.add("driver-popover-navigation-btns");
    const r = document.createElement("button");
    r.classList.add("driver-popover-prev-btn"),
    r.innerHTML = "&larr; Previous";
    const u = document.createElement("button");
    return u.classList.add("driver-popover-next-btn"),
    u.innerHTML = "Next &rarr;",
    f.appendChild(r),
    f.appendChild(u),
    d.appendChild(h),
    d.appendChild(f),
    e.appendChild(n),
    e.appendChild(t),
    e.appendChild(o),
    e.appendChild(i),
    e.appendChild(d),
    {
        wrapper: e,
        arrow: t,
        title: o,
        description: i,
        footer: d,
        previousButton: r,
        nextButton: u,
        closeButton: n,
        footerButtons: f,
        progress: h
    }
}
function xe() {
    var e;
    const t = a("popover");
    t && ((e = t.wrapper.parentElement) == null || e.removeChild(t.wrapper))
}
function Ce(e={}) {
    R(e);
    function t() {
        l("allowClose") && u()
    }
    function o() {
        const s = a("activeIndex")
          , v = l("steps") || [];
        if (typeof s > "u")
            return;
        const c = s + 1;
        v[c] ? r(c) : u()
    }
    function i() {
        const s = a("activeIndex")
          , v = l("steps") || [];
        if (typeof s > "u")
            return;
        const c = s - 1;
        v[c] ? r(c) : u()
    }
    function n(s) {
        (l("steps") || [])[s] ? r(s) : u()
    }
    function d() {
        var s;
        if (a("__transitionCallback"))
            return;
        const v = a("activeIndex")
          , c = a("activeStep")
          , w = a("activeElement");
        if (typeof v > "u" || typeof c > "u" || typeof a("activeIndex") > "u")
            return;
        const g = ((s = c.popover) == null ? void 0 : s.onPrevClick) || l("onPrevClick");
        if (g)
            return g(w, c, {
                config: l(),
                state: a()
            });
        i()
    }
    function h() {
        var s;
        if (a("__transitionCallback"))
            return;
        const v = a("activeIndex")
          , c = a("activeStep")
          , w = a("activeElement");
        if (typeof v > "u" || typeof c > "u")
            return;
        const g = ((s = c.popover) == null ? void 0 : s.onNextClick) || l("onNextClick");
        if (g)
            return g(w, c, {
                config: l(),
                state: a()
            });
        o()
    }
    function f() {
        a("isInitialized") || (P("isInitialized", !0),
        document.body.classList.add("driver-active", l("animate") ? "driver-fade" : "driver-simple"),
        we(),
        A("overlayClick", t),
        A("escapePress", t),
        A("arrowLeftPress", d),
        A("arrowRightPress", h))
    }
    function r(s=0) {
        var v, c, w, g, m, p, C, L;
        const $ = l("steps");
        if (!$) {
            console.error("No steps to drive through"),
            u();
            return
        }
        if (!$[s]) {
            u();
            return
        }
        P("activeIndex", s);
        const y = $[s]
          , x = $[s + 1]
          , b = $[s - 1]
          , S = ((v = y.popover) == null ? void 0 : v.doneBtnText) || l("doneBtnText") || "Done"
          , M = l("allowClose")
          , B = typeof ((c = y.popover) == null ? void 0 : c.showProgress) < "u" ? (w = y.popover) == null ? void 0 : w.showProgress : l("showProgress")
          , _ = (((g = y.popover) == null ? void 0 : g.progressText) || l("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${s + 1}`).replace("{{total}}", `${$.length}`)
          , k = ((m = y.popover) == null ? void 0 : m.showButtons) || l("showButtons")
          , T = ["next", "previous", ...M ? ["close"] : []].filter(te => !(k != null && k.length) || k.includes(te))
          , Q = ((p = y.popover) == null ? void 0 : p.onNextClick) || l("onNextClick")
          , U = ((C = y.popover) == null ? void 0 : C.onPrevClick) || l("onPrevClick")
          , ee = ((L = y.popover) == null ? void 0 : L.onCloseClick) || l("onCloseClick");
        z({
            ...y,
            popover: {
                showButtons: T,
                nextBtnText: x ? void 0 : S,
                disableButtons: [...b ? [] : ["previous"]],
                showProgress: B,
                progressText: _,
                onNextClick: Q || ( () => {
                    x ? r(s + 1) : u()
                }
                ),
                onPrevClick: U || ( () => {
                    r(s - 1)
                }
                ),
                onCloseClick: ee || ( () => {
                    u()
                }
                ),
                ...(y == null ? void 0 : y.popover) || {}
            }
        })
    }
    function u(s=!0) {
        const v = a("activeElement")
          , c = a("activeStep")
          , w = l("onDestroyStarted");
        if (s && w) {
            const p = !v || (v == null ? void 0 : v.id) === "driver-dummy-element";
            w(p ? void 0 : v, c, {
                config: l(),
                state: a()
            });
            return
        }
        const g = (c == null ? void 0 : c.onDeselected) || l("onDeselected")
          , m = l("onDestroyed");
        if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"),
        me(),
        xe(),
        he(),
        pe(),
        re(),
        ie(),
        v && c) {
            const p = v.id === "driver-dummy-element";
            g && g(p ? void 0 : v, c, {
                config: l(),
                state: a()
            }),
            m && m(p ? void 0 : v, c, {
                config: l(),
                state: a()
            })
        }
    }
    return {
        isActive: () => a("isInitialized") || !1,
        refresh: H,
        drive: (s=0) => {
            f(),
            r(s)
        }
        ,
        setConfig: R,
        getConfig: l,
        getState: a,
        getActiveIndex: () => a("activeIndex"),
        getActiveStep: () => a("activeStep"),
        getActiveElement: () => a("activeElement"),
        getPreviousElement: () => a("previousElement"),
        getPreviousStep: () => a("previousStep"),
        moveNext: o,
        movePrevious: i,
        moveTo: n,
        hasNextStep: () => {
            const s = l("steps") || []
              , v = a("activeIndex");
            return v !== void 0 && s[v + 1]
        }
        ,
        hasPreviousStep: () => {
            const s = l("steps") || []
              , v = a("activeIndex");
            return v !== void 0 && s[v - 1]
        }
        ,
        highlight: s => {
            f(),
            z({
                ...s,
                popover: s.popover ? {
                    showButtons: [],
                    showProgress: !1,
                    progressText: "",
                    ...s.popover
                } : void 0
            })
        }
        ,
        destroy: () => {
            u(!1)
        }
    }
}
export {Ce as b};
