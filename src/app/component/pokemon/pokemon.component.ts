import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon, PokemonCard } from '../../models/pokemon.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  private _pokemonService = inject(PokemonService);

  pokemons$: Observable<Pokemon[]> = this._pokemonService.getPokemonCard$();
}
