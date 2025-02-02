import { r as i, u as m, b as u, j as e } from "./index-BZuEKrGi.js";
const d = "_home_4nqpm_4",
  h = "_formContainer_4nqpm_13",
  f = "_heading_4nqpm_22",
  p = "_formGroup_4nqpm_28",
  x = "_label_4nqpm_32",
  _ = "_formSelect_4nqpm_39",
  j = "_formInput_4nqpm_40",
  g = "_formButton_4nqpm_55",
  v = "_logoutBtn_4nqpm_70",
  o = {
    home: d,
    formContainer: h,
    heading: f,
    formGroup: p,
    label: x,
    formSelect: _,
    formInput: j,
    formButton: g,
    logoutBtn: v,
  };
function N(n) {
  let t = null;
  switch (n) {
    case "form6":
      t = 6;
      break;
    case "form8":
      t = 7;
      break;
    case "nmrs":
      t = 8;
      break;
    case "wagelist":
      t = 11;
      break;
    case "materialist":
      t = 13;
      break;
    default:
      t = null;
      break;
  }
  return t;
}
const C = () => {
  const [n, t] = i.useState({ workCode: "", srNo: "", finance_year: "" }),
    { setIsAuth: s } = m(),
    a = u(),
    l = async (r) => {
      r.preventDefault(),
        a(
          `/document?Srno=${N(n.srNo)}&financial_year=${
            n.finance_year
          }&workCode=${n.workCode}`
        );
    },
    c = async () => {
      try {
        const r = await fetch("/api/v1/auth/logout", {
          method: "DELETE",
          credentials: "include",
        });
        r.ok
          ? (s(!1), a("/login"))
          : (console.error("Failed to logout. Status:", r.status),
            alert("Logout failed. Please try again."));
      } catch (r) {
        console.error("An error occurred during logout:", r);
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx("button", {
        onClick: c,
        className: o.logoutBtn,
        children: "Logout",
      }),
      e.jsx("div", {
        className: o.home,
        children: e.jsxs("form", {
          onSubmit: l,
          className: o.formContainer,
          children: [
            e.jsx("h1", {
              className: o.heading,
              children: "Document Request Form",
            }),
            e.jsxs("div", {
              className: o.formGroup,
              children: [
                e.jsx("label", {
                  htmlFor: "srNo",
                  className: o.label,
                  children: "SR No.",
                }),
                e.jsxs("select", {
                  name: "srNo",
                  className: o.formSelect,
                  onChange: (r) =>
                    t({ ...n, srNo: r.target.value.toLowerCase() }),
                  required: !0,
                  children: [
                    e.jsx("option", { value: "form6", children: "Form 6" }),
                    e.jsx("option", { value: "form8", children: "Form 8" }),
                    e.jsx("option", { value: "nmrs", children: "NMRS" }),
                    e.jsx("option", {
                      value: "wagelist",
                      children: "WAGELIST",
                    }),
                    e.jsx("option", {
                      value: "materialist",
                      children: "MATERIAL List",
                    }),
                    e.jsx("option", { value: "vender", children: "VENDER" }),
                    e.jsx("option", { value: "13", children: "DPR FORZEN" }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: o.formGroup,
              children: [
                e.jsx("label", {
                  htmlFor: "finance_year",
                  className: o.label,
                  children: "Financial Year",
                }),
                e.jsxs("select", {
                  name: "finance_year",
                  className: o.formSelect,
                  onChange: (r) => t({ ...n, finance_year: r.target.value }),
                  required: !0,
                  children: [
                    e.jsx("option", {
                      value: "",
                      disabled: !0,
                      selected: !0,
                      children: "Select Financial Year",
                    }),
                    e.jsx("option", {
                      value: "2020-2021",
                      children: "2020-2021",
                    }),
                    e.jsx("option", {
                      value: "2021-2022",
                      children: "2021-2022",
                    }),
                    e.jsx("option", {
                      value: "2022-2023",
                      children: "2022-2023",
                    }),
                    e.jsx("option", {
                      value: "2023-2024",
                      children: "2023-2024",
                    }),
                    e.jsx("option", {
                      value: "2024-2025",
                      children: "2024-2025",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: o.formGroup,
              children: [
                e.jsx("label", {
                  htmlFor: "workCode",
                  className: o.label,
                  children: "Work Code",
                }),
                e.jsx("input", {
                  type: "text",
                  className: o.formInput,
                  placeholder: "Enter Work Code",
                  value: n.workCode,
                  onChange: (r) => t({ ...n, workCode: r.target.value }),
                  required: !0,
                }),
              ],
            }),
            e.jsx("button", {
              className: o.formButton,
              children: "Get Document",
            }),
          ],
        }),
      }),
    ],
  });
};
export { C as default };
