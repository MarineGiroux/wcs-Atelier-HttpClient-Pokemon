import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon, PokemonCard } from '../../models/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _http = inject(HttpClient);

  private readonly _BASE_API_URL = 'https://api.pokemontcg.io/v2/cards';

  constructor() {}

  getPokemonCard$(): Observable<Pokemon[]> {
    return this._http
      .get<PokemonCard>(this._BASE_API_URL)
      .pipe(map((response) => response.data));
  }
}
