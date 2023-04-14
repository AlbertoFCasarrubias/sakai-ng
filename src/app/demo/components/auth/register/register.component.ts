import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import * as i18nIsoCountries from 'i18n-iso-countries';
import { Dropdown } from '../../../../models/common';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class RegisterComponent {
  valCheck: string[] = ['remember'];

  password!: string;

  countries: SelectItem[] = [];

  constructor(public layoutService: LayoutService) {
    i18nIsoCountries.registerLocale(require('i18n-iso-countries/langs/es.json'));
    Object.entries(i18nIsoCountries.getNames('es', { select: 'official' })).forEach((element, index) => {
      this.countries.push({ label: element[1], value: { id: index, name: element[1], code: element[0] } });
    });
  }
}
