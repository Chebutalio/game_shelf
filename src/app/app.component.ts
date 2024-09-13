import { Component } from '@angular/core';
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
export class AppComponent {

  constructor(private translate: TranslateService,
              private translationService: TranslationService) {
    translate.setDefaultLang('en');
  }

  public changeLang(lang: string): void {
    this.translationService.changeLang(lang);
  }
}
