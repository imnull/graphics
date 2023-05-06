import { TPoint } from "./point";
import { Cross, TRectangle, TSegment, rectangle } from "./segment";

export type TPoly = [TPoint, TPoint, TPoint, ...TPoint[]]

export const polyBox = (ps: TPoint[]): TRectangle => {
    if(ps.length < 2) {
        return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }
    } else if(ps.length === 2) {
        return rectangle(ps[0], ps[1])
    }
    let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity
    ps.forEach(p => {
        if(p[0] < left) {
            left = p[0]
        }
        if(p[0] > right) {
            right = p[0]
        }
        if(p[1] < left) {
            top = p[1]
        }
        if(p[1] > bottom) {
            bottom = p[1]
        }
    })
    return { left, right, top, bottom, width: right - left, height: bottom - top }
}

export const polyIncludes = (p: TPoint, a: TPoint, b: TPoint, c: TPoint, ...ps: TPoint[]) => {
    const points: TPoint[] = [a, b, c, ...ps, a]
    const box = polyBox(points)
    const s0: TSegment = [p, [p[0] + box.width * 2, p[1]]]

    const cross_points: TPoint[] = []

    // console.log(11111, points)

    for(let i = 0, len = points.length; i < len - 1; i++) {
        const o = points[i]
        const e = points[i + 1]
        const c = Cross(s0, [o, e])
        if(c) {
            // console.log(22222, [o, e])
            cross_points.push(c)
        }
    }
    // console.log(11111, cross_points)
    return cross_points.length % 2 === 1
}

