import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities";
import {
  InjectionKey,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities";
import type { Theme as ThemeConfig } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import { h } from "vue";

import "@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css";
import "./custom.css";

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      "nav-bar-content-after": () => h(NolebaseEnhancedReadabilitiesMenu),
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      "nav-screen-content-after": () =>
        h(NolebaseEnhancedReadabilitiesScreenMenu),
    });
  },
  enhanceApp({ app }) {
    // other configurations...
    app.provide(InjectionKey, {
      // Configuration...
    } as Options);
  },
};

export default Theme;
