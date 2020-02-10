/**
 * @description: Returns DOM nodes that contain given text; can use strict or loose text search;
 *               can filter by selector.
 * @exampleInput:   Given: (<span>Hello world</spand>):
 *                  "Hello", false, "span"      | "Hello", true
 * @exampleOutput:  [<span>Hello world</spand>] | [ ]
 * @sideEffects: none
 * @hasTests: false
 */
import {have_contents} from "../array/has-contents";
import {is_el_visilble} from "./is-el-visilble";

export function find_nodes_containing(
  text: string,
  strictComparison?: boolean,
  selector?: string
): ReadonlyArray<HTMLElement | undefined> {
  const elements = (([
    ...document.body.querySelectorAll(selector || "*"),
  ] as unknown) as ReadonlyArray<HTMLElement>).filter(is_el_visilble);

  return have_contents(elements)
    ? elements.filter((element) => {
        const elText =
          element.childNodes[0]
          && element.childNodes[0].nodeValue
          && element.childNodes[0].nodeValue.trim();
        if (!elText) return false;

        return strictComparison ? elText === text : RegExp(text, "u").test(elText);
      })
    : [];
}

export const find_nodes_containing_text = find_nodes_containing;
