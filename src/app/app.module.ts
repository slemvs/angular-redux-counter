import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { CounterComponentComponent } from 'app/components/counter-component/counter-component.component';
import { AppStore } from "app/store/app-store";
import { StoreEnhancer, Store, createStore } from "redux";
import { counterReducer } from "app/reducers/counter-reducer";
import { AppState } from "app/store/app-state";
import { AppComponent } from "app/components/app/app.component";

let devtools: StoreEnhancer<AppState> = window['devToolsExtension']
   ? window['devToolsExtension']()
   : f => f;

let store: Store<AppState> = createStore<AppState>(counterReducer, devtools);

export function storeFactory() {
  return store;
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [
    { provide: AppStore, useFactory: storeFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }