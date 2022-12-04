interface rotation {
    rotateVec: vec3
    rotateDeg: number
}

export interface DrawParams {
    scale?: vec3
    rotate?: rotation[]
    translate?: vec3
}