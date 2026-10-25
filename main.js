import { grades } from './grades.js'
import { calculateAverage } from './calculateAverage.js'
import { findTopStudent } from './findTopStudent.js'
import { filterFailed } from './filterFailed.js'
import { addLetterGrade } from './addLetterGrade.js'

console.log("Средний балл группы:", calculateAverage(grades))
console.log("Лучший студент:", findTopStudent(grades))
console.log("Список должников:", filterFailed(grades, 60))
console.log("Итоговый массив с буквенными оценками:", addLetterGrade(grades))