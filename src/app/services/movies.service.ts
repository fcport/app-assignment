import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieResponse } from '../common/model/movie-response';
import { catchError, filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = 'https://www.omdbapi.com';
  private apiKey = '83513884';

  constructor(private httpClient: HttpClient) {}

  getSuggestedMovies(query: string) {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('type', 'movie')
      .set('page', 1)
      .set('s', query);
    return this.httpClient.get<MovieResponse>(this.baseUrl, { params }).pipe(
      filter((res) => res.Response === 'True'),
      map((res) => res.Search),
      catchError((error) => of([]))
    );
  }
}
