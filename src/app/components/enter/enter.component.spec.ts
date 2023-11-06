import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterComponent } from './enter.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MoviesService } from 'src/app/services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EnterComponent', () => {
  let component: EnterComponent;
  let fixture: ComponentFixture<EnterComponent>;

  let mockMoviesService;

  beforeEach(() => {
    mockMoviesService = jasmine.createSpyObj(['getSuggestedMovies']);
    mockMoviesService.getSuggestedMovies.and.returnValue([
      {
        Title: 'Indiana Jones and the Last Crusade',
        Year: '1989',
        imdbID: 'tt0097576',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BY2Q0ODg4ZmItNDZiYi00ZWY5LTg2NzctNmYwZjA5OThmNzE1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Indiana Jones and the Temple of Doom',
        Year: '1984',
        imdbID: 'tt0087469',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Indiana Jones and the Kingdom of the Crystal Skull',
        Year: '2008',
        imdbID: 'tt0367882',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZmY5ZTk3ZDMtZjA1MS00NzU4LTk5ZDItYmNhOTkxMGYxMjRlXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg',
      },
      {
        Title: 'Indiana Jones and the Dial of Destiny',
        Year: '2023',
        imdbID: 'tt1462764',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BY2M0ZGEwMGQtNzMxOC00OTU2LWExZmUtMTA5N2RhMDZlY2JiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
      },
      {
        Title: 'Indiana Jones and the Temple of the Forbidden Eye Ride',
        Year: '1995',
        imdbID: 'tt0764648',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMzk5ZmEyMTgtYzQ0ZC00YTEwLWExOTUtMDZhZmY5NDQ0OGJlXkEyXkFqcGdeQXVyNzAyNzI4Njc@._V1_SX300.jpg',
      },
      {
        Title:
          "The Adventures of Young Indiana Jones: Treasure of the Peacock's Eye",
        Year: '1995',
        imdbID: 'tt0115031',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BOTg2MTc2NDAzOF5BMl5BanBnXkFtZTcwODExNDIyMQ@@._V1_SX300.jpg',
      },
      {
        Title: 'The Adventures of Young Indiana Jones: Travels with Father',
        Year: '1996',
        imdbID: 'tt0154003',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BZDE2OTlhYTMtNDU4My00N2Y5LThlNWItNjdlNTIxOTQyZDg1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg',
      },
      {
        Title: 'The Adventures of Young Indiana Jones: Attack of the Hawkmen',
        Year: '1995',
        imdbID: 'tt0154004',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTcwMTU5NjExMV5BMl5BanBnXkFtZTYwNzU3MTA5._V1_SX300.jpg',
      },
      {
        Title: 'The Adventures of Young Indiana Jones: Hollywood Follies',
        Year: '1994',
        imdbID: 'tt0111806',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTMyMDgxMzA4Ml5BMl5BanBnXkFtZTcwMjcyMzMyMQ@@._V1_SX300.jpg',
      },
      {
        Title: 'Monrovia, Indiana',
        Year: '2018',
        imdbID: 'tt8749146',
        Type: 'movie',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTU0MTQ0NTI2Ml5BMl5BanBnXkFtZTgwNjAzMjE1NjM@._V1_SX300.jpg',
      },
    ]);
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        EnterComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
      ],
      providers: [{ provide: MoviesService, useValue: mockMoviesService }],
    });

    fixture = TestBed.createComponent(EnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    // const spy = spyOn(component,'onSubmit');
    component.ngOnInit();
    expect(component.enterForm).toBeTruthy();
  });

  it('should render form correctly', () => {
    const name = fixture.debugElement.query(By.css('#name'));
    expect(name).toBeTruthy();

    const user = fixture.debugElement.query(By.css('#user'));
    expect(user).toBeTruthy();

    const country = fixture.debugElement.query(By.css('#country'));
    expect(country).toBeTruthy();

    const postcode = fixture.debugElement.query(By.css('#postcode'));
    expect(postcode).toBeTruthy();

    const favMovie = fixture.debugElement.query(By.css('#favMovie'));
    expect(favMovie).toBeTruthy();
  });

  it('should display errors after submit', () => {
    const nameCtrl = component.enterForm.get('name');
    nameCtrl?.setValue('John4Doe');
    nameCtrl?.markAsTouched();
    nameCtrl?.markAsDirty();

    fixture.detectChanges();

    console.log(nameCtrl);

    let button = fixture.debugElement.query(By.css('button[type="submit"]'));
    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.submitted).toBe(true);

    let errs = fixture.debugElement.queryAll(By.css('[role="alert"]'));
    expect(errs.length).toBeGreaterThanOrEqual(1);

    const userCtrl = component.enterForm.get('user');
    userCtrl?.setValue('John4Doe');
    userCtrl?.markAsTouched();
    userCtrl?.markAsDirty();
    fixture.detectChanges();

    errs = fixture.debugElement.queryAll(By.css('[role="alert"]'));
    expect(errs.length).toBeGreaterThanOrEqual(2);

    const postCode = component.enterForm.get('location')?.get('postCode');
    postCode?.setValue('tes');
    postCode?.markAsTouched();
    postCode?.markAsDirty();
    fixture.detectChanges();

    errs = fixture.debugElement.queryAll(By.css('[role="alert"]'));
    expect(errs.length).toBeGreaterThanOrEqual(3);

    postCode?.setValue('');
    postCode?.markAsTouched();
    postCode?.markAsDirty();
    fixture.detectChanges();

    const countryCtrl = component.enterForm.get('location')?.get('country');
    countryCtrl?.setValue('United Kingdom');
    fixture.detectChanges();

    errs = fixture.debugElement.queryAll(By.css('[role="alert"]'));
    expect(errs.length).toBeGreaterThanOrEqual(4);
  });
});
