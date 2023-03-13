import 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js';
import 'https://unpkg.com/react@18/umd/react.development.js';
import 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
import reactToWebComponent from "https://unpkg.com/react-to-webcomponent@1.7.2/dist/react-to-webcomponent.es.js";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function App() {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    return React.createElement(
        "div",
        {dangerouslySetInnerHTML: {__html: `<h1>Title: ${post.title}</h1>
         <div>Body: ${post.body}</div>`}},
    );
}

const xApp = reactToWebComponent(App, React, ReactDOM, { dashStyleAttributes: true });

customElements.define("x-app", xApp);
