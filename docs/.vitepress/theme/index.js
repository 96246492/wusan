// import DefaultTheme from "vitepress/theme";

import Layout from "./client/theme-default/index.js";
import lazyPlugin from "../plugins/lazy.js";

export default {
    // ...DefaultTheme,
    ...Layout,
    // NotFound: () => 'custom 404', 
    enhanceApp({ app, router, siteData }) {

        app.use(lazyPlugin);
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
    }
}





