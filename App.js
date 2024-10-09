const heading = React.createElement(
        "h1",
        {id: "heading"},
        "Hello!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const heading1 = React.createElement(
        "div",
        {id: "parent"},
        (React.createElement(
                "div",
                {id: "child"},
                (React.createElement(
                        "h2",
                        {id: "sub-child"},
                        ("Multi-divs")
                ))
        ))
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);


const heading2 = React.createElement(
        "div",
        {id: "parent"},
        (React.createElement(
                "div",
                {id: "child"},
                (
                [React.createElement(
                        "h3",
                        {id: "sub-child"},
                        ("Multi-divs")
                ),
                React.createElement(
                        "h5",
                        {id: "sub-child"},
                        ("Multi-divs-sibling")
                )
                ])
        ))
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);


