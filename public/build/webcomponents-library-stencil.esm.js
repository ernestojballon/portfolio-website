import { p as e, b as a } from "./p-a4394e64.js";
export { s as setNonce } from "./p-a4394e64.js";
import { g as r } from "./p-e1255160.js";
var t = () => {
  const s = import.meta.url;
  const a = {};
  if (s !== "") {
    a.resourcesUrl = new URL(".", s).href;
  }
  return e(a);
};
t().then(async (s) => {
  await r();
  return a(
    [
      [
        "p-a306a761",
        [
          [
            1,
            "reviews-widget",
            { reviews: [16], isPaused: [32], isLoading: [32] },
          ],
        ],
      ],
    ],
    s,
  );
});
//# sourceMappingURL=webcomponents-library-stencil.esm.js.map
