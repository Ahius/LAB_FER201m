import React, { Component } from 'react'
import FilmsPresentation from './FilmsPresentation';
import { listFilms } from '../shared/ListOfFilms';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: listFilms
        };
    }
    render() {
        return <FilmsPresentation film={this.state.films} />
    }
}
export default Main