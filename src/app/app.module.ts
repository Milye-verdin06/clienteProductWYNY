import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './models/producto/producto.component';
import { ClienteComponent } from './models/cliente/cliente.component';
import { PerfilvendedorComponent } from './models/perfilvendedor/perfilvendedor.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProductoComponent,
    ClienteComponent,
    PerfilvendedorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
