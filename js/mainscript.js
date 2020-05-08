








function highlight(e) {
    e.css({
        "background-color": "#fff"
    }), e.addClass("pm-tool-col::after")
}

function badwords(e) {
    for (var t = (new Array, 0), i = e, n = 0; n < bad_words_array.length; n++)
        for (var a = 0; a < i.length; a++) bad_words_array[n] == i.substring(a, a + bad_words_array[n].length).toLowerCase() && t++;
    return t
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e) {
        var t = e.length,
            i = ae.type(e);
        return "function" === i || ae.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (ae.isFunction(t)) return ae.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return ae.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (he.test(t)) return ae.filter(t, e, i);
            t = ae.filter(t, e)
        }
        return ae.grep(e, function(e) {
            return ae.inArray(e, t) >= 0 !== i
        })
    }

    function a(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function r(e) {
        var t = we[e] = {};
        return ae.each(e.match(be) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function o() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (fe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (o(), ae.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(ke, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Te.test(i) ? ae.parseJSON(i) : i
                } catch (a) {}
                ae.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function d(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ae.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, i, n) {
        if (ae.acceptData(e)) {
            var a, r, o = ae.expando,
                s = e.nodeType,
                l = s ? ae.cache : e,
                d = s ? e[o] : e[o] && o;
            if (d && l[d] && (n || l[d].data) || void 0 !== i || "string" != typeof t) return d || (d = s ? e[o] = X.pop() || ae.guid++ : o), l[d] || (l[d] = s ? {} : {
                toJSON: ae.noop
            }), ("object" == typeof t || "function" == typeof t) && (n ? l[d] = ae.extend(l[d], t) : l[d].data = ae.extend(l[d].data, t)), r = l[d], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[ae.camelCase(t)] = i), "string" == typeof t ? (a = r[t], null == a && (a = r[ae.camelCase(t)])) : a = r, a
        }
    }

    function u(e, t, i) {
        if (ae.acceptData(e)) {
            var n, a, r = e.nodeType,
                o = r ? ae.cache : e,
                s = r ? e[ae.expando] : ae.expando;
            if (o[s]) {
                if (t && (n = i ? o[s] : o[s].data)) {
                    ae.isArray(t) ? t = t.concat(ae.map(t, ae.camelCase)) : t in n ? t = [t] : (t = ae.camelCase(t), t = t in n ? [t] : t.split(" ")), a = t.length;
                    for (; a--;) delete n[t[a]];
                    if (i ? !d(n) : !ae.isEmptyObject(n)) return
                }(i || (delete o[s].data, d(o[s]))) && (r ? ae.cleanData([e], !0) : ie.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = Le.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function g(e, t) {
        var i, n, a = 0,
            r = typeof e.getElementsByTagName !== Ce ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Ce ? e.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], i = e.childNodes || e; null != (n = i[a]); a++) !t || ae.nodeName(n, t) ? r.push(n) : ae.merge(r, g(n, t));
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], r) : r
    }

    function v(e) {
        Ae.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (null !== ae.find.attr(e, "type")) + "/" + e.type, e
    }

    function w(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) ae._data(i, "globalEval", !t || ae._data(t[n], "globalEval"))
    }

    function _(e, t) {
        if (1 === t.nodeType && ae.hasData(e)) {
            var i, n, a, r = ae._data(e),
                o = ae._data(t, r),
                s = r.events;
            if (s) {
                delete o.handle, o.events = {};
                for (i in s)
                    for (n = 0, a = s[i].length; a > n; n++) ae.event.add(t, i, s[i][n])
            }
            o.data && (o.data = ae.extend({}, o.data))
        }
    }

    function C(e, t) {
        var i, n, a;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[ae.expando]) {
                a = ae._data(t);
                for (n in a.events) ae.removeEvent(t, n, a.handle);
                t.removeAttribute(ae.expando)
            }
            "script" === i && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !ae.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function T(t, i) {
        var n, a = ae(i.createElement(t)).appendTo(i.body),
            r = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(a[0])) ? n.display : ae.css(a[0], "display");
        return a.detach(), r
    }

    function k(e) {
        var t = fe,
            i = Je[e];
        return i || (i = T(e, t), "none" !== i && i || (Ze = (Ze || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ze[0].contentWindow || Ze[0].contentDocument).document, t.write(), t.close(), i = T(e, t), Ze.detach()), Je[e] = i), i
    }

    function S(e, t) {
        return {
            get: function() {
                var i = e();
                return null != i ? i ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
            }
        }
    }

    function $(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, a = ht.length; a--;)
            if (t = ht[a] + i, t in e) return t;
        return n
    }

    function D(e, t) {
        for (var i, n, a, r = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (r[o] = ae._data(n, "olddisplay"), i = n.style.display, t ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && De(n) && (r[o] = ae._data(n, "olddisplay", k(n.nodeName)))) : (a = De(n), (i && "none" !== i || !a) && ae._data(n, "olddisplay", a ? i : ae.css(n, "display"))));
        for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
        return e
    }

    function I(e, t, i) {
        var n = lt.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function A(e, t, i, n, a) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += ae.css(e, i + $e[r], !0, a)), n ? ("content" === i && (o -= ae.css(e, "padding" + $e[r], !0, a)), "margin" !== i && (o -= ae.css(e, "border" + $e[r] + "Width", !0, a))) : (o += ae.css(e, "padding" + $e[r], !0, a), "padding" !== i && (o += ae.css(e, "border" + $e[r] + "Width", !0, a)));
        return o
    }

    function N(e, t, i) {
        var n = !0,
            a = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = et(e),
            o = ie.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, r);
        if (0 >= a || null == a) {
            if (a = tt(e, t, r), (0 > a || null == a) && (a = e.style[t]), nt.test(a)) return a;
            n = o && (ie.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
        }
        return a + A(e, t, i || (o ? "border" : "content"), n, r) + "px"
    }

    function E(e, t, i, n, a) {
        return new E.prototype.init(e, t, i, n, a)
    }

    function P() {
        return setTimeout(function() {
            pt = void 0
        }), pt = ae.now()
    }

    function M(e, t) {
        var i, n = {
                height: e
            },
            a = 0;
        for (t = t ? 1 : 0; 4 > a; a += 2 - t) i = $e[a], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function O(e, t, i) {
        for (var n, a = (bt[t] || []).concat(bt["*"]), r = 0, o = a.length; o > r; r++)
            if (n = a[r].call(i, t, e)) return n
    }

    function L(e, t, i) {
        var n, a, r, o, s, l, d, c, u = this,
            h = {},
            p = e.style,
            f = e.nodeType && De(e),
            m = ae._data(e, "fxshow");
        i.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, ae.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], d = ae.css(e, "display"), c = "none" === d ? ae._data(e, "olddisplay") || k(e.nodeName) : d, "inline" === c && "none" === ae.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (a = t[n], mt.exec(a)) {
                if (delete t[n], r = r || "toggle" === a, a === (f ? "hide" : "show")) {
                    if ("show" !== a || !m || void 0 === m[n]) continue;
                    f = !0
                }
                h[n] = m && m[n] || ae.style(e, n)
            } else d = void 0;
        if (ae.isEmptyObject(h)) "inline" === ("none" === d ? k(e.nodeName) : d) && (p.display = d);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = ae._data(e, "fxshow", {}), r && (m.hidden = !f), f ? ae(e).show() : u.done(function() {
                ae(e).hide()
            }), u.done(function() {
                var t;
                ae._removeData(e, "fxshow");
                for (t in h) ae.style(e, t, h[t])
            });
            for (n in h) o = O(f ? m[n] : 0, n, u), n in m || (m[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function R(e, t) {
        var i, n, a, r, o;
        for (i in e)
            if (n = ae.camelCase(i), a = t[n], r = e[i], ae.isArray(r) && (a = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), o = ae.cssHooks[n], o && "expand" in o) {
                r = o.expand(r), delete e[n];
                for (i in r) i in e || (e[i] = r[i], t[i] = a)
            } else t[n] = a
    }

    function j(e, t, i) {
        var n, a, r = 0,
            o = yt.length,
            s = ae.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var t = pt || P(), i = Math.max(0, d.startTime + d.duration - t), n = i / d.duration || 0, r = 1 - n, o = 0, l = d.tweens.length; l > o; o++) d.tweens[o].run(r);
                return s.notifyWith(e, [d, r, i]), 1 > r && l ? i : (s.resolveWith(e, [d]), !1)
            },
            d = s.promise({
                elem: e,
                props: ae.extend({}, t),
                opts: ae.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: pt || P(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = ae.Tween(e, d.opts, t, i, d.opts.specialEasing[t] || d.opts.easing);
                    return d.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? d.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; n > i; i++) d.tweens[i].run(1);
                    return t ? s.resolveWith(e, [d, t]) : s.rejectWith(e, [d, t]), this
                }
            }),
            c = d.props;
        for (R(c, d.opts.specialEasing); o > r; r++)
            if (n = yt[r].call(d, e, c, d.opts)) return n;
        return ae.map(c, O, d), ae.isFunction(d.opts.start) && d.opts.start.call(e, d), ae.fx.timer(ae.extend(l, {
            elem: e,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    function B(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, a = 0,
                r = t.toLowerCase().match(be) || [];
            if (ae.isFunction(i))
                for (; n = r[a++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function z(e, t, i, n) {
        function a(s) {
            var l;
            return r[s] = !0, ae.each(e[s] || [], function(e, s) {
                var d = s(t, i, n);
                return "string" != typeof d || o || r[d] ? o ? !(l = d) : void 0 : (t.dataTypes.unshift(d), a(d), !1)
            }), l
        }
        var r = {},
            o = e === Wt;
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function F(e, t) {
        var i, n, a = ae.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ae.extend(!0, e, i), e
    }

    function H(e, t, i) {
        for (var n, a, r, o, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (o in s)
                if (s[o] && s[o].test(a)) {
                    l.unshift(o);
                    break
                } if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                n || (n = o)
            }
            r = r || n
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function W(e, t, i, n) {
        var a, r, o, s, l, d = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters) d[o.toLowerCase()] = e.converters[o];
        for (r = c.shift(); r;)
            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (o = d[l + " " + r] || d["* " + r], !o)
                for (a in d)
                    if (s = a.split(" "), s[1] === r && (o = d[l + " " + s[0]] || d["* " + s[0]])) {
                        o === !0 ? o = d[a] : d[a] !== !0 && (r = s[0], c.unshift(s[1]));
                        break
                    } if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: o ? u : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function V(e, t, i, n) {
        var a;
        if (ae.isArray(t)) ae.each(t, function(t, a) {
            i || Ut.test(e) ? n(e, a) : V(e + "[" + ("object" == typeof a ? t : "") + "]", a, i, n)
        });
        else if (i || "object" !== ae.type(t)) n(e, t);
        else
            for (a in t) V(e + "[" + a + "]", t[a], i, n)
    }

    function Y() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function q() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function U(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X = [],
        Q = X.slice,
        K = X.concat,
        G = X.push,
        Z = X.indexOf,
        J = {},
        ee = J.toString,
        te = J.hasOwnProperty,
        ie = {},
        ne = "1.11.2",
        ae = function(e, t) {
            return new ae.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        se = /-([\da-z])/gi,
        le = function(e, t) {
            return t.toUpperCase()
        };
    ae.fn = ae.prototype = {
        jquery: ne,
        constructor: ae,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return ae.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(ae.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: X.sort,
        splice: X.splice
    }, ae.extend = ae.fn.extend = function() {
        var e, t, i, n, a, r, o = arguments[0] || {},
            s = 1,
            l = arguments.length,
            d = !1;
        for ("boolean" == typeof o && (d = o, o = arguments[s] || {}, s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
            if (null != (a = arguments[s]))
                for (n in a) e = o[n], i = a[n], o !== i && (d && i && (ae.isPlainObject(i) || (t = ae.isArray(i))) ? (t ? (t = !1, r = e && ae.isArray(e) ? e : []) : r = e && ae.isPlainObject(e) ? e : {}, o[n] = ae.extend(d, r, i)) : void 0 !== i && (o[n] = i));
        return o
    }, ae.extend({
        expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ae.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === ae.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !ae.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;
            try {
                if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (ie.ownLast)
                for (t in e) return te.call(e, t);
            for (t in e);
            return void 0 === t || te.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[ee.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && ae.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(oe, "ms-").replace(se, le)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var a, r = 0,
                o = e.length,
                s = i(e);
            if (n) {
                if (s)
                    for (; o > r && (a = t.apply(e[r], n), a !== !1); r++);
                else
                    for (r in e)
                        if (a = t.apply(e[r], n), a === !1) break
            } else if (s)
                for (; o > r && (a = t.call(e[r], r, e[r]), a !== !1); r++);
            else
                for (r in e)
                    if (a = t.call(e[r], r, e[r]), a === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? ae.merge(n, "string" == typeof e ? [e] : e) : G.call(n, e)), n
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (Z) return Z.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, a = e.length; i > n;) e[a++] = t[n++];
            if (i !== i)
                for (; void 0 !== t[n];) e[a++] = t[n++];
            return e.length = a, e
        },
        grep: function(e, t, i) {
            for (var n, a = [], r = 0, o = e.length, s = !i; o > r; r++) n = !t(e[r], r), n !== s && a.push(e[r]);
            return a
        },
        map: function(e, t, n) {
            var a, r = 0,
                o = e.length,
                s = i(e),
                l = [];
            if (s)
                for (; o > r; r++) a = t(e[r], r, n), null != a && l.push(a);
            else
                for (r in e) a = t(e[r], r, n), null != a && l.push(a);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, a;
            return "string" == typeof t && (a = e[t], t = e, e = a), ae.isFunction(e) ? (i = Q.call(arguments, 2), n = function() {
                return e.apply(t || this, i.concat(Q.call(arguments)))
            }, n.guid = e.guid = e.guid || ae.guid++, n) : void 0
        },
        now: function() {
            return +new Date
        },
        support: ie
    }), ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        J["[object " + t + "]"] = t.toLowerCase()
    });
    var de = function(e) {
        function t(e, t, i, n) {
            var a, r, o, s, l, d, u, p, f, m;
            if ((t ? t.ownerDocument || t : z) !== E && N(t), t = t || E, i = i || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return i;
            if (!n && M) {
                if (11 !== s && (a = ye.exec(e)))
                    if (o = a[1]) {
                        if (9 === s) {
                            if (r = t.getElementById(o), !r || !r.parentNode) return i;
                            if (r.id === o) return i.push(r), i
                        } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(o)) && j(t, r) && r.id === o) return i.push(r), i
                    } else {
                        if (a[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = a[3]) && x.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(o)), i
                    } if (x.qsa && (!O || !O.test(e))) {
                    if (p = u = B, f = t, m = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (d = k(e), (u = t.getAttribute("id")) ? p = u.replace(we, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + h(d[l]);
                        f = be.test(e) && c(t.parentNode) || t, m = d.join(",")
                    }
                    if (m) try {
                        return Z.apply(i, f.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return $(e.replace(le, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > _.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[B] = !0, e
        }

        function a(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var i = e.split("|"), n = e.length; n--;) _.attrHandle[i[n]] = t
        }

        function o(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function d(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var a, r = e([], i.length, t), o = r.length; o--;) i[a = r[o]] && (i[a] = !(n[a] = i[a]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function h(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir,
                a = i && "parentNode" === n,
                r = H++;
            return t.first ? function(t, i, r) {
                for (; t = t[n];)
                    if (1 === t.nodeType || a) return e(t, i, r)
            } : function(t, i, o) {
                var s, l, d = [F, r];
                if (o) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || a) && e(t, i, o)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || a) {
                            if (l = t[B] || (t[B] = {}), (s = l[n]) && s[0] === F && s[1] === r) return d[2] = s[2];
                            if (l[n] = d, d[2] = e(t, i, o)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var a = e.length; a--;)
                    if (!e[a](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function m(e, i, n) {
            for (var a = 0, r = i.length; r > a; a++) t(e, i[a], n);
            return n
        }

        function g(e, t, i, n, a) {
            for (var r, o = [], s = 0, l = e.length, d = null != t; l > s; s++)(r = e[s]) && (!i || i(r, n, a)) && (o.push(r), d && t.push(s));
            return o
        }

        function v(e, t, i, a, r, o) {
            return a && !a[B] && (a = v(a)), r && !r[B] && (r = v(r, o)), n(function(n, o, s, l) {
                var d, c, u, h = [],
                    p = [],
                    f = o.length,
                    v = n || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !n && t ? v : g(v, h, e, s, l),
                    b = i ? r || (n ? e : f || a) ? [] : o : y;
                if (i && i(y, b, s, l), a)
                    for (d = g(b, p), a(d, [], s, l), c = d.length; c--;)(u = d[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (d = [], c = b.length; c--;)(u = b[c]) && d.push(y[c] = u);
                            r(null, b = [], d, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (d = r ? ee(n, u) : h[c]) > -1 && (n[d] = !(o[d] = u))
                    }
                } else b = g(b === o ? b.splice(f, b.length) : b), r ? r(null, o, b, l) : Z.apply(o, b)
            })
        }

        function y(e) {
            for (var t, i, n, a = e.length, r = _.relative[e[0].type], o = r || _.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                    return e === t
                }, o, !0), d = p(function(e) {
                    return ee(t, e) > -1
                }, o, !0), c = [function(e, i, n) {
                    var a = !r && (n || i !== D) || ((t = i).nodeType ? l(e, i, n) : d(e, i, n));
                    return t = null, a
                }]; a > s; s++)
                if (i = _.relative[e[s].type]) c = [p(f(c), i)];
                else {
                    if (i = _.filter[e[s].type].apply(null, e[s].matches), i[B]) {
                        for (n = ++s; a > n && !_.relative[e[n].type]; n++);
                        return v(s > 1 && f(c), s > 1 && h(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), i, n > s && y(e.slice(s, n)), a > n && y(e = e.slice(n)), a > n && h(e))
                    }
                    c.push(i)
                } return f(c)
        }

        function b(e, i) {
            var a = i.length > 0,
                r = e.length > 0,
                o = function(n, o, s, l, d) {
                    var c, u, h, p = 0,
                        f = "0",
                        m = n && [],
                        v = [],
                        y = D,
                        b = n || r && _.find.TAG("*", d),
                        w = F += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (d && (D = o !== E && o); f !== x && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (u = 0; h = e[u++];)
                                if (h(c, o, s)) {
                                    l.push(c);
                                    break
                                } d && (F = w)
                        }
                        a && ((c = !h && c) && p--, n && m.push(c))
                    }
                    if (p += f, a && f !== p) {
                        for (u = 0; h = i[u++];) h(m, v, o, s);
                        if (n) {
                            if (p > 0)
                                for (; f--;) m[f] || v[f] || (v[f] = K.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), d && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return d && (F = w, D = y), m
                };
            return a ? n(o) : o
        }
        var w, x, _, C, T, k, S, $, D, I, A, N, E, P, M, O, L, R, j, B = "sizzle" + 1 * new Date,
            z = e.document,
            F = 0,
            H = 0,
            W = i(),
            V = i(),
            Y = i(),
            q = function(e, t) {
                return e === t && (A = !0), 0
            },
            U = 1 << 31,
            X = {}.hasOwnProperty,
            Q = [],
            K = Q.pop,
            G = Q.push,
            Z = Q.push,
            J = Q.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ae = ne.replace("w", "w#"),
            re = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ie + "*\\]",
            oe = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ie + "+", "g"),
            le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            de = new RegExp("^" + ie + "*," + ie + "*"),
            ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            ue = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            he = new RegExp(oe),
            pe = new RegExp("^" + ae + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            me = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            _e = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Ce = function() {
                N()
            };
        try {
            Z.apply(Q = J.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
        } catch (Te) {
            Z = {
                apply: Q.length ? function(e, t) {
                    G.apply(e, J.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : z;
            return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, P = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Ce, !1) : i.attachEvent && i.attachEvent("onunload", Ce)), M = !T(n), x.attributes = a(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = a(function(e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ve.test(n.getElementsByClassName), x.getById = a(function(e) {
                return P.appendChild(e).id = B, !n.getElementsByName || !n.getElementsByName(B).length
            }), x.getById ? (_.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && M) {
                    var i = t.getElementById(e);
                    return i && i.parentNode ? [i] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(xe, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(xe, _e);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    a = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[a++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                return M ? t.getElementsByClassName(e) : void 0
            }, L = [], O = [], (x.qsa = ve.test(n.querySelectorAll)) && (a(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || O.push(".#.+[+~]")
            }), a(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = ve.test(R = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && a(function(e) {
                x.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), L.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(P.compareDocumentPosition), j = t || ve.test(P.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === z && j(z, e) ? -1 : t === n || t.ownerDocument === z && j(z, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var i, a = 0,
                    r = e.parentNode,
                    s = t.parentNode,
                    l = [e],
                    d = [t];
                if (!r || !s) return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                if (r === s) return o(e, t);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = t; i = i.parentNode;) d.unshift(i);
                for (; l[a] === d[a];) a++;
                return a ? o(l[a], d[a]) : l[a] === z ? -1 : d[a] === z ? 1 : 0
            }, n) : E
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== E && N(e), i = i.replace(ue, "='$1']"), !(!x.matchesSelector || !M || L && L.test(i) || O && O.test(i))) try {
                var n = R.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (a) {}
            return t(i, E, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== E && N(e), j(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== E && N(e);
            var i = _.attrHandle[t.toLowerCase()],
                n = i && X.call(_.attrHandle, t.toLowerCase()) ? i(e, t, !M) : void 0;
            return void 0 !== n ? n : x.attributes || !M ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                a = 0;
            if (A = !x.detectDuplicates, I = !x.sortStable && e.slice(0), e.sort(q), A) {
                for (; t = e[a++];) t === e[a] && (n = i.push(a));
                for (; n--;) e.splice(i[n], 1)
            }
            return I = null, e
        }, C = t.getText = function(e) {
            var t, i = "",
                n = 0,
                a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += C(e)
                } else if (3 === a || 4 === a) return e.nodeValue
            } else
                for (; t = e[n++];) i += C(t);
            return i
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && he.test(i) && (t = k(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(a) {
                        var r = t.attr(a, e);
                        return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, a) {
                    var r = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === n && 0 === a ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var d, c, u, h, p, f, m = r !== o ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s;
                        if (g) {
                            if (r) {
                                for (; m;) {
                                    for (u = t; u = u[m];)
                                        if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild], o && y) {
                                for (c = g[B] || (g[B] = {}), d = c[e] || [], p = d[0] === F && d[1], h = d[0] === F && d[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++h && u === t) {
                                        c[e] = [F, p, h];
                                        break
                                    }
                            } else if (y && (d = (t[B] || (t[B] = {}))[e]) && d[0] === F) h = d[1];
                            else
                                for (;
                                    (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[B] || (u[B] = {}))[e] = [F, h]), u !== t)););
                            return h -= a, h === n || h % n === 0 && h / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var a, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[B] ? r(i) : r.length > 1 ? (a = [e, e, "", i], _.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, a = r(e, i), o = a.length; o--;) n = ee(e, a[o]), e[n] = !(t[n] = a[o])
                    }) : function(e) {
                        return r(e, 0, a)
                    }) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        a = S(e.replace(le, "$1"));
                    return a[B] ? n(function(e, t, i, n) {
                        for (var r, o = a(e, null, n, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, n, r) {
                        return t[0] = e, a(t, null, r, i), t[0] = null, !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(xe, _e),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, _e).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: d(function() {
                    return [0]
                }),
                last: d(function(e, t) {
                    return [t - 1]
                }),
                eq: d(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: d(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: d(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: d(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: d(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[w] = s(w);
        for (w in {
                submit: !0,
                reset: !0
            }) _.pseudos[w] = l(w);
        return u.prototype = _.filters = _.pseudos, _.setFilters = new u, k = t.tokenize = function(e, i) {
            var n, a, r, o, s, l, d, c = V[e + " "];
            if (c) return i ? 0 : c.slice(0);
            for (s = e, l = [], d = _.preFilter; s;) {
                (!n || (a = de.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(r = [])), n = !1, (a = ce.exec(s)) && (n = a.shift(), r.push({
                    value: n,
                    type: a[0].replace(le, " ")
                }), s = s.slice(n.length));
                for (o in _.filter) !(a = fe[o].exec(s)) || d[o] && !(a = d[o](a)) || (n = a.shift(), r.push({
                    value: n,
                    type: o,
                    matches: a
                }), s = s.slice(n.length));
                if (!n) break
            }
            return i ? s.length : s ? t.error(e) : V(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var i, n = [],
                a = [],
                r = Y[e + " "];
            if (!r) {
                for (t || (t = k(e)), i = t.length; i--;) r = y(t[i]), r[B] ? n.push(r) : a.push(r);
                r = Y(e, b(a, n)), r.selector = e
            }
            return r
        }, $ = t.select = function(e, t, i, n) {
            var a, r, o, s, l, d = "function" == typeof e && e,
                u = !n && k(e = d.selector || e);
            if (i = i || [], 1 === u.length) {
                if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && x.getById && 9 === t.nodeType && M && _.relative[r[1].type]) {
                    if (t = (_.find.ID(o.matches[0].replace(xe, _e), t) || [])[0], !t) return i;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (a = fe.needsContext.test(e) ? 0 : r.length; a-- && (o = r[a], !_.relative[s = o.type]);)
                    if ((l = _.find[s]) && (n = l(o.matches[0].replace(xe, _e), be.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(a, 1), e = n.length && h(r), !e) return Z.apply(i, n), i;
                        break
                    }
            }
            return (d || S(e, u))(n, t, !M, i, be.test(e) && c(t.parentNode) || t), i
        }, x.sortStable = B.split("").sort(q).join("") === B, x.detectDuplicates = !!A, N(), x.sortDetached = a(function(e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }), a(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && a(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), a(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    ae.find = de, ae.expr = de.selectors, ae.expr[":"] = ae.expr.pseudos, ae.unique = de.uniqueSort, ae.text = de.getText, ae.isXMLDoc = de.isXML, ae.contains = de.contains;
    var ce = ae.expr.match.needsContext,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        he = /^.[^:#\[\.,]*$/;
    ae.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ae.find.matchesSelector(n, e) ? [n] : [] : ae.find.matches(e, ae.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ae.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                a = n.length;
            if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
                for (t = 0; a > t; t++)
                    if (ae.contains(n[t], this)) return !0
            }));
            for (t = 0; a > t; t++) ae.find(e, n[t], i);
            return i = this.pushStack(a > 1 ? ae.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function(e) {
            return !!n(this, "string" == typeof e && ce.test(e) ? ae(e) : e || [], !1).length
        }
    });
    var pe, fe = e.document,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = ae.fn.init = function(e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)), ue.test(i[1]) && ae.isPlainObject(t))
                        for (i in t) ae.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = fe.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pe.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = fe, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? "undefined" != typeof pe.ready ? pe.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
        };
    ge.prototype = ae.fn, pe = ae(fe);
    var ve = /^(?:parents|prev(?:Until|All))/,
        ye = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ae.extend({
        dir: function(e, t, i) {
            for (var n = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === i || 1 !== a.nodeType || !ae(a).is(i));) 1 === a.nodeType && n.push(a), a = a[t];
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), ae.fn.extend({
        has: function(e) {
            var t, i = ae(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; n > t; t++)
                    if (ae.contains(this, i[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, a = this.length, r = [], o = ce.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; a > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && ae.find.matchesSelector(i, e))) {
                        r.push(i);
                        break
                    } return this.pushStack(r.length > 1 ? ae.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.inArray(this[0], ae(e)) : ae.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ae.unique(ae.merge(this.get(), ae(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ae.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ae.dir(e, "parentNode", i)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return ae.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ae.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ae.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ae.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return ae.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ae.sibling(e.firstChild)
        },
        contents: function(e) {
            return ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ae.merge([], e.childNodes)
        }
    }, function(e, t) {
        ae.fn[e] = function(i, n) {
            var a = ae.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (a = ae.filter(n, a)), this.length > 1 && (ye[e] || (a = ae.unique(a)), ve.test(e) && (a = a.reverse())), this.pushStack(a)
        }
    });
    var be = /\S+/g,
        we = {};
    ae.Callbacks = function(e) {
        e = "string" == typeof e ? we[e] || r(e) : ae.extend({}, e);
        var t, i, n, a, o, s, l = [],
            d = !e.once && [],
            c = function(r) {
                for (i = e.memory && r, n = !0, o = s || 0, s = 0, a = l.length, t = !0; l && a > o; o++)
                    if (l[o].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    } t = !1, l && (d ? d.length && c(d.shift()) : i ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var n = l.length;
                        ! function r(t) {
                            ae.each(t, function(t, i) {
                                var n = ae.type(i);
                                "function" === n ? e.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                            })
                        }(arguments), t ? a = l.length : i && (s = n, c(i))
                    }
                    return this
                },
                remove: function() {
                    return l && ae.each(arguments, function(e, i) {
                        for (var n;
                            (n = ae.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (a >= n && a--, o >= n && o--)
                    }), this
                },
                has: function(e) {
                    return e ? ae.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], a = 0, this
                },
                disable: function() {
                    return l = d = i = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return d = void 0, i || u.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, i) {
                    return !l || n && !d || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? d.push(i) : c(i)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return u
    }, ae.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", ae.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ae.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ae.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ae.Deferred(function(i) {
                            ae.each(t, function(t, r) {
                                var o = ae.isFunction(e[t]) && e[t];
                                a[r[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ae.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ae.extend(e, n) : n
                    }
                },
                a = {};
            return n.pipe = n.then, ae.each(t, function(e, r) {
                var o = r[2],
                    s = r[3];
                n[r[1]] = o.add, s && o.add(function() {
                    i = s
                }, t[1 ^ e][2].disable, t[2][2].lock), a[r[0]] = function() {
                    return a[r[0] + "With"](this === a ? n : this, arguments), this
                }, a[r[0] + "With"] = o.fireWith
            }), n.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            var t, i, n, a = 0,
                r = Q.call(arguments),
                o = r.length,
                s = 1 !== o || e && ae.isFunction(e.promise) ? o : 0,
                l = 1 === s ? e : ae.Deferred(),
                d = function(e, i, n) {
                    return function(a) {
                        i[e] = this, n[e] = arguments.length > 1 ? Q.call(arguments) : a, n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                    }
                };
            if (o > 1)
                for (t = new Array(o), i = new Array(o), n = new Array(o); o > a; a++) r[a] && ae.isFunction(r[a].promise) ? r[a].promise().done(d(a, n, r)).fail(l.reject).progress(d(a, i, t)) : --s;
            return s || l.resolveWith(n, r), l.promise()
        }
    });
    var xe;
    ae.fn.ready = function(e) {
        return ae.ready.promise().done(e), this
    }, ae.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ae.readyWait++ : ae.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ae.readyWait : !ae.isReady) {
                if (!fe.body) return setTimeout(ae.ready);
                ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (xe.resolveWith(fe, [ae]), ae.fn.triggerHandler && (ae(fe).triggerHandler("ready"), ae(fe).off("ready")))
            }
        }
    }), ae.ready.promise = function(t) {
        if (!xe)
            if (xe = ae.Deferred(), "complete" === fe.readyState) setTimeout(ae.ready);
            else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            fe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var i = !1;
            try {
                i = null == e.frameElement && fe.documentElement
            } catch (n) {}
            i && i.doScroll && ! function a() {
                if (!ae.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(a, 50)
                    }
                    o(), ae.ready()
                }
            }()
        }
        return xe.promise(t)
    };
    var _e, Ce = "undefined";
    for (_e in ae(ie)) break;
    ie.ownLast = "0" !== _e, ie.inlineBlockNeedsLayout = !1, ae(function() {
            var e, t, i, n;
            i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ie.deleteExpando = !1
                }
            }
            e = null
        }(), ae.acceptData = function(e) {
            var t = ae.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ke = /([A-Z])/g;
    ae.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ae.cache[e[ae.expando]] : e[ae.expando], !!e && !d(e)
        },
        data: function(e, t, i) {
            return c(e, t, i)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, i) {
            return c(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }), ae.fn.extend({
        data: function(e, t) {
            var i, n, a, r = this[0],
                o = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (a = ae.data(r), 1 === r.nodeType && !ae._data(r, "parsedAttrs"))) {
                    for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = ae.camelCase(n.slice(5)), l(r, n, a[n])));
                    ae._data(r, "parsedAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                ae.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ae.data(this, e, t)
            }) : r ? l(r, e, ae.data(r, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                ae.removeData(this, e)
            })
        }
    }), ae.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = ae._data(e, t), i && (!n || ae.isArray(i) ? n = ae._data(e, t, ae.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = ae.queue(e, t),
                n = i.length,
                a = i.shift(),
                r = ae._queueHooks(e, t),
                o = function() {
                    ae.dequeue(e, t)
                };
            "inprogress" === a && (a = i.shift(), n--), a && ("fx" === t && i.unshift("inprogress"), delete r.stop, a.call(e, o, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return ae._data(e, i) || ae._data(e, i, {
                empty: ae.Callbacks("once memory").add(function() {
                    ae._removeData(e, t + "queue"), ae._removeData(e, i)
                })
            })
        }
    }), ae.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = ae.queue(this, e, t);
                ae._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && ae.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ae.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                a = ae.Deferred(),
                r = this,
                o = this.length,
                s = function() {
                    --n || a.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) i = ae._data(r[o], e + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
            return s(), a.promise(t)
        }
    });
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        $e = ["Top", "Right", "Bottom", "Left"],
        De = function(e, t) {
            return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
        },
        Ie = ae.access = function(e, t, i, n, a, r, o) {
            var s = 0,
                l = e.length,
                d = null == i;
            if ("object" === ae.type(i)) {
                a = !0;
                for (s in i) ae.access(e, t, s, i[s], !0, r, o)
            } else if (void 0 !== n && (a = !0, ae.isFunction(n) || (o = !0), d && (o ? (t.call(e, n), t = null) : (d = t, t = function(e, t, i) {
                    return d.call(ae(e), i)
                })), t))
                for (; l > s; s++) t(e[s], i, o ? n : n.call(e[s], s, t(e[s], i)));
            return a ? e : d ? t.call(e) : l ? t(e[0], i) : r
        },
        Ae = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = fe.createElement("input"),
            t = fe.createElement("div"),
            i = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, i.appendChild(e), ie.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                ie.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
            ie.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                ie.deleteExpando = !1
            }
        }
    }(),
    function() {
        var t, i, n = fe.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (ie[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), ie[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var Ne = /^(?:input|select|textarea)$/i,
        Ee = /^key/,
        Pe = /^(?:mouse|pointer|contextmenu)|click/,
        Me = /^(?:focusinfocus|focusoutblur)$/,
        Oe = /^([^.]*)(?:\.(.+)|)$/;
    ae.event = {
        global: {},
        add: function(e, t, i, n, a) {
            var r, o, s, l, d, c, u, h, p, f, m, g = ae._data(e);
            if (g) {
                for (i.handler && (l = i, i = l.handler, a = l.selector), i.guid || (i.guid = ae.guid++), (o = g.events) || (o = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return typeof ae === Ce || e && ae.event.triggered === e.type ? void 0 : ae.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) r = Oe.exec(t[s]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (d = ae.event.special[p] || {}, p = (a ? d.delegateType : d.bindType) || p, d = ae.event.special[p] || {}, u = ae.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: a,
                    needsContext: a && ae.expr.match.needsContext.test(a),
                    namespace: f.join(".")
                }, l), (h = o[p]) || (h = o[p] = [], h.delegateCount = 0, d.setup && d.setup.call(e, n, f, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), a ? h.splice(h.delegateCount++, 0, u) : h.push(u), ae.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, i, n, a) {
            var r, o, s, l, d, c, u, h, p, f, m, g = ae.hasData(e) && ae._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(be) || [""], d = t.length; d--;)
                    if (s = Oe.exec(t[d]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (u = ae.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, h = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) o = h[r], !a && m !== o.origType || i && i.guid !== o.guid || s && !s.test(o.namespace) || n && n !== o.selector && ("**" !== n || !o.selector) || (h.splice(r, 1), o.selector && h.delegateCount--, u.remove && u.remove.call(e, o));
                        l && !h.length && (u.teardown && u.teardown.call(e, f, g.handle) !== !1 || ae.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) ae.event.remove(e, p + t[d], i, n, !0);
                ae.isEmptyObject(c) && (delete g.handle, ae._removeData(e, "events"))
            }
        },
        trigger: function(t, i, n, a) {
            var r, o, s, l, d, c, u, h = [n || fe],
                p = te.call(t, "type") ? t.type : t,
                f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Me.test(p + ae.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), o = p.indexOf(":") < 0 && "on" + p, t = t[ae.expando] ? t : new ae.Event(p, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : ae.makeArray(i, [t]), d = ae.event.special[p] || {}, a || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!a && !d.noBubble && !ae.isWindow(n)) {
                    for (l = d.delegateType || p, Me.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), c = s;
                    c === (n.ownerDocument || fe) && h.push(c.defaultView || c.parentWindow || e)
                }
                for (u = 0;
                    (s = h[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : d.bindType || p, r = (ae._data(s, "events") || {})[t.type] && ae._data(s, "handle"), r && r.apply(s, i), r = o && s[o], r && r.apply && ae.acceptData(s) && (t.result = r.apply(s, i), t.result === !1 && t.preventDefault());
                if (t.type = p, !a && !t.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), i) === !1) && ae.acceptData(n) && o && n[p] && !ae.isWindow(n)) {
                    c = n[o], c && (n[o] = null), ae.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    ae.event.triggered = void 0, c && (n[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = ae.event.fix(e);
            var t, i, n, a, r, o = [],
                s = Q.call(arguments),
                l = (ae._data(this, "events") || {})[e.type] || [],
                d = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (o = ae.event.handlers.call(this, e, l), t = 0;
                    (a = o[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = a.elem, r = 0;
                        (n = a.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, i = ((ae.event.special[n.origType] || {}).handle || n.handler).apply(a.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, a, r, o = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (a = [], r = 0; s > r; r++) n = t[r], i = n.selector + " ", void 0 === a[i] && (a[i] = n.needsContext ? ae(i, this).index(l) >= 0 : ae.find(i, this, null, [l]).length),
                            a[i] && a.push(n);
                        a.length && o.push({
                            elem: l,
                            handlers: a
                        })
                    } return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }), o
        },
        fix: function(e) {
            if (e[ae.expando]) return e;
            var t, i, n, a = e.type,
                r = e,
                o = this.fixHooks[a];
            for (o || (this.fixHooks[a] = o = Pe.test(a) ? this.mouseHooks : Ee.test(a) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(r), t = n.length; t--;) i = n[t], e[i] = r[i];
            return e.target || (e.target = r.srcElement || fe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, a, r = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || fe, a = n.documentElement, i = n.body, e.pageX = t.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ae.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ae.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var a = ae.extend(new ae.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ae.event.trigger(a, null, t) : ae.event.dispatch.call(t, a), a.isDefaultPrevented() && i.preventDefault()
        }
    }, ae.removeEvent = fe.removeEventListener ? function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function(e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === Ce && (e[n] = null), e.detachEvent(n, i))
    }, ae.Event = function(e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : p) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
    }, ae.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ae.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    a = e.relatedTarget,
                    r = e.handleObj;
                return (!a || a !== n && !ae.contains(n, a)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ie.submitBubbles || (ae.event.special.submit = {
        setup: function() {
            return ae.nodeName(this, "form") ? !1 : void ae.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    i = ae.nodeName(t, "input") || ae.nodeName(t, "button") ? t.form : void 0;
                i && !ae._data(i, "submitBubbles") && (ae.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), ae._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ae.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ae.nodeName(this, "form") ? !1 : void ae.event.remove(this, "._submit")
        }
    }), ie.changeBubbles || (ae.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ae.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ae.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ae.event.simulate("change", this, e, !0)
            })), !1) : void ae.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !ae._data(t, "changeBubbles") && (ae.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ae.event.simulate("change", this.parentNode, e, !0)
                }), ae._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ae.event.remove(this, "._change"), !Ne.test(this.nodeName)
        }
    }), ie.focusinBubbles || ae.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            ae.event.simulate(t, e.target, ae.event.fix(e), !0)
        };
        ae.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    a = ae._data(n, t);
                a || n.addEventListener(e, i, !0), ae._data(n, t, (a || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    a = ae._data(n, t) - 1;
                a ? ae._data(n, t, a) : (n.removeEventListener(e, i, !0), ae._removeData(n, t))
            }
        }
    }), ae.fn.extend({
        on: function(e, t, i, n, a) {
            var r, o;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (r in e) this.on(r, t, i, e[r], a);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === a && (o = n, n = function(e) {
                return ae().off(e), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = ae.guid++)), this.each(function() {
                ae.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, a;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ae(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, t, e[a]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = p), this.each(function() {
                ae.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ae.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? ae.event.trigger(e, t, i, !0) : void 0
        }
    });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Re = / jQuery\d+="(?:null|\d+)"/g,
        je = new RegExp("<(?:" + Le + ")[\\s/>]", "i"),
        Be = /^\s+/,
        ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fe = /<([\w:]+)/,
        He = /<tbody/i,
        We = /<|&#?\w+;/,
        Ve = /<(?:script|style|link)/i,
        Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^$|\/(?:java|ecma)script/i,
        Ue = /^true\/(.*)/,
        Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Ke = m(fe),
        Ge = Ke.appendChild(fe.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, ae.extend({
        clone: function(e, t, i) {
            var n, a, r, o, s, l = ae.contains(e.ownerDocument, e);
            if (ie.html5Clone || ae.isXMLDoc(e) || !je.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ge.innerHTML = e.outerHTML, Ge.removeChild(r = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e)))
                for (n = g(r), s = g(e), o = 0; null != (a = s[o]); ++o) n[o] && C(a, n[o]);
            if (t)
                if (i)
                    for (s = s || g(e), n = n || g(r), o = 0; null != (a = s[o]); o++) _(a, n[o]);
                else _(e, r);
            return n = g(r, "script"), n.length > 0 && x(n, !l && g(e, "script")), n = s = a = null, r
        },
        buildFragment: function(e, t, i, n) {
            for (var a, r, o, s, l, d, c, u = e.length, h = m(t), p = [], f = 0; u > f; f++)
                if (r = e[f], r || 0 === r)
                    if ("object" === ae.type(r)) ae.merge(p, r.nodeType ? [r] : r);
                    else if (We.test(r)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (Fe.exec(r) || ["", ""])[1].toLowerCase(), c = Qe[l] || Qe._default, s.innerHTML = c[1] + r.replace(ze, "<$1><$2>") + c[2], a = c[0]; a--;) s = s.lastChild;
                if (!ie.leadingWhitespace && Be.test(r) && p.push(t.createTextNode(Be.exec(r)[0])), !ie.tbody)
                    for (r = "table" !== l || He.test(r) ? "<table>" !== c[1] || He.test(r) ? 0 : s : s.firstChild, a = r && r.childNodes.length; a--;) ae.nodeName(d = r.childNodes[a], "tbody") && !d.childNodes.length && r.removeChild(d);
                for (ae.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else p.push(t.createTextNode(r));
            for (s && h.removeChild(s), ie.appendChecked || ae.grep(g(p, "input"), v), f = 0; r = p[f++];)
                if ((!n || -1 === ae.inArray(r, n)) && (o = ae.contains(r.ownerDocument, r), s = g(h.appendChild(r), "script"), o && x(s), i))
                    for (a = 0; r = s[a++];) qe.test(r.type || "") && i.push(r);
            return s = null, h
        },
        cleanData: function(e, t) {
            for (var i, n, a, r, o = 0, s = ae.expando, l = ae.cache, d = ie.deleteExpando, c = ae.event.special; null != (i = e[o]); o++)
                if ((t || ae.acceptData(i)) && (a = i[s], r = a && l[a])) {
                    if (r.events)
                        for (n in r.events) c[n] ? ae.event.remove(i, n) : ae.removeEvent(i, n, r.handle);
                    l[a] && (delete l[a], d ? delete i[s] : typeof i.removeAttribute !== Ce ? i.removeAttribute(s) : i[s] = null, X.push(a))
                }
        }
    }), ae.fn.extend({
        text: function(e) {
            return Ie(this, function(e) {
                return void 0 === e ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var i, n = e ? ae.filter(e, this) : this, a = 0; null != (i = n[a]); a++) t || 1 !== i.nodeType || ae.cleanData(g(i)), i.parentNode && (t && ae.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ae.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ae.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return ae.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ie(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Re, "") : void 0;
                if (!("string" != typeof e || Ve.test(e) || !ie.htmlSerialize && je.test(e) || !ie.leadingWhitespace && Be.test(e) || Qe[(Fe.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ze, "<$1><$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (ae.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (a) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, ae.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = K.apply([], e);
            var i, n, a, r, o, s, l = 0,
                d = this.length,
                c = this,
                u = d - 1,
                h = e[0],
                p = ae.isFunction(h);
            if (p || d > 1 && "string" == typeof h && !ie.checkClone && Ye.test(h)) return this.each(function(i) {
                var n = c.eq(i);
                p && (e[0] = h.call(this, i, n.html())), n.domManip(e, t)
            });
            if (d && (s = ae.buildFragment(e, this[0].ownerDocument, !1, this), i = s.firstChild, 1 === s.childNodes.length && (s = i), i)) {
                for (r = ae.map(g(s, "script"), b), a = r.length; d > l; l++) n = s, l !== u && (n = ae.clone(n, !0, !0), a && ae.merge(r, g(n, "script"))), t.call(this[l], n, l);
                if (a)
                    for (o = r[r.length - 1].ownerDocument, ae.map(r, w), l = 0; a > l; l++) n = r[l], qe.test(n.type || "") && !ae._data(n, "globalEval") && ae.contains(o, n) && (n.src ? ae._evalUrl && ae._evalUrl(n.src) : ae.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xe, "")));
                s = i = null
            }
            return this
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ae.fn[e] = function(e) {
            for (var i, n = 0, a = [], r = ae(e), o = r.length - 1; o >= n; n++) i = n === o ? this : this.clone(!0), ae(r[n])[t](i), G.apply(a, i.get());
            return this.pushStack(a)
        }
    });
    var Ze, Je = {};
    ! function() {
        var e;
        ie.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = fe.getElementsByTagName("body")[0], i && i.style ? (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== Ce && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(fe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), i.removeChild(n), e) : void 0
        }
    }();
    var et, tt, it = /^margin/,
        nt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"),
        at = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        }, tt = function(e, t, i) {
            var n, a, r, o, s = e.style;
            return i = i || et(e), o = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, t)), nt.test(o) && it.test(t) && (n = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = i.width, s.width = n, s.minWidth = a, s.maxWidth = r)), void 0 === o ? o : o + ""
        }) : fe.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, i) {
            var n, a, r, o, s = e.style;
            return i = i || et(e), o = i ? i[t] : void 0, null == o && s && s[t] && (o = s[t]), nt.test(o) && !at.test(t) && (n = s.left, a = e.runtimeStyle, r = a && a.left, r && (a.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = n, r && (a.left = r)), void 0 === o ? o : o + "" || "auto"
        }),
        function() {
            function t() {
                var t, i, n, a;
                i = fe.getElementsByTagName("body")[0], i && i.style && (t = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, l = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(t, null) || {}).top, o = "4px" === (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width, a = t.appendChild(fe.createElement("div")), a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight), t.removeChild(a)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = t.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === a[0].offsetHeight, s && (a[0].style.display = "", a[1].style.display = "none", s = 0 === a[0].offsetHeight), i.removeChild(n))
            }
            var i, n, a, r, o, s, l;
            i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = i.getElementsByTagName("a")[0], n = a && a.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, ae.extend(ie, {
                reliableHiddenOffsets: function() {
                    return null == s && t(), s
                },
                boxSizingReliable: function() {
                    return null == o && t(), o
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    return null == l && t(), l
                }
            }))
        }(), ae.swap = function(e, t, i, n) {
            var a, r, o = {};
            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
            a = i.apply(e, n || []);
            for (r in t) e.style[r] = o[r];
            return a
        };
    var rt = /alpha\([^)]*\)/i,
        ot = /opacity\s*=\s*([^)]*)/,
        st = /^(none|table(?!-c[ea]).+)/,
        lt = new RegExp("^(" + Se + ")(.*)$", "i"),
        dt = new RegExp("^([+-])=(" + Se + ")", "i"),
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "O", "Moz", "ms"];
    ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = tt(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ie.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, r, o, s = ae.camelCase(t),
                    l = e.style;
                if (t = ae.cssProps[s] || (ae.cssProps[s] = $(l, s)), o = ae.cssHooks[t] || ae.cssHooks[s], void 0 === i) return o && "get" in o && void 0 !== (a = o.get(e, !1, n)) ? a : l[t];
                if (r = typeof i, "string" === r && (a = dt.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(ae.css(e, t)), r = "number"), null != i && i === i && ("number" !== r || ae.cssNumber[s] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (i = o.set(e, i, n))))) try {
                    l[t] = i
                } catch (d) {}
            }
        },
        css: function(e, t, i, n) {
            var a, r, o, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = $(e.style, s)), o = ae.cssHooks[t] || ae.cssHooks[s], o && "get" in o && (r = o.get(e, !0, i)), void 0 === r && (r = tt(e, t, n)), "normal" === r && t in ut && (r = ut[t]), "" === i || i ? (a = parseFloat(r), i === !0 || ae.isNumeric(a) ? a || 0 : r) : r
        }
    }), ae.each(["height", "width"], function(e, t) {
        ae.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? st.test(ae.css(e, "display")) && 0 === e.offsetWidth ? ae.swap(e, ct, function() {
                    return N(e, t, n)
                }) : N(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var a = n && et(e);
                return I(e, i, n ? A(e, t, n, ie.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, a), a) : 0)
            }
        }
    }), ie.opacity || (ae.cssHooks.opacity = {
        get: function(e, t) {
            return ot.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style,
                n = e.currentStyle,
                a = ae.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && "" === ae.trim(r.replace(rt, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = rt.test(r) ? r.replace(rt, a) : r + " " + a)
        }
    }), ae.cssHooks.marginRight = S(ie.reliableMarginRight, function(e, t) {
        return t ? ae.swap(e, {
            display: "inline-block"
        }, tt, [e, "marginRight"]) : void 0
    }), ae.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ae.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, a = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) a[e + $e[n] + t] = r[n] || r[n - 2] || r[0];
                return a
            }
        }, it.test(e) || (ae.cssHooks[e + t].set = I)
    }), ae.fn.extend({
        css: function(e, t) {
            return Ie(this, function(e, t, i) {
                var n, a, r = {},
                    o = 0;
                if (ae.isArray(t)) {
                    for (n = et(e), a = t.length; a > o; o++) r[t[o]] = ae.css(e, t[o], !1, n);
                    return r
                }
                return void 0 !== i ? ae.style(e, t, i) : ae.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return D(this, !0)
        },
        hide: function() {
            return D(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? ae(this).show() : ae(this).hide()
            })
        }
    }), ae.Tween = E, E.prototype = {
        constructor: E,
        init: function(e, t, i, n, a, r) {
            this.elem = e, this.prop = i, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (ae.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = E.propHooks[this.prop];
            return e && e.get ? e.get(this) : E.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = E.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
        }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ae.cssProps[e.prop]] || ae.cssHooks[e.prop]) ? ae.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ae.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ae.fx = E.prototype.init, ae.fx.step = {};
    var pt, ft, mt = /^(?:toggle|show|hide)$/,
        gt = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"),
        vt = /queueHooks$/,
        yt = [L],
        bt = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    a = gt.exec(t),
                    r = a && a[3] || (ae.cssNumber[e] ? "" : "px"),
                    o = (ae.cssNumber[e] || "px" !== r && +n) && gt.exec(ae.css(i.elem, e)),
                    s = 1,
                    l = 20;
                if (o && o[3] !== r) {
                    r = r || o[3], a = a || [], o = +n || 1;
                    do s = s || ".5", o /= s, ae.style(i.elem, e, o + r); while (s !== (s = i.cur() / n) && 1 !== s && --l)
                }
                return a && (o = i.start = +o || +n || 0, i.unit = r, i.end = a[1] ? o + (a[1] + 1) * a[2] : +a[2]), i
            }]
        };
    ae.Animation = ae.extend(j, {
            tweener: function(e, t) {
                ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, a = e.length; a > n; n++) i = e[n], bt[i] = bt[i] || [], bt[i].unshift(t)
            },
            prefilter: function(e, t) {
                t ? yt.unshift(e) : yt.push(e)
            }
        }), ae.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? ae.extend({}, e) : {
                complete: i || !i && t || ae.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !ae.isFunction(t) && t
            };
            return n.duration = ae.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ae.fx.speeds ? ae.fx.speeds[n.duration] : ae.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ae.isFunction(n.old) && n.old.call(this), n.queue && ae.dequeue(this, n.queue)
            }, n
        }, ae.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(De).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(e, t, i, n) {
                var a = ae.isEmptyObject(e),
                    r = ae.speed(t, i, n),
                    o = function() {
                        var t = j(this, ae.extend({}, e), r);
                        (a || ae._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, a || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
            },
            stop: function(e, t, i) {
                var n = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        a = null != e && e + "queueHooks",
                        r = ae.timers,
                        o = ae._data(this);
                    if (a) o[a] && o[a].stop && n(o[a]);
                    else
                        for (a in o) o[a] && o[a].stop && vt.test(a) && n(o[a]);
                    for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(i), t = !1, r.splice(a, 1));
                    (t || !i) && ae.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, i = ae._data(this),
                        n = i[e + "queue"],
                        a = i[e + "queueHooks"],
                        r = ae.timers,
                        o = n ? n.length : 0;
                    for (i.finish = !0, ae.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; o > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), ae.each(["toggle", "show", "hide"], function(e, t) {
            var i = ae.fn[t];
            ae.fn[t] = function(e, n, a) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(M(t, !0), e, n, a)
            }
        }), ae.each({
            slideDown: M("show"),
            slideUp: M("hide"),
            slideToggle: M("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ae.fn[e] = function(e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), ae.timers = [], ae.fx.tick = function() {
            var e, t = ae.timers,
                i = 0;
            for (pt = ae.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || ae.fx.stop(), pt = void 0
        }, ae.fx.timer = function(e) {
            ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop()
        }, ae.fx.interval = 13, ae.fx.start = function() {
            ft || (ft = setInterval(ae.fx.tick, ae.fx.interval))
        }, ae.fx.stop = function() {
            clearInterval(ft), ft = null
        }, ae.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ae.fn.delay = function(e, t) {
            return e = ae.fx ? ae.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var e, t, i, n, a;
            t = fe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = fe.createElement("select"), a = i.appendChild(fe.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== t.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!e.value, ie.optSelected = a.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !a.disabled, e = fe.createElement("input"), e.setAttribute("value", ""), ie.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ie.radioValue = "t" === e.value
        }();
    var wt = /\r/g;
    ae.fn.extend({
        val: function(e) {
            var t, i, n, a = this[0];
            return arguments.length ? (n = ae.isFunction(e), this.each(function(i) {
                var a;
                1 === this.nodeType && (a = n ? e.call(this, i, ae(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : ae.isArray(a) && (a = ae.map(a, function(e) {
                    return null == e ? "" : e + ""
                })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
            })) : a ? (t = ae.valHooks[a.type] || ae.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(a, "value")) ? i : (i = a.value, "string" == typeof i ? i.replace(wt, "") : null == i ? "" : i)) : void 0
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ae.find.attr(e, "value");
                    return null != t ? t : ae.trim(ae.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, a = e.selectedIndex, r = "select-one" === e.type || 0 > a, o = r ? null : [], s = r ? a + 1 : n.length, l = 0 > a ? s : r ? a : 0; s > l; l++)
                        if (i = n[l], !(!i.selected && l !== a || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ae.nodeName(i.parentNode, "optgroup"))) {
                            if (t = ae(i).val(), r) return t;
                            o.push(t)
                        } return o
                },
                set: function(e, t) {
                    for (var i, n, a = e.options, r = ae.makeArray(t), o = a.length; o--;)
                        if (n = a[o], ae.inArray(ae.valHooks.option.get(n), r) >= 0) try {
                            n.selected = i = !0
                        } catch (s) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), a
                }
            }
        }
    }), ae.each(["radio", "checkbox"], function() {
        ae.valHooks[this] = {
            set: function(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) >= 0 : void 0
            }
        }, ie.checkOn || (ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt, _t, Ct = ae.expr.attrHandle,
        Tt = /^(?:checked|selected)$/i,
        kt = ie.getSetAttribute,
        St = ie.input;
    ae.fn.extend({
        attr: function(e, t) {
            return Ie(this, ae.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ae.removeAttr(this, e)
            })
        }
    }), ae.extend({
        attr: function(e, t, i) {
            var n, a, r = e.nodeType;
            return e && 3 !== r && 8 !== r && 2 !== r ? typeof e.getAttribute === Ce ? ae.prop(e, t, i) : (1 === r && ae.isXMLDoc(e) || (t = t.toLowerCase(), n = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? _t : xt)), void 0 === i ? n && "get" in n && null !== (a = n.get(e, t)) ? a : (a = ae.find.attr(e, t), null == a ? void 0 : a) : null !== i ? n && "set" in n && void 0 !== (a = n.set(e, i, t)) ? a : (e.setAttribute(t, i + ""), i) : void ae.removeAttr(e, t)) : void 0
        },
        removeAttr: function(e, t) {
            var i, n, a = 0,
                r = t && t.match(be);
            if (r && 1 === e.nodeType)
                for (; i = r[a++];) n = ae.propFix[i] || i, ae.expr.match.bool.test(i) ? St && kt || !Tt.test(i) ? e[n] = !1 : e[ae.camelCase("default-" + i)] = e[n] = !1 : ae.attr(e, i, ""), e.removeAttribute(kt ? i : n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), _t = {
        set: function(e, t, i) {
            return t === !1 ? ae.removeAttr(e, i) : St && kt || !Tt.test(i) ? e.setAttribute(!kt && ae.propFix[i] || i, i) : e[ae.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = Ct[t] || ae.find.attr;
        Ct[t] = St && kt || !Tt.test(t) ? function(e, t, n) {
            var a, r;
            return n || (r = Ct[t], Ct[t] = a, a = null != i(e, t, n) ? t.toLowerCase() : null, Ct[t] = r), a
        } : function(e, t, i) {
            return i ? void 0 : e[ae.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), St && kt || (ae.attrHooks.value = {
        set: function(e, t, i) {
            return ae.nodeName(e, "input") ? void(e.defaultValue = t) : xt && xt.set(e, t, i)
        }
    }), kt || (xt = {
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, ae.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: xt.set
    }, ae.attrHooks.contenteditable = {
        set: function(e, t, i) {
            xt.set(e, "" === t ? !1 : t, i)
        }
    }, ae.each(["width", "height"], function(e, t) {
        ae.attrHooks[t] = {
            set: function(e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), ie.style || (ae.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var $t = /^(?:input|select|textarea|button|object)$/i,
        Dt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function(e, t) {
            return Ie(this, ae.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ae.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), ae.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, i) {
            var n, a, r, o = e.nodeType;
            return e && 3 !== o && 8 !== o && 2 !== o ? (r = 1 !== o || !ae.isXMLDoc(e), r && (t = ae.propFix[t] || t, a = ae.propHooks[t]), void 0 !== i ? a && "set" in a && void 0 !== (n = a.set(e, i, t)) ? n : e[t] = i : a && "get" in a && null !== (n = a.get(e, t)) ? n : e[t]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : $t.test(e.nodeName) || Dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), ie.hrefNormalized || ae.each(["href", "src"], function(e, t) {
        ae.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ie.optSelected || (ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ae.propFix[this.toLowerCase()] = this
    }), ie.enctype || (ae.propFix.enctype = "encoding");
    var It = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function(e) {
            var t, i, n, a, r, o, s = 0,
                l = this.length,
                d = "string" == typeof e && e;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).addClass(e.call(this, t, this.className))
            });
            if (d)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(It, " ") : " ")) {
                        for (r = 0; a = t[r++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        o = ae.trim(n), i.className !== o && (i.className = o)
                    } return this
        },
        removeClass: function(e) {
            var t, i, n, a, r, o, s = 0,
                l = this.length,
                d = 0 === arguments.length || "string" == typeof e && e;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).removeClass(e.call(this, t, this.className))
            });
            if (d)
                for (t = (e || "").match(be) || []; l > s; s++)
                    if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(It, " ") : "")) {
                        for (r = 0; a = t[r++];)
                            for (; n.indexOf(" " + a + " ") >= 0;) n = n.replace(" " + a + " ", " ");
                        o = e ? ae.trim(n) : "", i.className !== o && (i.className = o)
                    } return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(ae.isFunction(e) ? function(i) {
                ae(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function() {
                if ("string" === i)
                    for (var t, n = 0, a = ae(this), r = e.match(be) || []; t = r[n++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else(i === Ce || "boolean" === i) && (this.className && ae._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ae._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(It, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ae.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var At = ae.now(),
        Nt = /\?/,
        Et = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ae.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            a = ae.trim(t + "");
        return a && !ae.trim(a.replace(Et, function(e, t, a, r) {
            return i && t && (n = 0), 0 === n ? e : (i = a || t, n += !r - !a, "")
        })) ? Function("return " + a)() : ae.error("Invalid JSON: " + t)
    }, ae.parseXML = function(t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (a) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), i
    };
    var Pt, Mt, Ot = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Bt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Ft = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ht = {},
        Wt = {},
        Vt = "*/".concat("*");
    try {
        Mt = location.href
    } catch (Yt) {
        Mt = fe.createElement("a"), Mt.href = "", Mt = Mt.href
    }
    Pt = Ft.exec(Mt.toLowerCase()) || [], ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Mt,
            type: "GET",
            isLocal: jt.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ae.parseJSON,
                "text xml": ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? F(F(e, ae.ajaxSettings), t) : F(ae.ajaxSettings, e)
        },
        ajaxPrefilter: B(Ht),
        ajaxTransport: B(Wt),
        ajax: function(e, t) {
            function i(e, t, i, n) {
                var a, c, v, y, w, _ = t;
                2 !== b && (b = 2, s && clearTimeout(s), d = void 0, o = n || "", x.readyState = e > 0 ? 4 : 0, a = e >= 200 && 300 > e || 304 === e, i && (y = H(u, x, i)), y = W(u, y, x, a), a ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ae.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ae.etag[r] = w)), 204 === e || "HEAD" === u.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, c = y.data, v = y.error, a = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", a ? f.resolveWith(h, [c, _, x]) : f.rejectWith(h, [x, _, v]), x.statusCode(g), g = void 0, l && p.trigger(a ? "ajaxSuccess" : "ajaxError", [x, u, a ? c : v]), m.fireWith(h, [x, _]), l && (p.trigger("ajaxComplete", [x, u]), --ae.active || ae.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, a, r, o, s, l, d, c, u = ae.ajaxSetup({}, t),
                h = u.context || u,
                p = u.context && (h.nodeType || h.jquery) ? ae(h) : ae.event,
                f = ae.Deferred(),
                m = ae.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; t = Rt.exec(o);) c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return b || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (u.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return d && d.abort(t), i(0, t), this
                    }
                };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((e || u.url || Mt) + "").replace(Ot, "").replace(zt, Pt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = ae.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = Ft.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Pt[1] && n[2] === Pt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ae.param(u.data, u.traditional)), z(Ht, u, t, x), 2 === b) return x;
            l = ae.event && u.global, l && 0 === ae.active++ && ae.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Bt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Nt.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Lt.test(r) ? r.replace(Lt, "$1_=" + At++) : r + (Nt.test(r) ? "&" : "?") + "_=" + At++)), u.ifModified && (ae.lastModified[r] && x.setRequestHeader("If-Modified-Since", ae.lastModified[r]), ae.etag[r] && x.setRequestHeader("If-None-Match", ae.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) x.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(h, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (a in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[a](u[a]);
            if (d = z(Wt, u, t, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, d.send(v, i)
                } catch (_) {
                    if (!(2 > b)) throw _;
                    i(-1, _)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, i) {
            return ae.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return ae.get(e, void 0, t, "script")
        }
    }), ae.each(["get", "post"], function(e, t) {
        ae[t] = function(e, i, n, a) {
            return ae.isFunction(i) && (a = a || n, n = i, i = void 0), ae.ajax({
                url: e,
                type: t,
                dataType: a,
                data: i,
                success: n
            })
        }
    }), ae._evalUrl = function(e) {
        return ae.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ae.fn.extend({
        wrapAll: function(e) {
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ae(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(ae.isFunction(e) ? function(t) {
                ae(this).wrapInner(e.call(this, t))
            } : function() {
                var t = ae(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ae.isFunction(e);
            return this.each(function(i) {
                ae(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ae.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || ae.css(e, "display"))
    }, ae.expr.filters.visible = function(e) {
        return !ae.expr.filters.hidden(e)
    };
    var qt = /%20/g,
        Ut = /\[\]$/,
        Xt = /\r?\n/g,
        Qt = /^(?:submit|button|image|reset|file)$/i,
        Kt = /^(?:input|select|textarea|keygen)/i;
    ae.param = function(e, t) {
        var i, n = [],
            a = function(e, t) {
                t = ae.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
            a(this.name, this.value)
        });
        else
            for (i in e) V(i, e[i], t, a);
        return n.join("&").replace(qt, "+")
    }, ae.fn.extend({
        serialize: function() {
            return ae.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Kt.test(this.nodeName) && !Qt.test(e) && (this.checked || !Ae.test(e))
            }).map(function(e, t) {
                var i = ae(this).val();
                return null == i ? null : ae.isArray(i) ? ae.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Xt, "\r\n")
                }
            }).get()
        }
    }), ae.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || q()
    } : Y;
    var Gt = 0,
        Zt = {},
        Jt = ae.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Zt) Zt[e](void 0, !0)
    }), ie.cors = !!Jt && "withCredentials" in Jt, Jt = ie.ajax = !!Jt, Jt && ae.ajaxTransport(function(e) {
        if (!e.crossDomain || ie.cors) {
            var t;
            return {
                send: function(i, n) {
                    var a, r = e.xhr(),
                        o = ++Gt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) r[a] = e.xhrFields[a];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) void 0 !== i[a] && r.setRequestHeader(a, i[a] + "");
                    r.send(e.hasContent && e.data || null), t = function(i, a) {
                        var s, l, d;
                        if (t && (a || 4 === r.readyState))
                            if (delete Zt[o], t = void 0, r.onreadystatechange = ae.noop, a) 4 !== r.readyState && r.abort();
                            else {
                                d = {}, s = r.status, "string" == typeof r.responseText && (d.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (c) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                            } d && n(s, l, d, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Zt[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ae.globalEval(e), e
            }
        }
    }), ae.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ae.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i = fe.head || ae("head")[0] || fe.documentElement;
            return {
                send: function(n, a) {
                    t = fe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || a(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var ei = [],
        ti = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ei.pop() || ae.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), ae.ajaxPrefilter("json jsonp", function(t, i, n) {
        var a, r, o, s = t.jsonp !== !1 && (ti.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ti.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ti, "$1" + a) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function() {
            return o || ae.error(a + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = e[a], e[a] = function() {
            o = arguments
        }, n.always(function() {
            e[a] = r, t[a] && (t.jsonpCallback = i.jsonpCallback, ei.push(a)), o && ae.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), ae.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || fe;
        var n = ue.exec(e),
            a = !i && [];
        return n ? [t.createElement(n[1])] : (n = ae.buildFragment([e], t, a), a && a.length && ae(a).remove(), ae.merge([], n.childNodes))
    };
    var ii = ae.fn.load;
    ae.fn.load = function(e, t, i) {
        if ("string" != typeof e && ii) return ii.apply(this, arguments);
        var n, a, r, o = this,
            s = e.indexOf(" ");
        return s >= 0 && (n = ae.trim(e.slice(s, e.length)), e = e.slice(0, s)), ae.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && ae.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, o.html(n ? ae("<div>").append(ae.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            o.each(i, a || [e.responseText, t, e])
        }), this
    }, ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ae.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ae.expr.filters.animated = function(e) {
        return ae.grep(ae.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ni = e.document.documentElement;
    ae.offset = {
        setOffset: function(e, t, i) {
            var n, a, r, o, s, l, d, c = ae.css(e, "position"),
                u = ae(e),
                h = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), r = ae.css(e, "top"), l = ae.css(e, "left"), d = ("absolute" === c || "fixed" === c) && ae.inArray("auto", [r, l]) > -1, d ? (n = u.position(), o = n.top, a = n.left) : (o = parseFloat(r) || 0, a = parseFloat(l) || 0), ae.isFunction(t) && (t = t.call(e, i, s)), null != t.top && (h.top = t.top - s.top + o), null != t.left && (h.left = t.left - s.left + a), "using" in t ? t.using.call(e, h) : u.css(h)
        }
    }, ae.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ae.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                a = this[0],
                r = a && a.ownerDocument;
            return r ? (t = r.documentElement, ae.contains(t, a) ? (typeof a.getBoundingClientRect !== Ce && (n = a.getBoundingClientRect()), i = U(r), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (i = e.offset()), i.top += ae.css(e[0], "borderTopWidth", !0), i.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - ae.css(n, "marginTop", !0),
                    left: t.left - i.left - ae.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || ni; e && !ae.nodeName(e, "html") && "static" === ae.css(e, "position");) e = e.offsetParent;
                return e || ni
            })
        }
    }), ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = /Y/.test(t);
        ae.fn[e] = function(n) {
            return Ie(this, function(e, n, a) {
                var r = U(e);
                return void 0 === a ? r ? t in r ? r[t] : r.document.documentElement[n] : e[n] : void(r ? r.scrollTo(i ? ae(r).scrollLeft() : a, i ? a : ae(r).scrollTop()) : e[n] = a)
            }, e, n, arguments.length, null)
        }
    }), ae.each(["top", "left"], function(e, t) {
        ae.cssHooks[t] = S(ie.pixelPosition, function(e, i) {
            return i ? (i = tt(e, t), nt.test(i) ? ae(e).position()[t] + "px" : i) : void 0
        })
    }), ae.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ae.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            ae.fn[n] = function(n, a) {
                var r = arguments.length && (i || "boolean" != typeof n),
                    o = i || (n === !0 || a === !0 ? "margin" : "border");
                return Ie(this, function(t, i, n) {
                    var a;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === n ? ae.css(t, i, o) : ae.style(t, i, n, o)
                }, t, r ? n : void 0, r, null)
            }
        })
    }), ae.fn.size = function() {
        return this.length
    }, ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ae
    });
    var ai = e.jQuery,
        ri = e.$;
    return ae.noConflict = function(t) {
        return e.$ === ae && (e.$ = ri), t && e.jQuery === ae && (e.jQuery = ai), ae
    }, typeof t === Ce && (e.jQuery = e.$ = ae), ae
}), ! function(e) {
    e.fn.countdown = function(t, i) {
        function n() {
            var e = new Date(a.date),
                t = o(),
                n = e - t;
            if (0 > n) return clearInterval(s), void(i && "function" == typeof i && i());
            var l = 1e3,
                d = 60 * l,
                c = 60 * d,
                u = 24 * c,
                h = Math.floor(n / u),
                p = Math.floor(n % u / c),
                f = Math.floor(n % c / d),
                m = Math.floor(n % d / l);
            h = String(h).length >= 2 ? h : "0" + h, p = String(p).length >= 2 ? p : "0" + p, f = String(f).length >= 2 ? f : "0" + f, m = String(m).length >= 2 ? m : "0" + m;
            var g = 1 === h ? a.day : a.days,
                v = 1 === p ? a.hour : a.hours,
                y = 1 === f ? a.minute : a.minutes,
                b = 1 === m ? a.second : a.seconds;
            h -= 1, p -= 13, r.find(".days").text(h), r.find(".hours").text(p), r.find(".minutes").text(f), r.find(".seconds").text(m), r.find(".days_text").text(g), r.find(".hours_text").text(v), r.find(".minutes_text").text(y), r.find(".seconds_text").text(b)
        }
        var a = e.extend({
            date: null,
            offset: null,
            day: "Day",
            days: "Days",
            hour: "Hour",
            hours: "Hours",
            minute: "Minute",
            minutes: "Minutes",
            second: "Second",
            seconds: "Seconds"
        }, t);
        a.date || e.error("Date is not defined."), Date.parse(a.date) || e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");
        var r = this,
            o = function() {
                var e = new Date,
                    t = e.getTime() + 6e4 * e.getTimezoneOffset(),
                    i = new Date(t + 36e5 * a.offset);
                return i
            },
            s = setInterval(n, 1e3)
    }
}(jQuery);
var Shira;
if (! function(e, t) {
        ! function(e) {
            e.Watcher = function(i, n) {
                this.element = i, this.options = t.extend({}, e.Watcher.defaults, n)
            }, e.Watcher.defaults = {
                fixClass: "scroll-fix",
                fixTop: 0,
                fixOffset: 0,
                unfixOffset: 0,
                onUpdateFixed: null,
                syncSize: !0,
                syncPosition: !0,
                style: !0
            }, e.Watcher.prototype = {
                element: null,
                substitute: null,
                options: null,
                fixed: !1,
                attached: !1,
                getElementX: function(e) {
                    var t = 0;
                    do t += e.offsetLeft; while (e = e.offsetParent);
                    return t
                },
                getElementY: function(e) {
                    var t = 0;
                    do t += e.offsetTop; while (e = e.offsetParent);
                    return t
                },
                fix: function() {
                    this.substitute = t(this.element.cloneNode(!1)).css("visibility", "hidden").height(t(this.element).height()).insertAfter(this.element)[0], this.options.style && t(this.element).css("position", "fixed").css("top", this.options.fixTop + "px"), t(this.element).addClass(this.options.fixClass)
                },
                updateFixed: function() {
                    if (this.options.syncSize && t(this.element).width(t(this.substitute).width()), this.options.syncPosition) {
                        var e = t(window).scrollLeft(),
                            i = this.getElementX(this.substitute);
                        t(this.element).css("left", i - e + "px")
                    }
                    null !== this.options.onUpdateFixed && this.options.onUpdateFixed(this)
                },
                unfix: function() {
                    t(this.substitute).remove(), this.substitute = null;
                    var e = {};
                    this.options.syncPosition && (e.left = ""), this.options.syncSize && (e.width = ""), this.options.style && (e.position = "", e.top = ""), t(this.element).css(e).removeClass(this.options.fixClass)
                },
                attach: function() {
                    if (this.attached) throw new Error("Already attached");
                    var e = this;
                    this.updateEventHandler = function() {
                        e.pulse()
                    }, t(window).scroll(this.updateEventHandler).resize(this.updateEventHandler), this.attached = !0, this.pulse()
                },
                detach: function() {
                    if (!this.attached) throw new Error("Not attached");
                    t(window).unbind("scroll", this.updateEventHandler).unbind("resize", this.updateEventHandler), this.attached = !1
                },
                pulse: function() {
                    var e = t(window).scrollTop();
                    this.fixed ? e <= this.getElementY(this.substitute) + this.options.unfixOffset ? (this.unfix(), this.fixed = !1) : this.updateFixed() : e >= this.getElementY(this.element) + this.options.fixOffset && (this.fix(), this.fixed = !0, this.updateFixed())
                }
            }, t.fn.scrollFix = function(t) {
                var i = this[0];
                if (i) {
                    var n = new e.Watcher(i, t);
                    return n.attach(), n
                }
                return !1
            }
        }(e.ScrollFix || (e.ScrollFix = {}))
    }(Shira || (Shira = {}), jQuery), $(".dropdown").on("show.bs.dropdown", function() {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown()
    }), $(".dropdown").on("hide.bs.dropdown", function() {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp()
    }), $("#bar").scrollFix(), jQuery(document).ready(function() {
        var e = 220,
            t = 500;
        jQuery(window).scroll(function() {
            jQuery(this).scrollTop() > e ? jQuery(".back-to-top").fadeIn(t) : jQuery(".back-to-top").fadeOut(t)
        }), jQuery(".back-to-top").click(function(e) {
            return e.preventDefault(), jQuery("html, body").animate({
                scrollTop: 0
            }, t), !1
        })
    }), $(".collapse").on("shown.bs.collapse", function() {
        $(this).parent().find(".glyphicon-chevron-right").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down")
    }).on("hidden.bs.collapse", function() {
        $(this).parent().find(".glyphicon-chevron-down").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right")
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (+ function(e) {
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.alert");
                a || i.data("bs.alert", a = new n(this)), "string" == typeof t && a[t].call(i)
            })
        }
        var i = '[data-dismiss="alert"]',
            n = function(t) {
                e(t).on("click", i, this.close)
            };
        n.VERSION = "3.3.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(t) {
            function i() {
                o.detach().trigger("closed.bs.alert").remove()
            }
            var a = e(this),
                r = a.attr("data-target");
            r || (r = a.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            var o = e(r);
            t && t.preventDefault(), o.length || (o = a.closest(".alert")), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
        };
        var a = e.fn.alert;
        e.fn.alert = t, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
            return e.fn.alert = a, this
        }, e(document).on("click.bs.alert.data-api", i, n.prototype.close)
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.button"),
                    r = "object" == typeof t && t;
                a || n.data("bs.button", a = new i(this, r)), "toggle" == t ? a.toggle() : t && a.setState(t)
            })
        }
        var i = function(t, n) {
            this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.isLoading = !1
        };
        i.VERSION = "3.3.1", i.DEFAULTS = {
            loadingText: "loading..."
        }, i.prototype.setState = function(t) {
            var i = "disabled",
                n = this.$element,
                a = n.is("input") ? "val" : "html",
                r = n.data();
            t += "Text", null == r.resetText && n.data("resetText", n[a]()), setTimeout(e.proxy(function() {
                n[a](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
            }, this), 0)
        }, i.prototype.toggle = function() {
            var e = !0,
                t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var i = this.$element.find("input");
                "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            e && this.$element.toggleClass("active")
        };
        var n = e.fn.button;
        e.fn.button = t, e.fn.button.Constructor = i, e.fn.button.noConflict = function() {
            return e.fn.button = n, this
        }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var n = e(i.target);
            n.hasClass("btn") || (n = n.closest(".btn")), t.call(n, "toggle"), i.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
            e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.carousel"),
                    r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t),
                    o = "string" == typeof t ? t : r.slide;
                a || n.data("bs.carousel", a = new i(this, r)), "number" == typeof t ? a.to(t) : o ? a[o]() : r.interval && a.pause().cycle()
            })
        }
        var i = function(t, i) {
            this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
        };
        i.VERSION = "3.3.1", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, i.prototype.keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) {
                switch (e.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }
        }, i.prototype.cycle = function(t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, i.prototype.getItemIndex = function(e) {
            return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
        }, i.prototype.getItemForDirection = function(e, t) {
            var i = "prev" == e ? -1 : 1,
                n = this.getItemIndex(t),
                a = (n + i) % this.$items.length;
            return this.$items.eq(a)
        }, i.prototype.to = function(e) {
            var t = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                t.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", this.$items.eq(e))
        }, i.prototype.pause = function(t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next")
        }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev")
        }, i.prototype.slide = function(t, n) {
            var a = this.$element.find(".item.active"),
                r = n || this.getItemForDirection(t, a),
                o = this.interval,
                s = "next" == t ? "left" : "right",
                l = "next" == t ? "first" : "last",
                d = this;
            if (!r.length) {
                if (!this.options.wrap) return;
                r = this.$element.find(".item")[l]()
            }
            if (r.hasClass("active")) return this.sliding = !1;
            var c = r[0],
                u = e.Event("slide.bs.carousel", {
                    relatedTarget: c,
                    direction: s
                });
            if (this.$element.trigger(u), !u.isDefaultPrevented()) {
                if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var h = e(this.$indicators.children()[this.getItemIndex(r)]);
                    h && h.addClass("active")
                }
                var p = e.Event("slid.bs.carousel", {
                    relatedTarget: c,
                    direction: s
                });
                return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, a.addClass(s), r.addClass(s), a.one("bsTransitionEnd", function() {
                    r.removeClass([t, s].join(" ")).addClass("active"), a.removeClass(["active", s].join(" ")), d.sliding = !1, setTimeout(function() {
                        d.$element.trigger(p)
                    }, 0)
                }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (a.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this
            }
        };
        var n = e.fn.carousel;
        e.fn.carousel = t, e.fn.carousel.Constructor = i, e.fn.carousel.noConflict = function() {
            return e.fn.carousel = n, this
        };
        var a = function(i) {
            var n, a = e(this),
                r = e(a.attr("data-target") || (n = a.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
            if (r.hasClass("carousel")) {
                var o = e.extend({}, r.data(), a.data()),
                    s = a.attr("data-slide-to");
                s && (o.interval = !1), t.call(r, o), s && r.data("bs.carousel").to(s), i.preventDefault()
            }
        };
        e(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), e(window).on("load", function() {
            e('[data-ride="carousel"]').each(function() {
                var i = e(this);
                t.call(i, i.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            t && 3 === t.which || (e(a).remove(), e(r).each(function() {
                var n = e(this),
                    a = i(n),
                    r = {
                        relatedTarget: this
                    };
                a.hasClass("open") && (a.trigger(t = e.Event("hide.bs.dropdown", r)), t.isDefaultPrevented() || (n.attr("aria-expanded", "false"), a.removeClass("open").trigger("hidden.bs.dropdown", r)))
            }))
        }

        function i(t) {
            var i = t.attr("data-target");
            i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var n = i && e(i);
            return n && n.length ? n : t.parent()
        }

        function n(t) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("bs.dropdown");
                n || i.data("bs.dropdown", n = new o(this)), "string" == typeof t && n[t].call(i)
            })
        }
        var a = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            o = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        o.VERSION = "3.3.1", o.prototype.toggle = function(n) {
            var a = e(this);
            if (!a.is(".disabled, :disabled")) {
                var r = i(a),
                    o = r.hasClass("open");
                if (t(), !o) {
                    "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                    var s = {
                        relatedTarget: this
                    };
                    if (r.trigger(n = e.Event("show.bs.dropdown", s)), n.isDefaultPrevented()) return;
                    a.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
                }
                return !1
            }
        }, o.prototype.keydown = function(t) {
            if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
                var n = e(this);
                if (t.preventDefault(), t.stopPropagation(), !n.is(".disabled, :disabled")) {
                    var a = i(n),
                        o = a.hasClass("open");
                    if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && a.find(r).trigger("focus"), n.trigger("click");
                    var s = " li:not(.divider):visible a",
                        l = a.find('[role="menu"]' + s + ', [role="listbox"]' + s);
                    if (l.length) {
                        var d = l.index(t.target);
                        38 == t.which && d > 0 && d--, 40 == t.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                    }
                }
            }
        };
        var s = e.fn.dropdown;
        e.fn.dropdown = n, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = s, this
        }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', o.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', o.prototype.keydown)
    }(jQuery), + function(e) {
        "use strict";

        function t(t, n) {
            return this.each(function() {
                var a = e(this),
                    r = a.data("bs.modal"),
                    o = e.extend({}, i.DEFAULTS, a.data(), "object" == typeof t && t);
                r || a.data("bs.modal", r = new i(this, o)), "string" == typeof t ? r[t](n) : o.show && r.show(n)
            })
        }
        var i = function(t, i) {
            this.options = i, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        i.VERSION = "3.3.1", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, i.prototype.toggle = function(e) {
            return this.isShown ? this.hide() : this.show(e)
        }, i.prototype.show = function(t) {
            var n = this,
                a = e.Event("show.bs.modal", {
                    relatedTarget: t
                });
            this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
                var a = e.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.options.backdrop && n.adjustBackdrop(), n.adjustDialog(), a && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var r = e.Event("shown.bs.modal", {
                    relatedTarget: t
                });
                a ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                    n.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
            }))
        }, i.prototype.hide = function(t) {
            t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
        }, i.prototype.enforceFocus = function() {
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
                this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
            }, this))
        }, i.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
                27 == e.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, i.prototype.resize = function() {
            this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
        }, i.prototype.hideModal = function() {
            var e = this;
            this.$element.hide(), this.backdrop(function() {
                e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
            })
        }, i.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, i.prototype.backdrop = function(t) {
            var n = this,
                a = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && a;
                if (this.$backdrop = e('<div class="modal-backdrop ' + a + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", e.proxy(function(e) {
                        e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                    }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
                r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : t()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var o = function() {
                    n.removeBackdrop(), t && t()
                };
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
            } else t && t()
        }, i.prototype.handleUpdate = function() {
            this.options.backdrop && this.adjustBackdrop(), this.adjustDialog()
        }, i.prototype.adjustBackdrop = function() {
            this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
        }, i.prototype.adjustDialog = function() {
            var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
            })
        }, i.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, i.prototype.checkScrollbar = function() {
            this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight, this.scrollbarWidth = this.measureScrollbar()
        }, i.prototype.setScrollbar = function() {
            var e = parseInt(this.$body.css("padding-right") || 0, 10);
            this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
        }, i.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", "")
        }, i.prototype.measureScrollbar = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", this.$body.append(e);
            var t = e.offsetWidth - e.clientWidth;
            return this.$body[0].removeChild(e), t
        };
        var n = e.fn.modal;
        e.fn.modal = t, e.fn.modal.Constructor = i, e.fn.modal.noConflict = function() {
            return e.fn.modal = n, this
        }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var n = e(this),
                a = n.attr("href"),
                r = e(n.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("bs.modal") ? "toggle" : e.extend({
                    remote: !/#/.test(a) && a
                }, r.data(), n.data());
            n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(e) {
                e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                    n.is(":visible") && n.trigger("focus")
                })
            }), t.call(r, o, this)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.tooltip"),
                    r = "object" == typeof t && t,
                    o = r && r.selector;
                (a || "destroy" != t) && (o ? (a || n.data("bs.tooltip", a = {}), a[o] || (a[o] = new i(this, r))) : a || n.data("bs.tooltip", a = new i(this, r)), "string" == typeof t && a[t]())
            })
        }
        var i = function(e, t) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
        };
        i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, i.prototype.init = function(t, i, n) {
            this.enabled = !0, this.type = t, this.$element = e(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
            for (var a = this.options.trigger.split(" "), r = a.length; r--;) {
                var o = a[r];
                if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
                else if ("manual" != o) {
                    var s = "hover" == o ? "mouseenter" : "focusin",
                        l = "hover" == o ? "mouseleave" : "focusout";
                    this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.getOptions = function(t) {
            return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, i.prototype.getDelegateOptions = function() {
            var t = {},
                i = this.getDefaults();
            return this._options && e.each(this._options, function(e, n) {
                i[e] != n && (t[e] = n)
            }), t
        }, i.prototype.enter = function(t) {
            var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return i && i.$tip && i.$tip.is(":visible") ? void(i.hoverState = "in") : (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)) : i.show())
        }, i.prototype.leave = function(t) {
            var i = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i)), clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)) : i.hide()
        }, i.prototype.show = function() {
            var t = e.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(t);
                var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (t.isDefaultPrevented() || !n) return;
                var a = this,
                    r = this.tip(),
                    o = this.getUID(this.type);
                this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
                var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(s);
                d && (s = s.replace(l, "") || "top"), r.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                var c = this.getPosition(),
                    u = r[0].offsetWidth,
                    h = r[0].offsetHeight;
                if (d) {
                    var p = s,
                        f = this.options.container ? e(this.options.container) : this.$element.parent(),
                        m = this.getPosition(f);
                    s = "bottom" == s && c.bottom + h > m.bottom ? "top" : "top" == s && c.top - h < m.top ? "bottom" : "right" == s && c.right + u > m.width ? "left" : "left" == s && c.left - u < m.left ? "right" : s, r.removeClass(p).addClass(s)
                }
                var g = this.getCalculatedOffset(s, c, u, h);
                this.applyPlacement(g, s);
                var v = function() {
                    var e = a.hoverState;
                    a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == e && a.leave(a)
                };
                e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
            }
        }, i.prototype.applyPlacement = function(t, i) {
            var n = this.tip(),
                a = n[0].offsetWidth,
                r = n[0].offsetHeight,
                o = parseInt(n.css("margin-top"), 10),
                s = parseInt(n.css("margin-left"), 10);
            isNaN(o) && (o = 0), isNaN(s) && (s = 0), t.top = t.top + o, t.left = t.left + s, e.offset.setOffset(n[0], e.extend({
                using: function(e) {
                    n.css({
                        top: Math.round(e.top),
                        left: Math.round(e.left)
                    })
                }
            }, t), 0), n.addClass("in");
            var l = n[0].offsetWidth,
                d = n[0].offsetHeight;
            "top" == i && d != r && (t.top = t.top + r - d);
            var c = this.getViewportAdjustedDelta(i, t, l, d);
            c.left ? t.left += c.left : t.top += c.top;
            var u = /top|bottom/.test(i),
                h = u ? 2 * c.left - a + l : 2 * c.top - r + d,
                p = u ? "offsetWidth" : "offsetHeight";
            n.offset(t), this.replaceArrow(h, n[0][p], u)
        }, i.prototype.replaceArrow = function(e, t, i) {
            this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
        }, i.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, i.prototype.hide = function(t) {
            function n() {
                "in" != a.hoverState && r.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), t && t()
            }
            var a = this,
                r = this.tip(),
                o = e.Event("hide.bs." + this.type);
            return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
        }, i.prototype.fixTitle = function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, i.prototype.hasContent = function() {
            return this.getTitle()
        }, i.prototype.getPosition = function(t) {
            t = t || this.$element;
            var i = t[0],
                n = "BODY" == i.tagName,
                a = i.getBoundingClientRect();
            null == a.width && (a = e.extend({}, a, {
                width: a.right - a.left,
                height: a.bottom - a.top
            }));
            var r = n ? {
                    top: 0,
                    left: 0
                } : t.offset(),
                o = {
                    scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
                },
                s = n ? {
                    width: e(window).width(),
                    height: e(window).height()
                } : null;
            return e.extend({}, a, o, s, r)
        }, i.prototype.getCalculatedOffset = function(e, t, i, n) {
            return "bottom" == e ? {
                top: t.top + t.height,
                left: t.left + t.width / 2 - i / 2
            } : "top" == e ? {
                top: t.top - n,
                left: t.left + t.width / 2 - i / 2
            } : "left" == e ? {
                top: t.top + t.height / 2 - n / 2,
                left: t.left - i
            } : {
                top: t.top + t.height / 2 - n / 2,
                left: t.left + t.width
            }
        }, i.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
            var a = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return a;
            var r = this.options.viewport && this.options.viewport.padding || 0,
                o = this.getPosition(this.$viewport);
            if (/right|left/.test(e)) {
                var s = t.top - r - o.scroll,
                    l = t.top + r - o.scroll + n;
                s < o.top ? a.top = o.top - s : l > o.top + o.height && (a.top = o.top + o.height - l)
            } else {
                var d = t.left - r,
                    c = t.left + r + i;
                d < o.left ? a.left = o.left - d : c > o.width && (a.left = o.left + o.width - c)
            }
            return a
        }, i.prototype.getTitle = function() {
            var e, t = this.$element,
                i = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(t[0]) : i.title)
        }, i.prototype.getUID = function(e) {
            do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
            return e
        }, i.prototype.tip = function() {
            return this.$tip = this.$tip || e(this.options.template)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, i.prototype.toggle = function(t) {
            var i = this;
            t && (i = e(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, i))), i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
        }, i.prototype.destroy = function() {
            var e = this;
            clearTimeout(this.timeout), this.hide(function() {
                e.$element.off("." + e.type).removeData("bs." + e.type)
            })
        };
        var n = e.fn.tooltip;
        e.fn.tooltip = t, e.fn.tooltip.Constructor = i, e.fn.tooltip.noConflict = function() {
            return e.fn.tooltip = n, this
        }
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.popover"),
                    r = "object" == typeof t && t,
                    o = r && r.selector;
                (a || "destroy" != t) && (o ? (a || n.data("bs.popover", a = {}), a[o] || (a[o] = new i(this, r))) : a || n.data("bs.popover", a = new i(this, r)), "string" == typeof t && a[t]())
            })
        }
        var i = function(e, t) {
            this.init("popover", e, t)
        };
        if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.1", i.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), i.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS
        }, i.prototype.setContent = function() {
            var e = this.tip(),
                t = this.getTitle(),
                i = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
        }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, i.prototype.getContent = function() {
            var e = this.$element,
                t = this.options;
            return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, i.prototype.tip = function() {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        };
        var n = e.fn.popover;
        e.fn.popover = t, e.fn.popover.Constructor = i, e.fn.popover.noConflict = function() {
            return e.fn.popover = n, this
        }
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.tab");
                a || n.data("bs.tab", a = new i(this)), "string" == typeof t && a[t]()
            })
        }
        var i = function(t) {
            this.element = e(t)
        };
        i.VERSION = "3.3.1", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var t = this.element,
                i = t.closest("ul:not(.dropdown-menu)"),
                n = t.data("target");
            if (n || (n = t.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
                var a = i.find(".active:last a"),
                    r = e.Event("hide.bs.tab", {
                        relatedTarget: t[0]
                    }),
                    o = e.Event("show.bs.tab", {
                        relatedTarget: a[0]
                    });
                if (a.trigger(r), t.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                    var s = e(n);
                    this.activate(t.closest("li"), i), this.activate(s, s.parent(), function() {
                        a.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: t[0]
                        }), t.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: a[0]
                        })
                    })
                }
            }
        }, i.prototype.activate = function(t, n, a) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
            }
            var o = n.find("> .active"),
                s = a && e.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
            o.length && s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), o.removeClass("in")
        };
        var n = e.fn.tab;
        e.fn.tab = t, e.fn.tab.Constructor = i, e.fn.tab.noConflict = function() {
            return e.fn.tab = n, this
        };
        var a = function(i) {
            i.preventDefault(), t.call(e(this), "show")
        };
        e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.affix"),
                    r = "object" == typeof t && t;
                a || n.data("bs.affix", a = new i(this, r)), "string" == typeof t && a[t]()
            })
        }
        var i = function(t, n) {
            this.options = e.extend({}, i.DEFAULTS, n), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        i.VERSION = "3.3.1", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
            offset: 0,
            target: window
        }, i.prototype.getState = function(e, t, i, n) {
            var a = this.$target.scrollTop(),
                r = this.$element.offset(),
                o = this.$target.height();
            if (null != i && "top" == this.affixed) return i > a ? "top" : !1;
            if ("bottom" == this.affixed) return null != i ? a + this.unpin <= r.top ? !1 : "bottom" : e - n >= a + o ? !1 : "bottom";
            var s = null == this.affixed,
                l = s ? a : r.top,
                d = s ? o : t;
            return null != i && i >= l ? "top" : null != n && l + d >= e - n ? "bottom" : !1
        }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var e = this.$target.scrollTop(),
                t = this.$element.offset();
            return this.pinnedOffset = t.top - e
        }, i.prototype.checkPositionWithEventLoop = function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var t = this.$element.height(),
                    n = this.options.offset,
                    a = n.top,
                    r = n.bottom,
                    o = e("body").height();
                "object" != typeof n && (r = a = n), "function" == typeof a && (a = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
                var s = this.getState(o, t, a, r);
                if (this.affixed != s) {
                    null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (s ? "-" + s : ""),
                        d = e.Event(l + ".bs.affix");
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == s && this.$element.offset({
                    top: o - t - r
                })
            }
        };
        var n = e.fn.affix;
        e.fn.affix = t, e.fn.affix.Constructor = i, e.fn.affix.noConflict = function() {
            return e.fn.affix = n, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var i = e(this),
                    n = i.data();
                n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), t.call(i, n)
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(t) {
            var i, n = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return e(n)
        }

        function i(t) {
            return this.each(function() {
                var i = e(this),
                    a = i.data("bs.collapse"),
                    r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t);
                !a && r.toggle && "show" == t && (r.toggle = !1), a || i.data("bs.collapse", a = new n(this, r)), "string" == typeof t && a[t]()
            })
        }
        var n = function(t, i) {
            this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.$trigger = e(this.options.trigger).filter('[href="#' + t.id + '"], [data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        n.VERSION = "3.3.1", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
            toggle: !0,
            trigger: '[data-toggle="collapse"]'
        }, n.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, n.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t, a = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
                if (!(a && a.length && (t = a.data("bs.collapse"), t && t.transitioning))) {
                    var r = e.Event("show.bs.collapse");
                    if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                        a && a.length && (i.call(a, "hide"), t || a.data("bs.collapse", null));
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!e.support.transition) return s.call(this);
                        var l = e.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                    }
                }
            }
        }, n.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var a = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return e.support.transition ? void this.$element[i](0).one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : a.call(this)
                }
            }
        }, n.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, n.prototype.getParent = function() {
            return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(i, n) {
                var a = e(n);
                this.addAriaAndCollapsedClass(t(a), a)
            }, this)).end()
        }, n.prototype.addAriaAndCollapsedClass = function(e, t) {
            var i = e.hasClass("in");
            e.attr("aria-expanded", i), t.toggleClass("collapsed", !i).attr("aria-expanded", i)
        };
        var a = e.fn.collapse;
        e.fn.collapse = i, e.fn.collapse.Constructor = n, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = a, this
        }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
            var a = e(this);
            a.attr("data-target") || n.preventDefault();
            var r = t(a),
                o = r.data("bs.collapse"),
                s = o ? "toggle" : e.extend({}, a.data(), {
                    trigger: this
                });
            i.call(r, s)
        })
    }(jQuery), + function(e) {
        "use strict";

        function t(i, n) {
            var a = e.proxy(this.process, this);
            this.$body = e("body"), this.$scrollElement = e(e(i).is("body") ? window : i), this.options = e.extend({}, t.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a), this.refresh(), this.process()
        }

        function i(i) {
            return this.each(function() {
                var n = e(this),
                    a = n.data("bs.scrollspy"),
                    r = "object" == typeof i && i;
                a || n.data("bs.scrollspy", a = new t(this, r)), "string" == typeof i && a[i]()
            })
        }
        t.VERSION = "3.3.1", t.DEFAULTS = {
            offset: 10
        }, t.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, t.prototype.refresh = function() {
            var t = "offset",
                i = 0;
            e.isWindow(this.$scrollElement[0]) || (t = "position", i = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
            var n = this;
            this.$body.find(this.selector).map(function() {
                var n = e(this),
                    a = n.data("target") || n.attr("href"),
                    r = /^#./.test(a) && e(a);
                return r && r.length && r.is(":visible") && [
                    [r[t]().top + i, a]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                n = this.options.offset + i - this.$scrollElement.height(),
                a = this.offsets,
                r = this.targets,
                o = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), t >= n) return o != (e = r[r.length - 1]) && this.activate(e);
            if (o && t < a[0]) return this.activeTarget = null, this.clear();
            for (e = a.length; e--;) o != r[e] && t >= a[e] && (!a[e + 1] || t <= a[e + 1]) && this.activate(r[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, this.clear();
            var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                n = e(i).parents("li").addClass("active");
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
        }, t.prototype.clear = function() {
            e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var n = e.fn.scrollspy;
        e.fn.scrollspy = i, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = n, this
        }, e(window).on("load.bs.scrollspy.data-api", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                i.call(t, t.data())
            })
        })
    }(jQuery), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var i in t)
                if (void 0 !== e.style[i]) return {
                    end: t[i]
                };
            return !1
        }
        e.fn.emulateTransitionEnd = function(t) {
            var i = !1,
                n = this;
            e(this).one("bsTransitionEnd", function() {
                i = !0
            });
            var a = function() {
                i || e(n).trigger(e.support.transition.end)
            };
            return setTimeout(a, t), this
        }, e(function() {
            e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
                bindType: e.support.transition.end,
                delegateType: e.support.transition.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery), ! function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        var t, i = navigator.userAgent,
            n = /iphone/i.test(i),
            a = /chrome/i.test(i),
            r = /android/i.test(i);
        e.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, e.fn.extend({
            caret: function(e, t) {
                var i;
                return 0 === this.length || this.is(":hidden") ? void 0 : "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (i = this.createTextRange(), i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
                })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
                    begin: e,
                    end: t
                })
            },
            unmask: function() {
                return this.trigger("unmask")
            },
            mask: function(i, o) {
                var s, l, d, c, u, h, p, f;
                if (!i && this.length > 0) {
                    s = e(this[0]);
                    var m = s.data(e.mask.dataName);
                    return m ? m() : void 0
                }
                return o = e.extend({
                    autoclear: e.mask.autoclear,
                    placeholder: e.mask.placeholder,
                    completed: null
                }, o), l = e.mask.definitions, d = [], c = p = i.length, u = null, e.each(i.split(""), function(e, t) {
                    "?" == t ? (p--, c = e) : l[t] ? (d.push(new RegExp(l[t])), null === u && (u = d.length - 1), c > e && (h = d.length - 1)) : d.push(null)
                }), this.trigger("unmask").each(function() {
                    function s() {
                        if (o.completed) {
                            for (var e = u; h >= e; e++)
                                if (d[e] && D[e] === m(e)) return;
                            o.completed.call($)
                        }
                    }

                    function m(e) {
                        return o.placeholder.charAt(e < o.placeholder.length ? e : 0)
                    }

                    function g(e) {
                        for (; ++e < p && !d[e];);
                        return e
                    }

                    function v(e) {
                        for (; --e >= 0 && !d[e];);
                        return e
                    }

                    function y(e, t) {
                        var i, n;
                        if (!(0 > e)) {
                            for (i = e, n = g(t); p > i; i++)
                                if (d[i]) {
                                    if (!(p > n && d[i].test(D[n]))) break;
                                    D[i] = D[n], D[n] = m(n), n = g(n)
                                } k(), $.caret(Math.max(u, e))
                        }
                    }

                    function b(e) {
                        var t, i, n, a;
                        for (t = e, i = m(e); p > t; t++)
                            if (d[t]) {
                                if (n = g(t), a = D[t], D[t] = i, !(p > n && d[n].test(a))) break;
                                i = a
                            }
                    }

                    function w() {
                        var e = $.val(),
                            t = $.caret();
                        if (e.length < f.length) {
                            for (S(!0); t.begin > 0 && !d[t.begin - 1];) t.begin--;
                            if (0 === t.begin)
                                for (; t.begin < u && !d[t.begin];) t.begin++;
                            $.caret(t.begin, t.begin)
                        } else {
                            for (S(!0); t.begin < p && !d[t.begin];) t.begin++;
                            $.caret(t.begin, t.begin)
                        }
                        s()
                    }

                    function x() {
                        S(), $.val() != A && $.change()
                    }

                    function _(e) {
                        if (!$.prop("readonly")) {
                            var t, i, a, r = e.which || e.keyCode;
                            f = $.val(), 8 === r || 46 === r || n && 127 === r ? (t = $.caret(), i = t.begin, a = t.end, a - i === 0 && (i = 46 !== r ? v(i) : a = g(i - 1), a = 46 === r ? g(a) : a), T(i, a), y(i, a - 1), e.preventDefault()) : 13 === r ? x.call(this, e) : 27 === r && ($.val(A), $.caret(0, S()), e.preventDefault())
                        }
                    }

                    function C(t) {
                        if (!$.prop("readonly")) {
                            var i, n, a, o = t.which || t.keyCode,
                                l = $.caret();
                            if (!(t.ctrlKey || t.altKey || t.metaKey || 32 > o) && o && 13 !== o) {
                                if (l.end - l.begin !== 0 && (T(l.begin, l.end), y(l.begin, l.end - 1)), i = g(l.begin - 1), p > i && (n = String.fromCharCode(o), d[i].test(n))) {
                                    if (b(i), D[i] = n, k(), a = g(i), r) {
                                        var c = function() {
                                            e.proxy(e.fn.caret, $, a)()
                                        };
                                        setTimeout(c, 0)
                                    } else $.caret(a);
                                    l.begin <= h && s()
                                }
                                t.preventDefault()
                            }
                        }
                    }

                    function T(e, t) {
                        var i;
                        for (i = e; t > i && p > i; i++) d[i] && (D[i] = m(i))
                    }

                    function k() {
                        $.val(D.join(""))
                    }

                    function S(e) {
                        var t, i, n, a = $.val(),
                            r = -1;
                        for (t = 0, n = 0; p > t; t++)
                            if (d[t]) {
                                for (D[t] = m(t); n++ < a.length;)
                                    if (i = a.charAt(n - 1), d[t].test(i)) {
                                        D[t] = i, r = t;
                                        break
                                    } if (n > a.length) {
                                    T(t + 1, p);
                                    break
                                }
                            } else D[t] === a.charAt(n) && n++, c > t && (r = t);
                        return e ? k() : c > r + 1 ? o.autoclear || D.join("") === I ? ($.val() && $.val(""), T(0, p)) : k() : (k(), $.val($.val().substring(0, r + 1))), c ? t : u
                    }
                    var $ = e(this),
                        D = e.map(i.split(""), function(e, t) {
                            return "?" != e ? l[e] ? m(t) : e : void 0
                        }),
                        I = D.join(""),
                        A = $.val();
                    $.data(e.mask.dataName, function() {
                        return e.map(D, function(e, t) {
                            return d[t] && e != m(t) ? e : null
                        }).join("")
                    }), $.one("unmask", function() {
                        $.off(".mask").removeData(e.mask.dataName)
                    }).on("focus.mask", function() {
                        if (!$.prop("readonly")) {
                            clearTimeout(t);
                            var e;
                            A = $.val(), e = S(), t = setTimeout(function() {
                                $.get(0) === document.activeElement && (k(), e == i.replace("?", "").length ? $.caret(0, e) : $.caret(e))
                            }, 10)
                        }
                    }).on("blur.mask", x).on("keydown.mask", _).on("keypress.mask", C).on("input.mask paste.mask", function() {
                        $.prop("readonly") || setTimeout(function() {
                            var e = S(!0);
                            $.caret(e), s()
                        }, 0)
                    }), a && r && $.off("input.mask").on("input.mask", w), S()
                })
            }
        })
    }), ! function(e) {
        var t = {
            init: function(t) {
                return this.each(function() {
                    var i = e(this);
                    i.data("marquee", t);
                    var n = e(">li", i);
                    i.wrap('<div class="slide_container"></div>').height(i.height()).hover(function() {
                        e(this).data("marquee").stop && e(this).stop(!0, !1)
                    }, function() {
                        e(this).data("marquee").stop && e(this).marquee("slide")
                    }).parent().css({
                        position: "relative",
                        overflow: "hidden",
                        height: e(">li", i).height()
                    }).find(">ul").css({
                        width: 2 * screen.width,
                        position: "absolute"
                    });
                    for (var a = 0; a < Math.ceil(3 * screen.width / i.width()); ++a) i.append(n.clone());
                    i.marquee("slide")
                })
            },
            slide: function() {
                var t = this;
                t.animate({
                    left: -1 * e(">li", t).width()
                }, t.data("marquee").duration, "swing", function() {
                    t.css("left", 0).append(e(">li:first", t)), t.delay(t.data("marquee").delay).marquee("slide")
                })
            }
        };
        e.fn.marquee = function(i) {
            var n = {
                delay: 3e3,
                duration: 900,
                stop: !0
            };
            return "object" != typeof i && i ? t[i].apply(this) : (i && e.extend(n, i), t.init.apply(this, [n]))
        }
    }(jQuery), $(document).ready(function() {
        $(".slide").marquee({
            delay: 2e3
        })
    }), jQuery(function(e) {
        e.fn.revolution && e(".pi-revolution-slider").revolution({
            delay: 9e3,
            startwidth: 1130,
            startheight: 500,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "off",
            hideTimerBar: "off"
        })
    }), 1 != window.disablehammer && (function(e, t) {
        "use strict";

        function i() {
            if (!n.READY) {
                n.event.determineEventTypes();
                for (var e in n.gestures) n.gestures.hasOwnProperty(e) && n.detection.register(n.gestures[e]);
                n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
            }
        }
        var n = function(e, t) {
            return new n.Instance(e, t || {})
        };
        n.defaults = {
            stop_browser_behavior: {
                userSelect: "none",
                touchAction: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in e, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function(e, t) {
            var a = this;
            return i(), this.element = e, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), t || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(e, n.EVENT_START, function(e) {
                a.enabled && n.detection.startDetect(a, e)
            }), this
        }, n.Instance.prototype = {
            on: function(e, t) {
                for (var i = e.split(" "), n = 0; i.length > n; n++) this.element.addEventListener(i[n], t, !1);
                return this
            },
            off: function(e, t) {
                for (var i = e.split(" "), n = 0; i.length > n; n++) this.element.removeEventListener(i[n], t, !1);
                return this
            },
            trigger: function(e, t) {
                var i = n.DOCUMENT.createEvent("Event");
                i.initEvent(e, !0, !0), i.gesture = t;
                var a = this.element;
                return n.utils.hasParent(t.target, a) && (a = t.target), a.dispatchEvent(i), this
            },
            enable: function(e) {
                return this.enabled = e, this
            }
        };
        var a = null,
            r = !1,
            o = !1;
        n.event = {
            bindDom: function(e, t, i) {
                for (var n = t.split(" "), a = 0; n.length > a; a++) e.addEventListener(n[a], i, !1)
            },
            onTouch: function(e, t, i) {
                var s = this;
                this.bindDom(e, n.EVENT_TYPES[t], function(l) {
                    var d = l.type.toLowerCase();
                    if (!d.match(/mouse/) || !o) {
                        (d.match(/touch/) || d.match(/pointerdown/) || d.match(/mouse/) && 1 === l.which) && (r = !0), d.match(/touch|pointer/) && (o = !0);
                        var c = 0;
                        r && (n.HAS_POINTEREVENTS && t != n.EVENT_END ? c = n.PointerEvent.updatePointer(t, l) : d.match(/touch/) ? c = l.touches.length : o || (c = d.match(/up/) ? 0 : 1), c > 0 && t == n.EVENT_END ? t = n.EVENT_MOVE : c || (t = n.EVENT_END), c || null === a ? a = l : l = a, i.call(n.detection, s.collectEventData(e, t, l)), n.HAS_POINTEREVENTS && t == n.EVENT_END && (c = n.PointerEvent.updatePointer(t, l))), c || (a = null, r = !1, o = !1, n.PointerEvent.reset())
                    }
                })
            },
            determineEventTypes: function() {
                var e;
                e = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = e[0], n.EVENT_TYPES[n.EVENT_MOVE] = e[1], n.EVENT_TYPES[n.EVENT_END] = e[2]
            },
            getTouchList: function(e) {
                return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : e.touches ? e.touches : [{
                    identifier: 1,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target
                }]
            },
            collectEventData: function(e, t, i) {
                var a = this.getTouchList(i, t),
                    r = n.POINTER_TOUCH;
                return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (r = n.POINTER_MOUSE), {
                    center: n.utils.getCenter(a),
                    timeStamp: (new Date).getTime(),
                    target: i.target,
                    touches: a,
                    eventType: t,
                    pointerType: r,
                    srcEvent: i,
                    preventDefault: function() {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return n.detection.stopDetect()
                    }
                }
            }
        }, n.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var e = this,
                    t = [];
                return Object.keys(e.pointers).sort().forEach(function(i) {
                    t.push(e.pointers[i])
                }), t
            },
            updatePointer: function(e, t) {
                return e == n.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
            },
            matchType: function(e, t) {
                if (!t.pointerType) return !1;
                var i = {};
                return i[n.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == n.POINTER_PEN, i[e]
            },
            getEvents: function() {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function() {
                this.pointers = {}
            }
        }, n.utils = {
            extend: function(e, i, n) {
                for (var a in i) e[a] !== t && n || (e[a] = i[a]);
                return e
            },
            hasParent: function(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            },
            getCenter: function(e) {
                for (var t = [], i = [], n = 0, a = e.length; a > n; n++) t.push(e[n].pageX), i.push(e[n].pageY);
                return {
                    pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                    pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
                }
            },
            getVelocity: function(e, t, i) {
                return {
                    x: Math.abs(t / e) || 0,
                    y: Math.abs(i / e) || 0
                }
            },
            getAngle: function(e, t) {
                var i = t.pageY - e.pageY,
                    n = t.pageX - e.pageX;
                return 180 * Math.atan2(i, n) / Math.PI
            },
            getDirection: function(e, t) {
                var i = Math.abs(e.pageX - t.pageX),
                    a = Math.abs(e.pageY - t.pageY);
                return i >= a ? e.pageX - t.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
            },
            getDistance: function(e, t) {
                var i = t.pageX - e.pageX,
                    n = t.pageY - e.pageY;
                return Math.sqrt(i * i + n * n)
            },
            getScale: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
            },
            getRotation: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
            },
            isVertical: function(e) {
                return e == n.DIRECTION_UP || e == n.DIRECTION_DOWN
            },
            stopDefaultBrowserBehavior: function(e, t) {
                var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
                if (t && e.style) {
                    for (var a = 0; n.length > a; a++)
                        for (var r in t) t.hasOwnProperty(r) && (i = r, n[a] && (i = n[a] + i.substring(0, 1).toUpperCase() + i.substring(1)), e.style[i] = t[r]);
                    "none" == t.userSelect && (e.onselectstart = function() {
                        return !1
                    })
                }
            }
        }, n.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(e, t) {
                this.current || (this.stopped = !1, this.current = {
                    inst: e,
                    startEvent: n.utils.extend({}, t),
                    lastEvent: !1,
                    name: ""
                }, this.detect(t))
            },
            detect: function(e) {
                if (this.current && !this.stopped) {
                    e = this.extendEventData(e);
                    for (var t = this.current.inst.options, i = 0, a = this.gestures.length; a > i; i++) {
                        var r = this.gestures[i];
                        if (!this.stopped && t[r.name] !== !1 && r.handler.call(r, e, this.current.inst) === !1) {
                            this.stopDetect();
                            break
                        }
                    }
                    return this.current && (this.current.lastEvent = e), e.eventType == n.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
                }
            },
            stopDetect: function() {
                this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
            },
            extendEventData: function(e) {
                var t = this.current.startEvent;
                if (t && (e.touches.length != t.touches.length || e.touches === t.touches)) {
                    t.touches = [];
                    for (var i = 0, a = e.touches.length; a > i; i++) t.touches.push(n.utils.extend({}, e.touches[i]))
                }
                var r = e.timeStamp - t.timeStamp,
                    o = e.center.pageX - t.center.pageX,
                    s = e.center.pageY - t.center.pageY,
                    l = n.utils.getVelocity(r, o, s);
                return n.utils.extend(e, {
                    deltaTime: r,
                    deltaX: o,
                    deltaY: s,
                    velocityX: l.x,
                    velocityY: l.y,
                    distance: n.utils.getDistance(t.center, e.center),
                    angle: n.utils.getAngle(t.center, e.center),
                    direction: n.utils.getDirection(t.center, e.center),
                    scale: n.utils.getScale(t.touches, e.touches),
                    rotation: n.utils.getRotation(t.touches, e.touches),
                    startEvent: t
                }), e
            },
            register: function(e) {
                var i = e.defaults || {};
                return i[e.name] === t && (i[e.name] = !0), n.utils.extend(n.defaults, i, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        }, n.gestures = n.gestures || {}, n.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: {
                hold_timeout: 500,
                hold_threshold: 1
            },
            timer: null,
            handler: function(e, t) {
                switch (e.eventType) {
                    case n.EVENT_START:
                        clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function() {
                            "hold" == n.detection.current.name && t.trigger("hold", e)
                        }, t.options.hold_timeout);
                        break;
                    case n.EVENT_MOVE:
                        e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                        break;
                    case n.EVENT_END:
                        clearTimeout(this.timer)
                }
            }
        }, n.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: {
                tap_max_touchtime: 250,
                tap_max_distance: 10,
                tap_always: !0,
                doubletap_distance: 20,
                doubletap_interval: 300
            },
            handler: function(e, t) {
                if (e.eventType == n.EVENT_END) {
                    var i = n.detection.previous,
                        a = !1;
                    if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
                    i && "tap" == i.name && e.timeStamp - i.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), a = !0), (!a || t.options.tap_always) && (n.detection.current.name = "tap", t.trigger(n.detection.current.name, e))
                }
            }
        }, n.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipe_max_touches: 1,
                swipe_velocity: .7
            },
            handler: function(e, t) {
                if (e.eventType == n.EVENT_END) {
                    if (t.options.swipe_max_touches > 0 && e.touches.length > t.options.swipe_max_touches) return;
                    (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
                }
            }
        }, n.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: {
                drag_min_distance: 10,
                drag_max_touches: 1,
                drag_block_horizontal: !1,
                drag_block_vertical: !1,
                drag_lock_to_axis: !1,
                drag_lock_min_distance: 25
            },
            triggered: !1,
            handler: function(e, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", e), this.triggered = !1, t;
                if (!(i.options.drag_max_touches > 0 && e.touches.length > i.options.drag_max_touches)) switch (e.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        if (e.distance < i.options.drag_min_distance && n.detection.current.name != this.name) return;
                        n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || i.options.drag_lock_to_axis && i.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                        var a = n.detection.current.lastEvent.direction;
                        e.drag_locked_to_axis && a !== e.direction && (e.direction = n.utils.isVertical(a) ? 0 > e.deltaY ? n.DIRECTION_UP : n.DIRECTION_DOWN : 0 > e.deltaX ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (i.trigger(this.name + "start", e), this.triggered = !0), i.trigger(this.name, e), i.trigger(this.name + e.direction, e), (i.options.drag_block_vertical && n.utils.isVertical(e.direction) || i.options.drag_block_horizontal && !n.utils.isVertical(e.direction)) && e.preventDefault();
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", e), this.triggered = !1
                }
            }
        }, n.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: {
                transform_min_scale: .01,
                transform_min_rotation: 1,
                transform_always_block: !1
            },
            triggered: !1,
            handler: function(e, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", e), this.triggered = !1, t;
                if (!(2 > e.touches.length)) switch (i.options.transform_always_block && e.preventDefault(), e.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        var a = Math.abs(1 - e.scale),
                            r = Math.abs(e.rotation);
                        if (i.options.transform_min_scale > a && i.options.transform_min_rotation > r) return;
                        n.detection.current.name = this.name, this.triggered || (i.trigger(this.name + "start", e), this.triggered = !0), i.trigger(this.name, e), r > i.options.transform_min_rotation && i.trigger("rotate", e), a > i.options.transform_min_scale && (i.trigger("pinch", e), i.trigger("pinch" + (1 > e.scale ? "in" : "out"), e));
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", e), this.triggered = !1
                }
            }
        }, n.gestures.Touch = {
            name: "touch",
            index: -1 / 0,
            defaults: {
                prevent_default: !1,
                prevent_mouseevents: !1
            },
            handler: function(e, i) {
                return i.options.prevent_mouseevents && e.pointerType == n.POINTER_MOUSE ? (e.stopDetect(), t) : (i.options.prevent_default && e.preventDefault(), e.eventType == n.EVENT_START && i.trigger(this.name, e), t)
            }
        }, n.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(e, t) {
                e.eventType == n.EVENT_END && t.trigger(this.name, e)
            }
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (e.Hammer = n, "function" == typeof e.define && e.define.amd && e.define("hammer", [], function() {
            return n
        }))
    }(this), function(e, t) {
        "use strict";
        e !== t && (Hammer.event.bindDom = function(i, n, a) {
            e(i).on(n, function(e) {
                var i = e.originalEvent || e;
                i.pageX === t && (i.pageX = e.pageX, i.pageY = e.pageY), i.target || (i.target = e.target), i.which === t && (i.which = i.button), i.preventDefault || (i.preventDefault = e.preventDefault), i.stopPropagation || (i.stopPropagation = e.stopPropagation), a.call(this, i)
            })
        }, Hammer.Instance.prototype.on = function(t, i) {
            return e(this.element).on(t, i)
        }, Hammer.Instance.prototype.off = function(t, i) {
            return e(this.element).off(t, i)
        }, Hammer.Instance.prototype.trigger = function(t, i) {
            var n = e(this.element);
            return n.has(i.target).length && (n = e(i.target)), n.trigger({
                type: t,
                gesture: i
            })
        }, e.fn.hammer = function(t) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("hammer");
                n ? n && t && Hammer.utils.extend(n.options, t) : i.data("hammer", new Hammer(this, t || {}))
            })
        })
    }(window.jQuery || window.Zepto)), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {}
}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
! function(e) {
    "use strict";
    var t = e.GreenSockGlobals || e;
    if (!t.TweenLite) {
        var i, n, a, r, o, s = function(e) {
                var i, n = e.split("."),
                    a = t;
                for (i = 0; n.length > i; i++) a[n[i]] = a = a[n[i]] || {};
                return a
            },
            l = s("com.greensock"),
            d = 1e-10,
            c = [].slice,
            u = function() {},
            h = function() {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
                }
            }(),
            p = {},
            f = function(i, n, a, r) {
                this.sc = p[i] ? p[i].sc : [], p[i] = this, this.gsClass = null, this.func = a;
                var o = [];
                this.check = function(l) {
                    for (var d, c, u, h, m = n.length, g = m; --m > -1;)(d = p[n[m]] || new f(n[m], [])).gsClass ? (o[m] = d.gsClass, g--) : l && d.sc.push(this);
                    if (0 === g && a)
                        for (c = ("com.greensock." + i).split("."), u = c.pop(), h = s(c.join("."))[u] = this.gsClass = a.apply(a, o), r && (t[u] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").join("/"), [], function() {
                                return h
                            }) : "undefined" != typeof module && module.exports && (module.exports = h)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                }, this.check(!0)
            },
            m = e._gsDefine = function(e, t, i, n) {
                return new f(e, t, i, n)
            },
            g = l._class = function(e, t, i) {
                return t = t || function() {}, m(e, [], function() {
                    return t
                }, i), t
            };
        m.globals = t;
        var v = [0, 0, 1, 1],
            y = [],
            b = g("easing.Ease", function(e, t, i, n) {
                this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? v.concat(t) : v
            }, !0),
            w = b.map = {},
            x = b.register = function(e, t, i, n) {
                for (var a, r, o, s, d = t.split(","), c = d.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (r = d[c], a = n ? g("easing." + r, null, !0) : l.easing[r] || {}, o = u.length; --o > -1;) s = u[o], w[r + "." + s] = w[s + r] = a[s] = e.getRatio ? e : e[s] || new e
            };
        for (a = b.prototype, a._calcEnd = !1, a.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    i = this._power,
                    n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
            }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = i.length; --n > -1;) a = i[n] + ",Power" + n, x(new b(null, null, 1, n), a, "easeOut", !0), x(new b(null, null, 2, n), a, "easeIn" + (0 === n ? ",easeNone" : "")), x(new b(null, null, 3, n), a, "easeInOut");
        w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
        var _ = g("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        a = _.prototype, a.addEventListener = function(e, t, i, n, a) {
            a = a || 0;
            var s, l, d = this._listeners[e],
                c = 0;
            for (null == d && (this._listeners[e] = d = []), l = d.length; --l > -1;) s = d[l], s.c === t && s.s === i ? d.splice(l, 1) : 0 === c && a > s.pr && (c = l + 1);
            d.splice(c, 0, {
                c: t,
                s: i,
                up: n,
                pr: a
            }), this !== r || o || r.wake()
        }, a.removeEventListener = function(e, t) {
            var i, n = this._listeners[e];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === t) return void n.splice(i, 1)
        }, a.dispatchEvent = function(e) {
            var t, i, n, a = this._listeners[e];
            if (a)
                for (t = a.length, i = this._eventTarget; --t > -1;) n = a[t], n.up ? n.c.call(n.s || i, {
                    type: e,
                    target: i
                }) : n.c.call(n.s || i)
        };
        var C = e.requestAnimationFrame,
            T = e.cancelAnimationFrame,
            k = Date.now || function() {
                return (new Date).getTime()
            },
            S = k();
        for (i = ["ms", "moz", "webkit", "o"], n = i.length; --n > -1 && !C;) C = e[i[n] + "RequestAnimationFrame"], T = e[i[n] + "CancelAnimationFrame"] || e[i[n] + "CancelRequestAnimationFrame"];
        g("Ticker", function(e, t) {
            var i, n, a, s, l, c = this,
                h = k(),
                p = t !== !1 && C,
                f = 500,
                m = 33,
                g = function(e) {
                    var t, r, o = k() - S;
                    o > f && (h += o - m), S += o, c.time = (S - h) / 1e3, t = c.time - l, (!i || t > 0 || e === !0) && (c.frame++, l += t + (t >= s ? .004 : s - t), r = !0), e !== !0 && (a = n(g)), r && c.dispatchEvent("tick")
                };
            _.call(c), c.time = c.frame = 0, c.tick = function() {
                g(!0)
            }, c.lagSmoothing = function(e, t) {
                f = e || 1 / d, m = Math.min(t, f, 0)
            }, c.sleep = function() {
                null != a && (p && T ? T(a) : clearTimeout(a), n = u, a = null, c === r && (o = !1))
            }, c.wake = function() {
                null !== a ? c.sleep() : c.frame > 10 && (S = k() - f + 5), n = 0 === i ? u : p && C ? C : function(e) {
                    return setTimeout(e, 0 | 1e3 * (l - c.time) + 1)
                }, c === r && (o = !0), g(2)
            }, c.fps = function(e) {
                return arguments.length ? (i = e, s = 1 / (i || 60), l = this.time + s, void c.wake()) : i
            }, c.useRAF = function(e) {
                return arguments.length ? (c.sleep(), p = e, void c.fps(i)) : p
            }, c.fps(e), setTimeout(function() {
                p && (!a || 5 > c.frame) && c.useRAF(!1)
            }, 1500)
        }), a = l.Ticker.prototype = new l.events.EventDispatcher, a.constructor = l.Ticker;
        var $ = g("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, H) {
                o || r.wake();
                var i = this.vars.useFrames ? F : H;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        r = $.ticker = new l.Ticker, a = $.prototype, a._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
        var D = function() {
            o && k() - S > 2e3 && r.wake(), setTimeout(D, 2e3)
        };
        D(), a.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, a.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, a.resume = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, a.seek = function(e, t) {
            return this.totalTime(Number(e), t !== !1)
        }, a.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
        }, a.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, a.render = function() {}, a.invalidate = function() {
            return this
        }, a.isActive = function() {
            var e, t = this._timeline,
                i = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
        }, a._enabled = function(e, t) {
            return o || r.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, a._kill = function() {
            return this._enabled(!1, !1)
        }, a.kill = function(e, t) {
            return this._kill(e, t), this
        }, a._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, a._swapSelfInParams = function(e) {
            for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
            return i
        }, a.eventCallback = function(e, t, i, n) {
            if ("on" === (e || "").substr(0, 2)) {
                var a = this.vars;
                if (1 === arguments.length) return a[e];
                null == t ? delete a[e] : (a[e] = t, a[e + "Params"] = h(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, a[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, a.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, a.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, a.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, a.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, a.totalTime = function(e, t, i) {
            if (o || r.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        a = this._timeline;
                    if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? n - e : e) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                        for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (this.render(e, t, !1), P.length && W())
            }
            return this
        }, a.progress = a.totalProgress = function(e, t) {
            return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
        }, a.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, a.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            if (e = e || d, this._timeline && this._timeline.smoothChildTiming) {
                var t = this._pauseTime,
                    i = t || 0 === t ? t : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / e
            }
            return this._timeScale = e, this._uncache(!1)
        }, a.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, a.paused = function(e) {
            if (!arguments.length) return this._paused;
            if (e != this._paused && this._timeline) {
                o || e || r.wake();
                var t = this._timeline,
                    i = t.rawTime(),
                    n = i - this._pauseTime;
                !e && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !e && this._enabled(!0, !1), this
        };
        var I = g("core.SimpleTimeline", function(e) {
            $.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        a = I.prototype = new $, a.constructor = I, a.kill()._gc = !1, a._first = a._last = null, a._sortChildren = !1, a.add = a.insert = function(e, t) {
            var i, n;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = e._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
        }, a._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
        }, a.render = function(e, t, i) {
            var n, a = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; a;) n = a._next, (a._active || e >= a._startTime && !a._paused) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (e - a._startTime) * a._timeScale, t, i) : a.render((e - a._startTime) * a._timeScale, t, i)), a = n
        }, a.rawTime = function() {
            return o || r.wake(), this._totalTime
        };
        var A = g("TweenLite", function(t, i, n) {
                if ($.call(this, i, n), this.render = A.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : A.selector(t) || t;
                var a, r, o, s = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? z[A.defaultOverwrite] : "number" == typeof l ? l >> 0 : z[l], (s || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
                    for (this._targets = o = c.call(t, 0), this._propLookup = [], this._siblings = [], a = 0; o.length > a; a++) r = o[a], r ? "string" != typeof r ? r.length && r !== e && r[0] && (r[0] === e || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(a--, 1), this._targets = o = o.concat(c.call(r, 0))) : (this._siblings[a] = V(r, this, !1), 1 === l && this._siblings[a].length > 1 && Y(r, this, null, 1, this._siblings[a])) : (r = o[a--] = A.selector(r), "string" == typeof r && o.splice(a + 1, 1)) : o.splice(a--, 1);
                else this._propLookup = {}, this._siblings = V(t, this, !1), 1 === l && this._siblings.length > 1 && Y(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -d, this.render(-this._delay))
            }, !0),
            N = function(t) {
                return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            },
            E = function(e, t) {
                var i, n = {};
                for (i in e) B[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!L[i] || L[i] && L[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                e.css = n
            };
        a = A.prototype = new $, a.constructor = A, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, A.version = "1.12.1", A.defaultEase = a._ease = new b(null, null, 1, 1), A.defaultOverwrite = "auto", A.ticker = r, A.autoSleep = !0, A.lagSmoothing = function(e, t) {
            r.lagSmoothing(e, t)
        }, A.selector = e.$ || e.jQuery || function(t) {
            return e.$ ? (A.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        };
        var P = [],
            M = {},
            O = A._internals = {
                isArray: h,
                isSelector: N,
                lazyTweens: P
            },
            L = A._plugins = {},
            R = O.tweenLookup = {},
            j = 0,
            B = O.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1
            },
            z = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            F = $._rootFramesTimeline = new I,
            H = $._rootTimeline = new I,
            W = function() {
                var e = P.length;
                for (M = {}; --e > -1;) i = P[e], i && i._lazy !== !1 && (i.render(i._lazy, !1, !0), i._lazy = !1);
                P.length = 0
            };
        H._startTime = r.time, F._startTime = r.frame, H._active = F._active = !0, setTimeout(W, 1), $._updateRoot = A.render = function() {
            var e, t, i;
            if (P.length && W(), H.render((r.time - H._startTime) * H._timeScale, !1, !1), F.render((r.frame - F._startTime) * F._timeScale, !1, !1), P.length && W(), !(r.frame % 120)) {
                for (i in R) {
                    for (t = R[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete R[i]
                }
                if (i = H._first, (!i || i._paused) && A.autoSleep && !F._first && 1 === r._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || r.sleep()
                }
            }
        }, r.addEventListener("tick", $._updateRoot);
        var V = function(e, t, i) {
                var n, a, r = e._gsTweenID;
                if (R[r || (e._gsTweenID = r = "t" + j++)] || (R[r] = {
                        target: e,
                        tweens: []
                    }), t && (n = R[r].tweens, n[a = n.length] = t, i))
                    for (; --a > -1;) n[a] === t && n.splice(a, 1);
                return R[r].tweens
            },
            Y = function(e, t, i, n, a) {
                var r, o, s, l;
                if (1 === n || n >= 4) {
                    for (l = a.length, r = 0; l > r; r++)
                        if ((s = a[r]) !== t) s._gc || s._enabled(!1, !1) && (o = !0);
                        else if (5 === n) break;
                    return o
                }
                var c, u = t._startTime + d,
                    h = [],
                    p = 0,
                    f = 0 === t._duration;
                for (r = a.length; --r > -1;)(s = a[r]) === t || s._gc || s._paused || (s._timeline !== t._timeline ? (c = c || q(t, 0, f), 0 === q(s, c, f) && (h[p++] = s)) : u >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > u && ((f || !s._initted) && 2e-10 >= u - s._startTime || (h[p++] = s)));
                for (r = p; --r > -1;) s = h[r], 2 === n && s._kill(i, e) && (o = !0), (2 !== n || !s._firstPT && s._initted) && s._enabled(!1, !1) && (o = !0);
                return o
            },
            q = function(e, t, i) {
                for (var n = e._timeline, a = n._timeScale, r = e._startTime; n._timeline;) {
                    if (r += n._startTime, a *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return r /= a, r > t ? r - t : i && r === t || !e._initted && 2 * d > r - t ? d : (r += e.totalDuration() / e._timeScale / a) > t + d ? 0 : r - t - d
            };
        a._init = function() {
            var e, t, i, n, a, r = this.vars,
                o = this._overwrittenProps,
                s = this._duration,
                l = !!r.immediateRender,
                d = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), a = {};
                for (n in r.startAt) a[n] = r.startAt[n];
                if (a.overwrite = !1, a.immediateRender = !0, a.lazy = l && r.lazy !== !1, a.startAt = a.delay = null, this._startAt = A.to(this.target, 0, a), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== s) return
            } else if (r.runBackwards && 0 !== s)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    i = {};
                    for (n in r) B[n] && "autoCSS" !== n || (i[n] = r[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = A.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1)
                } if (this._ease = d ? d instanceof b ? r.easeParams instanceof Array ? d.config.apply(d, r.easeParams) : d : "function" == typeof d ? new b(d, r.easeParams) : w[d] || A.defaultEase : A.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], o ? o[e] : null) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (t && A._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, a._initProps = function(t, i, n, a) {
            var r, o, s, l, d, c;
            if (null == t) return !1;
            M[t._gsTweenID] && W(), this.vars.css || t.style && t !== e && t.nodeType && L.css && this.vars.autoCSS !== !1 && E(this.vars, t);
            for (r in this.vars) {
                if (c = this.vars[r], B[r]) c && (c instanceof Array || c.push && h(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[r] = c = this._swapSelfInParams(c, this));
                else if (L[r] && (l = new L[r])._onInitTween(t, this.vars[r], this)) {
                    for (this._firstPT = d = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = d = {
                    _next: this._firstPT,
                    t: t,
                    p: r,
                    f: "function" == typeof t[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, d.s = d.f ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), d.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - d.s || 0;
                d && d._next && (d._next._prev = d)
            }
            return a && this._kill(a, t) ? this._initProps(t, i, n, a) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, a)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[t._gsTweenID] = !0), s)
        }, a.render = function(e, t, i) {
            var n, a, r, o, s = this._time,
                l = this._duration,
                c = this._rawPrevTime;
            if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, a = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 === e || 0 > c || c === d) && c !== e && (i = !0, c > d && (a = "onReverseComplete")), this._rawPrevTime = o = !t || e || c === e ? e : d);
            else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && c > 0 && c !== d) && (a = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (i = !0), this._rawPrevTime = o = !t || e || c === e ? e : d)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = e, this._easeType) {
                var u = e / l,
                    h = this._easeType,
                    p = this._easePower;
                (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > e / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(e / l);
            if (this._time !== s || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = c, P.push(this), void(this._lazy = e);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && e >= 0 && (this._active = !0), 0 === s && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._time !== s || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), a && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || y), 0 === l && this._rawPrevTime === d && o !== d && (this._rawPrevTime = 0)))
            }
        }, a._kill = function(e, t) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : A.selector(t) || t;
            var i, n, a, r, o, s, l, d;
            if ((h(t) || N(t)) && "number" != typeof t[0])
                for (i = t.length; --i > -1;) this._kill(e, t[i]) && (s = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (t === this._targets[i]) {
                            o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    o = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    l = e || o, d = e !== n && "all" !== n && e !== o && ("object" != typeof e || !e._tempKill);
                    for (a in l)(r = o[a]) && (r.pg && r.t._kill(l) && (s = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete o[a]), d && (n[a] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return s
        }, a.invalidate = function() {
            return this._notifyPluginsOfEnabled && A._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
        }, a._enabled = function(e, t) {
            if (o || r.wake(), e && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = V(n[i], this, !0);
                else this._siblings = V(this.target, this, !0)
            }
            return $.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? A._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
        }, A.to = function(e, t, i) {
            return new A(e, t, i)
        }, A.from = function(e, t, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new A(e, t, i)
        }, A.fromTo = function(e, t, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new A(e, t, n)
        }, A.delayedCall = function(e, t, i, n, a) {
            return new A(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: t,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: a,
                overwrite: 0
            })
        }, A.set = function(e, t) {
            return new A(e, 0, t)
        }, A.getTweensOf = function(e, t) {
            if (null == e) return [];
            e = "string" != typeof e ? e : A.selector(e) || e;
            var i, n, a, r;
            if ((h(e) || N(e)) && "number" != typeof e[0]) {
                for (i = e.length, n = []; --i > -1;) n = n.concat(A.getTweensOf(e[i], t));
                for (i = n.length; --i > -1;)
                    for (r = n[i], a = i; --a > -1;) r === n[a] && n.splice(i, 1)
            } else
                for (n = V(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, A.killTweensOf = A.killDelayedCallsTo = function(e, t, i) {
            "object" == typeof t && (i = t, t = !1);
            for (var n = A.getTweensOf(e, t), a = n.length; --a > -1;) n[a]._kill(i, e)
        };
        var U = g("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = U.prototype
        }, !0);
        if (a = U.prototype, U.version = "1.10.1", U.API = 2, a._firstPT = null, a._addTween = function(e, t, i, n, a, r) {
                var o, s;
                return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = s = {
                    _next: this._firstPT,
                    t: e,
                    p: t,
                    s: i,
                    c: o,
                    f: "function" == typeof e[t],
                    n: a || t,
                    r: r
                }, s._next && (s._next._prev = s), s) : void 0
            }, a.setRatio = function(e) {
                for (var t, i = this._firstPT, n = 1e-6; i;) t = i.c * e + i.s, i.r ? t = Math.round(t) : n > t && t > -n && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
            }, a._kill = function(e) {
                var t, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, a._roundProps = function(e, t) {
                for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
            }, A._onPluginEvent = function(e, t) {
                var i, n, a, r, o, s = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; s;) {
                        for (o = s._next, n = a; n && n.pr > s.pr;) n = n._next;
                        (s._prev = n ? n._prev : r) ? s._prev._next = s: a = s, (s._next = n) ? n._prev = s : r = s, s = o
                    }
                    s = t._firstPT = a
                }
                for (; s;) s.pg && "function" == typeof s.t[e] && s.t[e]() && (i = !0), s = s._next;
                return i
            }, U.activate = function(e) {
                for (var t = e.length; --t > -1;) e[t].API === U.API && (L[(new e[t])._propName] = e[t]);
                return !0
            }, m.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, i = e.propName,
                    n = e.priority || 0,
                    a = e.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        U.call(this, i, n), this._overwriteProps = a || []
                    }, e.global === !0),
                    s = o.prototype = new U(i);
                s.constructor = o, o.API = e.API;
                for (t in r) "function" == typeof e[t] && (s[r[t]] = e[t]);
                return o.version = e.version, U.activate([o]), o
            }, i = e._gsQueue) {
            for (n = 0; i.length > n; n++) i[n]();
            for (a in p) p[a].func || e.console.log("GSAP encountered missing dependency: com.greensock." + a)
        }
        o = !1
    }
}(window), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
            var n = function(e) {
                    t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, a = this.vars;
                    for (n in a) i = a[n], o(i) && -1 !== i.join("").indexOf("{self}") && (a[n] = this._swapSelfInParams(i));
                    o(a.tweens) && this.add(a.tweens, 0, a.align, a.stagger)
                },
                a = 1e-10,
                r = i._internals.isSelector,
                o = i._internals.isArray,
                s = [],
                l = window._gsDefine.globals,
                d = function(e) {
                    var t, i = {};
                    for (t in e) i[t] = e[t];
                    return i
                },
                c = function(e, t, i, n) {
                    e._timeline.pause(e._startTime), t && t.apply(n || e._timeline, i || s)
                },
                u = s.slice,
                h = n.prototype = new t;
            return n.version = "1.12.1", h.constructor = n, h.kill()._gc = !1, h.to = function(e, t, n, a) {
                var r = n.repeat && l.TweenMax || i;
                return t ? this.add(new r(e, t, n), a) : this.set(e, n, a)
            }, h.from = function(e, t, n, a) {
                return this.add((n.repeat && l.TweenMax || i).from(e, t, n), a)
            }, h.fromTo = function(e, t, n, a, r) {
                var o = a.repeat && l.TweenMax || i;
                return t ? this.add(o.fromTo(e, t, n, a), r) : this.set(e, a, r)
            }, h.staggerTo = function(e, t, a, o, s, l, c, h) {
                var p, f = new n({
                    onComplete: l,
                    onCompleteParams: c,
                    onCompleteScope: h,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof e && (e = i.selector(e) || e), r(e) && (e = u.call(e, 0)), o = o || 0, p = 0; e.length > p; p++) a.startAt && (a.startAt = d(a.startAt)), f.to(e[p], t, d(a), p * o);
                return this.add(f, s)
            }, h.staggerFrom = function(e, t, i, n, a, r, o, s) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, a, r, o, s)
            }, h.staggerFromTo = function(e, t, i, n, a, r, o, s, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, a, r, o, s, l)
            }, h.call = function(e, t, n, a) {
                return this.add(i.delayedCall(0, e, t, n), a)
            }, h.set = function(e, t, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
            }, n.exportRoot = function(e, t) {
                e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                var a, r, o = new n(e),
                    s = o._timeline;
                for (null == t && (t = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, a = s._first; a;) r = a._next, t && a instanceof i && a.target === a.vars.onComplete || o.add(a, a._startTime - a._delay), a = r;
                return s.add(o, 0), o
            }, h.add = function(a, r, s, l) {
                var d, c, u, h, p, f;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, a)), !(a instanceof e)) {
                    if (a instanceof Array || a && a.push && o(a)) {
                        for (s = s || "normal", l = l || 0, d = r, c = a.length, u = 0; c > u; u++) o(h = a[u]) && (h = new n({
                            tweens: h
                        })), this.add(h, d), "string" != typeof h && "function" != typeof h && ("sequence" === s ? d = h._startTime + h.totalDuration() / h._timeScale : "start" === s && (h._startTime -= h.delay())), d += l;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof a) return this.addLabel(a, r);
                    if ("function" != typeof a) throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string.";
                    a = i.delayedCall(0, a)
                }
                if (t.prototype.add.call(this, a, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (p = this, f = p.rawTime() > a._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                return this
            }, h.remove = function(t) {
                if (t instanceof e) return this._remove(t, !1);
                if (t instanceof Array || t && t.push && o(t)) {
                    for (var i = t.length; --i > -1;) this.remove(t[i]);
                    return this
                }
                return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
            }, h._remove = function(e, i) {
                t.prototype._remove.call(this, e, i);
                var n = this._last;
                return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, h.append = function(e, t) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
            }, h.insert = h.insertMultiple = function(e, t, i, n) {
                return this.add(e, t || 0, i, n)
            }, h.appendMultiple = function(e, t, i, n) {
                return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
            }, h.addLabel = function(e, t) {
                return this._labels[e] = this._parseTimeOrLabel(t), this
            }, h.addPause = function(e, t, i, n) {
                return this.call(c, ["{self}", t, i, n], this, e)
            }, h.removeLabel = function(e) {
                return delete this._labels[e], this
            }, h.getLabelTime = function(e) {
                return null != this._labels[e] ? this._labels[e] : -1
            }, h._parseTimeOrLabel = function(t, i, n, a) {
                var r;
                if (a instanceof e && a.timeline === this) this.remove(a);
                else if (a && (a instanceof Array || a.push && o(a)))
                    for (r = a.length; --r > -1;) a[r] instanceof e && a[r].timeline === this && this.remove(a[r]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
                if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                else {
                    if (r = t.indexOf("="), -1 === r) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                    i = parseInt(t.charAt(r - 1) + "1", 10) * Number(t.substr(r + 1)), t = r > 1 ? this._parseTimeOrLabel(t.substr(0, r - 1), 0, n) : this.duration()
                }
                return Number(t) + i
            }, h.seek = function(e, t) {
                return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
            }, h.stop = function() {
                return this.paused(!0)
            }, h.gotoAndPlay = function(e, t) {
                return this.play(e, t)
            }, h.gotoAndStop = function(e, t) {
                return this.pause(e, t)
            }, h.render = function(e, t, i) {
                this._gc && this._enabled(!0, !1);
                var n, r, o, l, d, c = this._dirty ? this.totalDuration() : this._totalDuration,
                    u = this._time,
                    h = this._startTime,
                    p = this._timeScale,
                    f = this._paused;
                if (e >= c ? (this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === a) && this._rawPrevTime !== e && this._first && (d = !0, this._rawPrevTime > a && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : a, e = c + 1e-4) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== a && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (l = "onReverseComplete", r = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (d = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : a, e = 0, this._initted || (d = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== u && this._first || i || d) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && e > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= u)
                        for (n = this._first; n && (o = n._next, !this._paused || f);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    else
                        for (n = this._last; n && (o = n._prev, !this._paused || f);)(n._active || u >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = o;
                    this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), l && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || s)))
                }
            }, h._hasPausedChild = function() {
                for (var e = this._first; e;) {
                    if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                    e = e._next
                }
                return !1
            }, h.getChildren = function(e, t, n, a) {
                a = a || -9999999999;
                for (var r = [], o = this._first, s = 0; o;) a > o._startTime || (o instanceof i ? t !== !1 && (r[s++] = o) : (n !== !1 && (r[s++] = o), e !== !1 && (r = r.concat(o.getChildren(!0, t, n)), s = r.length))), o = o._next;
                return r
            }, h.getTweensOf = function(e, t) {
                var n, a, r = this._gc,
                    o = [],
                    s = 0;
                for (r && this._enabled(!0, !0), n = i.getTweensOf(e), a = n.length; --a > -1;)(n[a].timeline === this || t && this._contains(n[a])) && (o[s++] = n[a]);
                return r && this._enabled(!1, !0), o
            }, h._contains = function(e) {
                for (var t = e.timeline; t;) {
                    if (t === this) return !0;
                    t = t.timeline
                }
                return !1
            }, h.shiftChildren = function(e, t, i) {
                i = i || 0;
                for (var n, a = this._first, r = this._labels; a;) a._startTime >= i && (a._startTime += e), a = a._next;
                if (t)
                    for (n in r) r[n] >= i && (r[n] += e);
                return this._uncache(!0)
            }, h._kill = function(e, t) {
                if (!e && !t) return this._enabled(!1, !1);
                for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, a = !1; --n > -1;) i[n]._kill(e, t) && (a = !0);
                return a
            }, h.clear = function(e) {
                var t = this.getChildren(!1, !0, !0),
                    i = t.length;
                for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                return e !== !1 && (this._labels = {}), this._uncache(!0)
            }, h.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return this
            }, h._enabled = function(e, i) {
                if (e === this._gc)
                    for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                return t.prototype._enabled.call(this, e, i)
            }, h.duration = function(e) {
                return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
            }, h.totalDuration = function(e) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var t, i, n = 0, a = this._last, r = 999999999999; a;) t = a._prev, a._dirty && a.totalDuration(), a._startTime > r && this._sortChildren && !a._paused ? this.add(a, a._startTime - a._delay) : r = a._startTime, 0 > a._startTime && !a._paused && (n -= a._startTime, this._timeline.smoothChildTiming && (this._startTime += a._startTime / this._timeScale), this.shiftChildren(-a._startTime, !1, -9999999999), r = 0), i = a._startTime + a._totalDuration / a._timeScale, i > n && (n = i), a = t;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
            }, h.usesFrames = function() {
                for (var t = this._timeline; t._timeline;) t = t._timeline;
                return t === e._rootFramesTimeline
            }, h.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, n
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("easing.Back", ["easing.Ease"], function(e) {
            var t, i, n, a = window.GreenSockGlobals || window,
                r = a.com.greensock,
                o = 2 * Math.PI,
                s = Math.PI / 2,
                l = r._class,
                d = function(t, i) {
                    var n = l("easing." + t, function() {}, !0),
                        a = n.prototype = new e;
                    return a.constructor = n, a.getRatio = i, n
                },
                c = e.register || function() {},
                u = function(e, t, i, n) {
                    var a = l("easing." + e, {
                        easeOut: new t,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(a, e), a
                },
                h = function(e, t, i) {
                    this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                },
                p = function(t, i) {
                    var n = l("easing." + t, function(e) {
                            this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        a = n.prototype = new e;
                    return a.constructor = n, a.getRatio = i, a.config = function(e) {
                        return new n(e)
                    }, n
                },
                f = u("Back", p("BackOut", function(e) {
                    return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                }), p("BackIn", function(e) {
                    return e * e * ((this._p1 + 1) * e - this._p1)
                }), p("BackInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(e, t, i) {
                    t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                g = m.prototype = new e;
            return g.constructor = m, g.getRatio = function(e) {
                var t = e + (.5 - e) * this._p;
                return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
            }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, i) {
                return new m(e, t, i)
            }, t = l("easing.SteppedEase", function(e) {
                e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
            }, !0), g = t.prototype = new e, g.constructor = t, g.getRatio = function(e) {
                return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
            }, g.config = t.config = function(e) {
                return new t(e)
            }, i = l("easing.RoughEase", function(t) {
                t = t || {};
                for (var i, n, a, r, o, s, l = t.taper || "none", d = [], c = 0, u = 0 | (t.points || 20), p = u, f = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = g ? g.getRatio(i) : i, "none" === l ? a = v : "out" === l ? (r = 1 - i, a = r * r * v) : "in" === l ? a = i * i * v : .5 > i ? (r = 2 * i, a = .5 * r * r * v) : (r = 2 * (1 - i), a = .5 * r * r * v), f ? n += Math.random() * a - .5 * a : p % 2 ? n += .5 * a : n -= .5 * a, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[c++] = {
                    x: i,
                    y: n
                };
                for (d.sort(function(e, t) {
                        return e.x - t.x
                    }), s = new h(1, 1, null), p = u; --p > -1;) o = d[p], s = new h(o.x, o.y, s);
                this._prev = new h(0, 0, 0 !== s.t ? s : s.next)
            }, !0), g = i.prototype = new e, g.constructor = i, g.getRatio = function(e) {
                var t = this._prev;
                if (e > t.t) {
                    for (; t.next && e >= t.t;) t = t.next;
                    t = t.prev
                } else
                    for (; t.prev && t.t >= e;) t = t.prev;
                return this._prev = t, t.v + (e - t.t) / t.gap * t.c
            }, g.config = function(e) {
                return new i(e)
            }, i.ease = new i, u("Bounce", d("BounceOut", function(e) {
                return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }), d("BounceIn", function(e) {
                return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }), d("BounceInOut", function(e) {
                var t = .5 > e;
                return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
            })), u("Circ", d("CircOut", function(e) {
                return Math.sqrt(1 - (e -= 1) * e)
            }), d("CircIn", function(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }), d("CircInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            })), n = function(t, i, n) {
                var a = l("easing." + t, function(e, t) {
                        this._p1 = e || 1, this._p2 = t || n, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    r = a.prototype = new e;
                return r.constructor = a, r.getRatio = i, r.config = function(e, t) {
                    return new a(e, t)
                }, a
            }, u("Elastic", n("ElasticOut", function(e) {
                return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * o / this._p2) + 1
            }, .3), n("ElasticIn", function(e) {
                return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2))
            }, .3), n("ElasticInOut", function(e) {
                return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * o / this._p2) + 1
            }, .45)), u("Expo", d("ExpoOut", function(e) {
                return 1 - Math.pow(2, -10 * e)
            }), d("ExpoIn", function(e) {
                return Math.pow(2, 10 * (e - 1)) - .001
            }), d("ExpoInOut", function(e) {
                return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            })), u("Sine", d("SineOut", function(e) {
                return Math.sin(e * s)
            }), d("SineIn", function(e) {
                return -Math.cos(e * s) + 1
            }), d("SineInOut", function(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            })), l("easing.EaseLookup", {
                find: function(t) {
                    return e.map[t]
                }
            }, !0), c(a.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(t, "SteppedEase", "ease,"), f
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(), (window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
            var i, n, a, r, o = function() {
                    e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                },
                s = {},
                l = o.prototype = new e("css");
            l.constructor = o, o.version = "1.12.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", l = "px", o.suffixMap = {
                top: l,
                right: l,
                bottom: l,
                left: l,
                width: l,
                height: l,
                fontSize: l,
                padding: l,
                margin: l,
                perspective: l,
                lineHeight: ""
            };
            var d, c, u, h, p, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /[^\d\-\.]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                w = /opacity *= *([^)]*)/i,
                x = /opacity:([^;]*)/i,
                _ = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                T = /([A-Z])/g,
                k = /-([a-z])/gi,
                S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                $ = function(e, t) {
                    return t.toUpperCase()
                },
                D = /(?:Left|Right|Width)/i,
                I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                N = /,(?=[^\)]*(?:\(|$))/gi,
                E = Math.PI / 180,
                P = 180 / Math.PI,
                M = {},
                O = document,
                L = O.createElement("div"),
                R = O.createElement("img"),
                j = o._internals = {
                    _specialProps: s
                },
                B = navigator.userAgent,
                z = function() {
                    var e, t = B.indexOf("Android"),
                        i = O.createElement("div");
                    return u = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), p = u && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), h = -1 !== B.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = i.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                }(),
                F = function(e) {
                    return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                H = function(e) {
                    window.console && console.log(e)
                },
                W = "",
                V = "",
                Y = function(e, t) {
                    t = t || L;
                    var i, n, a = t.style;
                    if (void 0 !== a[e]) return e;
                    for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === a[i[n] + e];);
                    return n >= 0 ? (V = 3 === n ? "ms" : i[n], W = "-" + V.toLowerCase() + "-", V + e) : null
                },
                q = O.defaultView ? O.defaultView.getComputedStyle : function() {},
                U = o.getStyle = function(e, t, i, n, a) {
                    var r;
                    return z || "opacity" !== t ? (!n && e.style[t] ? r = e.style[t] : (i = i || q(e)) ? r = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(T, "-$1").toLowerCase()) : e.currentStyle && (r = e.currentStyle[t]), null == a || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : a) : F(e)
                },
                X = j.convertToPixels = function(e, i, n, a, r) {
                    if ("px" === a || !a) return n;
                    if ("auto" === a || !n) return 0;
                    var s, l, d, c = D.test(i),
                        u = e,
                        h = L.style,
                        p = 0 > n;
                    if (p && (n = -n), "%" === a && -1 !== i.indexOf("border")) s = n / 100 * (c ? e.clientWidth : e.clientHeight);
                    else {
                        if (h.cssText = "border:0 solid red;position:" + U(e, "position") + ";line-height:0;", "%" !== a && u.appendChild) h[c ? "borderLeftWidth" : "borderTopWidth"] = n + a;
                        else {
                            if (u = e.parentNode || O.body, l = u._gsCache, d = t.ticker.frame, l && c && l.time === d) return l.width * n / 100;
                            h[c ? "width" : "height"] = n + a
                        }
                        u.appendChild(L), s = parseFloat(L[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), c && "%" === a && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = d, l.width = 100 * (s / n)), 0 !== s || r || (s = X(e, i, n, a, !0))
                    }
                    return p ? -s : s
                },
                Q = j.calculateOffset = function(e, t, i) {
                    if ("absolute" !== U(e, "position", i)) return 0;
                    var n = "left" === t ? "Left" : "Top",
                        a = U(e, "margin" + n, i);
                    return e["offset" + n] - (X(e, t, parseFloat(a), a.replace(b, "")) || 0)
                },
                K = function(e, t) {
                    var i, n, a = {};
                    if (t = t || q(e, null))
                        if (i = t.length)
                            for (; --i > -1;) a[t[i].replace(k, $)] = t.getPropertyValue(t[i]);
                        else
                            for (i in t) a[i] = t[i];
                    else if (t = e.currentStyle || e.style)
                        for (i in t) "string" == typeof i && void 0 === a[i] && (a[i.replace(k, $)] = t[i]);
                    return z || (a.opacity = F(e)), n = Te(e, t, !1), a.rotation = n.rotation, a.skewX = n.skewX, a.scaleX = n.scaleX, a.scaleY = n.scaleY, a.x = n.x, a.y = n.y, _e && (a.z = n.z, a.rotationX = n.rotationX, a.rotationY = n.rotationY, a.scaleZ = n.scaleZ), a.filters && delete a.filters, a
                },
                G = function(e, t, i, n, a) {
                    var r, o, s, l = {},
                        d = e.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (t[o] !== (r = i[o]) || a && a[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof t[o] || "" === t[o].replace(y, "") ? r : 0 : Q(e, o), void 0 !== d[o] && (s = new ue(d, o, d[o], s)));
                    if (n)
                        for (o in n) "className" !== o && (l[o] = n[o]);
                    return {
                        difs: l,
                        firstMPT: s
                    }
                },
                Z = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ee = function(e, t, i) {
                    var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                        a = Z[t],
                        r = a.length;
                    for (i = i || q(e, null); --r > -1;) n -= parseFloat(U(e, "padding" + a[r], i, !0)) || 0, n -= parseFloat(U(e, "border" + a[r] + "Width", i, !0)) || 0;
                    return n
                },
                te = function(e, t) {
                    (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                    var i = e.split(" "),
                        n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                        a = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                    return null == a ? a = "0" : "center" === a && (a = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== a.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === a.charAt(1), t.ox = parseFloat(n.replace(y, "")), t.oy = parseFloat(a.replace(y, ""))), n + " " + a + (i.length > 2 ? " " + i[2] : "")
                },
                ie = function(e, t) {
                    return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                },
                ne = function(e, t) {
                    return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                },
                ae = function(e, t, i, n) {
                    var a, r, o, s, l = 1e-6;
                    return null == e ? s = t : "number" == typeof e ? s = e : (a = 360, r = e.split("_"), o = Number(r[0].replace(y, "")) * (-1 === e.indexOf("rad") ? 1 : P) - ("=" === e.charAt(1) ? 0 : t), r.length && (n && (n[i] = t + o), -1 !== e.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== e.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== e.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), s = t + o), l > s && s > -l && (s = 0), s
                },
                re = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                oe = function(e, t, i) {
                    return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (i - t) * e : .5 > e ? i : 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
                },
                se = function(e) {
                    var t, i, n, a, r, o;
                    return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), re[e] ? re[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), n = e.charAt(3), e = "#" + t + t + i + i + n + n), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(m), a = Number(e[0]) % 360 / 360, r = Number(e[1]) / 100, o = Number(e[2]) / 100, i = .5 >= o ? o * (r + 1) : o + r - o * r, t = 2 * o - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = oe(a + 1 / 3, t, i), e[1] = oe(a, t, i), e[2] = oe(a - 1 / 3, t, i), e) : (e = e.match(m) || re.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : re.black
                },
                le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (l in re) le += "|" + l + "\\b";
            le = RegExp(le + ")", "gi");
            var de = function(e, t, i, n) {
                    if (null == e) return function(e) {
                        return e
                    };
                    var a, r = t ? (e.match(le) || [""])[0] : "",
                        o = e.split(r).join("").match(v) || [],
                        s = e.substr(0, e.indexOf(o[0])),
                        l = ")" === e.charAt(e.length - 1) ? ")" : "",
                        d = -1 !== e.indexOf(" ") ? " " : ",",
                        c = o.length,
                        u = c > 0 ? o[0].replace(m, "") : "";
                    return c ? a = t ? function(e) {
                        var t, h, p, f;
                        if ("number" == typeof e) e += u;
                        else if (n && N.test(e)) {
                            for (f = e.replace(N, "|").split("|"), p = 0; f.length > p; p++) f[p] = a(f[p]);
                            return f.join(",")
                        }
                        if (t = (e.match(le) || [r])[0], h = e.split(t).join("").match(v) || [], p = h.length, c > p--)
                            for (; c > ++p;) h[p] = i ? h[0 | (p - 1) / 2] : o[p];
                        return s + h.join(d) + d + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                    } : function(e) {
                        var t, r, h;
                        if ("number" == typeof e) e += u;
                        else if (n && N.test(e)) {
                            for (r = e.replace(N, "|").split("|"), h = 0; r.length > h; h++) r[h] = a(r[h]);
                            return r.join(",")
                        }
                        if (t = e.match(v) || [], h = t.length, c > h--)
                            for (; c > ++h;) t[h] = i ? t[0 | (h - 1) / 2] : o[h];
                        return s + t.join(d) + l
                    } : function(e) {
                        return e
                    }
                },
                ce = function(e) {
                    return e = e.split(","),
                        function(t, i, n, a, r, o, s) {
                            var l, d = (i + "").split(" ");
                            for (s = {}, l = 0; 4 > l; l++) s[e[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return a.parse(t, s, r, o)
                        }
                },
                ue = (j._setPluginRatio = function(e) {
                    this.plugin.setRatio(e);
                    for (var t, i, n, a, r = this.data, o = r.proxy, s = r.firstMPT, l = 1e-6; s;) t = o[s.v], s.r ? t = Math.round(t) : l > t && t > -l && (t = 0), s.t[s.p] = t, s = s._next;
                    if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === e)
                        for (s = r.firstMPT; s;) {
                            if (i = s.t, i.type) {
                                if (1 === i.type) {
                                    for (a = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) a += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = a
                                }
                            } else i.e = i.s + i.xs0;
                            s = s._next
                        }
                }, function(e, t, i, n, a) {
                    this.t = e, this.p = t, this.v = i, this.r = a, n && (n._prev = this, this._next = n)
                }),
                he = (j._parseToProxy = function(e, t, i, n, a, r) {
                    var o, s, l, d, c, u = n,
                        h = {},
                        p = {},
                        f = i._transform,
                        m = M;
                    for (i._transform = null, M = t, n = c = i.parse(e, t, n, a), M = m, r && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                        if (1 >= n.type && (s = n.p, p[s] = n.s + n.c, h[s] = n.s, r || (d = new ue(n, "s", s, d, n.r), n.c = 0), 1 === n.type))
                            for (o = n.l; --o > 0;) l = "xn" + o, s = n.p + "_" + l, p[s] = n.data[l], h[s] = n[l], r || (d = new ue(n, l, s, d, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: h,
                        end: p,
                        firstMPT: d,
                        pt: c
                    }
                }, j.CSSPropTween = function(e, t, n, a, o, s, l, d, c, u, h) {
                    this.t = e, this.p = t, this.s = n, this.c = a, this.n = l || t, e instanceof he || r.push(this.n), this.r = d, this.type = s || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === h ? n + a : h, o && (this._next = o, o._prev = this)
                }),
                pe = o.parseComplex = function(e, t, i, n, a, r, o, s, l, c) {
                    i = i || r || "", o = new he(e, t, 0, 0, o, c ? 2 : 1, null, !1, s, i, n), n += "";
                    var u, h, p, f, v, y, b, w, x, _, T, k, S = i.split(", ").join(",").split(" "),
                        $ = n.split(", ").join(",").split(" "),
                        D = S.length,
                        I = d !== !1;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(N, ", ").split(" "), $ = $.join(" ").replace(N, ", ").split(" "), D = S.length), D !== $.length && (S = (r || "").split(" "), D = S.length), o.plugin = l, o.setRatio = c, u = 0; D > u; u++)
                        if (f = S[u], v = $[u], w = parseFloat(f), w || 0 === w) o.appendXtra("", w, ie(v, w), v.replace(g, ""), I && -1 !== v.indexOf("px"), !0);
                        else if (a && ("#" === f.charAt(0) || re[f] || C.test(f))) k = "," === v.charAt(v.length - 1) ? ")," : ")", f = se(f), v = se(v), x = f.length + v.length > 6, x && !z && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split($[u]).join("transparent")) : (z || (x = !1), o.appendXtra(x ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], x ? "," : k, !0), x && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, k, !1)));
                    else if (y = f.match(m)) {
                        if (b = v.match(g), !b || b.length !== y.length) return o;
                        for (p = 0, h = 0; y.length > h; h++) T = y[h], _ = f.indexOf(T, p), o.appendXtra(f.substr(p, _ - p), Number(T), ie(b[h], T), "", I && "px" === f.substr(_ + T.length, 2), 0 === h), p = _ + T.length;
                        o["xs" + o.l] += f.substr(p)
                    } else o["xs" + o.l] += o.l ? " " + f : f;
                    if (-1 !== n.indexOf("=") && o.data) {
                        for (k = o.xs0 + o.data.s, u = 1; o.l > u; u++) k += o["xs" + u] + o.data["xn" + u];
                        o.e = k + o["xs" + u]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                fe = 9;
            for (l = he.prototype, l.l = l.pr = 0; --fe > 0;) l["xn" + fe] = 0, l["xs" + fe] = "";
            l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(e, t, i, n, a, r) {
                var o = this,
                    s = o.l;
                return o["xs" + s] += r && s ? " " + e : e || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", s > 0 ? (o.data["xn" + s] = t + i, o.rxp["xn" + s] = a, o["xn" + s] = t, o.plugin || (o.xfirst = new he(o, "xn" + s, t, i, o.xfirst || o, 0, o.n, a, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: t + i
                }, o.rxp = {}, o.s = t, o.c = i, o.r = a, o)) : (o["xs" + s] += t + (n || ""), o)
            };
            var me = function(e, t) {
                    t = t || {}, this.p = t.prefix ? Y(e) || e : e, s[e] = s[this.p] = this, this.format = t.formatter || de(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                },
                ge = j._registerComplexSpecialProp = function(e, t, i) {
                    "object" != typeof t && (t = {
                        parser: i
                    });
                    var n, a, r = e.split(","),
                        o = t.defaultValue;
                    for (i = i || [o], n = 0; r.length > n; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || o, a = new me(r[n], t)
                },
                ve = function(e) {
                    if (!s[e]) {
                        var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                        ge(e, {
                            parser: function(e, i, n, a, r, o, l) {
                                var d = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                return d ? (d._cssRegister(), s[n].parse(e, i, n, a, r, o, l)) : (H("Error: " + t + " js file not loaded."), r)
                            }
                        })
                    }
                };
            l = me.prototype, l.parseComplex = function(e, t, i, n, a, r) {
                var o, s, l, d, c, u, h = this.keyword;
                if (this.multi && (N.test(i) || N.test(t) ? (s = t.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : h && (s = [t], l = [i])), l) {
                    for (d = l.length > s.length ? l.length : s.length, o = 0; d > o; o++) t = s[o] = s[o] || this.dflt, i = l[o] = l[o] || this.dflt, h && (c = t.indexOf(h), u = i.indexOf(h), c !== u && (i = -1 === u ? l : s, i[o] += " " + h));
                    t = s.join(", "), i = l.join(", ")
                }
                return pe(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, a, r)
            }, l.parse = function(e, t, i, n, r, o) {
                return this.parseComplex(e.style, this.format(U(e, this.p, a, !1, this.dflt)), this.format(t), r, o)
            }, o.registerSpecialProp = function(e, t, i) {
                ge(e, {
                    parser: function(e, n, a, r, o, s) {
                        var l = new he(e, a, 0, 0, o, 2, a, !1, i);
                        return l.plugin = s, l.setRatio = t(e, n, r._tween, a), l
                    },
                    priority: i
                })
            };
            var ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective".split(","),
                be = Y("transform"),
                we = W + "transform",
                xe = Y("transformOrigin"),
                _e = null !== Y("perspective"),
                Ce = j.Transform = function() {
                    this.skewY = 0
                },
                Te = j.getTransform = function(e, t, i, n) {
                    if (e._gsTransform && i && !n) return e._gsTransform;
                    var a, r, s, l, d, c, u, h, p, f, m, g, v, y = i ? e._gsTransform || new Ce : new Ce,
                        b = 0 > y.scaleX,
                        w = 2e-5,
                        x = 1e5,
                        _ = 179.99,
                        C = _ * E,
                        T = _e ? parseFloat(U(e, xe, t, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0;
                    for (be ? a = U(e, we, t, !0) : e.currentStyle && (a = e.currentStyle.filter.match(I), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), r = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], s = r.length; --s > -1;) l = Number(r[s]), r[s] = (d = l - (l |= 0)) ? (0 | d * x + (0 > d ? -.5 : .5)) / x + l : l;
                    if (16 === r.length) {
                        var k = r[8],
                            S = r[9],
                            $ = r[10],
                            D = r[12],
                            A = r[13],
                            N = r[14];
                        if (y.zOrigin && (N = -y.zOrigin, D = k * N - r[12], A = S * N - r[13], N = $ * N + y.zOrigin - r[14]), !i || n || null == y.rotationX) {
                            var M, O, L, R, j, B, z, F = r[0],
                                H = r[1],
                                W = r[2],
                                V = r[3],
                                Y = r[4],
                                q = r[5],
                                X = r[6],
                                Q = r[7],
                                K = r[11],
                                G = Math.atan2(X, $),
                                Z = -C > G || G > C;
                            y.rotationX = G * P, G && (R = Math.cos(-G), j = Math.sin(-G), M = Y * R + k * j, O = q * R + S * j, L = X * R + $ * j, k = Y * -j + k * R, S = q * -j + S * R, $ = X * -j + $ * R, K = Q * -j + K * R, Y = M, q = O, X = L), G = Math.atan2(k, F), y.rotationY = G * P, G && (B = -C > G || G > C, R = Math.cos(-G), j = Math.sin(-G), M = F * R - k * j, O = H * R - S * j, L = W * R - $ * j, S = H * j + S * R, $ = W * j + $ * R, K = V * j + K * R, F = M, H = O, W = L), G = Math.atan2(H, q), y.rotation = G * P, G && (z = -C > G || G > C, R = Math.cos(-G), j = Math.sin(-G), F = F * R + Y * j, O = H * R + q * j, q = H * -j + q * R, X = W * -j + X * R, H = O), z && Z ? y.rotation = y.rotationX = 0 : z && B ? y.rotation = y.rotationY = 0 : B && Z && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(F * F + H * H) * x + .5) / x, y.scaleY = (0 | Math.sqrt(q * q + S * S) * x + .5) / x, y.scaleZ = (0 | Math.sqrt(X * X + $ * $) * x + .5) / x, y.skewX = 0, y.perspective = K ? 1 / (0 > K ? -K : K) : 0, y.x = D, y.y = A, y.z = N
                        }
                    } else if (!(_e && !n && r.length && y.x === r[4] && y.y === r[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === U(e, "display", t))) {
                        var J = r.length >= 6,
                            ee = J ? r[0] : 1,
                            te = r[1] || 0,
                            ie = r[2] || 0,
                            ne = J ? r[3] : 1;
                        y.x = r[4] || 0, y.y = r[5] || 0, c = Math.sqrt(ee * ee + te * te), u = Math.sqrt(ne * ne + ie * ie), h = ee || te ? Math.atan2(te, ee) * P : y.rotation || 0, p = ie || ne ? Math.atan2(ie, ne) * P + h : y.skewX || 0, f = c - Math.abs(y.scaleX || 0), m = u - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (b ? (c *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (u *= -1, p += 0 >= p ? 180 : -180)), g = (h - y.rotation) % 180, v = (p - y.skewX) % 180, (void 0 === y.skewX || f > w || -w > f || m > w || -w > m || g > -_ && _ > g && !1 | g * x || v > -_ && _ > v && !1 | v * x) && (y.scaleX = c, y.scaleY = u, y.rotation = h, y.skewX = p), _e && (y.rotationX = y.rotationY = y.z = 0, y.perspective = parseFloat(o.defaultTransformPerspective) || 0, y.scaleZ = 1)
                    }
                    y.zOrigin = T;
                    for (s in y) w > y[s] && y[s] > -w && (y[s] = 0);
                    return i && (e._gsTransform = y), y
                },
                ke = function(e) {
                    var t, i, n = this.data,
                        a = -n.rotation * E,
                        r = a + n.skewX * E,
                        o = 1e5,
                        s = (0 | Math.cos(a) * n.scaleX * o) / o,
                        l = (0 | Math.sin(a) * n.scaleX * o) / o,
                        d = (0 | Math.sin(r) * -n.scaleY * o) / o,
                        c = (0 | Math.cos(r) * n.scaleY * o) / o,
                        u = this.t.style,
                        h = this.t.currentStyle;
                    if (h) {
                        i = l, l = -d, d = -i, t = h.filter, u.filter = "";
                        var p, m, g = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            y = "absolute" !== h.position,
                            x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + d + ", M22=" + c,
                            _ = n.x,
                            C = n.y;
                        if (null != n.ox && (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, _ += p - (p * s + m * l), C += m - (p * d + m * c)), y ? (p = g / 2, m = v / 2, x += ", Dx=" + (p - (p * s + m * l) + _) + ", Dy=" + (m - (p * d + m * c) + C) + ")") : x += ", sizingMethod='auto expand')", u.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(A, x) : x + " " + t, (0 === e || 1 === e) && 1 === s && 0 === l && 0 === d && 1 === c && (y && -1 === x.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                            var T, k, S, $ = 8 > f ? 1 : -1;
                            for (p = n.ieOffsetX || 0,
                                m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > s ? -s : s) * g + (0 > l ? -l : l) * v)) / 2 + _), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > d ? -d : d) * g)) / 2 + C), fe = 0; 4 > fe; fe++) k = J[fe], T = h[k], i = -1 !== T.indexOf("px") ? parseFloat(T) : X(this.t, k, parseFloat(T), T.replace(b, "")) || 0, S = i !== n[k] ? 2 > fe ? -n.ieOffsetX : -n.ieOffsetY : 2 > fe ? p - n.ieOffsetX : m - n.ieOffsetY, u[k] = (n[k] = Math.round(i - S * (0 === fe || 2 === fe ? 1 : $))) + "px"
                        }
                    }
                },
                Se = j.set3DTransformRatio = function(e) {
                    var t, i, n, a, r, o, s, l, d, c, u, p, f, m, g, v, y, b, w, x, _, C, T, k = this.data,
                        S = this.t.style,
                        $ = k.rotation * E,
                        D = k.scaleX,
                        I = k.scaleY,
                        A = k.scaleZ,
                        N = k.perspective;
                    if (!(1 !== e && 0 !== e || "auto" !== k.force3D || k.rotationY || k.rotationX || 1 !== A || N || k.z)) return void $e.call(this, e);
                    if (h) {
                        var P = 1e-4;
                        P > D && D > -P && (D = A = 2e-5), P > I && I > -P && (I = A = 2e-5), !N || k.z || k.rotationX || k.rotationY || (N = 0)
                    }
                    if ($ || k.skewX) b = Math.cos($), w = Math.sin($), t = b, r = w, k.skewX && ($ -= k.skewX * E, b = Math.cos($), w = Math.sin($), "simple" === k.skewType && (x = Math.tan(k.skewX * E), x = Math.sqrt(1 + x * x), b *= x, w *= x)), i = -w, o = b;
                    else {
                        if (!(k.rotationY || k.rotationX || 1 !== A || N)) return void(S[be] = "translate3d(" + k.x + "px," + k.y + "px," + k.z + "px)" + (1 !== D || 1 !== I ? " scale(" + D + "," + I + ")" : ""));
                        t = o = 1, i = r = 0
                    }
                    u = 1, n = a = s = l = d = c = p = f = m = 0, g = N ? -1 / N : 0, v = k.zOrigin, y = 1e5, $ = k.rotationY * E, $ && (b = Math.cos($), w = Math.sin($), d = u * -w, f = g * -w, n = t * w, s = r * w, u *= b, g *= b, t *= b, r *= b), $ = k.rotationX * E, $ && (b = Math.cos($), w = Math.sin($), x = i * b + n * w, _ = o * b + s * w, C = c * b + u * w, T = m * b + g * w, n = i * -w + n * b, s = o * -w + s * b, u = c * -w + u * b, g = m * -w + g * b, i = x, o = _, c = C, m = T), 1 !== A && (n *= A, s *= A, u *= A, g *= A), 1 !== I && (i *= I, o *= I, c *= I, m *= I), 1 !== D && (t *= D, r *= D, d *= D, f *= D), v && (p -= v, a = n * p, l = s * p, p = u * p + v), a = (x = (a += k.x) - (a |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + a : a, l = (x = (l += k.y) - (l |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + l : l, p = (x = (p += k.z) - (p |= 0)) ? (0 | x * y + (0 > x ? -.5 : .5)) / y + p : p, S[be] = "matrix3d(" + [(0 | t * y) / y, (0 | r * y) / y, (0 | d * y) / y, (0 | f * y) / y, (0 | i * y) / y, (0 | o * y) / y, (0 | c * y) / y, (0 | m * y) / y, (0 | n * y) / y, (0 | s * y) / y, (0 | u * y) / y, (0 | g * y) / y, a, l, p, N ? 1 + -p / N : 1].join(",") + ")"
                },
                $e = j.set2DTransformRatio = function(e) {
                    var t, i, n, a, r, o = this.data,
                        s = this.t,
                        l = s.style;
                    return o.rotationX || o.rotationY || o.z || o.force3D === !0 || "auto" === o.force3D && 1 !== e && 0 !== e ? (this.setRatio = Se, void Se.call(this, e)) : void(o.rotation || o.skewX ? (t = o.rotation * E, i = t - o.skewX * E, n = 1e5, a = o.scaleX * n, r = o.scaleY * n, l[be] = "matrix(" + (0 | Math.cos(t) * a) / n + "," + (0 | Math.sin(t) * a) / n + "," + (0 | Math.sin(i) * -r) / n + "," + (0 | Math.cos(i) * r) / n + "," + o.x + "," + o.y + ")") : l[be] = "matrix(" + o.scaleX + ",0,0," + o.scaleY + "," + o.x + "," + o.y + ")")
                };
            ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType", {
                parser: function(e, t, i, n, r, s, l) {
                    if (n._transform) return r;
                    var d, c, u, h, p, f, m, g = n._transform = Te(e, a, !0, l.parseTransform),
                        v = e.style,
                        y = 1e-6,
                        b = ye.length,
                        w = l,
                        x = {};
                    if ("string" == typeof w.transform && be) u = L.style, u[be] = w.transform, u.display = "block", u.position = "absolute", O.body.appendChild(L), d = Te(L, null, !1), O.body.removeChild(L);
                    else if ("object" == typeof w) {
                        if (d = {
                                scaleX: ne(null != w.scaleX ? w.scaleX : w.scale, g.scaleX),
                                scaleY: ne(null != w.scaleY ? w.scaleY : w.scale, g.scaleY),
                                scaleZ: ne(w.scaleZ, g.scaleZ),
                                x: ne(w.x, g.x),
                                y: ne(w.y, g.y),
                                z: ne(w.z, g.z),
                                perspective: ne(w.transformPerspective, g.perspective)
                            }, m = w.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (u in m) w[u] = m[u];
                            else w.rotation = m;
                        d.rotation = ae("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : g.rotation, g.rotation, "rotation", x), _e && (d.rotationX = ae("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", x), d.rotationY = ae("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", x)), d.skewX = null == w.skewX ? g.skewX : ae(w.skewX, g.skewX), d.skewY = null == w.skewY ? g.skewY : ae(w.skewY, g.skewY), (c = d.skewY - g.skewY) && (d.skewX += c, d.rotation += c)
                    }
                    for (_e && null != w.force3D && (g.force3D = w.force3D, f = !0), g.skewType = w.skewType || g.skewType || o.defaultSkewType, p = g.force3D || g.z || g.rotationX || g.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == w.scale || (d.scaleZ = 1); --b > -1;) i = ye[b], h = d[i] - g[i], (h > y || -y > h || null != M[i]) && (f = !0, r = new he(g, i, g[i], h, r), i in x && (r.e = x[i]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                    return h = w.transformOrigin, (h || _e && p && g.zOrigin) && (be ? (f = !0, i = xe, h = (h || U(e, i, a, !1, "50% 50%")) + "", r = new he(v, i, 0, 0, r, -1, "transformOrigin"), r.b = v[i], r.plugin = s, _e ? (u = g.zOrigin, h = h.split(" "), g.zOrigin = (h.length > 2 && (0 === u || "0px" !== h[2]) ? parseFloat(h[2]) : u) || 0, r.xs0 = r.e = h[0] + " " + (h[1] || "50%") + " 0px", r = new he(g, "zOrigin", 0, 0, r, -1, r.n), r.b = u, r.xs0 = r.e = g.zOrigin) : r.xs0 = r.e = h) : te(h + "", g)), f && (n._transformType = p || 3 === this._transformType ? 3 : 2), r
                },
                prefix: !0
            }), ge("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ge("borderRadius", {
                defaultValue: "0px",
                parser: function(e, t, i, r, o) {
                    t = this.format(t);
                    var s, l, d, c, u, h, p, f, m, g, v, y, b, w, x, _, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        T = e.style;
                    for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), s = t.split(" "), l = 0; C.length > l; l++) this.p.indexOf("border") && (C[l] = Y(C[l])), u = c = U(e, C[l], a, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), h = d = s[l], p = parseFloat(u), y = u.substr((p + "").length), b = "=" === h.charAt(1), b ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), v = h.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(h), v = h.substr((f + "").length)), "" === v && (v = n[i] || y), v !== y && (w = X(e, "borderLeft", p, y), x = X(e, "borderTop", p, y), "%" === v ? (u = 100 * (w / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (_ = X(e, "borderLeft", 1, "em"), u = w / _ + "em", c = x / _ + "em") : (u = w + "px", c = x + "px"), b && (h = parseFloat(u) + f + v, d = parseFloat(c) + f + v)), o = pe(T, C[l], u + " " + c, h + " " + d, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: de("0px 0px 0px 0px", !1, !0)
            }), ge("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(e, t, i, n, r, o) {
                    var s, l, d, c, u, h, p = "background-position",
                        m = a || q(e, null),
                        g = this.format((m ? f ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(t);
                    if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (h = U(e, "backgroundImage").replace(S, ""), h && "none" !== h)) {
                        for (s = g.split(" "), l = v.split(" "), R.setAttribute("src", h), d = 2; --d > -1;) g = s[d], c = -1 !== g.indexOf("%"), c !== (-1 !== l[d].indexOf("%")) && (u = 0 === d ? e.offsetWidth - R.width : e.offsetHeight - R.height, s[d] = c ? parseFloat(g) / 100 * u + "px" : 100 * (parseFloat(g) / u) + "%");
                        g = s.join(" ")
                    }
                    return this.parseComplex(e.style, g, v, r, o)
                },
                formatter: te
            }), ge("backgroundSize", {
                defaultValue: "0 0",
                formatter: te
            }), ge("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ge("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ge("transformStyle", {
                prefix: !0
            }), ge("backfaceVisibility", {
                prefix: !0
            }), ge("userSelect", {
                prefix: !0
            }), ge("margin", {
                parser: ce("marginTop,marginRight,marginBottom,marginLeft")
            }), ge("padding", {
                parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ge("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(e, t, i, n, r, o) {
                    var s, l, d;
                    return 9 > f ? (l = e.currentStyle, d = 8 > f ? " " : ",", s = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", t = this.format(t).split(",").join(d)) : (s = this.format(U(e, this.p, a, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, s, t, r, o)
                }
            }), ge("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ge("autoRound,strictUnits", {
                parser: function(e, t, i, n, a) {
                    return a
                }
            }), ge("border", {
                defaultValue: "0px solid #000",
                parser: function(e, t, i, n, r, o) {
                    return this.parseComplex(e.style, this.format(U(e, "borderTopWidth", a, !1, "0px") + " " + U(e, "borderTopStyle", a, !1, "solid") + " " + U(e, "borderTopColor", a, !1, "#000")), this.format(t), r, o)
                },
                color: !0,
                formatter: function(e) {
                    var t = e.split(" ");
                    return t[0] + " " + (t[1] || "solid") + " " + (e.match(le) || ["#000"])[0]
                }
            }), ge("borderWidth", {
                parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ge("float,cssFloat,styleFloat", {
                parser: function(e, t, i, n, a) {
                    var r = e.style,
                        o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                    return new he(r, o, 0, 0, a, -1, i, !1, 0, r[o], t)
                }
            });
            var De = function(e) {
                var t, i = this.t,
                    n = i.filter || U(this.data, "filter"),
                    a = 0 | this.s + this.c * e;
                100 === a && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !U(this.data, "filter")) : (i.filter = n.replace(_, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + a + ")"), -1 === n.indexOf("pacity") ? 0 === a && this.xn1 || (i.filter = n + " alpha(opacity=" + a + ")") : i.filter = n.replace(w, "opacity=" + a))
            };
            ge("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(e, t, i, n, r, o) {
                    var s = parseFloat(U(e, "opacity", a, !1, "1")),
                        l = e.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + s), d && 1 === s && "hidden" === U(e, "visibility", a) && 0 !== t && (s = 0), z ? r = new he(l, "opacity", s, t - s, r) : (r = new he(l, "opacity", 100 * s, 100 * (t - s), r), r.xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = e, r.plugin = o, r.setRatio = De), d && (r = new he(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                }
            });
            var Ie = function(e, t) {
                    t && (e.removeProperty ? ("ms" === t.substr(0, 2) && (t = "M" + t.substr(1)), e.removeProperty(t.replace(T, "-$1").toLowerCase())) : e.removeAttribute(t))
                },
                Ae = function(e) {
                    if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                        this.t.setAttribute("class", 0 === e ? this.b : this.e);
                        for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : Ie(i, t.p), t = t._next;
                        1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ge("className", {
                parser: function(e, t, n, r, o, s, l) {
                    var d, c, u, h, p, f = e.getAttribute("class") || "",
                        m = e.style.cssText;
                    if (o = r._classNamePT = new he(e, n, 0, 0, o, 2), o.setRatio = Ae, o.pr = -11, i = !0, o.b = f, c = K(e, a), u = e._gsClassPT) {
                        for (h = {}, p = u.data; p;) h[p.p] = 1, p = p._next;
                        u.setRatio(1)
                    }
                    return e._gsClassPT = o, o.e = "=" !== t.charAt(1) ? t : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), r._tween._duration && (e.setAttribute("class", o.e), d = G(e, c, K(e), l, h), e.setAttribute("class", f), o.data = d.firstMPT, e.style.cssText = m, o = o.xfirst = r.parse(e, d.difs, o, s)), o
                }
            });
            var Ne = function(e) {
                if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var t, i, n, a, r = this.t.style,
                        o = s.transform.parse;
                    if ("all" === this.e) r.cssText = "", a = !0;
                    else
                        for (t = this.e.split(","), n = t.length; --n > -1;) i = t[n], s[i] && (s[i].parse === o ? a = !0 : i = "transformOrigin" === i ? xe : s[i].p), Ie(r, i);
                    a && (Ie(r, be), this.t._gsTransform && delete this.t._gsTransform)
                }
            };
            for (ge("clearProps", {
                    parser: function(e, t, n, a, r) {
                        return r = new he(e, n, 0, 0, r, 2), r.setRatio = Ne, r.e = t, r.pr = -10, r.data = a._tween, i = !0, r
                    }
                }), l = "bezier,throwProps,physicsProps,physics2D".split(","), fe = l.length; fe--;) ve(l[fe]);
            l = o.prototype, l._firstPT = null, l._onInitTween = function(e, t, s) {
                if (!e.nodeType) return !1;
                this._target = e, this._tween = s, this._vars = t, d = t.autoRound, i = !1, n = t.suffixMap || o.suffixMap, a = q(e, ""), r = this._overwriteProps;
                var l, h, f, m, g, v, y, b, w, _ = e.style;
                if (c && "" === _.zIndex && (l = U(e, "zIndex", a), ("auto" === l || "" === l) && this._addLazySet(_, "zIndex", 0)), "string" == typeof t && (m = _.cssText, l = K(e, a), _.cssText = m + ";" + t, l = G(e, l, K(e)).difs, !z && x.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, _.cssText = m), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                    for (w = 3 === this._transformType, be ? u && (c = !0, "" === _.zIndex && (y = U(e, "zIndex", a), ("auto" === y || "" === y) && this._addLazySet(_, "zIndex", 0)), p && this._addLazySet(_, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : _.zoom = 1, f = h; f && f._next;) f = f._next;
                    b = new he(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, f), b.setRatio = w && _e ? Se : be ? $e : ke, b.data = this._transform || Te(e, a, !0), r.pop()
                }
                if (i) {
                    for (; h;) {
                        for (v = h._next, f = m; f && f.pr > h.pr;) f = f._next;
                        (h._prev = f ? f._prev : g) ? h._prev._next = h: m = h, (h._next = f) ? f._prev = h : g = h, h = v
                    }
                    this._firstPT = m
                }
                return !0
            }, l.parse = function(e, t, i, r) {
                var o, l, c, u, h, p, f, m, g, v, y = e.style;
                for (o in t) p = t[o], l = s[o], l ? i = l.parse(e, p, o, this, i, r, t) : (h = U(e, o, a) + "", g = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && C.test(p) ? (g || (p = se(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pe(y, o, h, p, !0, "transparent", i, 0, r)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (c = parseFloat(h), f = c || 0 === c ? h.substr((c + "").length) : "", ("" === h || "auto" === h) && ("width" === o || "height" === o ? (c = ee(e, o, a), f = "px") : "left" === o || "top" === o ? (c = Q(e, o, a), f = "px") : (c = "opacity" !== o ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(b, "")) : (u = parseFloat(p), m = g ? p.substr((u + "").length) || "" : ""), "" === m && (m = o in n ? n[o] : f), p = u || 0 === u ? (v ? u + c : u) + m : t[o], f !== m && "" !== m && (u || 0 === u) && c && (c = X(e, o, c, f), "%" === m ? (c /= X(e, o, 100, "%") / 100, t.strictUnits !== !0 && (h = c + "%")) : "em" === m ? c /= X(e, o, 1, "em") : "px" !== m && (u = X(e, o, u, m), m = "px"), v && (u || 0 === u) && (p = u + c + m)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (i = new he(y, o, u || c || 0, 0, i, -1, o, !1, 0, h, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : h) : H("invalid " + o + " tween value: " + t[o]) : (i = new he(y, o, c, u - c, i, 0, o, d !== !1 && ("px" === m || "zIndex" === o), 0, h, p), i.xs0 = m)) : i = pe(y, o, h, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                return i
            }, l.setRatio = function(e) {
                var t, i, n, a = this._firstPT,
                    r = 1e-6;
                if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; a;) {
                            if (t = a.c * e + a.s, a.r ? t = Math.round(t) : r > t && t > -r && (t = 0), a.type)
                                if (1 === a.type)
                                    if (n = a.l, 2 === n) a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2;
                                    else if (3 === n) a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
                            else if (4 === n) a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4;
                            else if (5 === n) a.t[a.p] = a.xs0 + t + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4 + a.xn4 + a.xs5;
                            else {
                                for (i = a.xs0 + t + a.xs1, n = 1; a.l > n; n++) i += a["xn" + n] + a["xs" + (n + 1)];
                                a.t[a.p] = i
                            } else -1 === a.type ? a.t[a.p] = a.xs0 : a.setRatio && a.setRatio(e);
                            else a.t[a.p] = t + a.xs0;
                            a = a._next
                        } else
                            for (; a;) 2 !== a.type ? a.t[a.p] = a.b : a.setRatio(e), a = a._next;
                    else
                        for (; a;) 2 !== a.type ? a.t[a.p] = a.e : a.setRatio(e), a = a._next
            }, l._enableTransforms = function(e) {
                this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Te(this._target, a, !0)
            };
            var Ee = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            l._addLazySet = function(e, t, i) {
                var n = this._firstPT = new he(e, t, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Ee, n.data = this
            }, l._linkCSSP = function(e, t, i, n) {
                return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
            }, l._kill = function(t) {
                var i, n, a, r = t;
                if (t.autoAlpha || t.alpha) {
                    r = {};
                    for (n in t) r[n] = t[n];
                    r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                }
                return t.className && (i = this._classNamePT) && (a = i.xfirst, a && a._prev ? this._linkCSSP(a._prev, i._next, a._prev._prev) : a === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, a._prev), this._classNamePT = null), e.prototype._kill.call(this, r)
            };
            var Pe = function(e, t, i) {
                var n, a, r, o;
                if (e.slice)
                    for (a = e.length; --a > -1;) Pe(e[a], t, i);
                else
                    for (n = e.childNodes, a = n.length; --a > -1;) r = n[a], o = r.type, r.style && (t.push(K(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Pe(r, t, i)
            };
            return o.cascadeTo = function(e, i, n) {
                var a, r, o, s = t.to(e, i, n),
                    l = [s],
                    d = [],
                    c = [],
                    u = [],
                    h = t._internals.reservedProps;
                for (e = s._targets || s.target, Pe(e, d, u), s.render(i, !0), Pe(e, c), s.render(0, !0), s._enabled(!0), a = u.length; --a > -1;)
                    if (r = G(u[a], d[a], c[a]), r.firstMPT) {
                        r = r.difs;
                        for (o in n) h[o] && (r[o] = n[o]);
                        l.push(t.to(u[a], i, r))
                    } return l
            }, e.activate([o]), o
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = e.GreenSockGlobals || e,
            i = function(e) {
                var i, n = e.split("."),
                    a = t;
                for (i = 0; n.length > i; i++) a[n[i]] = a = a[n[i]] || {};
                return a
            },
            n = i("com.greensock.utils"),
            a = function(e) {
                var t = e.nodeType,
                    i = "";
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += a(e)
                } else if (3 === t || 4 === t) return e.nodeValue;
                return i
            },
            r = document,
            o = r.defaultView ? r.defaultView.getComputedStyle : function() {},
            s = /([A-Z])/g,
            l = function(e, t, i, n) {
                var a;
                return (i = i || o(e, null)) ? (e = i.getPropertyValue(t.replace(s, "-$1").toLowerCase()), a = e || i.length ? e : i[t]) : e.currentStyle && (i = e.currentStyle, a = i[t]), n ? a : parseInt(a, 10) || 0
            },
            d = function(e) {
                return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? !0 : !1
            },
            c = function(e) {
                var t, i, n, a = [],
                    r = e.length;
                for (t = 0; r > t; t++)
                    if (i = e[t], d(i))
                        for (n = i.length, n = 0; i.length > n; n++) a.push(i[n]);
                    else a.push(i);
                return a
            },
            u = ")eefec303079ad17405c",
            h = /(?:<br>|<br\/>|<br \/>)/gi,
            p = r.all && !r.addEventListener,
            f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
            m = function(e) {
                e = e || "";
                var t = -1 !== e.indexOf("++"),
                    i = 1;
                return t && (e = e.split("++").join("")),
                    function() {
                        return f + (e ? " class='" + e + (t ? i++ : "") + "'>" : ">")
                    }
            },
            g = n.SplitText = t.SplitText = function(e, t) {
                if ("string" == typeof e && (e = g.selector(e)), !e) throw "cannot split a null element.";
                this.elements = d(e) ? c(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            },
            v = function(e, t, i, n, s) {
                h.test(e.innerHTML) && (e.innerHTML = e.innerHTML.replace(h, u));
                var d, c, p, f, g, v, y, b, w, x, _, C, T, k = a(e),
                    S = t.type || t.split || "chars,words,lines",
                    $ = -1 !== S.indexOf("lines") ? [] : null,
                    D = -1 !== S.indexOf("words"),
                    I = -1 !== S.indexOf("chars"),
                    A = "absolute" === t.position || t.absolute === !0,
                    N = A ? "­ " : " ",
                    E = -999,
                    P = o(e),
                    M = l(e, "paddingLeft", P),
                    O = l(e, "borderBottomWidth", P) + l(e, "borderTopWidth", P),
                    L = l(e, "borderLeftWidth", P) + l(e, "borderRightWidth", P),
                    R = l(e, "paddingTop", P) + l(e, "paddingBottom", P),
                    j = l(e, "paddingLeft", P) + l(e, "paddingRight", P),
                    B = l(e, "textAlign", P, !0),
                    z = e.clientHeight,
                    F = e.clientWidth,
                    H = k.length,
                    W = "</div>",
                    V = m(t.wordsClass),
                    Y = m(t.charsClass),
                    q = -1 !== (t.linesClass || "").indexOf("++"),
                    U = t.linesClass;
                for (q && (U = U.split("++").join("")), p = V(), f = 0; H > f; f++) v = k.charAt(f), ")" === v && k.substr(f, 20) === u ? (p += W + "<BR/>", f !== H - 1 && (p += " " + V()), f += 19) : " " === v && " " !== k.charAt(f - 1) && f !== H - 1 ? (p += W, f !== H - 1 && (p += N + V())) : p += I && " " !== v ? Y() + v + "</div>" : v;
                for (e.innerHTML = p + W, g = e.getElementsByTagName("*"), H = g.length, y = [], f = 0; H > f; f++) y[f] = g[f];
                if ($ || A)
                    for (f = 0; H > f; f++) b = y[f], c = b.parentNode === e, (c || A || I && !D) && (w = b.offsetTop, $ && c && w !== E && "BR" !== b.nodeName && (d = [], $.push(d), E = w), A && (b._x = b.offsetLeft, b._y = w, b._w = b.offsetWidth, b._h = b.offsetHeight), $ && (D !== c && I || (d.push(b), b._x -= M), c && f && (y[f - 1]._wordEnd = !0)));
                for (f = 0; H > f; f++) b = y[f], c = b.parentNode === e, "BR" !== b.nodeName ? (A && (_ = b.style, D || c || (b._x += b.parentNode._x, b._y += b.parentNode._y), _.left = b._x + "px", _.top = b._y + "px", _.position = "absolute", _.display = "block", _.width = b._w + 1 + "px", _.height = b._h + "px"), D ? c ? n.push(b) : I && i.push(b) : c ? (e.removeChild(b), y.splice(f--, 1), H--) : !c && I && (w = !$ && !A && b.nextSibling, e.appendChild(b), w || e.appendChild(r.createTextNode(" ")), i.push(b))) : $ || A ? (e.removeChild(b), y.splice(f--, 1), H--) : D || e.appendChild(b);
                if ($) {
                    for (A && (x = r.createElement("div"), e.appendChild(x), C = x.offsetWidth + "px", w = x.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(x)), _ = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                    for (T = !A || !D && !I, f = 0; $.length > f; f++) {
                        for (d = $[f], x = r.createElement("div"), x.style.cssText = "display:block;text-align:" + B + ";position:" + (A ? "absolute;" : "relative;"), U && (x.className = U + (q ? f + 1 : "")), s.push(x), H = d.length, g = 0; H > g; g++) "BR" !== d[g].nodeName && (b = d[g], x.appendChild(b), T && (b._wordEnd || D) && x.appendChild(r.createTextNode(" ")), A && (0 === g && (x.style.top = b._y + "px", x.style.left = M + w + "px"), b.style.top = "0px", w && (b.style.left = b._x - w + "px")));
                        D || I || (x.innerHTML = a(x).split(String.fromCharCode(160)).join(" ")), A && (x.style.width = C, x.style.height = b._h + "px"), e.appendChild(x)
                    }
                    e.style.cssText = _
                }
                A && (z > e.clientHeight && (e.style.height = z - R + "px", z > e.clientHeight && (e.style.height = z + O + "px")), F > e.clientWidth && (e.style.width = F - j + "px", F > e.clientWidth && (e.style.width = F + L + "px")))
            },
            y = g.prototype;
        y.split = function(e) {
            this.isSplit && this.revert(), this.vars = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            for (var t = 0; this.elements.length > t; t++) this._originals[t] = this.elements[t].innerHTML, v(this.elements[t], this.vars, this.chars, this.words, this.lines);
            return this.isSplit = !0, this
        }, y.revert = function() {
            if (!this._originals) throw "revert() call wasn't scoped properly.";
            for (var e = this._originals.length; --e > -1;) this.elements[e].innerHTML = this._originals[e];
            return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
        }, g.selector = e.$ || e.jQuery || function(t) {
            return e.$ ? (g.selector = e.$, e.$(t)) : r ? r.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
        }
    }(window || {}), window.GreenSockGobals = null, window._gsQueue = null, delete window.GreenSockGlobals, delete window._gsQueue, window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue, console.groupEnd(),
    function(e) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        }, e.expr[":"].uncached = function(t) {
            var i = document.createElement("img");
            return i.src = t.src, e(t).is('img[src!=""]') && !i.complete
        }, e.fn.waitForImages = function(t, i, n) {
            if (e.isPlainObject(arguments[0]) && (i = t.each, n = t.waitForAll, t = t.finished), t = t || e.noop, i = i || e.noop, n = !!n, !e.isFunction(t) || !e.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var a = e(this),
                    r = [];
                if (n) {
                    var o = e.waitForImages.hasImageProperties || [],
                        s = /url\((['"]?)(.*?)\1\)/g;
                    a.find("*").each(function() {
                        var t = e(this);
                        t.is("img:uncached") && r.push({
                            src: t.attr("src"),
                            element: t[0]
                        }), e.each(o, function(e, i) {
                            var n = t.css(i);
                            if (!n) return !0;
                            for (var a; a = s.exec(n);) r.push({
                                src: a[2],
                                element: t[0]
                            })
                        })
                    })
                } else a.find("img:uncached").each(function() {
                    r.push({
                        src: this.src,
                        element: this
                    })
                });
                var l = r.length,
                    d = 0;
                0 == l && t.call(a[0]), e.each(r, function(n, r) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        return d++, i.call(r.element, d, l, "load" == e.type), d == l ? (t.call(a[0]), !1) : void 0
                    }), o.src = r.src
                })
            })
        }
    }(jQuery),
    function(e, t) {
        function n(i, n) {
            if (("preview1" == n.navigationStyle || "preview3" == n.navigationStyle || "preview4" == n.navigationStyle) && (n.soloArrowLeftHalign = "left", n.soloArrowLeftValign = "center", n.soloArrowLeftHOffset = 0, n.soloArrowLeftVOffset = 0, n.soloArrowRightHalign = "right", n.soloArrowRightValign = "center", n.soloArrowRightHOffset = 0, n.soloArrowRightVOffset = 0, n.navigationArrows = "solo"), n.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != n.fullWidth && "on" != n.fullScreen && (n.autoHeight = "off"), "on" == n.fullScreen && (n.autoHeight = "on"), "on" != n.fullWidth && "on" != n.fullScreen && (forceFulWidth = "off"), "on" == n.fullWidth && "off" == n.autoHeight && i.css({
                    maxHeight: n.startheight + "px"
                }), Y() && "on" == n.hideThumbsOnMobile && "thumb" == n.navigationType && (n.navigationType = "none"), Y() && "on" == n.hideBulletsOnMobile && "bullet" == n.navigationType && (n.navigationType = "none"), Y() && "on" == n.hideBulletsOnMobile && "both" == n.navigationType && (n.navigationType = "none"), Y() && "on" == n.hideArrowsOnMobile && (n.navigationArrows = "none"), "on" == n.forceFullWidth && 0 == i.closest(".forcefullwidth_wrapper_tp_banner").length) {
                var o = i.parent().offset().left,
                    s = i.parent().css("marginBottom"),
                    p = i.parent().css("marginTop");
                s == t && (s = 0), p == t && (p = 0), i.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + p + ";margin-bottom:" + s + '" class="forcefullwidth_wrapper_tp_banner"></div>'), i.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + i.height() + 'px"></div>'), i.css({
                    backgroundColor: i.parent().css("backgroundColor"),
                    backgroundImage: i.parent().css("backgroundImage")
                }), i.parent().css({
                    left: 0 - o + "px",
                    position: "absolute",
                    width: e(window).width()
                }), n.width = e(window).width()
            }
            try {
                n.hideThumbsUnderResolution > e(window).width() && 0 != n.hideThumbsUnderResolution ? i.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "none"
                }) : i.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "block"
                })
            } catch (f) {}
            if (!i.hasClass("revslider-initialised")) {
                i.addClass("revslider-initialised"), i.attr("id") == t && i.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), n.firefox13 = !1, n.ie = !e.support.opacity, n.ie9 = 9 == document.documentMode, n.origcd = n.delay;
                var m = e.fn.jquery.split("."),
                    v = parseFloat(m[0]),
                    y = parseFloat(m[1]);
                parseFloat(m[2] || "0");
                1 == v && 7 > y && i.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + m + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), v > 1 && (n.ie = !1), e.support.transition || (e.fn.transition = e.fn.animate), i.find(".caption").each(function() {
                    e(this).addClass("tp-caption")
                }), Y() && i.find(".tp-caption").each(function() {
                    1 == e(this).data("autoplay") && e(this).data("autoplay", !1)
                });
                var b = 0,
                    w = 0,
                    x = "http";
                if ("https:" === location.protocol && (x = "https"), i.find(".tp-caption iframe").each(function(t) {
                        try {
                            if (e(this).attr("src").indexOf("you") > 0 && 0 == b) {
                                b = 1;
                                var i = document.createElement("script"),
                                    n = "https";
                                i.src = n + "://www.youtube.com/iframe_api";
                                var a = document.getElementsByTagName("script")[0],
                                    r = !0;
                                e("head").find("*").each(function() {
                                    e(this).attr("src") == n + "://www.youtube.com/iframe_api" && (r = !1)
                                }), r && a.parentNode.insertBefore(i, a)
                            }
                        } catch (o) {}
                    }), i.find(".tp-caption iframe").each(function(t) {
                        try {
                            if (e(this).attr("src").indexOf("vim") > 0 && 0 == w) {
                                w = 1;
                                var i = document.createElement("script");
                                i.src = x + "://a.vimeocdn.com/js/froogaloop2.min.js";
                                var n = document.getElementsByTagName("script")[0],
                                    a = !0;
                                e("head").find("*").each(function() {
                                    e(this).attr("src") == x + "://a.vimeocdn.com/js/froogaloop2.min.js" && (a = !1)
                                }), a && n.parentNode.insertBefore(i, n)
                            }
                        } catch (r) {}
                    }), i.find(".tp-caption video").each(function(t) {
                        e(this).removeClass("video-js").removeClass("vjs-default-skin"), e(this).attr("preload", ""), e(this).css({
                            display: "none"
                        })
                    }), "on" == n.shuffle)
                    for (var _ = 0; _ < i.find(">ul:first-child >li").length; _++) {
                        var C = Math.round(Math.random() * i.find(">ul:first-child >li").length);
                        i.find(">ul:first-child >li:eq(" + C + ")").prependTo(i.find(">ul:first-child"))
                    }
                n.slots = 4, n.act = -1, n.next = 0, n.startWithSlide != t && (n.next = n.startWithSlide);
                var k = a("#")[0];
                if (k.length < 9 && k.split("slide").length > 1) {
                    var S = parseInt(k.split("slide")[1], 0);
                    1 > S && (S = 1), S > i.find(">ul:first >li").length && (S = i.find(">ul:first >li").length), n.next = S - 1
                }
                n.firststart = 1, n.navigationHOffset == t && (n.navOffsetHorizontal = 0), n.navigationVOffset == t && (n.navOffsetVertical = 0), i.append('<div class="tp-loader ' + n.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == i.find(".tp-bannertimer").length && i.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
                var $ = i.find(".tp-bannertimer");
                if ($.length > 0 && $.css({
                        width: "0%"
                    }), i.addClass("tp-simpleresponsive"), n.container = i, n.slideamount = i.find(">ul:first >li").length, 0 == i.height() && i.height(n.startheight), (n.startwidth == t || 0 == n.startwidth) && (n.startwidth = i.width()), (n.startheight == t || 0 == n.startheight) && (n.startheight = i.height()), n.width = i.width(), n.height = i.height(), n.bw = n.startwidth / i.width(), n.bh = n.startheight / i.height(), n.width != n.startwidth && (n.height = Math.round(n.startheight * (n.width / n.startwidth)), i.height(n.height)), 0 != n.shadow) {
                    i.parent().append('<div class="tp-bannershadow tp-shadow' + n.shadow + '"></div>');
                    var o = 0;
                    "on" == n.forceFullWidth && (o = 0 - n.container.parent().offset().left), i.parent().find(".tp-bannershadow").css({
                        width: n.width,
                        left: o
                    })
                }
                i.find("ul").css({
                    display: "none"
                });
                i.find("ul").css({
                    display: "block"
                }), g(i, n), "off" != n.parallax && G(i, n), n.slideamount > 1 && l(i, n), n.slideamount > 1 && "thumb" == n.navigationType && J(i, n), n.slideamount > 1 && d(i, n), "on" == n.keyboardNavigation && c(i, n);
                try {
                    u(i, n)
                } catch (f) {}
                n.hideThumbs > 0 && h(i, n), T(i, n), n.slideamount > 1 && V(i, n), setTimeout(function() {
                    i.trigger("revolution.slide.onloaded")
                }, 500), e("body").data("rs-fullScreenMode", !1), e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                        e(window).trigger("resize")
                    }, 200)
                }), e(window).resize(function() {
                    if (0 != e("body").find(i) && "on" == n.forceFullWidth) {
                        var t = n.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                        n.container.parent().css({
                            left: 0 - t + "px",
                            width: e(window).width()
                        })
                    }(i.outerWidth(!0) != n.width || i.is(":hidden")) && r(i, n)
                });
                try {
                    0 != n.hideThumbsUnderResoluition && "thumb" == n.navigationType && (n.hideThumbsUnderResoluition > e(window).width() ? e(".tp-bullets").css({
                        display: "none"
                    }) : e(".tp-bullets").css({
                        display: "block"
                    }))
                } catch (f) {}
                i.find(".tp-scrollbelowslider").on("click", function() {
                    var t = 0;
                    try {
                        t = e("body").find(n.fullScreenOffsetContainer).height()
                    } catch (a) {}
                    try {
                        t -= e(this).data("scrolloffset")
                    } catch (a) {}
                    e("body,html").animate({
                        scrollTop: i.offset().top + i.find(">ul >li").height() - t + "px"
                    }, {
                        duration: 400
                    })
                });
                var D = i.parent();
                e(window).width() < n.hideSliderAtLimit && (i.trigger("stoptimer"), "none" != D.css("display") && D.data("olddisplay", D.css("display")), D.css({
                    display: "none"
                }))
            }
        }
        e.fn.extend({
            revolution: function(i) {
                return defaults = {
                    delay: 9e3,
                    startheight: 500,
                    startwidth: 960,
                    fullScreenAlignForce: "off",
                    autoHeight: "off",
                    hideTimerBar: "off",
                    hideThumbs: 200,
                    hideNavDelayOnMobile: 1500,
                    thumbWidth: 100,
                    thumbHeight: 50,
                    thumbAmount: 3,
                    navigationType: "bullet",
                    navigationArrows: "solo",
                    navigationInGrid: "off",
                    hideThumbsOnMobile: "off",
                    hideBulletsOnMobile: "off",
                    hideArrowsOnMobile: "off",
                    hideThumbsUnderResoluition: 0,
                    navigationStyle: "round",
                    navigationHAlign: "center",
                    navigationVAlign: "bottom",
                    navigationHOffset: 0,
                    navigationVOffset: 20,
                    soloArrowLeftHalign: "left",
                    soloArrowLeftValign: "center",
                    soloArrowLeftHOffset: 20,
                    soloArrowLeftVOffset: 0,
                    soloArrowRightHalign: "right",
                    soloArrowRightValign: "center",
                    soloArrowRightHOffset: 20,
                    soloArrowRightVOffset: 0,
                    keyboardNavigation: "on",
                    touchenabled: "on",
                    onHoverStop: "on",
                    stopAtSlide: -1,
                    stopAfterLoops: -1,
                    hideCaptionAtLimit: 0,
                    hideAllCaptionAtLimit: 0,
                    hideSliderAtLimit: 0,
                    shadow: 0,
                    fullWidth: "off",
                    fullScreen: "off",
                    minFullScreenHeight: 0,
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "0",
                    dottedOverlay: "none",
                    forceFullWidth: "off",
                    spinner: "spinner0",
                    swipe_velocity: .4,
                    swipe_max_touches: 1,
                    swipe_min_touches: 1,
                    drag_block_vertical: !1,
                    isJoomla: !1,
                    parallax: "off",
                    parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    parallaxBgFreeze: "off",
                    parallaxOpacity: "on",
                    parallaxDisableOnMobile: "off"
                }, i = e.extend({}, defaults, i), this.each(function() {
                    try {
                        console.groupCollapsed("Slider Revolution 4.5.7 Initialisation on " + e(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(i), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                    } catch (a) {}
                    if (punchgs.TweenLite == t) {
                        try {
                            console.error("GreenSock Engine Does not Exist!")
                        } catch (a) {}
                        return !1
                    }
                    punchgs.force3D = !0;
                    try {
                        console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                    } catch (a) {}
                    punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true", n(e(this), i);
                    try {
                        console.groupEnd(), console.groupEnd()
                    } catch (a) {}
                })
            },
            revscroll: function(t) {
                return this.each(function() {
                    var i = e(this);
                    e("body,html").animate({
                        scrollTop: i.offset().top + i.find(">ul >li").height() - t + "px"
                    }, {
                        duration: 400
                    })
                })
            },
            revredraw: function(t) {
                return this.each(function() {
                    var t = e(this),
                        i = t.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    r(t, n)
                })
            },
            revpause: function(t) {
                return this.each(function() {
                    var t = e(this);
                    t.data("conthover", 1), t.data("conthover-changed", 1), t.trigger("revolution.slide.onpause");
                    var i = t.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    n.bannertimeronpause = !0, t.trigger("stoptimer")
                })
            },
            revresume: function(t) {
                return this.each(function() {
                    var t = e(this);
                    t.data("conthover", 0), t.data("conthover-changed", 1), t.trigger("revolution.slide.onresume");
                    var i = t.parent().find(".tp-bannertimer"),
                        n = i.data("opt");
                    n.bannertimeronpause = !1, t.trigger("starttimer")
                })
            },
            revnext: function(t) {
                return this.each(function() {
                    var t = e(this);
                    t.parent().find(".tp-rightarrow").click()
                })
            },
            revprev: function(t) {
                return this.each(function() {
                    var t = e(this);
                    t.parent().find(".tp-leftarrow").click()
                })
            },
            revmaxslide: function(t) {
                return e(this).find(">ul:first-child >li").length;
            },
            revcurrentslide: function(t) {
                var i = e(this),
                    n = i.parent().find(".tp-bannertimer"),
                    a = n.data("opt");
                return a.act
            },
            revlastslide: function(t) {
                var i = e(this),
                    n = i.parent().find(".tp-bannertimer"),
                    a = n.data("opt");
                return a.lastslide
            },
            revshowslide: function(t) {
                return this.each(function() {
                    var i = e(this);
                    i.data("showus", t), i.parent().find(".tp-rightarrow").click()
                })
            }
        });
        var a = function(e) {
                for (var t, i = [], n = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), a = 0; a < n.length; a++) n[a] = n[a].replace("%3D", "="), t = n[a].split("="), i.push(t[0]), i[t[0]] = t[1];
                return i
            },
            r = function(i, n) {
                try {
                    0 != n.hideThumbsUnderResoluition && "thumb" == n.navigationType && (n.hideThumbsUnderResoluition > e(window).width() ? e(".tp-bullets").css({
                        display: "none"
                    }) : e(".tp-bullets").css({
                        display: "block"
                    }))
                } catch (a) {}
                i.find(".defaultimg").each(function(t) {
                    m(e(this), n)
                });
                var o = i.parent();
                e(window).width() < n.hideSliderAtLimit ? (i.trigger("stoptimer"), "none" != o.css("display") && o.data("olddisplay", o.css("display")), o.css({
                    display: "none"
                })) : i.is(":hidden") && (o.data("olddisplay") != t && "undefined" != o.data("olddisplay") && "none" != o.data("olddisplay") ? o.css({
                    display: o.data("olddisplay")
                }) : o.css({
                    display: "block"
                }), i.trigger("restarttimer"), setTimeout(function() {
                    r(i, n)
                }, 150));
                var s = 0;
                "on" == n.forceFullWidth && (s = 0 - n.container.parent().offset().left);
                try {
                    i.parent().find(".tp-bannershadow").css({
                        width: n.width,
                        left: s
                    })
                } catch (a) {}
                var l = i.find(">ul >li:eq(" + n.act + ") .slotholder"),
                    d = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                w(i, n, i), punchgs.TweenLite.set(d.find(".defaultimg"), {
                    opacity: 0
                }), l.find(".defaultimg").css({
                    opacity: 1
                }), d.find(".defaultimg").each(function() {
                    var a = e(this);
                    a.data("kenburn") != t && (a.data("kenburn").restart(), U(i, n, !0))
                });
                var c = i.find(">ul >li:eq(" + n.next + ")"),
                    u = i.parent().find(".tparrows");
                u.hasClass("preview2") && u.css({
                    width: parseInt(u.css("minWidth"), 0)
                }), O(c, n, !0), p(i, n)
            },
            o = function(t, i) {
                var n = e('<div style="display:none;"/>').appendTo(e("body"));
                n.html("<!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
                var a = n.find("a").length;
                return n.remove(), a
            },
            s = function(e, t) {
                T(t, e)
            },
            l = function(t, i) {
                var n = "hidebullets";
                0 == i.hideThumbs && (n = ""), ("bullet" == i.navigationType || "both" == i.navigationType) && t.parent().append('<div class="tp-bullets ' + n + " simplebullets " + i.navigationStyle + '"></div>');
                var a = t.parent().find(".tp-bullets");
                t.find(">ul:first >li").each(function(e) {
                    t.find(">ul:first >li:eq(" + e + ") img:first").attr("src");
                    a.append('<div class="bullet"></div>');
                    a.find(".bullet:first")
                }), a.find(".bullet").each(function(n) {
                    var a = e(this);
                    n == i.slideamount - 1 && a.addClass("last"), 0 == n && a.addClass("first"), a.click(function() {
                        var e = !1;
                        "withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows ? a.index() - 1 == i.act && (e = !0) : a.index() == i.act && (e = !0), 0 != i.transition || e || ("withbullet" == i.navigationArrows || "nexttobullets" == i.navigationArrows ? i.next = a.index() - 1 : i.next = a.index(), s(i, t))
                    })
                }), a.append('<div class="tpclear"></div>'), p(t, i)
            },
            d = function(e, i) {
                function n(t) {
                    e.parent().append('<div style="' + a + '" class="tp-' + t + "arrow " + r + " tparrows " + o + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
                }
                var a = (e.find(".tp-bullets"), ""),
                    r = "hidearrows";
                0 == i.hideThumbs && (r = "");
                var o = i.navigationStyle;
                "none" == i.navigationArrows && (a = "visibility:hidden;display:none"), i.soloArrowStyle = "default " + i.navigationStyle, "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (o = i.soloArrowStyle), n("left"), n("right"), e.parent().find(".tp-rightarrow").click(function() {
                    0 == i.transition && (e.data("showus") != t && -1 != e.data("showus") ? i.next = e.data("showus") - 1 : i.next = i.next + 1, e.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && s(i, e))
                }), e.parent().find(".tp-leftarrow").click(function() {
                    0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), s(i, e))
                }), p(e, i)
            },
            c = function(i, n) {
                e(document).keydown(function(e) {
                    0 == n.transition && 39 == e.keyCode && (i.data("showus") != t && -1 != i.data("showus") ? n.next = i.data("showus") - 1 : n.next = n.next + 1, i.data("showus", -1), n.next >= n.slideamount && (n.next = 0), n.next < 0 && (n.next = 0), n.act != n.next && s(n, i)), 0 == n.transition && 37 == e.keyCode && (n.next = n.next - 1, n.leftarrowpressed = 1, n.next < 0 && (n.next = n.slideamount - 1), s(n, i))
                }), p(i, n)
            },
            u = function(t, i) {
                if ("on" == i.touchenabled) try {
                    var n = Hammer(t, {
                        drag_block_vertical: i.drag_block_vertical,
                        drag_lock_to_axis: !0,
                        swipe_velocity: i.swipe_velocity,
                        swipe_max_touches: i.swipe_max_touches,
                        swipe_min_touches: i.swipe_min_touches,
                        prevent_default: !1
                    });
                    n.on("swipeleft", function() {
                        0 == i.transition && (i.next = i.next + 1, i.next == i.slideamount && (i.next = 0), s(i, t))
                    }), n.on("swiperight", function() {
                        0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), s(i, t))
                    }), n.on("swipeup", function() {
                        e("html, body").animate({
                            scrollTop: t.offset().top + t.height() + "px"
                        })
                    }), n.on("swipedown", function() {
                        e("html, body").animate({
                            scrollTop: t.offset().top - e(window).height() + "px"
                        })
                    })
                } catch (a) {}
            },
            h = function(e, t) {
                var i = e.parent().find(".tp-bullets"),
                    n = e.parent().find(".tparrows");
                if (null == i) {
                    e.append('<div class=".tp-bullets"></div>');
                    var i = e.parent().find(".tp-bullets")
                }
                if (null == n) {
                    e.append('<div class=".tparrows"></div>');
                    var n = e.parent().find(".tparrows")
                }
                if (e.data("hideThumbs", t.hideThumbs), i.addClass("hidebullets"), n.addClass("hidearrows"), Y()) try {
                    e.hammer().on("touch", function() {
                        e.addClass("hovered"), "on" == t.onHoverStop && e.trigger("stoptimer"), clearTimeout(e.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                    }), e.hammer().on("release", function() {
                        e.removeClass("hovered"), e.trigger("playtimer"), e.hasClass("hovered") || i.hasClass("hovered") || e.data("hideThumbs", setTimeout(function() {
                            i.addClass("hidebullets"), n.addClass("hidearrows"), e.trigger("playtimer")
                        }, t.hideNavDelayOnMobile))
                    })
                } catch (a) {} else i.hover(function() {
                    t.overnav = !0, "on" == t.onHoverStop && e.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(e.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }, function() {
                    t.overnav = !1, e.trigger("playtimer"), i.removeClass("hovered"), e.hasClass("hovered") || i.hasClass("hovered") || e.data("hideThumbs", setTimeout(function() {
                        i.addClass("hidebullets"), n.addClass("hidearrows")
                    }, t.hideThumbs))
                }), n.hover(function() {
                    t.overnav = !0, "on" == t.onHoverStop && e.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(e.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }, function() {
                    t.overnav = !1, e.trigger("playtimer"), i.removeClass("hovered")
                }), e.on("mouseenter", function() {
                    e.addClass("hovered"), "on" == t.onHoverStop && e.trigger("stoptimer"), clearTimeout(e.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }), e.on("mouseleave", function() {
                    e.removeClass("hovered"), e.trigger("playtimer"), e.hasClass("hovered") || i.hasClass("hovered") || e.data("hideThumbs", setTimeout(function() {
                        i.addClass("hidebullets"), n.addClass("hidearrows")
                    }, t.hideThumbs))
                })
            },
            p = function(t, i) {
                var n = t.parent(),
                    a = n.find(".tp-bullets");
                if ("thumb" == i.navigationType) {
                    a.find(".thumb").each(function(t) {
                        var n = e(this);
                        n.css({
                            width: i.thumbWidth * i.bw + "px",
                            height: i.thumbHeight * i.bh + "px"
                        })
                    });
                    var r = a.find(".tp-mask");
                    r.width(i.thumbWidth * i.thumbAmount * i.bw), r.height(i.thumbHeight * i.bh), r.parent().width(i.thumbWidth * i.thumbAmount * i.bw), r.parent().height(i.thumbHeight * i.bh)
                }
                var o = n.find(".tp-leftarrow"),
                    s = n.find(".tp-rightarrow");
                "thumb" == i.navigationType && "nexttobullets" == i.navigationArrows && (i.navigationArrows = "solo"), "nexttobullets" == i.navigationArrows && (o.prependTo(a).css({
                    "float": "left"
                }), s.insertBefore(a.find(".tpclear")).css({
                    "float": "left"
                }));
                var l = 0;
                "on" == i.forceFullWidth && (l = 0 - i.container.parent().offset().left);
                var d = 0,
                    c = 0;
                "on" == i.navigationInGrid && (d = t.width() > i.startwidth ? (t.width() - i.startwidth) / 2 : 0, c = t.height() > i.startheight ? (t.height() - i.startheight) / 2 : 0), "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (o.css({
                    position: "absolute"
                }), s.css({
                    position: "absolute"
                }), "center" == i.soloArrowLeftValign && o.css({
                    top: "50%",
                    marginTop: i.soloArrowLeftVOffset - Math.round(o.innerHeight() / 2) + "px"
                }), "bottom" == i.soloArrowLeftValign && o.css({
                    top: "auto",
                    bottom: 0 + i.soloArrowLeftVOffset + "px"
                }), "top" == i.soloArrowLeftValign && o.css({
                    bottom: "auto",
                    top: 0 + i.soloArrowLeftVOffset + "px"
                }), "center" == i.soloArrowLeftHalign && o.css({
                    left: "50%",
                    marginLeft: l + i.soloArrowLeftHOffset - Math.round(o.innerWidth() / 2) + "px"
                }), "left" == i.soloArrowLeftHalign && o.css({
                    left: d + i.soloArrowLeftHOffset + l + "px"
                }), "right" == i.soloArrowLeftHalign && o.css({
                    right: d + i.soloArrowLeftHOffset - l + "px"
                }), "center" == i.soloArrowRightValign && s.css({
                    top: "50%",
                    marginTop: i.soloArrowRightVOffset - Math.round(s.innerHeight() / 2) + "px"
                }), "bottom" == i.soloArrowRightValign && s.css({
                    top: "auto",
                    bottom: 0 + i.soloArrowRightVOffset + "px"
                }), "top" == i.soloArrowRightValign && s.css({
                    bottom: "auto",
                    top: 0 + i.soloArrowRightVOffset + "px"
                }), "center" == i.soloArrowRightHalign && s.css({
                    left: "50%",
                    marginLeft: l + i.soloArrowRightHOffset - Math.round(s.innerWidth() / 2) + "px"
                }), "left" == i.soloArrowRightHalign && s.css({
                    left: d + i.soloArrowRightHOffset + l + "px"
                }), "right" == i.soloArrowRightHalign && s.css({
                    right: d + i.soloArrowRightHOffset - l + "px"
                }), null != o.position() && o.css({
                    top: Math.round(parseInt(o.position().top, 0)) + "px"
                }), null != s.position() && s.css({
                    top: Math.round(parseInt(s.position().top, 0)) + "px"
                })), "none" == i.navigationArrows && (o.css({
                    visibility: "hidden"
                }), s.css({
                    visibility: "hidden"
                })), "center" == i.navigationVAlign && a.css({
                    top: "50%",
                    marginTop: i.navigationVOffset - Math.round(a.innerHeight() / 2) + "px"
                }), "bottom" == i.navigationVAlign && a.css({
                    bottom: 0 + i.navigationVOffset + "px"
                }), "top" == i.navigationVAlign && a.css({
                    top: 0 + i.navigationVOffset + "px"
                }), "center" == i.navigationHAlign && a.css({
                    left: "50%",
                    marginLeft: l + i.navigationHOffset - Math.round(a.innerWidth() / 2) + "px"
                }), "left" == i.navigationHAlign && a.css({
                    left: 0 + i.navigationHOffset + l + "px"
                }), "right" == i.navigationHAlign && a.css({
                    right: 0 + i.navigationHOffset - l + "px"
                })
            },
            f = function(i) {
                var n = i.container;
                i.beforli = i.next - 1, i.comingli = i.next + 1, i.beforli < 0 && (i.beforli = i.slideamount - 1), i.comingli >= i.slideamount && (i.comingli = 0);
                var a = n.find(">ul:first-child >li:eq(" + i.comingli + ")"),
                    r = n.find(">ul:first-child >li:eq(" + i.beforli + ")"),
                    o = r.find(".defaultimg").attr("src"),
                    s = a.find(".defaultimg").attr("src");
                i.arr == t && (i.arr = n.parent().find(".tparrows"), i.rar = n.parent().find(".tp-rightarrow"), i.lar = n.parent().find(".tp-leftarrow"), i.raimg = i.rar.find(".tp-arr-imgholder"), i.laimg = i.lar.find(".tp-arr-imgholder"), i.raimg_b = i.rar.find(".tp-arr-imgholder2"), i.laimg_b = i.lar.find(".tp-arr-imgholder2"), i.ratit = i.rar.find(".tp-arr-titleholder"), i.latit = i.lar.find(".tp-arr-titleholder"));
                var l = i.arr,
                    d = i.rar,
                    c = i.lar,
                    u = i.raimg,
                    h = i.laimg,
                    p = i.raimg_b,
                    f = i.laimg_b,
                    m = i.ratit,
                    g = i.latit;
                if (a.data("title") != t && m.html(a.data("title")), r.data("title") != t && g.html(r.data("title")), d.hasClass("itishovered") && d.width(m.outerWidth(!0) + parseInt(d.css("minWidth"), 0)), c.hasClass("itishovered") && c.width(g.outerWidth(!0) + parseInt(c.css("minWidth"), 0)), l.hasClass("preview2") && !l.hasClass("hashoveralready"))
                    if (l.addClass("hashoveralready"), Y()) {
                        var l = e(this),
                            v = l.find(".tp-arr-titleholder");
                        v.addClass("alwayshidden"), punchgs.TweenLite.set(v, {
                            autoAlpha: 0
                        })
                    } else l.hover(function() {
                        var t = e(this),
                            i = t.find(".tp-arr-titleholder");
                        t.width(i.outerWidth(!0) + parseInt(t.css("minWidth"), 0)), t.addClass("itishovered")
                    }, function() {
                        var t = e(this);
                        t.find(".tp-arr-titleholder");
                        t.css({
                            width: parseInt(t.css("minWidth"), 0)
                        }), t.removeClass("itishovered")
                    });
                r.data("thumb") != t && (o = r.data("thumb")), a.data("thumb") != t && (s = a.data("thumb")), l.hasClass("preview4") ? (p.css({
                    backgroundImage: "url(" + s + ")"
                }), f.css({
                    backgroundImage: "url(" + o + ")"
                }), punchgs.TweenLite.fromTo(p, .8, {
                    force3D: punchgs.force3d,
                    x: 0
                }, {
                    x: -u.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 1,
                    onComplete: function() {
                        u.css({
                            backgroundImage: "url(" + s + ")"
                        }), punchgs.TweenLite.set(p, {
                            x: 0
                        })
                    }
                }), punchgs.TweenLite.fromTo(f, .8, {
                    force3D: punchgs.force3d,
                    x: 0
                }, {
                    x: u.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 1,
                    onComplete: function() {
                        h.css({
                            backgroundImage: "url(" + o + ")"
                        }), punchgs.TweenLite.set(f, {
                            x: 0
                        })
                    }
                }), punchgs.TweenLite.fromTo(u, .8, {
                    x: 0
                }, {
                    force3D: punchgs.force3d,
                    x: -u.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 1,
                    onComplete: function() {
                        punchgs.TweenLite.set(u, {
                            x: 0
                        })
                    }
                }), punchgs.TweenLite.fromTo(h, .8, {
                    x: 0
                }, {
                    force3D: punchgs.force3d,
                    x: u.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: 1,
                    onComplete: function() {
                        punchgs.TweenLite.set(h, {
                            x: 0
                        })
                    }
                })) : (punchgs.TweenLite.to(u, .5, {
                    autoAlpha: 0,
                    onComplete: function() {
                        u.css({
                            backgroundImage: "url(" + s + ")"
                        }), h.css({
                            backgroundImage: "url(" + o + ")"
                        })
                    }
                }), punchgs.TweenLite.to(h, .5, {
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.to(u, .5, {
                            autoAlpha: 1,
                            delay: .2
                        }), punchgs.TweenLite.to(h, .5, {
                            autoAlpha: 1,
                            delay: .2
                        })
                    }
                })), d.hasClass("preview4") && !d.hasClass("hashoveralready") && (d.addClass("hashoveralready"), d.hover(function() {
                    var t = e(this).find(".tp-arr-iwrapper"),
                        i = e(this).find(".tp-arr-allwrapper");
                    punchgs.TweenLite.fromTo(t, .4, {
                        x: t.width()
                    }, {
                        x: 0,
                        delay: .3,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }), punchgs.TweenLite.to(i, .2, {
                        autoAlpha: 1,
                        overwrite: "all"
                    })
                }, function() {
                    var t = e(this).find(".tp-arr-iwrapper"),
                        i = e(this).find(".tp-arr-allwrapper");
                    punchgs.TweenLite.to(t, .4, {
                        x: t.width(),
                        ease: punchgs.Power3.easeOut,
                        delay: .2,
                        overwrite: "all"
                    }), punchgs.TweenLite.to(i, .2, {
                        delay: .6,
                        autoAlpha: 0,
                        overwrite: "all"
                    })
                }), c.hover(function() {
                    var t = e(this).find(".tp-arr-iwrapper"),
                        i = e(this).find(".tp-arr-allwrapper");
                    punchgs.TweenLite.fromTo(t, .4, {
                        x: 0 - t.width()
                    }, {
                        x: 0,
                        delay: .3,
                        ease: punchgs.Power3.easeOut,
                        overwrite: "all"
                    }), punchgs.TweenLite.to(i, .2, {
                        autoAlpha: 1,
                        overwrite: "all"
                    })
                }, function() {
                    var t = e(this).find(".tp-arr-iwrapper"),
                        i = e(this).find(".tp-arr-allwrapper");
                    punchgs.TweenLite.to(t, .4, {
                        x: 0 - t.width(),
                        ease: punchgs.Power3.easeOut,
                        delay: .2,
                        overwrite: "all"
                    }), punchgs.TweenLite.to(i, .2, {
                        delay: .6,
                        autoAlpha: 0,
                        overwrite: "all"
                    })
                }))
            },
            m = function(i, n) {
                if (n.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                        height: n.container.height()
                    }), n.container.closest(".rev_slider_wrapper").css({
                        height: n.container.height()
                    }), n.width = parseInt(n.container.width(), 0), n.height = parseInt(n.container.height(), 0), n.bw = n.width / n.startwidth, n.bh = n.height / n.startheight, n.bh > n.bw && (n.bh = n.bw), n.bh < n.bw && (n.bw = n.bh), n.bw < n.bh && (n.bh = n.bw), n.bh > 1 && (n.bw = 1, n.bh = 1), n.bw > 1 && (n.bw = 1, n.bh = 1), n.height = Math.round(n.startheight * (n.width / n.startwidth)), n.height > n.startheight && "on" != n.autoHeight && (n.height = n.startheight), "on" == n.fullScreen) {
                    n.height = n.bw * n.startheight;
                    var a = (n.container.parent().width(), e(window).height());
                    if (n.fullScreenOffsetContainer != t) {
                        try {
                            var r = n.fullScreenOffsetContainer.split(",");
                            e.each(r, function(t, i) {
                                a -= e(i).outerHeight(!0), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                            })
                        } catch (o) {}
                        try {
                            n.fullScreenOffset.split("%").length > 1 && n.fullScreenOffset != t && n.fullScreenOffset.length > 0 ? a -= e(window).height() * parseInt(n.fullScreenOffset, 0) / 100 : n.fullScreenOffset != t && n.fullScreenOffset.length > 0 && (a -= parseInt(n.fullScreenOffset, 0)), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                        } catch (o) {}
                    }
                    n.container.parent().height(a), n.container.closest(".rev_slider_wrapper").height(a), n.container.css({
                        height: "100%"
                    }), n.height = a
                } else n.container.height(n.height);
                n.slotw = Math.ceil(n.width / n.slots), "on" == n.fullScreen ? n.sloth = Math.ceil(e(window).height() / n.slots) : n.sloth = Math.ceil(n.height / n.slots), "on" == n.autoHeight && (n.sloth = Math.ceil(i.height() / n.slots))
            },
            g = function(i, n) {
                i.find(".tp-caption").each(function() {
                    e(this).addClass(e(this).data("transition")), e(this).addClass("start")
                }), i.find(">ul:first").css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: i.parent().css("maxHeight")
                }), "on" == n.autoHeight && (i.find(">ul:first").css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), i.css({
                    maxHeight: "none"
                }), i.parent().css({
                    maxHeight: "none"
                })), i.find(">ul:first >li").each(function(i) {
                    var n = e(this);
                    if (n.css({
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }), n.data("link") != t) {
                        var a = n.data("link"),
                            r = "_self",
                            o = 60;
                        "back" == n.data("slideindex") && (o = 0);
                        var s = n.data("linktoslide");
                        n.data("target") != t && (r = n.data("target")), "slide" == a ? n.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>') : (s = "no", n.append('<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + o + ';" data-x="center" data-y="center" data-linktoslide="' + s + '" data-start="0"><a style="width:100%;height:100%;display:block" target="' + r + '" href="' + a + '"><span style="width:100%;height:100%;display:block"></span></a></div>'))
                    }
                }), i.parent().css({
                    overflow: "visible"
                }), i.find(">ul:first >li >img").each(function(i) {
                    var a = e(this);
                    a.addClass("defaultimg"), a.data("lazyload") != t && 1 != a.data("lazydone") || m(a, n), a.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + a.data("duration") + '"data-zoomstart="' + a.data("zoomstart") + '"data-zoomend="' + a.data("zoomend") + '"data-rotationstart="' + a.data("rotationstart") + '"data-rotationend="' + a.data("rotationend") + '"data-ease="' + a.data("ease") + '"data-duration="' + a.data("duration") + '"data-bgpositionend="' + a.data("bgpositionend") + '"data-bgposition="' + a.data("bgposition") + '"data-duration="' + a.data("duration") + '"data-kenburns="' + a.data("kenburns") + '"data-easeme="' + a.data("ease") + '"data-bgfit="' + a.data("bgfit") + '"data-bgfitend="' + a.data("bgfitend") + '"data-owidth="' + a.data("owidth") + '"data-oheight="' + a.data("oheight") + '"></div>'), "none" != n.dottedOverlay && n.dottedOverlay != t && a.closest(".slotholder").append('<div class="tp-dottedoverlay ' + n.dottedOverlay + '"></div>');
                    var r = a.attr("src"),
                        s = (a.data("lazyload"), a.data("bgfit")),
                        l = a.data("bgrepeat"),
                        d = a.data("bgposition");
                    s == t && (s = "cover"), l == t && (l = "no-repeat"), d == t && (d = "center center");
                    var c = a.closest(".slotholder");
                    a.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + a.data("lazyload") + '" data-bgfit="' + s + '"data-bgposition="' + d + '" data-bgrepeat="' + l + '" data-lazydone="' + a.data("lazydone") + '" src="' + r + '" data-src="' + r + '" style="background-color:' + a.css("backgroundColor") + ";background-repeat:" + l + ";background-image:url(" + r + ");background-size:" + s + ";background-position:" + d + ';width:100%;height:100%;"></div>'), o(8) && (c.find(".tp-bgimg").css({
                        backgroundImage: "none",
                        "background-image": "none"
                    }), c.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + r + '" style="width:100%">')), a.css({
                        opacity: 0
                    }), a.data("li-id", i)
                })
            },
            v = function(e, i, n, a) {
                var r = e,
                    s = r.find(".defaultimg"),
                    l = r.data("zoomstart"),
                    d = r.data("rotationstart");
                s.data("currotate") != t && (d = s.data("currotate")), s.data("curscale") != t && (l = s.data("curscale")), m(s, i);
                var c = s.data("src"),
                    u = s.css("background-color"),
                    h = i.width,
                    p = i.height,
                    f = s.data("fxof");
                "on" == i.autoHeight && (p = i.container.height()), f == t && (f = 0), fullyoff = 0;
                var g = 0,
                    v = s.data("bgfit"),
                    y = s.data("bgrepeat"),
                    w = s.data("bgposition");
                if (v == t && (v = "cover"), y == t && (y = "no-repeat"), w == t && (w = "center center"), o(8)) {
                    r.data("kenburns", "off");
                    var x = c;
                    c = ""
                }
                if ("on" == r.data("kenburns") && (v = l, v.toString().length < 4 && (v = q(v, r, i))), "horizontal" == a) {
                    if (!n) var g = 0 - i.slotw;
                    for (var _ = 0; _ < i.slots; _++) r.append('<div class="slot" style="position:absolute;top:' + (0 + fullyoff) + "px;left:" + (f + _ * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + p + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + g + "px;width:" + (i.slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="background-color:' + u + ";position:absolute;top:0px;left:" + (0 - _ * i.slotw) + "px;width:" + h + "px;height:" + p + "px;background-image:url(" + c + ");background-repeat:" + y + ";background-size:" + v + ";background-position:" + w + ';"></div></div></div>'), l != t && d != t && punchgs.TweenLite.set(r.find(".slot").last(), {
                        rotationZ: d
                    }), o(8) && (r.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto">'), b(r, i))
                } else {
                    if (!n) var g = 0 - i.sloth;
                    for (var _ = 0; _ < i.slots + 2; _++) r.append('<div class="slot" style="position:absolute;top:' + (fullyoff + _ * i.sloth) + "px;left:" + f + "px;overflow:hidden;width:" + h + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + g + "px;left:0px;width:" + h + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + u + ";position:absolute;top:" + (0 - _ * i.sloth) + "px;left:0px;width:" + h + "px;height:" + p + "px;background-image:url(" + c + ");background-repeat:" + y + ";background-size:" + v + ";background-position:" + w + ';"></div></div></div>'), l != t && d != t && punchgs.TweenLite.set(r.find(".slot").last(), {
                        rotationZ: d
                    }), o(8) && (r.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto;">'), b(r, i))
                }
            },
            y = function(e, i, n) {
                var a = e,
                    r = a.find(".defaultimg"),
                    s = a.data("zoomstart"),
                    l = a.data("rotationstart");
                r.data("currotate") != t && (l = r.data("currotate")), r.data("curscale") != t && (s = 100 * r.data("curscale")), m(r, i);
                var d = r.data("src"),
                    c = r.css("backgroundColor"),
                    u = i.width,
                    h = i.height;
                "on" == i.autoHeight && (h = i.container.height());
                var p = r.data("fxof");
                p == t && (p = 0), fullyoff = 0;
                if (o(8)) {
                    var f = d;
                    d = ""
                }
                var g = 0;
                if (g = i.sloth > i.slotw ? i.sloth : i.slotw, !n);
                i.slotw = g, i.sloth = g;
                var v = 0,
                    y = 0,
                    w = r.data("bgfit"),
                    x = r.data("bgrepeat"),
                    _ = r.data("bgposition");
                w == t && (w = "cover"), x == t && (x = "no-repeat"), _ == t && (_ = "center center"), "on" == a.data("kenburns") && (w = s, w.toString().length < 4 && (w = q(w, a, i)));
                for (var C = 0; C < i.slots; C++) {
                    y = 0;
                    for (var T = 0; T < i.slots; T++) a.append('<div class="slot" style="position:absolute;top:' + (fullyoff + y) + "px;left:" + (p + v) + "px;width:" + g + "px;height:" + g + 'px;overflow:hidden;"><div class="slotslide" data-x="' + v + '" data-y="' + y + '" style="position:absolute;top:0px;left:0px;width:' + g + "px;height:" + g + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - y) + "px;left:" + (0 - v) + "px;width:" + u + "px;height:" + h + "px;background-color:" + c + ";background-image:url(" + d + ");background-repeat:" + x + ";background-size:" + w + ";background-position:" + _ + ';"></div></div></div>'), y += g, o(8) && (a.find(".slot ").last().find(".slotslide").append('<img src="' + f + '">'), b(a, i)), s != t && l != t && punchgs.TweenLite.set(a.find(".slot").last(), {
                        rotationZ: l
                    });
                    v += g
                }
            },
            b = function(e, t) {
                if (o(8)) {
                    var i = e.find(".ieeightfallbackimage");
                    i.width(), i.height();
                    t.startwidth / t.startheight < e.data("owidth") / e.data("oheight") ? i.css({
                        width: "auto",
                        height: "100%"
                    }) : i.css({
                        width: "100%",
                        height: "auto"
                    }), setTimeout(function() {
                        var n = i.width(),
                            a = i.height();
                        "center center" == e.data("bgposition") && i.css({
                            position: "absolute",
                            top: t.height / 2 - a / 2 + "px",
                            left: t.width / 2 - n / 2 + "px"
                        }), ("center top" == e.data("bgposition") || "top center" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            top: "0px",
                            left: t.width / 2 - n / 2 + "px"
                        }), ("center bottom" == e.data("bgposition") || "bottom center" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            bottom: "0px",
                            left: t.width / 2 - n / 2 + "px"
                        }), ("right top" == e.data("bgposition") || "top right" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            top: "0px",
                            right: "0px"
                        }), ("right bottom" == e.data("bgposition") || "bottom right" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            bottom: "0px",
                            right: "0px"
                        }), ("right center" == e.data("bgposition") || "center right" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            top: t.height / 2 - a / 2 + "px",
                            right: "0px"
                        }), ("left bottom" == e.data("bgposition") || "bottom left" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            bottom: "0px",
                            left: "0px"
                        }), ("left center" == e.data("bgposition") || "center left" == e.data("bgposition")) && i.css({
                            position: "absolute",
                            top: t.height / 2 - a / 2 + "px",
                            left: "0px"
                        })
                    }, 20)
                }
            },
            w = function(t, i, n) {
                n.find(".slot").each(function() {
                    e(this).remove()
                }), i.transition = 0
            },
            x = function(i, n) {
                i.find("img, .defaultimg").each(function(i) {
                    var a = e(this);
                    if (a.data("lazyload") != a.attr("src") && 3 > n && a.data("lazyload") != t && "undefined" != a.data("lazyload")) {
                        if (a.data("lazyload") != t && "undefined" != a.data("lazyload")) {
                            a.attr("src", a.data("lazyload"));
                            var r = new Image;
                            r.onload = function(e) {
                                a.data("lazydone", 1), a.hasClass("defaultimg") && _(a, r)
                            }, r.error = function() {
                                a.data("lazydone", 1)
                            }, r.src = a.attr("src"), r.complete && (a.hasClass("defaultimg") && _(a, r), a.data("lazydone", 1))
                        }
                    } else if ((a.data("lazyload") === t || "undefined" === a.data("lazyload")) && 1 != a.data("lazydone")) {
                        var r = new Image;
                        r.onload = function() {
                            a.hasClass("defaultimg") && _(a, r), a.data("lazydone", 1)
                        }, r.error = function() {
                            a.data("lazydone", 1)
                        }, a.attr("src") != t && "undefined" != a.attr("src") ? r.src = a.attr("src") : r.src = a.data("src"), r.complete && (a.hasClass("defaultimg") && _(a, r), a.data("lazydone", 1))
                    }
                })
            },
            _ = function(e, t) {
                var i = e.closest("li"),
                    n = t.width,
                    a = t.height;
                i.data("owidth", n), i.data("oheight", a), i.find(".slotholder").data("owidth", n), i.find(".slotholder").data("oheight", a), i.data("loadeddone", 1)
            },
            C = function(i, n, a) {
                x(i, 0);
                var r = setInterval(function() {
                    a.bannertimeronpause = !0, a.container.trigger("stoptimer"), a.cd = 0;
                    var o = 0;
                    i.find("img, .defaultimg").each(function(t) {
                        1 != e(this).data("lazydone") && o++
                    }), o > 0 ? x(i, o) : (clearInterval(r), n != t && n())
                }, 100)
            },
            T = function(e, i) {
                try {
                    e.find(">ul:first-child >li:eq(" + i.act + ")")
                } catch (n) {
                    e.find(">ul:first-child >li:eq(1)")
                }
                i.lastslide = i.act;
                var a = e.find(">ul:first-child >li:eq(" + i.next + ")"),
                    r = a.find(".defaultimg");
                i.bannertimeronpause = !0, e.trigger("stoptimer"), i.cd = 0, r.data("lazyload") != t && "undefined" != r.data("lazyload") && 1 != r.data("lazydone") ? (o(8) ? r.attr("src", a.find(".defaultimg").data("lazyload")) : r.css({
                    backgroundImage: 'url("' + a.find(".defaultimg").data("lazyload") + '")'
                }), r.data("src", a.find(".defaultimg").data("lazyload")), r.data("lazydone", 1), r.data("orgw", 0), a.data("loadeddone", 1), e.find(".tp-loader").css({
                    display: "block"
                }), C(e.find(".tp-static-layers"), function() {
                    C(a, function() {
                        var t = a.find(".slotholder");
                        if ("on" == t.data("kenburns")) var n = setInterval(function() {
                            var a = t.data("owidth");
                            a >= 0 && (clearInterval(n), k(i, r, e))
                        }, 10);
                        else k(i, r, e)
                    }, i)
                }, i)) : a.data("loadeddone") === t ? (a.data("loadeddone", 1), C(a, function() {
                    k(i, r, e)
                }, i)) : k(i, r, e)
            },
            k = function(e, t, i) {
                e.bannertimeronpause = !1, e.cd = 0, i.trigger("nulltimer"), i.find(".tp-loader").css({
                    display: "none"
                }), m(t, e), p(i, e), m(t, e), S(i, e)
            },
            S = function(e, i) {
                e.trigger("revolution.slide.onbeforeswap"), i.transition = 1, i.videoplaying = !1;
                try {
                    var n = e.find(">ul:first-child >li:eq(" + i.act + ")")
                } catch (a) {
                    var n = e.find(">ul:first-child >li:eq(1)")
                }
                i.lastslide = i.act;
                var r = e.find(">ul:first-child >li:eq(" + i.next + ")");
                setTimeout(function() {
                    f(i)
                }, 200);
                var o = n.find(".slotholder"),
                    s = r.find(".slotholder");
                ("on" == s.data("kenburns") || "on" == o.data("kenburns")) && (K(e, i), e.find(".kenburnimg").remove()), r.data("delay") != t ? (i.cd = 0, i.delay = r.data("delay")) : i.delay = i.origcd, 1 == i.firststart && punchgs.TweenLite.set(n, {
                    autoAlpha: 0
                }), punchgs.TweenLite.set(n, {
                    zIndex: 18
                }), punchgs.TweenLite.set(r, {
                    autoAlpha: 0,
                    zIndex: 20
                });
                var l = 0;
                n.index() != r.index() && 1 != i.firststart && (l = z(n, i)), "on" != n.data("saveperformance") && (l = 0), setTimeout(function() {
                    e.trigger("restarttimer"), $(e, i, r, n, o, s)
                }, l)
            },
            $ = function(i, n, a, r, s, l) {
                function d() {
                    e.each(m, function(e, t) {
                        (t[0] == p || t[8] == p) && (c = t[1], f = t[2], w = x), x += 1
                    })
                }
                "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != t && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared"));
                var c = 0,
                    u = a.data("transition").split(","),
                    h = a.data("nexttransid");
                h == t ? (h = 0, a.data("nexttransid", h)) : (h += 1, h == u.length && (h = 0), a.data("nexttransid", h));
                var p = u[h];
                n.ie && ("boxfade" == p && (p = "boxslide"), "slotfade-vertical" == p && (p = "slotzoom-vertical"), "slotfade-horizontal" == p && (p = "slotzoom-horizontal")), o(8) && (p = 11);
                var f = 0;
                "scroll" == n.parallax && n.parallaxFirstGo == t && (n.parallaxFirstGo = !0, Z(i, n), setTimeout(function() {
                    Z(i, n)
                }, 210), setTimeout(function() {
                    Z(i, n)
                }, 420)), ("boxslide" == p || "boxfade" == p || "papercut" == p || 0 == p || 1 == p || 16 == p) && (p = 9), "slidehorizontal" == p && (p = "slideleft", 1 == n.leftarrowpressed && (p = "slideright")), "slidevertical" == p && (p = "slideup", 1 == n.leftarrowpressed && (p = "slidedown")), "parallaxhorizontal" == p && (p = "parallaxtoleft", 1 == n.leftarrowpressed && (p = "parallaxtoright")), "parallaxvertical" == p && (p = "parallaxtotop", 1 == n.leftarrowpressed && (p = "parallaxtobottom"));
                var m = [
                        ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                        ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                        ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                        ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                        ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                        ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                        ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                        ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                        ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                        ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                        ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                        ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                        ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                        ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                        ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                        ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                        ["papercut", 16, 0, 0, 600, "", null, null, 16],
                        ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                        ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                        ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                        ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                        ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                        ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                        ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
                        ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                        ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                        ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                        ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
                        ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                        ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                        ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                        ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                        ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                        ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                        ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                        ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                        ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                        ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                        ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                        ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                        ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                        ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                        ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                        ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                        ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                        ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                        ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                    ],
                    g = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                    b = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                    c = 0,
                    f = 1,
                    w = 0,
                    x = 0,
                    _ = new Array;
                "on" == l.data("kenburns") && (("boxslide" == p || 0 == p || "boxfade" == p || 1 == p || "papercut" == p || 16 == p) && (p = 11), U(i, n, !0, !0)), "random" == p && (p = Math.round(Math.random() * m.length - 1), p > m.length - 1 && (p = m.length - 1)), "random-static" == p && (p = Math.round(Math.random() * g.length - 1), p > g.length - 1 && (p = g.length - 1), p = g[p]), "random-premium" == p && (p = Math.round(Math.random() * b.length - 1), p > b.length - 1 && (p = b.length - 1), p = b[p]);
                var C = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
                if (1 == n.isJoomla && window.MooTools != t && -1 != C.indexOf(p)) {
                    var T = Math.round(Math.random() * (b.length - 2)) + 1;
                    T > b.length - 1 && (T = b.length - 1), 0 == T && (T = 1), p = b[T]
                }
                d(), o(8) && c > 15 && 28 > c && (p = Math.round(Math.random() * g.length - 1), p > g.length - 1 && (p = g.length - 1), p = g[p], x = 0, d());
                var k = -1;
                (1 == n.leftarrowpressed || n.act > n.next) && (k = 1), n.leftarrowpressed = 0, c > 26 && (c = 26), 0 > c && (c = 0);
                var S = 300;
                a.data("masterspeed") != t && a.data("masterspeed") > 99 && a.data("masterspeed") < 4001 && (S = a.data("masterspeed")), _ = m[w], i.parent().find(".bullet").each(function() {
                    var t = e(this);
                    t.removeClass("selected"), "withbullet" == n.navigationArrows || "nexttobullets" == n.navigationArrows ? t.index() - 1 == n.next && t.addClass("selected") : t.index() == n.next && t.addClass("selected");
                });
                var $ = new punchgs.TimelineLite({
                    onComplete: function() {
                        D(i, n, l, s, a, r, $)
                    }
                });
                if ($.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        opacity: 0
                    })), $.pause(), a.data("slotamount") == t || a.data("slotamount") < 1 ? (n.slots = Math.round(12 * Math.random() + 4), "boxslide" == p ? n.slots = Math.round(6 * Math.random() + 3) : "flyin" == p && (n.slots = Math.round(4 * Math.random() + 1))) : n.slots = a.data("slotamount"), a.data("rotate") == t ? n.rotate = 0 : 999 == a.data("rotate") ? n.rotate = Math.round(360 * Math.random()) : n.rotate = a.data("rotate"), (!e.support.transition || n.ie || n.ie9) && (n.rotate = 0), 1 == n.firststart && (n.firststart = 0), S += _[4], (4 == c || 5 == c || 6 == c) && n.slots < 3 && (n.slots = 3), 0 != _[3] && (n.slots = Math.min(n.slots, _[3])), 9 == c && (n.slots = n.width / 20), 10 == c && (n.slots = n.height / 20), "box" == _[5] ? (null != _[7] && y(s, n, _[7]), null != _[6] && y(l, n, _[6])) : ("vertical" == _[5] || "horizontal" == _[5]) && (null != _[7] && v(s, n, _[7], _[5]), null != _[6] && v(l, n, _[6], _[5])), 0 == c) {
                    var I = Math.ceil(n.height / n.sloth),
                        A = 0;
                    l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        A += 1, A == I && (A = 0), $.add(punchgs.TweenLite.from(i, S / 600, {
                            opacity: 0,
                            top: 0 - n.sloth,
                            left: 0 - n.slotw,
                            rotation: n.rotate,
                            force3D: "auto",
                            ease: punchgs.Power2.easeOut
                        }), (15 * t + 30 * A) / 1500)
                    })
                }
                if (1 == c) {
                    var N, E = 0;
                    l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        rand = Math.random() * S + 300, rand2 = 500 * Math.random() + 200, rand + rand2 > N && (N = rand2 + rand2, E = t), $.add(punchgs.TweenLite.from(i, rand / 1e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            rotation: n.rotate,
                            ease: punchgs.Power2.easeInOut
                        }), rand2 / 1e3)
                    })
                }
                if (2 == c) {
                    var P = new punchgs.TimelineLite;
                    s.find(".slotslide").each(function() {
                        var t = e(this);
                        P.add(punchgs.TweenLite.to(t, S / 1e3, {
                            left: n.slotw,
                            force3D: "auto",
                            rotation: 0 - n.rotate
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function() {
                        var t = e(this);
                        P.add(punchgs.TweenLite.from(t, S / 1e3, {
                            left: 0 - n.slotw,
                            force3D: "auto",
                            rotation: n.rotate
                        }), 0), $.add(P, 0)
                    })
                }
                if (3 == c) {
                    var P = new punchgs.TimelineLite;
                    s.find(".slotslide").each(function() {
                        var t = e(this);
                        P.add(punchgs.TweenLite.to(t, S / 1e3, {
                            top: n.sloth,
                            rotation: n.rotate,
                            force3D: "auto",
                            transformPerspective: 600
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function() {
                        var t = e(this);
                        P.add(punchgs.TweenLite.from(t, S / 1e3, {
                            top: 0 - n.sloth,
                            rotation: n.rotate,
                            ease: punchgs.Power2.easeOut,
                            force3D: "auto",
                            transformPerspective: 600
                        }), 0), $.add(P, 0)
                    })
                }
                if (4 == c || 5 == c) {
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    var M = S / 1e3,
                        P = new punchgs.TimelineLite;
                    s.find(".slotslide").each(function(t) {
                        var i = e(this),
                            a = t * M / n.slots;
                        5 == c && (a = (n.slots - t - 1) * M / n.slots / 1.5), P.add(punchgs.TweenLite.to(i, 3 * M, {
                            transformPerspective: 600,
                            force3D: "auto",
                            top: 0 + n.height,
                            opacity: .5,
                            rotation: n.rotate,
                            ease: punchgs.Power2.easeInOut,
                            delay: a
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this),
                            a = t * M / n.slots;
                        5 == c && (a = (n.slots - t - 1) * M / n.slots / 1.5), P.add(punchgs.TweenLite.from(i, 3 * M, {
                            top: 0 - n.height,
                            opacity: .5,
                            rotation: n.rotate,
                            force3D: "auto",
                            ease: punchgs.Power2.easeInOut,
                            delay: a
                        }), 0), $.add(P, 0)
                    })
                }
                if (6 == c) {
                    n.slots < 2 && (n.slots = 2), n.slots % 2 && (n.slots = n.slots + 1);
                    var P = new punchgs.TimelineLite;
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), s.find(".slotslide").each(function(t) {
                        var i = e(this);
                        if (t + 1 < n.slots / 2) var a = 90 * (t + 2);
                        else var a = 90 * (2 + n.slots - t);
                        P.add(punchgs.TweenLite.to(i, (S + a) / 1e3, {
                            top: 0 + n.height,
                            opacity: 1,
                            force3D: "auto",
                            rotation: n.rotate,
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        if (t + 1 < n.slots / 2) var a = 90 * (t + 2);
                        else var a = 90 * (2 + n.slots - t);
                        P.add(punchgs.TweenLite.from(i, (S + a) / 1e3, {
                            top: 0 - n.height,
                            opacity: 1,
                            force3D: "auto",
                            rotation: n.rotate,
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(P, 0)
                    })
                }
                if (7 == c) {
                    S = 2 * S;
                    var P = new punchgs.TimelineLite;
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100), s.find(".slotslide").each(function() {
                        var t = e(this).find("div");
                        P.add(punchgs.TweenLite.to(t, S / 1e3, {
                            left: 0 - n.slotw / 2 + "px",
                            top: 0 - n.height / 2 + "px",
                            width: 2 * n.slotw + "px",
                            height: 2 * n.height + "px",
                            opacity: 0,
                            rotation: n.rotate,
                            force3D: "auto",
                            ease: punchgs.Power2.easeOut
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this).find("div");
                        P.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            transformPerspective: 600
                        }, {
                            left: 0 - t * n.slotw + "px",
                            ease: punchgs.Power2.easeOut,
                            force3D: "auto",
                            top: "0px",
                            width: n.width,
                            height: n.height,
                            opacity: 1,
                            rotation: 0,
                            delay: .1
                        }), 0), $.add(P, 0)
                    })
                }
                if (8 == c) {
                    S = 3 * S;
                    var P = new punchgs.TimelineLite;
                    s.find(".slotslide").each(function() {
                        var t = e(this).find("div");
                        P.add(punchgs.TweenLite.to(t, S / 1e3, {
                            left: 0 - n.width / 2 + "px",
                            top: 0 - n.sloth / 2 + "px",
                            width: 2 * n.width + "px",
                            height: 2 * n.sloth + "px",
                            force3D: "auto",
                            opacity: 0,
                            rotation: n.rotate
                        }), 0), $.add(P, 0)
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this).find("div");
                        P.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            left: 0,
                            top: 0,
                            opacity: 0,
                            force3D: "auto"
                        }, {
                            left: "0px",
                            top: 0 - t * n.sloth + "px",
                            width: l.find(".defaultimg").data("neww") + "px",
                            height: l.find(".defaultimg").data("newh") + "px",
                            opacity: 1,
                            rotation: 0
                        }), 0), $.add(P, 0)
                    })
                }
                if (9 == c || 10 == c) {
                    var L = 0;
                    l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        L++, $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            transformPerspective: 600
                        }, {
                            autoAlpha: 1,
                            ease: punchgs.Power2.easeInOut,
                            delay: 5 * t / 1e3
                        }), 0)
                    })
                }
                if (11 == c || 26 == c) {
                    var L = 0;
                    26 == c && (S = 0), l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.from(i, S / 1e3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power2.easeInOut
                        }), 0)
                    })
                }
                if (12 == c || 13 == c || 14 == c || 15 == c) {
                    S = 1e3, setTimeout(function() {
                        punchgs.TweenLite.set(s.find(".defaultimg"), {
                            autoAlpha: 0
                        })
                    }, 100);
                    var R = n.width,
                        j = n.height,
                        B = l.find(".slotslide");
                    ("on" == n.fullWidth || "on" == n.fullScreen) && (R = B.width(), j = B.height());
                    var z = 0,
                        F = 0;
                    12 == c ? z = R : 15 == c ? z = 0 - R : 13 == c ? F = j : 14 == c && (F = 0 - j);
                    var H = 1,
                        W = 1,
                        V = 1,
                        Y = punchgs.Power2.easeInOut,
                        q = punchgs.Power2.easeInOut,
                        X = S / 1e3,
                        Q = X;
                    1 == f && (H = 0), 2 == f && (H = 0), 3 == f && (Y = punchgs.Power2.easeInOut, q = punchgs.Power1.easeInOut, X = S / 1200), (4 == f || 5 == f) && (W = .6), 6 == f && (W = 1.4), (5 == f || 6 == f) && (V = 1.4, H = 0, R = 0, j = 0, z = 0, F = 0), 6 == f && (V = .6);
                    $.add(punchgs.TweenLite.from(B, X, {
                        left: z,
                        top: F,
                        scale: V,
                        opacity: H,
                        rotation: n.rotate,
                        ease: q,
                        force3D: "auto"
                    }), 0);
                    var K = s.find(".slotslide");
                    (4 == f || 5 == f) && (R = 0, j = 0), 1 != f && (12 == c ? $.add(punchgs.TweenLite.to(K, Q, {
                        left: 0 - R + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: H,
                        rotation: n.rotate,
                        ease: Y
                    }), 0) : 15 == c ? $.add(punchgs.TweenLite.to(K, Q, {
                        left: R + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: H,
                        rotation: n.rotate,
                        ease: Y
                    }), 0) : 13 == c ? $.add(punchgs.TweenLite.to(K, Q, {
                        top: 0 - j + "px",
                        force3D: "auto",
                        scale: W,
                        opacity: H,
                        rotation: n.rotate,
                        ease: Y
                    }), 0) : 14 == c && $.add(punchgs.TweenLite.to(K, Q, {
                        top: j + "px",
                        orce3D: "auto",
                        scale: W,
                        opacity: H,
                        rotation: n.rotate,
                        ease: Y
                    }), 0))
                }
                if (16 == c) {
                    var P = new punchgs.TimelineLite;
                    $.add(punchgs.TweenLite.set(r, {
                        position: "absolute",
                        "z-index": 20
                    }), 0), $.add(punchgs.TweenLite.set(a, {
                        position: "absolute",
                        "z-index": 15
                    }), 0), r.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), r.find(".tp-half-one").clone(!0).appendTo(r).addClass("tp-half-two"), r.find(".tp-half-two").removeClass("tp-half-one");
                    var R = n.width,
                        j = n.height;
                    "on" == n.autoHeight && (j = i.height()), r.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + R + "px;height:" + j + 'px;"></div>'), r.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + R + "px;height:" + j + 'px;"></div>'), r.find(".tp-half-two .defaultimg").css({
                        position: "absolute",
                        top: "-50%"
                    }), r.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), $.add(punchgs.TweenLite.set(r.find(".tp-half-two"), {
                        width: R,
                        height: j,
                        overflow: "hidden",
                        zIndex: 15,
                        position: "absolute",
                        top: j / 2,
                        left: "0px",
                        transformPerspective: 600,
                        transformOrigin: "center bottom"
                    }), 0), $.add(punchgs.TweenLite.set(r.find(".tp-half-one"), {
                        width: R,
                        height: j / 2,
                        overflow: "visible",
                        zIndex: 10,
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        transformPerspective: 600,
                        transformOrigin: "center top"
                    }), 0);
                    var G = (r.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                        J = Math.round(20 * Math.random() - 10),
                        ee = Math.round(20 * Math.random() - 10),
                        te = .4 * Math.random() - .2,
                        ie = .4 * Math.random() - .2,
                        ne = 1 * Math.random() + 1,
                        ae = 1 * Math.random() + 1,
                        re = .3 * Math.random() + .3;
                    $.add(punchgs.TweenLite.set(r.find(".tp-half-one"), {
                        overflow: "hidden"
                    }), 0), $.add(punchgs.TweenLite.fromTo(r.find(".tp-half-one"), S / 800, {
                        width: R,
                        height: j / 2,
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        force3D: "auto",
                        transformOrigin: "center top"
                    }, {
                        scale: ne,
                        rotation: G,
                        y: 0 - j - j / 4,
                        autoAlpha: 0,
                        ease: punchgs.Power2.easeInOut
                    }), 0), $.add(punchgs.TweenLite.fromTo(r.find(".tp-half-two"), S / 800, {
                        width: R,
                        height: j,
                        overflow: "hidden",
                        position: "absolute",
                        top: j / 2,
                        left: "0px",
                        force3D: "auto",
                        transformOrigin: "center bottom"
                    }, {
                        scale: ae,
                        rotation: J,
                        y: j + j / 4,
                        ease: punchgs.Power2.easeInOut,
                        autoAlpha: 0,
                        onComplete: function() {
                            punchgs.TweenLite.set(r, {
                                position: "absolute",
                                "z-index": 15
                            }), punchgs.TweenLite.set(a, {
                                position: "absolute",
                                "z-index": 20
                            }), r.find(".tp-half-one").length > 0 && (r.find(".tp-half-one .defaultimg").unwrap(), r.find(".tp-half-one .slotholder").unwrap()), r.find(".tp-half-two").remove()
                        }
                    }), 0), P.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                        autoAlpha: 1
                    }), 0), null != r.html() && $.add(punchgs.TweenLite.fromTo(a, (S - 200) / 1e3, {
                        scale: re,
                        x: n.width / 4 * te,
                        y: j / 4 * ie,
                        rotation: ee,
                        force3D: "auto",
                        transformOrigin: "center center",
                        ease: punchgs.Power2.easeOut
                    }, {
                        autoAlpha: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        rotation: 0
                    }), 0), $.add(P, 0)
                }
                if (17 == c && l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 800, {
                            opacity: 0,
                            rotationY: 0,
                            scale: .9,
                            rotationX: -110,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            opacity: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            force3D: "auto",
                            rotationY: 0,
                            ease: punchgs.Power3.easeOut,
                            delay: .06 * t
                        }), 0)
                    }), 18 == c && l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 500, {
                            autoAlpha: 0,
                            rotationY: 310,
                            scale: .9,
                            rotationX: 10,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: "center center"
                        }, {
                            autoAlpha: 1,
                            top: 0,
                            left: 0,
                            scale: 1,
                            rotation: 0,
                            rotationX: 0,
                            force3D: "auto",
                            rotationY: 0,
                            ease: punchgs.Power3.easeOut,
                            delay: .06 * t
                        }), 0)
                    }), 19 == c || 22 == c) {
                    var P = new punchgs.TimelineLite;
                    $.add(punchgs.TweenLite.set(r, {
                        zIndex: 20
                    }), 0), $.add(punchgs.TweenLite.set(a, {
                        zIndex: 20
                    }), 0), setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    var oe = (a.css("z-index"), r.css("z-index"), 90),
                        H = 1;
                    if (1 == k && (oe = -90), 19 == c) {
                        var se = "center center -" + n.height / 2;
                        H = 0
                    } else var se = "center center " + n.height / 2;
                    punchgs.TweenLite.set(i, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        transformPerspective: 600
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        P.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            transformStyle: "flat",
                            backfaceVisibility: "hidden",
                            left: 0,
                            rotationY: n.rotate,
                            z: 10,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationX: oe
                        }, {
                            left: 0,
                            rotationY: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            rotationX: 0,
                            delay: 50 * t / 1e3,
                            ease: punchgs.Power2.easeInOut
                        }), 0), P.add(punchgs.TweenLite.to(i, .1, {
                            autoAlpha: 1,
                            delay: 50 * t / 1e3
                        }), 0), $.add(P)
                    }), s.find(".slotslide").each(function(t) {
                        var i = e(this),
                            a = -90;
                        1 == k && (a = 90), P.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            transformStyle: "flat",
                            backfaceVisibility: "hidden",
                            autoAlpha: 1,
                            rotationY: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationX: 0
                        }, {
                            autoAlpha: 1,
                            rotationY: n.rotate,
                            top: 0,
                            z: 10,
                            scale: 1,
                            rotationX: a,
                            delay: 50 * t / 1e3,
                            force3D: "auto",
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(P)
                    })
                }
                if (20 == c) {
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    a.css("z-index"), r.css("z-index");
                    if (1 == k) var le = -n.width,
                        oe = 70,
                        se = "left center -" + n.height / 2;
                    else var le = n.width,
                        oe = -70,
                        se = "right center -" + n.height / 2;
                    l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 1500, {
                            left: le,
                            rotationX: 40,
                            z: -600,
                            opacity: H,
                            top: 0,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationY: oe
                        }, {
                            left: 0,
                            delay: 50 * t / 1e3,
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            rotationX: 40,
                            z: -600,
                            opacity: H,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationY: oe
                        }, {
                            rotationX: 0,
                            opacity: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 50 * t / 1e3,
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(punchgs.TweenLite.to(i, .1, {
                            opacity: 1,
                            force3D: "auto",
                            delay: 50 * t / 1e3 + S / 2e3
                        }), 0)
                    }), s.find(".slotslide").each(function(t) {
                        var i = e(this);
                        if (1 != k) var a = -n.width,
                            r = 70,
                            o = "left center -" + n.height / 2;
                        else var a = n.width,
                            r = -70,
                            o = "right center -" + n.height / 2;
                        $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            opacity: 1,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            left: 0,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: o,
                            rotationY: 0
                        }, {
                            opacity: 1,
                            rotationX: 40,
                            top: 0,
                            z: -600,
                            left: a,
                            force3D: "auto",
                            scale: .8,
                            rotationY: r,
                            delay: 50 * t / 1e3,
                            ease: punchgs.Power2.easeInOut
                        }), 0), $.add(punchgs.TweenLite.to(i, .1, {
                            force3D: "auto",
                            opacity: 0,
                            delay: 50 * t / 1e3 + (S / 1e3 - S / 1e4)
                        }), 0)
                    })
                }
                if (21 == c || 25 == c) {
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    a.css("z-index"), r.css("z-index");
                    if (1 == k) {
                        var le = -n.width,
                            oe = 90;
                        if (25 == c) {
                            var se = "center top 0";
                            rot2 = -oe, oe = n.rotate
                        } else {
                            var se = "left center 0";
                            rot2 = n.rotate
                        }
                    } else {
                        var le = n.width,
                            oe = -90;
                        if (25 == c) {
                            var se = "center bottom 0";
                            rot2 = -oe, oe = n.rotate
                        } else {
                            var se = "right center 0";
                            rot2 = n.rotate
                        }
                    }
                    if (l.find(".slotslide").each(function(t) {
                            var i = e(this);
                            $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                                left: 0,
                                transformStyle: "flat",
                                rotationX: rot2,
                                z: 0,
                                autoAlpha: 0,
                                top: 0,
                                scale: 1,
                                force3D: "auto",
                                transformPerspective: 600,
                                transformOrigin: se,
                                rotationY: oe
                            }, {
                                left: 0,
                                rotationX: 0,
                                top: 0,
                                z: 0,
                                autoAlpha: 1,
                                scale: 1,
                                rotationY: 0,
                                force3D: "auto",
                                ease: punchgs.Power3.easeInOut
                            }), 0)
                        }), 1 != k) {
                        var le = -n.width,
                            oe = 90;
                        if (25 == c) {
                            var se = "center top 0";
                            rot2 = -oe, oe = n.rotate
                        } else {
                            var se = "left center 0";
                            rot2 = n.rotate
                        }
                    } else {
                        var le = n.width,
                            oe = -90;
                        if (25 == c) {
                            var se = "center bottom 0";
                            rot2 = -oe, oe = n.rotate
                        } else {
                            var se = "right center 0";
                            rot2 = n.rotate
                        }
                    }
                    s.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            left: 0,
                            transformStyle: "flat",
                            rotationX: 0,
                            z: 0,
                            autoAlpha: 1,
                            top: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationY: 0
                        }, {
                            left: 0,
                            rotationX: rot2,
                            top: 0,
                            z: 0,
                            autoAlpha: 1,
                            force3D: "auto",
                            scale: 1,
                            rotationY: oe,
                            ease: punchgs.Power1.easeInOut
                        }), 0)
                    })
                }
                if (23 == c || 24 == c) {
                    setTimeout(function() {
                        s.find(".defaultimg").css({
                            opacity: 0
                        })
                    }, 100);
                    var oe = (a.css("z-index"), r.css("z-index"), -90);
                    1 == k && (oe = 90);
                    var H = 1;
                    if (23 == c) {
                        var se = "center center -" + n.width / 2;
                        H = 0
                    } else var se = "center center " + n.width / 2;
                    var de = 0;
                    punchgs.TweenLite.set(i, {
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        perspective: 2500
                    }), l.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            left: de,
                            rotationX: n.rotate,
                            force3D: "auto",
                            opacity: H,
                            top: 0,
                            scale: 1,
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationY: oe
                        }, {
                            left: 0,
                            rotationX: 0,
                            autoAlpha: 1,
                            top: 0,
                            z: 0,
                            scale: 1,
                            rotationY: 0,
                            delay: 50 * t / 500,
                            ease: punchgs.Power2.easeInOut
                        }), 0)
                    }), oe = 90, 1 == k && (oe = -90), s.find(".slotslide").each(function(t) {
                        var i = e(this);
                        $.add(punchgs.TweenLite.fromTo(i, S / 1e3, {
                            left: 0,
                            autoAlpha: 1,
                            rotationX: 0,
                            top: 0,
                            z: 0,
                            scale: 1,
                            force3D: "auto",
                            transformPerspective: 600,
                            transformOrigin: se,
                            rotationY: 0
                        }, {
                            left: de,
                            autoAlpha: 1,
                            rotationX: n.rotate,
                            top: 0,
                            scale: 1,
                            rotationY: oe,
                            delay: 50 * t / 500,
                            ease: punchgs.Power2.easeInOut
                        }), 0)
                    })
                }
                $.pause(), O(a, n, null, $), punchgs.TweenLite.to(a, .001, {
                    autoAlpha: 1
                });
                var ce = {};
                ce.slideIndex = n.next + 1, ce.slide = a, i.trigger("revolution.slide.onchange", ce), setTimeout(function() {
                    i.trigger("revolution.slide.onafterswap")
                }, S), i.trigger("revolution.slide.onvideostop")
            },
            D = function(e, t, i, n, a, r, o) {
                punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
                    autoAlpha: 1,
                    onComplete: function() {
                        w(e, t, a)
                    }
                }), a.index() != r.index() && punchgs.TweenLite.to(r, .2, {
                    autoAlpha: 0,
                    onComplete: function() {
                        w(e, t, r)
                    }
                }), t.act = t.next, "thumb" == t.navigationType && ee(e), "on" == i.data("kenburns") && U(e, t), e.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), a.addClass("current-sr-slide-visible"), ("scroll" == t.parallax || "scroll+mouse" == t.parallax || "mouse+scroll" == t.parallax) && Z(e, t), o.clear()
            },
            I = function(t) {
                var i = t.target.getVideoEmbedCode(),
                    n = e("#" + i.split('id="')[1].split('"')[0]),
                    a = n.closest(".tp-simpleresponsive"),
                    r = n.parent().data("player");
                if (t.data == YT.PlayerState.PLAYING) {
                    var o = a.find(".tp-bannertimer"),
                        s = o.data("opt");
                    "mute" == n.closest(".tp-caption").data("volume") && r.mute(), s.videoplaying = !0, a.trigger("stoptimer"), a.trigger("revolution.slide.onvideoplay")
                } else {
                    var o = a.find(".tp-bannertimer"),
                        s = o.data("opt"); - 1 != t.data && (s.videoplaying = !1, a.trigger("playtimer"), a.trigger("revolution.slide.onvideostop"))
                }
                0 == t.data && 1 == s.nextslideatend && s.container.revnext()
            },
            A = function(t, i) {
                var n = $f(t),
                    a = e("#" + t),
                    r = a.closest(".tp-simpleresponsive");
                n.addEvent("ready", function(e) {
                    i && n.api("play"), n.addEvent("play", function(e) {
                        var t = r.find(".tp-bannertimer"),
                            i = t.data("opt");
                        i.videoplaying = !0, r.trigger("stoptimer"), "mute" == a.closest(".tp-caption").data("volume") && n.api("setVolume", "0")
                    }), n.addEvent("finish", function(e) {
                        var t = r.find(".tp-bannertimer"),
                            i = t.data("opt");
                        i.videoplaying = !1, r.trigger("playtimer"), r.trigger("revolution.slide.onvideoplay"), 1 == i.nextslideatend && i.container.revnext()
                    }), n.addEvent("pause", function(e) {
                        var t = r.find(".tp-bannertimer"),
                            i = t.data("opt");
                        i.videoplaying = !1, r.trigger("playtimer"), r.trigger("revolution.slide.onvideostop")
                    })
                })
            },
            N = function(e, i) {
                var n = i.width(),
                    a = i.height(),
                    r = e.data("mediaAspect");
                r == t && (r = 1);
                var o = n / a;
                e.css({
                    position: "absolute"
                });
                e.find("video");
                r > o ? (e.width(a * r).height(a), punchgs.TweenLite.to(e, .01, {
                    force3D: "auto",
                    top: 0,
                    left: 0 - (a * r - n) / 2,
                    height: a
                })) : (e.width(n).height(n / r), punchgs.TweenLite.to(e, .01, {
                    force3D: "auto",
                    top: 0 - (n / r - a) / 2,
                    left: 0,
                    height: n / r
                }))
            },
            E = function() {
                var e = new Object;
                return e.x = 0, e.y = 0, e.rotationX = 0, e.rotationY = 0, e.rotationZ = 0, e.scale = 1, e.scaleX = 1, e.scaleY = 1, e.skewX = 0, e.skewY = 0, e.opacity = 0, e.transformOrigin = "center, center", e.transformPerspective = 400, e.rotation = 0, e
            },
            P = function(t, i) {
                var n = i.split(";");
                return e.each(n, function(e, i) {
                    i = i.split(":");
                    var n = i[0],
                        a = i[1];
                    "rotationX" == n && (t.rotationX = parseInt(a, 0)), "rotationY" == n && (t.rotationY = parseInt(a, 0)), "rotationZ" == n && (t.rotationZ = parseInt(a, 0)), "rotationZ" == n && (t.rotation = parseInt(a, 0)), "scaleX" == n && (t.scaleX = parseFloat(a)), "scaleY" == n && (t.scaleY = parseFloat(a)), "opacity" == n && (t.opacity = parseFloat(a)), "skewX" == n && (t.skewX = parseInt(a, 0)), "skewY" == n && (t.skewY = parseInt(a, 0)), "x" == n && (t.x = parseInt(a, 0)), "y" == n && (t.y = parseInt(a, 0)), "z" == n && (t.z = parseInt(a, 0)), "transformOrigin" == n && (t.transformOrigin = a.toString()), "transformPerspective" == n && (t.transformPerspective = parseInt(a, 0))
                }), t
            },
            M = function(t) {
                var i = t.split("animation:"),
                    n = new Object;
                n.animation = P(E(), i[1]);
                var a = i[0].split(";");
                return e.each(a, function(e, t) {
                    t = t.split(":");
                    var i = t[0],
                        a = t[1];
                    "typ" == i && (n.typ = a), "speed" == i && (n.speed = parseInt(a, 0) / 1e3), "start" == i && (n.start = parseInt(a, 0) / 1e3), "elementdelay" == i && (n.elementdelay = parseFloat(a)), "ease" == i && (n.ease = a)
                }), n
            },
            O = function(i, n, a, r) {
                i.data("ctl") == t && i.data("ctl", new punchgs.TimelineLite);
                var o = i.data("ctl"),
                    s = 0,
                    l = 0,
                    d = i.find(".tp-caption"),
                    c = n.container.find(".tp-static-layers").find(".tp-caption");
                o.pause(), e.each(c, function(e, t) {
                    d.push(t)
                }), d.each(function(i) {
                    function r() {}

                    function o() {}
                    var d = a,
                        c = -1,
                        u = e(this);
                    u.hasClass("tp-static-layer") && ((-1 == u.data("startslide") || "-1" == u.data("startslide")) && u.data("startslide", 0), (-1 == u.data("endslide") || "-1" == u.data("endslide")) && u.data("endslide", n.slideamount), u.hasClass("tp-is-shown") ? c = u.data("endslide") == n.next || u.data("startslide") > n.next || u.data("endslide") < n.next ? 2 : 0 : u.data("startslide") <= n.next && u.data("endslide") >= n.next || u.data("startslide") == n.next || u.data("endslide") == n.next ? (u.addClass("tp-is-shown"), c = 1) : c = 0), s = n.width / 2 - n.startwidth * n.bw / 2;
                    var h = n.bw;
                    n.bh;
                    "on" == n.fullScreen && (l = n.height / 2 - n.startheight * n.bh / 2), "on" == n.autoHeight && (l = n.container.height() / 2 - n.startheight * n.bh / 2), 0 > l && (l = 0);
                    var p = 0;
                    if (n.width < n.hideCaptionAtLimit && "on" == u.data("captionhidden") ? (u.addClass("tp-hidden-caption"), p = 1) : n.width < n.hideAllCaptionAtLimit || n.width < n.hideAllCaptionAtLilmit ? (u.addClass("tp-hidden-caption"), p = 1) : u.removeClass("tp-hidden-caption"), 0 == p) {
                        u.data("linktoslide") == t || u.hasClass("hasclicklistener") || (u.addClass("hasclicklistener"), u.css({
                            cursor: "pointer"
                        }), "no" != u.data("linktoslide") && u.click(function() {
                            var t = e(this),
                                i = t.data("linktoslide");
                            "next" != i && "prev" != i ? (n.container.data("showus", i), n.container.parent().find(".tp-rightarrow").click()) : "next" == i ? n.container.parent().find(".tp-rightarrow").click() : "prev" == i && n.container.parent().find(".tp-leftarrow").click()
                        })), 0 > s && (s = 0);
                        var f = "iframe" + Math.round(1e3 * Math.random() + 1);
                        if (u.find("iframe").length > 0 || u.find("video").length > 0) {
                            var m = !1;
                            if ((1 == u.data("autoplayonlyfirsttime") || "true" == u.data("autoplayonlyfirsttime") || 1 == u.data("autoplay")) && (u.data("autoplay", !0), m = !0), u.find("iframe").each(function() {
                                    var i = e(this);
                                    if (Y()) {
                                        var a = i.attr("src");
                                        i.attr("src", ""), i.attr("src", a)
                                    }
                                    if (n.nextslideatend = u.data("nextslideatend"), u.data("thumbimage") != t && u.data("thumbimage").length > 2 && 1 != u.data("autoplay") && !d && (u.find(".tp-thumb-image").remove(), u.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + u.data("thumbimage") + '); background-size:cover"></div>')), i.attr("src").toLowerCase().indexOf("youtube") >= 0) {
                                        if (i.hasClass("HasListener")) {
                                            if (1 == u.data("autoplay") || m) {
                                                var r = u.data("player");
                                                u.data("timerplay", setTimeout(function() {
                                                    "on" == u.data("forcerewind") && r.seekTo(0), r.playVideo()
                                                }, u.data("start")))
                                            }
                                        } else try {
                                            i.attr("id", f);
                                            var r, o = setInterval(function() {
                                                YT != t && typeof YT.Player != t && "undefined" != typeof YT.Player && (r = 1 == u.data("autoplay") || m ? new YT.Player(f, {
                                                    events: {
                                                        onStateChange: I,
                                                        onReady: function(e) {
                                                            e.target.playVideo()
                                                        }
                                                    }
                                                }) : new YT.Player(f, {
                                                    events: {
                                                        onStateChange: I
                                                    }
                                                }), i.addClass("HasListener"), u.data("player", r), clearInterval(o))
                                            }, 100)
                                        } catch (s) {}
                                        u.find(".tp-thumb-image").click(function() {
                                            if (punchgs.TweenLite.to(e(this), .3, {
                                                    opacity: 0,
                                                    force3D: "auto",
                                                    ease: punchgs.Power3.easeInOut,
                                                    onComplete: function() {
                                                        u.find(".tp-thumb-image").remove()
                                                    }
                                                }), !Y()) {
                                                var t = u.data("player");
                                                t.playVideo()
                                            }
                                        })
                                    } else if (i.attr("src").toLowerCase().indexOf("vimeo") >= 0) {
                                        if (i.hasClass("HasListener")) {
                                            if (1 == u.data("autoplay")) var i = u.find("iframe"),
                                                l = i.attr("id"),
                                                c = setInterval(function() {
                                                    if ($f != t && typeof $f(l).api != t && "undefined" != typeof $f(l).api) {
                                                        var e = $f(l);
                                                        u.data("timerplay", setTimeout(function() {
                                                            "on" == u.data("forcerewind") && e.api("seekTo", 0), e.api("play")
                                                        }, u.data("start"))), clearInterval(c)
                                                    }
                                                }, 100)
                                        } else {
                                            i.addClass("HasListener"), i.attr("id", f);
                                            for (var h, p = i.attr("src"), g = {}, v = p, y = /([^&=]+)=([^&]*)/g; h = y.exec(v);) g[decodeURIComponent(h[1])] = decodeURIComponent(h[2]);
                                            p = g.player_id != t ? p.replace(g.player_id, f) : p + "&player_id=" + f;
                                            try {
                                                p = p.replace("api=0", "api=1")
                                            } catch (s) {}
                                            p += "&api=1", i.attr("src", p);
                                            var r = u.find("iframe")[0],
                                                c = setInterval(function() {
                                                    $f != t && typeof $f(f).api != t && "undefined" != typeof $f(f).api && ($f(r).addEvent("ready", function() {
                                                        A(f, m)
                                                    }), clearInterval(c))
                                                }, 100)
                                        }
                                        u.find(".tp-thumb-image").click(function() {
                                            punchgs.TweenLite.to(e(this), .3, {
                                                opacity: 0,
                                                force3D: "auto",
                                                ease: punchgs.Power3.easeInOut,
                                                onComplete: function() {
                                                    u.find(".tp-thumb-image").remove()
                                                }
                                            });
                                            var i = u.find("iframe"),
                                                n = i.attr("id"),
                                                a = setInterval(function() {
                                                    if ($f != t && typeof $f(n).api != t && "undefined" != typeof $f(n).api) {
                                                        var e = $f(n);
                                                        e.api("play"), clearInterval(a)
                                                    }
                                                }, 100)
                                        })
                                    }
                                }), u.find("video").length > 0 && u.find("video").each(function(i) {
                                    var a = e(this),
                                        r = this;
                                    a.parent().hasClass("html5vid") || a.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                                    var o = e(this).parent();
                                    r.addEventListener ? r.addEventListener("loadedmetadata", function() {
                                        o.data("metaloaded", 1)
                                    }) : r.attachEvent("loadedmetadata", function() {
                                        o.data("metaloaded", 1)
                                    }), a.hasClass("HasListener") || (a.addClass("HasListener"), r.addEventListener("play", function() {
                                        o.addClass("videoisplaying"), o.find(".tp-poster").remove(), "mute" == u.data("volume") && (r.muted = !0), n.container.trigger("revolution.slide.onvideoplay"), n.videoplaying = !0, n.container.trigger("stoptimer")
                                    }), r.addEventListener("pause", function() {
                                        o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("playtimer"), n.container.trigger("revolution.slide.onvideostop")
                                    }), r.addEventListener("ended", function() {
                                        o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("playtimer"), n.container.trigger("revolution.slide.onvideostop"), 1 == n.nextslideatend && n.container.revnext()
                                    })), a.attr("poster") != t && 0 == o.find(".tp-poster").length && o.append('<div class="tp-poster" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;background:url(' + a.attr("poster") + '); background-position:center center;background-size:100%;background-repeat:no-repeat;"></div>'), a.attr("control") == t && 0 == o.find(".tp-video-play-button").length && (o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), o.find(".tp-video-play-button").click(function() {
                                        o.hasClass("videoisplaying") ? r.pause() : r.play()
                                    })), a.attr("control") == t && o.find("video, .tp-poster").click(function() {
                                        o.hasClass("videoisplaying") ? r.pause() : r.play()
                                    }), 1 == u.data("forcecover") && (N(o, n.container), o.addClass("fullcoveredvideo"), u.addClass("fullcoveredvideo")), (1 == u.data("forcecover") || u.hasClass("fullscreenvideo")) && o.css({
                                        width: "100%",
                                        height: "100%"
                                    });
                                    var s = !1;
                                    (1 == u.data("autoplayonlyfirsttime") || "true" == u.data("autoplayonlyfirsttime")) && (s = !0), clearInterval(o.data("interval")), o.data("interval", setInterval(function() {
                                        if (1 == o.data("metaloaded") || NaN != r.duration) {
                                            clearInterval(o.data("interval")), "none" != u.data("dottedoverlay") && u.data("dottedoverlay") != t && 1 != u.find(".tp-dottedoverlay").length && o.append('<div class="tp-dottedoverlay ' + u.data("dottedoverlay") + '"></div>');
                                            var i = 16 / 9;
                                            if ("4:3" == u.data("aspectratio") && (i = 4 / 3), o.data("mediaAspect", i), 1 == o.closest(".tp-caption").data("forcecover") && (N(o, n.container), o.addClass("fullcoveredvideo")), a.css({
                                                    display: "block"
                                                }), n.nextslideatend = u.data("nextslideatend"), 1 == u.data("autoplay") || 1 == s) {
                                                e("body").find("#" + n.container.attr("id")).find(".tp-bannertimer");
                                                setTimeout(function() {
                                                    n.videoplaying = !0, n.container.trigger("stoptimer")
                                                }, 200), "on" != u.data("forcerewind") || o.hasClass("videoisplaying") || r.currentTime > 0 && (r.currentTime = 0), "mute" == u.data("volume") && (r.muted = !0), o.data("timerplay", setTimeout(function() {
                                                    "on" != u.data("forcerewind") || o.hasClass("videoisplaying") || r.currentTime > 0 && (r.currentTime = 0), "mute" == u.data("volume") && (r.muted = !0), setTimeout(function() {
                                                        r.play()
                                                    }, 500)
                                                }, 10 + u.data("start")))
                                            }
                                            if (o.data("ww") == t && o.data("ww", a.attr("width")), o.data("hh") == t && o.data("hh", a.attr("height")), !u.hasClass("fullscreenvideo") && 1 == u.data("forcecover")) try {
                                                o.width(o.data("ww") * n.bw), o.height(o.data("hh") * n.bh)
                                            } catch (l) {}
                                            clearInterval(o.data("interval"))
                                        }
                                    }), 100)
                                }), 1 == u.data("autoplay")) {
                                e("body").find("#" + n.container.attr("id")).find(".tp-bannertimer");
                                setTimeout(function() {
                                    n.videoplaying = !0, n.container.trigger("stoptimer")
                                }, 200), n.videoplaying = !0, n.container.trigger("stoptimer"), (1 == u.data("autoplayonlyfirsttime") || "true" == u.data("autoplayonlyfirsttime")) && (u.data("autoplay", !1), u.data("autoplayonlyfirsttime", !1))
                            }
                        }
                        var g = 0,
                            v = 0;
                        if (u.find("img").length > 0) {
                            var y = u.find("img");
                            0 == y.width() && y.css({
                                width: "auto"
                            }), 0 == y.height() && y.css({
                                height: "auto"
                            }), y.data("ww") == t && y.width() > 0 && y.data("ww", y.width()), y.data("hh") == t && y.height() > 0 && y.data("hh", y.height());
                            var b = y.data("ww"),
                                w = y.data("hh");
                            b == t && (b = 0), w == t && (w = 0), y.width(b * n.bw), y.height(w * n.bh), g = y.width(), v = y.height()
                        } else if (u.find("iframe").length > 0 || u.find("video").length > 0) {
                            var x = !1,
                                y = u.find("iframe");
                            0 == y.length && (y = u.find("video"), x = !0), y.css({
                                display: "block"
                            }), u.data("ww") == t && u.data("ww", y.width()), u.data("hh") == t && u.data("hh", y.height());
                            var b = u.data("ww"),
                                w = u.data("hh"),
                                _ = u;
                            _.data("fsize") == t && _.data("fsize", parseInt(_.css("font-size"), 0) || 0), _.data("pt") == t && _.data("pt", parseInt(_.css("paddingTop"), 0) || 0), _.data("pb") == t && _.data("pb", parseInt(_.css("paddingBottom"), 0) || 0), _.data("pl") == t && _.data("pl", parseInt(_.css("paddingLeft"), 0) || 0), _.data("pr") == t && _.data("pr", parseInt(_.css("paddingRight"), 0) || 0), _.data("mt") == t && _.data("mt", parseInt(_.css("marginTop"), 0) || 0), _.data("mb") == t && _.data("mb", parseInt(_.css("marginBottom"), 0) || 0), _.data("ml") == t && _.data("ml", parseInt(_.css("marginLeft"), 0) || 0), _.data("mr") == t && _.data("mr", parseInt(_.css("marginRight"), 0) || 0), _.data("bt") == t && _.data("bt", parseInt(_.css("borderTop"), 0) || 0), _.data("bb") == t && _.data("bb", parseInt(_.css("borderBottom"), 0) || 0), _.data("bl") == t && _.data("bl", parseInt(_.css("borderLeft"), 0) || 0), _.data("br") == t && _.data("br", parseInt(_.css("borderRight"), 0) || 0), _.data("lh") == t && _.data("lh", parseInt(_.css("lineHeight"), 0) || 0);
                            var C = n.width,
                                T = n.height;
                            if (C > n.startwidth && (C = n.startwidth), T > n.startheight && (T = n.startheight), u.hasClass("fullscreenvideo")) {
                                s = 0, l = 0, u.data("x", 0), u.data("y", 0);
                                var k = n.height;
                                "on" == n.autoHeight && (k = n.container.height()), u.css({
                                    width: n.width,
                                    height: k
                                })
                            } else u.css({
                                "font-size": _.data("fsize") * n.bw + "px",
                                "padding-top": _.data("pt") * n.bh + "px",
                                "padding-bottom": _.data("pb") * n.bh + "px",
                                "padding-left": _.data("pl") * n.bw + "px",
                                "padding-right": _.data("pr") * n.bw + "px",
                                "margin-top": _.data("mt") * n.bh + "px",
                                "margin-bottom": _.data("mb") * n.bh + "px",
                                "margin-left": _.data("ml") * n.bw + "px",
                                "margin-right": _.data("mr") * n.bw + "px",
                                "border-top": _.data("bt") * n.bh + "px",
                                "border-bottom": _.data("bb") * n.bh + "px",
                                "border-left": _.data("bl") * n.bw + "px",
                                "border-right": _.data("br") * n.bw + "px",
                                "line-height": _.data("lh") * n.bh + "px",
                                height: w * n.bh + "px"
                            });
                            0 == x ? (y.width(b * n.bw), y.height(w * n.bh)) : 1 == u.data("forcecover") || u.hasClass("fullscreenvideo") || (y.width(b * n.bw), y.height(w * n.bh)), g = y.width(), v = y.height()
                        } else {
                            u.find(".tp-resizeme, .tp-resizeme *").each(function() {
                                R(e(this), n)
                            }), u.hasClass("tp-resizeme") && u.find("*").each(function() {
                                R(e(this), n)
                            }), R(u, n), v = u.outerHeight(!0), g = u.outerWidth(!0);
                            var S = u.outerHeight(),
                                $ = u.css("backgroundColor");
                            u.find(".frontcorner").css({
                                borderWidth: S + "px",
                                left: 0 - S + "px",
                                borderRight: "0px solid transparent",
                                borderTopColor: $
                            }), u.find(".frontcornertop").css({
                                borderWidth: S + "px",
                                left: 0 - S + "px",
                                borderRight: "0px solid transparent",
                                borderBottomColor: $
                            }), u.find(".backcorner").css({
                                borderWidth: S + "px",
                                right: 0 - S + "px",
                                borderLeft: "0px solid transparent",
                                borderBottomColor: $
                            }), u.find(".backcornertop").css({
                                borderWidth: S + "px",
                                right: 0 - S + "px",
                                borderLeft: "0px solid transparent",
                                borderTopColor: $
                            })
                        }
                        "on" == n.fullScreenAlignForce && (s = 0, l = 0), u.data("voffset") == t && u.data("voffset", 0), u.data("hoffset") == t && u.data("hoffset", 0);
                        var D = u.data("voffset") * h,
                            O = u.data("hoffset") * h,
                            z = n.startwidth * h,
                            W = n.startheight * h;
                        "on" == n.fullScreenAlignForce && (z = n.container.width(), W = n.container.height()), ("center" == u.data("x") || "center" == u.data("xcenter")) && (u.data("xcenter", "center"), u.data("x", z / 2 - u.outerWidth(!0) / 2 + O)), ("left" == u.data("x") || "left" == u.data("xleft")) && (u.data("xleft", "left"), u.data("x", 0 / h + O)), ("right" == u.data("x") || "right" == u.data("xright")) && (u.data("xright", "right"), u.data("x", (z - u.outerWidth(!0) + O) / h)), ("center" == u.data("y") || "center" == u.data("ycenter")) && (u.data("ycenter", "center"), u.data("y", W / 2 - u.outerHeight(!0) / 2 + D)), ("top" == u.data("y") || "top" == u.data("ytop")) && (u.data("ytop", "top"), u.data("y", 0 / n.bh + D)), ("bottom" == u.data("y") || "bottom" == u.data("ybottom")) && (u.data("ybottom", "bottom"), u.data("y", (W - u.outerHeight(!0) + D) / h)), u.data("start") == t && u.data("start", 1e3);
                        var V = u.data("easing");
                        V == t && (V = "punchgs.Power1.easeOut");
                        var q = u.data("start") / 1e3,
                            U = u.data("speed") / 1e3;
                        if ("center" == u.data("x") || "center" == u.data("xcenter")) var X = u.data("x") + s;
                        else var X = h * u.data("x") + s;
                        if ("center" == u.data("y") || "center" == u.data("ycenter")) var Q = u.data("y") + l;
                        else var Q = n.bh * u.data("y") + l;
                        if (punchgs.TweenLite.set(u, {
                                top: Q,
                                left: X,
                                overwrite: "auto"
                            }), 0 == c && (d = !0), u.data("timeline") == t || d || (u.data("timeline").gotoAndPlay(0), d = !0), !d) {
                            u.data("timeline") != t;
                            var K = new punchgs.TimelineLite({
                                smoothChildTiming: !0,
                                onStart: o
                            });
                            K.pause(), "on" == n.fullScreenAlignForce;
                            var G = u;
                            u.data("mySplitText") != t && u.data("mySplitText").revert(), ("chars" == u.data("splitin") || "words" == u.data("splitin") || "lines" == u.data("splitin") || "chars" == u.data("splitout") || "words" == u.data("splitout") || "lines" == u.data("splitout")) && (u.find("a").length > 0 ? u.data("mySplitText", new punchgs.SplitText(u.find("a"), {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            })) : u.find(".tp-layer-inner-rotation").length > 0 ? u.data("mySplitText", new punchgs.SplitText(u.find(".tp-layer-inner-rotation"), {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            })) : u.data("mySplitText", new punchgs.SplitText(u, {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            })), u.addClass("splitted")), "chars" == u.data("splitin") && (G = u.data("mySplitText").chars), "words" == u.data("splitin") && (G = u.data("mySplitText").words), "lines" == u.data("splitin") && (G = u.data("mySplitText").lines);
                            var Z = E(),
                                J = E();
                            u.data("repeat") != t && (repeatV = u.data("repeat")), u.data("yoyo") != t && (yoyoV = u.data("yoyo")), u.data("repeatdelay") != t && (repeatdelayV = u.data("repeatdelay")), u.hasClass("customin") ? Z = P(Z, u.data("customin")) : u.hasClass("randomrotate") ? (Z.scale = 3 * Math.random() + 1, Z.rotation = Math.round(200 * Math.random() - 100), Z.x = Math.round(200 * Math.random() - 100), Z.y = Math.round(200 * Math.random() - 100)) : u.hasClass("lfr") || u.hasClass("skewfromright") ? Z.x = 15 + n.width : u.hasClass("lfl") || u.hasClass("skewfromleft") ? Z.x = -15 - g : u.hasClass("sfl") || u.hasClass("skewfromleftshort") ? Z.x = -50 : u.hasClass("sfr") || u.hasClass("skewfromrightshort") ? Z.x = 50 : u.hasClass("lft") ? Z.y = -25 - v : u.hasClass("lfb") ? Z.y = 25 + n.height : u.hasClass("sft") ? Z.y = -50 : u.hasClass("sfb") && (Z.y = 50), u.hasClass("skewfromright") || u.hasClass("skewfromrightshort") ? Z.skewX = -85 : (u.hasClass("skewfromleft") || u.hasClass("skewfromleftshort")) && (Z.skewX = 85), (u.hasClass("fade") || u.hasClass("sft") || u.hasClass("sfl") || u.hasClass("sfb") || u.hasClass("skewfromleftshort") || u.hasClass("sfr") || u.hasClass("skewfromrightshort")) && (Z.opacity = 0), "safari" == L().toLowerCase();
                            var ee = u.data("elementdelay") == t ? 0 : u.data("elementdelay");
                            J.ease = Z.ease = u.data("easing") == t ? punchgs.Power1.easeInOut : u.data("easing"), Z.data = new Object, Z.data.oldx = Z.x, Z.data.oldy = Z.y, J.data = new Object, J.data.oldx = J.x, J.data.oldy = J.y, Z.x = Z.x * h, Z.y = Z.y * h;
                            var te = new punchgs.TimelineLite;
                            if (2 != c)
                                if (u.hasClass("customin")) G != u && K.add(punchgs.TweenLite.set(u, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                })), Z.visibility = "hidden", J.visibility = "visible", J.overwrite = "all", J.opacity = 1, J.onComplete = r(), J.delay = q, J.force3D = "auto", K.add(te.staggerFromTo(G, U, Z, J, ee), "frame0");
                                else if (Z.visibility = "visible", Z.transformPerspective = 600, G != u && K.add(punchgs.TweenLite.set(u, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                })), J.visibility = "visible", J.delay = q, J.onComplete = r(), J.opacity = 1, J.force3D = "auto", u.hasClass("randomrotate") && G != u)
                                for (var i = 0; i < G.length; i++) {
                                    var ie = new Object,
                                        ne = new Object;
                                    e.extend(ie, Z), e.extend(ne, J), Z.scale = 3 * Math.random() + 1, Z.rotation = Math.round(200 * Math.random() - 100), Z.x = Math.round(200 * Math.random() - 100), Z.y = Math.round(200 * Math.random() - 100), 0 != i && (ne.delay = q + i * ee), K.append(punchgs.TweenLite.fromTo(G[i], U, ie, ne), "frame0")
                                } else K.add(te.staggerFromTo(G, U, Z, J, ee), "frame0");
                            u.data("timeline", K);
                            new Array;
                            if (u.data("frames") != t) {
                                var ae = u.data("frames");
                                ae = ae.replace(/\s+/g, ""), ae = ae.replace("{", "");
                                var re = ae.split("}");
                                e.each(re, function(e, t) {
                                    if (t.length > 0) {
                                        var i = M(t);
                                        F(u, n, i, "frame" + (e + 10), h)
                                    }
                                })
                            }
                            K = u.data("timeline"), u.data("end") == t || -1 != c && 2 != c ? -1 == c || 2 == c ? H(u, n, 999999, Z, "frame99", h) : H(u, n, 200, Z, "frame99", h) : H(u, n, u.data("end") / 1e3, Z, "frame99", h), K = u.data("timeline"), u.data("timeline", K), j(u, h), K.resume()
                        }
                    }
                    if (d && (B(u), j(u, h), u.data("timeline") != t)) {
                        var oe = u.data("timeline").getTweensOf();
                        e.each(oe, function(e, i) {
                            if (i.vars.data != t) {
                                var n = i.vars.data.oldx * h,
                                    a = i.vars.data.oldy * h;
                                if (1 != i.progress() && 0 != i.progress()) try {
                                    i.vars.x = n, i.vary.y = a
                                } catch (r) {} else 1 == i.progress() && punchgs.TweenLite.set(i.target, {
                                    x: n,
                                    y: a
                                })
                            }
                        })
                    }
                });
                var u = e("body").find("#" + n.container.attr("id")).find(".tp-bannertimer");
                u.data("opt", n), r != t && setTimeout(function() {
                    r.resume()
                }, 30)
            },
            L = function() {
                var e, t = navigator.appName,
                    i = navigator.userAgent,
                    n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return n && null != (e = i.match(/version\/([\.\d]+)/i)) && (n[2] = e[1]), n = n ? [n[1], n[2]] : [t, navigator.appVersion, "-?"], n[0]
            },
            R = function(e, i) {
                e.data("fsize") == t && e.data("fsize", parseInt(e.css("font-size"), 0) || 0), e.data("pt") == t && e.data("pt", parseInt(e.css("paddingTop"), 0) || 0), e.data("pb") == t && e.data("pb", parseInt(e.css("paddingBottom"), 0) || 0), e.data("pl") == t && e.data("pl", parseInt(e.css("paddingLeft"), 0) || 0), e.data("pr") == t && e.data("pr", parseInt(e.css("paddingRight"), 0) || 0), e.data("mt") == t && e.data("mt", parseInt(e.css("marginTop"), 0) || 0), e.data("mb") == t && e.data("mb", parseInt(e.css("marginBottom"), 0) || 0), e.data("ml") == t && e.data("ml", parseInt(e.css("marginLeft"), 0) || 0), e.data("mr") == t && e.data("mr", parseInt(e.css("marginRight"), 0) || 0), e.data("bt") == t && e.data("bt", parseInt(e.css("borderTopWidth"), 0) || 0), e.data("bb") == t && e.data("bb", parseInt(e.css("borderBottomWidth"), 0) || 0), e.data("bl") == t && e.data("bl", parseInt(e.css("borderLeftWidth"), 0) || 0), e.data("br") == t && e.data("br", parseInt(e.css("borderRightWidth"), 0) || 0), e.data("ls") == t && e.data("ls", parseInt(e.css("letterSpacing"), 0) || 0), e.data("lh") == t && e.data("lh", parseInt(e.css("lineHeight"), 0) || "auto"), e.data("minwidth") == t && e.data("minwidth", parseInt(e.css("minWidth"), 0) || 0), e.data("minheight") == t && e.data("minheight", parseInt(e.css("minHeight"), 0) || 0), e.data("maxwidth") == t && e.data("maxwidth", parseInt(e.css("maxWidth"), 0) || "none"), e.data("maxheight") == t && e.data("maxheight", parseInt(e.css("maxHeight"), 0) || "none"), e.data("wii") == t && e.data("wii", parseInt(e.css("width"), 0) || 0), e.data("hii") == t && e.data("hii", parseInt(e.css("height"), 0) || 0), e.data("wan") == t && e.data("wan", e.css("-webkit-transition")), e.data("moan") == t && e.data("moan", e.css("-moz-animation-transition")), e.data("man") == t && e.data("man", e.css("-ms-animation-transition")), e.data("ani") == t && e.data("ani", e.css("transition")), e.hasClass("tp-splitted") || (e.css("-webkit-transition", "none"), e.css("-moz-transition", "none"), e.css("-ms-transition", "none"), e.css("transition", "none"), punchgs.TweenLite.set(e, {
                    fontSize: Math.round(e.data("fsize") * i.bw) + "px",
                    letterSpacing: Math.floor(e.data("ls") * i.bw) + "px",
                    paddingTop: Math.round(e.data("pt") * i.bh) + "px",
                    paddingBottom: Math.round(e.data("pb") * i.bh) + "px",
                    paddingLeft: Math.round(e.data("pl") * i.bw) + "px",
                    paddingRight: Math.round(e.data("pr") * i.bw) + "px",
                    marginTop: e.data("mt") * i.bh + "px",
                    marginBottom: e.data("mb") * i.bh + "px",
                    marginLeft: e.data("ml") * i.bw + "px",
                    marginRight: e.data("mr") * i.bw + "px",
                    borderTopWidth: Math.round(e.data("bt") * i.bh) + "px",
                    borderBottomWidth: Math.round(e.data("bb") * i.bh) + "px",
                    borderLeftWidth: Math.round(e.data("bl") * i.bw) + "px",
                    borderRightWidth: Math.round(e.data("br") * i.bw) + "px",
                    lineHeight: Math.round(e.data("lh") * i.bh) + "px",
                    minWidth: e.data("minwidth") * i.bw + "px",
                    minHeight: e.data("minheight") * i.bh + "px",
                    overwrite: "auto"
                }), setTimeout(function() {
                    e.css("-webkit-transition", e.data("wan")), e.css("-moz-transition", e.data("moan")), e.css("-ms-transition", e.data("man")), e.css("transition", e.data("ani"))
                }, 30), "none" != e.data("maxheight") && e.css({
                    maxHeight: e.data("maxheight") * i.bh + "px"
                }), "none" != e.data("maxwidth") && e.css({
                    maxWidth: e.data("maxwidth") * i.bw + "px"
                }))
            },
            j = function(i, n) {
                i.find(".rs-pendulum").each(function() {
                    var i = e(this);
                    if (i.data("timeline") == t) {
                        i.data("timeline", new punchgs.TimelineLite);
                        var a = i.data("startdeg") == t ? -20 : i.data("startdeg"),
                            r = i.data("enddeg") == t ? 20 : i.data("enddeg");
                        speed = i.data("speed") == t ? 2 : i.data("speed"), origin = i.data("origin") == t ? "50% 50%" : i.data("origin"), easing = i.data("ease") == t ? punchgs.Power2.easeInOut : i.data("ease"), a *= n, r *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            rotation: a,
                            transformOrigin: origin
                        }, {
                            rotation: r,
                            ease: easing
                        })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            rotation: r,
                            transformOrigin: origin
                        }, {
                            rotation: a,
                            ease: easing,
                            onComplete: function() {
                                i.data("timeline").restart()
                            }
                        }))
                    }
                }), i.find(".rs-slideloop").each(function() {
                    var i = e(this);
                    if (i.data("timeline") == t) {
                        i.data("timeline", new punchgs.TimelineLite);
                        var a = i.data("xs") == t ? 0 : i.data("xs"),
                            r = i.data("ys") == t ? 0 : i.data("ys");
                        xe = i.data("xe") == t ? 0 : i.data("xe"), ye = i.data("ye") == t ? 0 : i.data("ye"), speed = i.data("speed") == t ? 2 : i.data("speed"), easing = i.data("ease") == t ? punchgs.Power2.easeInOut : i.data("ease"), a *= n, r *= n, xe *= n, ye *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            x: a,
                            y: r
                        }, {
                            x: xe,
                            y: ye,
                            ease: easing
                        })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            x: xe,
                            y: ye
                        }, {
                            x: a,
                            y: r,
                            onComplete: function() {
                                i.data("timeline").restart()
                            }
                        }))
                    }
                }), i.find(".rs-pulse").each(function() {
                    var i = e(this);
                    if (i.data("timeline") == t) {
                        i.data("timeline", new punchgs.TimelineLite);
                        var n = i.data("zoomstart") == t ? 0 : i.data("zoomstart"),
                            a = i.data("zoomend") == t ? 0 : i.data("zoomend");
                        speed = i.data("speed") == t ? 2 : i.data("speed"), easing = i.data("ease") == t ? punchgs.Power2.easeInOut : i.data("ease"), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            scale: n
                        }, {
                            scale: a,
                            ease: easing
                        })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                            force3D: "auto",
                            scale: a
                        }, {
                            scale: n,
                            onComplete: function() {
                                i.data("timeline").restart()
                            }
                        }))
                    }
                }), i.find(".rs-wave").each(function() {
                    var i = e(this);
                    if (i.data("timeline") == t) {
                        i.data("timeline", new punchgs.TimelineLite);
                        var a = i.data("angle") == t ? 10 : i.data("angle"),
                            r = i.data("radius") == t ? 10 : i.data("radius"),
                            o = i.data("speed") == t ? -20 : i.data("speed");
                        i.data("origin") == t ? -20 : i.data("origin");
                        a *= n, r *= n;
                        var s = {
                            a: 0,
                            ang: a,
                            element: i,
                            unit: r
                        };
                        i.data("timeline").append(new punchgs.TweenLite.fromTo(s, o, {
                            a: 360
                        }, {
                            a: 0,
                            force3D: "auto",
                            ease: punchgs.Linear.easeNone,
                            onUpdate: function() {
                                var e = s.a * (Math.PI / 180);
                                punchgs.TweenLite.to(s.element, .1, {
                                    force3D: "auto",
                                    x: Math.cos(e) * s.unit,
                                    y: s.unit * (1 - Math.sin(e))
                                })
                            },
                            onComplete: function() {
                                i.data("timeline").restart()
                            }
                        }))
                    }
                })
            },
            B = function(i) {
                i.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                    var i = e(this);
                    i.data("timeline") != t && (i.data("timeline").pause(), i.data("timeline", null))
                })
            },
            z = function(i, n) {
                var a = 0,
                    r = i.find(".tp-caption"),
                    o = n.container.find(".tp-static-layers").find(".tp-caption");
                return e.each(o, function(e, t) {
                    r.push(t)
                }), r.each(function(i) {
                    var r = -1,
                        o = e(this);
                    if (o.hasClass("tp-static-layer") && ((-1 == o.data("startslide") || "-1" == o.data("startslide")) && o.data("startslide", 0), (-1 == o.data("endslide") || "-1" == o.data("endslide")) && o.data("endslide", n.slideamount), o.hasClass("tp-is-shown") ? o.data("startslide") > n.next || o.data("endslide") < n.next ? (r = 2, o.removeClass("tp-is-shown")) : r = 0 : r = 2), 0 != r) {
                        if (B(o), o.find("iframe").length > 0) {
                            try {
                                var s = o.find("iframe"),
                                    l = s.attr("id"),
                                    d = $f(l);
                                d.api("pause"), clearTimeout(o.data("timerplay"))
                            } catch (c) {}
                            try {
                                var u = o.data("player");
                                u.stopVideo(), clearTimeout(o.data("timerplay"))
                            } catch (c) {}
                        }
                        if (o.find("video").length > 0) try {
                            o.find("video").each(function(t) {
                                var i = e(this).parent();
                                i.attr("id");
                                clearTimeout(i.data("timerplay"));
                                var n = this;
                                n.pause()
                            })
                        } catch (c) {}
                        try {
                            var h = o.data("timeline"),
                                p = h.getLabelTime("frame99"),
                                f = h.time();
                            if (p > f) {
                                var m = h.getTweensOf(o);
                                if (e.each(m, function(e, t) {
                                        0 != e && t.pause()
                                    }), 0 != o.css("opacity")) {
                                    var g = o.data("endspeed") == t ? o.data("speed") : o.data("endspeed");
                                    g > a && (a = g), h.play("frame99")
                                } else h.progress(1, !1)
                            }
                        } catch (c) {}
                    }
                }), a
            },
            F = function(e, i, n, a, r) {
                var o = e.data("timeline"),
                    s = new punchgs.TimelineLite,
                    l = e;
                "chars" == n.typ ? l = e.data("mySplitText").chars : "words" == n.typ ? l = e.data("mySplitText").words : "lines" == n.typ && (l = e.data("mySplitText").lines), n.animation.ease = n.ease, n.animation.rotationZ != t && (n.animation.rotation = n.animation.rotationZ), n.animation.data = new Object, n.animation.data.oldx = n.animation.x, n.animation.data.oldy = n.animation.y, n.animation.x = n.animation.x * r, n.animation.y = n.animation.y * r, o.add(s.staggerTo(l, n.speed, n.animation, n.elementdelay), n.start), o.addLabel(a, n.start), e.data("timeline", o)
            },
            H = function(e, i, n, a, r, o) {
                var s = e.data("timeline"),
                    l = new punchgs.TimelineLite,
                    d = E(),
                    c = e.data("endspeed") == t ? e.data("speed") : e.data("endspeed");
                if (d.ease = e.data("endeasing") == t ? punchgs.Power1.easeInOut : e.data("endeasing"), c /= 1e3, e.hasClass("ltr") || e.hasClass("ltl") || e.hasClass("str") || e.hasClass("stl") || e.hasClass("ltt") || e.hasClass("ltb") || e.hasClass("stt") || e.hasClass("stb") || e.hasClass("skewtoright") || e.hasClass("skewtorightshort") || e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort") || e.hasClass("fadeout") || e.hasClass("randomrotateout")) {
                    e.hasClass("skewtoright") || e.hasClass("skewtorightshort") ? d.skewX = 35 : (e.hasClass("skewtoleft") || e.hasClass("skewtoleftshort")) && (d.skewX = -35), e.hasClass("ltr") || e.hasClass("skewtoright") ? d.x = i.width + 60 : e.hasClass("ltl") || e.hasClass("skewtoleft") ? d.x = 0 - (i.width + 60) : e.hasClass("ltt") ? d.y = 0 - (i.height + 60) : e.hasClass("ltb") ? d.y = i.height + 60 : e.hasClass("str") || e.hasClass("skewtorightshort") ? (d.x = 50, d.opacity = 0) : e.hasClass("stl") || e.hasClass("skewtoleftshort") ? (d.x = -50, d.opacity = 0) : e.hasClass("stt") ? (d.y = -50, d.opacity = 0) : e.hasClass("stb") ? (d.y = 50, d.opacity = 0) : e.hasClass("randomrotateout") ? (d.x = Math.random() * i.width, d.y = Math.random() * i.height, d.scale = 2 * Math.random() + .3, d.rotation = 360 * Math.random() - 180, d.opacity = 0) : e.hasClass("fadeout") && (d.opacity = 0), e.hasClass("skewtorightshort") ? d.x = 270 : e.hasClass("skewtoleftshort") && (d.x = -270), d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * o, d.y = d.y * o, d.overwrite = "auto";
                    var u = e,
                        u = e;
                    "chars" == e.data("splitout") ? u = e.data("mySplitText").chars : "words" == e.data("splitout") ? u = e.data("mySplitText").words : "lines" == e.data("splitout") && (u = e.data("mySplitText").lines);
                    var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
                    s.add(l.staggerTo(u, c, d, h), n)
                } else if (e.hasClass("customout")) {
                    d = P(d, e.data("customout"));
                    var u = e;
                    "chars" == e.data("splitout") ? u = e.data("mySplitText").chars : "words" == e.data("splitout") ? u = e.data("mySplitText").words : "lines" == e.data("splitout") && (u = e.data("mySplitText").lines);
                    var h = e.data("endelementdelay") == t ? 0 : e.data("endelementdelay");
                    d.onStart = function() {
                        punchgs.TweenLite.set(e, {
                            transformPerspective: d.transformPerspective,
                            transformOrigin: d.transformOrigin,
                            overwrite: "auto"
                        })
                    }, d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * o, d.y = d.y * o, s.add(l.staggerTo(u, c, d, h), n)
                } else a.delay = 0, s.add(punchgs.TweenLite.to(e, c, a), n);
                s.addLabel(r, n), e.data("timeline", s)
            },
            W = function(t, i) {
                t.children().each(function() {
                    try {
                        e(this).die("click")
                    } catch (t) {}
                    try {
                        e(this).die("mouseenter")
                    } catch (t) {}
                    try {
                        e(this).die("mouseleave")
                    } catch (t) {}
                    try {
                        e(this).unbind("hover")
                    } catch (t) {}
                });
                try {
                    t.die("click", "mouseenter", "mouseleave")
                } catch (n) {}
                clearInterval(i.cdint), t = null
            },
            V = function(i, n) {
                if (n.cd = 0, n.loop = 0, n.stopAfterLoops != t && n.stopAfterLoops > -1 ? n.looptogo = n.stopAfterLoops : n.looptogo = 9999999, n.stopAtSlide != t && n.stopAtSlide > -1 ? n.lastslidetoshow = n.stopAtSlide : n.lastslidetoshow = 999, n.stopLoop = "off", 0 == n.looptogo && (n.stopLoop = "on"), n.slideamount > 1 && (0 != n.stopAfterLoops || 1 != n.stopAtSlide)) {
                    var a = i.find(".tp-bannertimer");
                    i.on("stoptimer", function() {
                        a.data("tween").pause(), "on" == n.hideTimerBar && a.css({
                            visibility: "hidden"
                        })
                    }), i.on("starttimer", function() {
                        1 != n.conthover && 1 != n.videoplaying && n.width > n.hideSliderAtLimit && 1 != n.bannertimeronpause && 1 != n.overnav && ("on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || (a.css({
                            visibility: "visible"
                        }), a.data("tween").play())), "on" == n.hideTimerBar && a.css({
                            visibility: "hidden"
                        })
                    }), i.on("restarttimer", function() {
                        "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || (a.css({
                            visibility: "visible"
                        }), a.data("tween", punchgs.TweenLite.fromTo(a, n.delay / 1e3, {
                            width: "0%"
                        }, {
                            force3D: "auto",
                            width: "100%",
                            ease: punchgs.Linear.easeNone,
                            onComplete: r,
                            delay: 1
                        }))), "on" == n.hideTimerBar && a.css({
                            visibility: "hidden"
                        })
                    }), i.on("nulltimer", function() {
                        a.data("tween").pause(0), "on" == n.hideTimerBar && a.css({
                            visibility: "hidden"
                        })
                    });
                    var r = function() {
                        0 == e("body").find(i).length && (W(i, n), clearInterval(n.cdint)), 1 == i.data("conthover-changed") && (n.conthover = i.data("conthover"), i.data("conthover-changed", 0)), n.act = n.next, n.next = n.next + 1, n.next > i.find(">ul >li").length - 1 && (n.next = 0, n.looptogo = n.looptogo - 1, n.looptogo <= 0 && (n.stopLoop = "on")), "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 ? (i.find(".tp-bannertimer").css({
                            visibility: "hidden"
                        }), i.trigger("revolution.slide.onstop")) : a.data("tween").restart(), T(i, n)
                    };
                    a.data("tween", punchgs.TweenLite.fromTo(a, n.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: r,
                        delay: 1
                    })), a.data("opt", n), i.hover(function() {
                        if ("on" == n.onHoverStop && !Y()) {
                            i.trigger("stoptimer"), i.trigger("revolution.slide.onpause");
                            var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                            a.find(".defaultimg").each(function() {
                                var i = e(this);
                                i.data("kenburn") != t && i.data("kenburn").pause()
                            })
                        }
                    }, function() {
                        if (1 != i.data("conthover")) {
                            i.trigger("revolution.slide.onresume"), i.trigger("starttimer");
                            var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                            a.find(".defaultimg").each(function() {
                                var i = e(this);
                                i.data("kenburn") != t && i.data("kenburn").play()
                            })
                        }
                    })
                }
            },
            Y = function() {
                var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                    t = !1;
                for (i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
                return t
            },
            q = function(e, t, i) {
                var n = t.data("owidth"),
                    a = t.data("oheight");
                if (n / a > i.width / i.height) {
                    var r = i.container.width() / n,
                        o = a * r,
                        s = o / i.container.height() * e;
                    return e *= 100 / s, s = 100, e = e, e + "% " + s + "% 1"
                }
                var r = i.container.width() / n,
                    o = a * r,
                    s = o / i.container.height() * e;
                return e + "% " + s + "%"
            },
            U = function(i, n, a, r) {
                try {
                    i.find(">ul:first-child >li:eq(" + n.act + ")")
                } catch (s) {
                    i.find(">ul:first-child >li:eq(1)")
                }
                n.lastslide = n.act;
                var l = i.find(">ul:first-child >li:eq(" + n.next + ")"),
                    d = l.find(".slotholder"),
                    c = d.data("bgposition"),
                    u = d.data("bgpositionend"),
                    h = d.data("zoomstart") / 100,
                    p = d.data("zoomend") / 100,
                    f = d.data("rotationstart"),
                    m = d.data("rotationend"),
                    g = d.data("bgfit"),
                    v = d.data("bgfitend"),
                    y = d.data("easeme"),
                    b = d.data("duration") / 1e3,
                    w = 100;
                g == t && (g = 100), v == t && (v = 100);
                var x = g,
                    _ = v;
                g = q(g, d, n), v = q(v, d, n), w = q(100, d, n), h == t && (h = 1), p == t && (p = 1), f == t && (f = 0), m == t && (m = 0), 1 > h && (h = 1), 1 > p && (p = 1);
                var C = new Object;
                C.w = parseInt(w.split(" ")[0], 0), C.h = parseInt(w.split(" ")[1], 0);
                var T = !1;
                "1" == w.split(" ")[2] && (T = !0), d.find(".defaultimg").each(function() {
                    var t = e(this);
                    0 == d.find(".kenburnimg").length ? d.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + t.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + C.w + "%;height:" + C.h + '%;"></div>') : d.find(".kenburnimg img").css({
                        width: C.w + "%",
                        height: C.h + "%"
                    });
                    var i = d.find(".kenburnimg img"),
                        a = X(n, c, g, i, T),
                        s = X(n, u, v, i, T);
                    if (T && (a.w = x / 100, s.w = _ / 100), r) {
                        punchgs.TweenLite.set(i, {
                            autoAlpha: 0,
                            transformPerspective: 1200,
                            transformOrigin: "0% 0%",
                            top: 0,
                            left: 0,
                            scale: a.w,
                            x: a.x,
                            y: a.y
                        });
                        var l = a.w,
                            h = l * i.width() - n.width,
                            p = l * i.height() - n.height,
                            f = Math.abs(a.x / h * 100),
                            w = Math.abs(a.y / p * 100);
                        0 == p && (w = 0), 0 == h && (f = 0), t.data("bgposition", f + "% " + w + "%"), o(8) || t.data("currotate", Q(i)), o(8) || t.data("curscale", C.w * l + "%  " + (C.h * l + "%")), d.find(".kenburnimg").remove()
                    } else t.data("kenburn", punchgs.TweenLite.fromTo(i, b, {
                        autoAlpha: 1,
                        force3D: punchgs.force3d,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: a.w,
                        x: a.x,
                        y: a.y
                    }, {
                        autoAlpha: 1,
                        rotationZ: m,
                        ease: y,
                        x: s.x,
                        y: s.y,
                        scale: s.w,
                        onUpdate: function() {
                            var e = i[0]._gsTransform.scaleX,
                                a = e * i.width() - n.width,
                                r = e * i.height() - n.height,
                                s = Math.abs(i[0]._gsTransform.x / a * 100),
                                l = Math.abs(i[0]._gsTransform.y / r * 100);
                            0 == r && (l = 0), 0 == a && (s = 0), t.data("bgposition", s + "% " + l + "%"), o(8) || t.data("currotate", Q(i)), o(8) || t.data("curscale", C.w * e + "%  " + (C.h * e + "%"))
                        }
                    }))
                })
            },
            X = function(e, t, i, n, a) {
                var r = new Object;
                switch (a ? r.w = parseInt(i.split(" ")[1], 0) / 100 : r.w = parseInt(i.split(" ")[0], 0) / 100, t) {
                    case "left top":
                    case "top left":
                        r.x = 0, r.y = 0;
                        break;
                    case "center top":
                    case "top center":
                        r.x = ((0 - n.width()) * r.w + parseInt(e.width, 0)) / 2, r.y = 0;
                        break;
                    case "top right":
                    case "right top":
                        r.x = (0 - n.width()) * r.w + parseInt(e.width, 0), r.y = 0;
                        break;
                    case "center left":
                    case "left center":
                        r.x = 0, r.y = ((0 - n.height()) * r.w + parseInt(e.height, 0)) / 2;
                        break;
                    case "center center":
                        r.x = ((0 - n.width()) * r.w + parseInt(e.width, 0)) / 2, r.y = ((0 - n.height()) * r.w + parseInt(e.height, 0)) / 2;
                        break;
                    case "center right":
                    case "right center":
                        r.x = (0 - n.width()) * r.w + parseInt(e.width, 0), r.y = ((0 - n.height()) * r.w + parseInt(e.height, 0)) / 2;
                        break;
                    case "bottom left":
                    case "left bottom":
                        r.x = 0, r.y = (0 - n.height()) * r.w + parseInt(e.height, 0);
                        break;
                    case "bottom center":
                    case "center bottom":
                        r.x = ((0 - n.width()) * r.w + parseInt(e.width, 0)) / 2, r.y = (0 - n.height()) * r.w + parseInt(e.height, 0);
                        break;
                    case "bottom right":
                    case "right bottom":
                        r.x = (0 - n.width()) * r.w + parseInt(e.width, 0), r.y = (0 - n.height()) * r.w + parseInt(e.height, 0)
                }
                return r
            },
            Q = function(e) {
                var t = e.css("-webkit-transform") || e.css("-moz-transform") || e.css("-ms-transform") || e.css("-o-transform") || e.css("transform");
                if ("none" !== t) var i = t.split("(")[1].split(")")[0].split(","),
                    n = i[0],
                    a = i[1],
                    r = Math.round(Math.atan2(a, n) * (180 / Math.PI));
                else var r = 0;
                return 0 > r ? r += 360 : r
            },
            K = function(i, n) {
                try {
                    var a = i.find(">ul:first-child >li:eq(" + n.act + ")")
                } catch (r) {
                    var a = i.find(">ul:first-child >li:eq(1)")
                }
                n.lastslide = n.act;
                var o = i.find(">ul:first-child >li:eq(" + n.next + ")");
                a.find(".slotholder"), o.find(".slotholder");
                i.find(".defaultimg").each(function() {
                    var i = e(this);
                    punchgs.TweenLite.killTweensOf(i, !1), punchgs.TweenLite.set(i, {
                        scale: 1,
                        rotationZ: 0
                    }), punchgs.TweenLite.killTweensOf(i.data("kenburn img"), !1), i.data("kenburn") != t && i.data("kenburn").pause(), i.data("currotate") != t && i.data("bgposition") != t && i.data("curscale") != t && punchgs.TweenLite.set(i, {
                        rotation: i.data("currotate"),
                        backgroundPosition: i.data("bgposition"),
                        backgroundSize: i.data("curscale")
                    }), i != t && i.data("kenburn img") != t && i.data("kenburn img").length > 0 && punchgs.TweenLite.set(i.data("kenburn img"), {
                        autoAlpha: 0
                    })
                })
            },
            G = function(t, i) {
                return Y() && "on" == i.parallaxDisableOnMobile ? !1 : (t.find(">ul:first-child >li").each(function() {
                    for (var t = e(this), n = 1; 10 >= n; n++) t.find(".rs-parallaxlevel-" + n).each(function() {
                        var t = e(this);
                        t.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + t.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + i.parallaxLevels[n - 1] + '"></div>')
                    })
                }), ("mouse" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && (t.mouseenter(function(e) {
                    var i = t.find(".current-sr-slide-visible"),
                        n = t.offset().top,
                        a = t.offset().left,
                        r = e.pageX - a,
                        o = e.pageY - n;
                    i.data("enterx", r), i.data("entery", o)
                }), t.on("mousemove.hoverdir, mouseleave.hoverdir", function(i) {
                    var n = t.find(".current-sr-slide-visible");
                    switch (i.type) {
                        case "mousemove":
                            var a = t.offset().top,
                                r = t.offset().left,
                                o = n.data("enterx"),
                                s = n.data("entery"),
                                l = o - (i.pageX - r),
                                d = s - (i.pageY - a);
                            n.find(".tp-parallax-container").each(function() {
                                var t = e(this),
                                    i = parseInt(t.data("parallaxlevel"), 0) / 100,
                                    n = l * i,
                                    a = d * i;
                                punchgs.TweenLite.to(t, .4, {
                                    force3D: "auto",
                                    x: n,
                                    y: a,
                                    ease: punchgs.Power3.easeOut,
                                    overwrite: "all"
                                })
                            });
                            break;
                        case "mouseleave":
                            n.find(".tp-parallax-container").each(function() {
                                var t = e(this);
                                punchgs.TweenLite.to(t, 1.5, {
                                    force3D: "auto",
                                    x: 0,
                                    y: 0,
                                    ease: punchgs.Power3.easeOut
                                })
                            })
                    }
                }), Y() && (window.ondeviceorientation = function(i) {
                    var n = Math.round(i.beta || 0),
                        a = Math.round(i.gamma || 0),
                        r = t.find(".current-sr-slide-visible");
                    if (e(window).width() > e(window).height()) {
                        var o = a;
                        a = n, n = o
                    }
                    var s = 360 / t.width() * a,
                        l = 180 / t.height() * n;
                    r.find(".tp-parallax-container").each(function() {
                        var t = e(this),
                            i = parseInt(t.data("parallaxlevel"), 0) / 100,
                            n = s * i,
                            a = l * i;
                        punchgs.TweenLite.to(t, .2, {
                            force3D: "auto",
                            x: n,
                            y: a,
                            ease: punchgs.Power3.easeOut
                        })
                    })
                })), void(("scroll" == i.parallax || "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax) && e(window).on("scroll", function(e) {
                    Z(t, i)
                })))
            },
            Z = function(t, i) {
                if (Y() && "on" == i.parallaxDisableOnMobile) return !1;
                var n = t.offset().top,
                    a = e(window).scrollTop(),
                    r = n + t.height() / 2,
                    o = n + t.height() / 2 - a,
                    s = e(window).height() / 2,
                    l = s - o;
                s > r && (l -= s - r);
                t.find(".current-sr-slide-visible");
                if (t.find(".tp-parallax-container").each(function(t) {
                        var i = e(this),
                            n = parseInt(i.data("parallaxlevel"), 0) / 100,
                            a = l * n;
                        i.data("parallaxoffset", a), punchgs.TweenLite.to(i, .2, {
                            force3D: "auto",
                            y: a,
                            ease: punchgs.Power3.easeOut
                        })
                    }), "on" != i.parallaxBgFreeze) {
                    var d = i.parallaxLevels[0] / 100,
                        c = l * d;
                    punchgs.TweenLite.to(t, .2, {
                        force3D: "auto",
                        y: c,
                        ease: punchgs.Power3.easeOut
                    })
                }
            },
            J = function(i, n) {
                var a = i.parent();
                ("thumb" == n.navigationType || "both" == n.navsecond) && a.append('<div class="tp-bullets tp-thumbs ' + n.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
                var r = a.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                    o = r.parent();
                o.width(n.thumbWidth * n.thumbAmount), o.height(n.thumbHeight), o.parent().width(n.thumbWidth * n.thumbAmount), o.parent().height(n.thumbHeight), i.find(">ul:first >li").each(function(e) {
                    var a = i.find(">ul:first >li:eq(" + e + ")"),
                        o = a.find(".defaultimg").css("backgroundColor");
                    if (a.data("thumb") != t) var s = a.data("thumb");
                    else var s = a.find("img:first").attr("src");
                    r.append('<div class="bullet thumb" style="background-color:' + o + ";position:relative;width:" + n.thumbWidth + "px;height:" + n.thumbHeight + "px;background-image:url(" + s + ') !important;background-size:cover;background-position:center center;"></div>');
                    r.find(".bullet:first")
                });
                var l = 10;
                r.find(".bullet").each(function(t) {
                    var a = e(this);
                    t == n.slideamount - 1 && a.addClass("last"), 0 == t && a.addClass("first"), a.width(n.thumbWidth), a.height(n.thumbHeight), l < a.outerWidth(!0) && (l = a.outerWidth(!0)), a.click(function() {
                        0 == n.transition && a.index() != n.act && (n.next = a.index(), s(n, i))
                    })
                });
                var d = l * i.find(">ul:first >li").length,
                    c = r.parent().width();
                n.thumbWidth = l, d > c && (e(document).mousemove(function(t) {
                    e("body").data("mousex", t.pageX)
                }), r.parent().mouseenter(function() {
                    var t = e(this);
                    t.addClass("over");
                    var n = t.offset(),
                        a = e("body").data("mousex") - n.left,
                        r = t.width(),
                        o = t.find(".bullet:first").outerWidth(!0),
                        s = o * i.find(">ul:first >li").length,
                        l = s - r + 15,
                        d = l / r;
                    a -= 30;
                    var c = 0 - a * d;
                    c > 0 && (c = 0), 0 - s + r > c && (c = 0 - s + r), te(t, c, 200)
                }), r.parent().mousemove(function() {
                    var t = e(this),
                        n = t.offset(),
                        a = e("body").data("mousex") - n.left,
                        r = t.width(),
                        o = t.find(".bullet:first").outerWidth(!0),
                        s = o * i.find(">ul:first >li").length - 1,
                        l = s - r + 15,
                        d = l / r;
                    a -= 3, 6 > a && (a = 0), a + 3 > r - 6 && (a = r);
                    var c = 0 - a * d;
                    c > 0 && (c = 0), 0 - s + r > c && (c = 0 - s + r), te(t, c, 0)
                }), r.parent().mouseleave(function() {
                    var t = e(this);
                    t.removeClass("over"), ee(i)
                }))
            },
            ee = function(e) {
                var t = e.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                    i = t.parent(),
                    n = (i.offset(), i.find(".bullet:first").outerWidth(!0)),
                    a = i.find(".bullet.selected").index() * n,
                    r = i.width(),
                    n = i.find(".bullet:first").outerWidth(!0),
                    o = n * e.find(">ul:first >li").length,
                    s = 0 - a;
                s > 0 && (s = 0), 0 - o + r > s && (s = 0 - o + r), i.hasClass("over") || te(i, s, 200)
            },
            te = function(e, t, i) {
                punchgs.TweenLite.to(e.find(".tp-thumbcontainer"), .2, {
                    force3D: "auto",
                    left: t,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "auto"
                })
            }
    }(jQuery), $(document).ready(function() {
        var e = $("#password1"),
            t = $("#password2"),
            i = $("#pass-info");
        passwordStrengthCheck(e, t, i)
    });
var prevID = "slide-title1";
$("li[id^='slide-title']").click(function() {
        var e = $(this).attr("id");
        "slide-title1" == e ? ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab1']").css("display", "block"), prevID = "", prevID = e) : "slide-title2" == e ? ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab2']").css("display", "block"), prevID = "", prevID = e) : "slide-title3" == e ? ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab3']").css("display", "block"), prevID = "", prevID = e) : "slide-title4" == e ? ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab4']").css("display", "block"), prevID = "", prevID = e) : "slide-title5" == e ? ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab5']").css("display", "block"), prevID = "", prevID = e) : "slide-title6" == e && ($("li[id^='slide-title']").removeClass("active-slide"), $("#" + e).addClass("active-slide"), $("div[id^='slider-tab']").css("display", "none"), $("div[id$='slider-tab6']").css("display", "block"), prevID = "", prevID = e)
    }), $("#bar").scrollFix(), $("#example").countdown({
        date: "10/01/2015 23:59:59",
        offset: -8,
        day: "Day",
        days: "Days"
    }), $("#myCarousel").carousel({
        interval: 3e3
    }), $(".carousel-linked-nav > li > a").click(function() {
        var e = Number($(this).attr("href").substring(1));
        return $("#myCarousel").carousel(e - 1), $(".carousel-linked-nav .active").removeClass("active"), $(this).parent().addClass("active"), !1
    }), $("#myCarousel").bind("slid", function() {
        $(".carousel-linked-nav .active").removeClass("active");
        var e = $("#myCarousel .item.active").index();
        $(".carousel-linked-nav li:eq(" + e + ")").addClass("active")
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, a) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, a)
        },
        easeInQuad: function(e, t, i, n, a) {
            return n * (t /= a) * t + i
        },
        easeOutQuad: function(e, t, i, n, a) {
            return -n * (t /= a) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, n, a) {
            return (t /= a / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, n, a) {
            return n * (t /= a) * t * t + i
        },
        easeOutCubic: function(e, t, i, n, a) {
            return n * ((t = t / a - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, n, a) {
            return (t /= a / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, n, a) {
            return n * (t /= a) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, n, a) {
            return -n * ((t = t / a - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, n, a) {
            return (t /= a / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, n, a) {
            return n * (t /= a) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, n, a) {
            return n * ((t = t / a - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, n, a) {
            return (t /= a / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, n, a) {
            return -n * Math.cos(t / a * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(e, t, i, n, a) {
            return n * Math.sin(t / a * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, n, a) {
            return -n / 2 * (Math.cos(Math.PI * t / a) - 1) + i
        },
        easeInExpo: function(e, t, i, n, a) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / a - 1)) + i
        },
        easeOutExpo: function(e, t, i, n, a) {
            return t == a ? i + n : n * (-Math.pow(2, -10 * t / a) + 1) + i
        },
        easeInOutExpo: function(e, t, i, n, a) {
            return 0 == t ? i : t == a ? i + n : (t /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function(e, t, i, n, a) {
            return -n * (Math.sqrt(1 - (t /= a) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, n, a) {
            return n * Math.sqrt(1 - (t = t / a - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, n, a) {
            return (t /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= a)) return i + n;
            if (o || (o = .3 * a), s < Math.abs(n)) {
                s = n;
                var r = o / 4
            } else var r = o / (2 * Math.PI) * Math.asin(n / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * a - r) * Math.PI / o)) + i
        },
        easeOutElastic: function(e, t, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= a)) return i + n;
            if (o || (o = .3 * a), s < Math.abs(n)) {
                s = n;
                var r = o / 4
            } else var r = o / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * a - r) * Math.PI / o) + n + i
        },
        easeInOutElastic: function(e, t, i, n, a) {
            var r = 1.70158,
                o = 0,
                s = n;
            if (0 == t) return i;
            if (2 == (t /= a / 2)) return i + n;
            if (o || (o = .3 * a * 1.5), s < Math.abs(n)) {
                s = n;
                var r = o / 4
            } else var r = o / (2 * Math.PI) * Math.asin(n / s);
            return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * a - r) * Math.PI / o) + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * a - r) * Math.PI / o) * .5 + n + i
        },
        easeInBack: function(e, t, i, n, a, r) {
            return void 0 == r && (r = 1.70158), n * (t /= a) * t * ((r + 1) * t - r) + i
        },
        easeOutBack: function(e, t, i, n, a, r) {
            return void 0 == r && (r = 1.70158), n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i
        },
        easeInOutBack: function(e, t, i, n, a, r) {
            return void 0 == r && (r = 1.70158), (t /= a / 2) < 1 ? n / 2 * t * t * (((r *= 1.525) + 1) * t - r) + i : n / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + i
        },
        easeInBounce: function(e, t, i, n, a) {
            return n - jQuery.easing.easeOutBounce(e, a - t, 0, n, a) + i
        },
        easeOutBounce: function(e, t, i, n, a) {
            return (t /= a) < 1 / 2.75 ? 7.5625 * n * t * t + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i;
        },
        easeInOutBounce: function(e, t, i, n, a) {
            return a / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, a) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, n, a) + .5 * n + i
        }
    }),
    function() {
        var e, t, i, n = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            a = [].indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        t = function() {
            function e() {}
            return e.prototype.extend = function(e, t) {
                var i, n;
                for (i in t) n = t[i], null == e[i] && (e[i] = n);
                return e
            }, e.prototype.isMobile = function(e) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            }, e
        }(), i = this.WeakMap || this.MozWeakMap || (i = function() {
            function e() {
                this.keys = [], this.values = []
            }
            return e.prototype.get = function(e) {
                var t, i, n, a, r;
                for (r = this.keys, t = n = 0, a = r.length; a > n; t = ++n)
                    if (i = r[t], i === e) return this.values[t]
            }, e.prototype.set = function(e, t) {
                var i, n, a, r, o;
                for (o = this.keys, i = a = 0, r = o.length; r > a; i = ++a)
                    if (n = o[i], n === e) return void(this.values[i] = t);
                return this.keys.push(e), this.values.push(t)
            }, e
        }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
            function e() {
                console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
            }
            return e.notSupported = !0, e.prototype.observe = function() {}, e
        }()), this.WOW = function() {
            function r(e) {
                null == e && (e = {}), this.scrollCallback = n(this.scrollCallback, this), this.scrollHandler = n(this.scrollHandler, this), this.start = n(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), this.animationNameCache = new i
            }
            return r.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }, r.prototype.init = function() {
                var e;
                return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : document.addEventListener("DOMContentLoaded", this.start), this.finished = []
            }, r.prototype.start = function() {
                var t, i, n, a;
                if (this.stopped = !1, this.boxes = function() {
                        var e, i, n, a;
                        for (n = this.element.getElementsByClassName(this.config.boxClass), a = [], e = 0, i = n.length; i > e; e++) t = n[e], a.push(t);
                        return a
                    }.call(this), this.all = function() {
                        var e, i, n, a;
                        for (n = this.boxes, a = [], e = 0, i = n.length; i > e; e++) t = n[e], a.push(t);
                        return a
                    }.call(this), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else {
                        for (a = this.boxes, i = 0, n = a.length; n > i; i++) t = a[i], this.applyStyle(t, !0);
                        window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                    } return this.config.live ? new e(function(e) {
                    return function(t) {
                        var i, n, a, r, o;
                        for (o = [], a = 0, r = t.length; r > a; a++) n = t[a], o.push(function() {
                            var e, t, a, r;
                            for (a = n.addedNodes || [], r = [], e = 0, t = a.length; t > e; e++) i = a[e], r.push(this.doSync(i));
                            return r
                        }.call(e));
                        return o
                    }
                }(this)).observe(document.body, {
                    childList: !0,
                    subtree: !0
                }) : void 0
            }, r.prototype.stop = function() {
                return this.stopped = !0, window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval ? clearInterval(this.interval) : void 0
            }, r.prototype.sync = function() {
                return e.notSupported ? this.doSync(this.element) : void 0
            }, r.prototype.doSync = function(e) {
                var t, i, n, r, o;
                if (!this.stopped) {
                    if (null == e && (e = this.element), 1 !== e.nodeType) return;
                    for (e = e.parentNode || e, r = e.getElementsByClassName(this.config.boxClass), o = [], i = 0, n = r.length; n > i; i++) t = r[i], a.call(this.all, t) < 0 ? (this.applyStyle(t, !0), this.boxes.push(t), this.all.push(t), o.push(this.scrolled = !0)) : o.push(void 0);
                    return o
                }
            }, r.prototype.show = function(e) {
                return this.applyStyle(e), e.className = "" + e.className + " " + this.config.animateClass
            }, r.prototype.applyStyle = function(e, t) {
                var i, n, a;
                return n = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), a = e.getAttribute("data-wow-iteration"), this.animate(function(r) {
                    return function() {
                        return r.customStyle(e, t, n, i, a)
                    }
                }(this))
            }, r.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(e) {
                    return window.requestAnimationFrame(e)
                } : function(e) {
                    return e()
                }
            }(), r.prototype.resetStyle = function() {
                var e, t, i, n, a;
                for (n = this.boxes, a = [], t = 0, i = n.length; i > t; t++) e = n[t], a.push(e.setAttribute("style", "visibility: visible;"));
                return a
            }, r.prototype.customStyle = function(e, t, i, n, a) {
                return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(e.style, {
                    animationDuration: i
                }), n && this.vendorSet(e.style, {
                    animationDelay: n
                }), a && this.vendorSet(e.style, {
                    animationIterationCount: a
                }), this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }), e
            }, r.prototype.vendors = ["moz", "webkit"], r.prototype.vendorSet = function(e, t) {
                var i, n, a, r;
                r = [];
                for (i in t) n = t[i], e["" + i] = n, r.push(function() {
                    var t, r, o, s;
                    for (o = this.vendors, s = [], t = 0, r = o.length; r > t; t++) a = o[t], s.push(e["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                    return s
                }.call(this));
                return r
            }, r.prototype.vendorCSS = function(e, t) {
                var i, n, a, r, o, s;
                for (n = window.getComputedStyle(e), i = n.getPropertyCSSValue(t), s = this.vendors, r = 0, o = s.length; o > r; r++) a = s[r], i = i || n.getPropertyCSSValue("-" + a + "-" + t);
                return i
            }, r.prototype.animationName = function(e) {
                var t;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (i) {
                    t = window.getComputedStyle(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }, r.prototype.cacheAnimationName = function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }, r.prototype.cachedAnimationName = function(e) {
                return this.animationNameCache.get(e)
            }, r.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, r.prototype.scrollCallback = function() {
                var e;
                return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
                    var t, i, n, a;
                    for (n = this.boxes, a = [], t = 0, i = n.length; i > t; t++) e = n[t], e && (this.isVisible(e) ? this.show(e) : a.push(e));
                    return a
                }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
            }, r.prototype.offsetTop = function(e) {
                for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                return t
            }, r.prototype.isVisible = function(e) {
                var t, i, n, a, r;
                return i = e.getAttribute("data-wow-offset") || this.config.offset, r = window.pageYOffset, a = r + Math.min(this.element.clientHeight, innerHeight) - i, n = this.offsetTop(e), t = n + e.clientHeight, a >= n && t >= r
            }, r.prototype.util = function() {
                return null != this._util ? this._util : this._util = new t
            }, r.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, r
        }()
    }.call(this), wow = new WOW({
        animateClass: "animated",
        offset: 100
    }), wow.init(), ! function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
    }(function(e) {
        "use strict";

        function t(i, n) {
            var a = function() {},
                r = this,
                o = {
                    ajaxSettings: {},
                    autoSelectFirst: !1,
                    appendTo: document.body,
                    serviceUrl: null,
                    lookup: null,
                    onSelect: null,
                    width: "auto",
                    minChars: 1,
                    maxHeight: 300,
                    deferRequestBy: 0,
                    params: {},
                    formatResult: t.formatResult,
                    delimiter: null,
                    zIndex: 9999,
                    type: "GET",
                    noCache: !1,
                    onSearchStart: a,
                    onSearchComplete: a,
                    onSearchError: a,
                    preserveInput: !1,
                    containerClass: "autocomplete-suggestions",
                    tabDisabled: !1,
                    dataType: "text",
                    currentRequest: null,
                    triggerSelectOnValidInput: !0,
                    preventBadQueries: !0,
                    lookupFilter: function(e, t, i) {
                        return 0 == e.value.toLowerCase().indexOf(i)
                    },
                    paramName: "query",
                    transformResult: function(t) {
                        return "string" == typeof t ? e.parseJSON(t) : t
                    },
                    showNoSuggestionNotice: !1,
                    noSuggestionNotice: "No results",
                    orientation: "bottom",
                    forceFixPosition: !1
                };
            r.element = i, r.el = e(i), r.suggestions = [], r.badQueries = [], r.selectedIndex = -1, r.currentValue = r.element.value, r.intervalId = 0, r.cachedResponse = {}, r.onChangeInterval = null, r.onChange = null, r.isLocal = !1, r.suggestionsContainer = null, r.noSuggestionsContainer = null, r.options = e.extend({}, o, n), r.classes = {
                selected: "autocomplete-selected",
                suggestion: "autocomplete-suggestion"
            }, r.hint = null, r.hintValue = "", r.selection = null, r.initialize(), r.setOptions(n)
        }
        var i = function() {
                return {
                    escapeRegExChars: function(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    createNode: function(e) {
                        var t = document.createElement("div");
                        return t.className = e, t.style.position = "absolute", t.style.display = "none", t
                    }
                }
            }(),
            n = {
                ESC: 27,
                TAB: 9,
                RETURN: 13,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            };
        t.utils = i, e.Autocomplete = t, t.formatResult = function(e, t) {
            var n = "(" + i.escapeRegExChars(t) + ")";
            return e.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>")
        }, t.prototype = {
            killerFn: null,
            initialize: function() {
                var i, n = this,
                    a = "." + n.classes.suggestion,
                    r = n.classes.selected,
                    o = n.options;
                n.element.setAttribute("autocomplete", "off"), n.killerFn = function(t) {
                    0 === e(t.target).closest("." + n.options.containerClass).length && (n.killSuggestions(), n.disableKillerFn())
                }, n.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), n.suggestionsContainer = t.utils.createNode(o.containerClass), i = e(n.suggestionsContainer), i.appendTo(o.appendTo), "auto" !== o.width && i.width(o.width), i.on("mouseover.autocomplete", a, function() {
                    n.activate(e(this).data("index"))
                }), i.on("mouseout.autocomplete", function() {
                    n.selectedIndex = -1, i.children("." + r).removeClass(r)
                }), i.on("click.autocomplete", a, function() {
                    n.select(e(this).data("index"))
                }), n.fixPositionCapture = function() {
                    n.visible && n.fixPosition()
                }, e(window).on("resize.autocomplete", n.fixPositionCapture), n.el.on("keydown.autocomplete", function(e) {
                    n.onKeyPress(e)
                }), n.el.on("keyup.autocomplete", function(e) {
                    n.onKeyUp(e)
                }), n.el.on("blur.autocomplete", function() {
                    n.onBlur()
                }), n.el.on("focus.autocomplete", function() {
                    n.onFocus()
                }), n.el.on("change.autocomplete", function(e) {
                    n.onKeyUp(e)
                }), n.el.on("input.autocomplete", function(e) {
                    n.onKeyUp(e)
                })
            },
            onFocus: function() {
                var e = this;
                e.fixPosition(), e.options.minChars <= e.el.val().length && e.onValueChange()
            },
            onBlur: function() {
                this.enableKillerFn()
            },
            setOptions: function(t) {
                var i = this,
                    n = i.options;
                e.extend(n, t), i.isLocal = e.isArray(n.lookup), i.isLocal && (n.lookup = i.verifySuggestionsFormat(n.lookup)), n.orientation = i.validateOrientation(n.orientation, "bottom"), e(i.suggestionsContainer).css({
                    "max-height": n.maxHeight + "px",
                    width: n.width + "px",
                    "z-index": n.zIndex
                })
            },
            clearCache: function() {
                this.cachedResponse = {}, this.badQueries = []
            },
            clear: function() {
                this.clearCache(), this.currentValue = "", this.suggestions = []
            },
            disable: function() {
                var e = this;
                e.disabled = !0, clearInterval(e.onChangeInterval), e.currentRequest && e.currentRequest.abort()
            },
            enable: function() {
                this.disabled = !1
            },
            fixPosition: function() {
                var t = this,
                    i = e(t.suggestionsContainer),
                    n = i.parent().get(0);
                if (n === document.body || t.options.forceFixPosition) {
                    var a = t.options.orientation,
                        r = i.outerHeight(),
                        o = t.el.outerHeight(),
                        s = t.el.offset(),
                        l = {
                            top: s.top,
                            left: s.left
                        };
                    if ("auto" === a) {
                        var d = e(window).height(),
                            c = e(window).scrollTop(),
                            u = -c + s.top - r,
                            h = c + d - (s.top + o + r);
                        a = Math.max(u, h) === u ? "top" : "bottom"
                    }
                    if (l.top += "top" === a ? -r : o, n !== document.body) {
                        var p, f = i.css("opacity");
                        t.visible || i.css("opacity", 0).show(), p = i.offsetParent().offset(), l.top -= p.top, l.left -= p.left, t.visible || i.css("opacity", f).hide()
                    }
                    "auto" === t.options.width && (l.width = t.el.outerWidth() - 2 + "px"), i.css(l)
                }
            },
            enableKillerFn: function() {
                var t = this;
                e(document).on("click.autocomplete", t.killerFn)
            },
            disableKillerFn: function() {
                var t = this;
                e(document).off("click.autocomplete", t.killerFn)
            },
            killSuggestions: function() {
                var e = this;
                e.stopKillSuggestions(), e.intervalId = window.setInterval(function() {
                    e.hide(), e.stopKillSuggestions()
                }, 50)
            },
            stopKillSuggestions: function() {
                window.clearInterval(this.intervalId)
            },
            isCursorAtEnd: function() {
                var e, t = this,
                    i = t.el.val().length,
                    n = t.element.selectionStart;
                return "number" == typeof n ? n === i : document.selection ? (e = document.selection.createRange(), e.moveStart("character", -i), i === e.text.length) : !0
            },
            onKeyPress: function(e) {
                var t = this;
                if (!t.disabled && !t.visible && e.which === n.DOWN && t.currentValue) return void t.suggest();
                if (!t.disabled && t.visible) {
                    switch (e.which) {
                        case n.ESC:
                            t.el.val(t.currentValue), t.hide();
                            break;
                        case n.RIGHT:
                            if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
                                t.selectHint();
                                break
                            }
                            return;
                        case n.TAB:
                            if (t.hint && t.options.onHint) return void t.selectHint();
                            if (-1 === t.selectedIndex) return void t.hide();
                            if (t.select(t.selectedIndex), t.options.tabDisabled === !1) return;
                            break;
                        case n.RETURN:
                            if (-1 === t.selectedIndex) return void t.hide();
                            t.select(t.selectedIndex);
                            break;
                        case n.UP:
                            t.moveUp();
                            break;
                        case n.DOWN:
                            t.moveDown();
                            break;
                        default:
                            return
                    }
                    e.stopImmediatePropagation(), e.preventDefault()
                }
            },
            onKeyUp: function(e) {
                var t = this;
                if (!t.disabled) {
                    switch (e.which) {
                        case n.UP:
                        case n.DOWN:
                            return
                    }
                    clearInterval(t.onChangeInterval), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeInterval = setInterval(function() {
                        t.onValueChange()
                    }, t.options.deferRequestBy) : t.onValueChange())
                }
            },
            onValueChange: function() {
                var t, i = this,
                    n = i.options,
                    a = i.el.val(),
                    r = i.getQuery(a);
                return i.selection && i.currentValue !== r && (i.selection = null, (n.onInvalidateSelection || e.noop).call(i.element)), clearInterval(i.onChangeInterval), i.currentValue = a, i.selectedIndex = -1, n.triggerSelectOnValidInput && (t = i.findSuggestionIndex(r), -1 !== t) ? void i.select(t) : void(r.length < n.minChars ? i.hide() : i.getSuggestions(r))
            },
            findSuggestionIndex: function(t) {
                var i = this,
                    n = -1,
                    a = t.toLowerCase();
                return e.each(i.suggestions, function(e, t) {
                    return t.value.toLowerCase() === a ? (n = e, !1) : void 0
                }), n
            },
            getQuery: function(t) {
                var i, n = this.options.delimiter;
                return n ? (i = t.split(n), e.trim(i[i.length - 1])) : t
            },
            getSuggestionsLocal: function(t) {
                var i, n = this,
                    a = n.options,
                    r = t.toLowerCase(),
                    o = a.lookupFilter,
                    s = parseInt(a.lookupLimit, 10);
                return i = {
                    suggestions: e.grep(a.lookup, function(e) {
                        return o(e, t, r)
                    })
                }, s && i.suggestions.length > s && (i.suggestions = i.suggestions.slice(0, s)), i
            },
            getSuggestions: function(t) {
                var i, n, a, r, o = this,
                    s = o.options,
                    l = s.serviceUrl;
                if (s.params[s.paramName] = t, n = s.ignoreParams ? null : s.params, s.onSearchStart.call(o.element, s.params) !== !1) {
                    if (e.isFunction(s.lookup)) return void s.lookup(t, function(e) {
                        o.suggestions = e.suggestions, o.suggest(), s.onSearchComplete.call(o.element, t, e.suggestions)
                    });
                    o.isLocal ? i = o.getSuggestionsLocal(t) : (e.isFunction(l) && (l = l.call(o.element, t)), a = l + "?" + e.param(n || {}), i = o.cachedResponse[a]), i && e.isArray(i.suggestions) ? (o.suggestions = i.suggestions, o.suggest(), s.onSearchComplete.call(o.element, t, i.suggestions)) : o.isBadQuery(t) ? s.onSearchComplete.call(o.element, t, []) : (o.currentRequest && o.currentRequest.abort(), r = {
                        url: l,
                        data: n,
                        type: s.type,
                        dataType: s.dataType
                    }, e.extend(r, s.ajaxSettings), o.currentRequest = e.ajax(r).done(function(e) {
                        var i;
                        o.currentRequest = null, i = s.transformResult(e), o.processResponse(i, t, a), s.onSearchComplete.call(o.element, t, i.suggestions)
                    }).fail(function(e, i, n) {
                        s.onSearchError.call(o.element, t, e, i, n)
                    }))
                }
            },
            isBadQuery: function(e) {
                if (!this.options.preventBadQueries) return !1;
                for (var t = this.badQueries, i = t.length; i--;)
                    if (0 === e.indexOf(t[i])) return !0;
                return !1
            },
            hide: function() {
                var t = this;
                t.visible = !1, t.selectedIndex = -1, clearInterval(t.onChangeInterval), e(t.suggestionsContainer).hide(), t.signalHint(null)
            },
            suggest: function() {
                if (0 === this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
                var t, i, n = this,
                    a = n.options,
                    r = a.groupBy,
                    o = a.formatResult,
                    s = n.getQuery(n.currentValue),
                    l = n.classes.suggestion,
                    d = n.classes.selected,
                    c = e(n.suggestionsContainer),
                    u = e(n.noSuggestionsContainer),
                    h = a.beforeRender,
                    p = "",
                    f = function(e) {
                        var i = e.data[r];
                        return t === i ? "" : (t = i, '<div class="autocomplete-group"><strong>' + t + "</strong></div>")
                    };
                return a.triggerSelectOnValidInput && (i = n.findSuggestionIndex(s), -1 !== i) ? void n.select(i) : (e.each(n.suggestions, function(e, t) {
                    r && (p += f(t, s, e)), p += '<div class="' + l + '" data-index="' + e + '">' + o(t, s) + "</div>"
                }), this.adjustContainerWidth(), u.detach(), c.html(p), e.isFunction(h) && h.call(n.element, c), n.fixPosition(), c.show(), a.autoSelectFirst && (n.selectedIndex = 0, c.scrollTop(0), c.children().first().addClass(d)), n.visible = !0, void n.findBestHint())
            },
            noSuggestions: function() {
                var t = this,
                    i = e(t.suggestionsContainer),
                    n = e(t.noSuggestionsContainer);
                this.adjustContainerWidth(), n.detach(), i.empty(), i.append(n), t.fixPosition(), i.show(), t.visible = !0
            },
            adjustContainerWidth: function() {
                var t, i = this,
                    n = i.options,
                    a = e(i.suggestionsContainer);
                "auto" === n.width && (t = i.el.outerWidth() - 2, a.width(t > 0 ? t : 300))
            },
            findBestHint: function() {
                var t = this,
                    i = t.el.val().toLowerCase(),
                    n = null;
                i && (e.each(t.suggestions, function(e, t) {
                    var a = 0 === t.value.toLowerCase().indexOf(i);
                    return a && (n = t), !a
                }), t.signalHint(n))
            },
            signalHint: function(t) {
                var i = "",
                    n = this;
                t && (i = n.currentValue + t.value.substr(n.currentValue.length)), n.hintValue !== i && (n.hintValue = i, n.hint = t, (this.options.onHint || e.noop)(i))
            },
            verifySuggestionsFormat: function(t) {
                return t.length && "string" == typeof t[0] ? e.map(t, function(e) {
                    return {
                        value: e,
                        data: null
                    }
                }) : t
            },
            validateOrientation: function(t, i) {
                return t = e.trim(t || "").toLowerCase(), -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = i), t
            },
            processResponse: function(e, t, i) {
                var n = this,
                    a = n.options;
                e.suggestions = n.verifySuggestionsFormat(e.suggestions), a.noCache || (n.cachedResponse[i] = e, a.preventBadQueries && 0 === e.suggestions.length && n.badQueries.push(t)), t === n.getQuery(n.currentValue) && (n.suggestions = e.suggestions, n.suggest())
            },
            activate: function(t) {
                var i, n = this,
                    a = n.classes.selected,
                    r = e(n.suggestionsContainer),
                    o = r.find("." + n.classes.suggestion);
                return r.find("." + a).removeClass(a), n.selectedIndex = t, -1 !== n.selectedIndex && o.length > n.selectedIndex ? (i = o.get(n.selectedIndex), e(i).addClass(a), i) : null
            },
            selectHint: function() {
                var t = this,
                    i = e.inArray(t.hint, t.suggestions);
                t.select(i)
            },
            select: function(e) {
                var t = this;
                t.hide(), t.onSelect(e)
            },
            moveUp: function() {
                var t = this;
                return -1 !== t.selectedIndex ? 0 === t.selectedIndex ? (e(t.suggestionsContainer).children().first().removeClass(t.classes.selected), t.selectedIndex = -1, t.el.val(t.currentValue), void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1) : void 0
            },
            moveDown: function() {
                var e = this;
                e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
            },
            adjustScroll: function(t) {
                var i = this,
                    n = i.activate(t);
                if (n) {
                    var a, r, o, s = e(n).outerHeight();
                    a = n.offsetTop, r = e(i.suggestionsContainer).scrollTop(), o = r + i.options.maxHeight - s, r > a ? e(i.suggestionsContainer).scrollTop(a) : a > o && e(i.suggestionsContainer).scrollTop(a - i.options.maxHeight + s), i.options.preserveInput || i.el.val(i.getValue(i.suggestions[t].value)), i.signalHint(null)
                }
            },
            onSelect: function(t) {
                var i = this,
                    n = i.options.onSelect,
                    a = i.suggestions[t];
                i.currentValue = i.getValue(a.value), i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue), i.signalHint(null), i.suggestions = [], i.selection = a, e.isFunction(n) && n.call(i.element, a)
            },
            getValue: function(e) {
                var t, i, n = this,
                    a = n.options.delimiter;
                return a ? (t = n.currentValue, i = t.split(a), 1 === i.length ? e : t.substr(0, t.length - i[i.length - 1].length) + e) : e
            },
            dispose: function() {
                var t = this;
                t.el.off(".autocomplete").removeData("autocomplete"), t.disableKillerFn(), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove()
            }
        }, e.fn.autocomplete = e.fn.devbridgeAutocomplete = function(i, n) {
            var a = "autocomplete";
            return 0 === arguments.length ? this.first().data(a) : this.each(function() {
                var r = e(this),
                    o = r.data(a);
                "string" == typeof i ? o && "function" == typeof o[i] && o[i](n) : (o && o.dispose && o.dispose(), o = new t(this, i), r.data(a, o))
            })
        }
    });
var AutoSpecialty = ["Addiction Medicine", "Allergy/Immunology", "Ambulance Service", "Anesthesiology", "Cardiac Surgery", "Cardiology", "Certified Nurse Midwife", "Chiropractor", "Colon Rectal Surgery", "Counseling", "Critical Care", "Dentist", "Dermatology", "Diagnostic Radiology", "Emergency Medicine", "Endocrinology", "Family Practice", "Gastroenterology", "General Practice", "General Surgery", "Geriatric Medicine", "Gynecological Oncology", "Hand Surgery", "Hematology/Oncology", "Infectious Disease", "Internal Medicine", "Interventional Pain", "Maxillofacial Surgery", "Medical Oncology", "Multi-Specialty Clinic", "Nephrology", "Neurology", "Neuropsychiatry", "Neurosurgery", "Nuclear Medicine", "Nurse Practitioner", "Ob Gynecology", "Oncology", "Ophthalmology", "Optometrist", "Orthopedic Surgery", "Osteopahtic Manipulative", "Otolaryngology", "Pathology", "Pediatric Medicine", "Physical Medicine And Rehb", "Physical Therapist", "Physician Assistant", "Plastic Surgery", "Podiatry", "Prosthetic Orthotic", "Psychiatry", "Pulmonary Diseases", "Radiation Oncology", "Rheumatology", "Roentgenology, Radiology", "Service Providers", "Sleep Diagnostics", "Surgical Oncology", "Thoracic Surgery", "Urology", "Vascular Surgery"],
    AutoStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
    AutoAccountType = ["Checking", "Saving"],
    AutoCardType = ["Visa", "Master Card", "Discover", "American Express"],
    AutoMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    AutoYear = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
$(document).ready(function() {
        $("#rootwizard").bootstrapWizard({
            onTabShow: function(e, t, i) {
                var n = t.find("li").length,
                    a = i + 1,
                    r = a / n * 100;
                $("#rootwizard").find(".bar").css({
                    width: r + "%"
                })
            }
        })
    }),
    function(e) {
        var t = function(t, i) {
            var t = e(t),
                n = this,
                a = 'li:has([data-toggle="tab"])',
                r = [],
                o = e.extend({}, e.fn.bootstrapWizard.defaults, i),
                s = null,
                l = null;
            this.rebindClick = function(e, t) {
                e.unbind("click", t).bind("click", t)
            }, this.fixNavigationButtons = function() {
                return s.length || (l.find("a:first").tab("show"), s = l.find(a + ":first")), e(o.previousSelector, t).toggleClass("disabled", n.firstIndex() >= n.currentIndex()), e(o.nextSelector, t).toggleClass("disabled", n.currentIndex() >= n.navigationLength()), e(o.nextSelector, t).toggleClass("hidden", n.currentIndex() >= n.navigationLength() && e(o.finishSelector, t).length > 0), e(o.lastSelector, t).toggleClass("hidden", n.currentIndex() >= n.navigationLength() && e(o.finishSelector, t).length > 0), e(o.finishSelector, t).toggleClass("hidden", n.currentIndex() < n.navigationLength()), e(o.backSelector, t).toggleClass("disabled", 0 == r.length), e(o.backSelector, t).toggleClass("hidden", n.currentIndex() >= n.navigationLength() && e(o.finishSelector, t).length > 0), n.rebindClick(e(o.nextSelector, t), n.next), n.rebindClick(e(o.previousSelector, t), n.previous), n.rebindClick(e(o.lastSelector, t), n.last), n.rebindClick(e(o.firstSelector, t), n.first), n.rebindClick(e(o.finishSelector, t), n.finish), n.rebindClick(e(o.backSelector, t), n.back), o.onTabShow && "function" == typeof o.onTabShow && o.onTabShow(s, l, n.currentIndex()) === !1 ? !1 : void 0
            }, this.next = function() {
                if (t.hasClass("last")) return !1;
                if (o.onNext && "function" == typeof o.onNext && o.onNext(s, l, n.nextIndex()) === !1) return !1;
                var e = n.currentIndex();
                $index = n.nextIndex(), $index > n.navigationLength() || (r.push(e), l.find(a + ":eq(" + $index + ") a").tab("show"))
            }, this.previous = function() {
                if (t.hasClass("first")) return !1;
                if (o.onPrevious && "function" == typeof o.onPrevious && o.onPrevious(s, l, n.previousIndex()) === !1) return !1;
                var e = n.currentIndex();
                $index = n.previousIndex(), $index < 0 || (r.push(e), l.find(a + ":eq(" + $index + ") a").tab("show"))
            }, this.first = function() {
                return o.onFirst && "function" == typeof o.onFirst && o.onFirst(s, l, n.firstIndex()) === !1 ? !1 : t.hasClass("disabled") ? !1 : (r.push(n.currentIndex()), void l.find(a + ":eq(0) a").tab("show"))
            }, this.last = function() {
                return o.onLast && "function" == typeof o.onLast && o.onLast(s, l, n.lastIndex()) === !1 ? !1 : t.hasClass("disabled") ? !1 : (r.push(n.currentIndex()), void l.find(a + ":eq(" + n.navigationLength() + ") a").tab("show"))
            }, this.finish = function() {
                o.onFinish && "function" == typeof o.onFinish && o.onFinish(s, l, n.lastIndex())
            }, this.back = function() {
                if (0 == r.length) return null;
                var e = r.pop();
                return o.onBack && "function" == typeof o.onBack && o.onBack(s, l, e) === !1 ? (r.push(e), !1) : void t.find(a + ":eq(" + e + ") a").tab("show")
            }, this.currentIndex = function() {
                return l.find(a).index(s)
            }, this.firstIndex = function() {
                return 0
            }, this.lastIndex = function() {
                return n.navigationLength()
            }, this.getIndex = function(e) {
                return l.find(a).index(e)
            }, this.nextIndex = function() {
                return l.find(a).index(s) + 1
            }, this.previousIndex = function() {
                return l.find(a).index(s) - 1
            }, this.navigationLength = function() {
                return l.find(a).length - 1
            }, this.activeTab = function() {
                return s
            }, this.nextTab = function() {
                return l.find(a + ":eq(" + (n.currentIndex() + 1) + ")").length ? l.find(a + ":eq(" + (n.currentIndex() + 1) + ")") : null
            }, this.previousTab = function() {
                return n.currentIndex() <= 0 ? null : l.find(a + ":eq(" + parseInt(n.currentIndex() - 1) + ")")
            }, this.show = function(e) {
                var i = t.find(isNaN(e) ? a + " a[href=#" + e + "]" : a + ":eq(" + e + ") a");
                i.length > 0 && (r.push(n.currentIndex()), i.tab("show"))
            }, this.disable = function(e) {
                l.find(a + ":eq(" + e + ")").addClass("disabled")
            }, this.enable = function(e) {
                l.find(a + ":eq(" + e + ")").removeClass("disabled")
            }, this.hide = function(e) {
                l.find(a + ":eq(" + e + ")").hide()
            }, this.display = function(e) {
                l.find(a + ":eq(" + e + ")").show()
            }, this.remove = function(t) {
                var i = t[0],
                    n = "undefined" != typeof t[1] ? t[1] : !1,
                    r = l.find(a + ":eq(" + i + ")");
                if (n) {
                    var o = r.find("a").attr("href");
                    e(o).remove()
                }
                r.remove()
            };
            var d = function(t) {
                    var i = l.find(a),
                        r = i.index(e(t.currentTarget).parent(a)),
                        d = e(i[r]);
                    return o.onTabClick && "function" == typeof o.onTabClick && o.onTabClick(s, l, n.currentIndex(), r, d) === !1 ? !1 : void 0
                },
                c = function(t) {
                    $element = e(t.target).parent();
                    var i = l.find(a).index($element);
                    return $element.hasClass("disabled") ? !1 : o.onTabChange && "function" == typeof o.onTabChange && o.onTabChange(s, l, n.currentIndex(), i) === !1 ? !1 : (s = $element, void n.fixNavigationButtons())
                };
            this.resetWizard = function() {
                e('a[data-toggle="tab"]', l).off("click", d), e('a[data-toggle="tab"]', l).off("shown shown.bs.tab", c), l = t.find("ul:first", t), s = l.find(a + ".active", t), e('a[data-toggle="tab"]', l).on("click", d), e('a[data-toggle="tab"]', l).on("shown shown.bs.tab", c), n.fixNavigationButtons()
            }, l = t.find("ul:first", t), s = l.find(a + ".active", t), l.hasClass(o.tabClass) || l.addClass(o.tabClass), o.onInit && "function" == typeof o.onInit && o.onInit(s, l, 0), o.onShow && "function" == typeof o.onShow && o.onShow(s, l, n.nextIndex()), e('a[data-toggle="tab"]', l).on("click", d), e('a[data-toggle="tab"]', l).on("shown shown.bs.tab", c)
        };
        e.fn.bootstrapWizard = function(i) {
            if ("string" == typeof i) {
                var n = Array.prototype.slice.call(arguments, 1);
                return 1 === n.length && n.toString(), this.data("bootstrapWizard")[i](n)
            }
            return this.each(function() {
                var n = e(this);
                if (!n.data("bootstrapWizard")) {
                    var a = new t(n, i);
                    n.data("bootstrapWizard", a), a.fixNavigationButtons()
                }
            })
        }, e.fn.bootstrapWizard.defaults = {
            tabClass: "nav nav-pills",
            nextSelector: ".wizard li.next",
            previousSelector: ".wizard li.previous",
            firstSelector: ".wizard li.first",
            lastSelector: ".wizard li.last",
            finishSelector: ".wizard li.finish",
            backSelector: ".wizard li.back",
            onShow: null,
            onInit: null,
            onNext: null,
            onPrevious: null,
            onLast: null,
            onFirst: null,
            onFinish: null,
            onBack: null,
            onTabChange: null,
            onTabClick: null,
            onTabShow: null
        }
    }(jQuery);
var HightScheduleDemo = "",
    WidthScheduleDemo = "",
    TopScheduleDemo = "",
    leftScheduleDemo = "",
    runtimedivid = [];
$(document).ready(function() {
    1440 == screen.width && 900 == screen.height ? (HightScheduleDemo = "700", WidthScheduleDemo = "515", TopScheduleDemo = "20", leftScheduleDemo = "415") : 1280 == screen.width && 1024 == screen.height ? (HightScheduleDemo = "700", WidthScheduleDemo = "515", TopScheduleDemo = "80", leftScheduleDemo = "335") : 1280 == screen.width && 1024 == screen.height ? (HightScheduleDemo = "700", WidthScheduleDemo = "515", TopScheduleDemo = "80", leftScheduleDemo = "335") : (HightScheduleDemo = "700", WidthScheduleDemo = "515", TopScheduleDemo = "80", leftScheduleDemo = "335")
});
var a;
rotateDivs(), $("a.pm-tool-col").click(function(e) {
    var t = $("a.active-tool").attr("id");
    $("#" + t).hasClass("active-tool") && ($("a[id$=" + t + "]").removeClass("active-tool"), $("#" + t + "active").addClass("hidden"), $(this).addClass("active-tool"), $("#" + $(this).attr("id") + "active").removeClass("hidden").addClass("active"), $("#" + $(this).attr("id")).nextAll().css({
        "background-color": ""
    }), $("#" + $(this).attr("id")).prevAll().css({
        "background-color": ""
    }))
}), $("a.pm-tool-col").hover(function() {
    clearInterval(a)
}), $("a.pm-tool-col").mouseleave(function() {
    rotateDivs()
}), $("#toolDetailWrapper").hover(function() {
    clearInterval(a)
}), $("#toolDetailWrapper").mouseleave(function() {
    rotateDivs()
}), $(function() {
    $("input[id$=first_name]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=last_name]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=email_address]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=buss_contact]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=speciality]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtFirstNameScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtOrganizationScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtStateScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtPhoneNumberScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtNumberOfProvidersScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("textarea[id$=txtCommentsScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtLastNameScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtCityScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtCountryScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtSpecialtyScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtEmailScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtHowHearaboutMTBCothersScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $(function() {
    $("input[id$=txtInputScheduleDemo]").bind("cut copy paste", function(e) {
        e.preventDefault()
    })
}), $("#menu_txtInputScheduleDemo").blur(function() {
    "" == $(this).val() && $(this).val("Enter Image Text")
}), $("#menu_txtInputScheduleDemo").click(function() {
    $(this).val("")
}), $("#menu_txtPhoneNumberScheduleDemo").mask("(999) 999-9999");
var _formSource = "";
_formSource = "Contact Us", $("#menu_txtInput").focus(function() {
    $(this).val("")
}), $("#menu_txtInput").blur(function() {
    "" == $(this).val() && $(this).val("Enter Image Text")
});
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t].string,
                n = e[t].prop;
            if (this.versionSearchString = e[t].versionSearch || e[t].identity, i) {
                if (-1 != i.indexOf(e[t].subString)) return e[t].identity
            } else if (n) return e[t].identity
        }
    },
    searchVersion: function(e) {
        var t = e.indexOf(this.versionSearchString);
        return -1 != t ? parseFloat(e.substring(t + this.versionSearchString.length + 1)) : void 0
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init(), "Safari" == BrowserDetect.browser && $("#go").css("top", "12px"),
    "Chrome" == BrowserDetect.browser && $("#go").css("top", "12px");
var _height, _width;
$("#menu_txtPhoneNumber,#RACB_txtBusinessPhone,#buss_contact").mask("(999) 999-9999");
var URL = window.location.pathname,
    PageName = URL.substring(URL.lastIndexOf("/") + 1).toLowerCase();
"index.aspx" == PageName || ("contact-us.aspx" == PageName || "ourcompany.aspx" == PageName || "meet_mtbc_clients.aspx" == PageName || "press-room-overview.aspx" == PageName || "strategic-alliances.aspx" == PageName || "channel-partner.aspx" == PageName || "value-added-resellers.aspx" == PageName || "referral-program.aspx" == PageName || "independent-consultants.aspx" == PageName ? submenmu() : "medical-billing-service.aspx" == PageName || "medical-billing-features.aspx" == PageName || "medical-billing-vas.aspx" == PageName || "web-pms-signup.aspx" == PageName || "custom-solutions.aspx" == PageName || "medical-billing-pricing.aspx" == PageName || "iphone_app.aspx" == PageName || "eligibility.aspx" == PageName || "callpro.aspx" == PageName || "kiosk.aspx" == PageName || "eprescribing.aspx" == PageName || "lab_connectivity.aspx" == PageName || "phr.aspx" == PageName || "webpro.aspx" == PageName || "transcription.aspx" == PageName || "tollfree.aspx" == PageName || "adams.aspx" == PageName || "rtca.aspx" == PageName || "emr_techfacts.aspx" == PageName || "irx-smartdevices.aspx" == PageName || "phr-for-smartphones.aspx" == PageName || "care-connector.aspx" == PageName || "mtbc-icheckin.aspx" == PageName ? submenmu1() : "ehr-features.aspx" == PageName || "certified-ehr-software.aspx" == PageName || "emr_features.aspx" == PageName || "emr_maintenance.aspx" == PageName || "ehr-deployment.aspx" == PageName || "ehr-deployment-model.aspx" == PageName || "signup_emr.aspx" == PageName || "emr-pricing.aspx" == PageName || "web-ehr-signup.aspx" == PageName || "ehr-features.aspx" == PageName || "ehr-maintenance.aspx" == PageName || "ehr-pricing.aspx" == PageName || "emr-overview.aspx" == PageName || "faqs.aspx" == PageName || "ehr-features.aspx" == PageName ? submenmu2() : ("webinars.aspx" == PageName || "ehr-demos.aspx" == PageName || "product-and-services.aspx" == PageName || "accountable-care-organization.aspx" == PageName || "mtbc-pdr.aspx" == PageName || "hit-consultancy-services.aspx" == PageName || "mtbc-icd.aspx" == PageName || "meaningful-use.aspx" == PageName) && submenmu3());
var obj1, URL = window.location.pathname,
    PageName = URL.substring(URL.lastIndexOf("/") + 1).toLowerCase();
"ourcompany.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[1], $($(obj1).children()).css("color", "#f0bb62")) : "meet_mtbc_clients.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[2], $($(obj1).children()).css("color", "#f0bb62")) : "press-room-overview.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[3], $($(obj1).children()).css("color", "#f0bb62")) : "strategic-alliances.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[4], $($(obj1).children()).css("color", "#f0bb62")) : "channel-partner.aspx" == PageName || "value-added-resellers.aspx" == PageName || "referral-program.aspx" == PageName || "independent-consultants.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[5], $($(obj1).children()).css("color", "#f0bb62")) : "medical-billing-service.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[1], $($(obj1).children()).css("color", "#f0bb62")) : "medical-billing-features.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[2], $($(obj1).children()).css("color", "#f0bb62")) : "medical-billing-vas.aspx" == PageName || "iphone_app.aspx" == PageName || "eligibility.aspx" == PageName || "callpro.aspx" == PageName || "kiosk.aspx" == PageName || "eprescribing.aspx" == PageName || "lab_connectivity.aspx" == PageName || "phr.aspx" == PageName || "webpro.aspx" == PageName || "transcription.aspx" == PageName || "tollfree.aspx" == PageName || "adams.aspx" == PageName || "rtca.aspx" == PageName || "irx-smartdevices.aspx" == PageName || "phr-for-smartphones.aspx" == PageName || "mtbc-icheckin.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[3], $($(obj1).children()).css("color", "#f0bb62")) : "custom-solutions.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[4], $($(obj1).children()).css("color", "#f0bb62")) : "medical-billing-pricing.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[5], $($(obj1).children()).css("color", "#f0bb62")) : "care-connector.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[6], $($(obj1).children()).css("color", "#f0bb62")) : "web-pms-signup.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[7], $($(obj1).children()).css("color", "#f0bb62")) : "emr-overview.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[1], $($(obj1).children()).css("color", "#f0bb62")) : "ehr-features.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[2], $($(obj1).children()).css("color", "#f0bb62")) : "ehr-deployment-model.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[3], $($(obj1).children()).css("color", "#f0bb62")) : "ehr-pricing.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[4], $($(obj1).children()).css("color", "#f0bb62")) : "faqs.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[5], $($(obj1).children()).css("color", "#f0bb62")) : "web-ehr-signup.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[6], $($(obj1).children()).css("color", "#f0bb62")) : "webinars.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[5], $($(obj1).children()).css("color", "#f0bb62")) : "hit-consultancy-services.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[1], $($(obj1).children()).css("color", "#f0bb62")) : "meaningful-use.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[2], $($(obj1).children()).css("color", "#f0bb62")) : "mtbc-icd.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[3], $($(obj1).children()).css("color", "#f0bb62")) : "accountable-care-organization.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[4], $($(obj1).children()).css("color", "#f0bb62")) : "ehr-demos.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[4], $($(obj1).children()).css("color", "#f0bb62")) : "mtbc-pdr.aspx" == PageName ? (obj1 = $("#sub-nav-links").children()[7], $($(obj1).children()).css("color", "#f0bb62")) : "product-and-services.aspx" == PageName && (obj1 = $("#sub-nav-links").children()[5], $($(obj1).children()).css("color", "#f0bb62")), DrawCaptcha(), DrawCaptchaScheduleDemo(), $("#menu_txtSpecialtyScheduleDemo,#speciality,#RACB_ddl_Speciality").autocomplete({
        lookup: AutoSpecialty
    }), $("#menu_txtStateScheduleDemo").autocomplete({
        lookup: AutoStates
    }), $(document).ready(function() {
        var e = location.pathname;
        "/about-us/" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(0)").addClass("nav2-active")) : "/about-us/our-company" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(1)").addClass("nav2-active")) : "/about-us/client-testimonials" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(2)").addClass("nav2-active")) : "/about-us/press-room/press-room" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(3)").addClass("nav2-active")) : "/about-us/partners" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(4)").addClass("nav2-active")) : "/about-us/channel-partnership" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(5)").addClass("nav2-active")) : "/about-us/investor-relations" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(6)").addClass("nav2-active")) : e.toLowerCase().indexOf("press-room") >= 0 ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(3)").addClass("nav2-active")) : "/resources/" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(0)").addClass("nav2-active")) : "/resources/meaningful-use" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(1)").addClass("nav2-active")) : "/resources/icd-10" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(2)").addClass("nav2-active")) : "/resources/accountable-care-organization" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(3)").addClass("nav2-active")) : "/resources/macra-and-mips" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(4)").addClass("nav2-active")) : "/resources/affordable-care-act" == e ? ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(5)").addClass("nav2-active")) : "/resources/webinars" == e && ($(".nav.navbar-secondary li").removeClass("nav2-active"), $(".nav.navbar-secondary li:eq(6)").addClass("nav2-active"))
    }), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e, t, i) {
        var n = {
            init: function(t, i) {
                var n = this;
                n.$elem = e(i), n.options = e.extend({}, e.fn.owlCarousel.options, n.$elem.data(), t), n.userOptions = t, n.loadContent()
            },
            loadContent: function() {
                function t(e) {
                    var t, i = "";
                    if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]);
                    else {
                        for (t in e.owl) e.owl.hasOwnProperty(t) && (i += e.owl[t].item);
                        n.$elem.html(i)
                    }
                    n.logIn()
                }
                var i, n = this;
                "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (i = n.options.jsonPath, e.getJSON(i, t)) : n.logIn()
            },
            logIn: function() {
                var e = this;
                e.$elem.data("owl-originalStyles", e.$elem.attr("style")), e.$elem.data("owl-originalClasses", e.$elem.attr("class")), e.$elem.css({
                    opacity: 0
                }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible = null, e.setVars()
            },
            setVars: function() {
                var e = this;
                return 0 === e.$elem.children().length ? !1 : (e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$owlItems = e.$elem.find(".owl-item"), e.$owlWrapper = e.$elem.find(".owl-wrapper"), e.playDirection = "next", e.prevItem = 0, e.prevArr = [0], e.currentItem = 0, e.customEvents(), void e.onStartup())
            },
            onStartup: function() {
                var e = this;
                e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.owlStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 5e3), e.play(), e.$elem.find(".owl-wrapper").css("display", "block"), e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
            },
            eachMoveUpdate: function() {
                var e = this;
                e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.onVisibleItems(), "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
            },
            updateVars: function() {
                var e = this;
                "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
            },
            reload: function() {
                var e = this;
                t.setTimeout(function() {
                    e.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var e = this;
                return e.$elem.is(":visible") !== !1 ? !1 : (e.$elem.css({
                    opacity: 0
                }), t.clearInterval(e.autoPlayInterval), t.clearInterval(e.checkVisible), void(e.checkVisible = t.setInterval(function() {
                    e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                        opacity: 1
                    }, 200), t.clearInterval(e.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var e = this;
                e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"), e.$elem.css("display", "block")
            },
            baseClass: function() {
                var e = this,
                    t = e.$elem.hasClass(e.options.baseClass),
                    i = e.$elem.hasClass(e.options.theme);
                t || e.$elem.addClass(e.options.baseClass), i || e.$elem.addClass(e.options.theme)
            },
            updateItems: function() {
                var t, i, n = this;
                if (n.options.responsive === !1) return !1;
                if (n.options.singleItem === !0) return n.options.items = n.orignalItems = 1, n.options.itemsCustom = !1, n.options.itemsDesktop = !1, n.options.itemsDesktopSmall = !1, n.options.itemsTablet = !1, n.options.itemsTabletSmall = !1, n.options.itemsMobile = !1, !1;
                if (t = e(n.options.responsiveBaseWidth).width(), t > (n.options.itemsDesktop[0] || n.orignalItems) && (n.options.items = n.orignalItems), n.options.itemsCustom !== !1)
                    for (n.options.itemsCustom.sort(function(e, t) {
                            return e[0] - t[0]
                        }), i = 0; i < n.options.itemsCustom.length; i += 1) n.options.itemsCustom[i][0] <= t && (n.options.items = n.options.itemsCustom[i][1]);
                else t <= n.options.itemsDesktop[0] && n.options.itemsDesktop !== !1 && (n.options.items = n.options.itemsDesktop[1]), t <= n.options.itemsDesktopSmall[0] && n.options.itemsDesktopSmall !== !1 && (n.options.items = n.options.itemsDesktopSmall[1]), t <= n.options.itemsTablet[0] && n.options.itemsTablet !== !1 && (n.options.items = n.options.itemsTablet[1]), t <= n.options.itemsTabletSmall[0] && n.options.itemsTabletSmall !== !1 && (n.options.items = n.options.itemsTabletSmall[1]), t <= n.options.itemsMobile[0] && n.options.itemsMobile !== !1 && (n.options.items = n.options.itemsMobile[1]);
                n.options.items > n.itemsAmount && n.options.itemsScaleUp === !0 && (n.options.items = n.itemsAmount)
            },
            response: function() {
                var i, n, a = this;
                return a.options.responsive !== !0 ? !1 : (n = e(t).width(), a.resizer = function() {
                    e(t).width() !== n && (a.options.autoPlay !== !1 && t.clearInterval(a.autoPlayInterval), t.clearTimeout(i), i = t.setTimeout(function() {
                        n = e(t).width(), a.updateVars()
                    }, a.options.responsiveRefreshRate))
                }, void e(t).resize(a.resizer))
            },
            updatePosition: function() {
                var e = this;
                e.jumpTo(e.currentItem), e.options.autoPlay !== !1 && e.checkAp()
            },
            appendItemsSizes: function() {
                var t = this,
                    i = 0,
                    n = t.itemsAmount - t.options.items;
                t.$owlItems.each(function(a) {
                    var r = e(this);
                    r.css({
                        width: t.itemWidth
                    }).data("owl-item", Number(a)), (a % t.options.items === 0 || a === n) && (a > n || (i += 1)), r.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var e = this,
                    t = e.$owlItems.length * e.itemWidth;
                e.$owlWrapper.css({
                    width: 2 * t,
                    left: 0
                }), e.appendItemsSizes()
            },
            calculateAll: function() {
                var e = this;
                e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
            },
            calculateWidth: function() {
                var e = this;
                e.itemWidth = Math.round(e.$elem.width() / e.options.items)
            },
            max: function() {
                var e = this,
                    t = -1 * (e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth);
                return e.options.items > e.itemsAmount ? (e.maximumItem = 0, t = 0, e.maximumPixels = 0) : (e.maximumItem = e.itemsAmount - e.options.items, e.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var t, i, n, a = this,
                    r = 0,
                    o = 0;
                for (a.positionsInArray = [0], a.pagesInArray = [], t = 0; t < a.itemsAmount; t += 1) o += a.itemWidth, a.positionsInArray.push(-o), a.options.scrollPerPage === !0 && (i = e(a.$owlItems[t]), n = i.data("owl-roundPages"), n !== r && (a.pagesInArray[r] = a.positionsInArray[t], r = n))
            },
            buildControls: function() {
                var t = this;
                (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
            },
            buildButtons: function() {
                var t = this,
                    i = e('<div class="owl-buttons"/>');
                t.owlControls.append(i), t.buttonPrev = e("<div/>", {
                    "class": "owl-prev",
                    html: t.options.navigationText[0] || ""
                }), t.buttonNext = e("<div/>", {
                    "class": "owl-next",
                    html: t.options.navigationText[1] || ""
                }), i.append(t.buttonPrev).append(t.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(e) {
                    e.preventDefault()
                }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
                })
            },
            buildPagination: function() {
                var t = this;
                t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var t, i, n, a, r, o, s = this;
                if (s.options.pagination === !1) return !1;
                for (s.paginationWrapper.html(""), t = 0, i = s.itemsAmount - s.itemsAmount % s.options.items, a = 0; a < s.itemsAmount; a += 1) a % s.options.items === 0 && (t += 1, i === a && (n = s.itemsAmount - s.options.items), r = e("<div/>", {
                    "class": "owl-page"
                }), o = e("<span></span>", {
                    text: s.options.paginationNumbers === !0 ? t : "",
                    "class": s.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), r.append(o), r.data("owl-page", i === a ? n : a), r.data("owl-roundPages", t), s.paginationWrapper.append(r));
                s.checkPagination()
            },
            checkPagination: function() {
                var t = this;
                return t.options.pagination === !1 ? !1 : void t.paginationWrapper.find(".owl-page").each(function() {
                    e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var e = this;
                return e.options.navigation === !1 ? !1 : void(e.options.rewindNav === !1 && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var e = this;
                e.updatePagination(), e.checkNavigation(), e.owlControls && (e.options.items >= e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
            },
            destroyControls: function() {
                var e = this;
                e.owlControls && e.owlControls.remove()
            },
            next: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (t.options.scrollPerPage === !0 ? t.options.items - 1 : 0)) {
                    if (t.options.rewindNav !== !0) return t.currentItem = t.maximumItem, !1;
                    t.currentItem = 0, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            prev: function(e) {
                var t = this;
                if (t.isTransition) return !1;
                if (t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0) {
                    if (t.options.rewindNav !== !0) return t.currentItem = 0, !1;
                    t.currentItem = t.maximumItem, e = "rewind"
                }
                t.goTo(t.currentItem, e)
            },
            goTo: function(e, i, n) {
                var a, r = this;
                return r.isTransition ? !1 : ("function" == typeof r.options.beforeMove && r.options.beforeMove.apply(this, [r.$elem]), e >= r.maximumItem ? e = r.maximumItem : 0 >= e && (e = 0), r.currentItem = r.owl.currentItem = e, r.options.transitionStyle !== !1 && "drag" !== n && 1 === r.options.items && r.browser.support3d === !0 ? (r.swapSpeed(0), r.browser.support3d === !0 ? r.transition3d(r.positionsInArray[e]) : r.css2slide(r.positionsInArray[e], 1), r.afterGo(), r.singleItemTransition(), !1) : (a = r.positionsInArray[e], r.browser.support3d === !0 ? (r.isCss3Finish = !1, i === !0 ? (r.swapSpeed("paginationSpeed"), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.paginationSpeed)) : "rewind" === i ? (r.swapSpeed(r.options.rewindSpeed), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.rewindSpeed)) : (r.swapSpeed("slideSpeed"), t.setTimeout(function() {
                    r.isCss3Finish = !0
                }, r.options.slideSpeed)), r.transition3d(a)) : i === !0 ? r.css2slide(a, r.options.paginationSpeed) : "rewind" === i ? r.css2slide(a, r.options.rewindSpeed) : r.css2slide(a, r.options.slideSpeed), void r.afterGo()))
            },
            jumpTo: function(e) {
                var t = this;
                "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || -1 === e ? e = t.maximumItem : 0 >= e && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.owl.currentItem = e, t.afterGo()
            },
            afterGo: function() {
                var e = this;
                e.prevArr.push(e.currentItem), e.prevItem = e.owl.prevItem = e.prevArr[e.prevArr.length - 2], e.prevArr.shift(0), e.prevItem !== e.currentItem && (e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), e.options.autoPlay !== !1 && e.checkAp()), "function" == typeof e.options.afterMove && e.prevItem !== e.currentItem && e.options.afterMove.apply(this, [e.$elem])
            },
            stop: function() {
                var e = this;
                e.apStatus = "stop", t.clearInterval(e.autoPlayInterval)
            },
            checkAp: function() {
                var e = this;
                "stop" !== e.apStatus && e.play()
            },
            play: function() {
                var e = this;
                return e.apStatus = "play", e.options.autoPlay === !1 ? !1 : (t.clearInterval(e.autoPlayInterval), void(e.autoPlayInterval = t.setInterval(function() {
                    e.next(!0)
                }, e.options.autoPlay)))
            },
            swapSpeed: function(e) {
                var t = this;
                "slideSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$owlWrapper.css(t.addCssSpeed(e))
            },
            addCssSpeed: function(e) {
                return {
                    "-webkit-transition": "all " + e + "ms ease",
                    "-moz-transition": "all " + e + "ms ease",
                    "-o-transition": "all " + e + "ms ease",
                    transition: "all " + e + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(e) {
                return {
                    "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                    transform: "translate3d(" + e + "px, 0px,0px)"
                }
            },
            transition3d: function(e) {
                var t = this;
                t.$owlWrapper.css(t.doTranslate(e))
            },
            css2move: function(e) {
                var t = this;
                t.$owlWrapper.css({
                    left: e
                })
            },
            css2slide: function(e, t) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: e
                }, {
                    duration: t || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var e, n, a, r, o = this,
                    s = "translate3d(0px, 0px, 0px)",
                    l = i.createElement("div");
                l.style.cssText = "  -moz-transform:" + s + "; -ms-transform:" + s + "; -o-transform:" + s + "; -webkit-transform:" + s + "; transform:" + s, e = /translate3d\(0px, 0px, 0px\)/g, n = l.style.cssText.match(e), a = null !== n && 1 === n.length, r = "ontouchstart" in t || t.navigator.msMaxTouchPoints, o.browser = {
                    support3d: a,
                    isTouch: r
                }
            },
            moveEvents: function() {
                var e = this;
                (e.options.mouseDrag !== !1 || e.options.touchDrag !== !1) && (e.gestures(), e.disabledEvents())
            },
            eventTypes: function() {
                var e = this,
                    t = ["s", "e", "x"];
                e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
            },
            disabledEvents: function() {
                var t = this;
                t.$elem.on("dragstart.owl", function(e) {
                    e.preventDefault()
                }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                    return e(t.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function n(e) {
                    if (void 0 !== e.touches) return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    };
                    if (void 0 === e.touches) {
                        if (void 0 !== e.pageX) return {
                            x: e.pageX,
                            y: e.pageY
                        };
                        if (void 0 === e.pageX) return {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }

                function a(t) {
                    "on" === t ? (e(i).on(l.ev_types.move, o), e(i).on(l.ev_types.end, s)) : "off" === t && (e(i).off(l.ev_types.move), e(i).off(l.ev_types.end))
                }

                function r(i) {
                    var r, o = i.originalEvent || i || t.event;
                    if (3 === o.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && t.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, e(this).css(l.removeTransition()), r = e(this).position(), d.relativePos = r.left, d.offsetX = n(o).x - r.left, d.offsetY = n(o).y - r.top, a("on"), d.sliding = !1, d.targetElement = o.target || o.srcElement
                    }
                }

                function o(a) {
                    var r, o, s = a.originalEvent || a || t.event;
                    l.newPosX = n(s).x - d.offsetX, l.newPosY = n(s).y - d.offsetY, l.newRelativeX = l.newPosX - d.relativePos, "function" == typeof l.options.startDragging && d.dragging !== !0 && 0 !== l.newRelativeX && (d.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== s.preventDefault ? s.preventDefault() : s.returnValue = !1, d.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && d.sliding === !1 && e(i).off("touchmove.owl"), r = function() {
                        return l.newRelativeX / 5
                    }, o = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, r()), o()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function s(i) {
                    var n, r, o, s = i.originalEvent || i || t.event;
                    s.target = s.target || s.srcElement, d.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (n = l.getNewPosition(), l.goTo(n, !1, "drag"), d.targetElement === s.target && l.browser.isTouch !== !0 && (e(s.target).on("click.disable", function(t) {
                        t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(t.target).off("click.disable")
                    }), r = e._data(s.target, "events").click, o = r.pop(), r.splice(0, 0, o))), a("off")
                }
                var l = this,
                    d = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", r)
            },
            getNewPosition: function() {
                var e = this,
                    t = e.closestItem();
                return t > e.maximumItem ? (e.currentItem = e.maximumItem, t = e.maximumItem) : e.newPosX >= 0 && (t = 0, e.currentItem = 0), t
            },
            closestItem: function() {
                var t = this,
                    i = t.options.scrollPerPage === !0 ? t.pagesInArray : t.positionsInArray,
                    n = t.newPosX,
                    a = null;
                return e.each(i, function(r, o) {
                    n - t.itemWidth / 20 > i[r + 1] && n - t.itemWidth / 20 < o && "left" === t.moveDirection() ? (a = o, t.currentItem = t.options.scrollPerPage === !0 ? e.inArray(a, t.positionsInArray) : r) : n + t.itemWidth / 20 < o && n + t.itemWidth / 20 > (i[r + 1] || i[r] - t.itemWidth) && "right" === t.moveDirection() && (t.options.scrollPerPage === !0 ? (a = i[r + 1] || i[i.length - 1], t.currentItem = e.inArray(a, t.positionsInArray)) : (a = i[r + 1], t.currentItem = r + 1))
                }), t.currentItem
            },
            moveDirection: function() {
                var e, t = this;
                return t.newRelativeX < 0 ? (e = "right", t.playDirection = "next") : (e = "left", t.playDirection = "prev"), e
            },
            customEvents: function() {
                var e = this;
                e.$elem.on("owl.next", function() {
                    e.next()
                }), e.$elem.on("owl.prev", function() {
                    e.prev()
                }), e.$elem.on("owl.play", function(t, i) {
                    e.options.autoPlay = i, e.play(), e.hoverStatus = "play"
                }), e.$elem.on("owl.stop", function() {
                    e.stop(), e.hoverStatus = "stop"
                }), e.$elem.on("owl.goTo", function(t, i) {
                    e.goTo(i)
                }), e.$elem.on("owl.jumpTo", function(t, i) {
                    e.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var e = this;
                e.options.stopOnHover === !0 && e.browser.isTouch !== !0 && e.options.autoPlay !== !1 && (e.$elem.on("mouseover", function() {
                    e.stop()
                }), e.$elem.on("mouseout", function() {
                    "stop" !== e.hoverStatus && e.play()
                }))
            },
            lazyLoad: function() {
                var t, i, n, a, r, o = this;
                if (o.options.lazyLoad === !1) return !1;
                for (t = 0; t < o.itemsAmount; t += 1) i = e(o.$owlItems[t]), "loaded" !== i.data("owl-loaded") && (n = i.data("owl-item"), a = i.find(".lazyOwl"), "string" == typeof a.data("src") ? (void 0 === i.data("owl-loaded") && (a.hide(), i.addClass("loading").data("owl-loaded", "checked")), r = o.options.lazyFollow === !0 ? n >= o.currentItem : !0, r && n < o.currentItem + o.options.items && a.length && o.lazyPreload(i, a)) : i.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(e, i) {
                function n() {
                    e.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === o.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof o.options.afterLazyLoad && o.options.afterLazyLoad.apply(this, [o.$elem])
                }

                function a() {
                    s += 1, o.completeImg(i.get(0)) || r === !0 ? n() : 100 >= s ? t.setTimeout(a, 100) : n()
                }
                var r, o = this,
                    s = 0;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), r = !0) : i[0].src = i.data("src"), a()
            },
            autoHeight: function() {
                function i() {
                    var i = e(r.$owlItems[r.currentItem]).height();
                    r.wrapperOuter.css("height", i + "px"), r.wrapperOuter.hasClass("autoHeight") || t.setTimeout(function() {
                        r.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function n() {
                    a += 1, r.completeImg(o.get(0)) ? i() : 100 >= a ? t.setTimeout(n, 100) : r.wrapperOuter.css("height", "")
                }
                var a, r = this,
                    o = e(r.$owlItems[r.currentItem]).find("img");
                void 0 !== o.get(0) ? (a = 0, n()) : i()
            },
            completeImg: function(e) {
                var t;
                return e.complete ? (t = typeof e.naturalWidth, "undefined" !== t && 0 === e.naturalWidth ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var t, i = this;
                for (i.options.addClassActive === !0 && i.$owlItems.removeClass("active"), i.visibleItems = [], t = i.currentItem; t < i.currentItem + i.options.items; t += 1) i.visibleItems.push(t), i.options.addClassActive === !0 && e(i.$owlItems[t]).addClass("active");
                i.owl.visibleItems = i.visibleItems
            },
            transitionTypes: function(e) {
                var t = this;
                t.outClass = "owl-" + e + "-out", t.inClass = "owl-" + e + "-in"
            },
            singleItemTransition: function() {
                function e(e) {
                    return {
                        position: "relative",
                        left: e + "px"
                    }
                }
                var t = this,
                    i = t.outClass,
                    n = t.inClass,
                    a = t.$owlItems.eq(t.currentItem),
                    r = t.$owlItems.eq(t.prevItem),
                    o = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    s = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": s + "px",
                    "-moz-perspective-origin": s + "px",
                    "perspective-origin": s + "px"
                }), r.css(e(o, 10)).addClass(i).on(l, function() {
                    t.endPrev = !0, r.off(l), t.clearTransStyle(r, i)
                }), a.addClass(n).on(l, function() {
                    t.endCurrent = !0, a.off(l), t.clearTransStyle(a, n)
                })
            },
            clearTransStyle: function(e, t) {
                var i = this;
                e.css({
                    position: "",
                    left: ""
                }).removeClass(t), i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var e = this;
                e.owl = {
                    userOptions: e.userOptions,
                    baseElement: e.$elem,
                    userItems: e.$userItems,
                    owlItems: e.$owlItems,
                    currentItem: e.currentItem,
                    prevItem: e.prevItem,
                    visibleItems: e.visibleItems,
                    isTouch: e.browser.isTouch,
                    browser: e.browser,
                    dragDirection: e.dragDirection
                }
            },
            clearEvents: function() {
                var n = this;
                n.$elem.off(".owl owl mousedown.disableTextSelect"), e(i).off(".owl owl"), e(t).off("resize", n.resizer)
            },
            unWrap: function() {
                var e = this;
                0 !== e.$elem.children().length && (e.$owlWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.owlControls && e.owlControls.remove()), e.clearEvents(), e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var e = this;
                e.stop(), t.clearInterval(e.checkVisible), e.unWrap(), e.$elem.removeData()
            },
            reinit: function(t) {
                var i = this,
                    n = e.extend({}, i.userOptions, t);
                i.unWrap(), i.init(n, i.$elem)
            },
            addItem: function(e, t) {
                var i, n = this;
                return e ? 0 === n.$elem.children().length ? (n.$elem.append(e), n.setVars(), !1) : (n.unWrap(), i = void 0 === t || -1 === t ? -1 : t, i >= n.$userItems.length || -1 === i ? n.$userItems.eq(-1).after(e) : n.$userItems.eq(i).before(e), void n.setVars()) : !1
            },
            removeItem: function(e) {
                var t, i = this;
                return 0 === i.$elem.children().length ? !1 : (t = void 0 === e || -1 === e ? -1 : e, i.unWrap(), i.$userItems.eq(t).remove(), void i.setVars())
            }
        };
        e.fn.owlCarousel = function(t) {
            return this.each(function() {
                if (e(this).data("owl-init") === !0) return !1;
                e(this).data("owl-init", !0);
                var i = Object.create(n);
                i.init(t, this), e.data(this, "owlCarousel", i)
            })
        }, e.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: t,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);
var owlval;
$(document).ready(function() {
    $("#news-scroller, #testimonials-scroller").owlCarousel({
        autoPlay: 1e4,
        stopOnHover: !0,
        navigation: !1,
        paginationSpeed: 1e3,
        goToFirstSpeed: 2e3,
        singleItem: !0,
        autoHeight: !0
    }), owlval = $("#testimonials-scroller"), $("#btnvid1,#btnvid2,#btnvid3,#btnvid4,#btnvid5,#btnvid6,#btnvid7,#btnvid8").click(function() {
        owlval.trigger("owl.stop")
    })
});
var bad_words_array = new Array("fistfucked ", "blow job", "bunny fucker", "fistfucker ", "fistfuckers ", "fistfucking ", "fistfuckings ", "cock-sucker", "cuntlick ", "cuntlicker ", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cockface", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "cockhead", "cockmunch", "cockmuncher", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cyalis", "cyberfuc", "cyberfuck ", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cunts", "cocks", "cocksucker", "cocksucking", "cocksucks", "cuntlicking ", "cocksuck ", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking ", "f u c k", "f u c k e r", "ejaculates ", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculatings", "ejaculation", "ejakulate", "ass", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck ", "fingerfucked ", "fingerfucker ", "fingerfuckers", "fingerfucking ", "fingerfucks ", "fistfuck", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz ", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lmfao", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers ", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim ", "orgasims", "orgasm", "orgasms ", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses ", "pissflaps", "pissin ", "pissing", "pissoff ", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks ", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys ", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters ", "shitting", "shittings", "shitty ", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "ejaculating ", "cocksucked ", "carpet muncher", "fistfucks ", "sex", "fuck", "bomb", "dick", "penis", "boob", "tits", "cunt", "vagina", "pussy", "xxx", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch");
$("#EHR").on("click", function(e) {
        e.target == this && (window.location = "../products-services/electronic-health-records-EHR.aspx")
    }), $("#PM").on("click", function(e) {
        e.target == this && (window.location = "../products-services/practice-management.aspx")
    }), $("#PE").on("click", function(e) {
        e.target == this && (window.location = "../products-services/patient-engagement.aspx")
    }), $("#MH").on("click", function(e) {
        e.target == this && (window.location = "../products-services/mhealth.aspx")
    }), ! function(e, t) {
        function i(t, i) {
            var a, r, o, s = t.nodeName.toLowerCase();
            return "area" === s ? (a = t.parentNode, r = a.name, t.href && r && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap=#" + r + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || i : i) && n(t)
        }

        function n(t) {
            return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }
        var a = 0,
            r = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
            version: "1.9.1",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            _focus: e.fn.focus,
            focus: function(t, i) {
                return "number" == typeof t ? this.each(function() {
                    var n = this;
                    setTimeout(function() {
                        e(n).focus(), i && i.call(n)
                    }, t)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length)
                    for (var n, a, r = e(this[0]); r.length && r[0] !== document;) {
                        if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (a = parseInt(r.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                        r = r.parent()
                    }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    r.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
            function a(t, i, n, a) {
                return e.each(r, function() {
                    i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), i
            }
            var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                o = n.toLowerCase(),
                s = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + n] = function(i) {
                return i === t ? s["inner" + n].call(this) : this.each(function() {
                    e(this).css(o, a(this, i) + "px")
                })
            }, e.fn["outer" + n] = function(t, i) {
                return "number" != typeof t ? s["outer" + n].call(this, t) : this.each(function() {
                    e(this).css(o, a(this, t, !0, i) + "px")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(i) {
                    return !!e.data(i, t)
                }
            }) : function(t, i, n) {
                return !!e.data(t, n[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    a = isNaN(n);
                return (a || n >= 0) && i(t, !a)
            }
        }), e(function() {
            var t = document.body,
                i = t.appendChild(i = document.createElement("div"));
            i.offsetHeight, e.extend(i.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none"
        }), function() {
            var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
            e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
        }(), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function(t, i, n) {
                    var a, r = e.ui[t].prototype;
                    for (a in n) r.plugins[a] = r.plugins[a] || [], r.plugins[a].push([i, n[a]])
                },
                call: function(e, t, i) {
                    var n, a = e.plugins[t];
                    if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                        for (n = 0; n < a.length; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
                }
            },
            contains: e.contains,
            hasScroll: function(t, i) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    a = !1;
                return t[n] > 0 ? !0 : (t[n] = 1, a = t[n] > 0, t[n] = 0, a)
            },
            isOverAxis: function(e, t, i) {
                return e > t && t + i > e
            },
            isOver: function(t, i, n, a, r, o) {
                return e.ui.isOverAxis(t, n, r) && e.ui.isOverAxis(i, a, o)
            }
        }))
    }(jQuery),
    function($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(e) {
            var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.delegate(t, "mouseout", function() {
                $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
            }).delegate(t, "mouseover", function() {
                $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(e, t) {
            $.extend(e, t);
            for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
            return e
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.9.1"
            }
        });
        var PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime(),
            instActive;
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return extendRemove(this._defaults, e || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(e, t) {
                var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
                return {
                    id: i,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: t,
                    dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, t) {
                var i = $(e);
                t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, i, n) {
                    t.settings[i] = n
                }).bind("getData.datepicker", function(e, i) {
                    return this._get(t, i)
                }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, t) {
                var i = this._get(t, "appendText"),
                    n = this._get(t, "isRTL");
                t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
                var a = this._get(t, "showOn");
                if (("focus" == a || "both" == a) && e.focus(this._showDatepicker), "button" == a || "both" == a) {
                    var r = this._get(t, "buttonText"),
                        o = this._get(t, "buttonImage");
                    t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: r,
                        title: r
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == o ? r : $("<img/>").attr({
                        src: o,
                        alt: r,
                        title: r
                    }))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                    })
                }
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t = new Date(2009, 11, 20),
                        i = this._get(e, "dateFormat");
                    if (i.match(/[DM]/)) {
                        var n = function(e) {
                            for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
                            return i
                        };
                        t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                    }
                    e.input.attr("size", this._formatDate(e, t).length)
                }
            },
            _inlineDatepicker: function(e, t) {
                var i = $(e);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, i, n) {
                    t.settings[i] = n
                }).bind("getData.datepicker", function(e, i) {
                    return this._get(t, i)
                }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, t, i, n, a) {
                var r = this._dialogInst;
                if (!r) {
                    this.uuid += 1;
                    var o = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + o + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), r = this._dialogInst = this._newInst(this._dialogInput, !1), r.settings = {}, $.data(this._dialogInput[0], PROP_NAME, r)
                }
                if (extendRemove(r.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(r, t) : t, this._dialogInput.val(t), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, !this._pos) {
                    var s = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        d = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [s / 2 - 100 + d, l / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), r.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, r), this
            },
            _destroyDatepicker: function(e) {
                var t = $(e),
                    i = $.data(e, PROP_NAME);
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    $.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(e) {
                var t = $(e),
                    i = $.data(e, PROP_NAME);
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    if ("input" == n) e.disabled = !1, i.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" == n || "span" == n) {
                        var a = t.children("." + this._inlineClass);
                        a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                    })
                }
            },
            _disableDatepicker: function(e) {
                var t = $(e),
                    i = $.data(e, PROP_NAME);
                if (t.hasClass(this.markerClassName)) {
                    var n = e.nodeName.toLowerCase();
                    if ("input" == n) e.disabled = !0, i.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" == n || "span" == n) {
                        var a = t.children("." + this._inlineClass);
                        a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(t) {
                        return t == e ? null : t
                    }), this._disabledInputs[this._disabledInputs.length] = e
                }
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] == e) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return $.data(e, PROP_NAME)
                } catch (t) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, t, i) {
                var n = this._getInst(e);
                if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
                var a = t || {};
                if ("string" == typeof t && (a = {}, a[t] = i), n) {
                    this._curInst == n && this._hideDatepicker();
                    var r = this._getDateDatepicker(e, !0),
                        o = this._getMinMaxDate(n, "min"),
                        s = this._getMinMaxDate(n, "max");
                    extendRemove(n.settings, a), null !== o && a.dateFormat !== undefined && a.minDate === undefined && (n.settings.minDate = this._formatDate(n, o)), null !== s && a.dateFormat !== undefined && a.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, s)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, r), this._updateAlternate(n), this._updateDatepicker(n)
                }
            },
            _changeDatepicker: function(e, t, i) {
                this._optionDatepicker(e, t, i)
            },
            _refreshDatepicker: function(e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(e, t) {
                var i = this._getInst(e);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(e, t) {
                var i = this._getInst(e);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var t = $.datepicker._getInst(e.target),
                    i = !0,
                    n = t.dpDiv.is(".ui-datepicker-rtl");
                if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), i = !1;
                        break;
                    case 13:
                        var a = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                        a[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, a[0]);
                        var r = $.datepicker._get(t, "onSelect");
                        if (r) {
                            var o = $.datepicker._formatDate(t);
                            r.apply(t.input ? t.input[0] : null, [o, t])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        i = !1
                } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                i && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var t = $.datepicker._getInst(e.target);
                if ($.datepicker._get(t, "constrainInput")) {
                    var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                        n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                    return e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1
                }
            },
            _doKeyUp: function(e) {
                var t = $.datepicker._getInst(e.target);
                if (t.input.val() != t.lastVal) try {
                    var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                    i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
                } catch (n) {
                    $.datepicker.log(n)
                }
                return !0
            },
            _showDatepicker: function(e) {
                if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
                    var t = $.datepicker._getInst(e);
                    $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var i = $.datepicker._get(t, "beforeShow"),
                        n = i ? i.apply(e, [e, t]) : {};
                    if (n !== !1) {
                        extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                        var a = !1;
                        $(e).parents().each(function() {
                            return a |= "fixed" == $(this).css("position"), !a
                        });
                        var r = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(t), r = $.datepicker._checkOffset(t, r, a), t.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : a ? "fixed" : "absolute",
                                display: "none",
                                left: r.left + "px",
                                top: r.top + "px"
                            }), !t.inline) {
                            var o = $.datepicker._get(t, "showAnim"),
                                s = $.datepicker._get(t, "duration"),
                                l = function() {
                                    var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (e.length) {
                                        var i = $.datepicker._getBorders(t.dpDiv);
                                        e.css({
                                            left: -i[0],
                                            top: -i[1],
                                            width: t.dpDiv.outerWidth(),
                                            height: t.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[o] || $.effects[o]) ? t.dpDiv.show(o, $.datepicker._get(t, "showOptions"), s, l) : t.dpDiv[o || "show"](o ? s : null, l), o && s || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                        }
                    }
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4;
                var t = $.datepicker._getBorders(e.dpDiv);
                instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i = e.dpDiv.find("iframe.ui-datepicker-cover");
                i.length && i.css({
                    left: -t[0],
                    top: -t[1],
                    width: e.dpDiv.outerWidth(),
                    height: e.dpDiv.outerHeight()
                }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n = this._getNumberOfMonths(e),
                    a = n[1],
                    r = 17;
                if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", r * a + "em"), e.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                    var o = e.yearshtml;
                    setTimeout(function() {
                        o === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), o = e.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(e) {
                var t = function(e) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    } [e] || e
                };
                return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
            },
            _checkOffset: function(e, t, i) {
                var n = e.dpDiv.outerWidth(),
                    a = e.dpDiv.outerHeight(),
                    r = e.input ? e.input.outerWidth() : 0,
                    o = e.input ? e.input.outerHeight() : 0,
                    s = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return t.left -= this._get(e, "isRTL") ? n - r : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + o ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > s && s > n ? Math.abs(t.left + n - s) : 0), t.top -= Math.min(t.top, t.top + a > l && l > a ? Math.abs(a + o) : 0), t
            },
            _findPos: function(e) {
                for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
                var n = $(e).offset();
                return [n.left, n.top]
            },
            _hideDatepicker: function(e) {
                var t = this._curInst;
                if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
                    var i = this._get(t, "showAnim"),
                        n = this._get(t, "duration"),
                        a = function() {
                            $.datepicker._tidyDialog(t)
                        };
                    $.effects && ($.effects.effect[i] || $.effects[i]) ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, a) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, a), i || a(), this._datepickerShowing = !1;
                    var r = this._get(t, "onClose");
                    r && r.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if ($.datepicker._curInst) {
                    var t = $(e.target),
                        i = $.datepicker._getInst(t[0]);
                    (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, t, i) {
                var n = $(e),
                    a = this._getInst(n[0]);
                this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, t + ("M" == i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
            },
            _gotoToday: function(e) {
                var t = $(e),
                    i = this._getInst(t[0]);
                if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
                else {
                    var n = new Date;
                    i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
                }
                this._notifyChange(i), this._adjustDate(t)
            },
            _selectMonthYear: function(e, t, i) {
                var n = $(e),
                    a = this._getInst(n[0]);
                a["selected" + ("M" == i ? "Month" : "Year")] = a["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
            },
            _selectDay: function(e, t, i, n) {
                var a = $(e);
                if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(a[0])) {
                    var r = this._getInst(a[0]);
                    r.selectedDay = r.currentDay = $("a", n).html(), r.selectedMonth = r.currentMonth = t, r.selectedYear = r.currentYear = i, this._selectDate(e, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear))
                }
            },
            _clearDate: function(e) {
                var t = $(e);
                this._getInst(t[0]), this._selectDate(t, "")
            },
            _selectDate: function(e, t) {
                var i = $(e),
                    n = this._getInst(i[0]);
                t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
                var a = this._get(n, "onSelect");
                a ? a.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var t = this._get(e, "altField");
                if (t) {
                    var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                        n = this._getDate(e),
                        a = this.formatDate(i, n, this._getFormatConfig(e));
                    $(t).each(function() {
                        $(this).val(a)
                    })
                }
            },
            noWeekends: function(e) {
                var t = e.getDay();
                return [t > 0 && 6 > t, ""]
            },
            iso8601Week: function(e) {
                var t = new Date(e.getTime());
                t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var i = t.getTime();
                return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function(e, t, i) {
                if (null == e || null == t) throw "Invalid arguments";
                if (t = "object" == typeof t ? t.toString() : t + "", "" == t) return null;
                var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
                for (var a = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, r = (i ? i.dayNames : null) || this._defaults.dayNames, o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, s = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, d = -1, c = -1, u = -1, h = !1, p = function(t) {
                        var i = y + 1 < e.length && e.charAt(y + 1) == t;
                        return i && y++, i
                    }, f = function(e) {
                        var i = p(e),
                            n = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2,
                            a = new RegExp("^\\d{1," + n + "}"),
                            r = t.substring(v).match(a);
                        if (!r) throw "Missing number at position " + v;
                        return v += r[0].length, parseInt(r[0], 10)
                    }, m = function(e, i, n) {
                        var a = $.map(p(e) ? n : i, function(e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function(e, t) {
                                return -(e[1].length - t[1].length)
                            }),
                            r = -1;
                        if ($.each(a, function(e, i) {
                                var n = i[1];
                                return t.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (r = i[0], v += n.length, !1) : void 0
                            }), -1 != r) return r + 1;
                        throw "Unknown name at position " + v
                    }, g = function() {
                        if (t.charAt(v) != e.charAt(y)) throw "Unexpected literal at position " + v;
                        v++
                    }, v = 0, y = 0; y < e.length; y++)
                    if (h) "'" != e.charAt(y) || p("'") ? g() : h = !1;
                    else switch (e.charAt(y)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            m("D", a, r);
                            break;
                        case "o":
                            u = f("o");
                            break;
                        case "m":
                            d = f("m");
                            break;
                        case "M":
                            d = m("M", o, s);
                            break;
                        case "y":
                            l = f("y");
                            break;
                        case "@":
                            var b = new Date(f("@"));
                            l = b.getFullYear(), d = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "!":
                            var b = new Date((f("!") - this._ticksTo1970) / 1e4);
                            l = b.getFullYear(), d = b.getMonth() + 1, c = b.getDate();
                            break;
                        case "'":
                            p("'") ? g() : h = !0;
                            break;
                        default:
                            g()
                    }
                if (v < t.length) {
                    var w = t.substr(v);
                    if (!/^\s+/.test(w)) throw "Extra/unparsed characters found in date: " + w
                }
                if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), u > -1)
                    for (d = 1, c = u;;) {
                        var x = this._getDaysInMonth(l, d - 1);
                        if (x >= c) break;
                        d++, c -= x
                    }
                var b = this._daylightSavingAdjust(new Date(l, d - 1, c));
                if (b.getFullYear() != l || b.getMonth() + 1 != d || b.getDate() != c) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, i) {
                if (!t) return "";
                var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    a = (i ? i.dayNames : null) || this._defaults.dayNames,
                    r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    o = (i ? i.monthNames : null) || this._defaults.monthNames,
                    s = function(t) {
                        var i = h + 1 < e.length && e.charAt(h + 1) == t;
                        return i && h++, i
                    },
                    l = function(e, t, i) {
                        var n = "" + t;
                        if (s(e))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    d = function(e, t, i, n) {
                        return s(e) ? n[t] : i[t]
                    },
                    c = "",
                    u = !1;
                if (t)
                    for (var h = 0; h < e.length; h++)
                        if (u) "'" != e.charAt(h) || s("'") ? c += e.charAt(h) : u = !1;
                        else switch (e.charAt(h)) {
                            case "d":
                                c += l("d", t.getDate(), 2);
                                break;
                            case "D":
                                c += d("D", t.getDay(), n, a);
                                break;
                            case "o":
                                c += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += l("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += d("M", t.getMonth(), r, o);
                                break;
                            case "y":
                                c += s("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                c += t.getTime();
                                break;
                            case "!":
                                c += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                s("'") ? c += "'" : u = !0;
                                break;
                            default:
                                c += e.charAt(h)
                        }
                return c
            },
            _possibleChars: function(e) {
                for (var t = "", i = !1, n = function(t) {
                        var i = a + 1 < e.length && e.charAt(a + 1) == t;
                        return i && a++, i
                    }, a = 0; a < e.length; a++)
                    if (i) "'" != e.charAt(a) || n("'") ? t += e.charAt(a) : i = !1;
                    else switch (e.charAt(a)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            t += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? t += "'" : i = !0;
                            break;
                        default:
                            t += e.charAt(a)
                    }
                return t
            },
            _get: function(e, t) {
                return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() != e.lastVal) {
                    var i, n, a = this._get(e, "dateFormat"),
                        r = e.lastVal = e.input ? e.input.val() : null;
                    i = n = this._getDefaultDate(e);
                    var o = this._getFormatConfig(e);
                    try {
                        i = this.parseDate(a, r, o) || n
                    } catch (s) {
                        this.log(s), r = t ? "" : r
                    }
                    e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = r ? i.getDate() : 0, e.currentMonth = r ? i.getMonth() : 0, e.currentYear = r ? i.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(e, t, i) {
                var n = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    a = function(t) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                        } catch (i) {}
                        for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), s = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = s.exec(t); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    o += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    o += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    r += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(a, r));
                                    break;
                                case "y":
                                case "Y":
                                    a += parseInt(l[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(a, r))
                            }
                            l = s.exec(t)
                        }
                        return new Date(a, r, o)
                    },
                    r = null == t || "" === t ? i : "string" == typeof t ? a(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime());
                return r = r && "Invalid Date" == r.toString() ? i : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, i) {
                var n = !t,
                    a = e.selectedMonth,
                    r = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), a == e.selectedMonth && r == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function(e) {
                var t = this._get(e, "stepMonths"),
                    i = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -t, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +t, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                                !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(e) {
                var t = new Date;
                t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
                var i = this._get(e, "isRTL"),
                    n = this._get(e, "showButtonPanel"),
                    a = this._get(e, "hideIfNoPrevNext"),
                    r = this._get(e, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(e),
                    s = this._get(e, "showCurrentAtPos"),
                    l = this._get(e, "stepMonths"),
                    d = 1 != o[0] || 1 != o[1],
                    c = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    u = this._getMinMaxDate(e, "min"),
                    h = this._getMinMaxDate(e, "max"),
                    p = e.drawMonth - s,
                    f = e.drawYear;
                if (0 > p && (p += 12, f--), h) {
                    var m = this._daylightSavingAdjust(new Date(h.getFullYear(), h.getMonth() - o[0] * o[1] + 1, h.getDate()));
                    for (m = u && u > m ? u : m; this._daylightSavingAdjust(new Date(f, p, 1)) > m;) p--, 0 > p && (p = 11, f--)
                }
                e.drawMonth = p, e.drawYear = f;
                var g = this._get(e, "prevText");
                g = r ? this.formatDate(g, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : g;
                var v = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev btn btn-link" data-handler="prev" data-event="click" title="' + g + '">' + (i ? '<i class="icon-circle-arrow-right"></i>' : '<i class="icon-circle-arrow-left"></i>') + "</a>" : a ? "" : '<a class="ui-datepicker-prev btn btn-link ui-state-disabled" title="' + g + '">' + (i ? '<i class="icon-circle-arrow-right"></i>' : '<i class="icon-circle-arrow-left"></i>') + "</a>",
                    y = this._get(e, "nextText");
                y = r ? this.formatDate(y, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : y;
                var b = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next btn btn-link" data-handler="next" data-event="click" title="' + y + '">' + (i ? '<i class="icon-circle-arrow-left"></i>' : '<i class="icon-circle-arrow-right"></i>') + "</a>" : a ? "" : '<a class="ui-datepicker-next btn btn-link ui-state-disabled" title="' + y + '">' + (i ? '<i class="icon-circle-arrow-left"></i>' : '<i class="icon-circle-arrow-right"></i>') + "</a>",
                    w = this._get(e, "currentText"),
                    x = this._get(e, "gotoCurrent") && e.currentDay ? c : t;
                w = r ? this.formatDate(w, x, this._getFormatConfig(e)) : w;
                var _ = e.inline ? "" : '<button type="button" class="ui-datepicker-close btn" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                    C = n ? '<div class="ui-datepicker-buttonpane ui-helper-clearfix">' + (i ? _ : "") + (this._isInRange(e, x) ? '<button type="button" class="ui-datepicker-current btn" data-handler="today" data-event="click">' + w + "</button>" : "") + (i ? "" : _) + "</div>" : "",
                    T = parseInt(this._get(e, "firstDay"), 10);
                T = isNaN(T) ? 0 : T;
                for (var k = this._get(e, "showWeek"), S = this._get(e, "dayNames"), D = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), I = this._get(e, "monthNames"), A = this._get(e, "monthNamesShort"), N = this._get(e, "beforeShowDay"), E = this._get(e, "showOtherMonths"), P = this._get(e, "selectOtherMonths"), M = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), O = "", L = 0; L < o[0]; L++) {
                    var R = "";
                    this.maxRows = 4;
                    for (var j = 0; j < o[1]; j++) {
                        var B = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)),
                            z = " ui-corner-all",
                            F = "";
                        if (d) {
                            if (F += '<div class="ui-datepicker-group', o[1] > 1) switch (j) {
                                case 0:
                                    F += " ui-datepicker-group-first", z = " ui-corner-" + (i ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    F += " ui-datepicker-group-last", z = " ui-corner-" + (i ? "left" : "right");
                                    break;
                                default:
                                    F += " ui-datepicker-group-middle", z = ""
                            }
                            F += '">'
                        }
                        F += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + z + '">' + (/all|left/.test(z) && 0 == L ? i ? b : v : "") + (/all|right/.test(z) && 0 == L ? i ? v : b : "") + this._generateMonthYearHeader(e, p, f, u, h, L > 0 || j > 0, I, A) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        for (var H = k ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", W = 0; 7 > W; W++) {
                            var V = (W + T) % 7;
                            H += "<th" + ((W + T + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + S[V] + '">' + D[V] + "</span></th>"
                        }
                        F += H + "</tr></thead><tbody>";
                        var Y = this._getDaysInMonth(f, p);
                        f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, Y));
                        var q = (this._getFirstDayOfMonth(f, p) - T + 7) % 7,
                            U = Math.ceil((q + Y) / 7),
                            X = d && this.maxRows > U ? this.maxRows : U;
                        this.maxRows = X;
                        for (var Q = this._daylightSavingAdjust(new Date(f, p, 1 - q)), K = 0; X > K; K++) {
                            F += "<tr>";
                            for (var G = k ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(Q) + "</td>" : "", W = 0; 7 > W; W++) {
                                var Z = N ? N.apply(e.input ? e.input[0] : null, [Q]) : [!0, ""],
                                    J = Q.getMonth() != p,
                                    ee = J && !P || !Z[0] || u && u > Q || h && Q > h;
                                G += '<td class="' + ((W + T + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (J ? " ui-datepicker-other-month" : "") + (Q.getTime() == B.getTime() && p == e.selectedMonth && e._keyEvent || M.getTime() == Q.getTime() && M.getTime() == B.getTime() ? " " + this._dayOverClass : "") + (ee ? " " + this._unselectableClass + " ui-state-disabled" : "") + (J && !E ? "" : " " + Z[1] + (Q.getTime() == c.getTime() ? " " + this._currentClass : "") + (Q.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (J && !E || !Z[2] ? "" : ' title="' + Z[2] + '"') + (ee ? "" : ' data-handler="selectDay" data-event="click" data-month="' + Q.getMonth() + '" data-year="' + Q.getFullYear() + '"') + ">" + (J && !E ? " " : ee ? '<span class="ui-state-default">' + Q.getDate() + "</span>" : '<a class="ui-state-default' + (Q.getTime() == t.getTime() ? " ui-state-highlight" : "") + (Q.getTime() == c.getTime() ? " ui-state-active" : "") + (J ? " ui-priority-secondary" : "") + '" href="#">' + Q.getDate() + "</a>") + "</td>", Q.setDate(Q.getDate() + 1), Q = this._daylightSavingAdjust(Q)
                            }
                            F += G + "</tr>"
                        }
                        p++, p > 11 && (p = 0, f++), F += "</tbody></table>" + (d ? "</div>" + (o[0] > 0 && j == o[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), R += F
                    }
                    O += R
                }
                return O += C + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, O
            },
            _generateMonthYearHeader: function(e, t, i, n, a, r, o, s) {
                var l = this._get(e, "changeMonth"),
                    d = this._get(e, "changeYear"),
                    c = this._get(e, "showMonthAfterYear"),
                    u = '<div class="ui-datepicker-title">',
                    h = "";
                if (r || !l) h += '<span class="ui-datepicker-month">' + o[t] + "</span>";
                else {
                    var p = n && n.getFullYear() == i,
                        f = a && a.getFullYear() == i;
                    h += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var m = 0; 12 > m; m++)(!p || m >= n.getMonth()) && (!f || m <= a.getMonth()) && (h += '<option value="' + m + '"' + (m == t ? ' selected="selected"' : "") + ">" + s[m] + "</option>");
                    h += "</select>"
                }
                if (c || (u += h + (!r && l && d ? "" : " ")), !e.yearshtml)
                    if (e.yearshtml = "", r || !d) u += '<span class="ui-datepicker-year">' + i + "</span>";
                    else {
                        var g = this._get(e, "yearRange").split(":"),
                            v = (new Date).getFullYear(),
                            y = function(e) {
                                var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? v : t
                            },
                            b = y(g[0]),
                            w = Math.max(b, y(g[1] || ""));
                        for (b = n ? Math.max(b, n.getFullYear()) : b, w = a ? Math.min(w, a.getFullYear()) : w, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; w >= b; b++) e.yearshtml += '<option value="' + b + '"' + (b == i ? ' selected="selected"' : "") + ">" + b + "</option>";
                        e.yearshtml += "</select>", u += e.yearshtml, e.yearshtml = null
                    } return u += this._get(e, "yearSuffix"), c && (u += (!r && l && d ? "" : " ") + h), u += "</div>"
            },
            _adjustInstDate: function(e, t, i) {
                var n = e.drawYear + ("Y" == i ? t : 0),
                    a = e.drawMonth + ("M" == i ? t : 0),
                    r = Math.min(e.selectedDay, this._getDaysInMonth(n, a)) + ("D" == i ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, a, r)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var i = this._getMinMaxDate(e, "min"),
                    n = this._getMinMaxDate(e, "max"),
                    a = i && i > t ? i : t;
                return a = n && a > n ? n : a
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function(e, t, i, n) {
                var a = this._getNumberOfMonths(e),
                    r = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : a[0] * a[1]), 1));
                return 0 > t && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(e, r)
            },
            _isInRange: function(e, t) {
                var i = this._getMinMaxDate(e, "min"),
                    n = this._getMinMaxDate(e, "max");
                return (!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, i, n) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var a = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), a, this._getFormatConfig(e))
            }
        }), $.fn.datepicker = function(e) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var t = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() {
                "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
            }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.1", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function i(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function n(e) {
            return t(s.json ? JSON.stringify(e) : String(e))
        }

        function a(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")), s.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function r(t, i) {
            var n = s.raw ? t : a(t);
            return e.isFunction(i) ? i(n) : n
        }
        var o = /\+/g,
            s = e.cookie = function(a, o, l) {
                if (arguments.length > 1 && !e.isFunction(o)) {
                    if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                        var d = l.expires,
                            c = l.expires = new Date;
                        c.setMilliseconds(c.getMilliseconds() + 864e5 * d)
                    }
                    return document.cookie = [t(a), "=", n(o), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var u = a ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
                    var m = h[p].split("="),
                        g = i(m.shift()),
                        v = m.join("=");
                    if (a === g) {
                        u = r(v, o);
                        break
                    }
                    a || void 0 === (v = r(v)) || (u[g] = v)
                }
                return u
            };
        s.defaults = {}, e.removeCookie = function(t, i) {
            return e.cookie(t, "", e.extend({}, i, {
                expires: -1
            })), !e.cookie(t)
        }
    }),
    function(e) {
        function t(e, t, i, n, a, r) {
            e = String(e);
            for (var o = 0, s = 0, l = e.length, d = "", c = 0; l > s;) {
                var u = e.charCodeAt(s);
                for (u = 256 > u ? i[u] : -1, o = (o << a) + u, c += a; c >= r;) {
                    c -= r;
                    var h = o >> c;
                    d += n.charAt(h), o ^= h << c
                }++s
            }
            return !t && c > 0 && (d += n.charAt(o << r - c)), d
        }
        for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", a = [256], r = [256], o = 0, s = {
                encode: function(e) {
                    var t = e.replace(/[\u0080-\u07ff]/g, function(e) {
                        var t = e.charCodeAt(0);
                        return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
                    }).replace(/[\u0800-\uffff]/g, function(e) {
                        var t = e.charCodeAt(0);
                        return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
                    });
                    return t
                },
                decode: function(e) {
                    var t = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(e) {
                        var t = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2);
                        return String.fromCharCode(t)
                    }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(e) {
                        var t = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1);
                        return String.fromCharCode(t)
                    });
                    return t
                }
            }; 256 > o;) {
            var l = String.fromCharCode(o);
            n += l, r[o] = o, a[o] = i.indexOf(l), ++o
        }
        var d = e.base64 = function(e, t, i) {
            return t ? d[e](t, i) : e ? null : this
        };
        d.btoa = d.encode = function(e, n) {
            return e = d.raw === !1 || d.utf8encode || n ? s.encode(e) : e, e = t(e, !1, r, i, 8, 6), e + "====".slice(e.length % 4 || 4)
        }, d.atob = d.decode = function(e, i) {
            e = String(e).split("=");
            var r = e.length;
            do --r, e[r] = t(e[r], !0, a, n, 6, 8); while (r > 0);
            return e = e.join(""), d.raw === !1 || d.utf8decode || i ? s.decode(e) : e
        }
    }(jQuery);

