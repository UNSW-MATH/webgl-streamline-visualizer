import { ShaderProgram } from '../utils/shader-program';
export declare class TextureRenderer {
    private program;
    private positionBuffer;
    private texCoordBuffer;
    private vertexArray;
    private previousFramebuffer;
    private currentFramebuffer;
    constructor(program: ShaderProgram);
    initialise(): void;
    destruct(): void;
    resetParticleTextures(previousParticleTexture: WebGLTexture, currentParticleTexture: WebGLTexture): void;
    render(inputTexture: WebGLTexture, fadeAmount: number): void;
    swapBuffers(): void;
    private setupFramebuffer;
}
