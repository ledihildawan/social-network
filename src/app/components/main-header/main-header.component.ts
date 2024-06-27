import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  styleUrl: './main-header.component.scss',
  standalone: true,
  templateUrl: './main-header.component.html',
})
export class MainHeaderComponent implements OnInit {
  public socials = [
    { icon: 'fa-twitter', link: '#' },
    { icon: 'fa-linkedin-in', link: '#' },
    { icon: 'fa-facebook-f', link: '#' },
  ];
  public navigationItems = [
    { link: '#', label: 'About' },
    { link: '#', label: 'For Business' },
    { link: '#', label: 'Suggestions' },
    { link: '#', label: 'Help & FAQs' },
    { link: '#', label: 'Contacts' },
    { link: '#', label: 'Pricing' },
  ];
  public altNavigationItems = [
    { link: '#', label: 'Privacy' },
    { link: '#', label: 'Terms' },
  ];

  public ngOnInit(): void {}
}
