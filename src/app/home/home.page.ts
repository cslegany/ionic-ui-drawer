import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  backdropVisible: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  toggleBackdrop(isVisible: boolean) {
    //console.log("CHANGE: ", isVisible);
    this.backdropVisible = isVisible;
    this.cdr.detectChanges(); //backdrop doesn't get rendered correctly without forced change detection
  }

}
