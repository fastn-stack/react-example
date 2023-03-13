import 'https://unpkg.com/react@18/umd/react.development.js';
import 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
import reactToWebComponent from "https://unpkg.com/react-to-webcomponent@1.7.2/dist/react-to-webcomponent.es.js";
import 'https://unpkg.com/prop-types@15.8.1/prop-types.min.js';

const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
        this.data = props_data(props);
    }

    render() {
        if (this.state.liked) {
            return `${this.data.name.get()} liked this.`;
        }

        return e(
            'button',
            { onClick: () => this._onClick() },
            'Like'
        );
    }

    _onClick() {
        this.setState({ liked: true });
        this.data.name.set(this.data.name.get() + "✌️");
    }
}

LikeButton.propTypes = {
    name: PropTypes.string.isRequired
}

const wcChecklist = reactToWebComponent(LikeButton, React, ReactDOM, { dashStyleAttributes: true });

customElements.define("x-like", wcChecklist);


function props_data(props) {
    let data = {};
    for (let idx in props) {
        data[idx] = eval(props[idx]);
    }
    return data;
}
