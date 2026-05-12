bool is_missing_velocity(vec4 raw) {
    // Alpha channel carries validity: 0.0 = nodata, 1.0 = fully valid.
    // Treat pixels with very low alpha as missing.
    return raw.a < 0.004;  // ~1/255
}
