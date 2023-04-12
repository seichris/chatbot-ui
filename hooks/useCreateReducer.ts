import { useMemo, useReducer } from 'react';

// Extracts property names from initial state of reducer to allow typesafe dispatch objects
export type FieldNames<T> = {
  [K in keyof T]: T[K] extends string ? K : K;
}[keyof T];

// Returns the Action Type for the dispatch object to be used for typing in things like context
export type ActionType<T> =
  | { type: 'reset' }
  | { type: 'change'; field: FieldNames<T>; value: any }; // Make 'change' type explicit

// Returns a typed dispatch and state
export const useCreateReducer = <T>({ initialState }: { initialState: T }) => {
  const reducer = (state: T, action: ActionType<T>) => {
    if (action.type === 'change') return { ...state, [action.field]: action.value }; // Check for 'change' type explicitly

    if (action.type === 'reset') return initialState;

    throw new Error();
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return useMemo(() => ({ state, dispatch }), [state, dispatch]);
};
