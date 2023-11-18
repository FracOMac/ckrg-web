import { bluePokemon } from '../../../PokemonData/Colors/blue';
import { greenPokemon } from '../../../PokemonData/Colors/green';
import { redPokemon } from '../../../PokemonData/Colors/red';

export function getBluePokemon(): Set<string> {
  let result = new Set<string>();
  bluePokemon.forEach(result.add, result);
  return result;
}

export function getRedPokemon(): Set<string> {
  let result = new Set<string>();
  redPokemon.forEach(result.add, result);
  return result;
}

export function getGreenPokemon(): Set<string> {
  let result = new Set<string>();
  greenPokemon.forEach(result.add, result);
  return result;
}
