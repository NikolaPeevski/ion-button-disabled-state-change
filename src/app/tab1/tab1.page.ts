import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tab1Page {

  public isDisabled = false;

  constructor(public changeRef: ChangeDetectorRef) {}

  changeState() {
    this.isDisabled = !this.isDisabled;
    // this.changeRef.detectChanges();
  }

}
