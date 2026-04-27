import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Journal } from './pages/journal/journal';
import { Visit } from './pages/visit/visit';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'menu', component: Menu },
  { path: 'journal', component: Journal },
  { path: 'visit', component: Visit },
  { path: 'contact', component: Contact },
];
