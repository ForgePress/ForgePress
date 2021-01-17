const settings = {
  "name": "forgepress",
  "state": {
    "frontity": {
      "url": "https://www.forgepress.dev",
      "title": "ForgePress",
      "description": "WordPress Community"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Discord",
              "/discord"
            ],
            [
              "MineCraft Server",
              "/servers/minecraft-java-latest"
            ],
            [
              "Marketplace",
              "/marketplace"
            ],
            [
              "About",
              "/about"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wordpress.forgepress.dev"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
