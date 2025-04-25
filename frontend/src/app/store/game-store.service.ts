import { Injectable, signal, WritableSignal } from '@angular/core';
import { Game } from "../interfaces/game.interface";

@Injectable({
  providedIn: 'root'
})
export class GameStoreService {
  private readonly _games: WritableSignal<Game[]> = signal<Game[]>([]);
  private readonly _selectedGame: WritableSignal<Game | null>  = signal<Game | null>(null);

  public readonly games = this._games.asReadonly();
  public readonly selectedGame = this._selectedGame.asReadonly();

  addGame(game: Game) {
    this._games.update((current: any) => [...current, game]);
  }

  selectGame(game: Game | null) {
    this._selectedGame.set(game);
  }

  updateGame(updated: Game) {
    this._games.update((list: any[]) =>
      list.map((g) => (g.id === updated.id ? updated : g))
    );
  }

  removeGame(gameId: string) {
    this._games.update((list: any[]) => list.filter((g) => g.id !== gameId));
  }

  seedMockGames() {
    this._games.set([
      {
        id: '1',
        name_original: "Baldur's Gate III",
        background_image: 'https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg',
        released: "2023-08-03",
        userRating: 9.5,
        notes: '500+ годин, Карлак ❤️'
      },
      {
        id: '2',
        name_original: 'God of War: Ragnarok',
        background_image: 'https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg',
        released: "2022-08-03",
        userRating: 8.7
      }
    ]);
  }

}
