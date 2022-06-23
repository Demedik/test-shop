import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';

import { setOrderByAction, getProductsAction } from '@store/actions';
import { selectOrderByOption } from '@store/seletors';

import { OptionsOrderBy } from './content-page.constants';


@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit {
  public selectOptions = OptionsOrderBy;

  public groupControl = new FormGroup({
    orderBy: new FormControl(null, Validators.required),
  });

  constructor(private store: Store) {
    this.store.select(selectOrderByOption).pipe(first()).subscribe(value => this.groupControl.setValue(value));
    this.groupControl.valueChanges.subscribe((value)=>{
      this.store.dispatch(setOrderByAction(value));
      this.store.dispatch(getProductsAction());
    });
  }



  ngOnInit(): void {

  }

}
