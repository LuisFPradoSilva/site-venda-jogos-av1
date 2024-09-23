import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SiteComponent } from './site/site.component';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'cadastro', component: CadastroComponent},
{path: 'site', component: SiteComponent}
]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProvaWellington';
}
