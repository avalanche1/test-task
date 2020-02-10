export function is_el_visilble(el: HTMLElement): boolean {
  return (
    // https://stackoverflow.com/a/33456469/4507580
    Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
    && !isHiddenByCSS(el)
  );
}

function isHiddenByCSS(el: HTMLElement): boolean {
  return el.style.display === "none" || el.style.visibility === "hidden";
}
