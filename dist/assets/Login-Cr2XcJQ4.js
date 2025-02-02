import { r as t, a as j, b as v, u as N, j as e } from "./index-BZuEKrGi.js";
const w = () => {
  const [s, n] = t.useState({ username: "", password: "" }),
    [p, o] = t.useState(!1),
    [i, h] = t.useState(""),
    l = j(),
    a = v(),
    {
      isSessionExpired: m,
      setIsSessionExpired: x,
      setIsAuth: c,
      isAuth: f,
    } = N(),
    g = async (r) => {
      r.preventDefault();
      try {
        o(!0);
        const d = await (
          await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            credentials: "include",
            body: JSON.stringify(s),
          })
        ).json();
        if (d.error) {
          h(d.error);
          return;
        } else
          l.search.startsWith("?returnUrl")
            ? (c(!0), a(l.search.replace("?returnUrl=", "")))
            : (c(!0), a("/")),
            x(!1);
      } catch (u) {
        console.error("Error while loggin please try again", u);
      } finally {
        o(!1);
      }
    };
  return (
    t.useLayoutEffect(() => {
      f && a("/");
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        m &&
          e.jsx("h1", {
            className: "sessionExpired",
            children: "session expired please login ",
          }),
        e.jsxs("form", {
          className: "modern-form",
          onSubmit: g,
          children: [
            e.jsx("div", { className: "form-title", children: "Sign In" }),
            e.jsxs("div", {
              className: "form-body",
              children: [
                e.jsx("div", {
                  className: "input-group",
                  children: e.jsxs("div", {
                    className: "input-wrapper",
                    children: [
                      e.jsx("svg", {
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "input-icon",
                        children: e.jsx("path", {
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          d: "M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z",
                        }),
                      }),
                      e.jsx("input", {
                        required: !0,
                        placeholder: "Username",
                        className: "form-input",
                        type: "text",
                        value: s.username,
                        onChange: (r) => n({ ...s, username: r.target.value }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "input-group",
                  children: [
                    e.jsxs("div", {
                      className: "input-wrapper",
                      children: [
                        e.jsx("svg", {
                          fill: "none",
                          viewBox: "0 0 24 24",
                          className: "input-icon",
                          children: e.jsx("path", {
                            strokeWidth: "1.5",
                            stroke: "currentColor",
                            d: "M12 10V14M8 6H16C17.1046 6 18 6.89543 18 8V16C18 17.1046 17.1046 18 16 18H8C6.89543 18 6 17.1046 6 16V8C6 6.89543 6.89543 6 8 6Z",
                          }),
                        }),
                        e.jsx("input", {
                          required: !0,
                          placeholder: "Password",
                          className: "form-input",
                          type: "password",
                          value: s.password,
                          onChange: (r) =>
                            n({ ...s, password: r.target.value }),
                        }),
                      ],
                    }),
                    i && e.jsx("p", { className: "error", children: i }),
                  ],
                }),
              ],
            }),
            e.jsxs("button", {
              className: "submit-button",
              type: "submit",
              disabled: p,
              children: [
                e.jsx("span", { className: "button-text", children: "Login" }),
                e.jsx("div", { className: "button-glow" }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
export { w as default };
