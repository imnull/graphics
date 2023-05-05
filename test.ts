import { TPoint } from './src/point'
import { polyIncludes } from './src/poly'
import { cross } from './src/segment'

const points = [[0,2],[2,0],[0,0],[2,2]] as TPoint[]

console.log(cross(points[0], points[1], points[2], points[3]))

const poly: TPoint[] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

console.log(polyIncludes([0, 0], poly[0], poly[1], poly[2], poly[3]))