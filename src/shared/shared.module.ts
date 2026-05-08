//this is a shared module which will act as the shared dependencies for a project

import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormField } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from "@angular/material/card";
import { RouterLink } from "@angular/router";
import { MatLabel } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";

export const SharedModules = [
    CommonModule, FormsModule, MatButtonModule, 
    MatIconModule, MatInputModule, MatFormField, 
    MatListModule, MatDialogModule, MatTableModule, 
    MatDividerModule, MatCardModule, ReactiveFormsModule, 
    MatCardHeader, MatCardTitle, MatCardContent, MatLabel, 
    MatCardActions, RouterLink, MatDatepickerModule, MatNativeDateModule, 
    MatSelectModule
    
]