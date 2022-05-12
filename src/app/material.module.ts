import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [MatIconModule, MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}