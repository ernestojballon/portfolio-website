const e = "webcomponents-library-stencil";
const t = {
  allRenderFn: true,
  appendChildSlotFix: false,
  asyncLoading: true,
  asyncQueue: false,
  attachStyles: true,
  cloneNodeFix: false,
  cmpDidLoad: true,
  cmpDidRender: false,
  cmpDidUnload: false,
  cmpDidUpdate: false,
  cmpShouldUpdate: false,
  cmpWillLoad: true,
  cmpWillRender: false,
  cmpWillUpdate: false,
  connectedCallback: false,
  constructableCSS: true,
  cssAnnotations: true,
  devTools: false,
  disconnectedCallback: false,
  element: false,
  event: false,
  experimentalScopedSlotChanges: false,
  experimentalSlotFixes: false,
  formAssociated: false,
  hasRenderFn: true,
  hostListener: false,
  hostListenerTarget: false,
  hostListenerTargetBody: false,
  hostListenerTargetDocument: false,
  hostListenerTargetParent: false,
  hostListenerTargetWindow: false,
  hotModuleReplacement: false,
  hydrateClientSide: false,
  hydrateServerSide: false,
  hydratedAttribute: false,
  hydratedClass: true,
  hydratedSelectorName: "hydrated",
  initializeNextTick: false,
  invisiblePrehydration: true,
  isDebug: false,
  isDev: false,
  isTesting: false,
  lazyLoad: true,
  lifecycle: true,
  lifecycleDOMEvents: false,
  member: true,
  method: false,
  mode: false,
  observeAttribute: false,
  profile: false,
  prop: true,
  propBoolean: false,
  propMutable: false,
  propNumber: false,
  propString: false,
  reflect: false,
  scoped: false,
  scopedSlotTextContentFix: false,
  scriptDataOpts: false,
  shadowDelegatesFocus: false,
  shadowDom: true,
  slot: false,
  slotChildNodesFix: false,
  slotRelocation: false,
  state: true,
  style: true,
  svg: false,
  taskQueue: true,
  transformTagName: false,
  updatable: true,
  vdomAttribute: true,
  vdomClass: true,
  vdomFunctional: false,
  vdomKey: true,
  vdomListener: false,
  vdomPropOrAttr: true,
  vdomRef: false,
  vdomRender: true,
  vdomStyle: false,
  vdomText: true,
  vdomXlink: false,
  watchCallback: false,
};
var n = Object.defineProperty;
var l = (e, t) => {
  for (var l in t) n(e, l, { get: t[l], enumerable: true });
};
var r = (e) => {
  const t = new URL(e, Le.t);
  return t.origin !== ke.location.origin ? t.href : t.pathname;
};
var s = {};
var a = (e) => e != null;
var o = (e) => {
  e = typeof e;
  return e === "object" || e === "function";
};
function i(e) {
  var t, n, l;
  return (l =
    (n =
      (t = e.head) == null
        ? void 0
        : t.querySelector('meta[name="csp-nonce"]')) == null
      ? void 0
      : n.getAttribute("content")) != null
    ? l
    : void 0;
}
var f = {};
l(f, {
  err: () => u,
  map: () => v,
  ok: () => c,
  unwrap: () => d,
  unwrapErr: () => m,
});
var c = (e) => ({ isOk: true, isErr: false, value: e });
var u = (e) => ({ isOk: false, isErr: true, value: e });
function v(e, t) {
  if (e.isOk) {
    const n = t(e.value);
    if (n instanceof Promise) {
      return n.then((e) => c(e));
    } else {
      return c(n);
    }
  }
  if (e.isErr) {
    const t = e.value;
    return u(t);
  }
  throw "should never get here";
}
var d = (e) => {
  if (e.isOk) {
    return e.value;
  } else {
    throw e.value;
  }
};
var m = (e) => {
  if (e.isErr) {
    return e.value;
  } else {
    throw e.value;
  }
};
var p = (e, t = "") => {
  {
    return () => {};
  }
};
var h = (e, t) => {
  {
    return () => {};
  }
};
var y = "{visibility:hidden}.hydrated{visibility:inherit}";
var b = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var w = (e, t, ...n) => {
  let l = null;
  let r = null;
  let s = false;
  let a = false;
  const i = [];
  const f = (t) => {
    for (let n = 0; n < t.length; n++) {
      l = t[n];
      if (Array.isArray(l)) {
        f(l);
      } else if (l != null && typeof l !== "boolean") {
        if ((s = typeof e !== "function" && !o(l))) {
          l = String(l);
        }
        if (s && a) {
          i[i.length - 1].l += l;
        } else {
          i.push(s ? S(null, l) : l);
        }
        a = s;
      }
    }
  };
  f(n);
  if (t) {
    if (t.key) {
      r = t.key;
    }
    {
      const e = t.className || t.class;
      if (e) {
        t.class =
          typeof e !== "object"
            ? e
            : Object.keys(e)
                .filter((t) => e[t])
                .join(" ");
      }
    }
  }
  const c = S(e, null);
  c.o = t;
  if (i.length > 0) {
    c.i = i;
  }
  {
    c.u = r;
  }
  return c;
};
var S = (e, t) => {
  const n = { v: 0, m: e, l: t, p: null, i: null };
  {
    n.o = null;
  }
  {
    n.u = null;
  }
  return n;
};
var $ = {};
var g = (e) => e && e.m === $;
var k = (e, t) => {
  if (e != null && !o(e)) {
    return e;
  }
  return e;
};
var C = (e) => pe(e).$hostElement$;
var L = (e, t, n) => {
  const l = Le.ce(t, n);
  e.dispatchEvent(l);
  return l;
};
var j = new WeakMap();
var x = (e, t, n) => {
  let l = ge.get(e);
  if (xe && n) {
    l = l || new CSSStyleSheet();
    if (typeof l === "string") {
      l = t;
    } else {
      l.replaceSync(t);
    }
  } else {
    l = t;
  }
  ge.set(e, l);
};
var O = (e, t, n) => {
  var l;
  const r = D(t);
  const s = ge.get(r);
  e = e.nodeType === 11 ? e : Ce;
  if (s) {
    if (typeof s === "string") {
      e = e.head || e;
      let n = j.get(e);
      let a;
      if (!n) {
        j.set(e, (n = new Set()));
      }
      if (!n.has(r)) {
        {
          a = Ce.createElement("style");
          a.innerHTML = s;
          const t = (l = Le.h) != null ? l : i(Ce);
          if (t != null) {
            a.setAttribute("nonce", t);
          }
          e.insertBefore(a, e.querySelector("link"));
        }
        if (t.v & 4) {
          a.innerHTML += b;
        }
        if (n) {
          n.add(r);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(s)) {
      e.adoptedStyleSheets = [...e.adoptedStyleSheets, s];
    }
  }
  return r;
};
var T = (e) => {
  const t = e.S;
  const n = e.$hostElement$;
  const l = t.v;
  const r = p("attachStyles", t.$);
  const s = O(n.shadowRoot ? n.shadowRoot : n.getRootNode(), t);
  if (l & 10) {
    n["s-sc"] = s;
    n.classList.add(s + "-h");
  }
  r();
};
var D = (e, t) => "sc-" + e.$;
var R = (e, t, n, l, r, s) => {
  if (n !== l) {
    let a = be(e, t);
    t.toLowerCase();
    if (t === "class") {
      const t = e.classList;
      const r = F(n);
      const s = F(l);
      t.remove(...r.filter((e) => e && !s.includes(e)));
      t.add(...s.filter((e) => e && !r.includes(e)));
    } else if (t === "key");
    else {
      const i = o(l);
      if ((a || (i && l !== null)) && !r) {
        try {
          if (!e.tagName.includes("-")) {
            const r = l == null ? "" : l;
            if (t === "list") {
              a = false;
            } else if (n == null || e[t] != r) {
              e[t] = r;
            }
          } else {
            e[t] = l;
          }
        } catch (e) {}
      }
      if (l == null || l === false) {
        if (l !== false || e.getAttribute(t) === "") {
          {
            e.removeAttribute(t);
          }
        }
      } else if ((!a || s & 4 || r) && !i) {
        l = l === true ? "" : l;
        {
          e.setAttribute(t, l);
        }
      }
    }
  }
};
var E = /\s/;
var F = (e) => (!e ? [] : e.split(E));
var M = (e, t, n) => {
  const l = t.p.nodeType === 11 && t.p.host ? t.p.host : t.p;
  const r = (e && e.o) || s;
  const a = t.o || s;
  {
    for (const e of P(Object.keys(r))) {
      if (!(e in a)) {
        R(l, e, r[e], void 0, n, t.v);
      }
    }
  }
  for (const e of P(Object.keys(a))) {
    R(l, e, r[e], a[e], n, t.v);
  }
};
function P(e) {
  return e.includes("ref") ? [...e.filter((e) => e !== "ref"), "ref"] : e;
}
var N;
var U;
var A = false;
var W = (e, t, n, l) => {
  const r = t.i[n];
  let s = 0;
  let o;
  let i;
  if (r.l !== null) {
    o = r.p = Ce.createTextNode(r.l);
  } else {
    o = r.p = Ce.createElement(r.m);
    {
      M(null, r, A);
    }
    if (a(N) && o["s-si"] !== N) {
      o.classList.add((o["s-si"] = N));
    }
    if (r.i) {
      for (s = 0; s < r.i.length; ++s) {
        i = W(e, r, s);
        if (i) {
          o.appendChild(i);
        }
      }
    }
  }
  o["s-hn"] = U;
  return o;
};
var z = (e, t, n, l, r, s) => {
  let a = e;
  let o;
  if (a.shadowRoot && a.tagName === U) {
    a = a.shadowRoot;
  }
  for (; r <= s; ++r) {
    if (l[r]) {
      o = W(null, n, r);
      if (o) {
        l[r].p = o;
        G(a, o, t);
      }
    }
  }
};
var B = (e, t, n) => {
  for (let l = t; l <= n; ++l) {
    const t = e[l];
    if (t) {
      const e = t.p;
      if (e) {
        e.remove();
      }
    }
  }
};
var H = (e, t, n, l, r = false) => {
  let s = 0;
  let a = 0;
  let o = 0;
  let i = 0;
  let f = t.length - 1;
  let c = t[0];
  let u = t[f];
  let v = l.length - 1;
  let d = l[0];
  let m = l[v];
  let p;
  let h;
  while (s <= f && a <= v) {
    if (c == null) {
      c = t[++s];
    } else if (u == null) {
      u = t[--f];
    } else if (d == null) {
      d = l[++a];
    } else if (m == null) {
      m = l[--v];
    } else if (Q(c, d, r)) {
      q(c, d, r);
      c = t[++s];
      d = l[++a];
    } else if (Q(u, m, r)) {
      q(u, m, r);
      u = t[--f];
      m = l[--v];
    } else if (Q(c, m, r)) {
      q(c, m, r);
      G(e, c.p, u.p.nextSibling);
      c = t[++s];
      m = l[--v];
    } else if (Q(u, d, r)) {
      q(u, d, r);
      G(e, u.p, c.p);
      u = t[--f];
      d = l[++a];
    } else {
      o = -1;
      {
        for (i = s; i <= f; ++i) {
          if (t[i] && t[i].u !== null && t[i].u === d.u) {
            o = i;
            break;
          }
        }
      }
      if (o >= 0) {
        h = t[o];
        if (h.m !== d.m) {
          p = W(t && t[a], n, o);
        } else {
          q(h, d, r);
          t[o] = void 0;
          p = h.p;
        }
        d = l[++a];
      } else {
        p = W(t && t[a], n, a);
        d = l[++a];
      }
      if (p) {
        {
          G(c.p.parentNode, p, c.p);
        }
      }
    }
  }
  if (s > f) {
    z(e, l[v + 1] == null ? null : l[v + 1].p, n, l, a, v);
  } else if (a > v) {
    B(t, s, f);
  }
};
var Q = (e, t, n = false) => {
  if (e.m === t.m) {
    if (!n) {
      return e.u === t.u;
    }
    return true;
  }
  return false;
};
var q = (e, t, n = false) => {
  const l = (t.p = e.p);
  const r = e.i;
  const s = t.i;
  const a = t.l;
  if (a === null) {
    {
      {
        M(e, t, A);
      }
    }
    if (r !== null && s !== null) {
      H(l, r, t, s, n);
    } else if (s !== null) {
      if (e.l !== null) {
        l.textContent = "";
      }
      z(l, null, t, s, 0, s.length - 1);
    } else if (r !== null) {
      B(r, 0, r.length - 1);
    }
  } else if (e.l !== a) {
    l.data = a;
  }
};
var G = (e, t, n) => {
  const l = e == null ? void 0 : e.insertBefore(t, n);
  return l;
};
var I = (e, t, n = false) => {
  const l = e.$hostElement$;
  const r = e.k || S(null, null);
  const s = g(t) ? t : w(null, null, t);
  U = l.tagName;
  if (n && s.o) {
    for (const e of Object.keys(s.o)) {
      if (l.hasAttribute(e) && !["key", "ref", "style", "class"].includes(e)) {
        s.o[e] = l[e];
      }
    }
  }
  s.m = null;
  s.v |= 4;
  e.k = s;
  s.p = r.p = l.shadowRoot || l;
  {
    N = l["s-sc"];
  }
  q(r, s, n);
};
var K = (e, t) => {
  if (t && !e.C && t["s-p"]) {
    t["s-p"].push(new Promise((t) => (e.C = t)));
  }
};
var V = (e, t) => {
  {
    e.v |= 16;
  }
  if (e.v & 4) {
    e.v |= 512;
    return;
  }
  K(e, e.L);
  const n = () => X(e, t);
  return Pe(n);
};
var X = (e, t) => {
  const n = e.$hostElement$;
  const l = p("scheduleUpdate", e.S.$);
  const r = e.j;
  if (!r) {
    throw new Error(
      `Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`,
    );
  }
  let s;
  if (t) {
    {
      s = ne(r, "componentWillLoad");
    }
  }
  l();
  return _(s, () => Y(e, r, t));
};
var _ = (e, t) => (J(e) ? e.then(t) : t());
var J = (e) =>
  e instanceof Promise || (e && e.then && typeof e.then === "function");
var Y = async (e, t, n) => {
  var l;
  const r = e.$hostElement$;
  const s = p("update", e.S.$);
  const a = r["s-rc"];
  if (n) {
    T(e);
  }
  const o = p("render", e.S.$);
  {
    Z(e, t, r, n);
  }
  if (a) {
    a.map((e) => e());
    r["s-rc"] = void 0;
  }
  o();
  s();
  {
    const t = (l = r["s-p"]) != null ? l : [];
    const n = () => ee(e);
    if (t.length === 0) {
      n();
    } else {
      Promise.all(t).then(n);
      e.v |= 4;
      t.length = 0;
    }
  }
};
var Z = (e, t, n, l) => {
  try {
    t = t.render();
    {
      e.v &= ~16;
    }
    {
      e.v |= 2;
    }
    {
      {
        {
          I(e, t, l);
        }
      }
    }
  } catch (t) {
    we(t, e.$hostElement$);
  }
  return null;
};
var ee = (e) => {
  const t = e.S.$;
  const n = e.$hostElement$;
  const l = p("postUpdate", t);
  const r = e.j;
  const s = e.L;
  if (!(e.v & 64)) {
    e.v |= 64;
    {
      le(n);
    }
    {
      ne(r, "componentDidLoad");
    }
    l();
    {
      e.O(n);
      if (!s) {
        te();
      }
    }
  } else {
    l();
  }
  {
    if (e.C) {
      e.C();
      e.C = void 0;
    }
    if (e.v & 512) {
      Me(() => V(e, false));
    }
    e.v &= ~(4 | 512);
  }
};
var te = (t) => {
  {
    le(Ce.documentElement);
  }
  Me(() => L(ke, "appload", { detail: { namespace: e } }));
};
var ne = (e, t, n) => {
  if (e && e[t]) {
    try {
      return e[t](n);
    } catch (e) {
      we(e);
    }
  }
  return void 0;
};
var le = (e) => {
  var n;
  return e.classList.add((n = t.hydratedSelectorName) != null ? n : "hydrated");
};
var re = (e, t) => pe(e).T.get(t);
var se = (e, t, n, l) => {
  const r = pe(e);
  if (!r) {
    throw new Error(
      `Couldn't find host element for "${l.$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`,
    );
  }
  const s = r.T.get(t);
  const a = r.v;
  const o = r.j;
  n = k(n);
  const i = Number.isNaN(s) && Number.isNaN(n);
  const f = n !== s && !i;
  if ((!(a & 8) || s === void 0) && f) {
    r.T.set(t, n);
    if (o) {
      if ((a & (2 | 16)) === 2) {
        V(r, false);
      }
    }
  }
};
var ae = (e, t, n) => {
  const l = e.prototype;
  if (t.D) {
    const e = Object.entries(t.D);
    e.map(([e, [r]]) => {
      if (r & 31 || (n & 2 && r & 32)) {
        Object.defineProperty(l, e, {
          get() {
            return re(this, e);
          },
          set(n) {
            se(this, e, n, t);
          },
          configurable: true,
          enumerable: true,
        });
      }
    });
  }
  return e;
};
var oe = async (e, t, n, l) => {
  let r;
  if ((t.v & 32) === 0) {
    t.v |= 32;
    const l = n.R;
    if (l) {
      const e = $e(n);
      if (e && "then" in e) {
        const t = h();
        r = await e;
        t();
      } else {
        r = e;
      }
      if (!r) {
        throw new Error(`Constructor for "${n.$}#${t.F}" was not found`);
      }
      if (!r.isProxied) {
        ae(r, n, 2);
        r.isProxied = true;
      }
      const l = p("createInstance", n.$);
      {
        t.v |= 8;
      }
      try {
        new r(t);
      } catch (e) {
        we(e);
      }
      {
        t.v &= ~8;
      }
      l();
    } else {
      r = e.constructor;
      const n = e.localName;
      customElements.whenDefined(n).then(() => (t.v |= 128));
    }
    if (r && r.style) {
      let e = r.style;
      const t = D(n);
      if (!ge.has(t)) {
        const l = p("registerStyles", n.$);
        x(t, e, !!(n.v & 1));
        l();
      }
    }
  }
  const s = t.L;
  const a = () => V(t, true);
  if (s && s["s-rc"]) {
    s["s-rc"].push(a);
  } else {
    a();
  }
};
var ie = (e) => {};
var fe = (e) => {
  if ((Le.v & 1) === 0) {
    const t = pe(e);
    const n = t.S;
    const l = p("connectedCallback", n.$);
    if (!(t.v & 1)) {
      t.v |= 1;
      {
        let n = e;
        while ((n = n.parentNode || n.host)) {
          if (n["s-p"]) {
            K(t, (t.L = n));
            break;
          }
        }
      }
      if (n.D) {
        Object.entries(n.D).map(([t, [n]]) => {
          if (n & 31 && e.hasOwnProperty(t)) {
            const n = e[t];
            delete e[t];
            e[t] = n;
          }
        });
      }
      {
        oe(e, t, n);
      }
    } else {
      if (t == null ? void 0 : t.j);
      else if (t == null ? void 0 : t.M) {
        t.M.then(() => ie());
      }
    }
    l();
  }
};
var ce = (e) => {};
var ue = async (e) => {
  if ((Le.v & 1) === 0) {
    const t = pe(e);
    if (t == null ? void 0 : t.j);
    else if (t == null ? void 0 : t.M) {
      t.M.then(() => ce());
    }
  }
};
var ve = (e, t = {}) => {
  var n;
  const l = p();
  const r = [];
  const s = t.exclude || [];
  const a = ke.customElements;
  const o = Ce.head;
  const f = o.querySelector("meta[charset]");
  const c = Ce.createElement("style");
  const u = [];
  let v;
  let d = true;
  Object.assign(Le, t);
  Le.t = new URL(t.resourcesUrl || "./", Ce.baseURI).href;
  let m = false;
  e.map((e) => {
    e[1].map((t) => {
      const n = { v: t[0], $: t[1], D: t[2], P: t[3] };
      if (n.v & 4) {
        m = true;
      }
      {
        n.D = t[2];
      }
      const l = n.$;
      const o = class extends HTMLElement {
        constructor(e) {
          super(e);
          e = this;
          ye(e, n);
          if (n.v & 1) {
            {
              {
                e.attachShadow({ mode: "open" });
              }
            }
          }
        }
        connectedCallback() {
          if (v) {
            clearTimeout(v);
            v = null;
          }
          if (d) {
            u.push(this);
          } else {
            Le.jmp(() => fe(this));
          }
        }
        disconnectedCallback() {
          Le.jmp(() => ue(this));
        }
        componentOnReady() {
          return pe(this).M;
        }
      };
      n.R = e[0];
      if (!s.includes(l) && !a.get(l)) {
        r.push(l);
        a.define(l, ae(o, n, 1));
      }
    });
  });
  if (r.length > 0) {
    if (m) {
      c.textContent += b;
    }
    {
      c.textContent += r + y;
    }
    if (c.innerHTML.length) {
      c.setAttribute("data-styles", "");
      const e = (n = Le.h) != null ? n : i(Ce);
      if (e != null) {
        c.setAttribute("nonce", e);
      }
      o.insertBefore(c, f ? f.nextSibling : o.firstChild);
    }
  }
  d = false;
  if (u.length) {
    u.map((e) => e.connectedCallback());
  } else {
    {
      Le.jmp(() => (v = setTimeout(te, 30)));
    }
  }
  l();
};
var de = (e) => (Le.h = e);
var me = new WeakMap();
var pe = (e) => me.get(e);
var he = (e, t) => me.set((t.j = e), t);
var ye = (e, t) => {
  const n = { v: 0, $hostElement$: e, S: t, T: new Map() };
  {
    n.M = new Promise((e) => (n.O = e));
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  return me.set(e, n);
};
var be = (e, t) => t in e;
var we = (e, t) => (0, console.error)(e, t);
var Se = new Map();
var $e = (e, t, n) => {
  const l = e.$.replace(/-/g, "_");
  const r = e.R;
  if (!r) {
    return void 0;
  }
  const s = Se.get(r);
  if (s) {
    return s[l];
  }
  /*!__STENCIL_STATIC_IMPORT_SWITCH__*/ return import(
    `./${r}.entry.js${""}`
  ).then((e) => {
    {
      Se.set(r, e);
    }
    return e[l];
  }, we);
};
var ge = new Map();
var ke = typeof window !== "undefined" ? window : {};
var Ce = ke.document || { head: {} };
var Le = {
  v: 0,
  t: "",
  jmp: (e) => e(),
  raf: (e) => requestAnimationFrame(e),
  ael: (e, t, n, l) => e.addEventListener(t, n, l),
  rel: (e, t, n, l) => e.removeEventListener(t, n, l),
  ce: (e, t) => new CustomEvent(e, t),
};
var je = (e) => Promise.resolve(e);
var xe = (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {}
  return false;
})();
var Oe = false;
var Te = [];
var De = [];
var Re = (e, t) => (n) => {
  e.push(n);
  if (!Oe) {
    Oe = true;
    if (t && Le.v & 4) {
      Me(Fe);
    } else {
      Le.raf(Fe);
    }
  }
};
var Ee = (e) => {
  for (let t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e) {
      we(e);
    }
  }
  e.length = 0;
};
var Fe = () => {
  Ee(Te);
  {
    Ee(De);
    if ((Oe = Te.length > 0)) {
      Le.raf(Fe);
    }
  }
};
var Me = (e) => je().then(e);
var Pe = Re(De, true);
export { C as a, ve as b, r as g, w as h, je as p, he as r, de as s };
//# sourceMappingURL=p-a4394e64.js.map
