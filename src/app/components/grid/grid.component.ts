import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  styleUrl: './grid.component.scss',
  standalone: true,
  templateUrl: './grid.component.html',
})
export class GridComponent implements OnInit {
  @Input()
  public title!: string | undefined;

  @Input()
  public linkLabel!: string | undefined;

  public ngOnInit(): void {}
}
