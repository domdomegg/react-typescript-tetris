export type Square = string | undefined;

export type Coordinate = {
    x: number;
    y: number;
}

export type Shape = {
    bottomLeft: Coordinate;
    color: string;
    getCoordinates: (shape: Shape) => Coordinate[];
    rotate: (shape: Shape) => Shape;
}

export type GameState = {
    board: Square[][];
    current: Shape;
    ended: boolean;

    frameNumber: number;
    onFrame?: (frameNumber: number) => void;
}