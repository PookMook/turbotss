@repo/ui

This package contains a WIP UI component library built with React and the Boomer CSS macro system.

Acknowledgement

The initial component implementations and APIs are adapted from Reshaped (MIT-licensed): see `packages/ui/src/reshaped/reshaped-canary` for the source snapshot. Reshaped homepage: https://reshaped.so. Repository: https://github.com/reshaped-ui/reshaped.

Getting Started

- Components live under `packages/ui/src/components`.
- Styling is authored with the Boomer `css`/`styled` macros directly inside components (no CSS Modules).
- Import from the root entry:

```ts
import { Button } from "@repo/ui";
```
