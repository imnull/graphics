mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, graphics!");
}

#[wasm_bindgen]
pub fn xmultiply(x0: f64, y0: f64, x1: f64, y1: f64) -> f64 {
    return x0 * y1 - x1 * y0;
}

#[wasm_bindgen]
pub struct TPoint {
    x: f64,
    y: f64,
}

#[wasm_bindgen]
pub fn Xmultiply(p0: (f64, f64), p1: (f64, f64)) -> f64 {
    return p0[0]
}