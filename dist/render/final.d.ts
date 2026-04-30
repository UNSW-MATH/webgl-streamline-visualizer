import { Colormap } from '../utils/colormap';
import { ShaderProgram } from '../utils/shader-program';
import { VelocityImage } from '../utils/wms';
export interface BoundingBoxScaling {
    scaleX: number;
    scaleY: number;
    offsetX: number;
    offsetY: number;
}
export declare enum StreamlineStyle {
    LightParticlesOnMagnitude = 0,
    DarkParticlesOnMagnitude = 1,
    MagnitudeColoredParticles = 2,
    ColoredParticles = 3
}
export declare class FinalRenderer {
    private static readonly NUM_SEGMENTS_COLORMAP;
    style: StreamlineStyle;
    particleOverlayOpacity: number;
    private program;
    private positionBuffer;
    private texCoordBuffer;
    private vertexArray;
    private velocityImage;
    private colormap;
    private colormapTexture;
    private velocityTexture;
    constructor(program: ShaderProgram, style: StreamlineStyle, colormap: Colormap, particleOverlayOpacity?: number);
    initialise(): void;
    destruct(): void;
    render(particleTexture: WebGLTexture, scaling: BoundingBoxScaling): void;
    setVelocityImage(velocityImage: VelocityImage): void;
    setColorMap(colormap: Colormap): void;
    private bindUniforms;
    private bindTextures;
}
