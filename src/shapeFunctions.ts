import { Shape } from "./types";

const L1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const L1r = (shape: Shape) => { shape.getCoordinates = L2g; shape.rotate = L2r; return shape; };

const L2g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
];
const L2r = (shape: Shape) => { shape.getCoordinates = L3g; shape.rotate = L3r; return shape; };

const L3g = (shape: Shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const L3r = (shape: Shape) => { shape.getCoordinates = L4g; shape.rotate = L4r; return shape; };

const L4g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const L4r = (shape: Shape) => { shape.getCoordinates = L1g; shape.rotate = L1r; return shape; };

const R1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
];
const R1r = (shape: Shape) => { shape.getCoordinates = R2g; shape.rotate = R2r; return shape; };

const R2g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
];
const R2r = (shape: Shape) => { shape.getCoordinates = R3g; shape.rotate = R3r; return shape; };

const R3g = (shape: Shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const R3r = (shape: Shape) => { shape.getCoordinates = R4g; shape.rotate = R4r; return shape; };

const R4g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const R4r = (shape: Shape) => { shape.getCoordinates = R1g; shape.rotate = R1r; return shape; };

const Og = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const Or = (shape: Shape) => { return shape; };

const I1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 3 },
];
const I1r = (shape: Shape) => { shape.getCoordinates = I2g; shape.rotate = I2r; return shape; };

const I2g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 3, y: shape.bottomLeft.y },
];
const I2r = (shape: Shape) => { shape.getCoordinates = I1g; shape.rotate = I1r; return shape; };

// S, Z, T

const S1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1 },
];
const S1r = (shape: Shape) => { shape.getCoordinates = S2g; shape.rotate = S2r; return shape; };

const S2g = (shape: Shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2 },
];
const S2r = (shape: Shape) => { shape.getCoordinates = S1g; shape.rotate = S1r; return shape; };

const Z1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
];
const Z1r = (shape: Shape) => { shape.getCoordinates = Z2g; shape.rotate = Z2r; return shape; };

const Z2g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
];
const Z2r = (shape: Shape) => { shape.getCoordinates = Z1g; shape.rotate = Z1r; return shape; };

const T1g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const T1r = (shape: Shape) => { shape.getCoordinates = T2g; shape.rotate = T2r; return shape; };

const T2g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 2},
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
];
const T2r = (shape: Shape) => { shape.getCoordinates = T3g; shape.rotate = T3r; return shape; };

const T3g = (shape: Shape) => [
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 2, y: shape.bottomLeft.y - 1},
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
];
const T3r = (shape: Shape) => { shape.getCoordinates = T4g; shape.rotate = T4r; return shape; };

const T4g = (shape: Shape) => [
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 1 },
    { x: shape.bottomLeft.x + 1, y: shape.bottomLeft.y - 2 },
    { x: shape.bottomLeft.x, y: shape.bottomLeft.y - 1 },
];
const T4r = (shape: Shape) => { shape.getCoordinates = T1g; shape.rotate = T1r; return shape; };


const shapeFunctions = [
    { getCoordinates: L1g, rotate: L1r },
    { getCoordinates: R1g, rotate: R1r },
    { getCoordinates: Og, rotate: Or },
    { getCoordinates: I1g, rotate: I1r },
    { getCoordinates: S1g, rotate: S1r },
    { getCoordinates: Z1g, rotate: Z1r },
    { getCoordinates: T1g, rotate: T1r },
]

export default shapeFunctions;