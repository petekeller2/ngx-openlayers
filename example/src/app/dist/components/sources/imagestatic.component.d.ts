/// <reference types="openlayers" />
import { OnInit } from '@angular/core';
import { source, Extent, ImageLoadFunctionType, ProjectionLike, Size, AttributionLike } from 'openlayers';
import { LayerImageComponent } from '../layers';
import { SourceComponent } from './source.component';
export declare class SourceImageStaticComponent extends SourceComponent implements OnInit {
    instance: source.Image;
    attributions: AttributionLike;
    crossOrigin: string;
    imageExtent: Extent;
    imageLoadFunction: ImageLoadFunctionType;
    projection: ProjectionLike;
    imageSize: Size;
    url: string;
    constructor(layer: LayerImageComponent);
    OnInit(): void;
}
