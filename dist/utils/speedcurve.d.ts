/**
 * Speed curve of the form factor * speed ^ exponent.
 */
export declare class SpeedCurve {
    private _exponent;
    private _factor;
    private _baseFactor;
    constructor(exponent: number, factor: number, baseFactor: number);
    /** Exponent of the curve. */
    get exponent(): number;
    /** Factor applied after exponentiation. */
    get factor(): number;
    /** Base speed factor
     *
     *  This is the multiplication factor that would be applied if the exponent
     *  would be 1.
     */
    get baseFactor(): number;
    /**
     * Returns a speed curve from an exponent and a speed.
     *
     * The specified speed is used to compute the factor of the curve. At this
     * speed, the transformed speed is equal to the original speed.
     *
     * @param exponent  exponent applied to the speed.
     * @param factor factor applied to the transformed speed.
     * @param speed  speed where the transformation does not change the speed
     */
    static fromExponentFactorAndSpeed(exponent: number, factor: number, speed: number): SpeedCurve;
}
