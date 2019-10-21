/*document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu(
            "#my-menu", {
                "navbars": [
                    {
                        "position": "top",
                        "content": [
                            "searchfield"
                        ]
                    }
                ],
                "searchfield": {
                    "panel": true,
                    "showTextItems": true
                }
            },
            {
                "searchfield": {
                    "clear": true
                }
            }
        );
    }
);
*/

document.addEventListener(
    "DOMContentLoaded", () => {
        new Mmenu(
            "#menu", {
                "extensions": [
                    "pagedim-black",
                    "theme-dark"
                ],
                "counters": true,
                "navbars": [
                    {
                        "position": "top",
                        "content": [
                            "<a class='vjNavBrand' href='https://qrkz.blogspot.com/p/home.html'><i class='fas fa-home'></i>&emsp;QRKZ</a>",
                            "searchfield"
                        ]
                    },
                    {
                        "position": "top",
                        "content": [
                            "prev",
                            "title"
                        ]
                    },
                    {
                        "position": "bottom",
                        "content": [
                            "<a class='vjMenuBottomBtn fab fa-patreon' href='#/'></a>",
                            "<a class='vjMenuBottomBtn fas fa-envelope' href='#/'></a>",
                            "<a class='vjMenuBottomBtn fab fa-instagram' href='#/'></a>",
                            "<a class='vjMenuBottomBtn fab fa-facebook-square' href='#/'></a>",
                            "<a class='vjMenuBottomBtn fab fa-youtube' href='#/'></a>"
                        ]
                    }
                ],
                "searchfield": {
                    "panel": true,
                    "showTextItems": true
                },
            },
            {
                "searchfield": {
                    "clear": true
                }
            }
        );
    }
);