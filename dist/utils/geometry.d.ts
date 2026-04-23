import { ShaderProgram } from './shader-program';
export declare function createRectangleVertexArray(program: ShaderProgram, xMin: number, xMax: number, yMin: number, yMax: number, doFlipV: boolean, positionAttribute: string, vertexCoordAttribute: string): [WebGLBuffer, WebGLBuffer, WebGLVertexArrayObject];
