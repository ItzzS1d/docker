const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/Home-Th20gMDy.js", "assets/Home-9inj9rcP.css"])
) => i.map((i) => d[i]);
var Dd = Object.defineProperty;
var Fd = (i, s, a) =>
  s in i
    ? Dd(i, s, { enumerable: !0, configurable: !0, writable: !0, value: a })
    : (i[s] = a);
var ic = (i, s, a) => Fd(i, typeof s != "symbol" ? s + "" : s, a);
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) p(f);
  new MutationObserver((f) => {
    for (const m of f)
      if (m.type === "childList")
        for (const k of m.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && p(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function p(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = a(f);
    fetch(f.href, m);
  }
})();
var Xi = { exports: {} },
  Nr = {},
  Gi = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uc;
function Md() {
  if (uc) return q;
  uc = 1;
  var i = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    p = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.provider"),
    k = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    w = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    O = Symbol.iterator;
  function P(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (O && v[O]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var j = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    z = Object.assign,
    M = {};
  function D(v, R, Z) {
    (this.props = v),
      (this.context = R),
      (this.refs = M),
      (this.updater = Z || j);
  }
  (D.prototype.isReactComponent = {}),
    (D.prototype.setState = function (v, R) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, R, "setState");
    }),
    (D.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function F() {}
  F.prototype = D.prototype;
  function A(v, R, Z) {
    (this.props = v),
      (this.context = R),
      (this.refs = M),
      (this.updater = Z || j);
  }
  var J = (A.prototype = new F());
  (J.constructor = A), z(J, D.prototype), (J.isPureReactComponent = !0);
  var ee = Array.isArray,
    ue = Object.prototype.hasOwnProperty,
    ge = { current: null },
    me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ce(v, R, Z) {
    var b,
      ne = {},
      re = null,
      ae = null;
    if (R != null)
      for (b in (R.ref !== void 0 && (ae = R.ref),
      R.key !== void 0 && (re = "" + R.key),
      R))
        ue.call(R, b) && !me.hasOwnProperty(b) && (ne[b] = R[b]);
    var oe = arguments.length - 2;
    if (oe === 1) ne.children = Z;
    else if (1 < oe) {
      for (var de = Array(oe), Ge = 0; Ge < oe; Ge++)
        de[Ge] = arguments[Ge + 2];
      ne.children = de;
    }
    if (v && v.defaultProps)
      for (b in ((oe = v.defaultProps), oe))
        ne[b] === void 0 && (ne[b] = oe[b]);
    return {
      $$typeof: i,
      type: v,
      key: re,
      ref: ae,
      props: ne,
      _owner: ge.current,
    };
  }
  function we(v, R) {
    return {
      $$typeof: i,
      type: v.type,
      key: R,
      ref: v.ref,
      props: v.props,
      _owner: v._owner,
    };
  }
  function Le(v) {
    return typeof v == "object" && v !== null && v.$$typeof === i;
  }
  function yt(v) {
    var R = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (Z) {
        return R[Z];
      })
    );
  }
  var gt = /\/+/g;
  function Xe(v, R) {
    return typeof v == "object" && v !== null && v.key != null
      ? yt("" + v.key)
      : R.toString(36);
  }
  function ut(v, R, Z, b, ne) {
    var re = typeof v;
    (re === "undefined" || re === "boolean") && (v = null);
    var ae = !1;
    if (v === null) ae = !0;
    else
      switch (re) {
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case i:
            case s:
              ae = !0;
          }
      }
    if (ae)
      return (
        (ae = v),
        (ne = ne(ae)),
        (v = b === "" ? "." + Xe(ae, 0) : b),
        ee(ne)
          ? ((Z = ""),
            v != null && (Z = v.replace(gt, "$&/") + "/"),
            ut(ne, R, Z, "", function (Ge) {
              return Ge;
            }))
          : ne != null &&
            (Le(ne) &&
              (ne = we(
                ne,
                Z +
                  (!ne.key || (ae && ae.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(gt, "$&/") + "/") +
                  v
              )),
            R.push(ne)),
        1
      );
    if (((ae = 0), (b = b === "" ? "." : b + ":"), ee(v)))
      for (var oe = 0; oe < v.length; oe++) {
        re = v[oe];
        var de = b + Xe(re, oe);
        ae += ut(re, R, Z, de, ne);
      }
    else if (((de = P(v)), typeof de == "function"))
      for (v = de.call(v), oe = 0; !(re = v.next()).done; )
        (re = re.value), (de = b + Xe(re, oe++)), (ae += ut(re, R, Z, de, ne));
    else if (re === "object")
      throw (
        ((R = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (R === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : R) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return ae;
  }
  function wt(v, R, Z) {
    if (v == null) return v;
    var b = [],
      ne = 0;
    return (
      ut(v, b, "", "", function (re) {
        return R.call(Z, re, ne++);
      }),
      b
    );
  }
  function Be(v) {
    if (v._status === -1) {
      var R = v._result;
      (R = R()),
        R.then(
          function (Z) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = Z));
          },
          function (Z) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = Z));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = R));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Se = { current: null },
    U = { transition: null },
    X = {
      ReactCurrentDispatcher: Se,
      ReactCurrentBatchConfig: U,
      ReactCurrentOwner: ge,
    };
  function V() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (q.Children = {
      map: wt,
      forEach: function (v, R, Z) {
        wt(
          v,
          function () {
            R.apply(this, arguments);
          },
          Z
        );
      },
      count: function (v) {
        var R = 0;
        return (
          wt(v, function () {
            R++;
          }),
          R
        );
      },
      toArray: function (v) {
        return (
          wt(v, function (R) {
            return R;
          }) || []
        );
      },
      only: function (v) {
        if (!Le(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (q.Component = D),
    (q.Fragment = a),
    (q.Profiler = f),
    (q.PureComponent = A),
    (q.StrictMode = p),
    (q.Suspense = w),
    (q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (q.act = V),
    (q.cloneElement = function (v, R, Z) {
      if (v == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            v +
            "."
        );
      var b = z({}, v.props),
        ne = v.key,
        re = v.ref,
        ae = v._owner;
      if (R != null) {
        if (
          (R.ref !== void 0 && ((re = R.ref), (ae = ge.current)),
          R.key !== void 0 && (ne = "" + R.key),
          v.type && v.type.defaultProps)
        )
          var oe = v.type.defaultProps;
        for (de in R)
          ue.call(R, de) &&
            !me.hasOwnProperty(de) &&
            (b[de] = R[de] === void 0 && oe !== void 0 ? oe[de] : R[de]);
      }
      var de = arguments.length - 2;
      if (de === 1) b.children = Z;
      else if (1 < de) {
        oe = Array(de);
        for (var Ge = 0; Ge < de; Ge++) oe[Ge] = arguments[Ge + 2];
        b.children = oe;
      }
      return {
        $$typeof: i,
        type: v.type,
        key: ne,
        ref: re,
        props: b,
        _owner: ae,
      };
    }),
    (q.createContext = function (v) {
      return (
        (v = {
          $$typeof: k,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (v.Provider = { $$typeof: m, _context: v }),
        (v.Consumer = v)
      );
    }),
    (q.createElement = Ce),
    (q.createFactory = function (v) {
      var R = Ce.bind(null, v);
      return (R.type = v), R;
    }),
    (q.createRef = function () {
      return { current: null };
    }),
    (q.forwardRef = function (v) {
      return { $$typeof: x, render: v };
    }),
    (q.isValidElement = Le),
    (q.lazy = function (v) {
      return { $$typeof: I, _payload: { _status: -1, _result: v }, _init: Be };
    }),
    (q.memo = function (v, R) {
      return { $$typeof: E, type: v, compare: R === void 0 ? null : R };
    }),
    (q.startTransition = function (v) {
      var R = U.transition;
      U.transition = {};
      try {
        v();
      } finally {
        U.transition = R;
      }
    }),
    (q.unstable_act = V),
    (q.useCallback = function (v, R) {
      return Se.current.useCallback(v, R);
    }),
    (q.useContext = function (v) {
      return Se.current.useContext(v);
    }),
    (q.useDebugValue = function () {}),
    (q.useDeferredValue = function (v) {
      return Se.current.useDeferredValue(v);
    }),
    (q.useEffect = function (v, R) {
      return Se.current.useEffect(v, R);
    }),
    (q.useId = function () {
      return Se.current.useId();
    }),
    (q.useImperativeHandle = function (v, R, Z) {
      return Se.current.useImperativeHandle(v, R, Z);
    }),
    (q.useInsertionEffect = function (v, R) {
      return Se.current.useInsertionEffect(v, R);
    }),
    (q.useLayoutEffect = function (v, R) {
      return Se.current.useLayoutEffect(v, R);
    }),
    (q.useMemo = function (v, R) {
      return Se.current.useMemo(v, R);
    }),
    (q.useReducer = function (v, R, Z) {
      return Se.current.useReducer(v, R, Z);
    }),
    (q.useRef = function (v) {
      return Se.current.useRef(v);
    }),
    (q.useState = function (v) {
      return Se.current.useState(v);
    }),
    (q.useSyncExternalStore = function (v, R, Z) {
      return Se.current.useSyncExternalStore(v, R, Z);
    }),
    (q.useTransition = function () {
      return Se.current.useTransition();
    }),
    (q.version = "18.3.1"),
    q
  );
}
var ac;
function lu() {
  return ac || ((ac = 1), (Gi.exports = Md())), Gi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc;
function jd() {
  if (sc) return Nr;
  sc = 1;
  var i = lu(),
    s = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    p = Object.prototype.hasOwnProperty,
    f = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(x, w, E) {
    var I,
      O = {},
      P = null,
      j = null;
    E !== void 0 && (P = "" + E),
      w.key !== void 0 && (P = "" + w.key),
      w.ref !== void 0 && (j = w.ref);
    for (I in w) p.call(w, I) && !m.hasOwnProperty(I) && (O[I] = w[I]);
    if (x && x.defaultProps)
      for (I in ((w = x.defaultProps), w)) O[I] === void 0 && (O[I] = w[I]);
    return {
      $$typeof: s,
      type: x,
      key: P,
      ref: j,
      props: O,
      _owner: f.current,
    };
  }
  return (Nr.Fragment = a), (Nr.jsx = k), (Nr.jsxs = k), Nr;
}
var cc;
function Ud() {
  return cc || ((cc = 1), (Xi.exports = jd())), Xi.exports;
}
var De = Ud(),
  Kl = {},
  Ji = { exports: {} },
  Ye = {},
  Zi = { exports: {} },
  qi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc;
function $d() {
  return (
    fc ||
      ((fc = 1),
      (function (i) {
        function s(U, X) {
          var V = U.length;
          U.push(X);
          e: for (; 0 < V; ) {
            var v = (V - 1) >>> 1,
              R = U[v];
            if (0 < f(R, X)) (U[v] = X), (U[V] = R), (V = v);
            else break e;
          }
        }
        function a(U) {
          return U.length === 0 ? null : U[0];
        }
        function p(U) {
          if (U.length === 0) return null;
          var X = U[0],
            V = U.pop();
          if (V !== X) {
            U[0] = V;
            e: for (var v = 0, R = U.length, Z = R >>> 1; v < Z; ) {
              var b = 2 * (v + 1) - 1,
                ne = U[b],
                re = b + 1,
                ae = U[re];
              if (0 > f(ne, V))
                re < R && 0 > f(ae, ne)
                  ? ((U[v] = ae), (U[re] = V), (v = re))
                  : ((U[v] = ne), (U[b] = V), (v = b));
              else if (re < R && 0 > f(ae, V))
                (U[v] = ae), (U[re] = V), (v = re);
              else break e;
            }
          }
          return X;
        }
        function f(U, X) {
          var V = U.sortIndex - X.sortIndex;
          return V !== 0 ? V : U.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var m = performance;
          i.unstable_now = function () {
            return m.now();
          };
        } else {
          var k = Date,
            x = k.now();
          i.unstable_now = function () {
            return k.now() - x;
          };
        }
        var w = [],
          E = [],
          I = 1,
          O = null,
          P = 3,
          j = !1,
          z = !1,
          M = !1,
          D = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          A = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function J(U) {
          for (var X = a(E); X !== null; ) {
            if (X.callback === null) p(E);
            else if (X.startTime <= U)
              p(E), (X.sortIndex = X.expirationTime), s(w, X);
            else break;
            X = a(E);
          }
        }
        function ee(U) {
          if (((M = !1), J(U), !z))
            if (a(w) !== null) (z = !0), Be(ue);
            else {
              var X = a(E);
              X !== null && Se(ee, X.startTime - U);
            }
        }
        function ue(U, X) {
          (z = !1), M && ((M = !1), F(Ce), (Ce = -1)), (j = !0);
          var V = P;
          try {
            for (
              J(X), O = a(w);
              O !== null && (!(O.expirationTime > X) || (U && !yt()));

            ) {
              var v = O.callback;
              if (typeof v == "function") {
                (O.callback = null), (P = O.priorityLevel);
                var R = v(O.expirationTime <= X);
                (X = i.unstable_now()),
                  typeof R == "function"
                    ? (O.callback = R)
                    : O === a(w) && p(w),
                  J(X);
              } else p(w);
              O = a(w);
            }
            if (O !== null) var Z = !0;
            else {
              var b = a(E);
              b !== null && Se(ee, b.startTime - X), (Z = !1);
            }
            return Z;
          } finally {
            (O = null), (P = V), (j = !1);
          }
        }
        var ge = !1,
          me = null,
          Ce = -1,
          we = 5,
          Le = -1;
        function yt() {
          return !(i.unstable_now() - Le < we);
        }
        function gt() {
          if (me !== null) {
            var U = i.unstable_now();
            Le = U;
            var X = !0;
            try {
              X = me(!0, U);
            } finally {
              X ? Xe() : ((ge = !1), (me = null));
            }
          } else ge = !1;
        }
        var Xe;
        if (typeof A == "function")
          Xe = function () {
            A(gt);
          };
        else if (typeof MessageChannel < "u") {
          var ut = new MessageChannel(),
            wt = ut.port2;
          (ut.port1.onmessage = gt),
            (Xe = function () {
              wt.postMessage(null);
            });
        } else
          Xe = function () {
            D(gt, 0);
          };
        function Be(U) {
          (me = U), ge || ((ge = !0), Xe());
        }
        function Se(U, X) {
          Ce = D(function () {
            U(i.unstable_now());
          }, X);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (U) {
            U.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            z || j || ((z = !0), Be(ue));
          }),
          (i.unstable_forceFrameRate = function (U) {
            0 > U || 125 < U
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (we = 0 < U ? Math.floor(1e3 / U) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return P;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return a(w);
          }),
          (i.unstable_next = function (U) {
            switch (P) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = P;
            }
            var V = P;
            P = X;
            try {
              return U();
            } finally {
              P = V;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (U, X) {
            switch (U) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                U = 3;
            }
            var V = P;
            P = U;
            try {
              return X();
            } finally {
              P = V;
            }
          }),
          (i.unstable_scheduleCallback = function (U, X, V) {
            var v = i.unstable_now();
            switch (
              (typeof V == "object" && V !== null
                ? ((V = V.delay),
                  (V = typeof V == "number" && 0 < V ? v + V : v))
                : (V = v),
              U)
            ) {
              case 1:
                var R = -1;
                break;
              case 2:
                R = 250;
                break;
              case 5:
                R = 1073741823;
                break;
              case 4:
                R = 1e4;
                break;
              default:
                R = 5e3;
            }
            return (
              (R = V + R),
              (U = {
                id: I++,
                callback: X,
                priorityLevel: U,
                startTime: V,
                expirationTime: R,
                sortIndex: -1,
              }),
              V > v
                ? ((U.sortIndex = V),
                  s(E, U),
                  a(w) === null &&
                    U === a(E) &&
                    (M ? (F(Ce), (Ce = -1)) : (M = !0), Se(ee, V - v)))
                : ((U.sortIndex = R), s(w, U), z || j || ((z = !0), Be(ue))),
              U
            );
          }),
          (i.unstable_shouldYield = yt),
          (i.unstable_wrapCallback = function (U) {
            var X = P;
            return function () {
              var V = P;
              P = X;
              try {
                return U.apply(this, arguments);
              } finally {
                P = V;
              }
            };
          });
      })(qi)),
    qi
  );
}
var dc;
function Ad() {
  return dc || ((dc = 1), (Zi.exports = $d())), Zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pc;
function Bd() {
  if (pc) return Ye;
  pc = 1;
  var i = lu(),
    s = Ad();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var p = new Set(),
    f = {};
  function m(e, t) {
    k(e, t), k(e + "Capture", t);
  }
  function k(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) p.add(t[e]);
  }
  var x = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    w = Object.prototype.hasOwnProperty,
    E =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    I = {},
    O = {};
  function P(e) {
    return w.call(O, e)
      ? !0
      : w.call(I, e)
      ? !1
      : E.test(e)
      ? (O[e] = !0)
      : ((I[e] = !0), !1);
  }
  function j(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function z(e, t, n, r) {
    if (t === null || typeof t > "u" || j(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function M(e, t, n, r, l, o, u) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = u);
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      D[e] = new M(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      D[t] = new M(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      D[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      D[e] = new M(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        D[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      D[e] = new M(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      D[e] = new M(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      D[e] = new M(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      D[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var F = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(F, A);
      D[t] = new M(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(F, A);
        D[t] = new M(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(F, A);
      D[t] = new M(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      D[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (D.xlinkHref = new M(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      D[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function J(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (z(t, n, l, r) && (n = null),
      r || l === null
        ? P(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ue = Symbol.for("react.element"),
    ge = Symbol.for("react.portal"),
    me = Symbol.for("react.fragment"),
    Ce = Symbol.for("react.strict_mode"),
    we = Symbol.for("react.profiler"),
    Le = Symbol.for("react.provider"),
    yt = Symbol.for("react.context"),
    gt = Symbol.for("react.forward_ref"),
    Xe = Symbol.for("react.suspense"),
    ut = Symbol.for("react.suspense_list"),
    wt = Symbol.for("react.memo"),
    Be = Symbol.for("react.lazy"),
    Se = Symbol.for("react.offscreen"),
    U = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (U && e[U]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var V = Object.assign,
    v;
  function R(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        v = (t && t[1]) || "";
      }
    return (
      `
` +
      v +
      e
    );
  }
  var Z = !1;
  function b(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (S) {
            var r = S;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (S) {
            r = S;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (S) {
          r = S;
        }
        e();
      }
    } catch (S) {
      if (S && r && typeof S.stack == "string") {
        for (
          var l = S.stack.split(`
`),
            o = r.stack.split(`
`),
            u = l.length - 1,
            c = o.length - 1;
          1 <= u && 0 <= c && l[u] !== o[c];

        )
          c--;
        for (; 1 <= u && 0 <= c; u--, c--)
          if (l[u] !== o[c]) {
            if (u !== 1 || c !== 1)
              do
                if ((u--, c--, 0 > c || l[u] !== o[c])) {
                  var d =
                    `
` + l[u].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      d.includes("<anonymous>") &&
                      (d = d.replace("<anonymous>", e.displayName)),
                    d
                  );
                }
              while (1 <= u && 0 <= c);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? R(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return R(e.type);
      case 16:
        return R("Lazy");
      case 13:
        return R("Suspense");
      case 19:
        return R("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = b(e.type, !1)), e;
      case 11:
        return (e = b(e.type.render, !1)), e;
      case 1:
        return (e = b(e.type, !0)), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case me:
        return "Fragment";
      case ge:
        return "Portal";
      case we:
        return "Profiler";
      case Ce:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case ut:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case yt:
          return (e.displayName || "Context") + ".Consumer";
        case Le:
          return (e._context.displayName || "Context") + ".Provider";
        case gt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case wt:
          return (
            (t = e.displayName || null), t !== null ? t : re(e.type) || "Memo"
          );
        case Be:
          (t = e._payload), (e = e._init);
          try {
            return re(e(t));
          } catch {}
      }
    return null;
  }
  function ae(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return re(t);
      case 8:
        return t === Ce ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function oe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function de(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ge(e) {
    var t = de(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        o = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            (r = "" + u), o.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (u) {
            r = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Mr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function du(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = de(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function jr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function eo(e, t) {
    var n = t.checked;
    return V({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = oe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function hu(e, t) {
    (t = t.checked), t != null && J(e, "checked", t, !1);
  }
  function to(e, t) {
    hu(e, t);
    var n = oe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? no(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && no(e, t.type, oe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function mu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function no(e, t, n) {
    (t !== "number" || jr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Wn = Array.isArray;
  function mn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ro(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return V({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function vu(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Wn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function yu(e, t) {
    var n = oe(t.value),
      r = oe(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function gu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? wu(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ur,
    Su = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ur = Ur || document.createElement("div"),
            Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ur.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Qn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Kn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Uc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Kn).forEach(function (e) {
    Uc.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kn[t] = Kn[e]);
    });
  });
  function ku(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Kn.hasOwnProperty(e) && Kn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Eu(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = ku(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var $c = V(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function oo(e, t) {
    if (t) {
      if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function io(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var uo = null;
  function ao(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var so = null,
    vn = null,
    yn = null;
  function xu(e) {
    if ((e = hr(e))) {
      if (typeof so != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = ul(t)), so(e.stateNode, e.type, t));
    }
  }
  function Cu(e) {
    vn ? (yn ? yn.push(e) : (yn = [e])) : (vn = e);
  }
  function Pu() {
    if (vn) {
      var e = vn,
        t = yn;
      if (((yn = vn = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
    }
  }
  function _u(e, t) {
    return e(t);
  }
  function Ru() {}
  var co = !1;
  function Lu(e, t, n) {
    if (co) return e(t, n);
    co = !0;
    try {
      return _u(e, t, n);
    } finally {
      (co = !1), (vn !== null || yn !== null) && (Ru(), Pu());
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ul(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var fo = !1;
  if (x)
    try {
      var Xn = {};
      Object.defineProperty(Xn, "passive", {
        get: function () {
          fo = !0;
        },
      }),
        window.addEventListener("test", Xn, Xn),
        window.removeEventListener("test", Xn, Xn);
    } catch {
      fo = !1;
    }
  function Ac(e, t, n, r, l, o, u, c, d) {
    var S = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, S);
    } catch (L) {
      this.onError(L);
    }
  }
  var Gn = !1,
    $r = null,
    Ar = !1,
    po = null,
    Bc = {
      onError: function (e) {
        (Gn = !0), ($r = e);
      },
    };
  function Vc(e, t, n, r, l, o, u, c, d) {
    (Gn = !1), ($r = null), Ac.apply(Bc, arguments);
  }
  function Hc(e, t, n, r, l, o, u, c, d) {
    if ((Vc.apply(this, arguments), Gn)) {
      if (Gn) {
        var S = $r;
        (Gn = !1), ($r = null);
      } else throw Error(a(198));
      Ar || ((Ar = !0), (po = S));
    }
  }
  function tn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Nu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Tu(e) {
    if (tn(e) !== e) throw Error(a(188));
  }
  function Wc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = tn(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Tu(l), e;
          if (o === r) return Tu(l), t;
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = l), (r = o);
      else {
        for (var u = !1, c = l.child; c; ) {
          if (c === n) {
            (u = !0), (n = l), (r = o);
            break;
          }
          if (c === r) {
            (u = !0), (r = l), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!u) {
          for (c = o.child; c; ) {
            if (c === n) {
              (u = !0), (n = o), (r = l);
              break;
            }
            if (c === r) {
              (u = !0), (r = o), (n = l);
              break;
            }
            c = c.sibling;
          }
          if (!u) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function zu(e) {
    return (e = Wc(e)), e !== null ? Ou(e) : null;
  }
  function Ou(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ou(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Iu = s.unstable_scheduleCallback,
    Du = s.unstable_cancelCallback,
    Qc = s.unstable_shouldYield,
    Kc = s.unstable_requestPaint,
    Ee = s.unstable_now,
    Yc = s.unstable_getCurrentPriorityLevel,
    ho = s.unstable_ImmediatePriority,
    Fu = s.unstable_UserBlockingPriority,
    Br = s.unstable_NormalPriority,
    Xc = s.unstable_LowPriority,
    Mu = s.unstable_IdlePriority,
    Vr = null,
    St = null;
  function Gc(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(Vr, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var at = Math.clz32 ? Math.clz32 : qc,
    Jc = Math.log,
    Zc = Math.LN2;
  function qc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Jc(e) / Zc) | 0)) | 0;
  }
  var Hr = 64,
    Wr = 4194304;
  function Jn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      o = e.pingedLanes,
      u = n & 268435455;
    if (u !== 0) {
      var c = u & ~l;
      c !== 0 ? (r = Jn(c)) : ((o &= u), o !== 0 && (r = Jn(o)));
    } else (u = n & ~l), u !== 0 ? (r = Jn(u)) : o !== 0 && (r = Jn(o));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & l) &&
      ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - at(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function bc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ef(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - at(o),
        c = 1 << u,
        d = l[u];
      d === -1
        ? (!(c & n) || c & r) && (l[u] = bc(c, t))
        : d <= t && (e.expiredLanes |= c),
        (o &= ~c);
    }
  }
  function mo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ju() {
    var e = Hr;
    return (Hr <<= 1), !(Hr & 4194240) && (Hr = 64), e;
  }
  function vo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - at(t)),
      (e[t] = n);
  }
  function tf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n),
        o = 1 << l;
      (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
  }
  function yo(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n),
        l = 1 << r;
      (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
  }
  var ie = 0;
  function Uu(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var $u,
    go,
    Au,
    Bu,
    Vu,
    wo = !1,
    Kr = [],
    Ft = null,
    Mt = null,
    jt = null,
    qn = new Map(),
    bn = new Map(),
    Ut = [],
    nf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Hu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ft = null;
        break;
      case "dragenter":
      case "dragleave":
        Mt = null;
        break;
      case "mouseover":
      case "mouseout":
        jt = null;
        break;
      case "pointerover":
      case "pointerout":
        qn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bn.delete(t.pointerId);
    }
  }
  function er(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: o,
          targetContainers: [l],
        }),
        t !== null && ((t = hr(t)), t !== null && go(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function rf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return (Ft = er(Ft, e, t, n, r, l)), !0;
      case "dragenter":
        return (Mt = er(Mt, e, t, n, r, l)), !0;
      case "mouseover":
        return (jt = er(jt, e, t, n, r, l)), !0;
      case "pointerover":
        var o = l.pointerId;
        return qn.set(o, er(qn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return (
          (o = l.pointerId), bn.set(o, er(bn.get(o) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function Wu(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Nu(n)), t !== null)) {
            (e.blockedOn = t),
              Vu(e.priority, function () {
                Au(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (uo = r), n.target.dispatchEvent(r), (uo = null);
      } else return (t = hr(n)), t !== null && go(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Qu(e, t, n) {
    Yr(e) && n.delete(t);
  }
  function lf() {
    (wo = !1),
      Ft !== null && Yr(Ft) && (Ft = null),
      Mt !== null && Yr(Mt) && (Mt = null),
      jt !== null && Yr(jt) && (jt = null),
      qn.forEach(Qu),
      bn.forEach(Qu);
  }
  function tr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      wo ||
        ((wo = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, lf)));
  }
  function nr(e) {
    function t(l) {
      return tr(l, e);
    }
    if (0 < Kr.length) {
      tr(Kr[0], e);
      for (var n = 1; n < Kr.length; n++) {
        var r = Kr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ft !== null && tr(Ft, e),
        Mt !== null && tr(Mt, e),
        jt !== null && tr(jt, e),
        qn.forEach(t),
        bn.forEach(t),
        n = 0;
      n < Ut.length;
      n++
    )
      (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
      Wu(n), n.blockedOn === null && Ut.shift();
  }
  var gn = ee.ReactCurrentBatchConfig,
    Xr = !0;
  function of(e, t, n, r) {
    var l = ie,
      o = gn.transition;
    gn.transition = null;
    try {
      (ie = 1), So(e, t, n, r);
    } finally {
      (ie = l), (gn.transition = o);
    }
  }
  function uf(e, t, n, r) {
    var l = ie,
      o = gn.transition;
    gn.transition = null;
    try {
      (ie = 4), So(e, t, n, r);
    } finally {
      (ie = l), (gn.transition = o);
    }
  }
  function So(e, t, n, r) {
    if (Xr) {
      var l = ko(e, t, n, r);
      if (l === null) Uo(e, t, r, Gr, n), Hu(e, r);
      else if (rf(l, e, t, n, r)) r.stopPropagation();
      else if ((Hu(e, r), t & 4 && -1 < nf.indexOf(e))) {
        for (; l !== null; ) {
          var o = hr(l);
          if (
            (o !== null && $u(o),
            (o = ko(e, t, n, r)),
            o === null && Uo(e, t, r, Gr, n),
            o === l)
          )
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Uo(e, t, r, null, n);
    }
  }
  var Gr = null;
  function ko(e, t, n, r) {
    if (((Gr = null), (e = ao(r)), (e = nn(e)), e !== null))
      if (((t = tn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Nu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Gr = e), null;
  }
  function Ku(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Yc()) {
          case ho:
            return 1;
          case Fu:
            return 4;
          case Br:
          case Xc:
            return 16;
          case Mu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var $t = null,
    Eo = null,
    Jr = null;
  function Yu() {
    if (Jr) return Jr;
    var e,
      t = Eo,
      n = t.length,
      r,
      l = "value" in $t ? $t.value : $t.textContent,
      o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++);
    return (Jr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Zr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function qr() {
    return !0;
  }
  function Xu() {
    return !1;
  }
  function Je(e) {
    function t(n, r, l, o, u) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null);
      for (var c in e)
        e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(o) : o[c]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? qr
          : Xu),
        (this.isPropagationStopped = Xu),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = qr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = qr));
        },
        persist: function () {},
        isPersistent: qr,
      }),
      t
    );
  }
  var wn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    xo = Je(wn),
    rr = V({}, wn, { view: 0, detail: 0 }),
    af = Je(rr),
    Co,
    Po,
    lr,
    br = V({}, rr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ro,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== lr &&
              (lr && e.type === "mousemove"
                ? ((Co = e.screenX - lr.screenX), (Po = e.screenY - lr.screenY))
                : (Po = Co = 0),
              (lr = e)),
            Co);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Po;
      },
    }),
    Gu = Je(br),
    sf = V({}, br, { dataTransfer: 0 }),
    cf = Je(sf),
    ff = V({}, rr, { relatedTarget: 0 }),
    _o = Je(ff),
    df = V({}, wn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pf = Je(df),
    hf = V({}, wn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    mf = Je(hf),
    vf = V({}, wn, { data: 0 }),
    Ju = Je(vf),
    yf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    gf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    wf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Sf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = wf[e])
      ? !!t[e]
      : !1;
  }
  function Ro() {
    return Sf;
  }
  var kf = V({}, rr, {
      key: function (e) {
        if (e.key) {
          var t = yf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Zr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? gf[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ro,
      charCode: function (e) {
        return e.type === "keypress" ? Zr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Zr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Ef = Je(kf),
    xf = V({}, br, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Zu = Je(xf),
    Cf = V({}, rr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ro,
    }),
    Pf = Je(Cf),
    _f = V({}, wn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rf = Je(_f),
    Lf = V({}, br, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Nf = Je(Lf),
    Tf = [9, 13, 27, 32],
    Lo = x && "CompositionEvent" in window,
    or = null;
  x && "documentMode" in document && (or = document.documentMode);
  var zf = x && "TextEvent" in window && !or,
    qu = x && (!Lo || (or && 8 < or && 11 >= or)),
    bu = " ",
    ea = !1;
  function ta(e, t) {
    switch (e) {
      case "keyup":
        return Tf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function na(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function Of(e, t) {
    switch (e) {
      case "compositionend":
        return na(t);
      case "keypress":
        return t.which !== 32 ? null : ((ea = !0), bu);
      case "textInput":
        return (e = t.data), e === bu && ea ? null : e;
      default:
        return null;
    }
  }
  function If(e, t) {
    if (Sn)
      return e === "compositionend" || (!Lo && ta(e, t))
        ? ((e = Yu()), (Jr = Eo = $t = null), (Sn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Df = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Df[e.type] : t === "textarea";
  }
  function la(e, t, n, r) {
    Cu(r),
      (t = ll(t, "onChange")),
      0 < t.length &&
        ((n = new xo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var ir = null,
    ur = null;
  function Ff(e) {
    Ea(e, 0);
  }
  function el(e) {
    var t = Pn(e);
    if (du(t)) return e;
  }
  function Mf(e, t) {
    if (e === "change") return t;
  }
  var oa = !1;
  if (x) {
    var No;
    if (x) {
      var To = "oninput" in document;
      if (!To) {
        var ia = document.createElement("div");
        ia.setAttribute("oninput", "return;"),
          (To = typeof ia.oninput == "function");
      }
      No = To;
    } else No = !1;
    oa = No && (!document.documentMode || 9 < document.documentMode);
  }
  function ua() {
    ir && (ir.detachEvent("onpropertychange", aa), (ur = ir = null));
  }
  function aa(e) {
    if (e.propertyName === "value" && el(ur)) {
      var t = [];
      la(t, ur, e, ao(e)), Lu(Ff, t);
    }
  }
  function jf(e, t, n) {
    e === "focusin"
      ? (ua(), (ir = t), (ur = n), ir.attachEvent("onpropertychange", aa))
      : e === "focusout" && ua();
  }
  function Uf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return el(ur);
  }
  function $f(e, t) {
    if (e === "click") return el(t);
  }
  function Af(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function Bf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var st = typeof Object.is == "function" ? Object.is : Bf;
  function ar(e, t) {
    if (st(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!w.call(t, l) || !st(e[l], t[l])) return !1;
    }
    return !0;
  }
  function sa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ca(e, t) {
    var n = sa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = sa(n);
    }
  }
  function fa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? fa(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function da() {
    for (var e = window, t = jr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = jr(e.document);
    }
    return t;
  }
  function zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Vf(e) {
    var t = da(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      fa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && zo(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            o = Math.min(r.start, l);
          (r = r.end === void 0 ? o : Math.min(r.end, l)),
            !e.extend && o > r && ((l = r), (r = o), (o = l)),
            (l = ca(n, o));
          var u = ca(n, r);
          l &&
            u &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== u.node ||
              e.focusOffset !== u.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            o > r
              ? (e.addRange(t), e.extend(u.node, u.offset))
              : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Hf = x && "documentMode" in document && 11 >= document.documentMode,
    kn = null,
    Oo = null,
    sr = null,
    Io = !1;
  function pa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io ||
      kn == null ||
      kn !== jr(r) ||
      ((r = kn),
      "selectionStart" in r && zo(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (sr && ar(sr, r)) ||
        ((sr = r),
        (r = ll(Oo, "onSelect")),
        0 < r.length &&
          ((t = new xo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = kn))));
  }
  function tl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var En = {
      animationend: tl("Animation", "AnimationEnd"),
      animationiteration: tl("Animation", "AnimationIteration"),
      animationstart: tl("Animation", "AnimationStart"),
      transitionend: tl("Transition", "TransitionEnd"),
    },
    Do = {},
    ha = {};
  x &&
    ((ha = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete En.animationend.animation,
      delete En.animationiteration.animation,
      delete En.animationstart.animation),
    "TransitionEvent" in window || delete En.transitionend.transition);
  function nl(e) {
    if (Do[e]) return Do[e];
    if (!En[e]) return e;
    var t = En[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ha) return (Do[e] = t[n]);
    return e;
  }
  var ma = nl("animationend"),
    va = nl("animationiteration"),
    ya = nl("animationstart"),
    ga = nl("transitionend"),
    wa = new Map(),
    Sa =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function At(e, t) {
    wa.set(e, t), m(t, [e]);
  }
  for (var Fo = 0; Fo < Sa.length; Fo++) {
    var Mo = Sa[Fo],
      Wf = Mo.toLowerCase(),
      Qf = Mo[0].toUpperCase() + Mo.slice(1);
    At(Wf, "on" + Qf);
  }
  At(ma, "onAnimationEnd"),
    At(va, "onAnimationIteration"),
    At(ya, "onAnimationStart"),
    At("dblclick", "onDoubleClick"),
    At("focusin", "onFocus"),
    At("focusout", "onBlur"),
    At(ga, "onTransitionEnd"),
    k("onMouseEnter", ["mouseout", "mouseover"]),
    k("onMouseLeave", ["mouseout", "mouseover"]),
    k("onPointerEnter", ["pointerout", "pointerover"]),
    k("onPointerLeave", ["pointerout", "pointerover"]),
    m(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    m(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    m("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    m(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    m(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var cr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Kf = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(cr)
    );
  function ka(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Hc(r, t, void 0, e), (e.currentTarget = null);
  }
  function Ea(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var u = r.length - 1; 0 <= u; u--) {
            var c = r[u],
              d = c.instance,
              S = c.currentTarget;
            if (((c = c.listener), d !== o && l.isPropagationStopped()))
              break e;
            ka(l, c, S), (o = d);
          }
        else
          for (u = 0; u < r.length; u++) {
            if (
              ((c = r[u]),
              (d = c.instance),
              (S = c.currentTarget),
              (c = c.listener),
              d !== o && l.isPropagationStopped())
            )
              break e;
            ka(l, c, S), (o = d);
          }
      }
    }
    if (Ar) throw ((e = po), (Ar = !1), (po = null), e);
  }
  function ce(e, t) {
    var n = t[Wo];
    n === void 0 && (n = t[Wo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (xa(t, e, 2, !1), n.add(r));
  }
  function jo(e, t, n) {
    var r = 0;
    t && (r |= 4), xa(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function fr(e) {
    if (!e[rl]) {
      (e[rl] = !0),
        p.forEach(function (n) {
          n !== "selectionchange" && (Kf.has(n) || jo(n, !1, e), jo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || ((t[rl] = !0), jo("selectionchange", !1, t));
    }
  }
  function xa(e, t, n, r) {
    switch (Ku(t)) {
      case 1:
        var l = of;
        break;
      case 4:
        l = uf;
        break;
      default:
        l = So;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !fo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function Uo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var c = r.stateNode.containerInfo;
          if (c === l || (c.nodeType === 8 && c.parentNode === l)) break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === l || (d.nodeType === 8 && d.parentNode === l))
              )
                return;
              u = u.return;
            }
          for (; c !== null; ) {
            if (((u = nn(c)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6)) {
              r = o = u;
              continue e;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
    Lu(function () {
      var S = o,
        L = ao(n),
        N = [];
      e: {
        var _ = wa.get(e);
        if (_ !== void 0) {
          var $ = xo,
            H = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              $ = Ef;
              break;
            case "focusin":
              (H = "focus"), ($ = _o);
              break;
            case "focusout":
              (H = "blur"), ($ = _o);
              break;
            case "beforeblur":
            case "afterblur":
              $ = _o;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              $ = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              $ = cf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              $ = Pf;
              break;
            case ma:
            case va:
            case ya:
              $ = pf;
              break;
            case ga:
              $ = Rf;
              break;
            case "scroll":
              $ = af;
              break;
            case "wheel":
              $ = Nf;
              break;
            case "copy":
            case "cut":
            case "paste":
              $ = mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              $ = Zu;
          }
          var W = (t & 4) !== 0,
            xe = !W && e === "scroll",
            y = W ? (_ !== null ? _ + "Capture" : null) : _;
          W = [];
          for (var h = S, g; h !== null; ) {
            g = h;
            var T = g.stateNode;
            if (
              (g.tag === 5 &&
                T !== null &&
                ((g = T),
                y !== null &&
                  ((T = Yn(h, y)), T != null && W.push(dr(h, T, g)))),
              xe)
            )
              break;
            h = h.return;
          }
          0 < W.length &&
            ((_ = new $(_, H, null, n, L)), N.push({ event: _, listeners: W }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            ($ = e === "mouseout" || e === "pointerout"),
            _ &&
              n !== uo &&
              (H = n.relatedTarget || n.fromElement) &&
              (nn(H) || H[Pt]))
          )
            break e;
          if (
            ($ || _) &&
            ((_ =
              L.window === L
                ? L
                : (_ = L.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            $
              ? ((H = n.relatedTarget || n.toElement),
                ($ = S),
                (H = H ? nn(H) : null),
                H !== null &&
                  ((xe = tn(H)), H !== xe || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : (($ = null), (H = S)),
            $ !== H)
          ) {
            if (
              ((W = Gu),
              (T = "onMouseLeave"),
              (y = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((W = Zu),
                (T = "onPointerLeave"),
                (y = "onPointerEnter"),
                (h = "pointer")),
              (xe = $ == null ? _ : Pn($)),
              (g = H == null ? _ : Pn(H)),
              (_ = new W(T, h + "leave", $, n, L)),
              (_.target = xe),
              (_.relatedTarget = g),
              (T = null),
              nn(L) === S &&
                ((W = new W(y, h + "enter", H, n, L)),
                (W.target = g),
                (W.relatedTarget = xe),
                (T = W)),
              (xe = T),
              $ && H)
            )
              t: {
                for (W = $, y = H, h = 0, g = W; g; g = xn(g)) h++;
                for (g = 0, T = y; T; T = xn(T)) g++;
                for (; 0 < h - g; ) (W = xn(W)), h--;
                for (; 0 < g - h; ) (y = xn(y)), g--;
                for (; h--; ) {
                  if (W === y || (y !== null && W === y.alternate)) break t;
                  (W = xn(W)), (y = xn(y));
                }
                W = null;
              }
            else W = null;
            $ !== null && Ca(N, _, $, W, !1),
              H !== null && xe !== null && Ca(N, xe, H, W, !0);
          }
        }
        e: {
          if (
            ((_ = S ? Pn(S) : window),
            ($ = _.nodeName && _.nodeName.toLowerCase()),
            $ === "select" || ($ === "input" && _.type === "file"))
          )
            var Q = Mf;
          else if (ra(_))
            if (oa) Q = Af;
            else {
              Q = Uf;
              var K = jf;
            }
          else
            ($ = _.nodeName) &&
              $.toLowerCase() === "input" &&
              (_.type === "checkbox" || _.type === "radio") &&
              (Q = $f);
          if (Q && (Q = Q(e, S))) {
            la(N, Q, n, L);
            break e;
          }
          K && K(e, _, S),
            e === "focusout" &&
              (K = _._wrapperState) &&
              K.controlled &&
              _.type === "number" &&
              no(_, "number", _.value);
        }
        switch (((K = S ? Pn(S) : window), e)) {
          case "focusin":
            (ra(K) || K.contentEditable === "true") &&
              ((kn = K), (Oo = S), (sr = null));
            break;
          case "focusout":
            sr = Oo = kn = null;
            break;
          case "mousedown":
            Io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Io = !1), pa(N, n, L);
            break;
          case "selectionchange":
            if (Hf) break;
          case "keydown":
          case "keyup":
            pa(N, n, L);
        }
        var Y;
        if (Lo)
          e: {
            switch (e) {
              case "compositionstart":
                var G = "onCompositionStart";
                break e;
              case "compositionend":
                G = "onCompositionEnd";
                break e;
              case "compositionupdate":
                G = "onCompositionUpdate";
                break e;
            }
            G = void 0;
          }
        else
          Sn
            ? ta(e, n) && (G = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (G = "onCompositionStart");
        G &&
          (qu &&
            n.locale !== "ko" &&
            (Sn || G !== "onCompositionStart"
              ? G === "onCompositionEnd" && Sn && (Y = Yu())
              : (($t = L),
                (Eo = "value" in $t ? $t.value : $t.textContent),
                (Sn = !0))),
          (K = ll(S, G)),
          0 < K.length &&
            ((G = new Ju(G, e, null, n, L)),
            N.push({ event: G, listeners: K }),
            Y ? (G.data = Y) : ((Y = na(n)), Y !== null && (G.data = Y)))),
          (Y = zf ? Of(e, n) : If(e, n)) &&
            ((S = ll(S, "onBeforeInput")),
            0 < S.length &&
              ((L = new Ju("onBeforeInput", "beforeinput", null, n, L)),
              N.push({ event: L, listeners: S }),
              (L.data = Y)));
      }
      Ea(N, t);
    });
  }
  function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        o = l.stateNode;
      l.tag === 5 &&
        o !== null &&
        ((l = o),
        (o = Yn(e, n)),
        o != null && r.unshift(dr(e, o, l)),
        (o = Yn(e, t)),
        o != null && r.push(dr(e, o, l))),
        (e = e.return);
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ca(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var c = n,
        d = c.alternate,
        S = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 &&
        S !== null &&
        ((c = S),
        l
          ? ((d = Yn(n, o)), d != null && u.unshift(dr(n, d, c)))
          : l || ((d = Yn(n, o)), d != null && u.push(dr(n, d, c)))),
        (n = n.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Yf = /\r\n?/g,
    Xf = /\u0000|\uFFFD/g;
  function Pa(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Yf,
        `
`
      )
      .replace(Xf, "");
  }
  function ol(e, t, n) {
    if (((t = Pa(t)), Pa(e) !== t && n)) throw Error(a(425));
  }
  function il() {}
  var $o = null,
    Ao = null;
  function Bo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
    Gf = typeof clearTimeout == "function" ? clearTimeout : void 0,
    _a = typeof Promise == "function" ? Promise : void 0,
    Jf =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof _a < "u"
        ? function (e) {
            return _a.resolve(null).then(e).catch(Zf);
          }
        : Vo;
  function Zf(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ho(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(l), nr(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    nr(t);
  }
  function Bt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ra(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Cn = Math.random().toString(36).slice(2),
    kt = "__reactFiber$" + Cn,
    pr = "__reactProps$" + Cn,
    Pt = "__reactContainer$" + Cn,
    Wo = "__reactEvents$" + Cn,
    qf = "__reactListeners$" + Cn,
    bf = "__reactHandles$" + Cn;
  function nn(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pt] || n[kt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Ra(e); e !== null; ) {
            if ((n = e[kt])) return n;
            e = Ra(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function hr(e) {
    return (
      (e = e[kt] || e[Pt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Pn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function ul(e) {
    return e[pr] || null;
  }
  var Qo = [],
    _n = -1;
  function Vt(e) {
    return { current: e };
  }
  function fe(e) {
    0 > _n || ((e.current = Qo[_n]), (Qo[_n] = null), _n--);
  }
  function se(e, t) {
    _n++, (Qo[_n] = e.current), (e.current = t);
  }
  var Ht = {},
    Fe = Vt(Ht),
    Ve = Vt(!1),
    rn = Ht;
  function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      o;
    for (o in n) l[o] = t[o];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function He(e) {
    return (e = e.childContextTypes), e != null;
  }
  function al() {
    fe(Ve), fe(Fe);
  }
  function La(e, t, n) {
    if (Fe.current !== Ht) throw Error(a(168));
    se(Fe, t), se(Ve, n);
  }
  function Na(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, ae(e) || "Unknown", l));
    return V({}, n, r);
  }
  function sl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ht),
      (rn = Fe.current),
      se(Fe, e),
      se(Ve, Ve.current),
      !0
    );
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = Na(e, t, rn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        fe(Ve),
        fe(Fe),
        se(Fe, e))
      : fe(Ve),
      se(Ve, n);
  }
  var _t = null,
    cl = !1,
    Ko = !1;
  function za(e) {
    _t === null ? (_t = [e]) : _t.push(e);
  }
  function ed(e) {
    (cl = !0), za(e);
  }
  function Wt() {
    if (!Ko && _t !== null) {
      Ko = !0;
      var e = 0,
        t = ie;
      try {
        var n = _t;
        for (ie = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (_t = null), (cl = !1);
      } catch (l) {
        throw (_t !== null && (_t = _t.slice(e + 1)), Iu(ho, Wt), l);
      } finally {
        (ie = t), (Ko = !1);
      }
    }
    return null;
  }
  var Ln = [],
    Nn = 0,
    fl = null,
    dl = 0,
    et = [],
    tt = 0,
    ln = null,
    Rt = 1,
    Lt = "";
  function on(e, t) {
    (Ln[Nn++] = dl), (Ln[Nn++] = fl), (fl = e), (dl = t);
  }
  function Oa(e, t, n) {
    (et[tt++] = Rt), (et[tt++] = Lt), (et[tt++] = ln), (ln = e);
    var r = Rt;
    e = Lt;
    var l = 32 - at(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - at(t) + l;
    if (30 < o) {
      var u = l - (l % 5);
      (o = (r & ((1 << u) - 1)).toString(32)),
        (r >>= u),
        (l -= u),
        (Rt = (1 << (32 - at(t) + l)) | (n << l) | r),
        (Lt = o + e);
    } else (Rt = (1 << o) | (n << l) | r), (Lt = e);
  }
  function Yo(e) {
    e.return !== null && (on(e, 1), Oa(e, 1, 0));
  }
  function Xo(e) {
    for (; e === fl; )
      (fl = Ln[--Nn]), (Ln[Nn] = null), (dl = Ln[--Nn]), (Ln[Nn] = null);
    for (; e === ln; )
      (ln = et[--tt]),
        (et[tt] = null),
        (Lt = et[--tt]),
        (et[tt] = null),
        (Rt = et[--tt]),
        (et[tt] = null);
  }
  var Ze = null,
    qe = null,
    pe = !1,
    ct = null;
  function Ia(e, t) {
    var n = ot(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Da(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ze = e), (qe = Bt(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ze = e), (qe = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = ln !== null ? { id: Rt, overflow: Lt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = ot(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Ze = e),
              (qe = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Go(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Jo(e) {
    if (pe) {
      var t = qe;
      if (t) {
        var n = t;
        if (!Da(e, t)) {
          if (Go(e)) throw Error(a(418));
          t = Bt(n.nextSibling);
          var r = Ze;
          t && Da(e, t)
            ? Ia(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (Ze = e));
        }
      } else {
        if (Go(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), (pe = !1), (Ze = e);
      }
    }
  }
  function Fa(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ze = e;
  }
  function pl(e) {
    if (e !== Ze) return !1;
    if (!pe) return Fa(e), (pe = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps))),
      t && (t = qe))
    ) {
      if (Go(e)) throw (Ma(), Error(a(418)));
      for (; t; ) Ia(e, t), (t = Bt(t.nextSibling));
    }
    if ((Fa(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                qe = Bt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        qe = null;
      }
    } else qe = Ze ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    for (var e = qe; e; ) e = Bt(e.nextSibling);
  }
  function Tn() {
    (qe = Ze = null), (pe = !1);
  }
  function Zo(e) {
    ct === null ? (ct = [e]) : ct.push(e);
  }
  var td = ee.ReactCurrentBatchConfig;
  function mr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (u) {
              var c = l.refs;
              u === null ? delete c[o] : (c[o] = u);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function hl(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ja(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ua(e) {
    function t(y, h) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [h]), (y.flags |= 16)) : g.push(h);
      }
    }
    function n(y, h) {
      if (!e) return null;
      for (; h !== null; ) t(y, h), (h = h.sibling);
      return null;
    }
    function r(y, h) {
      for (y = new Map(); h !== null; )
        h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
      return y;
    }
    function l(y, h) {
      return (y = qt(y, h)), (y.index = 0), (y.sibling = null), y;
    }
    function o(y, h, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < h ? ((y.flags |= 2), h) : g)
              : ((y.flags |= 2), h))
          : ((y.flags |= 1048576), h)
      );
    }
    function u(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, h, g, T) {
      return h === null || h.tag !== 6
        ? ((h = Vi(g, y.mode, T)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function d(y, h, g, T) {
      var Q = g.type;
      return Q === me
        ? L(y, h, g.props.children, T, g.key)
        : h !== null &&
          (h.elementType === Q ||
            (typeof Q == "object" &&
              Q !== null &&
              Q.$$typeof === Be &&
              ja(Q) === h.type))
        ? ((T = l(h, g.props)), (T.ref = mr(y, h, g)), (T.return = y), T)
        : ((T = Ul(g.type, g.key, g.props, null, y.mode, T)),
          (T.ref = mr(y, h, g)),
          (T.return = y),
          T);
    }
    function S(y, h, g, T) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== g.containerInfo ||
        h.stateNode.implementation !== g.implementation
        ? ((h = Hi(g, y.mode, T)), (h.return = y), h)
        : ((h = l(h, g.children || [])), (h.return = y), h);
    }
    function L(y, h, g, T, Q) {
      return h === null || h.tag !== 7
        ? ((h = hn(g, y.mode, T, Q)), (h.return = y), h)
        : ((h = l(h, g)), (h.return = y), h);
    }
    function N(y, h, g) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = Vi("" + h, y.mode, g)), (h.return = y), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ue:
            return (
              (g = Ul(h.type, h.key, h.props, null, y.mode, g)),
              (g.ref = mr(y, null, h)),
              (g.return = y),
              g
            );
          case ge:
            return (h = Hi(h, y.mode, g)), (h.return = y), h;
          case Be:
            var T = h._init;
            return N(y, T(h._payload), g);
        }
        if (Wn(h) || X(h))
          return (h = hn(h, y.mode, g, null)), (h.return = y), h;
        hl(y, h);
      }
      return null;
    }
    function _(y, h, g, T) {
      var Q = h !== null ? h.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return Q !== null ? null : c(y, h, "" + g, T);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ue:
            return g.key === Q ? d(y, h, g, T) : null;
          case ge:
            return g.key === Q ? S(y, h, g, T) : null;
          case Be:
            return (Q = g._init), _(y, h, Q(g._payload), T);
        }
        if (Wn(g) || X(g)) return Q !== null ? null : L(y, h, g, T, null);
        hl(y, g);
      }
      return null;
    }
    function $(y, h, g, T, Q) {
      if ((typeof T == "string" && T !== "") || typeof T == "number")
        return (y = y.get(g) || null), c(h, y, "" + T, Q);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ue:
            return (
              (y = y.get(T.key === null ? g : T.key) || null), d(h, y, T, Q)
            );
          case ge:
            return (
              (y = y.get(T.key === null ? g : T.key) || null), S(h, y, T, Q)
            );
          case Be:
            var K = T._init;
            return $(y, h, g, K(T._payload), Q);
        }
        if (Wn(T) || X(T)) return (y = y.get(g) || null), L(h, y, T, Q, null);
        hl(h, T);
      }
      return null;
    }
    function H(y, h, g, T) {
      for (
        var Q = null, K = null, Y = h, G = (h = 0), ze = null;
        Y !== null && G < g.length;
        G++
      ) {
        Y.index > G ? ((ze = Y), (Y = null)) : (ze = Y.sibling);
        var le = _(y, Y, g[G], T);
        if (le === null) {
          Y === null && (Y = ze);
          break;
        }
        e && Y && le.alternate === null && t(y, Y),
          (h = o(le, h, G)),
          K === null ? (Q = le) : (K.sibling = le),
          (K = le),
          (Y = ze);
      }
      if (G === g.length) return n(y, Y), pe && on(y, G), Q;
      if (Y === null) {
        for (; G < g.length; G++)
          (Y = N(y, g[G], T)),
            Y !== null &&
              ((h = o(Y, h, G)),
              K === null ? (Q = Y) : (K.sibling = Y),
              (K = Y));
        return pe && on(y, G), Q;
      }
      for (Y = r(y, Y); G < g.length; G++)
        (ze = $(Y, y, G, g[G], T)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              Y.delete(ze.key === null ? G : ze.key),
            (h = o(ze, h, G)),
            K === null ? (Q = ze) : (K.sibling = ze),
            (K = ze));
      return (
        e &&
          Y.forEach(function (bt) {
            return t(y, bt);
          }),
        pe && on(y, G),
        Q
      );
    }
    function W(y, h, g, T) {
      var Q = X(g);
      if (typeof Q != "function") throw Error(a(150));
      if (((g = Q.call(g)), g == null)) throw Error(a(151));
      for (
        var K = (Q = null), Y = h, G = (h = 0), ze = null, le = g.next();
        Y !== null && !le.done;
        G++, le = g.next()
      ) {
        Y.index > G ? ((ze = Y), (Y = null)) : (ze = Y.sibling);
        var bt = _(y, Y, le.value, T);
        if (bt === null) {
          Y === null && (Y = ze);
          break;
        }
        e && Y && bt.alternate === null && t(y, Y),
          (h = o(bt, h, G)),
          K === null ? (Q = bt) : (K.sibling = bt),
          (K = bt),
          (Y = ze);
      }
      if (le.done) return n(y, Y), pe && on(y, G), Q;
      if (Y === null) {
        for (; !le.done; G++, le = g.next())
          (le = N(y, le.value, T)),
            le !== null &&
              ((h = o(le, h, G)),
              K === null ? (Q = le) : (K.sibling = le),
              (K = le));
        return pe && on(y, G), Q;
      }
      for (Y = r(y, Y); !le.done; G++, le = g.next())
        (le = $(Y, y, G, le.value, T)),
          le !== null &&
            (e &&
              le.alternate !== null &&
              Y.delete(le.key === null ? G : le.key),
            (h = o(le, h, G)),
            K === null ? (Q = le) : (K.sibling = le),
            (K = le));
      return (
        e &&
          Y.forEach(function (Id) {
            return t(y, Id);
          }),
        pe && on(y, G),
        Q
      );
    }
    function xe(y, h, g, T) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === me &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ue:
            e: {
              for (var Q = g.key, K = h; K !== null; ) {
                if (K.key === Q) {
                  if (((Q = g.type), Q === me)) {
                    if (K.tag === 7) {
                      n(y, K.sibling),
                        (h = l(K, g.props.children)),
                        (h.return = y),
                        (y = h);
                      break e;
                    }
                  } else if (
                    K.elementType === Q ||
                    (typeof Q == "object" &&
                      Q !== null &&
                      Q.$$typeof === Be &&
                      ja(Q) === K.type)
                  ) {
                    n(y, K.sibling),
                      (h = l(K, g.props)),
                      (h.ref = mr(y, K, g)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                  n(y, K);
                  break;
                } else t(y, K);
                K = K.sibling;
              }
              g.type === me
                ? ((h = hn(g.props.children, y.mode, T, g.key)),
                  (h.return = y),
                  (y = h))
                : ((T = Ul(g.type, g.key, g.props, null, y.mode, T)),
                  (T.ref = mr(y, h, g)),
                  (T.return = y),
                  (y = T));
            }
            return u(y);
          case ge:
            e: {
              for (K = g.key; h !== null; ) {
                if (h.key === K)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === g.containerInfo &&
                    h.stateNode.implementation === g.implementation
                  ) {
                    n(y, h.sibling),
                      (h = l(h, g.children || [])),
                      (h.return = y),
                      (y = h);
                    break e;
                  } else {
                    n(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              (h = Hi(g, y.mode, T)), (h.return = y), (y = h);
            }
            return u(y);
          case Be:
            return (K = g._init), xe(y, h, K(g._payload), T);
        }
        if (Wn(g)) return H(y, h, g, T);
        if (X(g)) return W(y, h, g, T);
        hl(y, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          h !== null && h.tag === 6
            ? (n(y, h.sibling), (h = l(h, g)), (h.return = y), (y = h))
            : (n(y, h), (h = Vi(g, y.mode, T)), (h.return = y), (y = h)),
          u(y))
        : n(y, h);
    }
    return xe;
  }
  var zn = Ua(!0),
    $a = Ua(!1),
    ml = Vt(null),
    vl = null,
    On = null,
    qo = null;
  function bo() {
    qo = On = vl = null;
  }
  function ei(e) {
    var t = ml.current;
    fe(ml), (e._currentValue = t);
  }
  function ti(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function In(e, t) {
    (vl = e),
      (qo = On = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (We = !0), (e.firstContext = null));
  }
  function nt(e) {
    var t = e._currentValue;
    if (qo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
        if (vl === null) throw Error(a(308));
        (On = e), (vl.dependencies = { lanes: 0, firstContext: e });
      } else On = On.next = e;
    return t;
  }
  var un = null;
  function ni(e) {
    un === null ? (un = [e]) : un.push(e);
  }
  function Aa(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), ni(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Nt(e, r)
    );
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Qt = !1;
  function ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ba(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Tt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), te & 2)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Nt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), ni(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Nt(e, n)
    );
  }
  function yl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
    }
  }
  function Va(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          o === null ? (l = o = u) : (o = o.next = u), (n = n.next);
        } while (n !== null);
        o === null ? (l = o = t) : (o = o.next = t);
      } else l = o = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function gl(e, t, n, r) {
    var l = e.updateQueue;
    Qt = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c,
        S = d.next;
      (d.next = null), u === null ? (o = S) : (u.next = S), (u = d);
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (c = L.lastBaseUpdate),
        c !== u &&
          (c === null ? (L.firstBaseUpdate = S) : (c.next = S),
          (L.lastBaseUpdate = d)));
    }
    if (o !== null) {
      var N = l.baseState;
      (u = 0), (L = S = d = null), (c = o);
      do {
        var _ = c.lane,
          $ = c.eventTime;
        if ((r & _) === _) {
          L !== null &&
            (L = L.next =
              {
                eventTime: $,
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: c.callback,
                next: null,
              });
          e: {
            var H = e,
              W = c;
            switch (((_ = t), ($ = n), W.tag)) {
              case 1:
                if (((H = W.payload), typeof H == "function")) {
                  N = H.call($, N, _);
                  break e;
                }
                N = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = W.payload),
                  (_ = typeof H == "function" ? H.call($, N, _) : H),
                  _ == null)
                )
                  break e;
                N = V({}, N, _);
                break e;
              case 2:
                Qt = !0;
            }
          }
          c.callback !== null &&
            c.lane !== 0 &&
            ((e.flags |= 64),
            (_ = l.effects),
            _ === null ? (l.effects = [c]) : _.push(c));
        } else
          ($ = {
            eventTime: $,
            lane: _,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            L === null ? ((S = L = $), (d = N)) : (L = L.next = $),
            (u |= _);
        if (((c = c.next), c === null)) {
          if (((c = l.shared.pending), c === null)) break;
          (_ = c),
            (c = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (L === null && (d = N),
        (l.baseState = d),
        (l.firstBaseUpdate = S),
        (l.lastBaseUpdate = L),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do (u |= l.lane), (l = l.next);
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      (cn |= u), (e.lanes = u), (e.memoizedState = N);
    }
  }
  function Ha(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var vr = {},
    Et = Vt(vr),
    yr = Vt(vr),
    gr = Vt(vr);
  function an(e) {
    if (e === vr) throw Error(a(174));
    return e;
  }
  function li(e, t) {
    switch ((se(gr, t), se(yr, e), se(Et, vr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = lo(t, e));
    }
    fe(Et), se(Et, t);
  }
  function Dn() {
    fe(Et), fe(yr), fe(gr);
  }
  function Wa(e) {
    an(gr.current);
    var t = an(Et.current),
      n = lo(t, e.type);
    t !== n && (se(yr, e), se(Et, n));
  }
  function oi(e) {
    yr.current === e && (fe(Et), fe(yr));
  }
  var ve = Vt(0);
  function wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ii = [];
  function ui() {
    for (var e = 0; e < ii.length; e++)
      ii[e]._workInProgressVersionPrimary = null;
    ii.length = 0;
  }
  var Sl = ee.ReactCurrentDispatcher,
    ai = ee.ReactCurrentBatchConfig,
    sn = 0,
    ye = null,
    _e = null,
    Ne = null,
    kl = !1,
    wr = !1,
    Sr = 0,
    nd = 0;
  function Me() {
    throw Error(a(321));
  }
  function si(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!st(e[n], t[n])) return !1;
    return !0;
  }
  function ci(e, t, n, r, l, o) {
    if (
      ((sn = o),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Sl.current = e === null || e.memoizedState === null ? id : ud),
      (e = n(r, l)),
      wr)
    ) {
      o = 0;
      do {
        if (((wr = !1), (Sr = 0), 25 <= o)) throw Error(a(301));
        (o += 1),
          (Ne = _e = null),
          (t.updateQueue = null),
          (Sl.current = ad),
          (e = n(r, l));
      } while (wr);
    }
    if (
      ((Sl.current = Cl),
      (t = _e !== null && _e.next !== null),
      (sn = 0),
      (Ne = _e = ye = null),
      (kl = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function fi() {
    var e = Sr !== 0;
    return (Sr = 0), e;
  }
  function xt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function rt() {
    if (_e === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Ne === null ? ye.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (_e = e);
    else {
      if (e === null) throw Error(a(310));
      (_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function kr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function di(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = _e,
      l = r.baseQueue,
      o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        (l.next = o.next), (o.next = u);
      }
      (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
      (o = l.next), (r = r.baseState);
      var c = (u = null),
        d = null,
        S = o;
      do {
        var L = S.lane;
        if ((sn & L) === L)
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                action: S.action,
                hasEagerState: S.hasEagerState,
                eagerState: S.eagerState,
                next: null,
              }),
            (r = S.hasEagerState ? S.eagerState : e(r, S.action));
        else {
          var N = {
            lane: L,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null,
          };
          d === null ? ((c = d = N), (u = r)) : (d = d.next = N),
            (ye.lanes |= L),
            (cn |= L);
        }
        S = S.next;
      } while (S !== null && S !== o);
      d === null ? (u = r) : (d.next = c),
        st(r, t.memoizedState) || (We = !0),
        (t.memoizedState = r),
        (t.baseState = u),
        (t.baseQueue = d),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do (o = l.lane), (ye.lanes |= o), (cn |= o), (l = l.next);
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function pi(e) {
    var t = rt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do (o = e(o, u.action)), (u = u.next);
      while (u !== l);
      st(o, t.memoizedState) || (We = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (n.lastRenderedState = o);
    }
    return [o, r];
  }
  function Qa() {}
  function Ka(e, t) {
    var n = ye,
      r = rt(),
      l = t(),
      o = !st(r.memoizedState, l);
    if (
      (o && ((r.memoizedState = l), (We = !0)),
      (r = r.queue),
      hi(Ga.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || o || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Er(9, Xa.bind(null, n, r, l, t), void 0, null),
        Te === null)
      )
        throw Error(a(349));
      sn & 30 || Ya(n, t, l);
    }
    return l;
  }
  function Ya(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Xa(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Ja(t) && Za(e);
  }
  function Ga(e, t, n) {
    return n(function () {
      Ja(t) && Za(e);
    });
  }
  function Ja(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !st(e, n);
    } catch {
      return !0;
    }
  }
  function Za(e) {
    var t = Nt(e, 1);
    t !== null && ht(t, e, 1, -1);
  }
  function qa(e) {
    var t = xt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = od.bind(null, ye, e)),
      [t.memoizedState, e]
    );
  }
  function Er(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = ye.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (ye.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function ba() {
    return rt().memoizedState;
  }
  function El(e, t, n, r) {
    var l = xt();
    (ye.flags |= e),
      (l.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function xl(e, t, n, r) {
    var l = rt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (_e !== null) {
      var u = _e.memoizedState;
      if (((o = u.destroy), r !== null && si(r, u.deps))) {
        l.memoizedState = Er(t, n, o, r);
        return;
      }
    }
    (ye.flags |= e), (l.memoizedState = Er(1 | t, n, o, r));
  }
  function es(e, t) {
    return El(8390656, 8, e, t);
  }
  function hi(e, t) {
    return xl(2048, 8, e, t);
  }
  function ts(e, t) {
    return xl(4, 2, e, t);
  }
  function ns(e, t) {
    return xl(4, 4, e, t);
  }
  function rs(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ls(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), xl(4, 4, rs.bind(null, t, e), n)
    );
  }
  function mi() {}
  function os(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function is(e, t) {
    var n = rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && si(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function us(e, t, n) {
    return sn & 21
      ? (st(n, t) ||
          ((n = ju()), (ye.lanes |= n), (cn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (We = !0)), (e.memoizedState = n));
  }
  function rd(e, t) {
    var n = ie;
    (ie = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ai.transition;
    ai.transition = {};
    try {
      e(!1), t();
    } finally {
      (ie = n), (ai.transition = r);
    }
  }
  function as() {
    return rt().memoizedState;
  }
  function ld(e, t, n) {
    var r = Jt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ss(e))
    )
      cs(t, n);
    else if (((n = Aa(e, t, n, r)), n !== null)) {
      var l = Ae();
      ht(n, e, r, l), fs(n, t, r);
    }
  }
  function od(e, t, n) {
    var r = Jt(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ss(e)) cs(t, l);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            c = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = c), st(c, u))) {
            var d = t.interleaved;
            d === null
              ? ((l.next = l), ni(t))
              : ((l.next = d.next), (d.next = l)),
              (t.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (n = Aa(e, t, l, r)),
        n !== null && ((l = Ae()), ht(n, e, r, l), fs(n, t, r));
    }
  }
  function ss(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function cs(e, t) {
    wr = kl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function fs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), yo(e, n);
    }
  }
  var Cl = {
      readContext: nt,
      useCallback: Me,
      useContext: Me,
      useEffect: Me,
      useImperativeHandle: Me,
      useInsertionEffect: Me,
      useLayoutEffect: Me,
      useMemo: Me,
      useReducer: Me,
      useRef: Me,
      useState: Me,
      useDebugValue: Me,
      useDeferredValue: Me,
      useTransition: Me,
      useMutableSource: Me,
      useSyncExternalStore: Me,
      useId: Me,
      unstable_isNewReconciler: !1,
    },
    id = {
      readContext: nt,
      useCallback: function (e, t) {
        return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nt,
      useEffect: es,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          El(4194308, 4, rs.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return El(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return El(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = xt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = xt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ld.bind(null, ye, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = xt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: qa,
      useDebugValue: mi,
      useDeferredValue: function (e) {
        return (xt().memoizedState = e);
      },
      useTransition: function () {
        var e = qa(!1),
          t = e[0];
        return (e = rd.bind(null, e[1])), (xt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = ye,
          l = xt();
        if (pe) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), Te === null)) throw Error(a(349));
          sn & 30 || Ya(r, t, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: t };
        return (
          (l.queue = o),
          es(Ga.bind(null, r, o, e), [e]),
          (r.flags |= 2048),
          Er(9, Xa.bind(null, r, o, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = xt(),
          t = Te.identifierPrefix;
        if (pe) {
          var n = Lt,
            r = Rt;
          (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Sr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = nd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ud = {
      readContext: nt,
      useCallback: os,
      useContext: nt,
      useEffect: hi,
      useImperativeHandle: ls,
      useInsertionEffect: ts,
      useLayoutEffect: ns,
      useMemo: is,
      useReducer: di,
      useRef: ba,
      useState: function () {
        return di(kr);
      },
      useDebugValue: mi,
      useDeferredValue: function (e) {
        var t = rt();
        return us(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = di(kr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: as,
      unstable_isNewReconciler: !1,
    },
    ad = {
      readContext: nt,
      useCallback: os,
      useContext: nt,
      useEffect: hi,
      useImperativeHandle: ls,
      useInsertionEffect: ts,
      useLayoutEffect: ns,
      useMemo: is,
      useReducer: pi,
      useRef: ba,
      useState: function () {
        return pi(kr);
      },
      useDebugValue: mi,
      useDeferredValue: function (e) {
        var t = rt();
        return _e === null ? (t.memoizedState = e) : us(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = pi(kr)[0],
          t = rt().memoizedState;
        return [e, t];
      },
      useMutableSource: Qa,
      useSyncExternalStore: Ka,
      useId: as,
      unstable_isNewReconciler: !1,
    };
  function ft(e, t) {
    if (e && e.defaultProps) {
      (t = V({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function vi(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : V({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? tn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = Jt(e),
        o = Tt(r, l);
      (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ae(),
        l = Jt(e),
        o = Tt(r, l);
      (o.tag = 1),
        (o.payload = t),
        n != null && (o.callback = n),
        (t = Kt(e, o, l)),
        t !== null && (ht(t, e, l, r), yl(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ae(),
        r = Jt(e),
        l = Tt(n, r);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = Kt(e, l, r)),
        t !== null && (ht(t, e, r, n), yl(t, e, r));
    },
  };
  function ds(e, t, n, r, l, o, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, o, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ar(n, r) || !ar(l, o)
        : !0
    );
  }
  function ps(e, t, n) {
    var r = !1,
      l = Ht,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nt(o))
        : ((l = He(t) ? rn : Fe.current),
          (r = t.contextTypes),
          (o = (r = r != null) ? Rn(e, l) : Ht)),
      (t = new t(n, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Pl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function hs(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
  }
  function yi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ri(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (l.context = nt(o))
      : ((o = He(t) ? rn : Fe.current), (l.context = Rn(e, o))),
      (l.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (vi(e, t, o, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
        gl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += ne(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (o) {
      l =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function gi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function wi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var sd = typeof WeakMap == "function" ? WeakMap : Map;
  function ms(e, t, n) {
    (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Ol || ((Ol = !0), (Di = r)), wi(e, t);
      }),
      n
    );
  }
  function vs(e, t, n) {
    (n = Tt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      (n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          wi(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (n.callback = function () {
          wi(e, t),
            typeof r != "function" &&
              (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
          var u = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: u !== null ? u : "",
          });
        }),
      n
    );
  }
  function ys(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sd();
      var l = new Set();
      r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = xd.bind(null, e, t, n)), t.then(e, e));
  }
  function gs(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ws(e, t, n, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Tt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var cd = ee.ReactCurrentOwner,
    We = !1;
  function $e(e, t, n, r) {
    t.child = e === null ? $a(t, null, n, r) : zn(t, e.child, n, r);
  }
  function Ss(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
      In(t, l),
      (r = ci(e, t, n, r, o, l)),
      (n = fi()),
      e !== null && !We
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && n && Yo(t), (t.flags |= 1), $e(e, t, r, l), t.child)
    );
  }
  function ks(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" &&
        !Bi(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), Es(e, t, o, r, l))
        : ((e = Ul(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ar), n(u, r) && e.ref === t.ref)
      )
        return zt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = qt(o, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Es(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ar(o, r) && e.ref === t.ref)
        if (((We = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
          e.flags & 131072 && (We = !0);
        else return (t.lanes = e.lanes), zt(e, t, l);
    }
    return Si(e, t, n, r, l);
  }
  function xs(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          se(jn, be),
          (be |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            se(jn, be),
            (be |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = o !== null ? o.baseLanes : n),
          se(jn, be),
          (be |= r);
      }
    else
      o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
        se(jn, be),
        (be |= r);
    return $e(e, t, l, n), t.child;
  }
  function Cs(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Si(e, t, n, r, l) {
    var o = He(n) ? rn : Fe.current;
    return (
      (o = Rn(t, o)),
      In(t, l),
      (n = ci(e, t, n, r, o, l)),
      (r = fi()),
      e !== null && !We
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          zt(e, t, l))
        : (pe && r && Yo(t), (t.flags |= 1), $e(e, t, n, l), t.child)
    );
  }
  function Ps(e, t, n, r, l) {
    if (He(n)) {
      var o = !0;
      sl(t);
    } else o = !1;
    if ((In(t, l), t.stateNode === null))
      Rl(e, t), ps(t, n, r), yi(t, n, r, l), (r = !0);
    else if (e === null) {
      var u = t.stateNode,
        c = t.memoizedProps;
      u.props = c;
      var d = u.context,
        S = n.contextType;
      typeof S == "object" && S !== null
        ? (S = nt(S))
        : ((S = He(n) ? rn : Fe.current), (S = Rn(t, S)));
      var L = n.getDerivedStateFromProps,
        N =
          typeof L == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function";
      N ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== r || d !== S) && hs(t, u, r, S)),
        (Qt = !1);
      var _ = t.memoizedState;
      (u.state = _),
        gl(t, r, u, l),
        (d = t.memoizedState),
        c !== r || _ !== d || Ve.current || Qt
          ? (typeof L == "function" && (vi(t, n, L, r), (d = t.memoizedState)),
            (c = Qt || ds(t, n, c, r, _, d, S))
              ? (N ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = d)),
            (u.props = r),
            (u.state = d),
            (u.context = S),
            (r = c))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (u = t.stateNode),
        Ba(e, t),
        (c = t.memoizedProps),
        (S = t.type === t.elementType ? c : ft(t.type, c)),
        (u.props = S),
        (N = t.pendingProps),
        (_ = u.context),
        (d = n.contextType),
        typeof d == "object" && d !== null
          ? (d = nt(d))
          : ((d = He(n) ? rn : Fe.current), (d = Rn(t, d)));
      var $ = n.getDerivedStateFromProps;
      (L =
        typeof $ == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function") ||
        (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
          typeof u.componentWillReceiveProps != "function") ||
        ((c !== N || _ !== d) && hs(t, u, r, d)),
        (Qt = !1),
        (_ = t.memoizedState),
        (u.state = _),
        gl(t, r, u, l);
      var H = t.memoizedState;
      c !== N || _ !== H || Ve.current || Qt
        ? (typeof $ == "function" && (vi(t, n, $, r), (H = t.memoizedState)),
          (S = Qt || ds(t, n, S, r, _, H, d) || !1)
            ? (L ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(r, H, d),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(r, H, d)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = H)),
          (u.props = r),
          (u.state = H),
          (u.context = d),
          (r = S))
        : (typeof u.componentDidUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return ki(e, t, n, r, o, l);
  }
  function ki(e, t, n, r, l, o) {
    Cs(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Ta(t, n, !1), zt(e, t, o);
    (r = t.stateNode), (cd.current = t);
    var c =
      u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && u
        ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, c, o)))
        : $e(e, t, c, o),
      (t.memoizedState = r.state),
      l && Ta(t, n, !0),
      t.child
    );
  }
  function _s(e) {
    var t = e.stateNode;
    t.pendingContext
      ? La(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && La(e, t.context, !1),
      li(e, t.containerInfo);
  }
  function Rs(e, t, n, r, l) {
    return Tn(), Zo(l), (t.flags |= 256), $e(e, t, n, r), t.child;
  }
  var Ei = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ls(e, t, n) {
    var r = t.pendingProps,
      l = ve.current,
      o = !1,
      u = (t.flags & 128) !== 0,
      c;
    if (
      ((c = u) ||
        (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      c
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      se(ve, l & 1),
      e === null)
    )
      return (
        Jo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((u = r.children),
            (e = r.fallback),
            o
              ? ((r = t.mode),
                (o = t.child),
                (u = { mode: "hidden", children: u }),
                !(r & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = u))
                  : (o = $l(u, r, 0, null)),
                (e = hn(e, r, n, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = xi(n)),
                (t.memoizedState = Ei),
                e)
              : Ci(t, u))
      );
    if (((l = e.memoizedState), l !== null && ((c = l.dehydrated), c !== null)))
      return fd(e, t, u, r, c, l, n);
    if (o) {
      (o = r.fallback), (u = t.mode), (l = e.child), (c = l.sibling);
      var d = { mode: "hidden", children: r.children };
      return (
        !(u & 1) && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = d),
            (t.deletions = null))
          : ((r = qt(l, d)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        c !== null ? (o = qt(c, o)) : ((o = hn(o, u, n, null)), (o.flags |= 2)),
        (o.return = t),
        (r.return = t),
        (r.sibling = o),
        (t.child = r),
        (r = o),
        (o = t.child),
        (u = e.child.memoizedState),
        (u =
          u === null
            ? xi(n)
            : {
                baseLanes: u.baseLanes | n,
                cachePool: null,
                transitions: u.transitions,
              }),
        (o.memoizedState = u),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ei),
        r
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (r = qt(o, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Ci(e, t) {
    return (
      (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _l(e, t, n, r) {
    return (
      r !== null && Zo(r),
      zn(t, e.child, null, n),
      (e = Ci(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function fd(e, t, n, r, l, o, u) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = gi(Error(a(422)))), _l(e, t, u, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = $l({ mode: "visible", children: r.children }, l, 0, null)),
          (o = hn(o, l, u, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && zn(t, e.child, null, u),
          (t.child.memoizedState = xi(u)),
          (t.memoizedState = Ei),
          o);
    if (!(t.mode & 1)) return _l(e, t, u, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var c = r.dgst;
      return (
        (r = c), (o = Error(a(419))), (r = gi(o, r, void 0)), _l(e, t, u, r)
      );
    }
    if (((c = (u & e.childLanes) !== 0), We || c)) {
      if (((r = Te), r !== null)) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | u) ? 0 : l),
          l !== 0 &&
            l !== o.retryLane &&
            ((o.retryLane = l), Nt(e, l), ht(r, e, l, -1));
      }
      return Ai(), (r = gi(Error(a(421)))), _l(e, t, u, r);
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Cd.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (qe = Bt(l.nextSibling)),
        (Ze = t),
        (pe = !0),
        (ct = null),
        e !== null &&
          ((et[tt++] = Rt),
          (et[tt++] = Lt),
          (et[tt++] = ln),
          (Rt = e.id),
          (Lt = e.overflow),
          (ln = t)),
        (t = Ci(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Ns(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ti(e.return, t, n);
  }
  function Pi(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l));
  }
  function Ts(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      o = r.tail;
    if (($e(e, t, r.children, n), (r = ve.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ns(e, n, t);
          else if (e.tag === 19) Ns(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((se(ve, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && wl(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Pi(t, !1, l, n, o);
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && wl(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          Pi(t, !0, n, null, o);
          break;
        case "together":
          Pi(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rl(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function zt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (cn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = qt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function dd(e, t, n) {
    switch (t.tag) {
      case 3:
        _s(t), Tn();
        break;
      case 5:
        Wa(t);
        break;
      case 1:
        He(t.type) && sl(t);
        break;
      case 4:
        li(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        se(ml, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (se(ve, ve.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Ls(e, t, n)
            : (se(ve, ve.current & 1),
              (e = zt(e, t, n)),
              e !== null ? e.sibling : null);
        se(ve, ve.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Ts(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          se(ve, ve.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), xs(e, t, n);
    }
    return zt(e, t, n);
  }
  var zs, _i, Os, Is;
  (zs = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (_i = function () {}),
    (Os = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = t.stateNode), an(Et.current);
        var o = null;
        switch (n) {
          case "input":
            (l = eo(e, l)), (r = eo(e, r)), (o = []);
            break;
          case "select":
            (l = V({}, l, { value: void 0 })),
              (r = V({}, r, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (l = ro(e, l)), (r = ro(e, r)), (o = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = il);
        }
        oo(n, r);
        var u;
        n = null;
        for (S in l)
          if (!r.hasOwnProperty(S) && l.hasOwnProperty(S) && l[S] != null)
            if (S === "style") {
              var c = l[S];
              for (u in c) c.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
            } else
              S !== "dangerouslySetInnerHTML" &&
                S !== "children" &&
                S !== "suppressContentEditableWarning" &&
                S !== "suppressHydrationWarning" &&
                S !== "autoFocus" &&
                (f.hasOwnProperty(S)
                  ? o || (o = [])
                  : (o = o || []).push(S, null));
        for (S in r) {
          var d = r[S];
          if (
            ((c = l != null ? l[S] : void 0),
            r.hasOwnProperty(S) && d !== c && (d != null || c != null))
          )
            if (S === "style")
              if (c) {
                for (u in c)
                  !c.hasOwnProperty(u) ||
                    (d && d.hasOwnProperty(u)) ||
                    (n || (n = {}), (n[u] = ""));
                for (u in d)
                  d.hasOwnProperty(u) &&
                    c[u] !== d[u] &&
                    (n || (n = {}), (n[u] = d[u]));
              } else n || (o || (o = []), o.push(S, n)), (n = d);
            else
              S === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (o = o || []).push(S, d))
                : S === "children"
                ? (typeof d != "string" && typeof d != "number") ||
                  (o = o || []).push(S, "" + d)
                : S !== "suppressContentEditableWarning" &&
                  S !== "suppressHydrationWarning" &&
                  (f.hasOwnProperty(S)
                    ? (d != null && S === "onScroll" && ce("scroll", e),
                      o || c === d || (o = []))
                    : (o = o || []).push(S, d));
        }
        n && (o = o || []).push("style", n);
        var S = o;
        (t.updateQueue = S) && (t.flags |= 4);
      }
    }),
    (Is = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function xr(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function pd(e, t, n) {
    var r = t.pendingProps;
    switch ((Xo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return He(t.type) && al(), je(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Dn(),
          fe(Ve),
          fe(Fe),
          ui(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), ct !== null && (ji(ct), (ct = null)))),
          _i(e, t),
          je(t),
          null
        );
      case 5:
        oi(t);
        var l = an(gr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Os(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return je(t), null;
          }
          if (((e = an(Et.current)), pl(t))) {
            (r = t.stateNode), (n = t.type);
            var o = t.memoizedProps;
            switch (((r[kt] = t), (r[pr] = o), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ce("cancel", r), ce("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) ce(cr[l], r);
                break;
              case "source":
                ce("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", r), ce("load", r);
                break;
              case "details":
                ce("toggle", r);
                break;
              case "input":
                pu(r, o), ce("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!o.multiple }),
                  ce("invalid", r);
                break;
              case "textarea":
                vu(r, o), ce("invalid", r);
            }
            oo(n, o), (l = null);
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var c = o[u];
                u === "children"
                  ? typeof c == "string"
                    ? r.textContent !== c &&
                      (o.suppressHydrationWarning !== !0 &&
                        ol(r.textContent, c, e),
                      (l = ["children", c]))
                    : typeof c == "number" &&
                      r.textContent !== "" + c &&
                      (o.suppressHydrationWarning !== !0 &&
                        ol(r.textContent, c, e),
                      (l = ["children", "" + c]))
                  : f.hasOwnProperty(u) &&
                    c != null &&
                    u === "onScroll" &&
                    ce("scroll", r);
              }
            switch (n) {
              case "input":
                Mr(r), mu(r, o, !0);
                break;
              case "textarea":
                Mr(r), gu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = il);
            }
            (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (u = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = wu(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = u.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = u.createElement(n, { is: r.is }))
                  : ((e = u.createElement(n)),
                    n === "select" &&
                      ((u = e),
                      r.multiple
                        ? (u.multiple = !0)
                        : r.size && (u.size = r.size)))
                : (e = u.createElementNS(e, n)),
              (e[kt] = t),
              (e[pr] = r),
              zs(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((u = io(n, r)), n)) {
                case "dialog":
                  ce("cancel", e), ce("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ce("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < cr.length; l++) ce(cr[l], e);
                  l = r;
                  break;
                case "source":
                  ce("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ce("error", e), ce("load", e), (l = r);
                  break;
                case "details":
                  ce("toggle", e), (l = r);
                  break;
                case "input":
                  pu(e, r), (l = eo(e, r)), ce("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = V({}, r, { value: void 0 })),
                    ce("invalid", e);
                  break;
                case "textarea":
                  vu(e, r), (l = ro(e, r)), ce("invalid", e);
                  break;
                default:
                  l = r;
              }
              oo(n, l), (c = l);
              for (o in c)
                if (c.hasOwnProperty(o)) {
                  var d = c[o];
                  o === "style"
                    ? Eu(e, d)
                    : o === "dangerouslySetInnerHTML"
                    ? ((d = d ? d.__html : void 0), d != null && Su(e, d))
                    : o === "children"
                    ? typeof d == "string"
                      ? (n !== "textarea" || d !== "") && Qn(e, d)
                      : typeof d == "number" && Qn(e, "" + d)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (f.hasOwnProperty(o)
                        ? d != null && o === "onScroll" && ce("scroll", e)
                        : d != null && J(e, o, d, u));
                }
              switch (n) {
                case "input":
                  Mr(e), mu(e, r, !1);
                  break;
                case "textarea":
                  Mr(e), gu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (o = r.value),
                    o != null
                      ? mn(e, !!r.multiple, o, !1)
                      : r.defaultValue != null &&
                        mn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = il);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return je(t), null;
      case 6:
        if (e && t.stateNode != null) Is(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = an(gr.current)), an(Et.current), pl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[kt] = t),
              (o = r.nodeValue !== n) && ((e = Ze), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ol(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ol(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[kt] = t),
              (t.stateNode = r);
        }
        return je(t), null;
      case 13:
        if (
          (fe(ve),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (pe && qe !== null && t.mode & 1 && !(t.flags & 128))
            Ma(), Tn(), (t.flags |= 98560), (o = !1);
          else if (((o = pl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(a(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(a(317));
              o[kt] = t;
            } else
              Tn(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            je(t), (o = !1);
          } else ct !== null && (ji(ct), (ct = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || ve.current & 1 ? Re === 0 && (Re = 3) : Ai())),
            t.updateQueue !== null && (t.flags |= 4),
            je(t),
            null);
      case 4:
        return (
          Dn(),
          _i(e, t),
          e === null && fr(t.stateNode.containerInfo),
          je(t),
          null
        );
      case 10:
        return ei(t.type._context), je(t), null;
      case 17:
        return He(t.type) && al(), je(t), null;
      case 19:
        if ((fe(ve), (o = t.memoizedState), o === null)) return je(t), null;
        if (((r = (t.flags & 128) !== 0), (u = o.rendering), u === null))
          if (r) xr(o, !1);
          else {
            if (Re !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = wl(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      xr(o, !1),
                      r = u.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (o = n),
                      (e = r),
                      (o.flags &= 14680066),
                      (u = o.alternate),
                      u === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = u.childLanes),
                          (o.lanes = u.lanes),
                          (o.child = u.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = u.memoizedProps),
                          (o.memoizedState = u.memoizedState),
                          (o.updateQueue = u.updateQueue),
                          (o.type = u.type),
                          (e = u.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return se(ve, (ve.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Ee() > Un &&
              ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = wl(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                xr(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !u.alternate &&
                  !pe)
              )
                return je(t), null;
            } else
              2 * Ee() - o.renderingStartTime > Un &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), xr(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((n = o.last),
              n !== null ? (n.sibling = u) : (t.child = u),
              (o.last = u));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Ee()),
            (t.sibling = null),
            (n = ve.current),
            se(ve, r ? (n & 1) | 2 : n & 1),
            t)
          : (je(t), null);
      case 22:
      case 23:
        return (
          $i(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? be & 1073741824 &&
              (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : je(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function hd(e, t) {
    switch ((Xo(t), t.tag)) {
      case 1:
        return (
          He(t.type) && al(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dn(),
          fe(Ve),
          fe(Fe),
          ui(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return oi(t), null;
      case 13:
        if (
          (fe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          Tn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return fe(ve), null;
      case 4:
        return Dn(), null;
      case 10:
        return ei(t.type._context), null;
      case 22:
      case 23:
        return $i(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ll = !1,
    Ue = !1,
    md = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function Mn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ke(e, t, r);
        }
      else n.current = null;
  }
  function Ri(e, t, n) {
    try {
      n();
    } catch (r) {
      ke(e, t, r);
    }
  }
  var Ds = !1;
  function vd(e, t) {
    if ((($o = Xr), (e = da()), zo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              o = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, o.nodeType;
            } catch {
              n = null;
              break e;
            }
            var u = 0,
              c = -1,
              d = -1,
              S = 0,
              L = 0,
              N = e,
              _ = null;
            t: for (;;) {
              for (
                var $;
                N !== n || (l !== 0 && N.nodeType !== 3) || (c = u + l),
                  N !== o || (r !== 0 && N.nodeType !== 3) || (d = u + r),
                  N.nodeType === 3 && (u += N.nodeValue.length),
                  ($ = N.firstChild) !== null;

              )
                (_ = N), (N = $);
              for (;;) {
                if (N === e) break t;
                if (
                  (_ === n && ++S === l && (c = u),
                  _ === o && ++L === r && (d = u),
                  ($ = N.nextSibling) !== null)
                )
                  break;
                (N = _), (_ = N.parentNode);
              }
              N = $;
            }
            n = c === -1 || d === -1 ? null : { start: c, end: d };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ao = { focusedElem: e, selectionRange: n }, Xr = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (B = e);
      else
        for (; B !== null; ) {
          t = B;
          try {
            var H = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var W = H.memoizedProps,
                      xe = H.memoizedState,
                      y = t.stateNode,
                      h = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? W : ft(t.type, W),
                        xe
                      );
                    y.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (T) {
            ke(t, t.return, T);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B = e);
            break;
          }
          B = t.return;
        }
    return (H = Ds), (Ds = !1), H;
  }
  function Cr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          (l.destroy = void 0), o !== void 0 && Ri(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Nl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Li(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Fs(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Fs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[kt],
          delete t[pr],
          delete t[Wo],
          delete t[qf],
          delete t[bf])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ms(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function js(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ms(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ni(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = il));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ni(e, t, n), e = e.sibling; e !== null; )
        Ni(e, t, n), (e = e.sibling);
  }
  function Ti(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ti(e, t, n), e = e.sibling; e !== null; )
        Ti(e, t, n), (e = e.sibling);
  }
  var Oe = null,
    dt = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) Us(e, t, n), (n = n.sibling);
  }
  function Us(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(Vr, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Ue || Mn(n, t);
      case 6:
        var r = Oe,
          l = dt;
        (Oe = null),
          Yt(e, t, n),
          (Oe = r),
          (dt = l),
          Oe !== null &&
            (dt
              ? ((e = Oe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Oe.removeChild(n.stateNode));
        break;
      case 18:
        Oe !== null &&
          (dt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ho(e.parentNode, n)
                : e.nodeType === 1 && Ho(e, n),
              nr(e))
            : Ho(Oe, n.stateNode));
        break;
      case 4:
        (r = Oe),
          (l = dt),
          (Oe = n.stateNode.containerInfo),
          (dt = !0),
          Yt(e, t, n),
          (Oe = r),
          (dt = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Ue &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var o = l,
              u = o.destroy;
            (o = o.tag),
              u !== void 0 && (o & 2 || o & 4) && Ri(n, t, u),
              (l = l.next);
          } while (l !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (
          !Ue &&
          (Mn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (c) {
            ke(n, t, c);
          }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Ue = (r = Ue) || n.memoizedState !== null), Yt(e, t, n), (Ue = r))
          : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function $s(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new md()),
        t.forEach(function (r) {
          var l = Pd.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function pt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var o = e,
            u = t,
            c = u;
          e: for (; c !== null; ) {
            switch (c.tag) {
              case 5:
                (Oe = c.stateNode), (dt = !1);
                break e;
              case 3:
                (Oe = c.stateNode.containerInfo), (dt = !0);
                break e;
              case 4:
                (Oe = c.stateNode.containerInfo), (dt = !0);
                break e;
            }
            c = c.return;
          }
          if (Oe === null) throw Error(a(160));
          Us(o, u, l), (Oe = null), (dt = !1);
          var d = l.alternate;
          d !== null && (d.return = null), (l.return = null);
        } catch (S) {
          ke(l, t, S);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) As(t, e), (t = t.sibling);
  }
  function As(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((pt(t, e), Ct(e), r & 4)) {
          try {
            Cr(3, e, e.return), Nl(3, e);
          } catch (W) {
            ke(e, e.return, W);
          }
          try {
            Cr(5, e, e.return);
          } catch (W) {
            ke(e, e.return, W);
          }
        }
        break;
      case 1:
        pt(t, e), Ct(e), r & 512 && n !== null && Mn(n, n.return);
        break;
      case 5:
        if (
          (pt(t, e),
          Ct(e),
          r & 512 && n !== null && Mn(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            Qn(l, "");
          } catch (W) {
            ke(e, e.return, W);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var o = e.memoizedProps,
            u = n !== null ? n.memoizedProps : o,
            c = e.type,
            d = e.updateQueue;
          if (((e.updateQueue = null), d !== null))
            try {
              c === "input" && o.type === "radio" && o.name != null && hu(l, o),
                io(c, u);
              var S = io(c, o);
              for (u = 0; u < d.length; u += 2) {
                var L = d[u],
                  N = d[u + 1];
                L === "style"
                  ? Eu(l, N)
                  : L === "dangerouslySetInnerHTML"
                  ? Su(l, N)
                  : L === "children"
                  ? Qn(l, N)
                  : J(l, L, N, S);
              }
              switch (c) {
                case "input":
                  to(l, o);
                  break;
                case "textarea":
                  yu(l, o);
                  break;
                case "select":
                  var _ = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var $ = o.value;
                  $ != null
                    ? mn(l, !!o.multiple, $, !1)
                    : _ !== !!o.multiple &&
                      (o.defaultValue != null
                        ? mn(l, !!o.multiple, o.defaultValue, !0)
                        : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[pr] = o;
            } catch (W) {
              ke(e, e.return, W);
            }
        }
        break;
      case 6:
        if ((pt(t, e), Ct(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (l = e.stateNode), (o = e.memoizedProps);
          try {
            l.nodeValue = o;
          } catch (W) {
            ke(e, e.return, W);
          }
        }
        break;
      case 3:
        if (
          (pt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            nr(t.containerInfo);
          } catch (W) {
            ke(e, e.return, W);
          }
        break;
      case 4:
        pt(t, e), Ct(e);
        break;
      case 13:
        pt(t, e),
          Ct(e),
          (l = e.child),
          l.flags & 8192 &&
            ((o = l.memoizedState !== null),
            (l.stateNode.isHidden = o),
            !o ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ii = Ee())),
          r & 4 && $s(e);
        break;
      case 22:
        if (
          ((L = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Ue = (S = Ue) || L), pt(t, e), (Ue = S)) : pt(t, e),
          Ct(e),
          r & 8192)
        ) {
          if (
            ((S = e.memoizedState !== null),
            (e.stateNode.isHidden = S) && !L && e.mode & 1)
          )
            for (B = e, L = e.child; L !== null; ) {
              for (N = B = L; B !== null; ) {
                switch (((_ = B), ($ = _.child), _.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Cr(4, _, _.return);
                    break;
                  case 1:
                    Mn(_, _.return);
                    var H = _.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      (r = _), (n = _.return);
                      try {
                        (t = r),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount();
                      } catch (W) {
                        ke(r, n, W);
                      }
                    }
                    break;
                  case 5:
                    Mn(_, _.return);
                    break;
                  case 22:
                    if (_.memoizedState !== null) {
                      Hs(N);
                      continue;
                    }
                }
                $ !== null ? (($.return = _), (B = $)) : Hs(N);
              }
              L = L.sibling;
            }
          e: for (L = null, N = e; ; ) {
            if (N.tag === 5) {
              if (L === null) {
                L = N;
                try {
                  (l = N.stateNode),
                    S
                      ? ((o = l.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((c = N.stateNode),
                        (d = N.memoizedProps.style),
                        (u =
                          d != null && d.hasOwnProperty("display")
                            ? d.display
                            : null),
                        (c.style.display = ku("display", u)));
                } catch (W) {
                  ke(e, e.return, W);
                }
              }
            } else if (N.tag === 6) {
              if (L === null)
                try {
                  N.stateNode.nodeValue = S ? "" : N.memoizedProps;
                } catch (W) {
                  ke(e, e.return, W);
                }
            } else if (
              ((N.tag !== 22 && N.tag !== 23) ||
                N.memoizedState === null ||
                N === e) &&
              N.child !== null
            ) {
              (N.child.return = N), (N = N.child);
              continue;
            }
            if (N === e) break e;
            for (; N.sibling === null; ) {
              if (N.return === null || N.return === e) break e;
              L === N && (L = null), (N = N.return);
            }
            L === N && (L = null),
              (N.sibling.return = N.return),
              (N = N.sibling);
          }
        }
        break;
      case 19:
        pt(t, e), Ct(e), r & 4 && $s(e);
        break;
      case 21:
        break;
      default:
        pt(t, e), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ms(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
            var o = js(e);
            Ti(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo,
              c = js(e);
            Ni(e, c, u);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        ke(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yd(e, t, n) {
    (B = e), Bs(e);
  }
  function Bs(e, t, n) {
    for (var r = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Ll;
        if (!u) {
          var c = l.alternate,
            d = (c !== null && c.memoizedState !== null) || Ue;
          c = Ll;
          var S = Ue;
          if (((Ll = u), (Ue = d) && !S))
            for (B = l; B !== null; )
              (u = B),
                (d = u.child),
                u.tag === 22 && u.memoizedState !== null
                  ? Ws(l)
                  : d !== null
                  ? ((d.return = u), (B = d))
                  : Ws(l);
          for (; o !== null; ) (B = o), Bs(o), (o = o.sibling);
          (B = l), (Ll = c), (Ue = S);
        }
        Vs(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (B = o)) : Vs(e);
    }
  }
  function Vs(e) {
    for (; B !== null; ) {
      var t = B;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Ue || Nl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Ue)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : ft(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && Ha(t, o, r);
                break;
              case 3:
                var u = t.updateQueue;
                if (u !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Ha(t, u, n);
                }
                break;
              case 5:
                var c = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = c;
                  var d = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d.autoFocus && n.focus();
                      break;
                    case "img":
                      d.src && (n.src = d.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var S = t.alternate;
                  if (S !== null) {
                    var L = S.memoizedState;
                    if (L !== null) {
                      var N = L.dehydrated;
                      N !== null && nr(N);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          Ue || (t.flags & 512 && Li(t));
        } catch (_) {
          ke(t, t.return, _);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Hs(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (B = n);
        break;
      }
      B = t.return;
    }
  }
  function Ws(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Nl(4, t);
            } catch (d) {
              ke(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                ke(t, l, d);
              }
            }
            var o = t.return;
            try {
              Li(t);
            } catch (d) {
              ke(t, o, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Li(t);
            } catch (d) {
              ke(t, u, d);
            }
        }
      } catch (d) {
        ke(t, t.return, d);
      }
      if (t === e) {
        B = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        (c.return = t.return), (B = c);
        break;
      }
      B = t.return;
    }
  }
  var gd = Math.ceil,
    Tl = ee.ReactCurrentDispatcher,
    zi = ee.ReactCurrentOwner,
    lt = ee.ReactCurrentBatchConfig,
    te = 0,
    Te = null,
    Pe = null,
    Ie = 0,
    be = 0,
    jn = Vt(0),
    Re = 0,
    Pr = null,
    cn = 0,
    zl = 0,
    Oi = 0,
    _r = null,
    Qe = null,
    Ii = 0,
    Un = 1 / 0,
    Ot = null,
    Ol = !1,
    Di = null,
    Xt = null,
    Il = !1,
    Gt = null,
    Dl = 0,
    Rr = 0,
    Fi = null,
    Fl = -1,
    Ml = 0;
  function Ae() {
    return te & 6 ? Ee() : Fl !== -1 ? Fl : (Fl = Ee());
  }
  function Jt(e) {
    return e.mode & 1
      ? te & 2 && Ie !== 0
        ? Ie & -Ie
        : td.transition !== null
        ? (Ml === 0 && (Ml = ju()), Ml)
        : ((e = ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ku(e.type))),
          e)
      : 1;
  }
  function ht(e, t, n, r) {
    if (50 < Rr) throw ((Rr = 0), (Fi = null), Error(a(185)));
    Zn(e, n, r),
      (!(te & 2) || e !== Te) &&
        (e === Te && (!(te & 2) && (zl |= n), Re === 4 && Zt(e, Ie)),
        Ke(e, r),
        n === 1 &&
          te === 0 &&
          !(t.mode & 1) &&
          ((Un = Ee() + 500), cl && Wt()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    ef(e, t);
    var r = Qr(e, e === Te ? Ie : 0);
    if (r === 0)
      n !== null && Du(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Du(n), t === 1))
        e.tag === 0 ? ed(Ks.bind(null, e)) : za(Ks.bind(null, e)),
          Jf(function () {
            !(te & 6) && Wt();
          }),
          (n = null);
      else {
        switch (Uu(r)) {
          case 1:
            n = ho;
            break;
          case 4:
            n = Fu;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = Mu;
            break;
          default:
            n = Br;
        }
        n = ec(n, Qs.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Qs(e, t) {
    if (((Fl = -1), (Ml = 0), te & 6)) throw Error(a(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = Qr(e, e === Te ? Ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = jl(e, r);
    else {
      t = r;
      var l = te;
      te |= 2;
      var o = Xs();
      (Te !== e || Ie !== t) && ((Ot = null), (Un = Ee() + 500), dn(e, t));
      do
        try {
          kd();
          break;
        } catch (c) {
          Ys(e, c);
        }
      while (!0);
      bo(),
        (Tl.current = o),
        (te = l),
        Pe !== null ? (t = 0) : ((Te = null), (Ie = 0), (t = Re));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = mo(e)), l !== 0 && ((r = l), (t = Mi(e, l)))),
        t === 1)
      )
        throw ((n = Pr), dn(e, 0), Zt(e, r), Ke(e, Ee()), n);
      if (t === 6) Zt(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !wd(l) &&
            ((t = jl(e, r)),
            t === 2 && ((o = mo(e)), o !== 0 && ((r = o), (t = Mi(e, o)))),
            t === 1))
        )
          throw ((n = Pr), dn(e, 0), Zt(e, r), Ke(e, Ee()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            pn(e, Qe, Ot);
            break;
          case 3:
            if (
              (Zt(e, r),
              (r & 130023424) === r && ((t = Ii + 500 - Ee()), 10 < t))
            ) {
              if (Qr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                Ae(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = Vo(pn.bind(null, e, Qe, Ot), t);
              break;
            }
            pn(e, Qe, Ot);
            break;
          case 4:
            if ((Zt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - at(r);
              (o = 1 << u), (u = t[u]), u > l && (l = u), (r &= ~o);
            }
            if (
              ((r = l),
              (r = Ee() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * gd(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Vo(pn.bind(null, e, Qe, Ot), r);
              break;
            }
            pn(e, Qe, Ot);
            break;
          case 5:
            pn(e, Qe, Ot);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return Ke(e, Ee()), e.callbackNode === n ? Qs.bind(null, e) : null;
  }
  function Mi(e, t) {
    var n = _r;
    return (
      e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
      (e = jl(e, t)),
      e !== 2 && ((t = Qe), (Qe = n), t !== null && ji(t)),
      e
    );
  }
  function ji(e) {
    Qe === null ? (Qe = e) : Qe.push.apply(Qe, e);
  }
  function wd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              o = l.getSnapshot;
            l = l.value;
            try {
              if (!st(o(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (
      t &= ~Oi,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - at(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Ks(e) {
    if (te & 6) throw Error(a(327));
    $n();
    var t = Qr(e, 0);
    if (!(t & 1)) return Ke(e, Ee()), null;
    var n = jl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = mo(e);
      r !== 0 && ((t = r), (n = Mi(e, r)));
    }
    if (n === 1) throw ((n = Pr), dn(e, 0), Zt(e, t), Ke(e, Ee()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      pn(e, Qe, Ot),
      Ke(e, Ee()),
      null
    );
  }
  function Ui(e, t) {
    var n = te;
    te |= 1;
    try {
      return e(t);
    } finally {
      (te = n), te === 0 && ((Un = Ee() + 500), cl && Wt());
    }
  }
  function fn(e) {
    Gt !== null && Gt.tag === 0 && !(te & 6) && $n();
    var t = te;
    te |= 1;
    var n = lt.transition,
      r = ie;
    try {
      if (((lt.transition = null), (ie = 1), e)) return e();
    } finally {
      (ie = r), (lt.transition = n), (te = t), !(te & 6) && Wt();
    }
  }
  function $i() {
    (be = jn.current), fe(jn);
  }
  function dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Gf(n)), Pe !== null))
      for (n = Pe.return; n !== null; ) {
        var r = n;
        switch ((Xo(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && al();
            break;
          case 3:
            Dn(), fe(Ve), fe(Fe), ui();
            break;
          case 5:
            oi(r);
            break;
          case 4:
            Dn();
            break;
          case 13:
            fe(ve);
            break;
          case 19:
            fe(ve);
            break;
          case 10:
            ei(r.type._context);
            break;
          case 22:
          case 23:
            $i();
        }
        n = n.return;
      }
    if (
      ((Te = e),
      (Pe = e = qt(e.current, null)),
      (Ie = be = t),
      (Re = 0),
      (Pr = null),
      (Oi = zl = cn = 0),
      (Qe = _r = null),
      un !== null)
    ) {
      for (t = 0; t < un.length; t++)
        if (((n = un[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            o = n.pending;
          if (o !== null) {
            var u = o.next;
            (o.next = l), (r.next = u);
          }
          n.pending = r;
        }
      un = null;
    }
    return e;
  }
  function Ys(e, t) {
    do {
      var n = Pe;
      try {
        if ((bo(), (Sl.current = Cl), kl)) {
          for (var r = ye.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          kl = !1;
        }
        if (
          ((sn = 0),
          (Ne = _e = ye = null),
          (wr = !1),
          (Sr = 0),
          (zi.current = null),
          n === null || n.return === null)
        ) {
          (Re = 1), (Pr = t), (Pe = null);
          break;
        }
        e: {
          var o = e,
            u = n.return,
            c = n,
            d = t;
          if (
            ((t = Ie),
            (c.flags |= 32768),
            d !== null && typeof d == "object" && typeof d.then == "function")
          ) {
            var S = d,
              L = c,
              N = L.tag;
            if (!(L.mode & 1) && (N === 0 || N === 11 || N === 15)) {
              var _ = L.alternate;
              _
                ? ((L.updateQueue = _.updateQueue),
                  (L.memoizedState = _.memoizedState),
                  (L.lanes = _.lanes))
                : ((L.updateQueue = null), (L.memoizedState = null));
            }
            var $ = gs(u);
            if ($ !== null) {
              ($.flags &= -257),
                ws($, u, c, o, t),
                $.mode & 1 && ys(o, S, t),
                (t = $),
                (d = S);
              var H = t.updateQueue;
              if (H === null) {
                var W = new Set();
                W.add(d), (t.updateQueue = W);
              } else H.add(d);
              break e;
            } else {
              if (!(t & 1)) {
                ys(o, S, t), Ai();
                break e;
              }
              d = Error(a(426));
            }
          } else if (pe && c.mode & 1) {
            var xe = gs(u);
            if (xe !== null) {
              !(xe.flags & 65536) && (xe.flags |= 256),
                ws(xe, u, c, o, t),
                Zo(Fn(d, c));
              break e;
            }
          }
          (o = d = Fn(d, c)),
            Re !== 4 && (Re = 2),
            _r === null ? (_r = [o]) : _r.push(o),
            (o = u);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var y = ms(o, d, t);
                Va(o, y);
                break e;
              case 1:
                c = d;
                var h = o.type,
                  g = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Xt === null || !Xt.has(g))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var T = vs(o, c, t);
                  Va(o, T);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Js(n);
      } catch (Q) {
        (t = Q), Pe === n && n !== null && (Pe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Xs() {
    var e = Tl.current;
    return (Tl.current = Cl), e === null ? Cl : e;
  }
  function Ai() {
    (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Te === null || (!(cn & 268435455) && !(zl & 268435455)) || Zt(Te, Ie);
  }
  function jl(e, t) {
    var n = te;
    te |= 2;
    var r = Xs();
    (Te !== e || Ie !== t) && ((Ot = null), dn(e, t));
    do
      try {
        Sd();
        break;
      } catch (l) {
        Ys(e, l);
      }
    while (!0);
    if ((bo(), (te = n), (Tl.current = r), Pe !== null)) throw Error(a(261));
    return (Te = null), (Ie = 0), Re;
  }
  function Sd() {
    for (; Pe !== null; ) Gs(Pe);
  }
  function kd() {
    for (; Pe !== null && !Qc(); ) Gs(Pe);
  }
  function Gs(e) {
    var t = bs(e.alternate, e, be);
    (e.memoizedProps = e.pendingProps),
      t === null ? Js(e) : (Pe = t),
      (zi.current = null);
  }
  function Js(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = hd(n, t)), n !== null)) {
          (n.flags &= 32767), (Pe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Re = 6), (Pe = null);
          return;
        }
      } else if (((n = pd(n, t, be)), n !== null)) {
        Pe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Pe = t;
        return;
      }
      Pe = t = e;
    } while (t !== null);
    Re === 0 && (Re = 5);
  }
  function pn(e, t, n) {
    var r = ie,
      l = lt.transition;
    try {
      (lt.transition = null), (ie = 1), Ed(e, t, n, r);
    } finally {
      (lt.transition = l), (ie = r);
    }
    return null;
  }
  function Ed(e, t, n, r) {
    do $n();
    while (Gt !== null);
    if (te & 6) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
      (tf(e, o),
      e === Te && ((Pe = Te = null), (Ie = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Il ||
        ((Il = !0),
        ec(Br, function () {
          return $n(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
    ) {
      (o = lt.transition), (lt.transition = null);
      var u = ie;
      ie = 1;
      var c = te;
      (te |= 4),
        (zi.current = null),
        vd(e, n),
        As(n, e),
        Vf(Ao),
        (Xr = !!$o),
        (Ao = $o = null),
        (e.current = n),
        yd(n),
        Kc(),
        (te = c),
        (ie = u),
        (lt.transition = o);
    } else e.current = n;
    if (
      (Il && ((Il = !1), (Gt = e), (Dl = l)),
      (o = e.pendingLanes),
      o === 0 && (Xt = null),
      Gc(n.stateNode),
      Ke(e, Ee()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Ol) throw ((Ol = !1), (e = Di), (Di = null), e);
    return (
      Dl & 1 && e.tag !== 0 && $n(),
      (o = e.pendingLanes),
      o & 1 ? (e === Fi ? Rr++ : ((Rr = 0), (Fi = e))) : (Rr = 0),
      Wt(),
      null
    );
  }
  function $n() {
    if (Gt !== null) {
      var e = Uu(Dl),
        t = lt.transition,
        n = ie;
      try {
        if (((lt.transition = null), (ie = 16 > e ? 16 : e), Gt === null))
          var r = !1;
        else {
          if (((e = Gt), (Gt = null), (Dl = 0), te & 6)) throw Error(a(331));
          var l = te;
          for (te |= 4, B = e.current; B !== null; ) {
            var o = B,
              u = o.child;
            if (B.flags & 16) {
              var c = o.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var S = c[d];
                  for (B = S; B !== null; ) {
                    var L = B;
                    switch (L.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Cr(8, L, o);
                    }
                    var N = L.child;
                    if (N !== null) (N.return = L), (B = N);
                    else
                      for (; B !== null; ) {
                        L = B;
                        var _ = L.sibling,
                          $ = L.return;
                        if ((Fs(L), L === S)) {
                          B = null;
                          break;
                        }
                        if (_ !== null) {
                          (_.return = $), (B = _);
                          break;
                        }
                        B = $;
                      }
                  }
                }
                var H = o.alternate;
                if (H !== null) {
                  var W = H.child;
                  if (W !== null) {
                    H.child = null;
                    do {
                      var xe = W.sibling;
                      (W.sibling = null), (W = xe);
                    } while (W !== null);
                  }
                }
                B = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) (u.return = o), (B = u);
            else
              e: for (; B !== null; ) {
                if (((o = B), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(9, o, o.return);
                  }
                var y = o.sibling;
                if (y !== null) {
                  (y.return = o.return), (B = y);
                  break e;
                }
                B = o.return;
              }
          }
          var h = e.current;
          for (B = h; B !== null; ) {
            u = B;
            var g = u.child;
            if (u.subtreeFlags & 2064 && g !== null) (g.return = u), (B = g);
            else
              e: for (u = h; B !== null; ) {
                if (((c = B), c.flags & 2048))
                  try {
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Nl(9, c);
                    }
                  } catch (Q) {
                    ke(c, c.return, Q);
                  }
                if (c === u) {
                  B = null;
                  break e;
                }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), (B = T);
                  break e;
                }
                B = c.return;
              }
          }
          if (
            ((te = l),
            Wt(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot(Vr, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ie = n), (lt.transition = t);
      }
    }
    return !1;
  }
  function Zs(e, t, n) {
    (t = Fn(n, t)),
      (t = ms(e, t, 1)),
      (e = Kt(e, t, 1)),
      (t = Ae()),
      e !== null && (Zn(e, 1, t), Ke(e, t));
  }
  function ke(e, t, n) {
    if (e.tag === 3) Zs(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zs(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Xt === null || !Xt.has(r)))
          ) {
            (e = Fn(n, e)),
              (e = vs(t, e, 1)),
              (t = Kt(t, e, 1)),
              (e = Ae()),
              t !== null && (Zn(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function xd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ae()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Te === e &&
        (Ie & n) === n &&
        (Re === 4 || (Re === 3 && (Ie & 130023424) === Ie && 500 > Ee() - Ii)
          ? dn(e, 0)
          : (Oi |= n)),
      Ke(e, t);
  }
  function qs(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Wr), (Wr <<= 1), !(Wr & 130023424) && (Wr = 4194304))
        : (t = 1));
    var n = Ae();
    (e = Nt(e, t)), e !== null && (Zn(e, t, n), Ke(e, n));
  }
  function Cd(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), qs(e, n);
  }
  function Pd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), qs(e, n);
  }
  var bs;
  bs = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ve.current) We = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (We = !1), dd(e, t, n);
        We = !!(e.flags & 131072);
      }
    else (We = !1), pe && t.flags & 1048576 && Oa(t, dl, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Rl(e, t), (e = t.pendingProps);
        var l = Rn(t, Fe.current);
        In(t, n), (l = ci(null, t, r, e, l, n));
        var o = fi();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              He(r) ? ((o = !0), sl(t)) : (o = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              ri(t),
              (l.updater = Pl),
              (t.stateNode = l),
              (l._reactInternals = t),
              yi(t, r, e, n),
              (t = ki(null, t, r, !0, o, n)))
            : ((t.tag = 0), pe && o && Yo(t), $e(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Rl(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = Rd(r)),
            (e = ft(r, e)),
            l)
          ) {
            case 0:
              t = Si(null, t, r, e, n);
              break e;
            case 1:
              t = Ps(null, t, r, e, n);
              break e;
            case 11:
              t = Ss(null, t, r, e, n);
              break e;
            case 14:
              t = ks(null, t, r, ft(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Si(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Ps(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((_s(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (o = t.memoizedState),
            (l = o.element),
            Ba(e, t),
            gl(t, r, null, n);
          var u = t.memoizedState;
          if (((r = u.element), o.isDehydrated))
            if (
              ((o = {
                element: r,
                isDehydrated: !1,
                cache: u.cache,
                pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                transitions: u.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (l = Fn(Error(a(423)), t)), (t = Rs(e, t, r, n, l));
              break e;
            } else if (r !== l) {
              (l = Fn(Error(a(424)), t)), (t = Rs(e, t, r, n, l));
              break e;
            } else
              for (
                qe = Bt(t.stateNode.containerInfo.firstChild),
                  Ze = t,
                  pe = !0,
                  ct = null,
                  n = $a(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Tn(), r === l)) {
              t = zt(e, t, n);
              break e;
            }
            $e(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Wa(t),
          e === null && Jo(t),
          (r = t.type),
          (l = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (u = l.children),
          Bo(r, l) ? (u = null) : o !== null && Bo(r, o) && (t.flags |= 32),
          Cs(e, t),
          $e(e, t, u, n),
          t.child
        );
      case 6:
        return e === null && Jo(t), null;
      case 13:
        return Ls(e, t, n);
      case 4:
        return (
          li(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = zn(t, null, r, n)) : $e(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Ss(e, t, r, l, n)
        );
      case 7:
        return $e(e, t, t.pendingProps, n), t.child;
      case 8:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return $e(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (u = l.value),
            se(ml, r._currentValue),
            (r._currentValue = u),
            o !== null)
          )
            if (st(o.value, u)) {
              if (o.children === l.children && !Ve.current) {
                t = zt(e, t, n);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var c = o.dependencies;
                if (c !== null) {
                  u = o.child;
                  for (var d = c.firstContext; d !== null; ) {
                    if (d.context === r) {
                      if (o.tag === 1) {
                        (d = Tt(-1, n & -n)), (d.tag = 2);
                        var S = o.updateQueue;
                        if (S !== null) {
                          S = S.shared;
                          var L = S.pending;
                          L === null
                            ? (d.next = d)
                            : ((d.next = L.next), (L.next = d)),
                            (S.pending = d);
                        }
                      }
                      (o.lanes |= n),
                        (d = o.alternate),
                        d !== null && (d.lanes |= n),
                        ti(o.return, n, t),
                        (c.lanes |= n);
                      break;
                    }
                    d = d.next;
                  }
                } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((u = o.return), u === null)) throw Error(a(341));
                  (u.lanes |= n),
                    (c = u.alternate),
                    c !== null && (c.lanes |= n),
                    ti(u, n, t),
                    (u = o.sibling);
                } else u = o.child;
                if (u !== null) u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === t) {
                      u = null;
                      break;
                    }
                    if (((o = u.sibling), o !== null)) {
                      (o.return = u.return), (u = o);
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          $e(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          In(t, n),
          (l = nt(l)),
          (r = r(l)),
          (t.flags |= 1),
          $e(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = ft(r, t.pendingProps)),
          (l = ft(r.type, l)),
          ks(e, t, r, l, n)
        );
      case 15:
        return Es(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : ft(r, l)),
          Rl(e, t),
          (t.tag = 1),
          He(r) ? ((e = !0), sl(t)) : (e = !1),
          In(t, n),
          ps(t, r, l),
          yi(t, r, l, n),
          ki(null, t, r, !0, e, n)
        );
      case 19:
        return Ts(e, t, n);
      case 22:
        return xs(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function ec(e, t) {
    return Iu(e, t);
  }
  function _d(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ot(e, t, n, r) {
    return new _d(e, t, n, r);
  }
  function Bi(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Rd(e) {
    if (typeof e == "function") return Bi(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === gt)) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function qt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ot(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ul(e, t, n, r, l, o) {
    var u = 2;
    if (((r = e), typeof e == "function")) Bi(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else
      e: switch (e) {
        case me:
          return hn(n.children, l, o, t);
        case Ce:
          (u = 8), (l |= 8);
          break;
        case we:
          return (
            (e = ot(12, n, t, l | 2)), (e.elementType = we), (e.lanes = o), e
          );
        case Xe:
          return (e = ot(13, n, t, l)), (e.elementType = Xe), (e.lanes = o), e;
        case ut:
          return (e = ot(19, n, t, l)), (e.elementType = ut), (e.lanes = o), e;
        case Se:
          return $l(n, l, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Le:
                u = 10;
                break e;
              case yt:
                u = 9;
                break e;
              case gt:
                u = 11;
                break e;
              case wt:
                u = 14;
                break e;
              case Be:
                (u = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = ot(u, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
    );
  }
  function hn(e, t, n, r) {
    return (e = ot(7, e, r, t)), (e.lanes = n), e;
  }
  function $l(e, t, n, r) {
    return (
      (e = ot(22, e, r, t)),
      (e.elementType = Se),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Vi(e, t, n) {
    return (e = ot(6, e, null, t)), (e.lanes = n), e;
  }
  function Hi(e, t, n) {
    return (
      (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Ld(e, t, n, r, l) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vo(0)),
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Wi(e, t, n, r, l, o, u, c, d) {
    return (
      (e = new Ld(e, t, n, c, d)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = ot(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      ri(o),
      e
    );
  }
  function Nd(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ge,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function tc(e) {
    if (!e) return Ht;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (He(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (He(n)) return Na(e, n, t);
    }
    return t;
  }
  function nc(e, t, n, r, l, o, u, c, d) {
    return (
      (e = Wi(n, r, !0, e, l, o, u, c, d)),
      (e.context = tc(null)),
      (n = e.current),
      (r = Ae()),
      (l = Jt(n)),
      (o = Tt(r, l)),
      (o.callback = t ?? null),
      Kt(n, o, l),
      (e.current.lanes = l),
      Zn(e, l, r),
      Ke(e, r),
      e
    );
  }
  function Al(e, t, n, r) {
    var l = t.current,
      o = Ae(),
      u = Jt(l);
    return (
      (n = tc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Tt(o, u)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Kt(l, t, u)),
      e !== null && (ht(e, l, u, o), yl(e, l, u)),
      u
    );
  }
  function Bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Qi(e, t) {
    rc(e, t), (e = e.alternate) && rc(e, t);
  }
  var lc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Ki(e) {
    this._internalRoot = e;
  }
  (Vl.prototype.render = Ki.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      Al(e, t, null, null);
    }),
    (Vl.prototype.unmount = Ki.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fn(function () {
            Al(null, e, null, null);
          }),
            (t[Pt] = null);
        }
      });
  function Vl(e) {
    this._internalRoot = e;
  }
  Vl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Bu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
      Ut.splice(n, 0, e), n === 0 && Wu(e);
    }
  };
  function Yi(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Hl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function oc() {}
  function Td(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function () {
          var S = Bl(u);
          o.call(S);
        };
      }
      var u = nc(t, r, e, 0, null, !1, !1, "", oc);
      return (
        (e._reactRootContainer = u),
        (e[Pt] = u.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        fn(),
        u
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function () {
        var S = Bl(d);
        c.call(S);
      };
    }
    var d = Wi(e, 0, !1, null, null, !1, !1, "", oc);
    return (
      (e._reactRootContainer = d),
      (e[Pt] = d.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      fn(function () {
        Al(t, d, n, r);
      }),
      d
    );
  }
  function Wl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var c = l;
        l = function () {
          var d = Bl(u);
          c.call(d);
        };
      }
      Al(t, u, e, l);
    } else u = Td(n, t, e, l, r);
    return Bl(u);
  }
  ($u = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Jn(t.pendingLanes);
          n !== 0 &&
            (yo(t, n | 1), Ke(t, Ee()), !(te & 6) && ((Un = Ee() + 500), Wt()));
        }
        break;
      case 13:
        fn(function () {
          var r = Nt(e, 1);
          if (r !== null) {
            var l = Ae();
            ht(r, e, 1, l);
          }
        }),
          Qi(e, 1);
    }
  }),
    (go = function (e) {
      if (e.tag === 13) {
        var t = Nt(e, 134217728);
        if (t !== null) {
          var n = Ae();
          ht(t, e, 134217728, n);
        }
        Qi(e, 134217728);
      }
    }),
    (Au = function (e) {
      if (e.tag === 13) {
        var t = Jt(e),
          n = Nt(e, t);
        if (n !== null) {
          var r = Ae();
          ht(n, e, t, r);
        }
        Qi(e, t);
      }
    }),
    (Bu = function () {
      return ie;
    }),
    (Vu = function (e, t) {
      var n = ie;
      try {
        return (ie = e), t();
      } finally {
        ie = n;
      }
    }),
    (so = function (e, t, n) {
      switch (t) {
        case "input":
          if ((to(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = ul(r);
                if (!l) throw Error(a(90));
                du(r), to(r, l);
              }
            }
          }
          break;
        case "textarea":
          yu(e, n);
          break;
        case "select":
          (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
      }
    }),
    (_u = Ui),
    (Ru = fn);
  var zd = { usingClientEntryPoint: !1, Events: [hr, Pn, ul, Cu, Pu, Ui] },
    Lr = {
      findFiberByHostInstance: nn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Od = {
      bundleType: Lr.bundleType,
      version: Lr.version,
      rendererPackageName: Lr.rendererPackageName,
      rendererConfig: Lr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = zu(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Lr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber)
      try {
        (Vr = Ql.inject(Od)), (St = Ql);
      } catch {}
  }
  return (
    (Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd),
    (Ye.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Yi(t)) throw Error(a(200));
      return Nd(e, t, null, n);
    }),
    (Ye.createRoot = function (e, t) {
      if (!Yi(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = lc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = Wi(e, 1, !1, null, null, n, !1, r, l)),
        (e[Pt] = t.current),
        fr(e.nodeType === 8 ? e.parentNode : e),
        new Ki(t)
      );
    }),
    (Ye.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = zu(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Ye.flushSync = function (e) {
      return fn(e);
    }),
    (Ye.hydrate = function (e, t, n) {
      if (!Hl(t)) throw Error(a(200));
      return Wl(null, e, t, !0, n);
    }),
    (Ye.hydrateRoot = function (e, t, n) {
      if (!Yi(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = "",
        u = lc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
        (t = nc(t, null, e, 1, n ?? null, l, !1, o, u)),
        (e[Pt] = t.current),
        fr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l);
      return new Vl(t);
    }),
    (Ye.render = function (e, t, n) {
      if (!Hl(t)) throw Error(a(200));
      return Wl(null, e, t, !1, n);
    }),
    (Ye.unmountComponentAtNode = function (e) {
      if (!Hl(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (fn(function () {
            Wl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Pt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Ye.unstable_batchedUpdates = Ui),
    (Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Hl(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Wl(e, t, n, !1, r);
    }),
    (Ye.version = "18.3.1-next-f1338f8080-20240426"),
    Ye
  );
}
var hc;
function Vd() {
  if (hc) return Ji.exports;
  hc = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), (Ji.exports = Bd()), Ji.exports;
}
var mc;
function Hd() {
  if (mc) return Kl;
  mc = 1;
  var i = Vd();
  return (Kl.createRoot = i.createRoot), (Kl.hydrateRoot = i.hydrateRoot), Kl;
}
var Wd = Hd();
const Qd = "modulepreload",
  Kd = function (i) {
    return "/" + i;
  },
  vc = {},
  Zl = function (s, a, p) {
    let f = Promise.resolve();
    if (a && a.length > 0) {
      document.getElementsByTagName("link");
      const k = document.querySelector("meta[property=csp-nonce]"),
        x =
          (k == null ? void 0 : k.nonce) ||
          (k == null ? void 0 : k.getAttribute("nonce"));
      f = Promise.allSettled(
        a.map((w) => {
          if (((w = Kd(w)), w in vc)) return;
          vc[w] = !0;
          const E = w.endsWith(".css"),
            I = E ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${w}"]${I}`)) return;
          const O = document.createElement("link");
          if (
            ((O.rel = E ? "stylesheet" : Qd),
            E || (O.as = "script"),
            (O.crossOrigin = ""),
            (O.href = w),
            x && O.setAttribute("nonce", x),
            document.head.appendChild(O),
            E)
          )
            return new Promise((P, j) => {
              O.addEventListener("load", P),
                O.addEventListener("error", () =>
                  j(new Error(`Unable to preload CSS for ${w}`))
                );
            });
        })
      );
    }
    function m(k) {
      const x = new Event("vite:preloadError", { cancelable: !0 });
      if (((x.payload = k), window.dispatchEvent(x), !x.defaultPrevented))
        throw k;
    }
    return f.then((k) => {
      for (const x of k || []) x.status === "rejected" && m(x.reason);
      return s().catch(m);
    });
  };
var C = lu(),
  Tr = {},
  yc;
function Yd() {
  if (yc) return Tr;
  (yc = 1),
    Object.defineProperty(Tr, "__esModule", { value: !0 }),
    (Tr.parse = k),
    (Tr.serialize = E);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    s = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    p = /^[\u0020-\u003A\u003D-\u007E]*$/,
    f = Object.prototype.toString,
    m = (() => {
      const P = function () {};
      return (P.prototype = Object.create(null)), P;
    })();
  function k(P, j) {
    const z = new m(),
      M = P.length;
    if (M < 2) return z;
    const D = (j == null ? void 0 : j.decode) || I;
    let F = 0;
    do {
      const A = P.indexOf("=", F);
      if (A === -1) break;
      const J = P.indexOf(";", F),
        ee = J === -1 ? M : J;
      if (A > ee) {
        F = P.lastIndexOf(";", A - 1) + 1;
        continue;
      }
      const ue = x(P, F, A),
        ge = w(P, A, ue),
        me = P.slice(ue, ge);
      if (z[me] === void 0) {
        let Ce = x(P, A + 1, ee),
          we = w(P, ee, Ce);
        const Le = D(P.slice(Ce, we));
        z[me] = Le;
      }
      F = ee + 1;
    } while (F < M);
    return z;
  }
  function x(P, j, z) {
    do {
      const M = P.charCodeAt(j);
      if (M !== 32 && M !== 9) return j;
    } while (++j < z);
    return z;
  }
  function w(P, j, z) {
    for (; j > z; ) {
      const M = P.charCodeAt(--j);
      if (M !== 32 && M !== 9) return j + 1;
    }
    return z;
  }
  function E(P, j, z) {
    const M = (z == null ? void 0 : z.encode) || encodeURIComponent;
    if (!i.test(P)) throw new TypeError(`argument name is invalid: ${P}`);
    const D = M(j);
    if (!s.test(D)) throw new TypeError(`argument val is invalid: ${j}`);
    let F = P + "=" + D;
    if (!z) return F;
    if (z.maxAge !== void 0) {
      if (!Number.isInteger(z.maxAge))
        throw new TypeError(`option maxAge is invalid: ${z.maxAge}`);
      F += "; Max-Age=" + z.maxAge;
    }
    if (z.domain) {
      if (!a.test(z.domain))
        throw new TypeError(`option domain is invalid: ${z.domain}`);
      F += "; Domain=" + z.domain;
    }
    if (z.path) {
      if (!p.test(z.path))
        throw new TypeError(`option path is invalid: ${z.path}`);
      F += "; Path=" + z.path;
    }
    if (z.expires) {
      if (!O(z.expires) || !Number.isFinite(z.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${z.expires}`);
      F += "; Expires=" + z.expires.toUTCString();
    }
    if (
      (z.httpOnly && (F += "; HttpOnly"),
      z.secure && (F += "; Secure"),
      z.partitioned && (F += "; Partitioned"),
      z.priority)
    )
      switch (
        typeof z.priority == "string" ? z.priority.toLowerCase() : void 0
      ) {
        case "low":
          F += "; Priority=Low";
          break;
        case "medium":
          F += "; Priority=Medium";
          break;
        case "high":
          F += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${z.priority}`);
      }
    if (z.sameSite)
      switch (
        typeof z.sameSite == "string" ? z.sameSite.toLowerCase() : z.sameSite
      ) {
        case !0:
        case "strict":
          F += "; SameSite=Strict";
          break;
        case "lax":
          F += "; SameSite=Lax";
          break;
        case "none":
          F += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${z.sameSite}`);
      }
    return F;
  }
  function I(P) {
    if (P.indexOf("%") === -1) return P;
    try {
      return decodeURIComponent(P);
    } catch {
      return P;
    }
  }
  function O(P) {
    return f.call(P) === "[object Date]";
  }
  return Tr;
}
Yd();
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var gc = "popstate";
function Xd(i = {}) {
  function s(p, f) {
    let { pathname: m, search: k, hash: x } = p.location;
    return tu(
      "",
      { pathname: m, search: k, hash: x },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default"
    );
  }
  function a(p, f) {
    return typeof f == "string" ? f : Or(f);
  }
  return Jd(s, a, null, i);
}
function he(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
function it(i, s) {
  if (!i) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function Gd() {
  return Math.random().toString(36).substring(2, 10);
}
function wc(i, s) {
  return { usr: i.state, key: i.key, idx: s };
}
function tu(i, s, a = null, p) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? Bn(s) : s),
    state: a,
    key: (s && s.key) || p || Gd(),
  };
}
function Or({ pathname: i = "/", search: s = "", hash: a = "" }) {
  return (
    s && s !== "?" && (i += s.charAt(0) === "?" ? s : "?" + s),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function Bn(i) {
  let s = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((s.hash = i.substring(a)), (i = i.substring(0, a)));
    let p = i.indexOf("?");
    p >= 0 && ((s.search = i.substring(p)), (i = i.substring(0, p))),
      i && (s.pathname = i);
  }
  return s;
}
function Jd(i, s, a, p = {}) {
  let { window: f = document.defaultView, v5Compat: m = !1 } = p,
    k = f.history,
    x = "POP",
    w = null,
    E = I();
  E == null && ((E = 0), k.replaceState({ ...k.state, idx: E }, ""));
  function I() {
    return (k.state || { idx: null }).idx;
  }
  function O() {
    x = "POP";
    let D = I(),
      F = D == null ? null : D - E;
    (E = D), w && w({ action: x, location: M.location, delta: F });
  }
  function P(D, F) {
    x = "PUSH";
    let A = tu(M.location, D, F);
    E = I() + 1;
    let J = wc(A, E),
      ee = M.createHref(A);
    try {
      k.pushState(J, "", ee);
    } catch (ue) {
      if (ue instanceof DOMException && ue.name === "DataCloneError") throw ue;
      f.location.assign(ee);
    }
    m && w && w({ action: x, location: M.location, delta: 1 });
  }
  function j(D, F) {
    x = "REPLACE";
    let A = tu(M.location, D, F);
    E = I();
    let J = wc(A, E),
      ee = M.createHref(A);
    k.replaceState(J, "", ee),
      m && w && w({ action: x, location: M.location, delta: 0 });
  }
  function z(D) {
    let F = f.location.origin !== "null" ? f.location.origin : f.location.href,
      A = typeof D == "string" ? D : Or(D);
    return (
      (A = A.replace(/ $/, "%20")),
      he(
        F,
        `No window.location.(origin|href) available to create URL for href: ${A}`
      ),
      new URL(A, F)
    );
  }
  let M = {
    get action() {
      return x;
    },
    get location() {
      return i(f, k);
    },
    listen(D) {
      if (w) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(gc, O),
        (w = D),
        () => {
          f.removeEventListener(gc, O), (w = null);
        }
      );
    },
    createHref(D) {
      return s(f, D);
    },
    createURL: z,
    encodeLocation(D) {
      let F = z(D);
      return { pathname: F.pathname, search: F.search, hash: F.hash };
    },
    push: P,
    replace: j,
    go(D) {
      return k.go(D);
    },
  };
  return M;
}
function xc(i, s, a = "/") {
  return Zd(i, s, a, !1);
}
function Zd(i, s, a, p) {
  let f = typeof s == "string" ? Bn(s) : s,
    m = en(f.pathname || "/", a);
  if (m == null) return null;
  let k = Cc(i);
  qd(k);
  let x = null;
  for (let w = 0; x == null && w < k.length; ++w) {
    let E = sp(m);
    x = up(k[w], E, p);
  }
  return x;
}
function Cc(i, s = [], a = [], p = "") {
  let f = (m, k, x) => {
    let w = {
      relativePath: x === void 0 ? m.path || "" : x,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: k,
      route: m,
    };
    w.relativePath.startsWith("/") &&
      (he(
        w.relativePath.startsWith(p),
        `Absolute route path "${w.relativePath}" nested under path "${p}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (w.relativePath = w.relativePath.slice(p.length)));
    let E = It([p, w.relativePath]),
      I = a.concat(w);
    m.children &&
      m.children.length > 0 &&
      (he(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
      ),
      Cc(m.children, s, I, E)),
      !(m.path == null && !m.index) &&
        s.push({ path: E, score: op(E, m.index), routesMeta: I });
  };
  return (
    i.forEach((m, k) => {
      var x;
      if (m.path === "" || !((x = m.path) != null && x.includes("?"))) f(m, k);
      else for (let w of Pc(m.path)) f(m, k, w);
    }),
    s
  );
}
function Pc(i) {
  let s = i.split("/");
  if (s.length === 0) return [];
  let [a, ...p] = s,
    f = a.endsWith("?"),
    m = a.replace(/\?$/, "");
  if (p.length === 0) return f ? [m, ""] : [m];
  let k = Pc(p.join("/")),
    x = [];
  return (
    x.push(...k.map((w) => (w === "" ? m : [m, w].join("/")))),
    f && x.push(...k),
    x.map((w) => (i.startsWith("/") && w === "" ? "/" : w))
  );
}
function qd(i) {
  i.sort((s, a) =>
    s.score !== a.score
      ? a.score - s.score
      : ip(
          s.routesMeta.map((p) => p.childrenIndex),
          a.routesMeta.map((p) => p.childrenIndex)
        )
  );
}
var bd = /^:[\w-]+$/,
  ep = 3,
  tp = 2,
  np = 1,
  rp = 10,
  lp = -2,
  Sc = (i) => i === "*";
function op(i, s) {
  let a = i.split("/"),
    p = a.length;
  return (
    a.some(Sc) && (p += lp),
    s && (p += tp),
    a
      .filter((f) => !Sc(f))
      .reduce((f, m) => f + (bd.test(m) ? ep : m === "" ? np : rp), p)
  );
}
function ip(i, s) {
  return i.length === s.length && i.slice(0, -1).every((p, f) => p === s[f])
    ? i[i.length - 1] - s[s.length - 1]
    : 0;
}
function up(i, s, a = !1) {
  let { routesMeta: p } = i,
    f = {},
    m = "/",
    k = [];
  for (let x = 0; x < p.length; ++x) {
    let w = p[x],
      E = x === p.length - 1,
      I = m === "/" ? s : s.slice(m.length) || "/",
      O = Jl(
        { path: w.relativePath, caseSensitive: w.caseSensitive, end: E },
        I
      ),
      P = w.route;
    if (
      (!O &&
        E &&
        a &&
        !p[p.length - 1].route.index &&
        (O = Jl(
          { path: w.relativePath, caseSensitive: w.caseSensitive, end: !1 },
          I
        )),
      !O)
    )
      return null;
    Object.assign(f, O.params),
      k.push({
        params: f,
        pathname: It([m, O.pathname]),
        pathnameBase: pp(It([m, O.pathnameBase])),
        route: P,
      }),
      O.pathnameBase !== "/" && (m = It([m, O.pathnameBase]));
  }
  return k;
}
function Jl(i, s) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, p] = ap(i.path, i.caseSensitive, i.end),
    f = s.match(a);
  if (!f) return null;
  let m = f[0],
    k = m.replace(/(.)\/+$/, "$1"),
    x = f.slice(1);
  return {
    params: p.reduce((E, { paramName: I, isOptional: O }, P) => {
      if (I === "*") {
        let z = x[P] || "";
        k = m.slice(0, m.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const j = x[P];
      return (
        O && !j ? (E[I] = void 0) : (E[I] = (j || "").replace(/%2F/g, "/")), E
      );
    }, {}),
    pathname: m,
    pathnameBase: k,
    pattern: i,
  };
}
function ap(i, s = !1, a = !0) {
  it(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let p = [],
    f =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (k, x, w) => (
            p.push({ paramName: x, isOptional: w != null }),
            w ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (p.push({ paramName: "*" }),
        (f += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
      ? (f += "\\/*$")
      : i !== "" && i !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, s ? void 0 : "i"), p]
  );
}
function sp(i) {
  try {
    return i
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      it(
        !1,
        `The URL path "${i}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`
      ),
      i
    );
  }
}
function en(i, s) {
  if (s === "/") return i;
  if (!i.toLowerCase().startsWith(s.toLowerCase())) return null;
  let a = s.endsWith("/") ? s.length - 1 : s.length,
    p = i.charAt(a);
  return p && p !== "/" ? null : i.slice(a) || "/";
}
function cp(i, s = "/") {
  let {
    pathname: a,
    search: p = "",
    hash: f = "",
  } = typeof i == "string" ? Bn(i) : i;
  return {
    pathname: a ? (a.startsWith("/") ? a : fp(a, s)) : s,
    search: hp(p),
    hash: mp(f),
  };
}
function fp(i, s) {
  let a = s.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function bi(i, s, a, p) {
  return `Cannot include a '${i}' character in a manually specified \`to.${s}\` field [${JSON.stringify(
    p
  )}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function dp(i) {
  return i.filter(
    (s, a) => a === 0 || (s.route.path && s.route.path.length > 0)
  );
}
function ou(i) {
  let s = dp(i);
  return s.map((a, p) => (p === s.length - 1 ? a.pathname : a.pathnameBase));
}
function iu(i, s, a, p = !1) {
  let f;
  typeof i == "string"
    ? (f = Bn(i))
    : ((f = { ...i }),
      he(
        !f.pathname || !f.pathname.includes("?"),
        bi("?", "pathname", "search", f)
      ),
      he(
        !f.pathname || !f.pathname.includes("#"),
        bi("#", "pathname", "hash", f)
      ),
      he(!f.search || !f.search.includes("#"), bi("#", "search", "hash", f)));
  let m = i === "" || f.pathname === "",
    k = m ? "/" : f.pathname,
    x;
  if (k == null) x = a;
  else {
    let O = s.length - 1;
    if (!p && k.startsWith("..")) {
      let P = k.split("/");
      for (; P[0] === ".."; ) P.shift(), (O -= 1);
      f.pathname = P.join("/");
    }
    x = O >= 0 ? s[O] : "/";
  }
  let w = cp(f, x),
    E = k && k !== "/" && k.endsWith("/"),
    I = (m || k === ".") && a.endsWith("/");
  return !w.pathname.endsWith("/") && (E || I) && (w.pathname += "/"), w;
}
var It = (i) => i.join("/").replace(/\/\/+/g, "/"),
  pp = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  hp = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  mp = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function vp(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var _c = ["POST", "PUT", "PATCH", "DELETE"];
new Set(_c);
var yp = ["GET", ..._c];
new Set(yp);
var Vn = C.createContext(null);
Vn.displayName = "DataRouter";
var ql = C.createContext(null);
ql.displayName = "DataRouterState";
var Rc = C.createContext({ isTransitioning: !1 });
Rc.displayName = "ViewTransition";
var gp = C.createContext(new Map());
gp.displayName = "Fetchers";
var wp = C.createContext(null);
wp.displayName = "Await";
var mt = C.createContext(null);
mt.displayName = "Navigation";
var Ir = C.createContext(null);
Ir.displayName = "Location";
var vt = C.createContext({ outlet: null, matches: [], isDataRoute: !1 });
vt.displayName = "Route";
var uu = C.createContext(null);
uu.displayName = "RouteError";
function Sp(i, { relative: s } = {}) {
  he(
    Hn(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: a, navigator: p } = C.useContext(mt),
    { hash: f, pathname: m, search: k } = Fr(i, { relative: s }),
    x = m;
  return (
    a !== "/" && (x = m === "/" ? a : It([a, m])),
    p.createHref({ pathname: x, search: k, hash: f })
  );
}
function Hn() {
  return C.useContext(Ir) != null;
}
function Dt() {
  return (
    he(
      Hn(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    C.useContext(Ir).location
  );
}
var Lc =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Nc(i) {
  C.useContext(mt).static || C.useLayoutEffect(i);
}
function Dr() {
  let { isDataRoute: i } = C.useContext(vt);
  return i ? Fp() : kp();
}
function kp() {
  he(
    Hn(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = C.useContext(Vn),
    { basename: s, navigator: a } = C.useContext(mt),
    { matches: p } = C.useContext(vt),
    { pathname: f } = Dt(),
    m = JSON.stringify(ou(p)),
    k = C.useRef(!1);
  return (
    Nc(() => {
      k.current = !0;
    }),
    C.useCallback(
      (w, E = {}) => {
        if ((it(k.current, Lc), !k.current)) return;
        if (typeof w == "number") {
          a.go(w);
          return;
        }
        let I = iu(w, JSON.parse(m), f, E.relative === "path");
        i == null &&
          s !== "/" &&
          (I.pathname = I.pathname === "/" ? s : It([s, I.pathname])),
          (E.replace ? a.replace : a.push)(I, E.state, E);
      },
      [s, a, m, f, i]
    )
  );
}
var Ep = C.createContext(null);
function xp(i) {
  let s = C.useContext(vt).outlet;
  return s && C.createElement(Ep.Provider, { value: i }, s);
}
function Fr(i, { relative: s } = {}) {
  let { matches: a } = C.useContext(vt),
    { pathname: p } = Dt(),
    f = JSON.stringify(ou(a));
  return C.useMemo(() => iu(i, JSON.parse(f), p, s === "path"), [i, f, p, s]);
}
function Cp(i, s) {
  return Tc(i, s);
}
function Tc(i, s, a, p) {
  var F;
  he(
    Hn(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = C.useContext(mt),
    { matches: m } = C.useContext(vt),
    k = m[m.length - 1],
    x = k ? k.params : {},
    w = k ? k.pathname : "/",
    E = k ? k.pathnameBase : "/",
    I = k && k.route;
  {
    let A = (I && I.path) || "";
    zc(
      w,
      !I || A.endsWith("*") || A.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${w}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${
        A === "/" ? "*" : `${A}/*`
      }">.`
    );
  }
  let O = Dt(),
    P;
  if (s) {
    let A = typeof s == "string" ? Bn(s) : s;
    he(
      E === "/" || ((F = A.pathname) == null ? void 0 : F.startsWith(E)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${A.pathname}" was given in the \`location\` prop.`
    ),
      (P = A);
  } else P = O;
  let j = P.pathname || "/",
    z = j;
  if (E !== "/") {
    let A = E.replace(/^\//, "").split("/");
    z = "/" + j.replace(/^\//, "").split("/").slice(A.length).join("/");
  }
  let M = xc(i, { pathname: z });
  it(
    I || M != null,
    `No routes matched location "${P.pathname}${P.search}${P.hash}" `
  ),
    it(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let D = Np(
    M &&
      M.map((A) =>
        Object.assign({}, A, {
          params: Object.assign({}, x, A.params),
          pathname: It([
            E,
            f.encodeLocation
              ? f.encodeLocation(A.pathname).pathname
              : A.pathname,
          ]),
          pathnameBase:
            A.pathnameBase === "/"
              ? E
              : It([
                  E,
                  f.encodeLocation
                    ? f.encodeLocation(A.pathnameBase).pathname
                    : A.pathnameBase,
                ]),
        })
      ),
    m,
    a,
    p
  );
  return s && D
    ? C.createElement(
        Ir.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...P,
            },
            navigationType: "POP",
          },
        },
        D
      )
    : D;
}
function Pp() {
  let i = Dp(),
    s = vp(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    p = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: p },
    m = { padding: "2px 4px", backgroundColor: p },
    k = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (k = C.createElement(
      C.Fragment,
      null,
      C.createElement("p", null, "💿 Hey developer 👋"),
      C.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        C.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        C.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    C.createElement(
      C.Fragment,
      null,
      C.createElement("h2", null, "Unexpected Application Error!"),
      C.createElement("h3", { style: { fontStyle: "italic" } }, s),
      a ? C.createElement("pre", { style: f }, a) : null,
      k
    )
  );
}
var _p = C.createElement(Pp, null),
  Rp = class extends C.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, s) {
      return s.location !== i.location ||
        (s.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : s.error,
            location: s.location,
            revalidation: i.revalidation || s.revalidation,
          };
    }
    componentDidCatch(i, s) {
      console.error(
        "React Router caught the following error during render",
        i,
        s
      );
    }
    render() {
      return this.state.error !== void 0
        ? C.createElement(
            vt.Provider,
            { value: this.props.routeContext },
            C.createElement(uu.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Lp({ routeContext: i, match: s, children: a }) {
  let p = C.useContext(Vn);
  return (
    p &&
      p.static &&
      p.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (p.staticContext._deepestRenderedBoundaryId = s.route.id),
    C.createElement(vt.Provider, { value: i }, a)
  );
}
function Np(i, s = [], a = null, p = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (s.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let f = i,
    m = a == null ? void 0 : a.errors;
  if (m != null) {
    let w = f.findIndex(
      (E) => E.route.id && (m == null ? void 0 : m[E.route.id]) !== void 0
    );
    he(
      w >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (f = f.slice(0, Math.min(f.length, w + 1)));
  }
  let k = !1,
    x = -1;
  if (a)
    for (let w = 0; w < f.length; w++) {
      let E = f[w];
      if (
        ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (x = w),
        E.route.id)
      ) {
        let { loaderData: I, errors: O } = a,
          P =
            E.route.loader &&
            !I.hasOwnProperty(E.route.id) &&
            (!O || O[E.route.id] === void 0);
        if (E.route.lazy || P) {
          (k = !0), x >= 0 ? (f = f.slice(0, x + 1)) : (f = [f[0]]);
          break;
        }
      }
    }
  return f.reduceRight((w, E, I) => {
    let O,
      P = !1,
      j = null,
      z = null;
    a &&
      ((O = m && E.route.id ? m[E.route.id] : void 0),
      (j = E.route.errorElement || _p),
      k &&
        (x < 0 && I === 0
          ? (zc(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (P = !0),
            (z = null))
          : x === I &&
            ((P = !0), (z = E.route.hydrateFallbackElement || null))));
    let M = s.concat(f.slice(0, I + 1)),
      D = () => {
        let F;
        return (
          O
            ? (F = j)
            : P
            ? (F = z)
            : E.route.Component
            ? (F = C.createElement(E.route.Component, null))
            : E.route.element
            ? (F = E.route.element)
            : (F = w),
          C.createElement(Lp, {
            match: E,
            routeContext: { outlet: w, matches: M, isDataRoute: a != null },
            children: F,
          })
        );
      };
    return a && (E.route.ErrorBoundary || E.route.errorElement || I === 0)
      ? C.createElement(Rp, {
          location: a.location,
          revalidation: a.revalidation,
          component: j,
          error: O,
          children: D(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : D();
  }, null);
}
function au(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tp(i) {
  let s = C.useContext(Vn);
  return he(s, au(i)), s;
}
function zp(i) {
  let s = C.useContext(ql);
  return he(s, au(i)), s;
}
function Op(i) {
  let s = C.useContext(vt);
  return he(s, au(i)), s;
}
function su(i) {
  let s = Op(i),
    a = s.matches[s.matches.length - 1];
  return (
    he(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function Ip() {
  return su("useRouteId");
}
function Dp() {
  var p;
  let i = C.useContext(uu),
    s = zp("useRouteError"),
    a = su("useRouteError");
  return i !== void 0 ? i : (p = s.errors) == null ? void 0 : p[a];
}
function Fp() {
  let { router: i } = Tp("useNavigate"),
    s = su("useNavigate"),
    a = C.useRef(!1);
  return (
    Nc(() => {
      a.current = !0;
    }),
    C.useCallback(
      async (f, m = {}) => {
        it(a.current, Lc),
          a.current &&
            (typeof f == "number"
              ? i.navigate(f)
              : await i.navigate(f, { fromRouteId: s, ...m }));
      },
      [i, s]
    )
  );
}
var kc = {};
function zc(i, s, a) {
  !s && !kc[i] && ((kc[i] = !0), it(!1, a));
}
C.memo(Mp);
function Mp({ routes: i, future: s, state: a }) {
  return Tc(i, void 0, a, s);
}
function jp({ to: i, replace: s, state: a, relative: p }) {
  he(
    Hn(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: f } = C.useContext(mt);
  it(
    !f,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = C.useContext(vt),
    { pathname: k } = Dt(),
    x = Dr(),
    w = iu(i, ou(m), k, p === "path"),
    E = JSON.stringify(w);
  return (
    C.useEffect(() => {
      x(JSON.parse(E), { replace: s, state: a, relative: p });
    }, [x, E, p, s, a]),
    null
  );
}
function Lh(i) {
  return xp(i.context);
}
function An(i) {
  he(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Up({
  basename: i = "/",
  children: s = null,
  location: a,
  navigationType: p = "POP",
  navigator: f,
  static: m = !1,
}) {
  he(
    !Hn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let k = i.replace(/^\/*/, "/"),
    x = C.useMemo(
      () => ({ basename: k, navigator: f, static: m, future: {} }),
      [k, f, m]
    );
  typeof a == "string" && (a = Bn(a));
  let {
      pathname: w = "/",
      search: E = "",
      hash: I = "",
      state: O = null,
      key: P = "default",
    } = a,
    j = C.useMemo(() => {
      let z = en(w, k);
      return z == null
        ? null
        : {
            location: { pathname: z, search: E, hash: I, state: O, key: P },
            navigationType: p,
          };
    }, [k, w, E, I, O, P, p]);
  return (
    it(
      j != null,
      `<Router basename="${k}"> is not able to match the URL "${w}${E}${I}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    j == null
      ? null
      : C.createElement(
          mt.Provider,
          { value: x },
          C.createElement(Ir.Provider, { children: s, value: j })
        )
  );
}
function $p({ children: i, location: s }) {
  return Cp(nu(i), s);
}
function nu(i, s = []) {
  let a = [];
  return (
    C.Children.forEach(i, (p, f) => {
      if (!C.isValidElement(p)) return;
      let m = [...s, f];
      if (p.type === C.Fragment) {
        a.push.apply(a, nu(p.props.children, m));
        return;
      }
      he(
        p.type === An,
        `[${
          typeof p.type == "string" ? p.type : p.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        he(
          !p.props.index || !p.props.children,
          "An index route cannot have child routes."
        );
      let k = {
        id: p.props.id || m.join("-"),
        caseSensitive: p.props.caseSensitive,
        element: p.props.element,
        Component: p.props.Component,
        index: p.props.index,
        path: p.props.path,
        loader: p.props.loader,
        action: p.props.action,
        hydrateFallbackElement: p.props.hydrateFallbackElement,
        HydrateFallback: p.props.HydrateFallback,
        errorElement: p.props.errorElement,
        ErrorBoundary: p.props.ErrorBoundary,
        hasErrorBoundary:
          p.props.hasErrorBoundary === !0 ||
          p.props.ErrorBoundary != null ||
          p.props.errorElement != null,
        shouldRevalidate: p.props.shouldRevalidate,
        handle: p.props.handle,
        lazy: p.props.lazy,
      };
      p.props.children && (k.children = nu(p.props.children, m)), a.push(k);
    }),
    a
  );
}
var Xl = "get",
  Gl = "application/x-www-form-urlencoded";
function bl(i) {
  return i != null && typeof i.tagName == "string";
}
function Ap(i) {
  return bl(i) && i.tagName.toLowerCase() === "button";
}
function Bp(i) {
  return bl(i) && i.tagName.toLowerCase() === "form";
}
function Vp(i) {
  return bl(i) && i.tagName.toLowerCase() === "input";
}
function Hp(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Wp(i, s) {
  return i.button === 0 && (!s || s === "_self") && !Hp(i);
}
function ru(i = "") {
  return new URLSearchParams(
    typeof i == "string" || Array.isArray(i) || i instanceof URLSearchParams
      ? i
      : Object.keys(i).reduce((s, a) => {
          let p = i[a];
          return s.concat(Array.isArray(p) ? p.map((f) => [a, f]) : [[a, p]]);
        }, [])
  );
}
function Qp(i, s) {
  let a = ru(i);
  return (
    s &&
      s.forEach((p, f) => {
        a.has(f) ||
          s.getAll(f).forEach((m) => {
            a.append(f, m);
          });
      }),
    a
  );
}
var Yl = null;
function Kp() {
  if (Yl === null)
    try {
      new FormData(document.createElement("form"), 0), (Yl = !1);
    } catch {
      Yl = !0;
    }
  return Yl;
}
var Yp = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function eu(i) {
  return i != null && !Yp.has(i)
    ? (it(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gl}"`
      ),
      null)
    : i;
}
function Xp(i, s) {
  let a, p, f, m, k;
  if (Bp(i)) {
    let x = i.getAttribute("action");
    (p = x ? en(x, s) : null),
      (a = i.getAttribute("method") || Xl),
      (f = eu(i.getAttribute("enctype")) || Gl),
      (m = new FormData(i));
  } else if (Ap(i) || (Vp(i) && (i.type === "submit" || i.type === "image"))) {
    let x = i.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let w = i.getAttribute("formaction") || x.getAttribute("action");
    if (
      ((p = w ? en(w, s) : null),
      (a = i.getAttribute("formmethod") || x.getAttribute("method") || Xl),
      (f =
        eu(i.getAttribute("formenctype")) ||
        eu(x.getAttribute("enctype")) ||
        Gl),
      (m = new FormData(x, i)),
      !Kp())
    ) {
      let { name: E, type: I, value: O } = i;
      if (I === "image") {
        let P = E ? `${E}.` : "";
        m.append(`${P}x`, "0"), m.append(`${P}y`, "0");
      } else E && m.append(E, O);
    }
  } else {
    if (bl(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (a = Xl), (p = null), (f = Gl), (k = i);
  }
  return (
    m && f === "text/plain" && ((k = m), (m = void 0)),
    { action: p, method: a.toLowerCase(), encType: f, formData: m, body: k }
  );
}
function cu(i, s) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(s);
}
async function Gp(i, s) {
  if (i.id in s) return s[i.id];
  try {
    let a = await import(i.module);
    return (s[i.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Jp(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function Zp(i, s, a) {
  let p = await Promise.all(
    i.map(async (f) => {
      let m = s.routes[f.route.id];
      if (m) {
        let k = await Gp(m, a);
        return k.links ? k.links() : [];
      }
      return [];
    })
  );
  return th(
    p
      .flat(1)
      .filter(Jp)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" }
      )
  );
}
function Ec(i, s, a, p, f, m) {
  let k = (w, E) => (a[E] ? w.route.id !== a[E].route.id : !0),
    x = (w, E) => {
      var I;
      return (
        a[E].pathname !== w.pathname ||
        (((I = a[E].route.path) == null ? void 0 : I.endsWith("*")) &&
          a[E].params["*"] !== w.params["*"])
      );
    };
  return m === "assets"
    ? s.filter((w, E) => k(w, E) || x(w, E))
    : m === "data"
    ? s.filter((w, E) => {
        var O;
        let I = p.routes[w.route.id];
        if (!I || !I.hasLoader) return !1;
        if (k(w, E) || x(w, E)) return !0;
        if (w.route.shouldRevalidate) {
          let P = w.route.shouldRevalidate({
            currentUrl: new URL(f.pathname + f.search + f.hash, window.origin),
            currentParams: ((O = a[0]) == null ? void 0 : O.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: w.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof P == "boolean") return P;
        }
        return !0;
      })
    : [];
}
function qp(i, s) {
  return bp(
    i
      .map((a) => {
        let p = s.routes[a.route.id];
        if (!p) return [];
        let f = [p.module];
        return p.imports && (f = f.concat(p.imports)), f;
      })
      .flat(1)
  );
}
function bp(i) {
  return [...new Set(i)];
}
function eh(i) {
  let s = {},
    a = Object.keys(i).sort();
  for (let p of a) s[p] = i[p];
  return s;
}
function th(i, s) {
  let a = new Set();
  return (
    new Set(s),
    i.reduce((p, f) => {
      let m = JSON.stringify(eh(f));
      return a.has(m) || (a.add(m), p.push({ key: m, link: f })), p;
    }, [])
  );
}
function nh(i) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = "_root.data")
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.data`),
    s
  );
}
function rh() {
  let i = C.useContext(Vn);
  return (
    cu(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function lh() {
  let i = C.useContext(ql);
  return (
    cu(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var fu = C.createContext(void 0);
fu.displayName = "FrameworkContext";
function Oc() {
  let i = C.useContext(fu);
  return (
    cu(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function oh(i, s) {
  let a = C.useContext(fu),
    [p, f] = C.useState(!1),
    [m, k] = C.useState(!1),
    {
      onFocus: x,
      onBlur: w,
      onMouseEnter: E,
      onMouseLeave: I,
      onTouchStart: O,
    } = s,
    P = C.useRef(null);
  C.useEffect(() => {
    if ((i === "render" && k(!0), i === "viewport")) {
      let M = (F) => {
          F.forEach((A) => {
            k(A.isIntersecting);
          });
        },
        D = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        P.current && D.observe(P.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [i]),
    C.useEffect(() => {
      if (p) {
        let M = setTimeout(() => {
          k(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [p]);
  let j = () => {
      f(!0);
    },
    z = () => {
      f(!1), k(!1);
    };
  return a
    ? i !== "intent"
      ? [m, P, {}]
      : [
          m,
          P,
          {
            onFocus: zr(x, j),
            onBlur: zr(w, z),
            onMouseEnter: zr(E, j),
            onMouseLeave: zr(I, z),
            onTouchStart: zr(O, j),
          },
        ]
    : [!1, P, {}];
}
function zr(i, s) {
  return (a) => {
    i && i(a), a.defaultPrevented || s(a);
  };
}
function ih({ page: i, ...s }) {
  let { router: a } = rh(),
    p = C.useMemo(() => xc(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return p ? C.createElement(ah, { page: i, matches: p, ...s }) : null;
}
function uh(i) {
  let { manifest: s, routeModules: a } = Oc(),
    [p, f] = C.useState([]);
  return (
    C.useEffect(() => {
      let m = !1;
      return (
        Zp(i, s, a).then((k) => {
          m || f(k);
        }),
        () => {
          m = !0;
        }
      );
    }, [i, s, a]),
    p
  );
}
function ah({ page: i, matches: s, ...a }) {
  let p = Dt(),
    { manifest: f, routeModules: m } = Oc(),
    { loaderData: k, matches: x } = lh(),
    w = C.useMemo(() => Ec(i, s, x, f, p, "data"), [i, s, x, f, p]),
    E = C.useMemo(() => Ec(i, s, x, f, p, "assets"), [i, s, x, f, p]),
    I = C.useMemo(() => {
      if (i === p.pathname + p.search + p.hash) return [];
      let j = new Set(),
        z = !1;
      if (
        (s.forEach((D) => {
          var A;
          let F = f.routes[D.route.id];
          !F ||
            !F.hasLoader ||
            ((!w.some((J) => J.route.id === D.route.id) &&
              D.route.id in k &&
              (A = m[D.route.id]) != null &&
              A.shouldRevalidate) ||
            F.hasClientLoader
              ? (z = !0)
              : j.add(D.route.id));
        }),
        j.size === 0)
      )
        return [];
      let M = nh(i);
      return (
        z &&
          j.size > 0 &&
          M.searchParams.set(
            "_routes",
            s
              .filter((D) => j.has(D.route.id))
              .map((D) => D.route.id)
              .join(",")
          ),
        [M.pathname + M.search]
      );
    }, [k, p, f, w, s, i, m]),
    O = C.useMemo(() => qp(E, f), [E, f]),
    P = uh(E);
  return C.createElement(
    C.Fragment,
    null,
    I.map((j) =>
      C.createElement("link", {
        key: j,
        rel: "prefetch",
        as: "fetch",
        href: j,
        ...a,
      })
    ),
    O.map((j) =>
      C.createElement("link", { key: j, rel: "modulepreload", href: j, ...a })
    ),
    P.map(({ key: j, link: z }) => C.createElement("link", { key: j, ...z }))
  );
}
function sh(...i) {
  return (s) => {
    i.forEach((a) => {
      typeof a == "function" ? a(s) : a != null && (a.current = s);
    });
  };
}
var Ic =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Ic && (window.__reactRouterVersion = "7.1.1");
} catch {}
function ch({ basename: i, children: s, window: a }) {
  let p = C.useRef();
  p.current == null && (p.current = Xd({ window: a, v5Compat: !0 }));
  let f = p.current,
    [m, k] = C.useState({ action: f.action, location: f.location }),
    x = C.useCallback(
      (w) => {
        C.startTransition(() => k(w));
      },
      [k]
    );
  return (
    C.useLayoutEffect(() => f.listen(x), [f, x]),
    C.createElement(Up, {
      basename: i,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: f,
    })
  );
}
var Dc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fc = C.forwardRef(function (
    {
      onClick: s,
      discover: a = "render",
      prefetch: p = "none",
      relative: f,
      reloadDocument: m,
      replace: k,
      state: x,
      target: w,
      to: E,
      preventScrollReset: I,
      viewTransition: O,
      ...P
    },
    j
  ) {
    let { basename: z } = C.useContext(mt),
      M = typeof E == "string" && Dc.test(E),
      D,
      F = !1;
    if (typeof E == "string" && M && ((D = E), Ic))
      try {
        let we = new URL(window.location.href),
          Le = E.startsWith("//") ? new URL(we.protocol + E) : new URL(E),
          yt = en(Le.pathname, z);
        Le.origin === we.origin && yt != null
          ? (E = yt + Le.search + Le.hash)
          : (F = !0);
      } catch {
        it(
          !1,
          `<Link to="${E}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let A = Sp(E, { relative: f }),
      [J, ee, ue] = oh(p, P),
      ge = hh(E, {
        replace: k,
        state: x,
        target: w,
        preventScrollReset: I,
        relative: f,
        viewTransition: O,
      });
    function me(we) {
      s && s(we), we.defaultPrevented || ge(we);
    }
    let Ce = C.createElement("a", {
      ...P,
      ...ue,
      href: D || A,
      onClick: F || m ? s : me,
      ref: sh(j, ee),
      target: w,
      "data-discover": !M && a === "render" ? "true" : void 0,
    });
    return J && !M
      ? C.createElement(C.Fragment, null, Ce, C.createElement(ih, { page: A }))
      : Ce;
  });
Fc.displayName = "Link";
var fh = C.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: a = !1,
    className: p = "",
    end: f = !1,
    style: m,
    to: k,
    viewTransition: x,
    children: w,
    ...E
  },
  I
) {
  let O = Fr(k, { relative: E.relative }),
    P = Dt(),
    j = C.useContext(ql),
    { navigator: z, basename: M } = C.useContext(mt),
    D = j != null && wh(O) && x === !0,
    F = z.encodeLocation ? z.encodeLocation(O).pathname : O.pathname,
    A = P.pathname,
    J =
      j && j.navigation && j.navigation.location
        ? j.navigation.location.pathname
        : null;
  a ||
    ((A = A.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (F = F.toLowerCase())),
    J && M && (J = en(J, M) || J);
  const ee = F !== "/" && F.endsWith("/") ? F.length - 1 : F.length;
  let ue = A === F || (!f && A.startsWith(F) && A.charAt(ee) === "/"),
    ge =
      J != null &&
      (J === F || (!f && J.startsWith(F) && J.charAt(F.length) === "/")),
    me = { isActive: ue, isPending: ge, isTransitioning: D },
    Ce = ue ? s : void 0,
    we;
  typeof p == "function"
    ? (we = p(me))
    : (we = [
        p,
        ue ? "active" : null,
        ge ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Le = typeof m == "function" ? m(me) : m;
  return C.createElement(
    Fc,
    {
      ...E,
      "aria-current": Ce,
      className: we,
      ref: I,
      style: Le,
      to: k,
      viewTransition: x,
    },
    typeof w == "function" ? w(me) : w
  );
});
fh.displayName = "NavLink";
var dh = C.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: s,
      navigate: a,
      reloadDocument: p,
      replace: f,
      state: m,
      method: k = Xl,
      action: x,
      onSubmit: w,
      relative: E,
      preventScrollReset: I,
      viewTransition: O,
      ...P
    },
    j
  ) => {
    let z = yh(),
      M = gh(x, { relative: E }),
      D = k.toLowerCase() === "get" ? "get" : "post",
      F = typeof x == "string" && Dc.test(x),
      A = (J) => {
        if ((w && w(J), J.defaultPrevented)) return;
        J.preventDefault();
        let ee = J.nativeEvent.submitter,
          ue = (ee == null ? void 0 : ee.getAttribute("formmethod")) || k;
        z(ee || J.currentTarget, {
          fetcherKey: s,
          method: ue,
          navigate: a,
          replace: f,
          state: m,
          relative: E,
          preventScrollReset: I,
          viewTransition: O,
        });
      };
    return C.createElement("form", {
      ref: j,
      method: D,
      action: M,
      onSubmit: p ? w : A,
      ...P,
      "data-discover": !F && i === "render" ? "true" : void 0,
    });
  }
);
dh.displayName = "Form";
function ph(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mc(i) {
  let s = C.useContext(Vn);
  return he(s, ph(i)), s;
}
function hh(
  i,
  {
    target: s,
    replace: a,
    state: p,
    preventScrollReset: f,
    relative: m,
    viewTransition: k,
  } = {}
) {
  let x = Dr(),
    w = Dt(),
    E = Fr(i, { relative: m });
  return C.useCallback(
    (I) => {
      if (Wp(I, s)) {
        I.preventDefault();
        let O = a !== void 0 ? a : Or(w) === Or(E);
        x(i, {
          replace: O,
          state: p,
          preventScrollReset: f,
          relative: m,
          viewTransition: k,
        });
      }
    },
    [w, x, E, a, p, s, i, f, m, k]
  );
}
function Nh(i) {
  it(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let s = C.useRef(ru(i)),
    a = C.useRef(!1),
    p = Dt(),
    f = C.useMemo(() => Qp(p.search, a.current ? null : s.current), [p.search]),
    m = Dr(),
    k = C.useCallback(
      (x, w) => {
        const E = ru(typeof x == "function" ? x(f) : x);
        (a.current = !0), m("?" + E, w);
      },
      [m, f]
    );
  return [f, k];
}
var mh = 0,
  vh = () => `__${String(++mh)}__`;
function yh() {
  let { router: i } = Mc("useSubmit"),
    { basename: s } = C.useContext(mt),
    a = Ip();
  return C.useCallback(
    async (p, f = {}) => {
      let { action: m, method: k, encType: x, formData: w, body: E } = Xp(p, s);
      if (f.navigate === !1) {
        let I = f.fetcherKey || vh();
        await i.fetch(I, a, f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: E,
          formMethod: f.method || k,
          formEncType: f.encType || x,
          flushSync: f.flushSync,
        });
      } else
        await i.navigate(f.action || m, {
          preventScrollReset: f.preventScrollReset,
          formData: w,
          body: E,
          formMethod: f.method || k,
          formEncType: f.encType || x,
          replace: f.replace,
          state: f.state,
          fromRouteId: a,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [i, s, a]
  );
}
function gh(i, { relative: s } = {}) {
  let { basename: a } = C.useContext(mt),
    p = C.useContext(vt);
  he(p, "useFormAction must be used inside a RouteContext");
  let [f] = p.matches.slice(-1),
    m = { ...Fr(i || ".", { relative: s }) },
    k = Dt();
  if (i == null) {
    m.search = k.search;
    let x = new URLSearchParams(m.search),
      w = x.getAll("index");
    if (w.some((I) => I === "")) {
      x.delete("index"),
        w.filter((O) => O).forEach((O) => x.append("index", O));
      let I = x.toString();
      m.search = I ? `?${I}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      f.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (m.pathname = m.pathname === "/" ? a : It([a, m.pathname])),
    Or(m)
  );
}
function wh(i, s = {}) {
  let a = C.useContext(Rc);
  he(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: p } = Mc("useViewTransitionState"),
    f = Fr(i, { relative: s.relative });
  if (!a.isTransitioning) return !1;
  let m = en(a.currentLocation.pathname, p) || a.currentLocation.pathname,
    k = en(a.nextLocation.pathname, p) || a.nextLocation.pathname;
  return Jl(f.pathname, k) != null || Jl(f.pathname, m) != null;
}
new TextEncoder();
class Sh extends C.Component {
  constructor() {
    super(...arguments);
    ic(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  render() {
    return this.state.hasError
      ? De.jsx("h1", {
          children: "Something went wrong. Please try again later.",
        })
      : this.props.children;
  }
}
const kh = C.lazy(() => Zl(() => import("./ProtectedRoute-CWankTh4.js"), [])),
  Eh = C.lazy(() => Zl(() => import("./Login-Cr2XcJQ4.js"), [])),
  xh = C.lazy(() => Zl(() => import("./ShowPdfPreview-C_9207Dr.js"), [])),
  Ch = C.lazy(() =>
    Zl(() => import("./Home-Th20gMDy.js"), __vite__mapDeps([0, 1]))
  ),
  Ph = () => {
    const i = Dr();
    return (
      C.useEffect(() => {
        const s = (a) => {
          a.ctrlKey && a.key === "k" && (a.preventDefault(), i("/"));
        };
        return (
          window.addEventListener("keydown", s),
          () => {
            window.removeEventListener("keydown", s);
          }
        );
      }, [i]),
      De.jsx(Sh, {
        children: De.jsxs($p, {
          children: [
            De.jsxs(An, {
              element: De.jsx(kh, {}),
              children: [
                De.jsx(An, { path: "/", element: De.jsx(Ch, {}) }),
                De.jsx(An, { path: "/document", element: De.jsx(xh, {}) }),
              ],
            }),
            De.jsx(An, { path: "/login", element: De.jsx(Eh, {}) }),
            De.jsx(An, {
              path: "*",
              element: De.jsx(jp, { to: "/login", replace: !0 }),
            }),
          ],
        }),
      })
    );
  },
  jc = C.createContext(),
  _h = ({ children: i }) => {
    const [s, a] = C.useState(null),
      [p, f] = C.useState(!1),
      m = Dr();
    return (
      C.useLayoutEffect(() => {
        (async () => {
          try {
            const x = await fetch("/api/v1/auth/validate-session", {
              method: "GET",
              credentials: "include",
            });
            !x.ok || x.status === 401 ? (m("/login"), a(!1)) : a(!0);
          } catch (x) {
            console.error("something went wrong", x), f(!0);
          }
        })();
      }, []),
      De.jsx(jc.Provider, {
        value: {
          isAuth: s,
          setIsAuth: a,
          isSessionExpired: p,
          setIsSessionExpired: f,
        },
        children: i,
      })
    );
  },
  Th = () => {
    const i = C.useContext(jc);
    if (!i) throw new Error("useAuth must be used within a AuthProvider");
    return i;
  };
Wd.createRoot(document.getElementById("root")).render(
  De.jsx(ch, { children: De.jsx(_h, { children: De.jsx(Ph, {}) }) })
);
export {
  jp as N,
  Lh as O,
  Dt as a,
  Dr as b,
  Nh as c,
  De as j,
  C as r,
  Th as u,
};
