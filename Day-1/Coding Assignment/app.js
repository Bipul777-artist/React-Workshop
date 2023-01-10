/* Creating a header using pure React */
const heading = React.createElement("h1", {}, "Heading1");

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
    },
    "Heading2"
)

    const container = React.createElement(
        "div",
        {
            id: "container",
        },
        [heading, heading2]
    )
    /* We'll have to tell that this is a root element (place) where we want the React to run 
    We'll write React DOM because we're going to manipulate DOM*/
    
    const root = ReactDOM.createRoot(document.getElementById('root'));

    /* Putting the heading inside Root */
    root.render(container);