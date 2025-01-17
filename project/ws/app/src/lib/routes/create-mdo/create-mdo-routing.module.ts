import { RolesAccessComponent } from '../access/routes/roles-access/roles-access.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './routes/home/home.component'
import { UsersComponent } from './routes/users/users.component'
import { ConfigResolveService } from '../home/resolvers/config-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      configService: ConfigResolveService,
    },
    children: [
      {
        path: ':department/users',
        component: UsersComponent,
      },
      {
        path: ':department/roles-access',
        component: RolesAccessComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ConfigResolveService,
  ],
})
export class CreateMDORoutingModule { }
