// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $animations_ShowContentAnimation from "./islands/animations/ShowContentAnimation.tsx";
import * as $animations_TextTypingAnimation from "./islands/animations/TextTypingAnimation.tsx";
import * as $animations_TextsAlternatingAnimation from "./islands/animations/TextsAlternatingAnimation.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
  },
  islands: {
    "./islands/animations/ShowContentAnimation.tsx":
      $animations_ShowContentAnimation,
    "./islands/animations/TextTypingAnimation.tsx":
      $animations_TextTypingAnimation,
    "./islands/animations/TextsAlternatingAnimation.tsx":
      $animations_TextsAlternatingAnimation,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
