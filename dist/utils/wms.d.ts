import { Colormap } from './colormap';
export type TransformRequestFunction = (request: Request) => Promise<Request>;
export declare class VelocityImage {
    private data;
    readonly width: number;
    readonly height: number;
    readonly uOffset: number;
    readonly vOffset: number;
    readonly uScale: number;
    readonly vScale: number;
    constructor(data: Uint8Array | Uint8ClampedArray, width: number, height: number, uOffset: number, vOffset: number, uScale: number, vScale: number);
    maxVelocity(): [number, number];
    toTexture(gl: WebGL2RenderingContext, interpolate: boolean): WebGLTexture;
}
/**
 * Fetches a colormap for a WMS layer from the FEWS web services.
 *
 * @param baseUrl base URL of the FEWS WMS service.
 * @param layer layer to obtain the legend for.
 * @returns Colormap fetched from the FEWS WMS service.
 */
export declare function fetchWMSColormap(baseUrl: string, layer: string, colorScaleRange?: [number, number], signal?: AbortSignal, transformRequest?: TransformRequestFunction): Promise<Colormap>;
export declare function fetchWMSAvailableTimesAndElevations(baseUrl: string, layerName: string, signal?: AbortSignal, transformRequest?: TransformRequestFunction): Promise<{
    times: string[];
    elevationBounds: [number, number] | null;
}>;
export interface FewsGeoTiffMetadata {
    BitsPerSample?: number[];
    ImageWidth?: number;
    ImageLength?: number;
    ModelTiepoint?: [number, number];
    ModelPixelScale?: [number, number];
}
export declare function fetchWMSVelocityField(baseUrl: string, layer: string, time: string, boundingBox: [number, number, number, number], width: number, height: number, style?: string, useDisplayUnits?: boolean, useLastValue?: boolean, elevation?: number, signal?: AbortSignal, transformRequest?: TransformRequestFunction): Promise<VelocityImage>;
export declare function fetchGeoTiffVelocityField(url: URL, signal?: AbortSignal, transformRequest?: TransformRequestFunction): Promise<VelocityImage>;
