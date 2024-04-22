import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // Adjust the path as per your project structure

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
