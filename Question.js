class Question {

  constructor() {
    this.title = createElement('h1');
    this.sub = createElement('h3');
    this.input1 = createInput("What's Your Nick-Name?.");
    this.input2 = createInput("Your Answer Number?.");
    this.button = createButton('Submit');
    this.reset = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
  }

  display(){
    this.title.html("My Quiz Game");
    this.title.position(350, 10);

    this.sub.html("You can reload the page after pressing 'reset' button to play again!");
    this.sub.position(336, 397);

    this.question.html("Question:- What does 'GIF' stands for?" );
    this.question.position(150, 82);
    this.option1.html("1: Graphic Interchange Format" );
    this.option1.position(150, 102);
    this.option2.html("2: Graphic Internet Format" );
    this.option2.position(150, 122);
    this.option3.html("3: Graphic Interactive Format " );
    this.option3.position(150, 142);
    this.option4.html("4: None Of The Above" );
    this.option4.position(150, 162);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(600, 318);
    this.reset.position(710, 318);

    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.mousePressed(()=>{
      quiz.update(0);
      contestant.updateCount(0);
      database.ref('/').update({
        contestants: null
      });
    });  
  }
}
