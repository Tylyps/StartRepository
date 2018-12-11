import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { exampleAction, exampleActionTwo } from '../actions/example'
import Logo from './Logo';

class MainPage extends Component {
    state = {
        test: true,
        valuePlus: 0,
        valueMinus: 0,
    };

    onAdd = () => {
        const { valuePlus } = this.state;
        console.log(typeof valuePlus)
        this.props.add(valuePlus);
    }

    onMinus = () => {
        const { valueMinus } = this.state;
        this.props.minus(valueMinus);
    }

    toggleCounter = () => {
        this.setState(prevState => ({
            test: !prevState.test,
        }))
    }

    onChangeValuePlus = (e) => {
        const { valueAsNumber } = e.target
        this.setState({ valuePlus: valueAsNumber })
    }

    onChangeValueMinus = (e) => {
        const { valueAsNumber } = e.target
        this.setState({ valueMinus: valueAsNumber })
    }

    render() {
        const {
            test,
            valueMinus,
            valuePlus,
        } = this.state;
        const {
            counter,
        } = this.props

        return (
            <div className="center-component">
                <Link to="/test" onClick={this.toggleCounter}>
                    <Logo />
                </Link>
                {test &&
                <div>
                    <h1>Counter: {counter}</h1>
                    <button className="btn btn-green" onClick={this.onAdd}>+</button>
                    <button className="btn btn-red" onClick={this.onMinus}>-</button>
                    <br />
                    <input
                        value={valuePlus}
                        type="number"
                        onChange={this.onChangeValuePlus}
                    />
                    <input
                        value={valueMinus}
                        type="number"
                        onChange={this.onChangeValueMinus}
                    />
                </div>
                }
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    add: value => dispatch(exampleAction(value)),
    minus: value => dispatch(exampleActionTwo(value))
});

const mapStateToProps = (state) => ({
    counter: state.example.counter,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
