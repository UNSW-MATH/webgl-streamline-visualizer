import { SpeedCurve } from '../utils/speedcurve';
import { ShaderProgram } from '../utils/shader-program';
import { VelocityImage } from '../utils/wms';
export declare class ParticleBuffers {
    private gl;
    readonly data: WebGLBuffer;
    readonly age: WebGLBuffer;
    constructor(gl: WebGL2RenderingContext, numParticlesAllocate: number);
    destroy(): void;
    initialise(initialCoordinates: Float32Array, initialAges: Float32Array): void;
    resetAges(newAges: Float32Array): void;
    private static createBuffer;
}
export declare class ParticlePropagator {
    private program;
    private width;
    private height;
    private numParticles;
    private numParticlesAllocate;
    private maxAge;
    private speedCurve;
    private inputBuffers;
    private outputBuffers;
    private transformFeedback;
    private velocityImage;
    private velocityTexture;
    constructor(program: ShaderProgram, width: number, height: number, numParticles: number, numParticlesAllocate: number, maxAge: number, speedCurve: SpeedCurve);
    get buffers(): ParticleBuffers;
    initialise(): void;
    destruct(): void;
    setDimensions(width: number, height: number): void;
    setVelocityImage(velocityImage: VelocityImage): void;
    setNumParticles(numParticles: number, numParticlesAllocate: number): void;
    setMaxAge(maxAge: number): void;
    setSpeedCurve(speedCurve: SpeedCurve): void;
    resetBuffers(): void;
    resetAges(): void;
    update(dt: number): void;
    private bindUniforms;
    private swapBuffers;
    private generateInitialParticleData;
    private generateInitialParticleAges;
    private static randomClipCoords;
}
