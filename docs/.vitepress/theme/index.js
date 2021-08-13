import DefaultTheme from "vitepress/theme";
import HillerUI from "hiller-ui/packages/index";
import "hiller-ui/lib/styles/hiller-ui.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(HillerUI)
  }
}