export const NAVIGATION_BTNS = [
    {
        name: "Home",
        exact: true,
        to: "/",
        activeClassName: "my-active"
    },
    {
        name: "Posts",
        exact: false,
        to: "/posts",
        activeClassName: "my-active"
    },
    {
        name: "Albums",
        exact: false,
        to: "/albums",
        activeClassName: "my-active"
    },
    {
        name: "FAQ",
        exact: false,
        to: "/faq",
        activeClassName: "my-active",
        children: [
            {
                name: "FAQ - page 1",
                exact: false,
                to: "/faq/page1",
            },
            {
                name: "FAQ - page 2",
                exact: false,
                to: "/faq/page2",
            },
        ]
    }
]