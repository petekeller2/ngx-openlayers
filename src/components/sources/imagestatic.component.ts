import { Component, Host, Input, OnInit, forwardRef } from '@angular/core';
import { source, Extent, ImageLoadFunctionType, ProjectionLike, Size, AttributionLike } from 'openlayers';
import { LayerImageComponent } from '../layers';
import { SourceComponent } from './source.component';


@Component({
  selector: 'aol-source-imagestatic',
  template: `<div class="aol-source-imagestatic"></div>`,
  providers: [
    { provide: SourceComponent, useExisting: forwardRef(() => SourceImageStaticComponent) }
  ]
})
export class SourceImageStaticComponent extends SourceComponent implements OnInit {
  instance: source.Image;

  @Input() attributions: AttributionLike;
  @Input() crossOrigin: string;
  @Input() imageExtent: Extent;
  @Input() imageLoadFunction: ImageLoadFunctionType;
  @Input() projection: ProjectionLike;
  @Input() imageSize: Size;
  @Input() url: string;

  constructor(@Host() layer: LayerImageComponent) {
    super(layer);
  }

  OnInit() {
    this.instance = new source.ImageStatic(this);
    this.host.instance.setSource(this.instance);
  }
}
