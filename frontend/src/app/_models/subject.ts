import { Teacher } from "./teacher"

export class Subject {
    public id:  string = ''
    public name: string = ''
    public neptun: string = ''
    public credit: number = 0
    public exam: boolean = false
    public image: string = ''
    public creatorName: string = ''
    public subjectTeachedBy: Array<Teacher> = []

    public createTeachers(teacherList: Array<any>) {
        teacherList.map((x:any) => {
            let teacher = new Teacher()
            teacher.id = x.id
            teacher.name = x.name
            teacher.neptun = x.neptun
            teacher.image = x.image
            teacher.creatorName = teacher.creatorName
            this.subjectTeachedBy.push(teacher)
        })
    }
}