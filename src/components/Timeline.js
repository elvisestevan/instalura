import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {fotos: []};
    }

    componentDidMount() {
        fetch(`http://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem("auth-token")}`)
            .then(response => response.json())
            .then(json => {
                this.setState({fotos: json});
            });
    }

    render(){
        return (
        <div className="fotos container">
          {
              this.state.fotos.map(foto => <FotoItem key={foto.id} foto={foto} />)
          }
        </div>
        );
    }
}