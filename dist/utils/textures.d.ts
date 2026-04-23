/**
 * Creates a new texture.
 *
 * This requires that the data are unsigned 8-bit integers for each channel. Based on the size of
 * the data, we determine whether they are RGB or RGBA; other formats are not supported and will
 * raise an error.
 *
 * Values are clamped to the edges at both S- and T-boundaries, and interpolation for minification
 * and magnification is done linearly.
 *
 * @param uniform uniform to bind the texture to.
 * @param data data to assign to the texture, must be unsigned 8-bit integers.
 * @param width width of the texture.
 * @param height height of the texture.
 * @returns initialised and bound texture.
 */
export declare function createTexture(gl: WebGL2RenderingContext, filter: number, data: Uint8Array | Uint8ClampedArray | ImageBitmap, width: number, height: number): WebGLTexture;
