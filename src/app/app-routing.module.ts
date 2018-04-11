import { NgModule } from '@angular/core';
// 路由
import { RouterModule, Routes } from '@angular/router';
// 模块
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // 首页重新定向
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
  { path: 'detail/:id', component: HeroDetailComponent  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {
}
