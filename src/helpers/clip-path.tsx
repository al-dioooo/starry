export const getBoundingBox = (ref: any) => {
    let bb = ref.current.getBBox()
    let sx = 1 / bb.width
    let sy = 1 / bb.height
    ref.current.setAttribute("transform", `scale(${sx}, ${sy})`)
}