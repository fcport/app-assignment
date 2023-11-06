import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  catchError,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';
import { COUNTRIES, Country } from 'src/app/common/model/country';
import { nameValidator } from 'src/app/common/validators/name-validator';
import { postalcodeValidator } from 'src/app/common/validators/postcode-validator';
import { MoviesService } from 'src/app/services/movies.service';
import { Search } from './../../common/model/movie-response';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-enter',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
  ],
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
})
export class EnterComponent implements OnInit {
  enterForm!: FormGroup;

  destroyRef = inject(DestroyRef);

  countries = COUNTRIES;

  submitted = false;

  _favouriteSuggestions$ = new BehaviorSubject<string>('');
  favouriteSuggestions$: Observable<string[]> = this._favouriteSuggestions$
    .asObservable()
    .pipe(
      switchMap((value) => this.moviesService.getSuggestedMovies(value)),
      map((moviesResp: Search[]) => moviesResp.map((movie) => movie.Title)),
      catchError((error) => of([]))
    );

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private moviesService: MoviesService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.enterForm = this.fb.group({
      name: new FormControl<string>('', [Validators.required, nameValidator]),
      user: new FormControl<string>('', [Validators.email]),

      location: this.fb.group(
        {
          country: new FormControl<Country>('Ireland', [Validators.required]),
          postCode: new FormControl<string>(''),
        },
        { validators: postalcodeValidator }
      ),

      favouriteMovie: new FormControl<string>(''),
    });

    this.enterForm
      .get('favouriteMovie')
      ?.valueChanges.pipe(
        filter((val) => !!val),
        debounceTime(300),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((input) => this._favouriteSuggestions$.next(input));
  }

  onSubmit() {
    this.dataService.pushNewData(this.enterForm.value);
    this.submitted = true;
    if (this.enterForm.valid) this.router.navigate(['/thankyou']);
  }
}
