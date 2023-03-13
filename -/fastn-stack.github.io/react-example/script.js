import 'https://unpkg.com/react@18/umd/react.development.js';
import 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
import reactToWebComponent from "https://unpkg.com/react-to-webcomponent@1.7.2/dist/react-to-webcomponent.es.js";

const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const wcChecklist = reactToWebComponent(LikeButton, React, ReactDOM, { dashStyleAttributes: true });

customElements.define("x-like", wcChecklist);
