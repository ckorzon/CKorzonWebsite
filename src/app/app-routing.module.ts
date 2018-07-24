import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './Conrads-app.component';
import { AboutMeComponent } from './about_me/about_me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
    { path: 'about_me', component:AboutMeComponent },
    { path: 'work_experience', component: WorkExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: '', redirectTo: '/about_me', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
