export interface Transformable {
    trans_mat: mat4;
    transformTo: (t: Transformable) => this;
}