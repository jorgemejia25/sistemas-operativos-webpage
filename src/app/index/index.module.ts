import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';

@NgModule({
  declarations: [HeaderComponent, MainComponent, VisionMisionComponent, ObjetivosComponent],
  imports: [CommonModule, IndexRoutingModule, MaterialModule],
})
export class IndexModule {}
