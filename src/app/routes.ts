import { Routes } from '@angular/router';
import { PortfolioHomeComponent } from './pages/portfolio-home/portfolio-home.component';
import { EduComponent } from './pages/edu/edu.component';
const routeConfig: Routes = [
    {
        path: '',
        component: PortfolioHomeComponent,
        title: 'Home page'
    },
    {
        path: 'edu',
        component: EduComponent,
        title: 'Education'
    },
    {
        path: '**',
        redirectTo: ''
    }
  ];
  
  export default routeConfig;