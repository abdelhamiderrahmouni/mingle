export let DrawingActionKind

;(function(DrawingActionKind) {
    DrawingActionKind["SET_OVERLAY"] = "SET_OVERLAY"
    DrawingActionKind["UPDATE_OVERLAYS"] = "UPDATE_OVERLAYS"
    DrawingActionKind["UNDO"] = "UNDO"
    DrawingActionKind["REDO"] = "REDO"
})(DrawingActionKind || (DrawingActionKind = {}))

export function isCircle(overlay) {
    return overlay.getCenter !== undefined
}

export function isMarker(overlay) {
    return overlay.getPosition !== undefined
}

export function isPolygon(overlay) {
    return overlay.getPath !== undefined
}

export function isPolyline(overlay) {
    return overlay.getPath !== undefined
}

export function isRectangle(overlay) {
    return overlay.getBounds !== undefined
}
