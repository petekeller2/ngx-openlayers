import { Component, OnDestroy, OnInit } from '@angular/core';
import { layer, source } from 'openlayers';
import { MapComponent } from '../map.component';
import { LayerComponent } from './layer.component';

@Component({
  selector: 'aol-layer-image',
  template: `<ng-content></ng-content>`
})
export class LayerImageComponent extends LayerComponent implements OnInit, OnDestroy {
  public source: source.Image;

  constructor(map: MapComponent) {
    super(map);
  }

  ngOnInit() {
    this.instance = new layer.Image(this);
    super.ngOnInit();
  }
}
