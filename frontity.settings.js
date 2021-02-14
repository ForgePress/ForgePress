const settings = {
  "name": "forgepress",
  "state": {
    "frontity": {
      "url": "https://www.forgepress.dev",
      "title": "ForgePress",
      "description": "A WordPress Community"
    },
    analytics: {
      pageviews: {
        googleAnalytics: true,
        comscoreAnalytics: false
      },
      events: {
        googleAnalytics: false,
        comscoreAnalytics: false
      }
    }
  },
  "packages": [
    {
      "name": "forgepress-theme",
      "state": {
        "theme": {
          logo: "⛏ ForgePress",
          showBackgroundPattern: true,
          showSocialLinks: true,
          featuredPosts: [4,42,44],
          homepage: "/welcome/",
          redirects: {
            "/minecraft-survival-java/": "/servers/minecraft-java-latest/",
            "/welcome/" : "#welcome"
          },
          autoPreFetch: "all",
          socialLinks: [
            ["discord", "https://discord.gg/gqUSmgc"],
                ["twitter", "https://www.twitter.com/forgepresswp/"]
          ],
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Discord Server",
              "/discord"
            ],
            [
              "Minecraft Server",
              "/servers/minecraft-java-latest"
            ]
            /*,
             [
             "Marketplace",
             "/marketplace"
             ],
             [
             "About",
             "/about"
             ]*/
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // color shades to use in the blog
          colors: {
            primary: {
              "50": "#e9f5f2",
              "100": "#d4dcd9",
              "200": "#bbc3be",
              "300": "#a1aba5",
              "400": "#87938b",
              "500": "#6d7972",
              "600": "#555f58",
              "700": "#323c34",
              "800": "#232924",
              "900": "#272727"
            },
            accent: {
              "50": "#ede4d3",
              "100": "#fbe3b2",
              "200": "#f6d086",
              "300": "#f1be58",
              //"400": "#eca419",
              //"400": "aliceblue",
              "400": "lightgreen",
              "500": "#d49212",
              "600": "#a5710b",
              "700": "#775105",
              "800": "#483100",
              "900": "#1d0f00"
            }
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wordpress.forgepress.dev",
        },
      }
    },
    {
      name: "@frontity/google-analytics",
      state: {
        googleAnalytics: {
          trackingId: "G-JFE88F496",
        }
      },
    },
    {
      name: "@frontity/tiny-router",
      state: {
        router: {
          autoFetch: false
        }
      }
    },
    "@frontity/html2react"
  ]
};

export default settings;
