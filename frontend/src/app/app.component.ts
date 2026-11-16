import { PrimarySpinnerService } from './commons/shared/spinner/primary-spinner/primary-spinner.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AppComponent {
  constructor(private primarySpinnerService: PrimarySpinnerService) {}
  isLoading = false;
  ngOnInit(): void {
    this.primarySpinnerService.isLoading$().subscribe((isLoading) => {
      setTimeout(() => {
        this.isLoading = isLoading;
      });
    });
  }
}
