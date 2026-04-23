/**
 * An RGB color.
 */
export declare class Color {
    r: number;
    g: number;
    b: number;
    constructor(r: number, g: number, b: number);
    /**
     * Parses a color from a hexadecimal color string.
     * @param hex hexadecimal color string.
     * @returns color parsed from the hexadecimal color string.
     */
    static fromHex(hex: string): Color;
}
/**
 * A colormap.
 *
 * Its values may be non-uniformly spaced.
 */
export declare class Colormap {
    private values;
    private colors;
    constructor(values: number[], colors: Color[]);
    /** Number of points in the colormap. */
    get num(): number;
    /** Start value of the colormap. */
    get start(): number;
    /** End value of the colormap. */
    get end(): number;
    /** Range of the colormap (i.e. difference between start and end). */
    get range(): number;
    /**
     * Creates a 1D texture from this colormap.
     *
     * The colormap as obtained from the GetLegendGraphic FEWS WMS endpoint may be non-uniformly
     * spaced. This function linearly interpolates this non-uniformly spaced colormap to a uniformly
     * spaced texture, from the colormap's start to its end.
     *
     * @param numPoints number of points in the texture.
     * @returns Colour map as a WebGL texture (note: not RGBA).
     */
    toTexture(gl: WebGL2RenderingContext, numPoints: number): WebGLTexture;
    private to1DRGBTextureData;
}
