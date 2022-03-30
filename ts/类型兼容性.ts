// 类型兼容性
// 两个对象具有相同结构，则认为他们属于同一类型
class Point {x: number; y: number}
class Point2D {x: number; y: number}
class Point3D {x: number; y: number; z: number}
const p: Point = new Point2D() // 相同结构
const p1: Point = new Point3D() // 多的可以兼容少的
// const p2: Point3D = new Point() // 报错


// 接口
interface Student {x: number}
interface StudentHight {x: number}
let s1: Student
let s2: StudentHight = s1
interface StudentMax {x: number; y: number}
let s3: StudentMax
s2 = s3
// s3 = s2 报错 多的不兼容少的
