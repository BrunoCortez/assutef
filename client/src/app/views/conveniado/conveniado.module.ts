import { MaskModule } from './../../directives/mask/mask.module';
import { AuthService } from './../../services/auth/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    MatDatepickerModule,
    MatListModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatPaginatorModule
} from "@angular/material";
import { ConveniadoComponent } from './conveniado.component';
import { ModalConveniadoComponent } from './modal/modal-conveniado.component';
import { ConveniadoService } from '../../services/conveniado/conveniado.service';
import { TipoconveniadoService } from '../../services/tipoconveniado/tipoconveniado.service';
import { BancoService } from '../../services/banco/banco.service';
import { MaskService } from '../../directives/mask/mask.service';
import { GenericService } from '../../services/generic/generic.service';

@NgModule({
    declarations: [ConveniadoComponent, ModalConveniadoComponent],
    exports: [ConveniadoComponent, ModalConveniadoComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatRadioModule,
        FlexLayoutModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MaskModule,
        MatPaginatorModule
    ],
    entryComponents: [ModalConveniadoComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [AuthService, GenericService, ConveniadoService, TipoconveniadoService, BancoService, MaskService]
})

export class ConveniadoModule { }
