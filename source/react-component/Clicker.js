// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// Styles
import Styles from './postcss.css';
import kitty from '../theme/images/kitty.jpg';

class Clicker extends Component {
    state = {
        count: 34,
    };

    inc = () => void this.setState(({ count }) => ({ count: count + 1 }));
    dec = () => void this.setState(({ count }) => ({ count: count - 1 }));

    render() {
        const { count } = this.state;

        return (
            <section
                className = { Styles.clicker }
                style = {{
                    '--mainColor':       'rebeccapurple',
                    '--headingFontSize': this.state.count + 'px',
                }}>
                <img src = { kitty } />
                <h1>Test: {count}</h1>
                <button onClick = { this.inc }>Increment</button>
                <button onClick = { this.dec }>Decrement</button>
            </section>
        );
    }
}

export default hot(Clicker);
