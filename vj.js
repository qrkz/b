jQuery(document).ready(function( $ ) {
    $("#ypnMenuL").mmenu({
        "drag": { "open": true,"menu": {"maxStartPos":250,"threshold":50, "open": true},"panels": true },
        "searchfield": {"resultsPanel": true,"showTextItems": true},
        "extensions": ["multiline","theme-dark","fx-panels-slide-100","fx-listitems-slide","shadow-page","shadow-panels","border-full","pagedim-black"],
        "counters": true,
        "pageScroll": true,
        "setSelected": {"hover": true},
        "navbars": [
            {
                "position":"top",
                "content": ["<a href='https://yourpalnurav.blogspot.in/' style='color:aqua'><b>YourPalNurav</b></a>","close"]
            },{
                "position": "top",
                "content": ["searchfield"]
            },{
                type		: 'tabs',
                content		: [
                    '<a href="#panel-ypn"><i class="fas fa-home"></i> <span>YPN</span></a>',
                    '<a href="#panel-math"><i class="fas fa-square-root-alt"></i> <span>Math</span></a>', 
                    '<a href="#panel-sci"><i class="fas fa-atom"></i> <span>Sci</span></a>', 
                    '<a href="#panel-cs"><i class="fas fa-code"></i> <span>CS</span></a>'
                ]
            },
            /*{  "position": "top",
            "content": [
            "<a href='https://www.facebook.com/ypnNiftyNurav/'><i class='fab fa-facebook'></i></a>",
            "<a href='https://www.instagram.com/yourpalnurav/'><i class='fab fa-instagram'></i></a>",
            "<a href='https://www.twitter.com/yourpalnurav'><i class='fab fa-twitter'></i></a>",
            "<a href='https://chat.whatsapp.com/B5vOvxJZSNcLrUKMrXeemN'><i class='fab fa-whatsapp'></i></a>",
            "<a href='mailto:niftynurav@gmail.com?Subject=Email_from_Website_Menu' target='_top'><i class='fas fa-envelope'></i></a>"
            ]
            },*/
            {
                "position": "bottom",
                "content": [
                    "<a href='https://www.facebook.com/ypnNiftyNurav/'><i class='fab fa-facebook'></i></a>",
                    "<a href='https://www.instagram.com/yourpalnurav/'><i class='fab fa-instagram'></i></a>",
                    "<a href='https://www.twitter.com/yourpalnurav'><i class='fab fa-twitter'></i></a>",
                    "<a href='https://chat.whatsapp.com/B5vOvxJZSNcLrUKMrXeemN'><i class='fab fa-whatsapp'></i></a>",
                    "<a href='mailto:niftynurav@gmail.com?Subject=Email_from_Website_Menu' target='_top'><i class='fas fa-envelope'></i></a>"
                ]
            }
        ],"searchfield": {
            "panel": true,
            "showTextItems": true
        }
    }, {
        "searchfield": {"clear": true}
    }, {
        classNames: {
            fixedElements: {fixed: "header"}
        }
    });

    $("#ypnMenuT").mmenu({
        "drag": { "open": true,"menu": {"maxStartPos":250,"threshold":50, "open": true},"panels": true },
        "searchfield": {"resultsPanel": true,"showTextItems": true},
        "extensions": ["position-front","position-top","multiline","theme-dark","fx-panels-slide-100","fx-listitems-slide","shadow-page","shadow-panels","border-full","pagedim-black"],
        "counters": true,
        "pageScroll": true,
        "setSelected": {"hover": true},
        "navbars": [
            {
                "position":"top",
                "content": ["<a href='https://yourpalnurav.blogspot.in/' style='color:aqua'><b>YourPalNurav</b></a>","close"]
            },{
                type		: 'tabs',
                content		: [
                    '<a href="#panel-search"><i class="fas fa-search"></i> <span>Search</span></a>',
                    '<a href="#panel-label"><i class="fas fa-tag"></i> <span>Label</span></a>', 
                    '<a href="#panel-recent"><i class="fas fa-clock"></i> <span>Recent</span></a>'
                ]
            },
            {
                "position": "bottom",
                "content": [
                    "<a href='https://www.facebook.com/ypnNiftyNurav/'><i class='fab fa-facebook'></i></a>",
                    "<a href='https://www.instagram.com/yourpalnurav/'><i class='fab fa-instagram'></i></a>",
                    "<a href='https://www.twitter.com/yourpalnurav'><i class='fab fa-twitter'></i></a>",
                    "<a href='https://chat.whatsapp.com/B5vOvxJZSNcLrUKMrXeemN'><i class='fab fa-whatsapp'></i></a>",
                    "<a href='mailto:niftynurav@gmail.com?Subject=Email_from_Website_Menu' target='_top'><i class='fas fa-envelope'></i></a>"
                ]
            }
        ]
    }, {
        classNames: {
            fixedElements: {fixed: "header"}
        }
    });
});

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

/*document.addEventListener(
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
);*/