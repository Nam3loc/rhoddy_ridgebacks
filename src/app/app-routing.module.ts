import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { DogsComponent } from './dogs/dogs.component';
import { ContactComponent } from './contact/contact.component';
import { DogComponent } from './dog/dog.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dogs', component: DogsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'dogName', component: DogComponent},
  {path: 'dogOne', component: DogComponent},
  {path: 'dogTwo', component: DogComponent},
  {path: 'dogThree', component: DogComponent},
  {path: 'dogFour', component: DogComponent},
  {path: 'dogFive', component: DogComponent},
  {path: 'dogSix', component: DogComponent},
  {path: 'dogSeven', component: DogComponent},
  {path: 'dogEight', component: DogComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
