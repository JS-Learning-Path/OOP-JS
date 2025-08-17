class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  getAverage() {
    if (this.grade.length === 0) {
      throw new Error("No grades available to calculate average.");
    } else {
      const total = this.grade.reduce((sum, grade) => sum + grade, 0);
      return total / this.grade.length;
    }
  }
}
const student1 = new Student("John", 21, [85, 90, 78]);
const student2 = new Student("Jonathan", 19, [99, 34, 11]);
console.log(student1.getAverage());
console.log(student2.getAverage());
