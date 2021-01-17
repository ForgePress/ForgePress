const settings = {
  "name": "forgepress",
  "state": {
    "frontity": {
      "url": "https://www.forgepress.dev",
      "title": "ForgePress",
      "description": "A WordPress Community"
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
              "MineCraft",
              "/servers/minecraft-java"
            ],
            [
              "Marketplace",
              "/marketplace/"
            ],
            [
              "About Us",
              "/about-us/"
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
