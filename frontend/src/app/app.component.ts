import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { TranslationService} from "./services/translation.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.getGame();
  }

  constructor(private translate: TranslateService,
              private translationService: TranslationService) {
    translate.setDefaultLang('en');
  }

  public changeLang(lang: string): void {
    this.translationService.changeLang(lang);
  }

  public getGame(): void {
    fetch(`https://api.rawg.io/api/games/494384?key=bbfa60729c97492bbaf8928b512e4fd3`,)
      .then(response => response.json())
      .then(games => {
        console.log(games);
      })
  }

}
