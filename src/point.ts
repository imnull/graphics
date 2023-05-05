export type TPoint = [number, number]

export const coincide = (x0: number, y0: number, x1: number, y1: number) => {
    return x0 === x1 && y0 === y1
}
export const Coincide = (p0: TPoint, p1: TPoint) => coincide(p0[0], p0[1], p1[0], p1[1])

export const xmultiply = (x0: number, y0: number, x1: number, y1: number) => x0 * y1 - x1 * y0
export const Xmultiply = (p0: TPoint, p1: TPoint) => xmultiply(p0[0], p0[1], p1[0], p1[1])

export const subtract = (x0: number, y0: number, x1: number, y1: number): TPoint => [x1 - x0, y1 - y0]
export const Subtract = (p0: TPoint, p1: TPoint): TPoint => subtract(p0[0], p0[1], p1[0], p1[1])

export const center = (x0: number, y0: number, x1: number, y1: number): TPoint => [(x0 + x1) / 2, (y0 + y1) / 2]
export const Center = (p0: TPoint, p1: TPoint): TPoint => center(p0[0], p0[1], p1[0], p1[1])

export const distance = (x0: number, y0: number, x1: number, y1: number) => {
    const [x, y] = subtract(x0, y0, x1, y1)
    return Math.sqrt(x * x + y * y)
}
export const Distance = (p0: TPoint, p1: TPoint) => distance(p0[0], p0[1], p1[0], p1[1])

export const angle = (x0: number, y0: number, x1: number, y1: number) => {
    const [x, y] = subtract(x0, y0, x1, y1)
    let a = Math.atan2(y, x)
    if(a < 0) a += Math.PI * 2
    return a
}
export const Angle = (p0: TPoint, p1: TPoint) => angle(p0[0], p0[1], p1[0], p1[1])


export const move = (x: number, y: number, a: number, d: number): TPoint => [x + d * Math.cos(a), y + d * Math.sin(a)]
export const Move = (p0: TPoint, p1: TPoint) => move(p0[0], p0[1], p1[0], p1[1])