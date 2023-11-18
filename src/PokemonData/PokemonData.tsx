type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Grass'
  | 'Electric'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy';

interface Pokemon {
  name: string;
  dexNumber: number;
  height: number;
  weight: number;
  types: PokemonType[];
  evolutions: Pokemon[];
  attributes: string[];
}



export default Pokemon;
