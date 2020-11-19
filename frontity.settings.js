const settings = {
  "name": "react-wp",
  "state": {
    "frontity": {
      "url": "https://frontity.captainweb.in",
      "title": "Chippeo",
      "description": "Best viral stories on the Web"
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
              "Cute",
              "/category/cute/"
            ],
            [
              "Inspirational",
              "/category/inspirational/"
            ],
            [
              "Upbeat",
              "/category/upbeat/"
            ],
            [
              "Lifestyle",
              "/category/lifestyle/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://pwa.captainweb.in/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
