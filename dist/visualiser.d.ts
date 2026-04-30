import { StreamlineStyle } from './render';
import { VelocityImage } from './utils/wms';
import { Colormap } from './utils/colormap';
import type { BoundingBoxScaling } from './render/final';
export declare enum TrailParticleShape {
    Circle = "circle",
    Rectangle = "rectangle"
}
export interface TrailParticleOptions {
    shape: TrailParticleShape;
    aspectRatio?: number;
    doRotate?: boolean;
}
export interface StreamlineVisualiserOptions {
    style: StreamlineStyle;
    particleSize: number;
    speedFactor: number;
    fadeAmountPerSecond: number;
    maxDisplacement: number;
    maxAge: number;
    growthRate?: number;
    speedExponent?: number;
    particleColor?: string;
    spriteUrl?: URL;
    trailParticleOptions?: TrailParticleOptions;
    particleOverlayOpacity?: number;
}
export declare function determineDoRotateParticles(options: Partial<StreamlineVisualiserOptions>): boolean;
export declare class StreamlineVisualiser {
    private readonly MAX_NUM_SUBSTEPS;
    private readonly DEFAULT_GROWTH_RATE;
    private gl;
    private width;
    private height;
    private isRendering;
    private _numParticles;
    private programRenderParticles;
    private _options;
    private textureRenderer;
    private particlePropagator;
    private particleRenderer;
    private finalRenderer;
    private spriteRenderer;
    private scaling;
    private previousParticleTexture;
    private currentParticleTexture;
    private velocityImage;
    private colorMap;
    private dtMin;
    constructor(gl: WebGL2RenderingContext, width: number, height: number, numParticles: number, options: StreamlineVisualiserOptions);
    private get widthParticleDataTexture();
    private get heightParticleDataTexture();
    private get numParticlesAllocate();
    private get particleTextureSize();
    get isInitialised(): boolean;
    get options(): StreamlineVisualiserOptions;
    get numParticles(): number;
    initialise(colormap: Colormap): Promise<void>;
    start(): void;
    stop(): void;
    destruct(): void;
    setScaling(scaling: BoundingBoxScaling): void;
    setDimensions(width: number, height: number): void;
    setNumParticles(numParticles: number): void;
    setColorMap(colorMap: Colormap): void;
    setVelocityImage(velocityImage: VelocityImage, doResetParticles: boolean): void;
    updateOptions(options: Partial<StreamlineVisualiserOptions>): Promise<void>;
    renderFrame(dt: number): void;
    /**
     * Re-draws the final composite pass with the current scaling, without
     * advancing particles. Use this to render world copies at different offsets:
     * call setScaling() with the shifted bbox, then renderCopy().
     *
     * Must be called after renderFrame() in the same frame. Uses
     * previousParticleTexture because renderFrame() swaps textures at the end.
     */
    renderCopy(): void;
    private compileShaderPrograms;
    private computeMinimumTimeStep;
    private createParticleTexture;
    private createSpriteTexture;
    private createZeroTexture;
    private swapParticleTextures;
    private resetParticles;
    private updateVelocityImage;
    private static computeSpeedCurve;
}
