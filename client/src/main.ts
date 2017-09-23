import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { GameHubModule } from "./app/gamehub.module";
import { environment } from "./environments/environment";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GameHubModule)
    .catch(err => console.log(err));
