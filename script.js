function progress(id, x, y, radius, sDeg, eDeg) {
    // Arc parameters
    const cx = x, cy = y, r = radius; // Circle center and radius for arc
    const startAngleDeg = sDeg;        // Where arc starts (degrees, 0 at 3 o'clock)
    const endAngleDeg = eDeg;        // Where arc ends
    // Convert degrees to radians
    const startRad = (startAngleDeg - 90) * Math.PI / 180; // Subtract 90 to rotate to SVG 12 o'clock
    const endRad = (endAngleDeg - 90) * Math.PI / 180;
    // Polar to cartesian conversion
    // Arc start point
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    // Arc end point
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    // Large arc flag (true if arc > 180°)
    const largeArcFlag = (startAngleDeg - endAngleDeg) > 180 ? "1" : "0";
    const sweepFlag = (endAngleDeg - startAngleDeg) > 0 ? "1" : "0";
    // SVG arc path
    const arcPath = `M ${x1},${y1} A ${r},${r} 0 ${largeArcFlag} ${sweepFlag} ${x2},${y2}`;
    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y

    document.getElementById(id).setAttribute('d', arcPath);

    console.log("eaesdfas");
}