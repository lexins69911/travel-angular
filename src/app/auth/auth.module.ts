import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbDatepickerModule, NbDialogModule, NbGlobalLogicalPosition, NbIconModule, NbInputModule, NbToastrModule } from '@nebular/theme';
import { NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbButtonModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { AuthBlockComponent } from './auth-block/auth-block.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../auth.guard';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    declarations: [AuthComponent, AuthBlockComponent, LoginComponent, RegisterComponent, LogoutComponent],
    imports: [
        SharedModule,
        NbToastrModule.forRoot({
            position: NbGlobalLogicalPosition.BOTTOM_END
        }),
        RouterModule.forChild([{
            path: '',
            component: AuthComponent,
            children: [
                {
                    path: 'login',
                    // canActivate: [AuthGuard],
                    data: {
                        notAuth: true
                    },
                    component: LoginComponent
                },
                {
                    path: 'register',
                    // canActivate: [AuthGuard],
                    component: RegisterComponent
                }
            ]
        }]),
    ]
})
export class AuthModule {
}
