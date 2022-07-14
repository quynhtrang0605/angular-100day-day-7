import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component ({
  selector: "progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }

      .progress-bar-container {
        width: 100%;
      }
    `
  ]
})
export class ProgressBarComponent implements OnInit, OnChanges{
  @Input() set progress(val: number) {
    // validation for validation
   if (typeof val !== "number") {
     const progress = Number(val);
     if (Number.isNaN(progress)) {
       this._progress = 0;
     } else {
       this._progress = progress;
     }
    }
     this._progress;
   }
  private _progress = 50;
  get progress(){
    return this._progress;
  }

  @Input()  backgroundColor = '#ccc';
  @Input()  progressColor ='tomato';

  constructor() {
    
  }

  ngOnInit() {}

  ngOnChanges(change: SimpleChanges) {
    
  }

}
// new ProgressBarComponent(); //invoke