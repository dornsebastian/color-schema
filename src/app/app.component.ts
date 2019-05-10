import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'color-schema';
  theme = 'Default';

  changeTheme(theme: string) {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme);
    this.theme = theme;
  }
}
