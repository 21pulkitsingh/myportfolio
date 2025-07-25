var _typeof =
  "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
    ? function (a) {
        return typeof a;
      }
    : function (a) {
        return a &&
          "function" == typeof Symbol &&
          a.constructor === Symbol &&
          a !== Symbol.prototype
          ? "symbol"
          : typeof a;
      };
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define([], b)
    : "object" ===
      ("undefined" == typeof exports ? "undefined" : _typeof(exports))
    ? (module.exports = { init: b.init, destroy: b.destroy })
    : (a.ityped = b);
})(
  this,
  (function (a) {
    function b(a) {
      var b = a;
      return (
        (b.strings = a.strings || ["Put your string here...", "and Enjoy!"]),
        (b.typeSpeed = a.typeSpeed || 100),
        (b.backSpeed = a.backSpeed || 50),
        (b.backDelay = a.backDelay || 500),
        (b.startDelay = a.startDelay || 500),
        (b.showCursor = a.showCursor),
        (b.loop = a.loop || !1),
        void 0 === b.showCursor && (b.showCursor = !0),
        Promise.resolve(b)
      );
    }
    function c(a, c) {
      (a = "string" == typeof a ? document.querySelector(a) : a),
        b(c).then(function (b) {
          (m = b),
            (a._props = m),
            m.showCursor && d(a, m.cursorChar || "|"),
            e(a);
        });
    }
    function d(a, b) {
      var c = n.cloneNode();
      a.insertAdjacentElement("afterend", c), (c.textContent = b);
    }
    function e(a) {
      l(
        a._props.strings,
        function (b, c, d) {
          var e = a._props.typeSpeed * b.length - 1;
          a._props.backSpeed < a._props.typeSpeed
            ? (e -= (a._props.typeSpeed - a._props.backSpeed) * b.length)
            : a._props.backSpeed > a._props.typeSpeed &&
              (e += (a._props.backSpeed - a._props.typeSpeed) * b.length);
          var f = this.async(),
            g = a._props.strings.length;
          h(a, b, c, g).then(function () {
            setTimeout(function () {
              f();
            }, e);
          });
        },
        function () {
          a._props.loop && e(a);
        }
      );
    }
    function f(a, b) {
      return new Promise(function (c, d) {
        for (var e = 0, f = 0; f < b.length; f++)
          !(function (d) {
            var f = d,
              h = b.length;
            setTimeout(function (d) {
              g(a, b.charAt(f)), ++e === h - 1 && c();
            }, a._props.typeSpeed * d);
          })(f);
      });
    }
    function g(a, b) {
      a.innerHTML += b;
    }
    function h(a, b, c, d) {
      return new Promise(function (e, g) {
        f(a, b).then(function () {
          setTimeout(function () {
            j(a, b, c, d).then(function () {
              setTimeout(function () {
                e();
              }, a._props.startDelay);
            });
          }, a._props.backDelay);
        });
      });
    }
    function i(a, b, c, d) {
      for (var e = c; e > 0; e--)
        !(function (e) {
          var f = e,
            g = c;
          setTimeout(function (e) {
            (a.innerHTML = b.substring(0, c - f)), g--, 1 === f && d();
          }, a._props.backSpeed * e);
        })(e);
    }
    function j(a, b, c, d) {
      return new Promise(function (e, f) {
        var g = b.length;
        c + 1 === d
          ? a._props.loop
            ? a._props.loop && i(a, b, g, e)
            : (void 0 !== a._props.onFinished &&
                "function" == typeof a._props.onFinished &&
                a._props.onFinished(),
              (a.innerHTML = b))
          : c + 1 !== d && i(a, b, g, e);
      });
    }
    function k(a) {
      a._props.onFinished = function () {};
    }
    var l = function (a, b, c) {
        var d = -1,
          e = a.length >>> 0;
        !(function f(g) {
          var h,
            i = g === !1;
          do {
            ++d;
          } while (!(d in a) && d !== e);
          if (i || d === e) return void (c && c(!i, a));
          (g = b.call(
            {
              async: function () {
                return (h = !0), f;
              },
            },
            a[d],
            d,
            a
          )),
            h || f(g);
        })();
      },
      m = void 0,
      n = document.createElement("span");
    return (
      n.classList.add("ityped-cursor"),
      (n.textContent = "|"),
      { init: c, destroy: k }
    );
  })()
);
