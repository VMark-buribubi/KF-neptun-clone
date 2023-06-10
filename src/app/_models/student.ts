import { Subject } from "./subject"

export class Student {
    public id:  string = ''
    public name: string = ''
    public neptun: string = ''
    public sumcredit: number = 0
    public image: string = ''
    public creatorName: string = ''
    public studiedSubjects: Array<Subject> = []

    public createSubjects(subjectList: Array<any>) {
        subjectList.map((x:any) => {
            let subject = new Subject()
            subject.id = x.id
            subject.name = x.name
            subject.neptun = x.neptun
            subject.credit = x.credit
            subject.exam = x.exam
            subject.image = x.image
            subject.creatorName = x.creatorName
            this.studiedSubjects.push(subject)
        })
    }
}