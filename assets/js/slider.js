+ function(e, f, b, j, c, i, k) { /*! Jssor */
	new(function() {});
	var d = e.$JssorEasing$ = {
		Hc: function(a) {
			return -b.cos(a * b.PI) / 2 + .5
		},
		Zc: function(a) {
			return a
		},
		Jf: function(a) {
			return a * a
		},
		fd: function(a) {
			return -a * (a - 2)
		},
		If: function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
		},
		Hf: function(a) {
			return a * a * a
		},
		Gf: function(a) {
			return (a -= 1) * a * a + 1
		},
		Ff: function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
		},
		Lf: function(a) {
			return a * a * a * a
		},
		Ef: function(a) {
			return -((a -= 1) * a * a * a - 1)
		},
		Cf: function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
		},
		Bf: function(a) {
			return a * a * a * a * a
		},
		Af: function(a) {
			return (a -= 1) * a * a * a * a + 1
		},
		zf: function(a) {
			return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
		},
		yf: function(a) {
			return 1 - b.cos(a * b.PI / 2)
		},
		xf: function(a) {
			return b.sin(a * b.PI / 2)
		},
		Df: function(a) {
			return -1 / 2 * (b.cos(b.PI * a) - 1)
		},
		Nf: function(a) {
			return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
		},
		Vf: function(a) {
			return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
		},
		Of: function(a) {
			return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
		},
		cg: function(a) {
			return -(b.sqrt(1 - a * a) - 1)
		},
		bg: function(a) {
			return b.sqrt(1 - (a -= 1) * a)
		},
		ag: function(a) {
			return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
		},
		Zf: function(a) {
			if (!a || a == 1) return a;
			var c = .3,
				d = .075;
			return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
		},
		Yf: function(a) {
			if (!a || a == 1) return a;
			var c = .3,
				d = .075;
			return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
		},
		Xf: function(a) {
			if (!a || a == 1) return a;
			var c = .45,
				d = .1125;
			return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
		},
		dg: function(a) {
			var b = 1.70158;
			return a * a * ((b + 1) * a - b)
		},
		Wf: function(a) {
			var b = 1.70158;
			return (a -= 1) * a * ((b + 1) * a + b) + 1
		},
		Uf: function(a) {
			var b = 1.70158;
			return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
		},
		Xc: function(a) {
			return 1 - d.uc(1 - a)
		},
		uc: function(a) {
			return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
		},
		Tf: function(a) {
			return a < 1 / 2 ? d.Xc(a * 2) * .5 : d.uc(a * 2 - 1) * .5 + .5
		},
		Sf: function() {
			return 1 - b.abs(1)
		},
		Rf: function(a) {
			return 1 - b.cos(a * b.PI * 2)
		},
		Qf: function(a) {
			return b.sin(a * b.PI * 2)
		},
		Pf: function(a) {
			return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
		},
		wf: function(a) {
			return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
		}
	}, g = e.$Jease$ = {
		vf: d.Hc,
		uf: d.Zc,
		lf: d.Jf,
		Ne: d.fd,
		Oe: d.If,
		Pe: d.Hf,
		Qe: d.Gf,
		Re: d.Ff,
		Se: d.Lf,
		Te: d.Ef,
		Ue: d.Cf,
		Ve: d.Bf,
		We: d.Af,
		Xe: d.zf,
		Ye: d.yf,
		Ze: d.xf,
		af: d.Df,
		bf: d.Nf,
		cf: d.Vf,
		df: d.Of,
		sf: d.cg,
		rf: d.bg,
		qf: d.ag,
		pf: d.Zf,
		of: d.Yf,
		nf: d.Xf,
		tf: d.dg,
		mf: d.Wf,
		kf: d.Uf,
		jf: d.Xc,
		hf: d.uc,
		gf: d.Tf,
		fg: d.Sf,
		ef: d.Rf,
		Mf: d.Qf,
		eg: d.Pf,
		vg: d.wf
	};
	e.$JssorDirection$ = {};
	var a = e.$Jssor$ = new function() {
			var g = this,
				Ab = /\S+/g,
				S = 1,
				tb = 2,
				Z = 3,
				wb = 4,
				db = 5,
				I, s = 0,
				l = 0,
				q = 0,
				J = 0,
				C = 0,
				B = navigator,
				ib = B.appName,
				n = B.userAgent;

			function Jb() {
				if (!I) {
					I = {
						Qg: "ontouchstart" in e || "createTouch" in f
					};
					var a;
					if (B.pointerEnabled || (a = B.msPointerEnabled)) I.vd = a ? "msTouchAction" : "touchAction"
				}
				return I
			}
			function t(i) {
				if (!s) {
					s = -1;
					if (ib == "Microsoft Internet Explorer" && !! e.attachEvent && !! e.ActiveXObject) {
						var g = n.indexOf("MSIE");
						s = S;
						q = o(n.substring(g + 5, n.indexOf(";", g))); /*@cc_on J=@_jscript_version@*/
						;
						l = f.documentMode || q
					} else if (ib == "Netscape" && !! e.addEventListener) {
						var d = n.indexOf("Firefox"),
							b = n.indexOf("Safari"),
							h = n.indexOf("Chrome"),
							c = n.indexOf("AppleWebKit");
						if (d >= 0) {
							s = tb;
							l = o(n.substring(d + 8))
						} else if (b >= 0) {
							var j = n.substring(0, b).lastIndexOf("/");
							s = h >= 0 ? wb : Z;
							l = o(n.substring(j + 1, b))
						} else {
							var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
							if (a) {
								s = S;
								l = q = o(a[1])
							}
						}
						if (c >= 0) C = o(n.substring(c + 12))
					} else {
						var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
						if (a) {
							s = db;
							l = o(a[2])
						}
					}
				}
				return i == s
			}
			function p() {
				return t(S)
			}
			function N() {
				return p() && (l < 6 || f.compatMode == "BackCompat")
			}
			function vb() {
				return t(Z)
			}
			function cb() {
				return t(db)
			}
			function ob() {
				return vb() && C > 534 && C < 535
			}
			function L() {
				return p() && l < 9
			}
			function qb(a) {
				var b;
				return function(d) {
					if (!b) {
						b = a;
						var c = a.substr(0, 1).toUpperCase() + a.substr(1);
						m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, f) {
							var e = a;
							if (f) e = g + c;
							if (d.style[e] != k) return b = e
						})
					}
					return b
				}
			}
			var pb = qb("transform");

			function hb(a) {
				return {}.toString.call(a)
			}
			var H;

			function Gb() {
				if (!H) {
					H = {};
					m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
						H["[object " + a + "]"] = a.toLowerCase()
					})
				}
				return H
			}
			function m(a, d) {
				if (hb(a) == "[object Array]") {
					for (var b = 0; b < a.length; b++) if (d(a[b], b, a)) return c
				} else for (var e in a) if (d(a[e], e, a)) return c
			}
			function z(a) {
				return a == j ? String(a) : Gb()[hb(a)] || "object"
			}
			function fb(a) {
				for (var b in a) return c
			}
			function x(a) {
				try {
					return z(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
				} catch (b) {}
			}
			function w(a, b) {
				return {
					x: a,
					y: b
				}
			}
			function lb(b, a) {
				setTimeout(b, a || 0)
			}
			function F(b, d, c) {
				var a = !b || b == "inherit" ? "" : b;
				m(d, function(c) {
					var b = c.exec(a);
					if (b) {
						var d = a.substr(0, b.index),
							e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
						a = d + e
					}
				});
				a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
				return a
			}
			function sb(b, a) {
				if (l < 9) b.style.filter = a
			}
			function Cb(f, a, i) {
				if (!J || J < 9) {
					var d = a.rb,
						e = a.qb,
						j = (a.q || 0) % 360,
						h = "";
					if (j || d != k || e != k) {
						if (d == k) d = 1;
						if (e == k) e = 1;
						var c = g.Rg(j / 180 * b.PI, d || 1, e || 1),
							i = g.Sg(c, a.X, a.bb);
						g.Bg(f, i.y);
						g.Jg(f, i.x);
						h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')"
					}
					var m = f.style.filter,
						n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
						l = F(m, [n], h);
					sb(f, l)
				}
			}
			g.Ag = Jb;
			g.Bd = p;
			g.gg = vb;
			g.xc = cb;
			g.Z = L;
			g.sd = function() {
				return l
			};
			g.kg = function() {
				t();
				return C
			};
			g.L = lb;

			function V(a) {
				a.constructor === V.caller && a.ud && a.ud.apply(a, V.caller.arguments)
			}
			g.ud = V;
			g.kb = function(a) {
				if (g.Dd(a)) a = f.getElementById(a);
				return a
			};

			function r(a) {
				return a || e.event
			}
			g.Id = r;
			g.vc = function(a) {
				a = r(a);
				return a.target || a.srcElement || f
			};
			g.Pd = function(a) {
				a = r(a);
				return {
					x: a.pageX || a.clientX || 0,
					y: a.pageY || a.clientY || 0
				}
			};

			function A(c, d, a) {
				if (a !== k) c.style[d] = a == k ? "" : a;
				else {
					var b = c.currentStyle || c.style;
					a = b[d];
					if (a == "" && e.getComputedStyle) {
						b = c.ownerDocument.defaultView.getComputedStyle(c, j);
						b && (a = b.getPropertyValue(d) || b[d])
					}
					return a
				}
			}
			function X(b, c, a, d) {
				if (a !== k) {
					if (a == j) a = "";
					else d && (a += "px");
					A(b, c, a)
				} else return o(A(b, c))
			}
			function h(c, a) {
				var d = a ? X : A,
					b;
				if (a & 4) b = qb(c);
				return function(e, f) {
					return d(e, b ? b(e) : c, f, a & 2)
				}
			}
			function Db(b) {
				if (p() && q < 9) {
					var a = /opacity=([^)]*)/.exec(b.style.filter || "");
					return a ? o(a[1]) / 100 : 1
				} else return o(b.style.opacity || "1")
			}
			function Fb(c, a, f) {
				if (p() && q < 9) {
					var h = c.style.filter || "",
						i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
						e = b.round(100 * a),
						d = "";
					if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
					var g = F(h, [i], d);
					sb(c, g)
				} else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
			}
			var yb = {
				q: ["rotate"],
				Fb: ["rotateX"],
				Gb: ["rotateY"],
				rb: ["scaleX", 2],
				qb: ["scaleY", 2],
				Vb: ["translateX", 1],
				Ub: ["translateY", 1],
				Sb: ["translateZ", 1],
				Rb: ["skewX"],
				Qb: ["skewY"]
			};

			function nb(e, c) {
				if (p() && l && l < 10) {
					delete c.Fb;
					delete c.Gb
				}
				var d = pb(e);
				if (d) {
					var b = "";
					a.c(c, function(e, c) {
						var a = yb[c];
						if (a) {
							var d = a[1] || 0;
							b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
						}
					});
					e.style[d] = b
				}
			}
			g.qg = function(b, a) {
				if (ob()) lb(g.G(j, nb, b, a));
				else(L() ? Cb : nb)(b, a)
			};
			g.md = h("transformOrigin", 4);
			g.rg = h("backfaceVisibility", 4);
			g.sg = h("transformStyle", 4);
			g.tg = h("perspective", 6);
			g.ug = h("perspectiveOrigin", 4);
			g.xg = function(a, c) {
				if (p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;
				else {
					var b = pb(a);
					if (b) {
						var f = "scale(" + c + ")",
							e = a.style[b],
							g = new RegExp(/[\s]*scale\(.*?\)/g),
							d = F(e, [g], f);
						a.style[b] = d
					}
				}
			};
			var bb = 0,
				ub = 0;
			g.zg = function(b, a) {
				return L() ? function() {
					var g = c,
						d = N() ? b.document.body : b.document.documentElement;
					if (d) {
						var f = d.offsetWidth - bb,
							e = d.offsetHeight - ub;
						if (f || e) {
							bb += f;
							ub += e
						} else g = i
					}
					g && a()
				} : a
			};
			g.Kb = function(b, a) {
				return function(c) {
					c = r(c);
					var e = c.type,
						d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
					(!d || d !== a && !g.Ug(a, d)) && b(c)
				}
			};
			g.e = function(a, d, b, c) {
				a = g.kb(a);
				if (a.addEventListener) {
					d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
					a.addEventListener(d, b, c)
				} else if (a.attachEvent) {
					a.attachEvent("on" + d, b);
					c && a.setCapture && a.setCapture()
				}
			};
			g.Q = function(a, c, d, b) {
				a = g.kb(a);
				if (a.removeEventListener) {
					c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
					a.removeEventListener(c, d, b)
				} else if (a.detachEvent) {
					a.detachEvent("on" + c, d);
					b && a.releaseCapture && a.releaseCapture()
				}
			};
			g.Pb = function(a) {
				a = r(a);
				a.preventDefault && a.preventDefault();
				a.cancel = c;
				a.returnValue = i
			};
			g.mg = function(a) {
				a = r(a);
				a.stopPropagation && a.stopPropagation();
				a.cancelBubble = c
			};
			g.G = function(d, c) {
				var a = [].slice.call(arguments, 2),
					b = function() {
						var b = a.concat([].slice.call(arguments, 0));
						return c.apply(d, b)
					};
				return b
			};
			g.Kg = function(a, b) {
				if (b == k) return a.textContent || a.innerText;
				var c = f.createTextNode(b);
				g.sc(a);
				a.appendChild(c)
			};
			g.S = function(d, c) {
				for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
				return b
			};

			function gb(a, c, e, b) {
				b = b || "u";
				for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
					if (R(a, b) == c) return a;
					if (!e) {
						var d = gb(a, c, e, b);
						if (d) return d
					}
				}
			}
			g.B = gb;

			function P(a, d, f, b) {
				b = b || "u";
				var c = [];
				for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
					R(a, b) == d && c.push(a);
					if (!f) {
						var e = P(a, d, f, b);
						if (e.length) c = c.concat(e)
					}
				}
				return c
			}
			function ab(a, c, d) {
				for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
					if (a.tagName == c) return a;
					if (!d) {
						var b = ab(a, c, d);
						if (b) return b
					}
				}
			}
			g.Dg = ab;

			function rb(a, c, e) {
				var b = [];
				for (a = a ? a.firstChild : j; a; a = a.nextSibling) if (a.nodeType == 1) {
					(!c || a.tagName == c) && b.push(a);
					if (!e) {
						var d = rb(a, c, e);
						if (d.length) b = b.concat(d)
					}
				}
				return b
			}
			g.Eg = rb;
			g.Gg = function(b, a) {
				return b.getElementsByTagName(a)
			};

			function y() {
				var e = arguments,
					d, c, b, a, g = 1 & e[0],
					f = 1 + g;
				d = e[f - 1] || {};
				for (; f < e.length; f++) if (c = e[f]) for (b in c) {
					a = c[b];
					if (a !== k) {
						a = c[b];
						var h = d[b];
						d[b] = g && (x(h) || x(a)) ? y(g, {}, h, a) : a
					}
				}
				return d
			}
			g.n = y;

			function W(f, g) {
				var d = {}, c, a, b;
				for (c in f) {
					a = f[c];
					b = g[c];
					if (a !== b) {
						var e;
						if (x(a) && x(b)) {
							a = W(a, b);
							e = !fb(a)
						}!e && (d[c] = a)
					}
				}
				return d
			}
			g.cd = function(a) {
				return z(a) == "function"
			};
			g.oc = function(a) {
				return z(a) == "array"
			};
			g.Dd = function(a) {
				return z(a) == "string"
			};
			g.Xb = function(a) {
				return !isNaN(o(a)) && isFinite(a)
			};
			g.c = m;
			g.wg = x;

			function O(a) {
				return f.createElement(a)
			}
			g.ob = function() {
				return O("DIV")
			};
			g.ng = function() {
				return O("SPAN")
			};
			g.ld = function() {};

			function T(b, c, a) {
				if (a == k) return b.getAttribute(c);
				b.setAttribute(c, a)
			}
			function R(a, b) {
				return T(a, b) || T(a, "data-" + b)
			}
			g.v = T;
			g.i = R;

			function u(b, a) {
				if (a == k) return b.className;
				b.className = a
			}
			g.id = u;

			function kb(b) {
				var a = {};
				m(b, function(b) {
					a[b] = b
				});
				return a
			}
			function mb(b, a) {
				return b.match(a || Ab)
			}
			function M(b, a) {
				return kb(mb(b || "", a))
			}
			g.lg = mb;

			function Y(b, c) {
				var a = "";
				m(c, function(c) {
					a && (a += b);
					a += c
				});
				return a
			}
			function E(a, c, b) {
				u(a, Y(" ", y(W(M(u(a)), M(c)), M(b))))
			}
			g.gd = function(a) {
				return a.parentNode
			};
			g.R = function(a) {
				g.mb(a, "none")
			};
			g.A = function(a, b) {
				g.mb(a, b ? "none" : "")
			};
			g.hg = function(b, a) {
				b.removeAttribute(a)
			};
			g.Ng = function() {
				return p() && l < 10
			};
			g.Cg = function(d, c) {
				if (c) d.style.clip = "rect(" + b.round(c.f) + "px " + b.round(c.p) + "px " + b.round(c.o) + "px " + b.round(c.g) + "px)";
				else {
					var g = d.style.cssText,
						f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
						e = F(g, f, "");
					a.Tb(d, e)
				}
			};
			g.fb = function() {
				return +new Date
			};
			g.F = function(b, a) {
				b.appendChild(a)
			};
			g.Nb = function(b, a, c) {
				(c || a.parentNode).insertBefore(b, a)
			};
			g.vb = function(a, b) {
				(b || a.parentNode).removeChild(a)
			};
			g.Yd = function(a, b) {
				m(a, function(a) {
					g.vb(a, b)
				})
			};
			g.sc = function(a) {
				g.Yd(g.S(a, c), a)
			};
			g.ae = function(a, b) {
				var c = g.gd(a);
				b & 1 && g.I(a, (g.k(c) - g.k(a)) / 2);
				// b & 2 && g.E(a, (g.l(c) - g.l(a)) / 2)
			};
			g.Wb = function(b, a) {
				return parseInt(b, a || 10)
			};
			var o = parseFloat;
			g.kc = o;
			g.Ug = function(b, a) {
				var c = f.body;
				while (a && b !== a && c !== a) try {
					a = a.parentNode
				} catch (d) {
					return i
				}
				return b === a
			};

			function U(d, c, b) {
				var a = d.cloneNode(!c);
				!b && g.hg(a, "id");
				return a
			}
			g.db = U;
			g.Db = function(e, f) {
				var a = new Image;

				function b(e, c) {
					g.Q(a, "load", b);
					g.Q(a, "abort", d);
					g.Q(a, "error", d);
					f && f(a, c)
				}
				function d(a) {
					b(a, c)
				}
				if (cb() && l < 11.6 || !e) b(!e);
				else {
					g.e(a, "load", b);
					g.e(a, "abort", d);
					g.e(a, "error", d);
					a.src = e
				}
			};
			g.ge = function(d, a, e) {
				var c = d.length + 1;

				function b(b) {
					c--;
					if (a && b && b.src == a.src) a = b;
					!c && e && e(a)
				}
				m(d, function(a) {
					g.Db(a.src, b)
				});
				b()
			};
			g.dd = function(b, g, i, h) {
				if (h) b = U(b);
				var c = P(b, g);
				if (!c.length) c = a.Gg(b, g);
				for (var f = c.length - 1; f > -1; f--) {
					var d = c[f],
						e = U(i);
					u(e, u(d));
					a.Tb(e, d.style.cssText);
					a.Nb(e, d);
					a.vb(d)
				}
				return b
			};

			function Hb(b) {
				var l = this,
					p = "",
					r = ["av", "pv", "ds", "active"],
					e = [],
					q, j = 0,
					h = 0,
					d = 0;

				function i() {
					E(b, q, e[d || j || h & 2 || h]);
					a.gb(b, "pointer-events", d ? "none" : "")
				}
				function c() {
					j = 0;
					i();
					g.Q(f, "mouseup", c);
					g.Q(f, "touchend", c);
					g.Q(f, "touchcancel", c)
				}
				function o(a) {
					if (d) g.Pb(a);
					else {
						j = 4;
						i();
						g.e(f, "mouseup", c);
						g.e(f, "touchend", c);
						g.e(f, "touchcancel", c)
					}
				}
				l.bd = function(a) {
					if (a === k) return h;
					h = a & 2 || a & 1;
					i()
				};
				l.ad = function(a) {
					if (a === k) return !d;
					d = a ? 0 : 3;
					i()
				};
				l.K = b = g.kb(b);
				var n = a.lg(u(b));
				if (n) p = n.shift();
				m(r, function(a) {
					e.push(a)
				});
				q = Y(" ", e);
				e.unshift("");
				g.e(b, "mousedown", o);
				g.e(b, "touchstart", o)
			}
			g.Mb = function(a) {
				return new Hb(a)
			};
			g.gb = A;
			g.nb = h("overflow");
			g.E = h("top", 2);
			g.I = h("left", 2);
			g.k = h("width", 2);
			g.l = h("height", 2);
			g.Jg = h("marginLeft", 2);
			g.Bg = h("marginTop", 2);
			g.C = h("position");
			g.mb = h("display");
			g.J = h("zIndex", 1);
			g.Cb = function(b, a, c) {
				if (a != k) Fb(b, a, c);
				else return Db(b)
			};
			g.Tb = function(a, b) {
				if (b != k) a.style.cssText = b;
				else return a.style.cssText
			};
			var Q = {
				s: g.Cb,
				f: g.E,
				g: g.I,
				N: g.k,
				M: g.l,
				Hb: g.C,
				P: g.J
			}, K;

			function G() {
				if (!K) K = y({
					a: g.Cg,
					z: g.qg
				}, Q);
				return K
			}
			function eb() {
				var a = {};
				a.z = a.z;
				a.z = a.q;
				a.z = a.Fb;
				a.z = a.Gb;
				a.z = a.Rb;
				a.z = a.Qb;
				a.z = a.Vb;
				a.z = a.Ub;
				a.z = a.Sb;
				return G()
			}
			g.me = G;
			g.Uc = eb;
			g.je = function(c, b) {
				G();
				var a = {};
				m(b, function(d, b) {
					if (Q[b]) a[b] = Q[b](c)
				});
				return a
			};
			g.V = function(c, b) {
				var a = G();
				m(b, function(d, b) {
					a[b] && a[b](c, d)
				})
			};
			g.oe = function(b, a) {
				eb();
				g.V(b, a)
			};
			var D = new function() {
					var a = this;

					function b(d, g) {
						for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++) for (var k = f[c] = [], b = 0; b < h; b++) {
							for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
							k[b] = e
						}
						return f
					}
					a.rb = function(b, c) {
						return a.Md(b, c, 0)
					};
					a.qb = function(b, c) {
						return a.Md(b, 0, c)
					};
					a.Md = function(a, c, d) {
						return b(a, [
							[c, 0],
							[0, d]
						])
					};
					a.Yb = function(d, c) {
						var a = b(d, [
							[c.x],
							[c.y]
						]);
						return w(a[0][0], a[1][0])
					}
				};
			g.Rg = function(d, a, c) {
				var e = b.cos(d),
					f = b.sin(d);
				return [[e * a, -f * c], [f * a, e * c]]
			};
			g.Sg = function(d, c, a) {
				var e = D.Yb(d, w(-c / 2, -a / 2)),
					f = D.Yb(d, w(c / 2, -a / 2)),
					g = D.Yb(d, w(c / 2, a / 2)),
					h = D.Yb(d, w(-c / 2, a / 2));
				return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
			};
			var zb = {
				j: 1,
				rb: 1,
				qb: 1,
				q: 0,
				Fb: 0,
				Gb: 0,
				Vb: 0,
				Ub: 0,
				Sb: 0,
				Rb: 0,
				Qb: 0
			};
			g.rc = function(b) {
				var c = b || {};
				if (b) if (a.cd(b)) c = {
					lb: c
				};
				else if (a.cd(b.a)) c.a = {
					lb: b.a
				};
				return c
			};

			function jb(c, a) {
				var b = {};
				m(c, function(c, d) {
					var e = c;
					if (a[d] != k) if (g.Xb(c)) e = c + a[d];
					else e = jb(c, a[d]);
					b[d] = e
				});
				return b
			}
			g.Ge = jb;
			g.xd = function(h, i, w, n, y, z, o) {
				var c = i;
				if (h) {
					c = {};
					for (var g in i) {
						var A = z[g] || 1,
							v = y[g] || [0, 1],
							e = (w - v[0]) / v[1];
						e = b.min(b.max(e, 0), 1);
						e = e * A;
						var u = b.floor(e);
						if (e != u) e -= u;
						var l = n.lb || d.Hc,
							m, B = h[g],
							q = i[g];
						if (a.Xb(q)) {
							l = n[g] || l;
							var x = l(e);
							m = B + q * x
						} else {
							m = a.n({
								yb: {}
							}, h[g]);
							a.c(q.yb || q, function(d, a) {
								if (n.a) l = n.a[a] || n.a.lb || l;
								var c = l(e),
									b = d * c;
								m.yb[a] = b;
								m[a] += b
							})
						}
						c[g] = m
					}
					var t, f = {
						X: o.X,
						bb: o.bb
					};
					a.c(zb, function(d, a) {
						t = t || i[a];
						var b = c[a];
						if (b != k) {
							if (b != d) f[a] = b;
							delete c[a]
						} else if (h[a] != k && h[a] != d) f[a] = h[a]
					});
					if (i.j && f.j) {
						f.rb = f.j;
						f.qb = f.j
					}
					c.z = f
				}
				if (i.a && o.T) {
					var p = c.a.yb,
						s = (p.f || 0) + (p.o || 0),
						r = (p.g || 0) + (p.p || 0);
					c.g = (c.g || 0) + r;
					c.f = (c.f || 0) + s;
					c.a.g -= r;
					c.a.p -= r;
					c.a.f -= s;
					c.a.o -= s
				}
				if (c.a && a.Ng() && !c.a.f && !c.a.g && c.a.p == o.X && c.a.o == o.bb) c.a = j;
				return c
			}
		};

	function m() {
		var b = this,
			d = [];

		function i(a, b) {
			d.push({
				mc: a,
				lc: b
			})
		}
		function h(b, c) {
			a.c(d, function(a, e) {
				a.mc == b && a.lc === c && d.splice(e, 1)
			})
		}
		b.zb = b.addEventListener = i;
		b.removeEventListener = h;
		b.m = function(b) {
			var c = [].slice.call(arguments, 1);
			a.c(d, function(a) {
				a.mc == b && a.lc.apply(e, c)
			})
		}
	}
	var l = e.$JssorAnimator$ = function(y, C, k, O, L, K) {
		y = y || 0;
		var d = this,
			q, n, o, u, z = 0,
			G, H, F, B, x = 0,
			h = 0,
			m = 0,
			D, l, g, f, p, w = [],
			A;

		function N(a) {
			g += a;
			f += a;
			l += a;
			h += a;
			m += a;
			x += a
		}
		function t(n) {
			var e = n;
			if (p && (e >= f || e <= g)) e = ((e - g) % p + p) % p + g;
			if (!D || u || h != e) {
				var i = b.min(e, f);
				i = b.max(i, g);
				if (!D || u || i != m) {
					if (K) {
						var j = (i - l) / (C || 1);
						if (k.Ic) j = 1 - j;
						var o = a.xd(L, K, j, G, F, H, k);
						a.c(o, function(b, a) {
							A[a] && A[a](O, b)
						})
					}
					d.Nc(m - l, i - l);
					m = i;
					a.c(w, function(b, c) {
						var a = n < h ? w[w.length - c - 1] : b;
						a.u(m - x)
					});
					var r = h,
						q = m;
					h = e;
					D = c;
					d.Ib(r, q)
				}
			}
		}
		function E(a, c, d) {
			c && a.O(f);
			if (!d) {
				g = b.min(g, a.Bc() + x);
				f = b.max(f, a.ab() + x)
			}
			w.push(a)
		}
		var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame;
		if (a.gg() && a.sd() < 7) r = j;
		r = r || function(b) {
			a.L(b, k.cb)
		};

		function I() {
			if (q) {
				var d = a.fb(),
					e = b.min(d - z, k.Kd),
					c = h + e * o;
				z = d;
				if (c * o >= n * o) c = n;
				t(c);
				if (!u && c * o >= n * o) J(B);
				else r(I)
			}
		}
		function s(e, i, j) {
			if (!q) {
				q = c;
				u = j;
				B = i;
				e = b.max(e, g);
				e = b.min(e, f);
				n = e;
				o = n < h ? -1 : 1;
				d.Nd();
				z = a.fb();
				r(I)
			}
		}
		function J(a) {
			if (q) {
				u = q = B = i;
				d.Jd();
				a && a()
			}
		}
		d.qd = function(a, b, c) {
			s(a ? h + a : f, b, c)
		};
		d.Cd = s;
		d.pb = J;
		d.ce = function(a) {
			s(a)
		};
		d.W = function() {
			return h
		};
		d.Fd = function() {
			return n
		};
		d.wb = function() {
			return m
		};
		d.u = t;
		d.T = function(a) {
			t(h + a)
		};
		d.rd = function() {
			return q
		};
		d.Je = function(a) {
			p = a
		};
		d.O = N;
		d.D = function(a, b) {
			E(a, 0, b)
		};
		d.tc = function(a) {
			E(a, 1)
		};
		d.le = function(a) {
			f += a
		};
		d.Bc = function() {
			return g
		};
		d.ab = function() {
			return f
		};
		d.Ib = d.Nd = d.Jd = d.Nc = a.ld;
		d.jc = a.fb();
		k = a.n({
			cb: 16,
			Kd: 50
		}, k);
		p = k.yd;
		A = a.n({}, a.me(), k.zc);
		g = l = y;
		f = y + C;
		H = k.cc || {};
		F = k.dc || {};
		G = a.rc(k.H)
	};
	var o = e.$JssorSlideshowFormations$ = new function() {
			var h = this;

			function g(b, a, c) {
				c.push(a);
				b[a] = b[a] || [];
				b[a].push(c)
			}
			h.te = function(d) {
				for (var e = [], a, c = 0; c < d.U; c++) for (a = 0; a < d.r; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
				return e
			}
		};
	e.$JssorSlideshowRunner$ = function(n, s, q, t, y) {
		var f = this,
			u, g, e, x = 0,
			w = t.eh,
			r, h = 8;

		function k(g, f) {
			var e = {
				cb: f,
				ac: 1,
				L: 0,
				r: 1,
				U: 1,
				s: 0,
				j: 0,
				a: 0,
				T: i,
				qc: i,
				Ic: i,
				Be: o.te,
				Yc: {
					Ce: 0,
					De: 0
				},
				H: d.Hc,
				cc: {},
				ic: [],
				dc: {}
			};
			a.n(e, g);
			e.H = a.rc(e.H);
			e.He = b.ceil(e.ac / e.cb);
			e.Ie = function(b, a) {
				b /= e.r;
				a /= e.U;
				var f = b + "x" + a;
				if (!e.ic[f]) {
					e.ic[f] = {
						N: b,
						M: a
					};
					for (var c = 0; c < e.r; c++) for (var d = 0; d < e.U; d++) e.ic[f][d + "," + c] = {
						f: d * a,
						p: c * b + b,
						o: d * a + a,
						g: c * b
					}
				}
				return e.ic[f]
			};
			if (e.nc) {
				e.nc = k(e.nc, f);
				e.qc = c
			}
			return e
		}
		function p(A, h, d, v, n, l) {
			var y = this,
				t, u = {}, j = {}, m = [],
				f, e, r, p = d.Yc.Ce || 0,
				q = d.Yc.De || 0,
				g = d.Ie(n, l),
				o = B(d),
				C = o.length - 1,
				s = d.ac + d.L * C,
				w = v + s,
				k = d.qc,
				x;
			w += 50;

			function B(a) {
				var b = a.Be(a);
				return a.Ic ? b.reverse() : b
			}
			y.hd = w;
			y.hc = function(c) {
				c -= v;
				var e = c < s;
				if (e || x) {
					x = e;
					if (!k) c = s - c;
					var f = b.ceil(c / d.cb);
					a.c(j, function(c, e) {
						var d = b.max(f, c.Td);
						d = b.min(d, c.length - 1);
						if (c.Qc != d) {
							if (!c.Qc && !k) a.A(m[e]);
							else d == c.de && k && a.R(m[e]);
							c.Qc = d;
							a.oe(m[e], c[d])
						}
					})
				}
			};
			h = a.db(h);
			if (a.Z()) {
				var D = !h["no-image"],
					z = a.Eg(h);
				a.c(z, function(b) {
					(D || b["jssor-slider"]) && a.Cb(b, a.Cb(b), c)
				})
			}
			a.c(o, function(h, m) {
				a.c(h, function(G) {
					var K = G[0],
						J = G[1],
						v = K + "," + J,
						o = i,
						s = i,
						x = i;
					if (p && J % 2) {
						if (p & 3) o = !o;
						if (p & 12) s = !s;
						if (p & 16) x = !x
					}
					if (q && K % 2) {
						if (q & 3) o = !o;
						if (q & 12) s = !s;
						if (q & 16) x = !x
					}
					d.f = d.f || d.a & 4;
					d.o = d.o || d.a & 8;
					d.g = d.g || d.a & 1;
					d.p = d.p || d.a & 2;
					var E = s ? d.o : d.f,
						B = s ? d.f : d.o,
						D = o ? d.p : d.g,
						C = o ? d.g : d.p;
					d.a = E || B || D || C;
					r = {};
					e = {
						f: 0,
						g: 0,
						s: 1,
						N: n,
						M: l
					};
					f = a.n({}, e);
					t = a.n({}, g[v]);
					if (d.s) e.s = 2 - d.s;
					if (d.P) {
						e.P = d.P;
						f.P = 0
					}
					var I = d.r * d.U > 1 || d.a;
					if (d.j || d.q) {
						var H = c;
						if (a.Z()) if (d.r * d.U > 1) H = i;
						else I = i;
						if (H) {
							e.j = d.j ? d.j - 1 : 1;
							f.j = 1;
							if (a.Z() || a.xc()) e.j = b.min(e.j, 2);
							var N = d.q || 0;
							e.q = N * 360 * (x ? -1 : 1);
							f.q = 0
						}
					}
					if (I) {
						var h = t.yb = {};
						if (d.a) {
							var w = d.Ud || 1;
							if (E && B) {
								h.f = g.M / 2 * w;
								h.o = -h.f
							} else if (E) h.o = -g.M * w;
							else if (B) h.f = g.M * w;
							if (D && C) {
								h.g = g.N / 2 * w;
								h.p = -h.g
							} else if (D) h.p = -g.N * w;
							else if (C) h.g = g.N * w
						}
						r.a = t;
						f.a = g[v]
					}
					var L = o ? 1 : -1,
						M = s ? 1 : -1;
					if (d.x) e.g += n * d.x * L;
					if (d.y) e.f += l * d.y * M;
					a.c(e, function(b, c) {
						if (a.Xb(b)) if (b != f[c]) r[c] = b - f[c]
					});
					u[v] = k ? f : e;
					var F = d.He,
						A = b.round(m * d.L / d.cb);
					j[v] = new Array(A);
					j[v].Td = A;
					j[v].de = A + F - 1;
					for (var z = 0; z <= F; z++) {
						var y = a.xd(f, r, z / F, d.H, d.dc, d.cc, {
							T: d.T,
							X: n,
							bb: l
						});
						y.P = y.P || 1;
						j[v].push(y)
					}
				})
			});
			o.reverse();
			a.c(o, function(b) {
				a.c(b, function(c) {
					var f = c[0],
						e = c[1],
						d = f + "," + e,
						b = h;
					if (e || f) b = a.db(h);
					a.V(b, u[d]);
					a.nb(b, "hidden");
					a.C(b, "absolute");
					A.Xd(b);
					m[d] = b;
					a.A(b, !k)
				})
			})
		}
		function v() {
			var a = this,
				b = 0;
			l.call(a, 0, u);
			a.Ib = function(c, a) {
				if (a - b > h) {
					b = a;
					e && e.hc(a);
					g && g.hc(a)
				}
			};
			a.hb = r
		}
		f.be = function() {
			var a = 0,
				c = t.sb,
				d = c.length;
			if (w) a = x++ % d;
			else a = b.floor(b.random() * d);
			c[a] && (c[a].jb = a);
			return c[a]
		};
		f.Vd = function(w, x, j, l, a) {
			r = a;
			a = k(a, h);
			var i = l.Tc,
				d = j.Tc;
			i["no-image"] = !l.ec;
			d["no-image"] = !j.ec;
			var m = i,
				o = d,
				v = a,
				c = a.nc || k({}, h);
			if (!a.qc) {
				m = d;
				o = i
			}
			var t = c.O || 0;
			g = new p(n, o, c, b.max(t - c.cb, 0), s, q);
			e = new p(n, m, v, b.max(c.cb - t, 0), s, q);
			g.hc(0);
			e.hc(0);
			u = b.max(g.hd, e.hd);
			f.jb = w
		};
		f.ub = function() {
			n.ub();
			g = j;
			e = j
		};
		f.Sd = function() {
			var a = j;
			if (e) a = new v;
			return a
		};
		if (a.Z() || a.xc() || y && a.kg() < 537) h = 16;
		m.call(f);
		l.call(f, -1e7, 1e7)
	};
	var h = e.$JssorSlider$ = function(q, cc) {
		var o = this;

		function yc() {
			var a = this;
			l.call(a, -1e8, 2e8);
			a.Rd = function() {
				var c = a.wb(),
					d = b.floor(c),
					f = t(d),
					e = c - b.floor(c);
				return {
					jb: f,
					jg: d,
					Hb: e
				}
			};
			a.Ib = function(d, a) {
				var e = b.floor(a);
				if (e != a && a > d) e++;
				Rb(e, c);
				o.m(h.Le, t(a), t(d), a, d)
			}
		}
		function xc() {
			var b = this;
			l.call(b, 0, 0, {
				yd: r
			});
			a.c(C, function(a) {
				D & 1 && a.Je(r);
				b.tc(a);
				a.O(ib / Yb)
			})
		}
		function wc() {
			var a = this,
				b = Tb.K;
			l.call(a, -1, 2, {
				H: d.Zc,
				zc: {
					Hb: Xb
				},
				yd: r
			}, b, {
				Hb: 1
			}, {
				Hb: -2
			});
			a.bc = b
		}
		function jc(n, m) {
			var a = this,
				d, e, f, k, b;
			l.call(a, -1e8, 2e8, {
				Kd: 100
			});
			a.Nd = function() {
				M = c;
				S = j;
				o.m(h.Ae, t(w.W()), w.W())
			};
			a.Jd = function() {
				M = i;
				k = i;
				var a = w.Rd();
				o.m(h.ze, t(w.W()), w.W());
				!a.Hb && Ac(a.jg, s)
			};
			a.Ib = function(i, h) {
				var a;
				if (k) a = b;
				else {
					a = e;
					if (f) {
						var c = h / f;
						a = g.ye(c) * (e - d) + d
					}
				}
				w.u(a)
			};
			a.gc = function(b, g, c, h) {
				d = b;
				e = g;
				f = c;
				w.u(b);
				a.u(0);
				a.Cd(c, h)
			};
			a.ve = function(d) {
				k = c;
				b = d;
				a.qd(d, j, c)
			};
			a.se = function(a) {
				b = a
			};
			w = new yc;
			w.D(n);
			w.D(m)
		}
		function lc() {
			var c = this,
				b = Vb();
			a.J(b, 0);
			a.gb(b, "pointerEvents", "none");
			c.K = b;
			c.Xd = function(c) {
				a.F(b, c);
				a.A(b)
			};
			c.ub = function() {
				a.R(b);
				a.sc(b)
			}
		}
		function vc(n, e) {
			var d = this,
				q, L, v, k, y = [],
				x, B, W, G, Q, F, f, w, p;
			l.call(d, -u, u + 1, {});

			function E(b) {
				q && q.tb();
				T(n, b, 0);
				F = c;
				q = new I.Y(n, I, a.kc(a.i(n, "idle")) || ic);
				q.u(0)
			}
			function Z() {
				q.jc < I.jc && E()
			}
			function M(p, r, n) {
				if (!G) {
					G = c;
					if (k && n) {
						var f = n.width,
							b = n.height,
							m = f,
							l = b;
						if (f && b && g.Eb) {
							if (g.Eb & 3 && (!(g.Eb & 4) || f > K || b > J)) {
								var j = i,
									q = K / J * b / f;
								if (g.Eb & 1) j = q > 1;
								else if (g.Eb & 2) j = q < 1;
								m = j ? f * J / b : K;
								l = j ? J : b * K / f
							}
							a.k(k, m);
							a.l(k, l);
							a.E(k, (J - l) / 2);
							a.I(k, (K - m) / 2)
						}
						a.C(k, "absolute");
						o.m(h.re, e)
					}
				}
				a.R(r);
				p && p(d)
			}
			function Y(b, c, f, g) {
				if (g == S && s == e && N) if (!zc) {
					var a = t(b);
					A.Vd(a, e, c, d, f);
					c.qe();
					U.O(a - U.Bc() - 1);
					U.u(a);
					z.gc(b, b, 0)
				}
			}
			function cb(b) {
				if (b == S && s == e) {
					if (!f) {
						var a = j;
						if (A) if (A.jb == e) a = A.Sd();
						else A.ub();
						Z();
						f = new sc(n, e, a, q);
						f.Rc(p)
					}!f.rd() && f.wc()
				}
			}
			function R(c, h, l) {
				if (c == e) {
					if (c != h) C[h] && C[h].ke();
					else !l && f && f.ie();
					p && p.ad();
					var m = S = a.fb();
					d.Db(a.G(j, cb, m))
				} else {
					var k = b.min(e, c),
						i = b.max(e, c),
						o = b.min(i - k, k + r - i),
						n = u + g.Ke - 1;
					(!Q || o <= n) && d.Db()
				}
			}
			function db() {
				if (s == e && f) {
					f.pb();
					p && p.he();
					p && p.we();
					f.td()
				}
			}
			function eb() {
				s == e && f && f.pb()
			}
			function ab(a) {
				!P && o.m(h.Fe, e, a)
			}
			function O() {
				p = w.pInstance;
				f && f.Rc(p)
			}
			d.Db = function(d, b) {
				b = b || v;
				if (y.length && !G) {
					a.A(b);
					if (!W) {
						W = c;
						o.m(h.fe, e);
						a.c(y, function(b) {
							if (!a.v(b, "src")) {
								b.src = a.i(b, "src2");
								a.mb(b, b["display-origin"])
							}
						})
					}
					a.ge(y, k, a.G(j, M, d, b))
				} else M(d, b)
			};
			d.ue = function() {
				var h = e;
				if (g.wd < 0) h -= r;
				var c = h + g.wd * qc;
				if (D & 2) c = t(c);
				if (!(D & 1)) c = b.max(0, b.min(c, r - u));
				if (c != e) {
					if (A) {
						var d = A.be(r);
						if (d) {
							var i = S = a.fb(),
								f = C[t(c)];
							return f.Db(a.G(j, Y, c, f, d, i), v)
						}
					}
					bb(c)
				}
			};
			d.yc = function() {
				R(e, e, c)
			};
			d.ke = function() {
				p && p.he();
				p && p.we();
				d.Od();
				f && f.Wd();
				f = j;
				E()
			};
			d.qe = function() {
				a.R(n)
			};
			d.Od = function() {
				a.A(n)
			};
			d.ee = function() {
				p && p.ad()
			};

			function T(b, d, e) {
				if (a.v(b, "jssor-slider")) return;
				if (!F) {
					if (b.tagName == "IMG") {
						y.push(b);
						if (!a.v(b, "src")) {
							Q = c;
							b["display-origin"] = a.mb(b);
							a.R(b)
						}
					}
					a.Z() && a.J(b, (a.J(b) || 0) + 1)
				}
				var f = a.S(b);
				a.c(f, function(f) {
					var h = f.tagName,
						j = a.i(f, "u");
					if (j == "player" && !w) {
						w = f;
						if (w.pInstance) O();
						else a.e(w, "dataavailable", O)
					}
					if (j == "caption") {
						if (d) {
							a.md(f, a.i(f, "to"));
							a.rg(f, a.i(f, "bf"));
							a.sg(f, "preserve-3d")
						} else if (!a.Bd()) {
							var g = a.db(f, i, c);
							a.Nb(g, f, b);
							a.vb(f, b);
							f = g;
							d = c
						}
					} else if (!F && !e && !k) {
						if (h == "A") {
							if (a.i(f, "u") == "image") k = a.Dg(f, "IMG");
							else k = a.B(f, "image", c);
							if (k) {
								x = f;
								a.mb(x, "block");
								a.V(x, V);
								B = a.db(x, c);
								a.C(x, "relative");
								a.Cb(B, 0);
								a.gb(B, "backgroundColor", "#000")
							}
						} else if (h == "IMG" && a.i(f, "u") == "image") k = f;
						if (k) {
							k.border = 0;
							a.V(k, V)
						}
					}
					T(f, d, e + 1)
				})
			}
			d.Nc = function(c, b) {
				var a = u - b;
				Xb(L, a)
			};
			d.jb = e;
			m.call(d);
			a.tg(n, a.i(n, "p"));
			a.ug(n, a.i(n, "po"));
			var H = a.B(n, "thumb", c);
			if (H) {
				d.Zd = a.db(H);
				a.R(H)
			}
			a.A(n);
			v = a.db(fb);
			a.J(v, 1e3);
			a.e(n, "click", ab);
			E(c);
			d.ec = k;
			d.Ad = B;
			d.Tc = n;
			d.bc = L = n;
			a.F(L, v);
			o.zb(203, R);
			o.zb(28, eb);
			o.zb(24, db)
		}
		function sc(y, f, p, q) {
			var b = this,
				m = 0,
				u = 0,
				g, j, e, d, k, t, r, n = C[f];
			l.call(b, 0, 0);

			function v() {
				a.sc(L);
				Zb && k && n.Ad && a.F(L, n.Ad);
				a.A(L, !k && n.ec)
			}
			function w() {
				b.wc()
			}
			function x(a) {
				r = a;
				b.pb();
				b.wc()
			}
			b.wc = function() {
				var a = b.wb();
				if (!B && !M && !r && s == f) {
					if (!a) {
						if (g && !k) {
							k = c;
							b.td(c);
							o.m(h.Qd, f, m, u, g, d)
						}
						v()
					}
					var i, p = h.Sc;
					if (a != d) if (a == e) i = d;
					else if (a == j) i = e;
					else if (!a) i = j;
					else i = b.Fd();
					o.m(p, f, a, m, j, e, d);
					var l = N && (!E || F);
					if (a == d)(e != d && !(E & 12) || l) && n.ue();
					else(l || a != e) && b.Cd(i, w)
				}
			};
			b.ie = function() {
				e == d && e == b.wb() && b.u(j)
			};
			b.Wd = function() {
				A && A.jb == f && A.ub();
				var a = b.wb();
				a < d && o.m(h.Sc, f, -a - 1, m, j, e, d)
			};
			b.td = function(b) {
				p && a.nb(jb, b && p.hb.Yg ? "" : "hidden")
			};
			b.Nc = function(b, a) {
				if (k && a >= g) {
					k = i;
					v();
					n.Od();
					A.ub();
					o.m(h.pe, f, m, u, g, d)
				}
				o.m(h.xe, f, a, m, j, e, d)
			};
			b.Rc = function(a) {
				if (a && !t) {
					t = a;
					a.zb($JssorPlayer$.ne, x)
				}
			};
			p && b.tc(p);
			g = b.ab();
			b.tc(q);
			j = g + q.Jb;
			e = g + q.Lb;
			d = b.ab()
		}
		function Xb(g, f) {
			var e = x > 0 ? x : eb,
				c = zb * f * (e & 1),
				d = Ab * f * (e >> 1 & 1);
			c = b.round(c);
			d = b.round(d);
			a.I(g, c);
			a.E(g, d)
		}
		function Nb() {
			pb = M;
			Ib = z.Fd();
			G = w.W()
		}
		function ec() {
			Nb();
			if (B || !F && E & 12) {
				z.pb();
				o.m(h.Ee)
			}
		}
		function bc(e) {
			if (!B && (F || !(E & 12)) && !z.rd()) {
				var c = w.W(),
					a = b.ceil(G);
				if (e && b.abs(H) >= g.nd) {
					a = b.ceil(c);
					a += hb
				}
				if (!(D & 1)) a = b.min(r - u, b.max(a, 0));
				var d = b.abs(a - c);
				d = 1 - b.pow(1 - d, 5);
				if (!P && pb) z.ce(Ib);
				else if (c == a) {
					sb.ee();
					sb.yc()
				} else z.gc(c, a, d * Sb)
			}
		}
		function Hb(b) {
			!a.i(a.vc(b), "nodrag") && a.Pb(b)
		}
		function oc(a) {
			Wb(a, 1)
		}
		function Wb(b, d) {
			b = a.Id(b);
			var k = a.vc(b);
			if (!O && !a.i(k, "nodrag") && pc() && (!d || b.touches.length == 1)) {
				B = c;
				yb = i;
				S = j;
				a.e(f, d ? "touchmove" : "mousemove", Bb);
				a.fb();
				P = 0;
				ec();
				if (!pb) x = 0;
				if (d) {
					var g = b.touches[0];
					ub = g.clientX;
					vb = g.clientY
				} else {
					var e = a.Pd(b);
					ub = e.x;
					vb = e.y
				}
				H = 0;
				gb = 0;
				hb = 0;
				o.m(h.ff, t(G), G, b)
			}
		}
		function Bb(e) {
			if (B) {
				e = a.Id(e);
				var f;
				if (e.type != "mousemove") {
					var l = e.touches[0];
					f = {
						x: l.clientX,
						y: l.clientY
					}
				} else f = a.Pd(e);
				if (f) {
					var j = f.x - ub,
						k = f.y - vb;
					if (b.floor(G) != G) x = x || eb & O;
					if ((j || k) && !x) {
						if (O == 3) if (b.abs(k) > b.abs(j)) x = 2;
						else x = 1;
						else x = O;
						if (mb && x == 1 && b.abs(k) - b.abs(j) > 3) yb = c
					}
					if (x) {
						var d = k,
							i = Ab;
						if (x == 1) {
							d = j;
							i = zb
						}
						if (!(D & 1)) {
							if (d > 0) {
								var g = i * s,
									h = d - g;
								if (h > 0) d = g + b.sqrt(h) * 5
							}
							if (d < 0) {
								var g = i * (r - u - s),
									h = -d - g;
								if (h > 0) d = -g - b.sqrt(h) * 5
							}
						}
						if (H - gb < -2) hb = 0;
						else if (H - gb > 2) hb = -1;
						gb = H;
						H = d;
						rb = G - H / i / (Y || 1);
						if (H && x && !yb) {
							a.Pb(e);
							if (!M) z.ve(rb);
							else z.se(rb)
						}
					}
				}
			}
		}
		function ab() {
			nc();
			if (B) {
				B = i;
				a.fb();
				a.Q(f, "mousemove", Bb);
				a.Q(f, "touchmove", Bb);
				P = H;
				z.pb();
				var b = w.W();
				o.m(h.Me, t(b), b, t(G), G);
				E & 12 && Nb();
				bc(c)
			}
		}
		function fc(c) {
			if (P) {
				a.mg(c);
				var b = a.vc(c);
				while (b && v !== b) {
					b.tagName == "A" && a.Pb(c);
					try {
						b = b.parentNode
					} catch (d) {
						break
					}
				}
			}
		}
		function hc(a) {
			C[s];
			s = t(a);
			sb = C[s];
			Rb(a);
			return s
		}
		function Ac(a, b) {
			x = 0;
			hc(a);
			o.m(h.og, t(a), b)
		}
		function Rb(b, c) {
			wb = b;
			a.c(T, function(a) {
				a.Oc(t(b), b, c)
			})
		}
		function pc() {
			var b = h.ed || 0,
				a = X;
			if (mb) a & 1 && (a &= 1);
			h.ed |= a;
			return O = a & ~b
		}
		function nc() {
			if (O) {
				h.ed &= ~X;
				O = 0
			}
		}
		function Vb() {
			var b = a.ob();
			a.V(b, V);
			a.C(b, "absolute");
			return b
		}
		function t(a) {
			return (a % r + r) % r
		}
		function gc(a, c) {
			if (c) if (!D) {
				a = b.min(b.max(a + wb, 0), r - u);
				c = i
			} else if (D & 2) {
				a = t(a + wb);
				c = i
			}
			bb(a, g.Gc, c)
		}
		function xb() {
			a.c(T, function(a) {
				a.Kc(a.Ob.Vg <= F)
			})
		}
		function Cc() {
			if (!F) {
				F = 1;
				xb();
				if (!B) {
					E & 12 && bc();
					E & 3 && C[s].yc()
				}
			}
		}
		function Bc() {
			if (F) {
				F = 0;
				xb();
				B || !(E & 12) || ec()
			}
		}
		function Dc() {
			V = {
				N: K,
				M: J,
				f: 0,
				g: 0
			};
			a.c(Q, function(b) {
				a.V(b, V);
				a.C(b, "absolute");
				a.nb(b, "hidden");
				a.R(b)
			});
			a.V(fb, V)
		}
		function ob(b, a) {
			bb(b, a, c)
		}
		function bb(f, e, l) {
			if (Pb && (!B && (F || !(E & 12)) || g.jd)) {
				M = c;
				B = i;
				z.pb();
				if (e == k) e = Sb;
				var d = Cb.wb(),
					a = f;
				if (l) {
					a = d + f;
					if (f > 0) a = b.ceil(a);
					else a = b.floor(a)
				}
				if (D & 2) a = t(a);
				if (!(D & 1)) a = b.max(0, b.min(a, r - u));
				var j = (a - d) % r;
				a = d + j;
				var h = d == a ? 0 : e * b.abs(j);
				h = b.min(h, e * u * 1.5);
				z.gc(d, a, h || 1)
			}
		}
		o.yg = bb;
		o.qd = function() {
			if (!N) {
				N = c;
				C[s] && C[s].yc()
			}
		};
		o.pg = function() {
			return P
		};

		function W() {
			return a.k(y || q)
		}
		function lb() {
			return a.l(y || q)
		}
		o.X = W;
		o.bb = lb;

		function Eb(c, d) {
			if (c == k) return a.k(q);
			if (!y) {
				var b = a.ob(f);
				a.id(b, a.id(q));
				a.Tb(b, a.Tb(q));
				a.mb(b, "block");
				// a.C(b, "relative");
				a.E(b, 0);
				a.I(b, 0);
				a.nb(b, "visible");
				y = a.ob(f);
				a.C(y, "absolute");
				a.E(y, 0);
				a.I(y, 0);
				a.k(y, a.k(q));
				a.l(y, a.l(q));
				a.md(y, "0 0");
				a.F(y, b);
				var h = a.S(q);
				a.F(q, y);
				a.gb(q, "backgroundImage", "");
				a.c(h, function(c) {
					a.F(a.i(c, "noscale") ? q : b, c);
					a.i(c, "autocenter") && Jb.push(c)
				})
			}
			Y = c / (d ? a.l : a.k)(y);
			a.xg(y, Y);
			var g = d ? Y * W() : c,
				e = d ? c : Y * lb();
			a.k(q, g);
			a.l(q, e);
			a.c(Jb, function(b) {
				var c = a.Wb(a.i(b, "autocenter"));
				a.ae(b, c)
			})
		}
		o.ig = Eb;
		o.zd = function(a) {
			var d = b.ceil(t(ib / Yb)),
				c = t(a - s + d);
			if (c > u) {
				if (a - s > r / 2) a -= r;
				else if (a - s <= -r / 2) a += r
			} else a = s + c - d;
			return a
		};
		m.call(o);
		o.K = q = a.kb(q);
		var g = a.n({
			Eb: 0,
			Ke: 1,
			Cc: 1,
			Ec: 0,
			Fc: i,
			Zb: 1,
			jd: c,
			wd: 1,
			pd: 3e3,
			Ed: 1,
			Gc: 500,
			ye: d.fd,
			nd: 20,
			od: 0,
			r: 1,
			Mc: 0,
			Pg: 1,
			Ac: 1,
			Hd: 1
		}, cc);
		if (g.Og != k) g.pd = g.Og;
		if (g.Dc != k) g.r = g.Dc;
		if (g.Mg != k) g.Mc = g.Mg;
		var eb = g.Ac & 3,
			qc = (g.Ac & 4) / -4 || 1,
			kb = g.dh,
			I = a.n({
				Y: p,
				Lg: 1,
				Tg: 1
			}, g.ch);
		I.sb = I.sb || I.bh;
		var Fb = g.Ig,
			Z = g.Hg,
			db = g.ah,
			R = !g.Pg,
			y, v = a.B(q, "slides", R),
			fb = a.B(q, "loading", R) || a.ob(f),
			Lb = a.B(q, "navigator", R),
			dc = a.B(q, "arrowleft", R),
			ac = a.B(q, "arrowright", R),
			Kb = a.B(q, "thumbnavigator", R),
			mc = a.k(v),
			kc = a.l(v),
			V, Q = [],
			rc = a.S(v);
		a.c(rc, function(b) {
			if (b.tagName == "DIV" && !a.i(b, "u")) Q.push(b);
			else a.Z() && a.J(b, (a.J(b) || 0) + 1)
		});
		var s = -1,
			wb, sb, r = Q.length,
			K = g.Ld || mc,
			J = g.Fg || kc,
			Ub = g.od,
			zb = K + Ub,
			Ab = J + Ub,
			Yb = eb & 1 ? zb : Ab,
			u = b.min(g.r, r),
			jb, x, O, yb, T = [],
			Ob, Qb, Mb, Zb, zc, N, E = g.Ed,
			ic = g.pd,
			Sb = g.Gc,
			qb, tb, ib, Pb = u < r,
			D = Pb ? g.Zb : 0,
			X, P, F = 1,
			M, B, S, ub = 0,
			vb = 0,
			H, gb, hb, Cb, w, U, z, Tb = new lc,
			Y, Jb = [];
		N = g.Fc;
		o.Ob = cc;
		Dc();
		a.v(q, "jssor-slider", c);
		a.J(v, a.J(v) || 0);
		a.C(v, "absolute");
		jb = a.db(v, c);
		a.Nb(jb, v);
		if (kb) {
			Zb = kb.Zg;
			qb = kb.Y;
			tb = u == 1 && r > 1 && qb && (!a.Bd() || a.sd() >= 8)
		}
		ib = tb || u >= r || !(D & 1) ? 0 : g.Mc;
		X = (u > 1 || ib ? eb : -1) & g.Hd;
		var Gb = v,
			C = [],
			A, L, Db = a.Ag(),
			mb = Db.Qg,
			G, pb, Ib, rb;
		Db.vd && a.gb(Gb, Db.vd, ([j, "pan-y", "pan-x", "none"])[X] || "");
		U = new wc;
		if (tb) A = new qb(Tb, K, J, kb, mb);
		a.F(jb, U.bc);
		a.nb(v, "hidden");
		L = Vb();
		a.gb(L, "backgroundColor", "#000");
		a.Cb(L, 0);
		a.Nb(L, Gb.firstChild, Gb);
		for (var cb = 0; cb < Q.length; cb++) {
			var tc = Q[cb],
				uc = new vc(tc, cb);
			C.push(uc)
		}
		a.R(fb);
		Cb = new xc;
		z = new jc(Cb, U);
		if (X) {
			a.e(v, "mousedown", Wb);
			a.e(v, "touchstart", oc);
			a.e(v, "dragstart", Hb);
			a.e(v, "selectstart", Hb);
			a.e(f, "mouseup", ab);
			a.e(f, "touchend", ab);
			a.e(f, "touchcancel", ab);
			a.e(e, "blur", ab)
		}
		E &= mb ? 10 : 5;
		if (Lb && Fb) {
			Ob = new Fb.Y(Lb, Fb, W(), lb());
			T.push(Ob)
		}
		if (Z && dc && ac) {
			Z.Zb = D;
			Z.r = u;
			Qb = new Z.Y(dc, ac, Z, W(), lb());
			T.push(Qb)
		}
		if (Kb && db) {
			db.Ec = g.Ec;
			Mb = new db.Y(Kb, db);
			T.push(Mb)
		}
		a.c(T, function(a) {
			a.pc(r, C, fb);
			a.zb(n.fc, gc)
		});
		a.gb(q, "visibility", "visible");
		Eb(W());
		a.e(v, "click", fc);
		a.e(q, "mouseout", a.Kb(Cc, q));
		a.e(q, "mouseover", a.Kb(Bc, q));
		xb();
		g.Cc && a.e(f, "keydown", function(a) {
			if (a.keyCode == 37) ob(-g.Cc);
			else a.keyCode == 39 && ob(g.Cc)
		});
		var nb = g.Ec;
		if (!(D & 1)) nb = b.max(0, b.min(nb, r - u));
		z.gc(nb, nb, 0)
	};
	h.Fe = 21;
	h.ff = 22;
	h.Me = 23;
	h.Ae = 24;
	h.ze = 25;
	h.fe = 26;
	h.re = 27;
	h.Ee = 28;
	h.Le = 202;
	h.og = 203;
	h.Qd = 206;
	h.pe = 207;
	h.xe = 208;
	h.Sc = 209;
	var n = {
		fc: 1
	}, q = e.$JssorBulletNavigator$ = function(e, C) {
		var f = this;
		m.call(f);
		e = a.kb(e);
		var s, A, z, r, l = 0,
			d, o, k, w, x, h, g, q, p, B = [],
			y = [];

		function v(a) {
			a != -1 && y[a].bd(a == l)
		}
		function t(a) {
			f.m(n.fc, a * o)
		}
		f.K = e;
		f.Oc = function(a) {
			if (a != r) {
				var d = l,
					c = b.floor(a / o);
				l = c;
				r = a;
				v(d);
				v(c)
			}
		};
		f.Kc = function(b) {
			a.A(e, b)
		};
		var u;
		f.pc = function(D) {
			if (!u) {
				s = b.ceil(D / o);
				l = 0;
				var n = q + w,
					r = p + x,
					m = b.ceil(s / k) - 1;
				A = q + n * (!h ? m : k - 1);
				z = p + r * (h ? m : k - 1);
				a.k(e, A);
				a.l(e, z);
				for (var f = 0; f < s; f++) {
					var C = a.ng();
					a.Kg(C, f + 1);
					var i = a.dd(g, "numbertemplate", C, c);
					a.C(i, "absolute");
					var v = f % (m + 1);
					a.I(i, !h ? n * v : f % k * n);
					a.E(i, h ? r * v : b.floor(f / (m + 1)) * r);
					a.F(e, i);
					B[f] = i;
					d.xb & 1 && a.e(i, "click", a.G(j, t, f));
					d.xb & 2 && a.e(i, "mouseover", a.Kb(a.G(j, t, f), i));
					y[f] = a.Mb(i)
				}
				u = c
			}
		};
		f.Ob = d = a.n({
			Jc: 10, //.dot-bar div { position left }
			Lc: 10,
			Ab: 1,
			xb: 1
		}, C);
		g = a.B(e, "prototype");
		q = a.k(g);
		p = a.l(g);
		a.vb(g, e);
		o = d.Wc || 1;
		k = d.kd || 1;
		w = d.Jc;
		x = d.Lc;
		h = d.Ab - 1;
		d.Pc == i && a.v(e, "noscale", c);
		d.eb && a.v(e, "autocenter", d.eb)
	}, r = e.$JssorArrowNavigator$ = function(b, g, h) {
		var d = this;
		m.call(d);
		var r, q, e, f, k;
		a.k(b);
		a.l(b);

		function l(a) {
			d.m(n.fc, a, c)
		}
		function p(c) {
			a.A(b, c || !h.Zb && e == 0);
			a.A(g, c || !h.Zb && e >= q - h.r);
			r = c
		}
		d.Oc = function(b, a, c) {
			if (c) e = a;
			else {
				e = b;
				p(r)
			}
		};
		d.Kc = p;
		var o;
		d.pc = function(d) {
			q = d;
			e = 0;
			if (!o) {
				a.e(b, "click", a.G(j, l, -k));
				a.e(g, "click", a.G(j, l, k));
				a.Mb(b);
				a.Mb(g);
				o = c
			}
		};
		d.Ob = f = a.n({
			Wc: 1
		}, h);
		k = f.Wc;
		if (f.Pc == i) {
			a.v(b, "noscale", c);
			a.v(g, "noscale", c)
		}
		if (f.eb) {
			a.v(b, "autocenter", f.eb);
			a.v(g, "autocenter", f.eb)
		}
	};
	e.$JssorThumbnailNavigator$ = function(g, C) {
		var l = this,
			A, q, d, w = [],
			y, x, e, r, s, v, u, p, t, f, o;
		m.call(l);
		g = a.kb(g);

		function B(m, f) {
			var g = this,
				b, k, i;

			function p() {
				k.bd(q == f)
			}
			function h(d) {
				if (d || !t.pg()) {
					var a = e - f % e,
						b = t.zd((f + a) / e - 1),
						c = b * e + e - a;
					l.m(n.fc, c)
				}
			}
			g.jb = f;
			g.Vc = p;
			i = m.Zd || m.ec || a.ob();
			g.bc = b = a.dd(o, "thumbnailtemplate", i, c);
			k = a.Mb(b);
			d.xb & 1 && a.e(b, "click", a.G(j, h, 0));
			d.xb & 2 && a.e(b, "mouseover", a.Kb(a.G(j, h, 1), b))
		}
		l.Oc = function(c, d, f) {
			var a = q;
			q = c;
			a != -1 && w[a].Vc();
			w[c].Vc();
			!f && t.yg(t.zd(b.floor(d / e)))
		};
		l.Kc = function(b) {
			a.A(g, b)
		};
		var z;
		l.pc = function(D, C) {
			if (!z) {
				A = D;
				b.ceil(A / e);
				q = -1;
				p = b.min(p, C.length);
				var j = d.Ab & 1,
					m = v + (v + r) * (e - 1) * (1 - j),
					l = u + (u + s) * (e - 1) * j,
					o = m + (m + r) * (p - 1) * j,
					n = l + (l + s) * (p - 1) * (1 - j);
				a.C(f, "absolute");
				a.nb(f, "hidden");
				d.eb & 1 && a.I(f, (y - o) / 2);
				d.eb & 2 && a.E(f, (x - n) / 2);
				a.k(f, o);
				a.l(f, n);
				var k = [];
				a.c(C, function(l, g) {
					var h = new B(l, g),
						d = h.bc,
						c = b.floor(g / e),
						i = g % e;
					a.I(d, (v + r) * i * (1 - j));
					a.E(d, (u + s) * i * j);
					if (!k[c]) {
						k[c] = a.ob();
						a.F(f, k[c])
					}
					a.F(k[c], d);
					w.push(h)
				});
				var E = a.n({
					Fc: i,
					jd: i,
					Ld: m,
					Fg: l,
					od: r * j + s * (1 - j),
					nd: 12,
					Gc: 200,
					Ed: 1,
					Ac: d.Ab,
					Hd: d.Wg || d.Xg ? 0 : d.Ab
				}, d);
				t = new h(g, E);
				z = c
			}
		};
		l.Ob = d = a.n({
			Jc: 0,
			Lc: 0,
			r: 1,
			Ab: 1,
			eb: 3,
			xb: 1
		}, C);
		if (d.Dc != k) d.r = d.Dc;
		if (d.U != k) d.kd = d.U;
		y = a.k(g);
		x = a.l(g);
		f = a.B(g, "slides", c);
		o = a.B(f, "prototype");
		v = a.k(o);
		u = a.l(o);
		a.vb(o, f);
		e = d.kd || 1;
		r = d.Jc;
		s = d.Lc;
		p = d.r;
		d.Pc == i && a.v(g, "noscale", c)
	};

	function p(e, d, c) {
		var b = this;
		l.call(b, 0, c);
		b.tb = a.ld;
		b.Jb = 0;
		b.Lb = c
	}
	e.$JssorCaptionSlider$ = function(h, f, i) {
		var c = this;
		l.call(c, 0, 0);
		var e, d;

		function g(p, h, f) {
			var c = this,
				g, n = f ? h.Lg : h.Tg,
				e = h.sb,
				o = {
					hb: "t",
					L: "d",
					ac: "du",
					x: "x",
					y: "y",
					q: "r",
					j: "z",
					s: "f",
					Bb: "b"
				}, d = {
					lb: function(b, a) {
						if (!isNaN(a.ib)) b = a.ib;
						else b *= a.Kf;
						return b
					},
					s: function(b, a) {
						return this.lb(b - 1, a)
					}
				};
			d.j = d.s;
			l.call(c, 0, 0);

			function j(r, m) {
				var l = [],
					i, k = [],
					c = [];

				function h(c, d) {
					var b = {};
					a.c(o, function(g, h) {
						var e = a.i(c, g + (d || ""));
						if (e) {
							var f = {};
							if (g == "t") f.ib = e;
							else if (e.indexOf("%") + 1) f.Kf = a.kc(e) / 100;
							else f.ib = a.kc(e);
							b[h] = f
						}
					});
					return b
				}
				function p() {
					return e[b.floor(b.random() * e.length)]
				}
				function g(f) {
					var h;
					if (f == "*") h = p();
					else if (f) {
						var d = e[a.Wb(f)] || e[f];
						if (a.oc(d)) {
							if (f != i) {
								i = f;
								c[f] = 0;
								k[f] = d[b.floor(b.random() * d.length)]
							} else c[f]++;
							d = k[f];
							if (a.oc(d)) {
								d = d.length && d[c[f] % d.length];
								if (a.oc(d)) d = d[b.floor(b.random() * d.length)]
							}
						}
						h = d;
						if (a.Dd(h)) h = g(h)
					}
					return h
				}
				var q = a.S(r);
				a.c(q, function(b) {
					var c = [];
					c.K = b;
					var e = a.i(b, "u") == "caption";
					a.c(f ? [0, 3] : [2], function(l, o) {
						if (e) {
							var k, f;
							if (l != 2 || !a.i(b, "t3")) {
								f = h(b, l);
								if (l == 2 && !f.hb) {
									f.L = f.L || {
										ib: 0
									};
									f = a.n(h(b, 0), f)
								}
							}
							if (f && f.hb) {
								k = g(f.hb.ib);
								if (k) {
									var i = a.n({
										L: 0
									}, k);
									a.c(f, function(c, a) {
										var b = (d[a] || d.lb).apply(d, [i[a], f[a]]);
										if (!isNaN(b)) i[a] = b
									});
									if (!o) if (f.Bb) i.Bb = f.Bb.ib || 0;
									else if (n & 2) i.Bb = 0
								}
							}
							c.push(i)
						}
						if (m % 2 && !o) c.S = j(b, m + 1)
					});
					l.push(c)
				});
				return l
			}
			function m(w, c, z) {
				var g = {
					H: c.H,
					cc: c.cc,
					dc: c.dc,
					Ic: f && !z
				}, m = w,
					r = a.gd(w),
					k = a.k(m),
					j = a.l(m),
					y = a.k(r),
					x = a.l(r),
					h = {}, e = {}, i = c.Ud || 1;
				if (c.s) e.s = 1 - c.s;
				g.X = k;
				g.bb = j;
				if (c.j || c.q) {
					e.j = (c.j || 2) - 2;
					if (a.Z() || a.xc()) e.j = b.min(e.j, 1);
					h.j = 1;
					var B = c.q || 0;
					e.q = B * 360;
					h.q = 0
				} else if (c.a) {
					var s = {
						f: 0,
						p: k,
						o: j,
						g: 0
					}, v = a.n({}, s),
						d = v.yb = {}, u = c.a & 4,
						p = c.a & 8,
						t = c.a & 1,
						q = c.a & 2;
					if (u && p) {
						d.f = j / 2 * i;
						d.o = -d.f
					} else if (u) d.o = -j * i;
					else if (p) d.f = j * i;
					if (t && q) {
						d.g = k / 2 * i;
						d.p = -d.g
					} else if (t) d.p = -k * i;
					else if (q) d.g = k * i;
					g.T = c.T;
					e.a = v;
					h.a = s
				}
				var n = 0,
					o = 0;
				if (c.x) n -= y * c.x;
				if (c.y) o -= x * c.y;
				if (n || o || g.T) {
					e.g = n;
					e.f = o
				}
				var A = c.ac;
				h = a.n(h, a.je(m, e));
				g.zc = a.Uc();
				return new l(c.L, A, g, m, h, e)
			}
			function i(b, d) {
				a.c(d, function(d) {
					var a, h = d.K,
						f = d[0],
						j = d[1];
					if (f) {
						a = m(h, f);
						f.Bb == k && a.O(b);
						b = a.ab()
					}
					b = i(b, d.S);
					if (j) {
						var e = m(h, j, 1);
						e.O(b);
						c.D(e);
						g.D(e)
					}
					a && c.D(a)
				});
				return b
			}
			c.tb = function() {
				c.u(c.ab() * (f || 0));
				g.u(0)
			};
			g = new l(0, 0);
			i(0, n ? j(p, 1) : [])
		}
		c.tb = function() {
			d.tb();
			e.tb()
		};
		e = new g(h, f, 1);
		c.Jb = e.ab();
		c.Lb = c.Jb + i;
		d = new g(h, f);
		d.O(c.Lb);
		c.D(d);
		c.D(e)
	};
	e.$JssorCaptionSlideo$ = function(n, f, m) {
		var b = this,
			o, h = {}, i = f.sb,
			d = new l(0, 0);
		l.call(b, 0, 0);

		function j(d, c) {
			var b = {};
			a.c(d, function(d, f) {
				var e = h[f];
				if (e) {
					if (a.wg(d)) d = j(d, c || f == "e");
					else if (c) if (a.Xb(d)) d = o[d];
					b[e] = d
				}
			});
			return b
		}
		function k(e, c) {
			var b = [],
				d = a.S(e);
			a.c(d, function(d) {
				var h = a.i(d, "u") == "caption";
				if (h) {
					var e = a.i(d, "t"),
						g = i[a.Wb(e)] || i[e],
						f = {
							K: d,
							hb: g
						};
					b.push(f)
				}
				if (c < 5) b = b.concat(k(d, c + 1))
			});
			return b
		}
		function r(c, e, b) {
			a.c(e, function(f) {
				var e = j(f),
					h = {
						H: a.rc(e.H),
						zc: a.Uc(),
						X: b.N,
						bb: b.M
					}, g = new l(f.b, f.d, h, c, b, e);
				d.D(g);
				b = a.Ge(b, e)
			});
			return b
		}
		function q(b) {
			a.c(b, function(c) {
				var b = c.K,
					e = a.k(b),
					d = a.l(b),
					f = {
						g: a.I(b),
						f: a.E(b),
						s: 1,
						P: a.J(b) || 0,
						q: 0,
						Fb: 0,
						Gb: 0,
						rb: 1,
						qb: 1,
						Vb: 0,
						Ub: 0,
						Sb: 0,
						Rb: 0,
						Qb: 0,
						N: e,
						M: d,
						a: {
							f: 0,
							p: e,
							o: d,
							g: 0
						}
					};
				r(b, c.hb, f)
			})
		}
		function t(g, f, h) {
			var e = g.b - f;
			if (e) {
				var a = new l(f, e);
				a.D(d, c);
				a.O(h);
				b.D(a)
			}
			b.le(g.d);
			return e
		}
		function s(f) {
			var c = d.Bc(),
				e = 0;
			a.c(f, function(d, f) {
				d = a.n({
					d: m
				}, d);
				t(d, c, e);
				c = d.b;
				e += d.d;
				if (!f || d.t == 2) {
					b.Jb = c;
					b.Lb = c + d.d
				}
			})
		}
		b.tb = function() {
			b.u(-1, c)
		};
		o = [g.vf, g.uf, g.lf, g.Ne, g.Oe, g.Pe, g.Qe, g.Re, g.Se, g.Te, g.Ue, g.Ve, g.We, g.Xe, g.Ye, g.Ze, g.af, g.bf, g.cf, g.df, g.sf, g.rf, g.qf, g.pf, g.of, g.nf, g.tf, g.mf, g.kf, g.jf, g.hf, g.gf, g.fg, g.ef, g.Mf, g.eg, g.vg];
		var u = {
			f: "y",
			g: "x",
			o: "m",
			p: "t",
			q: "r",
			Fb: "rX",
			Gb: "rY",
			rb: "sX",
			qb: "sY",
			Vb: "tX",
			Ub: "tY",
			Sb: "tZ",
			Rb: "kX",
			Qb: "kY",
			s: "o",
			H: "e",
			P: "i",
			a: "c"
		};
		a.c(u, function(b, a) {
			h[b] = a
		});
		q(k(n, 1));
		d.u(-1);
		var p = f.fh || [],
			e = [].concat(p[a.Wb(a.i(n, "b"))] || []);
		e.push({
			b: d.ab(),
			d: e.length ? 0 : m
		});
		s(e);
		b.u(-1)
	};
	itemSlider = function() {
		var g = {
			Fc: c,
			Ld: 1000,
			r: 2,
			Mc: 100,
			Hg: {
				Y: r
			},
			Ig: {
				Y: q
			}
		}, f = new h("itemSlider", g);

		function d() {
			var a = f.K.parentNode.clientWidth;
			if (a) {
				a = b.min(a, '1920');
				f.ig(a)
			} else e.setTimeout(d, 30)
		}
		d();
		a.e(e, "load", d);
		a.e(e, "resize", a.zg(e, d));
		a.e(e, "orientationchange", d)
	}
}(window, document, Math, null, true, false)