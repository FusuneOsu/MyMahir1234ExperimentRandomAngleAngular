//this is a shared module which will act as the shared dependencies for a project

// Provides common structural directives like *ngIf, *ngFor, *ngSwitch for template functionality
import { CommonModule } from "@angular/common";

// FormsModule: enables template-driven forms; ReactiveFormsModule: enables reactive forms with FormBuilder/FormGroup
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Material button component module - provides styled buttons for UI
import { MatButtonModule } from "@angular/material/button";

// Material icon component module - enables Material Design icons in templates
import { MatIconModule } from "@angular/material/icon";

// Material input field component module - provides text input controls with Material styling
import { MatInputModule } from "@angular/material/input";

// Material form field wrapper component - container for form controls with labels and error messages
import { MatFormField } from "@angular/material/form-field";

// Material list component module - displays lists of items with Material Design styling
import { MatListModule } from "@angular/material/list";

// Material dialog module - enables modal dialogs/popups for user interactions
import { MatDialogModule } from "@angular/material/dialog";

// Material table component module - renders data tables with sorting, pagination, and filtering
import { MatTableModule } from "@angular/material/table";

// Material divider component module - provides horizontal/vertical separator lines
import { MatDividerModule } from "@angular/material/divider";

// Material card component module - provides card containers for grouping related content
import { MatCardModule } from "@angular/material/card";

// Material card sub-components - header, title, content, and action sections within cards
import { MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from "@angular/material/card";

// Angular Router directive - enables declarative navigation links in templates
import { RouterLink } from "@angular/router";

// Material label component - provides styled labels for form fields and inputs
import { MatLabel } from "@angular/material/input";

// Material date picker module - enables calendar date selection in forms
import { MatDatepickerModule } from "@angular/material/datepicker";

// Native date adapter for Material date picker - provides JavaScript Date support for date pickers
import { MatNativeDateModule } from "@angular/material/core";

// Material select/dropdown component module - provides styled dropdown select controls
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