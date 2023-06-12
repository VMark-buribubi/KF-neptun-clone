import { Subject } from "./subject"

export class Student {
    public id:  string = ''
    public name: string = ''
    public neptun: string = ''
    public sumcredit: number = 0
    public image: string = ''
    public Subjects: Array<Subject> = []

    public createSubjects(subjectList: Array<any>) {
        if (subjectList) {
          subjectList.map((x: any) => {
            let subject = new Subject();
            subject.id = x.id;
            subject.name = x.name;
            subject.neptun = x.neptun;
            subject.credit = x.credit;
            subject.exam = x.exam;
            subject.image = x.image;
            this.Subjects.push(subject);
          });
        }
      }
}