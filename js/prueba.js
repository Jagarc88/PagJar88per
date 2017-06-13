
const list = [
                ["40:1","Sabatón", "1:20", "https://www.amazon.es/40-1/dp/B00950RHUM/ref=sr_1_5?s=dmusic&ie=UTF8&qid=1497312356&sr=1-5&keywords=40%3A1"],
                ["Me enamoré","Shakira", "3:45", "https://www.amazon.es/Me-Enamor%C3%A9/dp/B06Y1DRZBC/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1497312478&sr=1-1&keywords=shakira"],
              ];

class BuscadorResults extends React.Component{

  constructor(){
    super();
    this.state = {
      listResult: [],
    };
  }

  stateSetterLista(){
    let a = [];
    for (var i=0;i<list.length;i++) {
      a.push(list[i]);
    }
    this.setState({listResult : a});

  }

  render(){
    return(
      <div id="searchResultsContainer">
      <div className="col-xs-12" id="searchResultEncabezado">
        <div className="col-xs-5 col-titulo">Título</div>
        <div className="col-xs-4 col-artista">Artista</div>
        <div className="col-xs-3 col-duracion">Duración</div>
      </div>

      {
        this.state.listResult.map(function(cancion){
                          return (<div className="col-xs-12 searchResUnit">
                            <div className="col-xs-5 col-titulo"><a href={cancion[3]}>{cancion[0]}</a></div>
                            <div className="col-xs-4 col-artista">{cancion[1]}</div>
                            <div className="col-xs-3 col-duracion">{cancion[2]}</div>
                          </div>);
                        })
      }

      </div>
    );
  }
}

class BuscadorContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){

    return(
      <div id="buscadorContainer">
        <div  className="col-xs-12" id="buscadorBotones">
          <input className="col-xs-10" type="text" value={this.state.value} onChange={this.handleChange.bind(this)} placeholder="Buscar en web" name="inputBuscador" id="inputBuscador"/>
          <input className="col-xs-2" type="image" onClick={this.props.onClickInher.bind(this)} src="https://image.flaticon.com/icons/png/512/24/24501.png" id="botonBuscar"/>
        </div>
      </div>
      );
    }
}

class Container extends React.Component{

  constructor() {
    super();
    this.sizes = {
      height: window.innerHeight+"px",
    };
    this.sizesBack = {
      height: window.innerHeight+"px",
      width: window.innerHeight+"px",
    };
  }

  onClickInher(event){

    this.refs.buscadorResults.stateSetterLista();
  }

//          <BuscadorContainer onClickInher={this.searcher.bind(this)} handleChange={this.handleChange.bind(this)}/>
  render(){
    return(
        <div id="EEH" style={this.sizes}>
          <div id="backgroundEEH" style={this.sizesBack}></div>
          <BuscadorContainer onClickInher={this.onClickInher.bind(this)}/>
          <BuscadorResults ref="buscadorResults"/>
        </div>
      );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);
