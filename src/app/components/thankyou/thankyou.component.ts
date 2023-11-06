import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/common/model/country';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss'],
})
export class ThankyouComponent implements OnInit {
  data$!: Observable<{
    name: string;
    username?: string;
    location: {
      country: Country;
      postCode?: string;
    };
    favouriteMovie?: string;
  } | null>;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.data$ = this.dataService.data;
  }
}
