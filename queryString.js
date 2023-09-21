(window.webpackJsonp = window.webpackJsonp || []).push([
	[14], {
		799: function(r, t, a) {
			"use strict";

			function e(r, t) {
				return Object.keys(t).reduce((function(a, e) {
					e.startsWith(r) && (a[e.substr(r.length)] = t[e]);
					return a
				}), {})
			}
			a.r(t), a.d(t, "queryString", (function() {
				return n
			}));
			var s = a(463),
				i = a(87);

			function n(r, t) {
				var a = document.createElement("a");
				a.href = t;
				var n = a.search.slice(1).split("&").reduce((function(r, t) {
						var a = t.split("="),
							e = a[0],
							i = a[1];
						return r[e] = Object(s.a)(i), r
					}), {}),
					u = [],
					d = n.ajs_uid,
					o = n.ajs_event,
					c = n.ajs_aid,
					j = Object(i.d)(r.options.useQueryString) ? r.options.useQueryString : {},
					_ = j.aid,
					v = void 0 === _ ? /.+/ : _,
					p = j.uid,
					f = void 0 === p ? /.+/ : p;
				if (c) {
					var y = Array.isArray(n.ajs_aid) ? n.ajs_aid[0] : n.ajs_aid;
					v.test(y) && r.setAnonymousId(y)
				}
				if (d) {
					var h = Array.isArray(n.ajs_uid) ? n.ajs_uid[0] : n.ajs_uid;
					if (f.test(h)) {
						var l = e("ajs_trait_", n);
						u.push(r.identify(h, l))
					}
				}
				if (o) {
					var A = Array.isArray(n.ajs_event) ? n.ajs_event[0] : n.ajs_event,
						b = e("ajs_prop_", n);
					u.push(r.track(A, b))
				}
				return Promise.all(u)
			}
		}
	}
]);