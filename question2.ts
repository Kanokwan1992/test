function getClockAngle(hh_mm:string):number {
    let degree
    let [h,m] = hh_mm.split(':')
    let hour = Number(h)
    let min = Number(m)
    // หาเลขที่เข็มอยู่
    if(hour>12) hour-=12
    // ใช้สูตร |30(h)-5.5(m)|
    degree = ((30*hour)-(5.5*min))
    // เปลี่ยนลบเป็นบวก
    if(degree < 0)degree = - degree 
    // หามุมเล็ก
    if(degree > 180)degree = 360 - degree
    return degree
  }
  console.log(getClockAngle("00:01"))