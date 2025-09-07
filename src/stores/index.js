import { writable } from "svelte/store";

export const codeInspect = writable({
  htmlCode: null,
  cssCode: null,
});

export const handleInspectCode = ({ html, css, event }) => {
  if (event.target.tagName.toLowerCase() === "input") return;
  codeInspect.set({
    htmlCode: html.replace(/ style="--mainColor:{mainColor}"/g, ""),
    cssCode: css.split("var(--mainColor)").join("#ff3e00"),
  });
  isOpenModal.set(true);
};

export const isOpenModal = writable(false);
export const isShowToast = writable(false);
export const appTheme = writable("light");
