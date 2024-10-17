import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class SeleccionarContinente extends Component {
    selectContinente = React.createRef();

    state = {
        paises: [],
        continentes: [],
    }


    loadPaises = () => {
        let request = 'v3.1/all';
        let url = Global.urlApiPaises + request;

        axios.get(url).then(response => {
            let continentesUnicos = [...new Set(response.data.map(pais => pais.region))];
            this.setState({
                paises: response.data,
                continentes: continentesUnicos,
            })
        })

    }

    filterContinente = (e) => {
        e.preventDefault();

        let nombreContinente = this.selectContinente.current.value;
        let request = 'v3.1/region/' + nombreContinente;
        let url = Global.urlApiPaises + request;

        axios.get(url).then(response => {
            this.setState({
                paises: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.loadPaises();
    }

    render() {
        return (
            <div>
                <h1>Seleccionar Continente</h1>
                <form>
                    <label>Seleccionar Continente: </label>
                    <select ref={this.selectContinente}>
                        {
                            this.state.continentes.map((contienente, index) => {
                                return (
                                    <option key={index} value={contienente}>{contienente}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.filterContinente}>Filtrar Continente</button>
                </form>
                <br />
                {
                    this.state.paises.map((pais, index) => {
                        return (
                            <div key={index}>
                                <a href='/detalle'>
                                    <img src={pais.flags.png} alt={pais.name.common}></img>
                                    <h3>{pais.name.common}</h3>
                                </a>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
