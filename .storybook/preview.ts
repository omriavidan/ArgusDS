import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0e1a" },
        { name: "light", value: "#ffffff" },
      ],
    },
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals?.backgrounds?.value !== "#ffffff";
      
      // Portaled components (like Radix Dialogs/Popovers) render outside the root div.
      // We must apply the dark class to the html element so they inherit the theme.
      React.useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, [isDark]);

      return React.createElement(
        "div",
        {
          className: "text-foreground bg-background",
          style: {
            fontFamily: "'JetBrains Mono', monospace",
            padding: "2rem",
            minWidth: "320px",
            minHeight: "100vh",
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
