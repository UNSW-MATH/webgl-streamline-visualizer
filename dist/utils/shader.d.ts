type ShaderType = WebGL2RenderingContext['VERTEX_SHADER'] | WebGL2RenderingContext['FRAGMENT_SHADER'];
declare class Shader {
    readonly gl: WebGL2RenderingContext;
    readonly shader: WebGLShader;
    private hasCompileAttempt;
    constructor(gl: WebGL2RenderingContext, type: ShaderType, source: string);
    destruct(): void;
    compile(): void;
}
export declare class VertexShader extends Shader {
    constructor(gl: WebGL2RenderingContext, source: string);
}
export declare class FragmentShader extends Shader {
    constructor(gl: WebGL2RenderingContext, source: string);
}
export {};
