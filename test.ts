import { TPoint } from './src/libs/ts/point'
import { polyIncludes } from './src/libs/ts//poly'
import { cross } from './src/libs/ts//segment'

const points = [[0,2],[2,0],[0,0],[2,2]] as TPoint[]

console.log(cross(points[0], points[1], points[2], points[3]))

const poly: TPoint[] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
]

console.log(polyIncludes([0, 0], poly[0], poly[1], poly[2], poly[3]))