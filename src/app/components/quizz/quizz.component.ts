import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  title:string = "Questão selecionada";

  questions:any = "";
  questionSelected:any = "";

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = true;

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title
      this.questions = quizz_questions.questions
      this.questionIndex = 0;
      this.questionSelected = this.questions[this.questionIndex]
      this.questionMaxIndex = this.questions.length

      console.log(this.questionIndex)
      console.log(this.questionMaxIndex)
    }
  }

  userChoice(value: string) {
    this.answers.push(value)
    this.nextStep();
  }

  nextStep() {
    this.questionIndex+=1;
    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex]
    } else {
      this.finished = true;
    }
  }

}
