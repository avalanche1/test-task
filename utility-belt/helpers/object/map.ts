import {GenericFn, GenericObject, NonEmptyObject} from "../../types/generic-types";

/**
 * @description: Maps over obj values similar to Array.map and returns new object.
 * @exampleInput: {foo:1, bar:2}, x => x * 2
 * @exampleOutput: {foo:2, bar:4}
 * @sideEffects: none
 * @hasTests: false
 */
// todo-3: get rid of map in favor of map_full
export function map(object: GenericObject, fn: GenericFn): GenericObject {
  if (Object.keys(object).length === 0) {
    return object as object;
  }

  return Object.keys(object).reduce((acc: {[key: string]: unknown}, key: string) => {
    const value = (object as NonEmptyObject)[key];
    // eslint-disable-next-line fp/no-mutation,no-param-reassign
    acc[key] = fn(value, key);
    return acc;
  }, {});
}

export function map_over_values_of(
  object: GenericObject
): {with: (fn: GenericFn) => GenericObject} {
  return {
    with(fn: GenericFn): GenericObject {
      return map(object, fn);
    },
  };
}

/**
 * @description: Maps over keys and values of an object and returns new object.
 * @note: mapper fn must return an array of [string, any].
 * @exampleInput:  {} | {foo:1, bar:2}, [key, value] => [`${key}${key}`, value * 2]
 * @exampleOutput: {} | {foofoo:2, barbar:4}
 * @sideEffects: none
 * @hasTests: false
 */
// todo-team: using this fn is unintuitive because iterator fn recives a [key,val] array instead of an obj...
// it also expects as return not an obj, but [key,val] arr - very unintuitive!
// needs to be refactored into supplying a normal {key:value} object
// then refactor all the dependant code
export function map_over_object(object: GenericObject, fn: GenericFn): GenericObject {
  return Object.fromEntries(Object.entries(object).map(fn));
}
