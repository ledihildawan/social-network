import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  styleUrl: './main-navigation.component.scss',
  standalone: true,
  templateUrl: './main-navigation.component.html',
})
export class MainNavigationComponent implements OnInit {
  public mainNavigationItems = [
    { link: '#', label: 'Videos' },
    { link: '#', label: 'People' },
    { link: '#', label: 'Documents' },
    { link: '#', label: 'Events' },
    { link: '#', label: 'Communities' },
    { link: '#', label: 'Favorites' },
    { link: '#', label: 'Channels' },
  ];

  public ngOnInit(): void {}
}
