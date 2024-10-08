(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [475],
  {
    1767: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 570)),
        Promise.resolve().then(i.bind(i, 9760)),
        Promise.resolve().then(i.bind(i, 5743)),
        Promise.resolve().then(i.bind(i, 7607)),
        Promise.resolve().then(i.bind(i, 2897)),
        Promise.resolve().then(i.bind(i, 9393));
    },
    2897: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2265),
        l = i(9805),
        a = i(6379),
        n = i(2108),
        o = i(7439);
      let c = {
        slot1: [
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("p", {
                className: "text-sm font-semibold mb-2",
                children: "Tagline",
              }),
              (0, s.jsx)("h1", {
                className: "h2",
                children: "Medium length section heading goes here",
              }),
              (0, s.jsx)("p", {
                className: "max-w-md mb-8",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
              }),
              (0, s.jsxs)("div", {
                className: "flex space-x-4",
                children: [
                  (0, s.jsx)(n.z, { variant: "secondary", children: "Button" }),
                  (0, s.jsx)(n.z, { variant: "link", children: "Button →" }),
                ],
              }),
            ],
          }),
        ],
        mainBackgroundImage:
          "https://cdn.prod.website-files.com/624380709031623bfe4aee60/6243807090316203124aee66_placeholder-image.svg",
        cardSlot1: [
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("img", {
                src: "https://cdn.prod.website-files.com/632abf3cc994db4faa25529f/632abf3cc994db480f2552e6_icon.svg",
                alt: "Icon",
                className: "w-12 h-12 mb-4",
              }),
              (0, s.jsx)("h3", {
                className: "text-xl font-semibold mb-2",
                children: "Short heading here",
              }),
              (0, s.jsx)("p", {
                className: "text-sm mb-4",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
              }),
              (0, s.jsx)(n.z, { variant: "link", children: "Button →" }),
            ],
          }),
        ],
        cardSlot2: [
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("img", {
                src: "https://cdn.prod.website-files.com/632abf3cc994db4faa25529f/632abf3cc994db480f2552e6_icon.svg",
                alt: "Icon",
                className: "w-12 h-12 mb-4",
              }),
              (0, s.jsx)("h3", {
                className: "text-xl font-semibold mb-2",
                children: "Short heading here",
              }),
              (0, s.jsx)("p", {
                className: "text-sm mb-4",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
              }),
              (0, s.jsx)(n.z, { variant: "link", children: "Button →" }),
            ],
          }),
        ],
      };
      t.default = (e) => {
        let {
            slot1: t,
            mainBackgroundImage: i,
            cardSlot1: n,
            cardSlot2: d,
          } = { ...c, ...e },
          m = (0, l._)(),
          u = (0, l._)(),
          h = (0, r.useRef)(null),
          [p, g] = (0, r.useState)(0),
          x = (0, o.a)("(max-width: 767px)");
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              if (h.current) {
                let e = window.scrollY,
                  t = h.current.offsetTop,
                  i = h.current.offsetHeight,
                  s = window.innerHeight,
                  r = t + Math.min(i, s) - s + 100,
                  l = Math.min(Math.max((e - r) / (t + i - r), 0), 1);
                l <= 0.3 && g(l);
              }
            };
            return (
              window.addEventListener("scroll", e),
              e(),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, r.useEffect)(() => {
            x ||
              (console.log({ scrollProgress: p }),
              m.start({ padding: "".concat(p ? 2 : 0, "rem") }),
              u.start({
                x: "0",
                width: "".concat(p ? 40 : 0, "%"),
                paddingRight: "".concat(p ? 2 : 0, "rem"),
                paddingTop: "".concat(p ? 2 : 0, "rem"),
                paddingBottom: "".concat(p ? 2 : 0, "rem"),
              }));
          }, [p, m]),
          (0, s.jsxs)("div", {
            ref: h,
            className: "relative min-h-[150vh] w-[100%] flex ".concat(
              x && "flex-col",
              "  ",
            ),
            children: [
              (0, s.jsx)(a.E.section, {
                className:
                  "sticky top-0 left-0 flex items-center justify-center overflow-hidden w-full h-[100vh] ",
                initial: { y: "-5", width: "100%" },
                animate: m,
                transition: { duration: 1 },
                children: (0, s.jsxs)("div", {
                  className: "relative w-full h-full border-2 border-black ",
                  children: [
                    (0, s.jsx)("div", {
                      className: "absolute inset-0 bg-black opacity-50",
                    }),
                    (0, s.jsx)("img", {
                      src: i,
                      alt: "Background",
                      className: "w-full h-full object-cover",
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "absolute inset-0 flex flex-col items-center justify-center text-white text-center",
                      children: (0, s.jsx)("div", { children: t }),
                    }),
                  ],
                }),
              }),
              x
                ? null
                : (0, s.jsxs)(a.E.div, {
                    className:
                      "sticky top-0 right-0  flex items-center justify-center overflow-hidden flex-col gap-12  ",
                    initial: { x: "100%", width: "0vw", height: "100vh" },
                    animate: u,
                    transition: { duration: 1 },
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "shadow-lg flex-auto border-2 border-black flex gap-4 overflow-hidden",
                        children: (0, s.jsx)("div", {
                          className: "p-4",
                          children: (0, s.jsx)("div", { children: n }),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "shadow-lg flex-auto border-2 border-black flex gap-4 overflow-hidden",
                        children: (0, s.jsx)("div", {
                          className: "p-4",
                          children: (0, s.jsx)("div", { children: d }),
                        }),
                      }),
                    ],
                  }),
            ],
          })
        );
      };
    },
    9393: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2265),
        l = i(6379),
        a = i(4839);
      let n = (e, t) => {
          let {
              width: i,
              height: s,
              left: r,
              top: l,
            } = t.getBoundingClientRect(),
            a = e.clientX - (r + i / 2),
            n = (180 / Math.PI) * Math.atan2(e.clientY - (l + s / 2), a),
            o = n < 0 ? n + 360 : n;
          return o >= 315 || o < 45
            ? "right"
            : o >= 45 && o < 135
              ? "bottom"
              : o >= 135 && o < 225
                ? "left"
                : "top";
        },
        o = {
          tagline: "Tagline",
          hoverLinks: [
            {
              url: "#",
              listNumber: "01",
              heading: "Hover over link one",
              image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
                alt: "Relume placeholder image 1",
              },
            },
            {
              url: "#",
              listNumber: "02",
              heading: "Hover over link two",
              image: {
                src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
                alt: "Relume placeholder image 2",
              },
            },
          ],
        };
      t.default = (e) => {
        let { tagline: t, hoverLinks: i } = { ...o, ...e },
          c = (0, r.useRef)(null),
          d = (0, r.useRef)(null),
          [m, u] = (0, r.useState)({ x: 0, y: 0 }),
          [h, p] = (0, r.useState)(null),
          [g, x] = (0, r.useState)("initial"),
          f = {
            initial: { x: 0, y: 0 },
            top: { y: 25, transition: { type: "spring", duration: 1 } },
            bottom: { y: -25, transition: { type: "spring", duration: 1 } },
            left: { x: 25, transition: { type: "spring", duration: 1 } },
            right: { x: -25, transition: { type: "spring", duration: 1 } },
          },
          v = "top" === g ? -25 : 0,
          b = "bottom" === g ? 25 : 0,
          j = "left" === g ? -25 : 0,
          y = "right" === g ? 25 : 0;
        return (0, s.jsx)("section", {
          ref: d,
          className: "px-[5%] py-16 md:py-24 lg:py-28",
          onMouseMove: (e) => {
            let t = d.current;
            if (!t) return;
            let i = t.getBoundingClientRect(),
              s = Math.max(
                i.left + i.width / 2 - 100,
                Math.min(i.right / 2 + 100, e.clientX),
              );
            u((t) => ({
              x: t.x + (s - t.x) * 0.1,
              y: t.y + (e.clientY - t.y) * 0.1,
            }));
          },
          children: (0, s.jsxs)("div", {
            className: "container",
            children: [
              (0, s.jsx)("p", {
                className: "mb-6 font-semibold md:mb-8",
                children: t,
              }),
              (0, s.jsx)(l.E.div, {
                initial: "initial",
                whileHover: g,
                ref: c,
                onMouseEnter: (e) => {
                  c.current && x(n(e, c.current));
                },
                onMouseLeave: () => {
                  p(null);
                },
                children: i.map((e, t) =>
                  (0, s.jsxs)(
                    "a",
                    {
                      href: e.url,
                      onMouseEnter: () => p(t),
                      className: (0, a.Z)(
                        "relative flex items-center justify-start border-b border-border-primary py-5 transition-colors duration-300 md:py-6",
                        {
                          "lg:text-black/20": h !== t && null !== h,
                          "lg:text-black": h === t || null === h,
                        },
                      ),
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl",
                          children: e.listNumber,
                        }),
                        (0, s.jsx)("h1", {
                          className: "h1",
                          children: e.heading,
                        }),
                        (0, s.jsx)(l.E.div, {
                          className:
                            "pointer-events-none fixed inset-0 z-10 ml-[300px] hidden size-[600px] lg:block\n                ".concat(
                              h === t ? "opacity-100" : "opacity-0",
                              "\n              ",
                            ),
                          style: {
                            translateX: m.x - 300 + j + y,
                            translateY: m.y - 300 + v + b,
                          },
                          children: (0, s.jsx)(l.E.img, {
                            className: "size-full max-w-md",
                            variants: f,
                            src: e.image.src,
                            alt: e.image.alt,
                          }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        });
      };
    },
    570: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2265),
        l = i(2108),
        a = i(7439),
        n = i(9885),
        o = i(31),
        c = i(6379);
      let d = (e) => {
          let {
              section: t,
              index: i,
              totalSections: r,
              scrollYProgress: l,
            } = e,
            a = i / r,
            n = (i + 1) / r,
            d = (0, o.H)(l, [a, n], [0 + 3 * i, -30]),
            m = (0, o.H)(l, [a, n], ["0vh", "-100vh"]),
            u = (0, o.H)(l, [a, n], ["0vw", "-10vw"]);
          return (0, s.jsxs)(c.E.div, {
            className:
              "absolute ml-6 mr-6 flex flex-col justify-between border rounded-md bg-white p-8 md:ml-0",
            style: {
              rotate: i === r - 1 ? "9deg" : d,
              translateY: i === r - 1 ? void 0 : m,
              translateX: i === r - 1 ? void 0 : u,
              zIndex: "".concat(r - i),
            },
            children: [
              (0, s.jsx)("div", {
                className: "rb-6 mb-6 md:mb-8",
                children: (0, s.jsx)("img", {
                  src: t.icon.src,
                  alt: t.icon.alt,
                  className: "size-12",
                }),
              }),
              (0, s.jsx)("h3", {
                className: "mb-3 text-xl font-bold md:mb-4 md:text-2xl",
                children: t.title,
              }),
              (0, s.jsx)("p", { children: t.description }),
            ],
          });
        },
        m = {
          slot1: [
            (0, s.jsx)(
              "h1",
              {
                className: "h1",
                children: "Medium length hero heading goes here",
              },
              "title",
            ),
            (0, s.jsx)(
              "p",
              {
                className: "body",
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
              },
              "text",
            ),
            (0, s.jsxs)(
              "div",
              {
                className: "flex gap-4 mt-6",
                children: [
                  (0, s.jsx)(l.z, { children: "Primary Button" }),
                  (0, s.jsx)(l.z, {
                    variant: "secondary",
                    children: "Secondary Button",
                  }),
                ],
              },
              "content",
            ),
          ],
          featureSections: [
            {
              icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 1",
              },
              title: "Subheading one",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            },
            {
              icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 2",
              },
              title: "Subheading two",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            },
            {
              icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 3",
              },
              title: "Subheading three",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            },
            {
              icon: {
                src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                alt: "Relume logo 4",
              },
              title: "Subheading four",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            },
          ],
        };
      t.default = (e) => {
        let { slot1: t, featureSections: i } = { ...m, ...e },
          l = (0, a.a)("(max-width: 767px)"),
          o = (0, r.useRef)(null),
          { scrollYProgress: c } = (0, n.v)({
            target: o,
            offset: l ? ["20% start", "end end"] : ["start start", "end end"],
          });
        return (0, s.jsxs)("section", {
          ref: o,
          className: "px-[5%]",
          children: [
            (0, s.jsx)("div", {
              className: "container relative h-[300svh] lg:h-[300vh]",
              children: (0, s.jsxs)("div", {
                className:
                  "static grid h-full grid-cols-1 content-start items-center gap-x-20 gap-y-16 py-16 md:sticky md:top-0 md:h-[100svh] md:grid-cols-2 md:content-normal md:py-0 lg:h-screen",
                children: [
                  (0, s.jsx)("div", { children: t }),
                  (0, s.jsx)("div", {
                    className:
                      "sticky top-[25%] flex min-h-[24.5rem] flex-col items-center justify-center md:relative md:top-0 md:min-h-[auto]",
                    children: i.map((e, t) =>
                      (0, s.jsx)(
                        d,
                        {
                          section: e,
                          index: t,
                          totalSections: i.length,
                          scrollYProgress: c,
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "absolute inset-0 -z-10 mt-[100vh]",
            }),
          ],
        });
      };
    },
    9760: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2108),
        l = i(7439),
        a = i(2265);
      let n = {
        contents: [
          {
            slot1: [
              (0, s.jsx)(
                "h1",
                {
                  className: "h1 text-red-400",
                  children: "Medium length hero heading goes here",
                },
                "title",
              ),
              (0, s.jsx)(
                "p",
                {
                  className: "body",
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                },
                "text",
              ),
              (0, s.jsxs)(
                "div",
                {
                  className: "flex gap-4 mt-6",
                  children: [
                    (0, s.jsx)(r.z, { children: "Primary Button" }),
                    (0, s.jsx)(r.z, {
                      variant: "secondary",
                      children: "Secondary Button",
                    }),
                  ],
                },
                "content",
              ),
            ],
            phoneImage: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
              alt: "Relume placeholder image 1",
            },
          },
          {
            slot1: [
              (0, s.jsx)(
                "h1",
                {
                  className: "h1 text-red-400",
                  children: "Medium length hero heading goes here",
                },
                "title",
              ),
              (0, s.jsx)(
                "p",
                {
                  className: "body",
                  children:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
                },
                "text",
              ),
              (0, s.jsxs)(
                "div",
                {
                  className: "flex gap-4 mt-6",
                  children: [
                    (0, s.jsx)(r.z, { children: "Primary Button" }),
                    (0, s.jsx)(r.z, {
                      variant: "secondary",
                      children: "Secondary Button",
                    }),
                  ],
                },
                "content",
              ),
            ],
            phoneImage: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
              alt: "Relume placeholder image 2",
            },
          },
        ],
        images: [
          {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
            alt: "Relume placeholder image 1",
          },
          {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
            alt: "Relume placeholder image 2",
          },
        ],
      };
      t.default = (e) => {
        let { contents: t, images: i } = { ...n, ...e },
          [r, o] = (0, a.useState)(0),
          [c, d] = (0, a.useState)(!1),
          m = (0, a.useRef)([]),
          u = (0, a.useRef)(null),
          h = (0, l.a)("(max-width: 767px)");
        return (
          (0, a.useEffect)(() => {
            if (!u.current) return;
            let e = new IntersectionObserver(
              (e) => {
                let [t] = e;
                if (t.intersectionRatio >= 0.1) return d(!0);
                d(!1);
              },
              { threshold: [0, 0.1] },
            );
            e.observe(u.current);
            let t = m.current.map((e, t) => {
              if (!e) return null;
              let i = new IntersectionObserver(
                (e) => {
                  let [i] = e;
                  i.isIntersecting && o(t);
                },
                { threshold: 0.2 },
              );
              return i.observe(e), i;
            });
            return () => {
              e.disconnect(),
                t.forEach((e) => (null == e ? void 0 : e.disconnect()));
            };
          }, []),
          (0, s.jsxs)("section", {
            ref: u,
            className: "px-[5%]",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "container relative grid items-stretch gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20",
                children: [
                  (0, s.jsx)("div", {
                    className: "grid grid-cols-1 gap-12 md:block",
                    children: t.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          ref: (e) => {
                            m.current[t] = e;
                          },
                          className:
                            "min-h-screen flex flex-col justify-center",
                          children: [
                            (0, s.jsx)("div", { children: e.slot1 }),
                            (0, s.jsx)("div", {
                              className: "mt-10 block w-full md:hidden",
                              children: (0, s.jsx)("img", {
                                src: e.phoneImage.src,
                                className: "w-full",
                                alt: e.phoneImage.alt,
                              }),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center",
                    children: i.map((e, t) =>
                      (0, s.jsx)(
                        "img",
                        {
                          src: e.src,
                          className:
                            "absolute w-full transition-opacity duration-500 ".concat(
                              r === t ? "opacity-100" : "opacity-0",
                            ),
                          alt: e.alt,
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "fixed inset-0 -z-10 transition-colors duration-500",
                style: {
                  backgroundColor:
                    c && !h
                      ? "hsl(0, 0%, ".concat(90 - 10 * r, "%)")
                      : "initial",
                },
              }),
            ],
          })
        );
      };
    },
    5743: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2265),
        l = i(9885),
        a = i(31),
        n = i(6379),
        o = i(2108);
      let c = {
        slot1: [
          (0, s.jsx)(
            "h1",
            {
              className: "h1",
              children: "Medium length hero heading goes here",
            },
            "title",
          ),
          (0, s.jsx)(
            "p",
            {
              className: "body",
              children:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            },
            "text",
          ),
          (0, s.jsxs)(
            "div",
            {
              className: "flex gap-4 mt-6",
              children: [
                (0, s.jsx)(o.z, { children: "Primary Button" }),
                (0, s.jsx)(o.z, {
                  variant: "secondary",
                  children: "Secondary Button",
                }),
              ],
            },
            "content",
          ),
        ],
        features: [
          {
            icon: {
              src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
              alt: "Relume icon 1",
            },
            heading: "Subheading one",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          },
          {
            icon: {
              src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
              alt: "Relume icon 2",
            },
            heading: "Subheading two",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          },
          {
            icon: {
              src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
              alt: "Relume icon 3",
            },
            heading: "Subheading three",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          },
          {
            icon: {
              src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
              alt: "Relume icon 4",
            },
            heading: "Subheading four",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          },
          {
            icon: {
              src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
              alt: "Relume icon 4",
            },
            heading: "Subheading four",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          },
        ],
      };
      t.default = (e) => {
        let { slot1: t, features: i } = { ...e, ...c },
          o = (0, r.useRef)(null),
          { scrollYProgress: d } = (0, l.v)({
            target: o,
            offset: ["start 55%", "start start"],
          }),
          m = (0, a.H)(d, [0, 1], ["0%", "100%"]);
        return (0, s.jsx)("section", {
          className: "px-[5%] py-16 md:py-24 lg:py-28",
          children: (0, s.jsxs)("div", {
            className:
              "container grid grid-cols-1 items-start gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20",
            children: [
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-8 right-auto top-[10%] h-3/4 w-0.5 bg-black/15 md:left-[2.4375rem]",
                    children: (0, s.jsx)(n.E.div, {
                      ref: o,
                      className: "bg-black",
                      style: { height: m },
                    }),
                  }),
                  i.map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "grid grid-cols-[max-content_1fr] gap-x-6 lg:gap-x-10",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "relative flex flex-col items-center justify-start py-10",
                            children: (0, s.jsx)("div", {
                              className:
                                "relative z-10 -mt-4 bg-white px-2 py-4 md:px-4",
                              children: (0, s.jsx)("img", {
                                src: e.icon.src,
                                alt: e.icon.alt,
                                className: "size-12",
                              }),
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "py-10",
                            children: [
                              (0, s.jsx)("h6", {
                                className:
                                  "mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl",
                                children: e.heading,
                              }),
                              (0, s.jsx)("p", { children: e.description }),
                            ],
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                ],
              }),
              (0, s.jsx)("div", { children: t }),
            ],
          }),
        });
      };
    },
    7607: function (e, t, i) {
      "use strict";
      var s = i(7437),
        r = i(2265),
        l = i(2108),
        a = i(7439),
        n = i(7432),
        o = i(6379),
        c = i(4446);
      let d = (e) => {
          let { title: t, megaMenu: i, isMobile: a } = e,
            [d, m] = (0, r.useState)(!1);
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsxs)("button", {
                className:
                  "relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base",
                onClick: () => m((e) => !e),
                children: [
                  (0, s.jsx)("span", { children: t }),
                  (0, s.jsx)(o.E.span, {
                    animate: d ? "rotated" : "initial",
                    variants: {
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    },
                    transition: { duration: 0.3 },
                    children: (0, s.jsx)(n.px3, {}),
                  }),
                ],
              }),
              (0, s.jsx)(c.M, {
                children:
                  d &&
                  (0, s.jsx)(o.E.nav, {
                    variants: {
                      open: { opacity: 1, height: "var(--height-open, auto)" },
                      close: { opacity: 0, height: "var(--height-close, 0)" },
                    },
                    animate: d ? "open" : "close",
                    initial: "close",
                    exit: "close",
                    transition: { duration: 0.2 },
                    className:
                      "bg-white bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]",
                    children: (0, s.jsx)("div", {
                      className:
                        "mx-auto flex size-full max-w-full items-center justify-between",
                      children: (0, s.jsxs)("div", {
                        className: "flex w-full flex-col lg:flex-row",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-full content-start py-4 sm:py-8 lg:max-w-[15rem] lg:pr-8",
                            children: (0, s.jsxs)("div", {
                              className:
                                "grid auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content_max-content] gap-y-4",
                              children: [
                                (0, s.jsx)("h4", {
                                  className:
                                    "text-sm font-semibold leading-[1.4] md:leading-[1.3]",
                                  children: i.linkGroup.title,
                                }),
                                i.linkGroup.subMenuLinks.map((e, t) =>
                                  (0, s.jsx)(
                                    "a",
                                    { href: e.url, children: e.title },
                                    t,
                                  ),
                                ),
                              ],
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "relative flex w-full flex-wrap items-start justify-center pb-6 lg:items-stretch lg:pt-6",
                            children: (0, s.jsx)("div", {
                              className:
                                "grid w-full auto-cols-max auto-rows-max grid-cols-1 grid-rows-[max-content] gap-x-12 gap-y-8 sm:grid-cols-2 lg:gap-y-2",
                              children: i.blogCategories.map((e, t) =>
                                (0, s.jsxs)(
                                  "a",
                                  {
                                    href: e.url,
                                    className:
                                      "grid max-w-full auto-cols-fr grid-cols-1 items-start gap-x-6 gap-y-4 py-2 lg:grid-cols-[0.5fr_1fr] lg:gap-y-0",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "relative flex w-full flex-col pt-[66.6%] lg:flex-row",
                                        children: (0, s.jsx)("img", {
                                          src: e.image.src,
                                          alt: e.image.alt || "",
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex w-full flex-col justify-center self-center lg:w-auto",
                                        children: [
                                          (0, s.jsx)("h5", {
                                            className: "mb-1 font-semibold",
                                            children: e.title,
                                          }),
                                          (0, s.jsx)("p", {
                                            className: "text-sm",
                                            children: e.description,
                                          }),
                                          (0, s.jsx)(l.z, {
                                            ...e.button,
                                            className:
                                              "mt-2 w-fit text-sm underline",
                                            children: e.button.title,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
              }),
            ],
          });
        },
        m = {
          logo: {
            url: "#",
            src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
            alt: "Logo image",
          },
          navLinks: [
            { title: "Home", url: "#" },
            { title: "Resume", url: "#" },
            {
              title: "Showcase",
              url: "#",
              megaMenu: {
                linkGroup: {
                  title: "Blog categories",
                  subMenuLinks: [
                    { url: "#", title: "Category One" },
                    { url: "#", title: "Category Two" },
                    { url: "#", title: "Category Three" },
                    { url: "#", title: "Category Four" },
                    { url: "#", title: "Category Five" },
                  ],
                },
                blogCategories: [
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 1",
                    },
                    title: "ESignature Component",
                    description:
                      "React signature component for web applications",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 2",
                    },
                    title: "Todo List",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 3",
                    },
                    title: "Article Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 4",
                    },
                    title: "Article Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 5",
                    },
                    title: "Article Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                  {
                    url: "#",
                    image: {
                      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
                      alt: "Relume placeholder image 6",
                    },
                    title: "Article Title",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    button: {
                      title: "Read more",
                      variant: "link",
                      size: "link",
                    },
                  },
                ],
              },
            },
          ],
          buttons: [
            { title: "Button", variant: "secondary", size: "sm" },
            { title: "Button", size: "sm" },
          ],
        },
        u = {
          open: { translateY: 8, transition: { delay: 0.1 } },
          rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
          closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
        },
        h = {
          open: { width: 0, transition: { duration: 0.1 } },
          closed: {
            width: "1.5rem",
            transition: { delay: 0.3, duration: 0.2 },
          },
        },
        p = {
          open: { translateY: -8, transition: { delay: 0.1 } },
          rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
          closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
        };
      t.default = (e) => {
        let { logo: t, navLinks: i, buttons: n } = { ...m, ...e },
          [g, x] = (0, r.useState)(!1),
          f = (0, a.a)("(max-width: 991px)");
        return (0, s.jsxs)("nav", {
          className:
            "fixed top-0 z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-white px-[5%] md:min-h-18",
          children: [
            (0, s.jsxs)("div", {
              className:
                "mx-auto flex size-full max-w-full items-center justify-between",
              children: [
                (0, s.jsx)("a", {
                  href: t.url || "/",
                  className: "flex items-center",
                  children: (0, s.jsx)("p", {
                    className:
                      "font-bold text-2xl bg-gradient-to-r from-indigo-400 to-red-400 text-transparent bg-clip-text",
                    children: "Ernesto J Ballon",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute hidden h-screen overflow-auto border-b border-border-primary bg-white px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex flex-col items-center lg:flex-row",
                      children: i.map((e, t) =>
                        (0, s.jsx)(
                          "div",
                          {
                            children: e.megaMenu
                              ? (0, s.jsx)(d, {
                                  megaMenu: e.megaMenu,
                                  title: e.title,
                                  isMobile: f,
                                })
                              : (0, s.jsx)("a", {
                                  href: e.url,
                                  className:
                                    "relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base",
                                  children: e.title,
                                }),
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex items-center gap-4",
                      children: n.map((e, t) =>
                        (0, s.jsx)(l.z, { ...e, children: e.title }, t),
                      ),
                    }),
                  ],
                }),
                (0, s.jsxs)("button", {
                  className:
                    "-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden",
                  onClick: () => x(!g),
                  children: [
                    (0, s.jsx)(o.E.span, {
                      className: "my-[3px] h-0.5 w-6 bg-black",
                      animate: g ? ["open", "rotatePhase"] : "closed",
                      variants: u,
                    }),
                    (0, s.jsx)(o.E.span, {
                      className: "my-[3px] h-0.5 w-6 bg-black",
                      animate: g ? "open" : "closed",
                      variants: h,
                    }),
                    (0, s.jsx)(o.E.span, {
                      className: "my-[3px] h-0.5 w-6 bg-black",
                      animate: g ? ["open", "rotatePhase"] : "closed",
                      variants: p,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(c.M, {
              children:
                g &&
                (0, s.jsx)(o.E.div, {
                  variants: {
                    open: { height: "100dvh" },
                    close: { height: "auto" },
                  },
                  animate: g ? "open" : "close",
                  initial: "close",
                  exit: "close",
                  className:
                    "absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden ",
                  transition: { duration: 0.4 },
                  children: (0, s.jsx)(o.E.div, {
                    variants: { open: { y: 0 }, close: { y: "-100%" } },
                    animate: g ? "open" : "close",
                    initial: "close",
                    exit: "close",
                    transition: { duration: 0.4 },
                    className:
                      "absolute left-0 right-0 top-0 block h-[100dvh] overflow-auto border-b border-border-primary bg-white px-[5%] pb-8 pt-4",
                    children: (0, s.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        i.map((e, t) =>
                          (0, s.jsx)(
                            "div",
                            {
                              children: e.megaMenu
                                ? (0, s.jsx)(d, {
                                    megaMenu: e.megaMenu,
                                    title: e.title,
                                    isMobile: f,
                                  })
                                : (0, s.jsx)("a", {
                                    href: e.url,
                                    className: "block py-3 text-md",
                                    children: e.title,
                                  }),
                            },
                            t,
                          ),
                        ),
                        (0, s.jsx)("div", {
                          className: "mt-6 flex flex-col items-stretch gap-4",
                          children: n.map((e, t) =>
                            (0, s.jsx)(l.z, { ...e, children: e.title }, t),
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
            }),
          ],
        });
      };
    },
    2108: function (e, t, i) {
      "use strict";
      i.d(t, {
        z: function () {
          return d;
        },
      });
      var s = i(7437),
        r = i(2265),
        l = i(2974),
        a = i(2218),
        n = i(4839),
        o = i(6164);
      let c = (0, a.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-blue-500 ring-offset-white",
                primary:
                  "border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 ring-offset-white",
                destructive:
                  "border border-red-600 bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 ring-offset-white",
                outline:
                  "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 ring-offset-white",
                secondary:
                  "border border-gray-200 bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-500 ring-offset-white",
                ghost:
                  "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 ring-offset-white",
                link: "text-blue-600 underline-offset-4 hover:underline focus-visible:ring-blue-500",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-8 px-3 text-xs",
                lg: "h-12 px-6 text-base",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        d = r.forwardRef((e, t) => {
          let { className: i, variant: r, size: a, asChild: d = !1, ...m } = e,
            u = d ? l.g7 : "button";
          return (0, s.jsx)(u, {
            className: (function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              return (0, o.m6)((0, n.W)(t));
            })(c({ variant: r, size: a, className: i })),
            ref: t,
            ...m,
          });
        });
      d.displayName = "Button";
    },
    7439: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return r;
        },
      });
      var s = i(2265);
      function r(e) {
        let [t, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let s = window.matchMedia(e);
            s.matches !== t && i(s.matches);
            let r = () => i(s.matches);
            return s.addListener(r), () => s.removeListener(r);
          }, [t, e]),
          t
        );
      }
    },
  },
  function (e) {
    e.O(0, [574, 558, 971, 23, 744], function () {
      return e((e.s = 1767));
    }),
      (_N_E = e.O());
  },
]);
