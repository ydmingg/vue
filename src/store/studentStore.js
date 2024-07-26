import { defineStore } from "pinia"

export const useStudentStore = defineStore("student", {
    state: () => ({
        students: [
            { id: 1, name: "张三", age: 18 },
            { id: 2, name: "李四", age: 19 },
            { id: 3, name: "王五", age: 20 },
        ],
    }),
    getters: {
        getStudentById: (state) => (id) => {
            return state.students.find((item) => item.id === id)
        },
    },
    actions: {
        addStudent(name, age) {
            this.students.push({ id: Date.now(), name, age })
            console.log("添加成功", this.students);
        },
        deleteStudent(id) {
            this.students = this.students.filter((item) => item.id !== id)
            console.log("删除成功", this.students);
        },
    },
})