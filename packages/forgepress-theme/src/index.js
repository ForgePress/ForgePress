import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";

const featuredPostsHandler = {
  name: "featured",
  priority: 10,
  pattern: "featured",
  func: async ({ route, state, libraries }) => {

    const { api } = libraries.source;

    const response = await api.get({
      endpoint: "/wp/v2/posts/",
      params: { include : state.theme.featuredPosts , orderby : "include" }
    });

    const items = await response.json();

    Object.assign(state.source.data[route], {
      items: items,
    });
  }
};

const homeHandler = {
  name: "home",
  priority: 10,
  pattern: "home",
  func: async ({ route, state, libraries }) => {

    const { api } = libraries.source;

    const response = await api.get({
      endpoint: "/wp/v2/posts/",
      params: { slug : state.theme.homepage }
    });

    const items = await response.json();

    Object.assign(state.source.data[route], {
      items: items,
    });
  }
};

const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "menus/:id",
  func: async ({ route, params, state, libraries }) => {

    const { api } = libraries.source;
    const { id } = params;

    const response = await api.get({
      endpoint: "/menus/v1/menus/" + id,
    });

    const items = await response.json();

    const currentPageData = state.source.data[route];

    Object.assign(currentPageData, {
      id,
      items: items.items,
      isMenu: true
    });
  }
};

const productsHandler = {
  name: "products",
  priority: 10,
  pattern: "products/:slug", //Or whatever your pattern is
  func: async ({ route, params, state, libraries }) => {
    const { api } = libraries.source;
    const { id } = params;

    const response = await api.get({
      endpoint: "/public-woo/v1/products/" + id,
      params: {  }
    });

    const items = await response.json();

    Object.assign(state.source.data[route], {
      items: items,
    });
  }
}

// import { theme } from "@chakra-ui/react";
const chakraTheme = {
  name: "forgepress-theme",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      /**
       * The logo can be a text or an image url
       * logo : "Frontity"
       * logo: "https://uploads-ssl.webflow.com/5be00771820599586e6bd032/5be0223588110a6dbcac2d05_image.svg",
       */
      logo: "ForgePress",
      showBackgroundPattern: true,
      showSocialLinks: true,
      /**
       * socialLinks: [
       ["pinterest", "https://www.pinterest.com/frontity/"],
       ["facebook", "https://www.instagram.com/frontity/"],
       ["twitter", "https://www.twitter.com/frontity/"]
       ],
       */
      socialLinks: [],
      menu: [],
      featured: {
        showOnArchive: false,
        showOnPost: true
      },

      colors: {
        primary: {
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#555f58",
          700: "#323c34",
          800: "#232924",
          900: "#272727"
        },
        accent: {
          50: "#ede4d3",
          100: "#fbe3b2",
          200: "#f6d086",
          300: "#f1be58",
          400: "#eca419",
          500: "#d49212",
          600: "#a5710b",
          700: "#775105",
          800: "#483100",
          900: "#1d0f00"
        }
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all"
    }
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      beforeCCR: async ({ state, actions , libraries}) => {
        libraries.source.handlers.push(featuredPostsHandler);
        libraries.source.handlers.push(menuHandler);
        libraries.source.handlers.push(homeHandler);

      },
      beforeSSR: async ({ state, actions , libraries }) => {

        libraries.source.handlers.push(menuHandler);
        libraries.source.handlers.push(featuredPostsHandler);
        libraries.source.handlers.push(homeHandler);

        await actions.source.fetch("featured");
        await actions.source.fetch("home");
        await actions.source.fetch(state.router.link);
        await actions.source.fetch("menus/header");
      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors]
    }
  },
  "packages": [
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          handlers: [menuHandler]
        },
      }
    }
  ]
};

export default chakraTheme;
