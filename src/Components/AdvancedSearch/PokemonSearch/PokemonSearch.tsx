import { getBluePokemon, getGreenPokemon, getRedPokemon } from './SearchSubstitutions';

function SubstituteItem(item: string): Set<string> {
  let returnSet = new Set<string>();
  switch (item) {
    case 'blue': {
      returnSet = getBluePokemon();
      break;
    }
    case 'red': {
      returnSet = getRedPokemon();
      break;
    }
    case 'green': {
      returnSet = getGreenPokemon();
      break;
    }
    default: {
      returnSet.add(item);
      break;
    }
  }
  return returnSet;
}

function SubstituteSearchShortcuts(input: string): string {
  const andGroups = input.split('&');
  let andResult = new Set<string>();
  for (let andItem of andGroups) {
    const orGroups = andItem.split(',');
    let orResult = new Set<string>();
    for (const orItem of orGroups) {
      const substitution = SubstituteItem(orItem);
      substitution.forEach(orResult.add, orResult);
    }
    let finalAndItem = '';
    let first = true;
    orResult.forEach(function (orString) {
      if (first) {
        first = false;
      } else {
        finalAndItem = finalAndItem.concat(',');
      }
      finalAndItem = finalAndItem.concat(orString);
    });
    andResult.add(finalAndItem);
  }
  let returnString = '';
  let first = true;
  andResult.forEach(function (andString) {
    if (first) {
      first = false;
    } else {
      returnString = returnString.concat('&');
    }
    returnString = returnString.concat(andString);
  });
  return returnString;
}

function PokemonSearchStringResult(input: string): Promise<string> {
  return new Promise<string>(function (resolve, reject) {
    const result = SubstituteSearchShortcuts(input);
    resolve(result);
  });
}

export default PokemonSearchStringResult;
