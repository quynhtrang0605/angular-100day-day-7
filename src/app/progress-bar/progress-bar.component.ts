import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-progress-bar",
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
export class ProgressBarComponent implements OnInit , OnChanges {
  @Input() set progress(val: number) {
    //validation for validation
    if (typeof val !== "number") {
      const progress = Number(val);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    } else {
      this._progress = val;
    }
  };
  private _progress = 50;
  get progress(){
    return this._progress;
  }

  @Input() progressColor = '#2e8b57';
  @Input() backgroundColor = '#9e9e9e';

  constructor() {
    
  }

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }
}

