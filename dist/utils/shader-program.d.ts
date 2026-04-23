import type { FragmentShader, VertexShader } from './shader';
/**
 * A WebGL2 shader program.
 *
 * This also contains the locations of all its active attributes and uniforms.
 */
export declare class ShaderProgram {
    readonly gl: WebGL2RenderingContext;
    readonly program: WebGLProgram;
    private vertexShader;
    private fragmentShader;
    private isLinked;
    private attributes;
    private uniforms;
    constructor(gl: WebGL2RenderingContext, vertexShader: VertexShader, fragmentShader: FragmentShader, transformFeedbackVaryings?: string[]);
    destruct(): void;
    link(): Promise<void>;
    use(): void;
    getAttributeLocation(name: string): number;
    getUniformLocation(name: string): WebGLUniformLocation;
    private waitForLinking;
    private checkLinkStatus;
    private updateActiveAttributes;
    private updateActiveUniforms;
}
/**
 * Creates and fills a WebGL2 buffer.
 *
 * @param gl WebGL2 rendering context.
 * @param data values to fill the buffer with.
 * @returns filled WebGL2 buffer.
 */
export declare function createAndFillStaticBuffer(gl: WebGL2RenderingContext, data: AllowSharedBufferSource): WebGLBuffer;
/**
 * Binds an N-dimensional (floating-point) buffer to an attribute.
 *
 * @param gl WebGL2 rendering context.
 * @param buffer buffer to bind to the attribute.
 * @param attribute index of the attribute to bind.
 * @param numComponents number of components of the attribute (e.g. 2 for a vec2)
 */
export declare function bindAttribute(gl: WebGL2RenderingContext, buffer: WebGLBuffer, attribute: number, numComponents: number): void;
/**
 * Binds a texture to a texture unit and uniform.
 *
 * @param program Shader program.
 * @param uniform Name of the uniform to bind to.
 * @param unit Texture unit to use.
 * @param texture Texture to bind.
 */
export declare function bindTexture(program: ShaderProgram, uniform: string, unit: number, texture: WebGLTexture): void;
