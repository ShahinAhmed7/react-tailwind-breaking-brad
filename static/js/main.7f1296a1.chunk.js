(this["webpackJsonpbreaking-bad"] = this["webpackJsonpbreaking-bad"] || []).push([
    [0], { 41: function(e, t, c) {}, 42: function(e, t, c) { "use strict";
            c.r(t); var a = c(0),
                r = c(1),
                n = c.n(r),
                s = c(14),
                i = c.n(s),
                o = c(5),
                d = c.n(o),
                l = c(15),
                u = c(3),
                j = c(16),
                b = c.n(j),
                g = c.p + "http://upwork.shahinwp.com/react-img/logo.png",
                m = function() { return Object(a.jsx)("header", { className: "text-center bg-green-600 py-4 mb-20", children: Object(a.jsx)("img", { className: "inline-block h-20", src: g, alt: "" }) }) },
                p = function(e) { var t = e.item; return Object(a.jsxs)("div", { className: "max-w-lg rounded overflow-hidden shadow-lg mb-3", children: [Object(a.jsx)("img", { className: "w-full", src: t.img, alt: "" }), Object(a.jsxs)("div", { className: "px-6 py-4", children: [Object(a.jsxs)("h1", { children: ["Name: ", t.name] }), Object(a.jsxs)("p", { children: [Object(a.jsx)("strong", { children: "Category:" }), " ", t.category] })] })] }) },
                h = c.p + "http://upwork.shahinwp.com/react-img/spinner.gif",
                x = function() { return Object(a.jsx)("img", { src: h, style: { width: "200px", margin: "auto", display: "block" }, alt: "Loading" }) },
                O = function(e) { var t = e.items; return e.isLoading ? Object(a.jsx)(x, {}) : Object(a.jsx)("div", { className: "grid lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2", children: t.map((function(e) { return Object(a.jsx)(p, { item: e }, e.char_id) })) }) },
                f = function(e) { var t = e.getQuery,
                        c = Object(r.useState)(""),
                        n = Object(u.a)(c, 2),
                        s = n[0],
                        i = n[1]; return Object(a.jsx)("div", { className: "mx-auto px-5 grid md:grid-cols-8 mb-10", children: Object(a.jsx)("div", { className: "md:col-start-3 md:col-span-4", children: Object(a.jsx)("form", { className: "form", children: Object(a.jsx)("input", { value: s, onChange: function(e) { return c = e.target.value, i(c), void t(c); var c }, autoFocus: !0, className: "mx-auto appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey", type: "search", placeholder: "Search a Characters" }) }) }) }) },
                v = (c(41), function() { var e = Object(r.useState)([]),
                        t = Object(u.a)(e, 2),
                        c = t[0],
                        n = t[1],
                        s = Object(r.useState)(!0),
                        i = Object(u.a)(s, 2),
                        o = i[0],
                        j = i[1],
                        g = Object(r.useState)(""),
                        p = Object(u.a)(g, 2),
                        h = p[0],
                        x = p[1]; return Object(r.useEffect)((function() {
                        (function() { var e = Object(l.a)(d.a.mark((function e() { var t; return d.a.wrap((function(e) { for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return j(!0), e.next = 3, b()("https://www.breakingbadapi.com/api/characters?name=".concat(h));
                                        case 3:
                                            t = e.sent, n(t.data), j(!1);
                                        case 6:
                                        case "end":
                                            return e.stop() } }), e) }))); return function() { return e.apply(this, arguments) } })()() }), [h]), Object(a.jsxs)("div", { className: "App", children: [Object(a.jsx)(m, {}), Object(a.jsx)(f, { getQuery: function(e) { return x(e) } }), Object(a.jsx)("div", { className: "container mx-auto px-5", children: Object(a.jsx)(O, { isLoading: o, items: c }) })] }) });
            i.a.render(Object(a.jsx)(n.a.StrictMode, { children: Object(a.jsx)(v, {}) }), document.getElementById("root")) } },
    [
        [42, 1, 2]
    ]
]);
//# sourceMappingURL=main.7f1296a1.chunk.js.map