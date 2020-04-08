import * as React from 'react';
import "./App.css";

import {ColumnasDeTareas} from "./ColumnasDeTareas.js";
import {NuevaTareaInput} from "./NuevaTareaInput.js";

export class PaginaPrincipal extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tareas: []
    }
  }

  render() {
    return <div className="paginaPrincipal">
      <NuevaTareaInput/>
      <ColumnasDeTareas tareas={this.state.tareas}/>
    </div>
  }
}