const settings = {
  "name": "react-wp",
  "state": {
    "frontity": {
      "url": "website address",
      "title": "Site Title",
      "description": "Site description"
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
          "api": "wordpress-url/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
