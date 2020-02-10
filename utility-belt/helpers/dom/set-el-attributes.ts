/**
 * @description: Sets attributes of DOM element.
 * @exampleInput:  <input />, {type: 'password', disabled: undefined}
 * @exampleOutput: <input type='password', disabled />
 * @sideEffects: DOM mutation
 * @hasTests: false
 */

export function set_el_attributes<T>(
  el: T,
  attributes: Record<string, string | number | undefined>
): T {
  Object.entries(attributes).forEach((entry) => {
    // Note: TS has incorrect typings for .setAttribute.
    if (entry[1]) el.setAttribute(entry[0], "");
    else el.setAttribute(...entry);
  });

  return el;
}
