# Color Schema

Der Dark Mode erobert das Web. 
Durch den WS3-Entwurf [CSS Color Adjust Module Level 1](https://drafts.csswg.org/css-color-adjust-1) vom 25.04.2019 sind Webseiten in Light & Dark Mode möglich.

Die Umsetzung ist ganz leicht über Media-Queries möglich. 
``` 
@media (prefers-color-scheme: dark) {

} 
 ```
 
Bislang ist der Einsatzmöglichkeiten auf macOS mit dem Safari beschränkt.
Weitere unterstützte Plattformen werden sicherlich noch folgen.

Das Beispiel enthält auch einen Theme-Switcher zwischen **Light**, **Dark** und **Crazy**.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
