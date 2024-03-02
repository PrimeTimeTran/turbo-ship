---
createdAt: 2023-10-30
title: Overview
description: Overview
---

# React Overview
UIs built with imperative programming.

I think of it the way we hope government, small, abstract concepts about goals which can drive decision making instead of a step by step description of how governments should act.

That seems abstract but before modern JS frameworks took over we had to manually update the UI after user actions...


A user clicks a button, we prevent the default behavior, then manually update the UI using JS globals such as `document` or by rendering the entire UI again with a UI template.


## Key Concepts

- Components
  - Function
  - Class(legacy)
- Props
- JSX
- State
- Primitive Hooks
  - [useState](https://react.dev/reference/react/useState):
    Encapsulate state with closures.
  - [useEffect](https://react.dev/reference/react/useEffect):
    Produce side effects from state changes or initial component mounts.
  - [useCallback](https://react.dev/reference/react/useCallback):
    Cache a function definition if the input params haven't changed.
  - [useMemo](https://react.dev/reference/react/useMemo)
    Cache a value if the input params haven't changed.
  - [useRef](https://react.dev/reference/react/useRef)
    Access values such as DOM elements.
  - [useReducer](https://react.dev/reference/react/useReducer)
    React embraces Redux fully by adding it's architecture as a native API.
- Redux