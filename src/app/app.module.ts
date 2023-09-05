import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { EventWithDataComponent } from './event-with-data/event-with-data.component';
import { TwowayComponent } from './twoway/twoway.component';
import { InputParentChildComponent } from './input-parent-child/input-parent-child.component';
import { ChildComponent } from './input-parent-child/child/child.component';
import { OutputChildParentComponent } from './output-child-parent/output-child-parent.component';
import { ChildrenComponent } from './Output-child-parent/children/children.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    EventWithDataComponent,
    TwowayComponent,
    InputParentChildComponent,
    ChildComponent,
    OutputChildParentComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
