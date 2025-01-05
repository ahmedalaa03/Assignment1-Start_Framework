import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path: '',component: HomeComponent,title:'home',data: { title: 'start Framework' }},
    {path:'about',component:AboutComponent,title:'about', data: { title: 'about component' }},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio', data: { title: 'portfolio component' }},
    {path:'contact',component:ContactComponent,title:'contact', data: { title: 'conatct section' }},
    {path:'**',component:NotfoundComponent,title:'not found'}
];
