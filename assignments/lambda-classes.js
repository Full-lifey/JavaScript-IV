// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor (instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(studentAttributes) {
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject))
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} accounces to ${slackChannel}, @${slackChannel} standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'C++',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const dan = new Instructor({
    name: 'Dan',
    location: 'Denver',
    age: 39,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the kitties!`
});

const joel = new Student({
    name: 'Joel',
    location: 'Lafayette',
    age: 34,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `You just don't see that every day`,
    previousBackground: 'Sys Admin',
    className: 'Web20',
    favSubjects: ['Javascript', 'Python', 'Bitcoin']
}); 

const jared = new Student({
    name: 'Jared',
    location: 'Iowa',
    age: 37,
    favLanguage: 'C#',
    specialty: 'Front-end',
    catchPhrase: `I'm screwed for the sprint challenge`,
    previousBackground: 'Land surveyer',
    className: 'Web20',
    favSubjects: ['HTML', 'CSS', 'Golf']
}); 

const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'Salt Lake City',
    age: 28,
    favLanguage: 'React',
    specialty: 'UX',
    catchPhrase: `Don't worry, you are doing fine!`,
    gradClassName: 'Web16',
    favInstructor: 'Josh'
});

const ian = new ProjectManager({
    name: 'Ian',
    location: 'Florida Pan Handle',
    age: 29,
    favLanguage: 'Javascript',
    specialty: 'Android Dev',
    catchPhrase: `Have you thought of it this way?`,
    gradClassName: 'Web17',
    favInstructor: 'dan'
});

console.log(fred.name);
console.log(dan.catchPhrase)
console.log(dan.grade(joel, 'Javascript'));
console.log(joel.PRAssignment('Javascript IV'));
console.log(jared.sprintChallenge('Intro to Javascript'));
console.log(ryan.standUp('#web20_ryan'))
console.log(ryan.debugsCode(jared, 'Javascript III'))
console.log(ian.catchPhrase)