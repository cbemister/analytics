< script >

	! function (a, b, c, d) {
		"use strict";
		var e = {
				elements: ['[data-index-position="1"]', '[data-index-position="2"]', '[data-index-position="3"]', '[data-index-position="4"]', '[data-index-position="5"]', '[data-index-position="6"]', '[data-index-position="7"]', '[data-index-position="8"]', '[data-index-position="9"]', '[data-index-position="10"]', '[data-index-position="12"]', '[data-index-position="12"]', '[data-index-position="13"]', '[data-index-position="14"]', '[data-index-position="15"]', '[data-index-position="16"]', '[data-index-position="17"]', '[data-index-position="18"]', '[data-index-position="19"]', '[data-index-position="20"]', '[data-index-position="21"]', '[data-index-position="22"]', '[data-index-osition="23"]', '[data-index-position="24"]', '[data-index-position="25"]', '[data-index-position="26"]', '[data-index-position="27"]', '[data-index-position="28"]', '[data-index-position="29"]', '[data-index-position="30"]', '[data-index-position="31"]', '[data-index-position="32"]', '[data-index-position="33"]', '[data-index-position="34"]', '[data-index-position="35"]', '.ddc-content.specials-listing .alert-info.alert', '[data-slide-id]'],
				minHeight: 0,
				percentage: 1,
				testing: !1,
				nonInteraction: 1,
				pixelDepth: !1
			},
			f = a(b),
			g = [];
		a.scrollDepth = function (d) {
			function h(b, c, e) {
				d.testing ? a("#console").html(b + ": " + c) : "undefined" != typeof dataLayer ? (dataLayer.push({
					event: "ScrollDistance",
					eventCategory: "Scroll Depth",
					eventAction: b,
					eventLabel: c,
					eventValue: 1,
					eventNonInteraction: !0
				}), arguments.length > 2 && dataLayer.push({
					event: "ScrollTiming",
					eventCategory: "Scroll Depth",
					eventAction: b,
					eventLabel: c,
					eventTiming: e
				})) : ("undefined" != typeof ga && (ga("send", "event", "Scroll Depth", b, c, 1, {
					nonInteraction: 1
				}), arguments.length > 2 && ga("send", "timing", "Scroll Depth", b, e, c)), "undefined" != typeof _gaq && (_gaq.push(["_trackEvent", "Scroll Depth", b, c, 1, !0]), arguments.length > 2 && _gaq.push(["_trackTiming", "Scroll Depth", b, e, c, 100])))
			}

			function i(a) {
				return {
					"25%": parseInt(.25 * a, 10),
					"50%": parseInt(.5 * a, 10),
					"75%": parseInt(.75 * a, 10),
					"100%": a - 1
				}
			}

			function j(b, c, d) {
				a.each(b, function (b, e) {
					a.inArray(b, g) === -1 && c >= e && (h("Percentage", b, d), g.push(b))
				})
			}

			function k(b, c, d) {
				a.each(b, function (b, e) {
					a.inArray(e, g) === -1 && a(e).length && c >= a(e).offset().top && (h("Elements", e, d), g.push(e))
				})
			}

			function l(a, b) {
				var c, d, e, f = null,
					g = 0,
					h = function () {
						g = new Date, f = null, e = a.apply(c, d)
					};
				return function () {
					var i = new Date;
					g || (g = i);
					var j = b - (i - g);
					return c = this, d = arguments, j <= 0 ? (clearTimeout(f), f = null, g = i, e = a.apply(c, d)) : f || (f = setTimeout(h, j)), e
				}
			}
			var m = +new Date;
			d = a.extend({}, e, d), a(c).height() < d.minHeight || (h("Percentage", "Baseline"), f.on("scroll.scrollDepth", l(function () {
				var e = a(c).height(),
					h = b.innerHeight ? b.innerHeight : f.height(),
					l = f.scrollTop() + h,
					n = i(e),
					o = +new Date - m;
				return g.length >= 4 + d.elements.length ? void f.off("scroll.scrollDepth") : (d.elements && k(d.elements, l, o), void(d.percentage && j(n, l, o)))
			}, 500)))
		}
	}(jQuery, window, document), jQuery.scrollDepth();

<
/script>
