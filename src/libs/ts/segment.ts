import {
    TPoint,
    Xmultiply as PointXmultiply,
    Subtract as PointSubstract,
    Coincide as PointCoincide,
} from "./point";

export type TSegment = [TPoint, TPoint]
export type TRectangle = { left: number; right: number; top: number; bottom: number; width: number; height: number; }

export const coincide = (a0: TPoint, b0: TPoint, a1: TPoint, b1: TPoint) => {
    return PointCoincide(a0, a1) && PointCoincide(b0, b1)
}
export const Coincide = (s0: TSegment, s1: TSegment) => coincide(s0[0], s0[1], s1[0], s1[1])

export const xmultiply = (a0: TPoint, b0: TPoint, a1: TPoint, b1: TPoint) => {
    const p1 = PointSubstract(a1, a0)
    const p2 = PointSubstract(a1, b0)
    const p3 = PointSubstract(a1, b1)
    return PointXmultiply(p1, p3) * PointXmultiply(p2, p3)
}
export const Xmultiply = (s0: TSegment, s1: TSegment) => xmultiply(s0[0], s0[1], s1[0], s1[1])

const quickCheckPointInSegment = (a: TPoint, b: TPoint, c: TPoint) => {
    const [x0, y0] = PointSubstract(a, c)
    const [x1, y1] = PointSubstract(c, b)
    // if((x0 === 0 && y0 === 0) || (x1 === 0 && y1 === 0)) {
    if(x0 === 0 && y0 === 0) {
        // 相交于端点
        // 仅计入a点重合
        return true
    }
    // console.log({ x0, y0, x1, y1, c })
    return Math.sign(x0) === Math.sign(x1) && Math.sign(y0) === Math.sign(y1)
}

export const cross = (a0: TPoint, b0: TPoint, a1: TPoint, b1: TPoint): TPoint | false => {
    const p2 = PointSubstract(a0, b0)
    const p3 = PointSubstract(a1, b1)
    const B = PointXmultiply(p2, p3)
    if(B == 0) {    // 平行
        // console.log('parallel', { a0, b0, a1, b1 })
        return false
    }
    const p1 = PointSubstract(a0, a1)
    const A = PointXmultiply(p1, p3)
    const t = A / B
    const [x, y] = PointSubstract(a0, b0)
    const c = [a0[0] + x * t, a0[1] + y * t] as TPoint
    if(quickCheckPointInSegment(a0, b0, c) && quickCheckPointInSegment(a1, b1, c)) {
        return c
    }
    // console.log('cross out', { a0, b0, a1, b1, c })
    return false
}
export const Cross = (s0: TSegment, s1: TSegment) => cross(s0[0], s0[1], s1[0], s1[1])

export const rectangle = (a: TPoint, b: TPoint) => {
    const left = Math.min(a[0], b[0])
    const top = Math.min(a[1], b[1])
    const width = Math.abs(b[0] - a[0])
    const height = Math.abs(b[1] - a[1])
    return { left, top, right: left + width, bottom: top + height, width, height } as TRectangle
}
export const Rectangle = (s: TSegment) => rectangle(s[0], s[1])

export const rectIncludes = (rect: TRectangle, c: TPoint) => {
    return c[0] >= rect.left && c[0] <= rect.right && c[1] >= rect.top && c[1] <= rect.bottom
}