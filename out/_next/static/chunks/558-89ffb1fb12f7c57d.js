"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [558],
  {
    2974: function (t, e, i) {
      i.d(e, {
        g7: function () {
          return s;
        },
      });
      var r = i(2265),
        n = i(7437),
        s = r.forwardRef((t, e) => {
          let { children: i, ...s } = t,
            a = r.Children.toArray(i),
            u = a.find(l);
          if (u) {
            let t = u.props.children,
              i = a.map((e) =>
                e !== u
                  ? e
                  : r.Children.count(t) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(t)
                      ? t.props.children
                      : null,
              );
            return (0, n.jsx)(o, {
              ...s,
              ref: e,
              children: r.isValidElement(t)
                ? r.cloneElement(t, void 0, i)
                : null,
            });
          }
          return (0, n.jsx)(o, { ...s, ref: e, children: i });
        });
      s.displayName = "Slot";
      var o = r.forwardRef((t, e) => {
        let { children: i, ...n } = t;
        if (r.isValidElement(i)) {
          let t, s;
          let o =
            (t = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
            "isReactWarning" in t &&
            t.isReactWarning
              ? i.ref
              : (t = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                  "isReactWarning" in t &&
                  t.isReactWarning
                ? i.props.ref
                : i.props.ref || i.ref;
          return r.cloneElement(i, {
            ...(function (t, e) {
              let i = { ...e };
              for (let r in e) {
                let n = t[r],
                  s = e[r];
                /^on[A-Z]/.test(r)
                  ? n && s
                    ? (i[r] = (...t) => {
                        s(...t), n(...t);
                      })
                    : n && (i[r] = n)
                  : "style" === r
                    ? (i[r] = { ...n, ...s })
                    : "className" === r &&
                      (i[r] = [n, s].filter(Boolean).join(" "));
              }
              return { ...t, ...i };
            })(n, i.props),
            ref: e
              ? (function (...t) {
                  return (e) =>
                    t.forEach((t) => {
                      "function" == typeof t
                        ? t(e)
                        : null != t && (t.current = e);
                    });
                })(e, o)
              : o,
          });
        }
        return r.Children.count(i) > 1 ? r.Children.only(null) : null;
      });
      o.displayName = "SlotClone";
      var a = ({ children: t }) => (0, n.jsx)(n.Fragment, { children: t });
      function l(t) {
        return r.isValidElement(t) && t.type === a;
      }
    },
    2218: function (t, e, i) {
      i.d(e, {
        j: function () {
          return s;
        },
      });
      let r = (t) => ("boolean" == typeof t ? "".concat(t) : 0 === t ? "0" : t),
        n = function () {
          for (var t, e, i = 0, r = ""; i < arguments.length; )
            (t = arguments[i++]) &&
              (e = (function t(e) {
                var i,
                  r,
                  n = "";
                if ("string" == typeof e || "number" == typeof e) n += e;
                else if ("object" == typeof e) {
                  if (Array.isArray(e))
                    for (i = 0; i < e.length; i++)
                      e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
                  else for (i in e) e[i] && (n && (n += " "), (n += i));
                }
                return n;
              })(t)) &&
              (r && (r += " "), (r += e));
          return r;
        },
        s = (t, e) => (i) => {
          var s;
          if ((null == e ? void 0 : e.variants) == null)
            return n(
              t,
              null == i ? void 0 : i.class,
              null == i ? void 0 : i.className,
            );
          let { variants: o, defaultVariants: a } = e,
            l = Object.keys(o).map((t) => {
              let e = null == i ? void 0 : i[t],
                n = null == a ? void 0 : a[t];
              if (null === e) return null;
              let s = r(e) || r(n);
              return o[t][s];
            }),
            u =
              i &&
              Object.entries(i).reduce((t, e) => {
                let [i, r] = e;
                return void 0 === r || (t[i] = r), t;
              }, {});
          return n(
            t,
            l,
            null == e
              ? void 0
              : null === (s = e.compoundVariants) || void 0 === s
                ? void 0
                : s.reduce((t, e) => {
                    let { class: i, className: r, ...n } = e;
                    return Object.entries(n).every((t) => {
                      let [e, i] = t;
                      return Array.isArray(i)
                        ? i.includes({ ...a, ...u }[e])
                        : { ...a, ...u }[e] === i;
                    })
                      ? [...t, i, r]
                      : t;
                  }, []),
            null == i ? void 0 : i.class,
            null == i ? void 0 : i.className,
          );
        };
    },
    4839: function (t, e, i) {
      function r() {
        for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)
          (t = arguments[i]) &&
            (e = (function t(e) {
              var i,
                r,
                n = "";
              if ("string" == typeof e || "number" == typeof e) n += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (i = 0; i < s; i++)
                    e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
                } else for (r in e) e[r] && (n && (n += " "), (n += r));
              }
              return n;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      }
      i.d(e, {
        W: function () {
          return r;
        },
      }),
        (e.Z = r);
    },
    6323: function (t, e, i) {
      i.d(e, {
        t: function () {
          return r;
        },
      });
      let r = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    9805: function (t, e, i) {
      i.d(e, {
        _: function () {
          return h;
        },
      });
      var r = i(9047),
        n = i(6159),
        s = i(3153);
      function o(t, e) {
        [...e].reverse().forEach((i) => {
          let r = t.getVariant(i);
          r && (0, n.C)(t, r),
            t.variantChildren &&
              t.variantChildren.forEach((t) => {
                o(t, e);
              });
        });
      }
      function a() {
        let t = !1,
          e = new Set(),
          i = {
            subscribe: (t) => (e.add(t), () => void e.delete(t)),
            start(i, n) {
              (0, r.k)(
                t,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let o = [];
              return (
                e.forEach((t) => {
                  o.push((0, s.d)(t, i, { transitionOverride: n }));
                }),
                Promise.all(o)
              );
            },
            set: (i) => (
              (0, r.k)(
                t,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
              e.forEach((t) => {
                Array.isArray(i)
                  ? o(t, i)
                  : "string" == typeof i
                    ? o(t, [i])
                    : (0, n.C)(t, i);
              })
            ),
            stop() {
              e.forEach((t) => {
                !(function (t) {
                  t.values.forEach((t) => t.stop());
                })(t);
              });
            },
            mount: () => (
              (t = !0),
              () => {
                (t = !1), i.stop();
              }
            ),
          };
        return i;
      }
      var l = i(458),
        u = i(9033);
      let h = function () {
        let t = (0, l.h)(a);
        return (0, u.L)(t.mount, []), t;
      };
    },
    6741: function (t, e, i) {
      i.d(e, {
        v: function () {
          return tm;
        },
      });
      var r = i(557),
        n = i(6019);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        o = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        a = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? a
            : n.G.has(t)
              ? t.startsWith("scale")
                ? o(e[1])
                : s
              : l;
      var h = i(9792),
        c = i(565);
      let d = { current: !1 },
        p = (t) => null !== t;
      function f(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(p),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      var m = i(6219),
        v = i(3078),
        g = i(7521),
        y = i(9276);
      function x(t) {
        return "function" == typeof t;
      }
      var b = i(9993),
        w = i(3653),
        P = i(9047),
        S = i(3646);
      let T = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (S.P.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class A {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = b.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, w.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = b.X.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: n,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = T(n, e),
                a = T(s, e);
              return (
                (0, P.K)(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`,
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || x(i)) && r))
              );
            })(t, i, r, n)
          ) {
            if (d.current || !s) {
              null == a || a(f(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var E = i(3476);
      function C(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, E.R)(i - t(r), e - r);
      }
      var k = i(1506);
      function V(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let M = ["duration", "bounce"],
        R = ["stiffness", "damping", "mass"];
      function j(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function D({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let s;
        let o = t[0],
          a = t[t.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: c,
            duration: d,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!j(t, R) && j(t, M)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let s, o;
                (0, P.K)(
                  t <= (0, r.w)(10),
                  "Spring duration must be 10 seconds or less",
                );
                let a = 1 - e;
                (a = (0, k.u)(0.05, 1, a)),
                  (t = (0, k.u)(0.01, 10, (0, r.X)(t))),
                  a < 1
                    ? ((s = (e) => {
                        let r = e * a,
                          n = r * t;
                        return 0.001 - ((r - i) / V(e, a)) * Math.exp(-n);
                      }),
                      (o = (e) => {
                        let r = e * a * t,
                          n = Math.pow(a, 2) * Math.pow(e, 2) * t,
                          o = V(Math.pow(e, 2), a);
                        return (
                          ((r * i + i - n) *
                            Math.exp(-r) *
                            (-s(e) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((s = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (o = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let l = (function (t, e, i) {
                  let r = i;
                  for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                  return r;
                })(s, o, 5 / t);
                if (((t = (0, r.w)(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -(0, r.X)(n.velocity || 0) }),
          m = p || 0,
          v = h / (2 * Math.sqrt(u * c)),
          g = a - o,
          y = (0, r.X)(Math.sqrt(u / c)),
          x = 5 > Math.abs(g);
        if ((i || (i = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), v < 1)) {
          let t = V(y, v);
          s = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          s = (t) => a - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          s = (e) => {
            let i = Math.exp(-v * y * e),
              r = Math.min(t * e, 300);
            return (
              a -
              (i * ((m + v * y * g) * Math.sinh(r) + t * g * Math.cosh(r))) / t
            );
          };
        }
        return {
          calculatedDuration: (f && d) || null,
          next: (t) => {
            let n = s(t);
            if (f) l.done = t >= d;
            else {
              let o = 0;
              v < 1 && (o = 0 === t ? (0, r.w)(m) : C(s, t, n));
              let u = Math.abs(o) <= i,
                h = Math.abs(a - n) <= e;
              l.done = u && h;
            }
            return (l.value = l.done ? a : n), l;
          },
        };
      }
      function L({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let b = (t) => -g * Math.exp(-t / r),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : i);
          },
          S = (t) => {
            m(f.value) &&
              ((c = t),
              (d = D({
                keyframes: [f.value, v(f.value)],
                velocity: C(w, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), P(t), S(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || P(t), f);
            },
          }
        );
      }
      let O = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function F(t, e, i, r) {
        if (t === e && i === r) return y.Z;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do (s = O((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : O(n(t), e, r));
      }
      let B = F(0.42, 0, 1, 1),
        W = F(0, 0, 0.58, 1),
        z = F(0.42, 0, 0.58, 1),
        $ = (t) => Array.isArray(t) && "number" != typeof t[0];
      var N = i(8536),
        I = i(3108),
        U = i(2718);
      let X = F(0.33, 1.53, 0.69, 0.99),
        H = (0, U.M)(X),
        Y = (0, I.o)(H),
        G = {
          linear: y.Z,
          easeIn: B,
          easeInOut: z,
          easeOut: W,
          circIn: N.Z7,
          circInOut: N.X7,
          circOut: N.Bn,
          backIn: H,
          backInOut: Y,
          backOut: X,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * H(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        K = (t) => {
          if (Array.isArray(t)) {
            (0, P.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, r, n] = t;
            return F(e, i, r, n);
          }
          return "string" == typeof t
            ? ((0, P.k)(void 0 !== G[t], `Invalid easing type '${t}'`), G[t])
            : t;
        };
      var Z = i(2548),
        q = i(839);
      function _({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = $(r) ? r.map(K) : K(r),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, q.Y)(e)).map((e) => e * t),
          a = (0, Z.s)(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || z).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var J = i(9654),
        Q = i(5389);
      let tt = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Wi.update(e, !0),
            stop: () => (0, m.Pn)(e),
            now: () =>
              m.frameData.isProcessing ? m.frameData.timestamp : b.X.now(),
          };
        },
        te = { decay: L, inertia: L, tween: _, keyframes: _, spring: D },
        ti = (t) => t / 100;
      class tr extends A {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || w.e;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = x(r) ? r : te[r] || _;
          l !== _ &&
            "number" != typeof t[0] &&
            ((e = (0, J.z)(ti, (0, Q.C)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            c = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: c,
            totalDuration: c * (n + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            b = n;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (b = s)),
              (x = (0, k.u)(0, 1, i) * h);
          }
          let w = y ? { done: !1, value: a[0] } : b.next(x);
          o && (w.value = o(w.value));
          let { done: P } = w;
          y ||
            null === l ||
            (P =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            S && void 0 !== r && (w.value = f(a, this.options, r)),
            v && v(w.value),
            S && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = tt, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = r)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tn = i(6323);
      let ts = (t) => Array.isArray(t) && "number" == typeof t[0],
        to = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        ta = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: to([0, 0.65, 0.55, 1]),
          circOut: to([0.55, 0, 1, 0.45]),
          backIn: to([0.31, 0.01, 0.66, -0.59]),
          backOut: to([0.33, 1.53, 0.69, 0.99]),
        };
      function tl(t) {
        return tu(t) || ta.easeOut;
      }
      function tu(t) {
        if (t) return ts(t) ? to(t) : Array.isArray(t) ? t.map(tl) : ta[t];
      }
      let th = (0, g.X)(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate"),
      );
      class tc extends A {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new v.s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r,
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, r;
          let {
            duration: n = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            x((r = this.options).type) ||
            "spring" === r.type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in ta) ||
                ts(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(r.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new tr({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {},
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tu(a);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: r,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(f(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: c,
              duration: n,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, r.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, r.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, r.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              c = new tr({
                ...h,
                keyframes: i,
                duration: n,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, r.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: o,
          } = t;
          return (
            th() &&
            i &&
            tn.t.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var td = i(8691),
        tp = i(7581);
      class tf {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!(0, tp.t)() || !e.attachTimeline)
              return (
                e.pause(),
                (0, td.U)((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tm =
        (t, e, i, n = {}, s, o) =>
        (a) => {
          let l = (0, h.e)(n, t) || {},
            p = l.delay || n.delay || 0,
            { elapsed: v = 0 } = n;
          v -= (0, r.w)(p);
          let g = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...l,
            delay: -v,
            onUpdate: (t) => {
              e.set(t), l.onUpdate && l.onUpdate(t);
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete();
            },
            name: t,
            motionValue: e,
            element: o ? void 0 : s,
          };
          (0, h.r)(l) || (g = { ...g, ...u(t, g) }),
            g.duration && (g.duration = (0, r.w)(g.duration)),
            g.repeatDelay && (g.repeatDelay = (0, r.w)(g.repeatDelay)),
            void 0 !== g.from && (g.keyframes[0] = g.from);
          let y = !1;
          if (
            ((!1 !== g.type && (0 !== g.duration || g.repeatDelay)) ||
              ((g.duration = 0), 0 !== g.delay || (y = !0)),
            (d.current || c.c.skipAnimations) &&
              ((y = !0), (g.duration = 0), (g.delay = 0)),
            y && !o && void 0 !== e.get())
          ) {
            let t = f(g.keyframes, l);
            if (void 0 !== t)
              return (
                m.Wi.update(() => {
                  g.onUpdate(t), g.onComplete();
                }),
                new tf([])
              );
          }
          return !o && tc.supports(g) ? new tc(g) : new tr(g);
        };
    },
    3153: function (t, e, i) {
      i.d(e, {
        d: function () {
          return f;
        },
      });
      var r = i(352),
        n = i(6019),
        s = i(6741),
        o = i(6159),
        a = i(9792),
        l = i(2087),
        u = i(3944),
        h = i(6219);
      function c(t, e, { delay: i = 0, transitionOverride: r, type: c } = {}) {
        var d;
        let {
          transition: p = t.getDefaultTransition(),
          transitionEnd: f,
          ...m
        } = e;
        r && (p = r);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in m) {
          let r = t.getValue(
              e,
              null !== (d = t.latestValues[e]) && void 0 !== d ? d : null,
            ),
            o = m[e];
          if (
            void 0 === o ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(g, e))
          )
            continue;
          let c = { delay: i, ...(0, a.e)(p || {}, e) },
            f = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, l.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, h.Wi);
              null !== t && ((c.startTime = t), (f = !0));
            }
          }
          (0, u.K)(t, e),
            r.start(
              (0, s.v)(
                e,
                r,
                o,
                t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : c,
                t,
                f,
              ),
            );
          let y = r.animation;
          y && v.push(y);
        }
        return (
          f &&
            Promise.all(v).then(() => {
              h.Wi.update(() => {
                f && (0, o.C)(t, f);
              });
            }),
          v
        );
      }
      function d(t, e, i = {}) {
        var n;
        let s = (0, r.x)(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0,
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (o = i.transitionOverride);
        let a = s ? () => Promise.all(c(t, s, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              d(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + r, s, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function f(t, e, i = {}) {
        let n;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          n = Promise.all(e.map((e) => d(t, e, i)));
        else if ("string" == typeof e) n = d(t, e, i);
        else {
          let s = "function" == typeof e ? (0, r.x)(t, e, i.custom) : e;
          n = Promise.all(c(t, s, i));
        }
        return n.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    5908: function (t, e, i) {
      i.d(e, {
        M: function () {
          return r;
        },
      });
      let r = "data-" + (0, i(1580).D)("framerAppearId");
    },
    2087: function (t, e, i) {
      i.d(e, {
        s: function () {
          return n;
        },
      });
      var r = i(5908);
      function n(t) {
        return t.props[r.M];
      }
    },
    6925: function (t, e, i) {
      i.d(e, {
        C: function () {
          return r;
        },
      });
      let r = (t) => Array.isArray(t);
    },
    9792: function (t, e, i) {
      function r({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: r,
        staggerDirection: n,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function n(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, {
        e: function () {
          return n;
        },
        r: function () {
          return r;
        },
      });
    },
    4446: function (t, e, i) {
      i.d(e, {
        M: function () {
          return g;
        },
      });
      var r = i(7437),
        n = i(2265),
        s = i(7797),
        o = i(458),
        a = i(9791);
      class l extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(t) {
        let { children: e, isPresent: i } = t,
          s = (0, n.useId)(),
          o = (0, n.useRef)(null),
          u = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: h } = (0, n.useContext)(a._);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: e, top: r, left: n } = u.current;
            if (i || !o.current || !t || !e) return;
            o.current.dataset.motionPopId = s;
            let a = document.createElement("style");
            return (
              h && (a.nonce = h),
              document.head.appendChild(a),
              a.sheet &&
                a.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            top: ")
                    .concat(r, "px !important;\n            left: ")
                    .concat(n, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(a);
              }
            );
          }, [i]),
          (0, r.jsx)(l, {
            isPresent: i,
            childRef: o,
            sizeRef: u,
            children: n.cloneElement(e, { ref: o }),
          })
        );
      }
      let h = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: a,
            onExitComplete: l,
            custom: h,
            presenceAffectsLayout: d,
            mode: p,
          } = t,
          f = (0, o.h)(c),
          m = (0, n.useId)(),
          v = (0, n.useMemo)(
            () => ({
              id: m,
              initial: i,
              isPresent: a,
              custom: h,
              onExitComplete: (t) => {
                for (let e of (f.set(t, !0), f.values())) if (!e) return;
                l && l();
              },
              register: (t) => (f.set(t, !1), () => f.delete(t)),
            }),
            d ? [Math.random()] : [a],
          );
        return (
          (0, n.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [a]),
          n.useEffect(() => {
            a || f.size || !l || l();
          }, [a]),
          "popLayout" === p &&
            (e = (0, r.jsx)(u, { isPresent: a, children: e })),
          (0, r.jsx)(s.O.Provider, { value: v, children: e })
        );
      };
      function c() {
        return new Map();
      }
      var d = i(5050),
        p = i(9047);
      let f = (t) => t.key || "";
      function m(t) {
        let e = [];
        return (
          n.Children.forEach(t, (t) => {
            (0, n.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      var v = i(9033);
      let g = (t) => {
        let {
          children: e,
          exitBeforeEnter: i,
          custom: s,
          initial: a = !0,
          onExitComplete: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        } = t;
        (0, p.k)(!i, "Replace exitBeforeEnter with mode='wait'");
        let g = (0, n.useMemo)(() => m(e), [e]),
          y = g.map(f),
          x = (0, n.useRef)(!0),
          b = (0, n.useRef)(g),
          w = (0, o.h)(() => new Map()),
          [P, S] = (0, n.useState)(g),
          [T, A] = (0, n.useState)(g);
        (0, v.L)(() => {
          (x.current = !1), (b.current = g);
          for (let t = 0; t < T.length; t++) {
            let e = f(T[t]);
            y.includes(e) ? w.delete(e) : !0 !== w.get(e) && w.set(e, !1);
          }
        }, [T, y.length, y.join("-")]);
        let E = [];
        if (g !== P) {
          let t = [...g];
          for (let e = 0; e < T.length; e++) {
            let i = T[e],
              r = f(i);
            y.includes(r) || (t.splice(e, 0, i), E.push(i));
          }
          "wait" === c && E.length && (t = E), A(m(t)), S(g);
          return;
        }
        let { forceRender: C } = (0, n.useContext)(d.p);
        return (0, r.jsx)(r.Fragment, {
          children: T.map((t) => {
            let e = f(t),
              i = g === T || y.includes(e);
            return (0, r.jsx)(
              h,
              {
                isPresent: i,
                initial: (!x.current || !!a) && void 0,
                custom: i ? void 0 : s,
                presenceAffectsLayout: u,
                mode: c,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!w.has(e)) return;
                      w.set(e, !0);
                      let t = !0;
                      w.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (null == C || C(), A(b.current), l && l());
                    },
                children: t,
              },
              e,
            );
          }),
        });
      };
    },
    5050: function (t, e, i) {
      i.d(e, {
        p: function () {
          return r;
        },
      });
      let r = (0, i(2265).createContext)({});
    },
    9791: function (t, e, i) {
      i.d(e, {
        _: function () {
          return r;
        },
      });
      let r = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    7797: function (t, e, i) {
      i.d(e, {
        O: function () {
          return r;
        },
      });
      let r = (0, i(2265).createContext)(null);
    },
    8536: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var r = i(3108),
        n = i(2718);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, n.M)(s),
        a = (0, r.o)(s);
    },
    3108: function (t, e, i) {
      i.d(e, {
        o: function () {
          return r;
        },
      });
      let r = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2718: function (t, e, i) {
      i.d(e, {
        M: function () {
          return r;
        },
      });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    2981: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var r = i(565);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = n.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  r = !1,
                  n = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && r ? e : i;
                    return n && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), r)) {
                      n = !0;
                      return;
                    }
                    (r = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(a),
                      (r = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {},
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: f,
          } = l,
          m = () => {
            let n = r.c.useManualTiming ? o.timestamp : performance.now();
            (i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(n - o.timestamp, 40), 1)),
              (o.timestamp = n),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              f.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), o.isProcessing || t(m);
          };
        return {
          schedule: n.reduce((t, e) => {
            let r = l[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || v(), r.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < n.length; e++) l[n[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    6219: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        Wi: function () {
          return n;
        },
        frameData: function () {
          return o;
        },
        yL: function () {
          return a;
        },
      });
      var r = i(9276);
      let {
        schedule: n,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(2981).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0,
      );
    },
    9993: function (t, e, i) {
      let r;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var n = i(565),
        s = i(6219);
      function o() {
        r = void 0;
      }
      let a = {
        now: () => (
          void 0 === r &&
            a.set(
              s.frameData.isProcessing || n.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now(),
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(o);
        },
      };
    },
    6379: function (t, e, i) {
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return rr;
        },
      });
      var n,
        s,
        o,
        a = i(6925);
      function l(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function u(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var h = i(352);
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...c];
      var p = i(3153);
      let f = d.length,
        m = [...c].reverse(),
        v = c.length;
      function g(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function y() {
        return {
          animate: g(!0),
          whileInView: g(),
          whileHover: g(),
          whileTap: g(),
          whileDrag: g(),
          whileFocus: g(),
          exit: g(),
        };
      }
      class x {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class b extends x {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, p.d)(t, e, i),
                      ),
                    ),
                  i = y(),
                  n = !0,
                  s = (e) => (i, r) => {
                    var n;
                    let s = (0, h.x)(
                      t,
                      r,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: h } = t,
                    c =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < f; t++) {
                          let r = d[t],
                            n = e.props[r];
                          (u(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    g = new Set(),
                    y = {},
                    x = 1 / 0;
                  for (let e = 0; e < v; e++) {
                    var b;
                    let d = m[e],
                      f = i[d],
                      v = void 0 !== h[d] ? h[d] : c[d],
                      w = u(v),
                      P = d === o ? f.isActive : null;
                    !1 === P && (x = e);
                    let S = v === c[d] && v !== h[d] && w;
                    if (
                      (S && n && t.manuallyAnimateOnMount && (S = !1),
                      (f.protectedKeys = { ...y }),
                      (!f.isActive && null === P) ||
                        (!v && !f.prevProp) ||
                        r(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let T =
                        ((b = f.prevProp),
                        "string" == typeof v
                          ? v !== b
                          : !!Array.isArray(v) && !l(v, b)),
                      A =
                        T || (d === o && f.isActive && !S && w) || (e > x && w),
                      E = !1,
                      C = Array.isArray(v) ? v : [v],
                      k = C.reduce(s(d), {});
                    !1 === P && (k = {});
                    let { prevResolvedValues: V = {} } = f,
                      M = { ...V, ...k },
                      R = (e) => {
                        (A = !0),
                          g.has(e) && ((E = !0), g.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = k[t],
                        i = V[t];
                      if (!y.hasOwnProperty(t))
                        ((0, a.C)(e) && (0, a.C)(i) ? l(e, i) : e === i)
                          ? void 0 !== e && g.has(t)
                            ? R(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                            ? R(t)
                            : g.add(t);
                    }
                    (f.prevProp = v),
                      (f.prevResolvedValues = k),
                      f.isActive && (y = { ...y, ...k }),
                      n && t.blockInitialAnimation && (A = !1);
                    let j = !(S && T) || E;
                    A &&
                      j &&
                      p.push(
                        ...C.map((t) => ({
                          animation: t,
                          options: { type: d },
                        })),
                      );
                  }
                  if (g.size) {
                    let e = {};
                    g.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      p.push({ animation: e });
                  }
                  let w = !!p.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (n = !1),
                    w ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = y()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let w = 0;
      class P extends x {
        constructor() {
          super(...arguments), (this.id = w++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var S = i(9276),
        T = i(9047);
      let A = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function E(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let C = (t) => (e) => A(e) && t(e, E(e));
      var k = i(557);
      function V(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      function M(t, e, i, r) {
        return V(t, e, C(i), r);
      }
      var R = i(9654);
      let j = (t, e) => Math.abs(t - e);
      var D = i(6219);
      class L {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = B(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(j(t.x, e.x) ** 2 + j(t.y, e.y) ** 2) >= 3);
              if (!r && !n) return;
              let { point: s } = i,
                { timestamp: o } = D.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = O(e, this.transformPagePoint)),
                D.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = B(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : O(e, this.transformPagePoint),
                this.history,
              );
              this.startEvent && i && i(t, s), r && r(t, s);
            }),
            !A(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window);
          let s = O(E(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = D.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, B(s, this.history)),
            (this.removeListeners = (0, R.z)(
              M(this.contextWindow, "pointermove", this.handlePointerMove),
              M(this.contextWindow, "pointerup", this.handlePointerUp),
              M(this.contextWindow, "pointercancel", this.handlePointerUp),
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, D.Pn)(this.updatePoint);
        }
      }
      function O(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function F(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function B({ point: t }, e) {
        return {
          point: t,
          delta: F(t, W(e)),
          offset: F(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = W(t);
            for (
              ;
              i >= 0 &&
              ((r = t[i]), !(n.timestamp - r.timestamp > (0, k.w)(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = (0, k.X)(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function W(t) {
        return t[t.length - 1];
      }
      function z(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let $ = z("dragHorizontal"),
        N = z("dragVertical");
      function I(t) {
        let e = !1;
        if ("y" === t) e = N();
        else if ("x" === t) e = $();
        else {
          let t = $(),
            i = N();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function U() {
        let t = I(!0);
        return !t || (t(), !1);
      }
      function X(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var H = i(3217),
        Y = i(5004);
      function G(t) {
        return t.max - t.min;
      }
      function K(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = (0, Y.t)(e.min, e.max, t.origin)),
          (t.scale = G(i) / G(e)),
          (t.translate = (0, Y.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function Z(t, e, i, r) {
        K(t.x, e.x, i.x, r ? r.originX : void 0),
          K(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function q(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + G(e));
      }
      function _(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + G(e));
      }
      function J(t, e, i) {
        _(t.x, e.x, i.x), _(t.y, e.y, i.y);
      }
      var Q = i(1506);
      function tt(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function te(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function ti(t, e, i) {
        return { min: tr(t, e), max: tr(t, i) };
      }
      function tr(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let tn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ts = () => ({ x: tn(), y: tn() }),
        to = () => ({ min: 0, max: 0 }),
        ta = () => ({ x: to(), y: to() });
      function tl(t) {
        return [t("x"), t("y")];
      }
      function tu({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function th(t) {
        return void 0 === t || 1 === t;
      }
      function tc({ scale: t, scaleX: e, scaleY: i }) {
        return !th(t) || !th(e) || !th(i);
      }
      function td(t) {
        return (
          tc(t) ||
          tp(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function tp(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function tf(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function tm(t, e = 0, i = 1, r, n) {
        (t.min = tf(t.min, e, i, r, n)), (t.max = tf(t.max, e, i, r, n));
      }
      function tv(t, { x: e, y: i }) {
        tm(t.x, e.translate, e.scale, e.originPoint),
          tm(t.y, i.translate, i.scale, i.originPoint);
      }
      function tg(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ty(t, e, i, r, n = 0.5) {
        let s = (0, Y.t)(t.min, t.max, n);
        tm(t, e, i, s, r);
      }
      function tx(t, e) {
        ty(t.x, e.x, e.scaleX, e.scale, e.originX),
          ty(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function tb(t, e) {
        return tu(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      var tw = i(5480),
        tP = i(6741);
      let tS = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tT = i(3944);
      let tA = new WeakMap();
      class tE {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ta()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new L(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(E(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: r,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !r &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = I(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tl((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tw.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        if (r) {
                          let t = G(r);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && D.Wi.postRender(() => n(t, e)),
                  (0, tT.K)(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tl((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: tS(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && D.Wi.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !tC(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? (0, Y.t)(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? (0, Y.t)(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            n = this.constraints;
          e && X(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && r
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: r, right: n },
                ) {
                  return { x: tt(t.x, i, n), y: tt(t.y, e, r) };
                })(r.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ti(t, "left", "right"), y: ti(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tl((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !X(e)) return !1;
          let r = e.current;
          (0, T.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = tb(t, i),
                { scroll: n } = e;
              return n && (tg(r.x, n.offset.x), tg(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: te((t = n.layout.layoutBox).x, s.x), y: te(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            (this.hasMutatedConstraints = !!t), t && (o = tu(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            tl((o) => {
              if (!tC(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            (0, tT.K)(this.visualElement, t),
            i.start((0, tP.v)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          tl((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tl((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          tl((e) => {
            let { drag: i } = this.getProps();
            if (!tC(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - (0, Y.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!X(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          tl((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = G(t),
                  n = G(e);
                return (
                  n > r
                    ? (i = (0, H.Y)(e.min, e.max - r, t.min))
                    : r > n && (i = (0, H.Y)(t.min, t.max - n, e.min)),
                  (0, Q.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            tl((e) => {
              if (!tC(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set((0, Y.t)(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tA.set(this.visualElement, this);
          let t = M(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              X(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            D.Wi.read(e);
          let n = V(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tl((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tC(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tk extends x {
        constructor(t) {
          super(t),
            (this.removeGroupControls = S.Z),
            (this.removeListeners = S.Z),
            (this.controls = new tE(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || S.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let tV = (t) => (e, i) => {
        t && D.Wi.postRender(() => t(e, i));
      };
      class tM extends x {
        constructor() {
          super(...arguments), (this.removePointerDownListener = S.Z);
        }
        onPointerDown(t) {
          this.session = new L(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: tS(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: tV(t),
            onStart: tV(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && D.Wi.postRender(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = M(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var tR = i(7437),
        tj = i(2265),
        tD = i(7797),
        tL = i(5050);
      let tO = (0, tj.createContext)({}),
        tF = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tB(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tW = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tw.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tB(t, e.target.x),
            r = tB(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      var tz = i(3646);
      let t$ = {},
        { schedule: tN, cancel: tI } = (0, i(2981).Z)(queueMicrotask, !1);
      class tU extends tj.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(t$, tH),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tF.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    D.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            tN.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tX(t) {
        let [e, i] = (function () {
            let t = (0, tj.useContext)(tD.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              n = (0, tj.useId)();
            (0, tj.useEffect)(() => r(n), []);
            let s = (0, tj.useCallback)(() => i && i(n), [n, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          r = (0, tj.useContext)(tL.p);
        return (0, tR.jsx)(tU, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, tj.useContext)(tO),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tH = {
        borderRadius: {
          ...tW,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tW,
        borderTopRightRadius: tW,
        borderBottomLeftRadius: tW,
        borderBottomRightRadius: tW,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let r = tz.P.parse(t);
            if (r.length > 5) return t;
            let n = tz.P.createTransformer(t),
              s = "number" != typeof r[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = (0, Y.t)(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              n(r)
            );
          },
        },
      };
      var tY = i(2428),
        tG = i(8536);
      let tK = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tZ = tK.length,
        tq = (t) => ("string" == typeof t ? parseFloat(t) : t),
        t_ = (t) => "number" == typeof t || tw.px.test(t);
      function tJ(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let tQ = t1(0, 0.5, tG.Bn),
        t0 = t1(0.5, 0.95, S.Z);
      function t1(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i((0, H.Y)(t, e, r)));
      }
      function t5(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function t2(t, e) {
        t5(t.x, e.x), t5(t.y, e.y);
      }
      function t3(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function t9(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function t6(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tw.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, Y.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, Y.t)(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = t9(t.min, e, i, a, n)),
            (t.max = t9(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let t4 = ["x", "scaleX", "originX"],
        t7 = ["y", "scaleY", "originY"];
      function t8(t, e, i, r) {
        t6(t.x, e, t4, i ? i.x : void 0, r ? r.x : void 0),
          t6(t.y, e, t7, i ? i.y : void 0, r ? r.y : void 0);
      }
      var et = i(9792);
      function ee(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ei(t) {
        return ee(t.x) && ee(t.y);
      }
      function er(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function en(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function es(t, e) {
        return en(t.x, e.x) && en(t.y, e.y);
      }
      function eo(t) {
        return G(t.x) / G(t.y);
      }
      function ea(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      var el = i(8746);
      class eu {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, el.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, el.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let eh = (t, e) => t.depth - e.depth;
      class ec {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, el.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, el.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eh),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var ed = i(9155),
        ep = i(8322);
      function ef(t) {
        let e = (0, ep.i)(t) ? t.get() : t;
        return (0, ed.p)(e) ? e.toValue() : e;
      }
      var em = i(9993),
        ev = i(804),
        eg = i(2087);
      let ey = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ex = "undefined" != typeof window && void 0 !== window.MotionDebug,
        eb = ["", "X", "Y", "Z"],
        ew = { visibility: "hidden" },
        eP = 0;
      function eS(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function eT({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = eP++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  ex &&
                    (ey.totalNodes =
                      ey.resolvedTargetDeltas =
                      ey.recalculatedProjection =
                        0),
                  this.nodes.forEach(eC),
                  this.nodes.forEach(eL),
                  this.nodes.forEach(eO),
                  this.nodes.forEach(ek),
                  ex && window.MotionDebug.record(ey);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ec());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tY.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = em.X.now(),
                      r = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && ((0, D.Pn)(r), t(n - 250));
                      };
                    return D.Wi.read(r, !0), () => (0, D.Pn)(r);
                  })(r, 0)),
                  tF.hasAnimatedSinceResize &&
                    ((tF.hasAnimatedSinceResize = !1), this.nodes.forEach(eD));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        eN,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !es(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, et.e)(n, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eD(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, D.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eF),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let r = (0, eg.s)(i);
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      D.Wi,
                      !(t || i),
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eM);
              return;
            }
            this.isUpdating || this.nodes.forEach(eR),
              (this.isUpdating = !1),
              this.nodes.forEach(ej),
              this.nodes.forEach(eA),
              this.nodes.forEach(eE),
              this.clearAllSnapshots();
            let t = em.X.now();
            (D.frameData.delta = (0, Q.u)(
              0,
              1e3 / 60,
              t - D.frameData.timestamp,
            )),
              (D.frameData.timestamp = t),
              (D.frameData.isProcessing = !0),
              D.yL.update.process(D.frameData),
              D.yL.preRender.process(D.frameData),
              D.yL.render.process(D.frameData),
              (D.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tN.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(eV), this.sharedNodes.forEach(eB);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              D.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            D.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = ta()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !ei(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              (e || td(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              eX((e = r).x),
              eX(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return ta();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(eY)
              )
            ) {
              let { scroll: t } = this.root;
              t && (tg(i.x, t.offset.x), tg(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = ta();
            if (
              (t2(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e],
                { scroll: n, options: s } = r;
              r !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && t2(i, t),
                tg(i.x, n.offset.x),
                tg(i.y, n.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = ta();
            t2(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                tx(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                td(r.latestValues) && tx(i, r.latestValues);
            }
            return td(this.latestValues) && tx(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = ta();
            t2(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !td(i.latestValues)) continue;
              tc(i.latestValues) && i.updateSnapshot();
              let r = ta();
              t2(r, i.measurePageBox()),
                t8(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r,
                );
            }
            return td(this.latestValues) && t8(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                D.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = D.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ta()),
                    (this.relativeTargetOrigin = ta()),
                    J(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    t2(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ta()), (this.targetWithTransforms = ta())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      q(i.x, r.x, n.x),
                      q(i.y, r.y, n.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : t2(this.target, this.layout.layoutBox),
                        tv(this.target, this.targetDelta))
                      : t2(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ta()),
                      (this.relativeTargetOrigin = ta()),
                      J(this.relativeTargetOrigin, this.target, t.target),
                      t2(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ex && ey.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              tc(this.parent.latestValues) ||
              tp(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === D.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            t2(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      tx(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), tv(t, s)),
                    r && td(n.latestValues) && tx(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = ta()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (t3(this.prevProjectionDelta.x, this.projectionDelta.x),
                t3(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              Z(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                ea(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                ea(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ex && ey.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = ts()),
              (this.projectionDelta = ts()),
              (this.projectionDeltaWithTransform = ts());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = ts();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = ta(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(e$)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (eW(o.x, t.x, r),
                  eW(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  J(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    ez(p.x, f.x, a.x, r),
                    ez(p.y, f.y, a.y, r),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      er(u.x, d.x) && er(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ta()),
                    t2(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = (0, Y.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          tQ(r),
                        )),
                        (t.opacityExit = (0, Y.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t0(r),
                        )))
                      : s &&
                        (t.opacity = (0, Y.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          r,
                        ));
                    for (let n = 0; n < tZ; n++) {
                      let s = `border${tK[n]}Radius`,
                        o = tJ(e, s),
                        a = tJ(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || t_(o) === t_(a)
                          ? ((t[s] = Math.max((0, Y.t)(tq(o), tq(a), r), 0)),
                            (tw.aQ.test(a) || tw.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, Y.t)(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, D.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = D.Wi.update(() => {
                (tF.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = (0, ep.i)(0) ? 0 : (0, ev.BX)(0);
                    return r.start((0, tP.v)("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                eH(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox,
                )
              ) {
                i = this.target || ta();
                let e = G(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = G(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              t2(e, i),
                tx(e, n),
                Z(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n,
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eu()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && eS("z", t, r, this.animationValues);
            for (let e = 0; e < eb.length; e++)
              eS(`rotate${eb[e]}`, t, r, this.animationValues),
                eS(`skew${eb[e]}`, t, r, this.animationValues);
            for (let e in (t.render(), r))
              t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ew;
            let r = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents =
                  ef(null == t ? void 0 : t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    ef(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !td(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = (function (t, e, i) {
                let r = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((n || s || o) &&
                    (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    n && (r += `rotateX(${n}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            t$)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = t$[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this
                    ? ef(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eM),
              this.root.sharedNodes.clear();
          }
        };
      }
      function eA(t) {
        t.updateLayout();
      }
      function eE(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? tl((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = G(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : eH(n, i.layoutBox, e) &&
              tl((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = G(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = ts();
          Z(o, e, i.layoutBox);
          let a = ts();
          s
            ? Z(a, t.applyTransform(r, !0), i.measuredBox)
            : Z(a, e, i.layoutBox);
          let l = !ei(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = ta();
                J(o, i.layoutBox, n.layoutBox);
                let a = ta();
                J(a, e, s.layoutBox),
                  es(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eC(t) {
        ex && ey.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ek(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eV(t) {
        t.clearSnapshot();
      }
      function eM(t) {
        t.clearMeasurements();
      }
      function eR(t) {
        t.isLayoutDirty = !1;
      }
      function ej(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eD(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eL(t) {
        t.resolveTargetDelta();
      }
      function eO(t) {
        t.calcProjection();
      }
      function eF(t) {
        t.resetSkewAndRotation();
      }
      function eB(t) {
        t.removeLeadSnapshot();
      }
      function eW(t, e, i) {
        (t.translate = (0, Y.t)(e.translate, 0, i)),
          (t.scale = (0, Y.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ez(t, e, i, r) {
        (t.min = (0, Y.t)(e.min, i.min, r)),
          (t.max = (0, Y.t)(e.max, i.max, r));
      }
      function e$(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eN = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eI = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eU = eI("applewebkit/") && !eI("chrome/") ? Math.round : S.Z;
      function eX(t) {
        (t.min = eU(t.min)), (t.max = eU(t.max));
      }
      function eH(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(eo(e) - eo(i))))
        );
      }
      function eY(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eG = eT({
          attachResizeListener: (t, e) => V(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eK = { current: void 0 },
        eZ = eT({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eK.current) {
              let t = new eG({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eK.current = t);
            }
            return eK.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function eq(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return M(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (r, n) => {
            if ("touch" === r.pointerType || U()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e);
            let o = s[i];
            o && D.Wi.postRender(() => o(r, n));
          },
          { passive: !t.getProps()[i] },
        );
      }
      class e_ extends x {
        mount() {
          this.unmount = (0, R.z)(eq(this.node, !0), eq(this.node, !1));
        }
        unmount() {}
      }
      class eJ extends x {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, R.z)(
            V(this.node.current, "focus", () => this.onFocus()),
            V(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      let eQ = (t, e) => !!e && (t === e || eQ(t, e.parentElement));
      function e0(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, E(i));
      }
      class e1 extends x {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = S.Z),
            (this.removeEndListeners = S.Z),
            (this.removeAccessibleListeners = S.Z),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                r = M(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: r,
                        globalTapTarget: n,
                      } = this.node.getProps(),
                      s = n || eQ(this.node.current, t.target) ? i : r;
                    s && D.Wi.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) },
                ),
                n = M(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) },
                );
              (this.removeEndListeners = (0, R.z)(r, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = V(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = V(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          e0("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && D.Wi.postRender(() => i(t, e));
                          });
                      },
                    )),
                    e0("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = V(this.node.current, "blur", () => {
                  this.isPressing &&
                    e0("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, R.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && D.Wi.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !U()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && D.Wi.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = M(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) },
            ),
            i = V(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, R.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let e5 = new WeakMap(),
        e2 = new WeakMap(),
        e3 = (t) => {
          let e = e5.get(t.target);
          e && e(t);
        },
        e9 = (t) => {
          t.forEach(e3);
        },
        e6 = { some: 0, all: 1 };
      class e4 extends x {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : e6[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              e2.has(i) || e2.set(i, {});
              let r = e2.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(e9, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              e5.set(t, i),
              r.observe(t),
              () => {
                e5.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      var e7 = i(9791);
      let e8 = (0, tj.createContext)({});
      var it = i(9033);
      let ie = (0, tj.createContext)({ strict: !1 });
      var ii = i(5908);
      let ir = !1;
      function is() {
        window.MotionHandoffIsComplete = !0;
      }
      function io(t) {
        return r(t.animate) || d.some((e) => u(t[e]));
      }
      function ia(t) {
        return !!(io(t) || t.variants);
      }
      function il(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let iu = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ih = {};
      for (let t in iu) ih[t] = { isEnabled: (e) => iu[t].some((t) => !!e[t]) };
      var ic = i(7282);
      let id = Symbol.for("motionComponentSymbol"),
        ip = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function im(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (ip.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var iv = i(1580);
      function ig(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let iy = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function ix(t, e, i, r) {
        for (let i in (ig(t, e, void 0, r), e.attrs))
          t.setAttribute(iy.has(i) ? i : (0, iv.D)(i), e.attrs[i]);
      }
      var ib = i(6019);
      function iw(t, { layout: e, layoutId: i }) {
        return (
          ib.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!t$[t] || "opacity" === t))
        );
      }
      function iP(t, e, i) {
        var r;
        let { style: n } = t,
          s = {};
        for (let o in n)
          ((0, ep.i)(n[o]) ||
            (e.style && (0, ep.i)(e.style[o])) ||
            iw(o, t) ||
            (null === (r = null == i ? void 0 : i.getValue(o)) || void 0 === r
              ? void 0
              : r.liveStyle) !== void 0) &&
            (s[o] = n[o]);
        return (
          i && n && "string" == typeof n.willChange && (i.applyWillChange = !1),
          s
        );
      }
      function iS(t, e, i) {
        let r = iP(t, e, i);
        for (let i in t)
          ((0, ep.i)(t[i]) || (0, ep.i)(e[i])) &&
            (r[
              -1 !== ib._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      var iT = i(8595),
        iA = i(458),
        iE = i(5674);
      let iC = (t) => (e, i) => {
        let n = (0, tj.useContext)(e8),
          s = (0, tj.useContext)(tD.O),
          o = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: n,
              },
              s,
              o,
              a,
              l,
            ) {
              let u = {
                latestValues: (function (t, e, i, n, s) {
                  var o;
                  let a = {},
                    l = [],
                    u =
                      n &&
                      (null === (o = t.style) || void 0 === o
                        ? void 0
                        : o.willChange) === void 0,
                    h = s(t, {});
                  for (let t in h) a[t] = ef(h[t]);
                  let { initial: c, animate: d } = t,
                    p = io(t),
                    f = ia(t);
                  e &&
                    f &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === c && (c = e.initial),
                    void 0 === d && (d = e.animate));
                  let m = !!i && !1 === i.initial,
                    v = (m = m || !1 === c) ? d : c;
                  return (
                    v &&
                      "boolean" != typeof v &&
                      !r(v) &&
                      ik(t, v, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = m ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    u &&
                      (d &&
                        !1 !== c &&
                        !r(d) &&
                        ik(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, iE.p)(e);
                              i && (0, el.y4)(t, i);
                            })(l, e);
                        }),
                      l.length && (a.willChange = l.join(","))),
                    a
                  );
                })(s, o, a, !l && t, e),
                renderState: i(),
              };
              return n && (u.mount = (t) => n(s, t, u)), u;
            })(t, e, n, s, i);
        return i ? o() : (0, iA.h)(o);
      };
      function ik(t, e, i) {
        let r = Array.isArray(e) ? e : [e];
        for (let e = 0; e < r.length; e++) {
          let n = (0, iT.o)(t, r[e]);
          if (n) {
            let { transitionEnd: t, transition: e, ...r } = n;
            i(r, t);
          }
        }
      }
      let iV = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        iM = () => ({ ...iV(), attrs: {} }),
        iR = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var ij = i(7755);
      let iD = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        iL = ib._.length;
      var iO = i(1534);
      function iF(t, e, i) {
        let { style: r, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (ib.G.has(t)) {
            o = !0;
            continue;
          }
          if ((0, iO.f)(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = iR(i, ij.j[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    n = !0;
                  for (let s = 0; s < iL; s++) {
                    let o = ib._[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = iR(a, ij.j[o]);
                      if (!l) {
                        n = !1;
                        let e = iD[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, n ? "" : r)) : n && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function iB(t, e, i) {
        return "string" == typeof t ? t : tw.px.transform(e + i * t);
      }
      let iW = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        iz = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function i$(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
      ) {
        if ((iF(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: p, dimensions: f } = t;
        d.transform && (f && (p.transform = d.transform), delete d.transform),
          f &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = iB(e, t.x, t.width),
                n = iB(i, t.y, t.height);
              return `${r} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== r && (d.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? iW : iz;
              t[s.offset] = tw.px.transform(-r);
              let o = tw.px.transform(e),
                a = tw.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1);
      }
      let iN = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        iI = {
          useVisualState: iC({
            scrapeMotionValuesFromProps: iS,
            createRenderState: iM,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              D.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                D.Wi.render(() => {
                  i$(i, r, iN(e.tagName), t.transformTemplate), ix(e, i);
                });
            },
          }),
        },
        iU = {
          useVisualState: iC({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: iP,
            createRenderState: iV,
          }),
        };
      function iX(t, e, i) {
        for (let r in e) (0, ep.i)(e[r]) || iw(r, i) || (t[r] = e[r]);
      }
      let iH = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function iY(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iH.has(t)
        );
      }
      let iG = (t) => !iY(t);
      try {
        (n = require("@emotion/is-prop-valid").default) &&
          (iG = (t) => (t.startsWith("on") ? !iY(t) : n(t)));
      } catch (t) {}
      var iK = i(781);
      let iZ = { current: null },
        iq = { current: !1 },
        i_ = new WeakMap();
      var iJ = i(3653),
        iQ = i(4386),
        i0 = i(9102),
        i1 = i(146),
        i5 = i(3769),
        i2 = i(2649);
      let i3 = [...i5.$, i1.$, tz.P],
        i9 = (t) => i3.find((0, i2.l)(t));
      var i6 = i(6450);
      let i4 = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class i7 {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {},
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = iJ.e),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = em.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                D.Wi.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = io(e)),
            (this.isVariantNode = ia(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && (0, ep.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            i_.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iq.current ||
              (function () {
                if (((iq.current = !0), ic.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iZ.current = t.matches);
                    t.addListener(e), e();
                  } else iZ.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iZ.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (i_.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, D.Pn)(this.notifyUpdate),
          (0, D.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = ib.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && D.Wi.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in ih) {
            let e = ih[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ta();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < i4.length; e++) {
            let i = i4[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if ((0, ep.i)(n)) t.addValue(r, n);
              else if ((0, ep.i)(s)) t.addValue(r, (0, ev.BX)(n, { owner: t }));
              else if (s !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, ev.BX)(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ev.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && ((0, iQ.P)(r) || (0, i0.W)(r))
                ? (r = parseFloat(r))
                : !i9(r) && tz.P.test(e) && (r = (0, i6.T)(t, e)),
              this.setBaseTarget(t, (0, ep.i)(r) ? r.get() : r)),
            (0, ep.i)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = (0, iT.o)(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, ep.i)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tY.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var i8 = i(3078);
      class rt extends i7 {
        constructor() {
          super(...arguments), (this.KeyframeResolver = i8.s);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class re extends rt {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = ig);
        }
        readValueFromInstance(t, e) {
          if (ib.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = ((0, iO.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tb(t, e);
        }
        build(t, e, i) {
          iF(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iP(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, ep.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class ri extends rt {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ta);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (ib.G.has(e)) {
            let t = (0, iK.A)(e);
            return (t && t.default) || 0;
          }
          return (e = iy.has(e) ? e : (0, iv.D)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iS(t, e, i);
        }
        build(t, e, i) {
          i$(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          ix(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = iN(t.tagName)), super.mount(t);
        }
      }
      let rr = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((s = {
          animation: { Feature: b },
          exit: { Feature: P },
          inView: { Feature: e4 },
          tap: { Feature: e1 },
          focus: { Feature: eJ },
          hover: { Feature: e_ },
          pan: { Feature: tM },
          drag: { Feature: tk, ProjectionNode: eZ, MeasureLayout: tX },
          layout: { ProjectionNode: eZ, MeasureLayout: tX },
        }),
        (o = (t, e) =>
          im(t)
            ? new ri(e)
            : new re(e, { allowProjection: t !== tj.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: r,
              useVisualState: n,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) ih[e] = { ...ih[e], ...t[e] };
              })(e);
            let o = (0, tj.forwardRef)(function (t, e) {
              var o;
              let a;
              let l = {
                  ...(0, tj.useContext)(e7._),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, tj.useContext)(tL.p).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = l,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (io(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || u(e) ? e : void 0,
                        animate: u(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tj.useContext)(e8));
                  return (0, tj.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [il(e), il(i)],
                  );
                })(t),
                d = n(t, h);
              if (!h && ic.j) {
                (0, tj.useContext)(ie).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = ih;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(l);
                (a = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, r, n) {
                    var s;
                    let { visualElement: o } = (0, tj.useContext)(e8),
                      a = (0, tj.useContext)(ie),
                      l = (0, tj.useContext)(tD.O),
                      u = (0, tj.useContext)(e7._).reducedMotion,
                      h = (0, tj.useRef)();
                    (r = r || a.renderer),
                      !h.current &&
                        r &&
                        (h.current = r(t, {
                          visualState: e,
                          parent: o,
                          props: i,
                          presenceContext: l,
                          blockInitialAnimation: !!l && !1 === l.initial,
                          reducedMotionConfig: u,
                        }));
                    let c = h.current,
                      d = (0, tj.useContext)(tO);
                    c &&
                      !c.projection &&
                      n &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent),
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && X(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(h.current, i, n, d),
                      (0, tj.useInsertionEffect)(() => {
                        c && c.update(i, l);
                      });
                    let p = i[ii.M],
                      f = (0, tj.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete &&
                          (null === (s = window.MotionHasOptimisedAnimation) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, p)),
                      );
                    return (
                      (0, it.L)(() => {
                        c &&
                          (c.updateFeatures(),
                          tN.render(c.render),
                          f.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, tj.useEffect)(() => {
                        c &&
                          (!f.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          (f.current = !1),
                          ir || ((ir = !0), queueMicrotask(is)));
                      }),
                      c
                    );
                  })(s, d, l, i, t.ProjectionNode));
              }
              return (0, tR.jsxs)(e8.Provider, {
                value: c,
                children: [
                  a && c.visualElement
                    ? (0, tR.jsx)(a, { visualElement: c.visualElement, ...l })
                    : null,
                  r(
                    s,
                    t,
                    ((o = c.visualElement),
                    (0, tj.useCallback)(
                      (t) => {
                        t && d.mount && d.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : X(e) && (e.current = t));
                      },
                      [o],
                    )),
                    d,
                    h,
                    c.visualElement,
                  ),
                ],
              });
            });
            return (o[id] = s), o;
          })({
            ...(im(t) ? iI : iU),
            preloadedFeatures: s,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: n }, s) => {
                let o = (
                    im(e)
                      ? function (t, e, i, r) {
                          let n = (0, tj.useMemo)(() => {
                            let i = iM();
                            return (
                              i$(i, e, iN(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            iX(e, t.style, t), (n.style = { ...e, ...n.style });
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                iX(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tj.useMemo)(() => {
                                      let i = iV();
                                      return (
                                        iF(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, n, s, e),
                  a = (function (t, e, i) {
                    let r = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (iG(n) ||
                          (!0 === i && iY(n)) ||
                          (!e && !iY(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (r[n] = t[n]);
                    return r;
                  })(i, "string" == typeof e, t),
                  l = e !== tj.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, tj.useMemo)(() => ((0, ep.i)(u) ? u.get() : u), [u]);
                return (0, tj.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: o,
            Component: t,
          });
        }),
      );
    },
    3078: function (t, e, i) {
      i.d(e, {
        s: function () {
          return f;
        },
      });
      var r = i(9102),
        n = i(9047),
        s = i(4386),
        o = i(1534);
      let a = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(5014),
        u = i(3769),
        h = i(3653),
        c = i(3646),
        d = i(6450);
      let p = new Set(["auto", "none", "0"]);
      class f extends h.e {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && ((r = r.trim()), (0, o.t)(r))) {
              let l = (function t(e, i, r = 1) {
                (0, n.k)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [l, u] = (function (t) {
                  let e = a.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.P)(t) ? parseFloat(t) : t;
                }
                return (0, o.t)(u) ? t(u, i, r + 1) : u;
              })(r, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.z2.has(i) || 2 !== t.length))
            return;
          let [r, h] = t,
            c = (0, u.C)(r),
            d = (0, u.C)(h);
          if (c !== d) {
            if ((0, l.mP)(c) && (0, l.mP)(d))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || (0, r.W)(n)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !p.has(e) &&
                  (0, c.V)(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = (0, d.T)(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            o = r[s];
          (r[s] = l.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current),
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    8691: function (t, e, i) {
      i.d(e, {
        U: function () {
          return n;
        },
      });
      var r = i(6219);
      function n(t, e) {
        let i;
        let n = () => {
          let { currentTime: r } = e,
            n = (null === r ? 0 : r.value) / 100;
          i !== n && t(n), (i = n);
        };
        return r.Wi.update(n, !0), () => (0, r.Pn)(n);
      }
    },
    7581: function (t, e, i) {
      i.d(e, {
        t: function () {
          return r;
        },
      });
      let r = (0, i(7521).X)(() => void 0 !== window.ScrollTimeline);
    },
    1580: function (t, e, i) {
      i.d(e, {
        D: function () {
          return r;
        },
      });
      let r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    1534: function (t, e, i) {
      i.d(e, {
        f: function () {
          return n;
        },
        t: function () {
          return o;
        },
      });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = r("--"),
        s = r("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    5014: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return d;
        },
        lw: function () {
          return p;
        },
        mP: function () {
          return a;
        },
        z2: function () {
          return o;
        },
      });
      var r = i(6019),
        n = i(783),
        s = i(5480);
      let o = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        a = (t) => t === n.Rx || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n) return l(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        c = r._.filter((t) => !h.has(t));
      function d(t) {
        let e = [];
        return (
          c.forEach((i) => {
            let r = t.getValue(i);
            void 0 !== r &&
              (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let p = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (p.translateX = p.x), (p.translateY = p.y);
    },
    6450: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var r = i(3646),
        n = i(4913),
        s = i(781);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== n.h && (i = r.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    781: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var r = i(146),
        n = i(4913);
      let s = {
          ...i(7755).j,
          color: r.$,
          backgroundColor: r.$,
          outlineColor: r.$,
          fill: r.$,
          stroke: r.$,
          borderColor: r.$,
          borderTopColor: r.$,
          borderRightColor: r.$,
          borderBottomColor: r.$,
          borderLeftColor: r.$,
          filter: n.h,
          WebkitFilter: n.h,
        },
        o = (t) => s[t];
    },
    3769: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var r = i(783),
        n = i(5480),
        s = i(2649);
      let o = [
          r.Rx,
          n.px,
          n.aQ,
          n.RW,
          n.vw,
          n.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    7755: function (t, e, i) {
      i.d(e, {
        j: function () {
          return o;
        },
      });
      var r = i(783),
        n = i(5480);
      let s = { ...r.Rx, transform: Math.round },
        o = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          size: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          rotate: n.RW,
          rotateX: n.RW,
          rotateY: n.RW,
          rotateZ: n.RW,
          scale: r.bA,
          scaleX: r.bA,
          scaleY: r.bA,
          scaleZ: r.bA,
          skew: n.RW,
          skewX: n.RW,
          skewY: n.RW,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: r.Fq,
          originX: n.$C,
          originY: n.$C,
          originZ: n.px,
          zIndex: s,
          backgroundPositionX: n.px,
          backgroundPositionY: n.px,
          fillOpacity: r.Fq,
          strokeOpacity: r.Fq,
          numOctaves: s,
        };
    },
    2649: function (t, e, i) {
      i.d(e, {
        l: function () {
          return r;
        },
      });
      let r = (t) => (e) => e.test(t);
    },
    6019: function (t, e, i) {
      i.d(e, {
        G: function () {
          return n;
        },
        _: function () {
          return r;
        },
      });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(r);
    },
    3653: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var r = i(5014),
        n = i(6219);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, r.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (a = !0);
        });
      }
      function h() {
        u(), l();
      }
      class c {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), n.Wi.read(u), n.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    352: function (t, e, i) {
      i.d(e, {
        x: function () {
          return n;
        },
      });
      var r = i(8595);
      function n(t, e, i) {
        let n = t.getProps();
        return (0, r.o)(n, e, void 0 !== i ? i : n.custom, t);
      }
    },
    8595: function (t, e, i) {
      function r(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function n(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return n;
        },
      });
    },
    6159: function (t, e, i) {
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var r = i(9155),
        n = i(804),
        s = i(352);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, r.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, n.BX)(i));
        }
      }
    },
    565: function (t, e, i) {
      i.d(e, {
        c: function () {
          return r;
        },
      });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    8746: function (t, e, i) {
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return n;
        },
        y4: function () {
          return r;
        },
      });
    },
    1506: function (t, e, i) {
      i.d(e, {
        u: function () {
          return r;
        },
      });
      let r = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    9047: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
        k: function () {
          return s;
        },
      });
      var r = i(9276);
      let n = r.Z,
        s = r.Z;
    },
    2548: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var r = i(9047),
        n = i(1506),
        s = i(9654),
        o = i(3217),
        a = i(9276),
        l = i(5389);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, r.k)(
            c === e.length,
            "Both input and output ranges must be the same length",
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && t[0] === t[1]) return () => e[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let d = (function (t, e, i) {
            let r = [],
              n = i || l.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = n(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || a.Z : e;
                o = (0, s.z)(t, o);
              }
              r.push(o);
            }
            return r;
          })(e, u, h),
          p = d.length,
          f = (e) => {
            let i = 0;
            if (p > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = (0, o.Y)(t[i], t[i + 1], e);
            return d[i](r);
          };
        return i ? (e) => f((0, n.u)(t[0], t[c - 1], e)) : f;
      }
    },
    7282: function (t, e, i) {
      i.d(e, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof window;
    },
    4386: function (t, e, i) {
      i.d(e, {
        P: function () {
          return r;
        },
      });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    9102: function (t, e, i) {
      i.d(e, {
        W: function () {
          return r;
        },
      });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    7521: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
      });
      function r(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    5389: function (t, e, i) {
      i.d(e, {
        C: function () {
          return A;
        },
      });
      var r = i(5004),
        n = i(9047);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var o = i(5778),
        a = i(1583),
        l = i(598);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function p(t) {
        let e = d(t);
        if (
          ((0, n.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - r;
                (n = s(l, r, t + 1 / 3)),
                  (o = s(l, r, t)),
                  (a = s(l, r, t - 1 / 3));
              } else n = o = a = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = p(t),
          n = p(e);
        if (!i || !n) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, n.red, t)),
          (s.green = h(i.green, n.green, t)),
          (s.blue = h(i.blue, n.blue, t)),
          (s.alpha = (0, r.t)(i.alpha, n.alpha, t)),
          a.m.transform(s)
        );
      };
      var m = i(9654),
        v = i(146),
        g = i(3646),
        y = i(1534);
      let x = new Set(["none", "hidden"]);
      function b(t, e) {
        return (i) => (0, r.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? b
          : "string" == typeof t
            ? (0, y.t)(t)
              ? u
              : v.$.test(t)
                ? f
                : T
            : Array.isArray(t)
              ? P
              : "object" == typeof t
                ? v.$.test(t)
                  ? f
                  : S
                : u;
      }
      function P(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function S(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = w(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let T = (t, e) => {
        let i = g.P.createTransformer(e),
          r = (0, g.V)(t),
          s = (0, g.V)(e);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !r.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, m.z)(
                P(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][n[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[o]++;
                    }
                    return r;
                  })(r, s),
                  s.values,
                ),
                i,
              )
          : ((0, n.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, r.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    5004: function (t, e, i) {
      i.d(e, {
        t: function () {
          return r;
        },
      });
      let r = (t, e, i) => t + (e - t) * i;
    },
    9276: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      let r = (t) => t;
    },
    839: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var r = i(5004),
        n = i(3217);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, n.Y)(0, e, s);
              t.push((0, r.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    9654: function (t, e, i) {
      i.d(e, {
        z: function () {
          return n;
        },
      });
      let r = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(r);
    },
    3217: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      let r = (t, e, i) => {
        let r = e - t;
        return 0 === r ? 1 : (i - t) / r;
      };
    },
    9155: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return n;
        },
      });
      var r = i(6925);
      let n = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, r.C)(t) ? t[t.length - 1] || 0 : t);
    },
    2428: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        },
      });
      var r = i(8746);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.y4)(this.subscriptions, t),
            () => (0, r.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    557: function (t, e, i) {
      i.d(e, {
        X: function () {
          return n;
        },
        w: function () {
          return r;
        },
      });
      let r = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
    458: function (t, e, i) {
      i.d(e, {
        h: function () {
          return n;
        },
      });
      var r = i(2265);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    9033: function (t, e, i) {
      i.d(e, {
        L: function () {
          return n;
        },
      });
      var r = i(2265);
      let n = i(7282).j ? r.useLayoutEffect : r.useEffect;
    },
    3476: function (t, e, i) {
      i.d(e, {
        R: function () {
          return r;
        },
      });
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    804: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        Hg: function () {
          return u;
        },
        S1: function () {
          return l;
        },
      });
      var r = i(2428),
        n = i(3476),
        s = i(9993),
        o = i(6219);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "11.7.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.X.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  o.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, n.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    5778: function (t, e, i) {
      i.d(e, {
        $: function () {
          return n;
        },
      });
      var r = i(1583);
      let n = {
        test: (0, i(3338).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            r = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    598: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var r = i(783),
        n = i(5480),
        s = i(7292),
        o = i(3338);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.aQ.transform((0, s.Nw)(e)) +
          ", " +
          n.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(r.Fq.transform(o)) +
          ")",
      };
    },
    146: function (t, e, i) {
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var r = i(7292),
        n = i(5778),
        s = i(598),
        o = i(1583);
      let a = {
        test: (t) => o.m.test(t) || n.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
              ? s.J.parse(t)
              : n.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
              ? o.m.transform(t)
              : s.J.transform(t),
      };
    },
    1583: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var r = i(1506),
        n = i(783),
        s = i(7292),
        o = i(3338);
      let a = (t) => (0, r.u)(0, 255, t),
        l = { ...n.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(n.Fq.transform(r)) +
            ")",
        };
    },
    3338: function (t, e, i) {
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return n;
        },
      });
      var r = i(7292);
      let n = (t, e) => (i) =>
          !!(
            ((0, r.HD)(i) && r.mj.test(i) && i.startsWith(t)) ||
            (e && !(0, r.Rw)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (n) => {
          if (!(0, r.HD)(n)) return n;
          let [s, o, a, l] = n.match(r.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    4913: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var r = i(3646),
        n = i(7292);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(n.KP) || [];
        if (!r) return t;
        let o = i.replace(r, ""),
          a = s.has(e) ? 1 : 0;
        return r !== i && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    3646: function (t, e, i) {
      i.d(e, {
        P: function () {
          return d;
        },
        V: function () {
          return l;
        },
      });
      var r = i(146),
        n = i(7292);
      let s = "number",
        o = "color",
        a =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              a,
              (t) => (
                r.$.test(t)
                  ? (n.color.push(u), l.push(o), i.push(r.$.parse(t)))
                  : t.startsWith("var(")
                    ? (n.var.push(u), l.push("var"), i.push(t))
                    : (n.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: n, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          a = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < a; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, n.Nw)(t[u]))
                : e === o
                  ? (l += r.$.transform(t[u]))
                  : (l += t[u]);
            }
          return l;
        };
      }
      let c = (t) => ("number" == typeof t ? 0 : t),
        d = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, n.HD)(t) &&
              ((null === (e = t.match(n.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(n.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(c));
          },
        };
    },
    783: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return n;
        },
        bA: function () {
          return o;
        },
      });
      var r = i(1506);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...n, transform: (t) => (0, r.u)(0, 1, t) },
        o = { ...n, default: 1 };
    },
    5480: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var r = i(7292);
      let n = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = n("deg"),
        o = n("%"),
        a = n("px"),
        l = n("vh"),
        u = n("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    7292: function (t, e, i) {
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return n;
        },
        Nw: function () {
          return r;
        },
        Rw: function () {
          return l;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let r = (t) => Math.round(1e5 * t) / 1e5,
        n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        o =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    9885: function (t, e, i) {
      let r, n;
      i.d(e, {
        v: function () {
          return $;
        },
      });
      var s = i(804),
        o = i(458),
        a = i(2265),
        l = i(9047);
      let u = new WeakMap();
      function h({ target: t, contentRect: e, borderBoxSize: i }) {
        var r;
        null === (r = u.get(t)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: t,
              contentSize: e,
              get size() {
                return (function (t, e) {
                  if (e) {
                    let { inlineSize: t, blockSize: i } = e[0];
                    return { width: t, height: i };
                  }
                  return t instanceof SVGElement && "getBBox" in t
                    ? t.getBBox()
                    : { width: t.offsetWidth, height: t.offsetHeight };
                })(t, i);
              },
            });
          });
      }
      function c(t) {
        t.forEach(h);
      }
      let d = new Set();
      var p = i(3217),
        f = i(3476);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: m(), y: m() }),
        g = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(t, e, i, r) {
        let n = i[e],
          { length: s, position: o } = g[e],
          a = n.current,
          l = i.time;
        (n.current = t[`scroll${o}`]),
          (n.scrollLength = t[`scroll${s}`] - t[`client${s}`]),
          (n.offset.length = 0),
          (n.offset[0] = 0),
          (n.offset[1] = n.scrollLength),
          (n.progress = (0, p.Y)(0, n.scrollLength, n.current));
        let u = r - l;
        n.velocity = u > 50 ? 0 : (0, f.R)(n.current - a, u);
      }
      let x = [
          [0, 0],
          [1, 1],
        ],
        b = { start: 0, center: 0.5, end: 1 };
      function w(t, e, i = 0) {
        let r = 0;
        if ((t in b && (t = b[t]), "string" == typeof t)) {
          let e = parseFloat(t);
          t.endsWith("px")
            ? (r = e)
            : t.endsWith("%")
              ? (t = e / 100)
              : t.endsWith("vw")
                ? (r = (e / 100) * document.documentElement.clientWidth)
                : t.endsWith("vh")
                  ? (r = (e / 100) * document.documentElement.clientHeight)
                  : (t = e);
        }
        return "number" == typeof t && (r = e * t), i + r;
      }
      let P = [0, 0];
      var S = i(2548),
        T = i(839);
      let A = { x: 0, y: 0 };
      var E = i(6219);
      let C = new WeakMap(),
        k = new WeakMap(),
        V = new WeakMap(),
        M = (t) => (t === document.documentElement ? window : t);
      function R(t, { container: e = document.documentElement, ...i } = {}) {
        let s = V.get(e);
        s || ((s = new Set()), V.set(e, s));
        let o = (function (t, e, i, r = {}) {
          return {
            measure: () =>
              (function (t, e = t, i) {
                if (((i.x.targetOffset = 0), (i.y.targetOffset = 0), e !== t)) {
                  let r = e;
                  for (; r && r !== t; )
                    (i.x.targetOffset += r.offsetLeft),
                      (i.y.targetOffset += r.offsetTop),
                      (r = r.offsetParent);
                }
                (i.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
                  (i.y.targetLength =
                    e === t ? e.scrollHeight : e.clientHeight),
                  (i.x.containerLength = t.clientWidth),
                  (i.y.containerLength = t.clientHeight);
              })(t, r.target, i),
            update: (e) => {
              y(t, "x", i, e),
                y(t, "y", i, e),
                (i.time = e),
                (r.offset || r.target) &&
                  (function (t, e, i) {
                    let { offset: r = x } = i,
                      { target: n = t, axis: s = "y" } = i,
                      o = "y" === s ? "height" : "width",
                      a =
                        n !== t
                          ? (function (t, e) {
                              let i = { x: 0, y: 0 },
                                r = t;
                              for (; r && r !== e; )
                                if (r instanceof HTMLElement)
                                  (i.x += r.offsetLeft),
                                    (i.y += r.offsetTop),
                                    (r = r.offsetParent);
                                else if ("svg" === r.tagName) {
                                  let t = r.getBoundingClientRect(),
                                    e = (r =
                                      r.parentElement).getBoundingClientRect();
                                  (i.x += t.left - e.left),
                                    (i.y += t.top - e.top);
                                } else if (r instanceof SVGGraphicsElement) {
                                  let { x: t, y: e } = r.getBBox();
                                  (i.x += t), (i.y += e);
                                  let n = null,
                                    s = r.parentNode;
                                  for (; !n; )
                                    "svg" === s.tagName && (n = s),
                                      (s = r.parentNode);
                                  r = n;
                                } else break;
                              return i;
                            })(n, t)
                          : A,
                      l =
                        n === t
                          ? { width: t.scrollWidth, height: t.scrollHeight }
                          : "getBBox" in n && "svg" !== n.tagName
                            ? n.getBBox()
                            : { width: n.clientWidth, height: n.clientHeight },
                      u = { width: t.clientWidth, height: t.clientHeight };
                    e[s].offset.length = 0;
                    let h = !e[s].interpolate,
                      c = r.length;
                    for (let t = 0; t < c; t++) {
                      let i = (function (t, e, i, r) {
                        let n = Array.isArray(t) ? t : P,
                          s = 0;
                        return (
                          "number" == typeof t
                            ? (n = [t, t])
                            : "string" == typeof t &&
                              (n = (t = t.trim()).includes(" ")
                                ? t.split(" ")
                                : [t, b[t] ? t : "0"]),
                          w(n[0], i, r) - w(n[1], e)
                        );
                      })(r[t], u[o], l[o], a[s]);
                      h || i === e[s].interpolatorOffsets[t] || (h = !0),
                        (e[s].offset[t] = i);
                    }
                    h &&
                      ((e[s].interpolate = (0, S.s)(e[s].offset, (0, T.Y)(r))),
                      (e[s].interpolatorOffsets = [...e[s].offset])),
                      (e[s].progress = e[s].interpolate(e[s].current));
                  })(t, i, r);
            },
            notify: () => e(i),
          };
        })(e, t, v(), i);
        if ((s.add(o), !C.has(e))) {
          let t = () => {
              for (let t of s) t.measure();
            },
            i = () => {
              for (let t of s) t.update(E.frameData.timestamp);
            },
            o = () => {
              for (let t of s) t.notify();
            },
            a = () => {
              E.Wi.read(t, !1, !0),
                E.Wi.read(i, !1, !0),
                E.Wi.update(o, !1, !0);
            };
          C.set(e, a);
          let l = M(e);
          window.addEventListener("resize", a, { passive: !0 }),
            e !== document.documentElement &&
              k.set(
                e,
                "function" == typeof e
                  ? (d.add(e),
                    n ||
                      ((n = () => {
                        let t = {
                            width: window.innerWidth,
                            height: window.innerHeight,
                          },
                          e = { target: window, size: t, contentSize: t };
                        d.forEach((t) => t(e));
                      }),
                      window.addEventListener("resize", n)),
                    () => {
                      d.delete(e), !d.size && n && (n = void 0);
                    })
                  : (function (t, e) {
                      var i;
                      r ||
                        "undefined" == typeof ResizeObserver ||
                        (r = new ResizeObserver(c));
                      let n =
                        ("string" == typeof (i = t)
                          ? (i = document.querySelectorAll(i))
                          : i instanceof Element && (i = [i]),
                        Array.from(i || []));
                      return (
                        n.forEach((t) => {
                          let i = u.get(t);
                          i || ((i = new Set()), u.set(t, i)),
                            i.add(e),
                            null == r || r.observe(t);
                        }),
                        () => {
                          n.forEach((t) => {
                            let i = u.get(t);
                            null == i || i.delete(e),
                              (null == i ? void 0 : i.size) ||
                                null == r ||
                                r.unobserve(t);
                          });
                        }
                      );
                    })(e, a),
              ),
            l.addEventListener("scroll", a, { passive: !0 });
        }
        let a = C.get(e);
        return (
          E.Wi.read(a, !1, !0),
          () => {
            var t;
            (0, E.Pn)(a);
            let i = V.get(e);
            if (!i || (i.delete(o), i.size)) return;
            let r = C.get(e);
            C.delete(e),
              r &&
                (M(e).removeEventListener("scroll", r),
                null === (t = k.get(e)) || void 0 === t || t(),
                window.removeEventListener("resize", r));
          }
        );
      }
      var j = i(8691),
        D = i(7581);
      let L = new Map();
      function O({
        source: t,
        container: e = document.documentElement,
        axis: i = "y",
      } = {}) {
        t && (e = t), L.has(e) || L.set(e, {});
        let r = L.get(e);
        return (
          r[i] ||
            (r[i] = (0, D.t)()
              ? new ScrollTimeline({ source: e, axis: i })
              : (function ({ source: t, container: e, axis: i = "y" }) {
                  t && (e = t);
                  let r = { value: 0 },
                    n = R(
                      (t) => {
                        r.value = 100 * t[i].progress;
                      },
                      { container: e, axis: i },
                    );
                  return { currentTime: r, cancel: n };
                })({ source: e, axis: i })),
          r[i]
        );
      }
      function F(t) {
        return t && (t.target || t.offset);
      }
      var B = i(9033);
      function W(t, e) {
        (0, l.K)(
          !!(!e || e.current),
          `You have defined a ${t} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
        );
      }
      let z = () => ({
        scrollX: (0, s.BX)(0),
        scrollY: (0, s.BX)(0),
        scrollXProgress: (0, s.BX)(0),
        scrollYProgress: (0, s.BX)(0),
      });
      function $({ container: t, target: e, layoutEffect: i = !0, ...r } = {}) {
        let n = (0, o.h)(z);
        return (
          (i ? B.L : a.useEffect)(
            () => (
              W("target", e),
              W("container", t),
              (function (t, e) {
                let i = (null == e ? void 0 : e.axis) || "y";
                return "function" == typeof t
                  ? 2 === t.length || F(e)
                    ? R((e) => {
                        t(e[i].progress, e);
                      }, e)
                    : (0, j.U)(t, O(e))
                  : F(e)
                    ? (t.pause(),
                      R((e) => {
                        t.time = t.duration * e[i].progress;
                      }, e))
                    : t.attachTimeline(O(e));
              })(
                (t, { x: e, y: i }) => {
                  n.scrollX.set(e.current),
                    n.scrollXProgress.set(e.progress),
                    n.scrollY.set(i.current),
                    n.scrollYProgress.set(i.progress);
                },
                {
                  ...r,
                  container: (null == t ? void 0 : t.current) || void 0,
                  target: (null == e ? void 0 : e.current) || void 0,
                },
              )
            ),
            [t, e, JSON.stringify(r.offset)],
          ),
          n
        );
      }
    },
    31: function (t, e, i) {
      i.d(e, {
        H: function () {
          return p;
        },
      });
      var r = i(2548);
      let n = (t) => t && "object" == typeof t && t.mix,
        s = (t) => (n(t) ? t.mix : void 0);
      var o = i(2265),
        a = i(804),
        l = i(9791),
        u = i(458),
        h = i(9033),
        c = i(6219);
      function d(t, e) {
        let i = (function (t) {
            let e = (0, u.h)(() => (0, a.BX)(t)),
              { isStatic: i } = (0, o.useContext)(l._);
            if (i) {
              let [, i] = (0, o.useState)(t);
              (0, o.useEffect)(() => e.on("change", i), []);
            }
            return e;
          })(e()),
          r = () => i.set(e());
        return (
          r(),
          (0, h.L)(() => {
            let e = () => c.Wi.preRender(r, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              i.forEach((t) => t()), (0, c.Pn)(r);
            };
          }),
          i
        );
      }
      function p(t, e, i, n) {
        if ("function" == typeof t)
          return (function (t) {
            (a.S1.current = []), t();
            let e = d(a.S1.current, t);
            return (a.S1.current = void 0), e;
          })(t);
        let o =
          "function" == typeof e
            ? e
            : (function (...t) {
                let e = !Array.isArray(t[0]),
                  i = e ? 0 : -1,
                  n = t[0 + i],
                  o = t[1 + i],
                  a = t[2 + i],
                  l = t[3 + i],
                  u = (0, r.s)(o, a, { mixer: s(a[0]), ...l });
                return e ? u(n) : u;
              })(e, i, n);
        return Array.isArray(t) ? f(t, o) : f([t], ([t]) => o(t));
      }
      function f(t, e) {
        let i = (0, u.h)(() => []);
        return d(t, () => {
          i.length = 0;
          let r = t.length;
          for (let e = 0; e < r; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
    3944: function (t, e, i) {
      i.d(e, {
        K: function () {
          return l;
        },
      });
      var r = i(804),
        n = i(5674),
        s = i(8746);
      class o extends r.Hg {
        constructor() {
          super(...arguments), (this.values = []);
        }
        add(t) {
          let e = (0, n.p)(t);
          e && ((0, s.y4)(this.values, e), this.update());
        }
        update() {
          this.set(this.values.length ? this.values.join(", ") : "auto");
        }
      }
      var a = i(8322);
      function l(t, e) {
        var i, r;
        if (!t.applyWillChange) return;
        let n = t.getValue("willChange");
        if (
          (n ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((n = new o("auto")), t.addValue("willChange", n)),
          (r = n),
          (0, a.i)(r) && r.add)
        )
          return n.add(e);
      }
    },
    5674: function (t, e, i) {
      i.d(e, {
        p: function () {
          return o;
        },
      });
      var r = i(6323),
        n = i(1580),
        s = i(6019);
      function o(t) {
        return s.G.has(t) ? "transform" : r.t.has(t) ? (0, n.D)(t) : void 0;
      }
    },
    8322: function (t, e, i) {
      i.d(e, {
        i: function () {
          return r;
        },
      });
      let r = (t) => !!(t && t.getVelocity);
    },
    1810: function (t, e, i) {
      i.d(e, {
        w_: function () {
          return h;
        },
      });
      var r = i(2265),
        n = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        s = r.createContext && r.createContext(n),
        o = ["attr", "size", "title"];
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
              }
              return t;
            }).apply(this, arguments);
      }
      function l(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(i), !0).forEach(function (e) {
                var r, n;
                (r = e),
                  (n = i[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != typeof t || null === t) return t;
                      var i = t[Symbol.toPrimitive];
                      if (void 0 !== i) {
                        var r = i.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == typeof e ? e : String(e);
                  })(r)) in t
                    ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[r] = n);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
              : l(Object(i)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(i, e),
                  );
                });
        }
        return t;
      }
      function h(t) {
        return (e) =>
          r.createElement(
            c,
            a({ attr: u({}, t.attr) }, e),
            (function t(e) {
              return (
                e &&
                e.map((e, i) =>
                  r.createElement(e.tag, u({ key: i }, e.attr), t(e.child)),
                )
              );
            })(t.child),
          );
      }
      function c(t) {
        var e = (e) => {
          var i,
            { attr: n, size: s, title: l } = t,
            h = (function (t, e) {
              if (null == t) return {};
              var i,
                r,
                n = (function (t, e) {
                  if (null == t) return {};
                  var i,
                    r,
                    n = {},
                    s = Object.keys(t);
                  for (r = 0; r < s.length; r++)
                    (i = s[r]), e.indexOf(i) >= 0 || (n[i] = t[i]);
                  return n;
                })(t, e);
              if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (r = 0; r < s.length; r++)
                  (i = s[r]),
                    !(e.indexOf(i) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(t, i) &&
                      (n[i] = t[i]);
              }
              return n;
            })(t, o),
            c = s || e.size || "1em";
          return (
            e.className && (i = e.className),
            t.className && (i = (i ? i + " " : "") + t.className),
            r.createElement(
              "svg",
              a(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                e.attr,
                n,
                h,
                {
                  className: i,
                  style: u(u({ color: t.color || e.color }, e.style), t.style),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                },
              ),
              l && r.createElement("title", null, l),
              t.children,
            )
          );
        };
        return void 0 !== s
          ? r.createElement(s.Consumer, null, (t) => e(t))
          : e(n);
      }
    },
    6164: function (t, e, i) {
      i.d(e, {
        m6: function () {
          return Z;
        },
      });
      let r = (t) => {
          let e = a(t),
            { conflictingClassGroups: i, conflictingClassGroupModifiers: r } =
              t;
          return {
            getClassGroupId: (t) => {
              let i = t.split("-");
              return (
                "" === i[0] && 1 !== i.length && i.shift(), n(i, e) || o(t)
              );
            },
            getConflictingClassGroupIds: (t, e) => {
              let n = i[t] || [];
              return e && r[t] ? [...n, ...r[t]] : n;
            },
          };
        },
        n = (t, e) => {
          if (0 === t.length) return e.classGroupId;
          let i = t[0],
            r = e.nextPart.get(i),
            s = r ? n(t.slice(1), r) : void 0;
          if (s) return s;
          if (0 === e.validators.length) return;
          let o = t.join("-");
          return e.validators.find(({ validator: t }) => t(o))?.classGroupId;
        },
        s = /^\[(.+)\]$/,
        o = (t) => {
          if (s.test(t)) {
            let e = s.exec(t)[1],
              i = e?.substring(0, e.indexOf(":"));
            if (i) return "arbitrary.." + i;
          }
        },
        a = (t) => {
          let { theme: e, prefix: i } = t,
            r = { nextPart: new Map(), validators: [] };
          return (
            c(Object.entries(t.classGroups), i).forEach(([t, i]) => {
              l(i, r, t, e);
            }),
            r
          );
        },
        l = (t, e, i, r) => {
          t.forEach((t) => {
            if ("string" == typeof t) {
              ("" === t ? e : u(e, t)).classGroupId = i;
              return;
            }
            if ("function" == typeof t) {
              if (h(t)) {
                l(t(r), e, i, r);
                return;
              }
              e.validators.push({ validator: t, classGroupId: i });
              return;
            }
            Object.entries(t).forEach(([t, n]) => {
              l(n, u(e, t), i, r);
            });
          });
        },
        u = (t, e) => {
          let i = t;
          return (
            e.split("-").forEach((t) => {
              i.nextPart.has(t) ||
                i.nextPart.set(t, { nextPart: new Map(), validators: [] }),
                (i = i.nextPart.get(t));
            }),
            i
          );
        },
        h = (t) => t.isThemeGetter,
        c = (t, e) =>
          e
            ? t.map(([t, i]) => [
                t,
                i.map((t) =>
                  "string" == typeof t
                    ? e + t
                    : "object" == typeof t
                      ? Object.fromEntries(
                          Object.entries(t).map(([t, i]) => [e + t, i]),
                        )
                      : t,
                ),
              ])
            : t,
        d = (t) => {
          if (t < 1) return { get: () => void 0, set: () => {} };
          let e = 0,
            i = new Map(),
            r = new Map(),
            n = (n, s) => {
              i.set(n, s), ++e > t && ((e = 0), (r = i), (i = new Map()));
            };
          return {
            get(t) {
              let e = i.get(t);
              return void 0 !== e
                ? e
                : void 0 !== (e = r.get(t))
                  ? (n(t, e), e)
                  : void 0;
            },
            set(t, e) {
              i.has(t) ? i.set(t, e) : n(t, e);
            },
          };
        },
        p = (t) => {
          let { separator: e, experimentalParseClassName: i } = t,
            r = 1 === e.length,
            n = e[0],
            s = e.length,
            o = (t) => {
              let i;
              let o = [],
                a = 0,
                l = 0;
              for (let u = 0; u < t.length; u++) {
                let h = t[u];
                if (0 === a) {
                  if (h === n && (r || t.slice(u, u + s) === e)) {
                    o.push(t.slice(l, u)), (l = u + s);
                    continue;
                  }
                  if ("/" === h) {
                    i = u;
                    continue;
                  }
                }
                "[" === h ? a++ : "]" === h && a--;
              }
              let u = 0 === o.length ? t : t.substring(l),
                h = u.startsWith("!"),
                c = h ? u.substring(1) : u;
              return {
                modifiers: o,
                hasImportantModifier: h,
                baseClassName: c,
                maybePostfixModifierPosition: i && i > l ? i - l : void 0,
              };
            };
          return i ? (t) => i({ className: t, parseClassName: o }) : o;
        },
        f = (t) => {
          if (t.length <= 1) return t;
          let e = [],
            i = [];
          return (
            t.forEach((t) => {
              "[" === t[0] ? (e.push(...i.sort(), t), (i = [])) : i.push(t);
            }),
            e.push(...i.sort()),
            e
          );
        },
        m = (t) => ({ cache: d(t.cacheSize), parseClassName: p(t), ...r(t) }),
        v = /\s+/,
        g = (t, e) => {
          let {
              parseClassName: i,
              getClassGroupId: r,
              getConflictingClassGroupIds: n,
            } = e,
            s = [],
            o = t.trim().split(v),
            a = "";
          for (let t = o.length - 1; t >= 0; t -= 1) {
            let e = o[t],
              {
                modifiers: l,
                hasImportantModifier: u,
                baseClassName: h,
                maybePostfixModifierPosition: c,
              } = i(e),
              d = !!c,
              p = r(d ? h.substring(0, c) : h);
            if (!p) {
              if (!d || !(p = r(h))) {
                a = e + (a.length > 0 ? " " + a : a);
                continue;
              }
              d = !1;
            }
            let m = f(l).join(":"),
              v = u ? m + "!" : m,
              g = v + p;
            if (s.includes(g)) continue;
            s.push(g);
            let y = n(p, d);
            for (let t = 0; t < y.length; ++t) {
              let e = y[t];
              s.push(v + e);
            }
            a = e + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function y() {
        let t,
          e,
          i = 0,
          r = "";
        for (; i < arguments.length; )
          (t = arguments[i++]) && (e = x(t)) && (r && (r += " "), (r += e));
        return r;
      }
      let x = (t) => {
          let e;
          if ("string" == typeof t) return t;
          let i = "";
          for (let r = 0; r < t.length; r++)
            t[r] && (e = x(t[r])) && (i && (i += " "), (i += e));
          return i;
        },
        b = (t) => {
          let e = (e) => e[t] || [];
          return (e.isThemeGetter = !0), e;
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        P = /^\d+\/\d+$/,
        S = new Set(["px", "full", "screen"]),
        T = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        A =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        k =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        V = (t) => R(t) || S.has(t) || P.test(t),
        M = (t) => X(t, "length", H),
        R = (t) => !!t && !Number.isNaN(Number(t)),
        j = (t) => X(t, "number", R),
        D = (t) => !!t && Number.isInteger(Number(t)),
        L = (t) => t.endsWith("%") && R(t.slice(0, -1)),
        O = (t) => w.test(t),
        F = (t) => T.test(t),
        B = new Set(["length", "size", "percentage"]),
        W = (t) => X(t, B, Y),
        z = (t) => X(t, "position", Y),
        $ = new Set(["image", "url"]),
        N = (t) => X(t, $, K),
        I = (t) => X(t, "", G),
        U = () => !0,
        X = (t, e, i) => {
          let r = w.exec(t);
          return (
            !!r &&
            (r[1] ? ("string" == typeof e ? r[1] === e : e.has(r[1])) : i(r[2]))
          );
        },
        H = (t) => A.test(t) && !E.test(t),
        Y = () => !1,
        G = (t) => C.test(t),
        K = (t) => k.test(t),
        Z = (function (t, ...e) {
          let i, r, n;
          let s = function (a) {
            return (
              (r = (i = m(e.reduce((t, e) => e(t), t()))).cache.get),
              (n = i.cache.set),
              (s = o),
              o(a)
            );
          };
          function o(t) {
            let e = r(t);
            if (e) return e;
            let s = g(t, i);
            return n(t, s), s;
          }
          return function () {
            return s(y.apply(null, arguments));
          };
        })(() => {
          let t = b("colors"),
            e = b("spacing"),
            i = b("blur"),
            r = b("brightness"),
            n = b("borderColor"),
            s = b("borderRadius"),
            o = b("borderSpacing"),
            a = b("borderWidth"),
            l = b("contrast"),
            u = b("grayscale"),
            h = b("hueRotate"),
            c = b("invert"),
            d = b("gap"),
            p = b("gradientColorStops"),
            f = b("gradientColorStopPositions"),
            m = b("inset"),
            v = b("margin"),
            g = b("opacity"),
            y = b("padding"),
            x = b("saturate"),
            w = b("scale"),
            P = b("sepia"),
            S = b("skew"),
            T = b("space"),
            A = b("translate"),
            E = () => ["auto", "contain", "none"],
            C = () => ["auto", "hidden", "clip", "visible", "scroll"],
            k = () => ["auto", O, e],
            B = () => [O, e],
            $ = () => ["", V, M],
            X = () => ["auto", R, O],
            H = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            Y = () => ["solid", "dashed", "dotted", "double", "none"],
            G = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            K = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            Z = () => ["", "0", O],
            q = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            _ = () => [R, O];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [U],
              spacing: [V, M],
              blur: ["none", "", F, O],
              brightness: _(),
              borderColor: [t],
              borderRadius: ["none", "", "full", F, O],
              borderSpacing: B(),
              borderWidth: $(),
              contrast: _(),
              grayscale: Z(),
              hueRotate: _(),
              invert: Z(),
              gap: B(),
              gradientColorStops: [t],
              gradientColorStopPositions: [L, M],
              inset: k(),
              margin: k(),
              opacity: _(),
              padding: B(),
              saturate: _(),
              scale: _(),
              sepia: Z(),
              skew: _(),
              space: B(),
              translate: B(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", O] }],
              container: ["container"],
              columns: [{ columns: [F] }],
              "break-after": [{ "break-after": q() }],
              "break-before": [{ "break-before": q() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...H(), O] }],
              overflow: [{ overflow: C() }],
              "overflow-x": [{ "overflow-x": C() }],
              "overflow-y": [{ "overflow-y": C() }],
              overscroll: [{ overscroll: E() }],
              "overscroll-x": [{ "overscroll-x": E() }],
              "overscroll-y": [{ "overscroll-y": E() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [m] }],
              "inset-x": [{ "inset-x": [m] }],
              "inset-y": [{ "inset-y": [m] }],
              start: [{ start: [m] }],
              end: [{ end: [m] }],
              top: [{ top: [m] }],
              right: [{ right: [m] }],
              bottom: [{ bottom: [m] }],
              left: [{ left: [m] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", D, O] }],
              basis: [{ basis: k() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", O] }],
              grow: [{ grow: Z() }],
              shrink: [{ shrink: Z() }],
              order: [{ order: ["first", "last", "none", D, O] }],
              "grid-cols": [{ "grid-cols": [U] }],
              "col-start-end": [{ col: ["auto", { span: ["full", D, O] }, O] }],
              "col-start": [{ "col-start": X() }],
              "col-end": [{ "col-end": X() }],
              "grid-rows": [{ "grid-rows": [U] }],
              "row-start-end": [{ row: ["auto", { span: [D, O] }, O] }],
              "row-start": [{ "row-start": X() }],
              "row-end": [{ "row-end": X() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", O] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", O] }],
              gap: [{ gap: [d] }],
              "gap-x": [{ "gap-x": [d] }],
              "gap-y": [{ "gap-y": [d] }],
              "justify-content": [{ justify: ["normal", ...K()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...K(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...K(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [y] }],
              px: [{ px: [y] }],
              py: [{ py: [y] }],
              ps: [{ ps: [y] }],
              pe: [{ pe: [y] }],
              pt: [{ pt: [y] }],
              pr: [{ pr: [y] }],
              pb: [{ pb: [y] }],
              pl: [{ pl: [y] }],
              m: [{ m: [v] }],
              mx: [{ mx: [v] }],
              my: [{ my: [v] }],
              ms: [{ ms: [v] }],
              me: [{ me: [v] }],
              mt: [{ mt: [v] }],
              mr: [{ mr: [v] }],
              mb: [{ mb: [v] }],
              ml: [{ ml: [v] }],
              "space-x": [{ "space-x": [T] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [T] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", O, e] },
              ],
              "min-w": [{ "min-w": [O, e, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    O,
                    e,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [F] },
                    F,
                  ],
                },
              ],
              h: [
                { h: [O, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [O, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [O, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [O, e, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", F, M] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    j,
                  ],
                },
              ],
              "font-family": [{ font: [U] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    O,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", R, j] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    V,
                    O,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", O] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", O] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [t] }],
              "placeholder-opacity": [{ "placeholder-opacity": [g] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [t] }],
              "text-opacity": [{ "text-opacity": [g] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", V, M] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", V, O] }],
              "text-decoration-color": [{ decoration: [t] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: B() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    O,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", O] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [g] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...H(), z] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", W] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    N,
                  ],
                },
              ],
              "bg-color": [{ bg: [t] }],
              "gradient-from-pos": [{ from: [f] }],
              "gradient-via-pos": [{ via: [f] }],
              "gradient-to-pos": [{ to: [f] }],
              "gradient-from": [{ from: [p] }],
              "gradient-via": [{ via: [p] }],
              "gradient-to": [{ to: [p] }],
              rounded: [{ rounded: [s] }],
              "rounded-s": [{ "rounded-s": [s] }],
              "rounded-e": [{ "rounded-e": [s] }],
              "rounded-t": [{ "rounded-t": [s] }],
              "rounded-r": [{ "rounded-r": [s] }],
              "rounded-b": [{ "rounded-b": [s] }],
              "rounded-l": [{ "rounded-l": [s] }],
              "rounded-ss": [{ "rounded-ss": [s] }],
              "rounded-se": [{ "rounded-se": [s] }],
              "rounded-ee": [{ "rounded-ee": [s] }],
              "rounded-es": [{ "rounded-es": [s] }],
              "rounded-tl": [{ "rounded-tl": [s] }],
              "rounded-tr": [{ "rounded-tr": [s] }],
              "rounded-br": [{ "rounded-br": [s] }],
              "rounded-bl": [{ "rounded-bl": [s] }],
              "border-w": [{ border: [a] }],
              "border-w-x": [{ "border-x": [a] }],
              "border-w-y": [{ "border-y": [a] }],
              "border-w-s": [{ "border-s": [a] }],
              "border-w-e": [{ "border-e": [a] }],
              "border-w-t": [{ "border-t": [a] }],
              "border-w-r": [{ "border-r": [a] }],
              "border-w-b": [{ "border-b": [a] }],
              "border-w-l": [{ "border-l": [a] }],
              "border-opacity": [{ "border-opacity": [g] }],
              "border-style": [{ border: [...Y(), "hidden"] }],
              "divide-x": [{ "divide-x": [a] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [a] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [g] }],
              "divide-style": [{ divide: Y() }],
              "border-color": [{ border: [n] }],
              "border-color-x": [{ "border-x": [n] }],
              "border-color-y": [{ "border-y": [n] }],
              "border-color-t": [{ "border-t": [n] }],
              "border-color-r": [{ "border-r": [n] }],
              "border-color-b": [{ "border-b": [n] }],
              "border-color-l": [{ "border-l": [n] }],
              "divide-color": [{ divide: [n] }],
              "outline-style": [{ outline: ["", ...Y()] }],
              "outline-offset": [{ "outline-offset": [V, O] }],
              "outline-w": [{ outline: [V, M] }],
              "outline-color": [{ outline: [t] }],
              "ring-w": [{ ring: $() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [t] }],
              "ring-opacity": [{ "ring-opacity": [g] }],
              "ring-offset-w": [{ "ring-offset": [V, M] }],
              "ring-offset-color": [{ "ring-offset": [t] }],
              shadow: [{ shadow: ["", "inner", "none", F, I] }],
              "shadow-color": [{ shadow: [U] }],
              opacity: [{ opacity: [g] }],
              "mix-blend": [
                { "mix-blend": [...G(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": G() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [i] }],
              brightness: [{ brightness: [r] }],
              contrast: [{ contrast: [l] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", F, O] }],
              grayscale: [{ grayscale: [u] }],
              "hue-rotate": [{ "hue-rotate": [h] }],
              invert: [{ invert: [c] }],
              saturate: [{ saturate: [x] }],
              sepia: [{ sepia: [P] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [i] }],
              "backdrop-brightness": [{ "backdrop-brightness": [r] }],
              "backdrop-contrast": [{ "backdrop-contrast": [l] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
              "backdrop-invert": [{ "backdrop-invert": [c] }],
              "backdrop-opacity": [{ "backdrop-opacity": [g] }],
              "backdrop-saturate": [{ "backdrop-saturate": [x] }],
              "backdrop-sepia": [{ "backdrop-sepia": [P] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [o] }],
              "border-spacing-x": [{ "border-spacing-x": [o] }],
              "border-spacing-y": [{ "border-spacing-y": [o] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    O,
                  ],
                },
              ],
              duration: [{ duration: _() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", O] }],
              delay: [{ delay: _() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", O] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [w] }],
              "scale-x": [{ "scale-x": [w] }],
              "scale-y": [{ "scale-y": [w] }],
              rotate: [{ rotate: [D, O] }],
              "translate-x": [{ "translate-x": [A] }],
              "translate-y": [{ "translate-y": [A] }],
              "skew-x": [{ "skew-x": [S] }],
              "skew-y": [{ "skew-y": [S] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    O,
                  ],
                },
              ],
              accent: [{ accent: ["auto", t] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    O,
                  ],
                },
              ],
              "caret-color": [{ caret: [t] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": B() }],
              "scroll-mx": [{ "scroll-mx": B() }],
              "scroll-my": [{ "scroll-my": B() }],
              "scroll-ms": [{ "scroll-ms": B() }],
              "scroll-me": [{ "scroll-me": B() }],
              "scroll-mt": [{ "scroll-mt": B() }],
              "scroll-mr": [{ "scroll-mr": B() }],
              "scroll-mb": [{ "scroll-mb": B() }],
              "scroll-ml": [{ "scroll-ml": B() }],
              "scroll-p": [{ "scroll-p": B() }],
              "scroll-px": [{ "scroll-px": B() }],
              "scroll-py": [{ "scroll-py": B() }],
              "scroll-ps": [{ "scroll-ps": B() }],
              "scroll-pe": [{ "scroll-pe": B() }],
              "scroll-pt": [{ "scroll-pt": B() }],
              "scroll-pr": [{ "scroll-pr": B() }],
              "scroll-pb": [{ "scroll-pb": B() }],
              "scroll-pl": [{ "scroll-pl": B() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", O],
                },
              ],
              fill: [{ fill: [t, "none"] }],
              "stroke-w": [{ stroke: [V, M, j] }],
              stroke: [{ stroke: [t, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        });
    },
  },
]);
