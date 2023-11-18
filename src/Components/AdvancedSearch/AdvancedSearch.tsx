import React from 'react';
import PokemonSearchStringResult from './PokemonSearch/PokemonSearch';

interface IAdvancedSearchProps {}

class AdvancedSearch extends React.Component {
  constructor(props: IAdvancedSearchProps) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  state = {
    inputText: '',
    outputText: '',
  };

  async processInput(input: string) {
    this.setState({ inputText: input });
    console.log('input is ' + input);
    const output = await PokemonSearchStringResult(input);
    this.setState({ outputText: output });
    console.log(output);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.processInput(event.target.value);
    //console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <h2>Search:</h2>
        <input type="text" placeholder="example: shiny&green" size={50} onChange={this.handleInputChange} />
        <h2>Output:</h2>
        <input type="text" value={this.state.outputText} placeholder="output" disabled size={50} />
      </div>
    );
  }
}

export default AdvancedSearch;
