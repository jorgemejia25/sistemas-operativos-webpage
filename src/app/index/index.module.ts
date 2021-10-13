import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IndexRoutingModule } from './index-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { VisionMisionComponent } from './vision-mision/vision-mision.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    VisionMisionComponent,
    ObjetivosComponent,
  ],
  imports: [CommonModule, IndexRoutingModule, MaterialModule],
})
export class IndexModule {}
