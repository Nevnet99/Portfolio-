
import StyleProvider from "@contexts/StyleProvider";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div style={{position: "relative"}}>
      <StyleProvider isStory>
        <Story />
      </StyleProvider>
    </div>
  ),
];