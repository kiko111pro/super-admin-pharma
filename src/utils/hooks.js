import { useState } from "react";

/**
 *
 * @param {any} initialState
 * @returns Array with getter and setter. Setter is an object to change state
 */
export const useBoolean = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const handlers = {
    toggle: () => setState((p) => !p),
    on: () => setState(true),
    off: () => setState(false),
  };
  return [state, handlers];
};
