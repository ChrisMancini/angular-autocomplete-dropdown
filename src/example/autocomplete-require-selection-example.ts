import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Require an autocomplete option to be selected
 */
@Component({
  selector: 'autocomplete-require-selection-example',
  templateUrl: 'autocomplete-require-selection-example.html',
  styleUrls: ['autocomplete-require-selection-example.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class AutocompleteRequireSelectionExample {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  myControl = new FormControl();
  options: ComplexObject[] = [{id: 1, value: 'One'}, {id: 2, value:'Two'}, {id: 3, value: 'Three'}, {id: 4, value: 'Four'}, {id: 5, value: 'Five'}];
  filteredOptions: ComplexObject[];

  constructor() {
    this.filteredOptions = this.options.slice();
  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredOptions = this.options.filter(o => o.value.toLowerCase().includes(filterValue));
  }

  displayOption(option: ComplexObject) : string {
    return option ? option.value : '';
  }
}

interface ComplexObject {
  id: number,
  value: string
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */