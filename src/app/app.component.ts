import { Component } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { ListChannelComponent } from './components/list-channel/list-channel.component';
import { ListActivityComponent } from './components/list-activity/list-activity.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';

@Component({
  imports: [
    GridComponent,
    MainFooterComponent,
    MainHeaderComponent,
    ListChannelComponent,
    ListActivityComponent,
    MainNavigationComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {}
