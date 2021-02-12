class Question{
    constructor(){
    this.input = createInput('enter your name')
    this.input2 = createInput('enter the option no.')
    this.question = createElement('h3');
    this.question2 = createElement('h3')
    this.option1 = createElement('h4');
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    this.button = createButton('Submit');
    this.heading = createElement('h2');
    }
    hide(){
        this.heading.hide()
        this.input.hide()
        this.input2.hide();
        this.button.hide();
    }
    display(){
     this.heading.html('Quiz')
     this.heading.position(200,20);
     this.input.position(50,300);
     this.input2.position(400,300);
     fill("blue")
     this.question.html('a) 28x^4 / 56x')
     this.question2.html('b) 34x^3 y^3 z^3 / 51xy^2 z^3')
     this.question.position(200,70);
     this.question2.position(200,100)
     this.option1.html('1. a) 2x^2  b) 4x^2/3')
     this.option1.position(200,150);
     this.option2.html('2. a) 2x^3  b) 4x^y/2')
     this.option2.position(200,180);
     this.option3.html('3. a) x^3/2  b) 2x^y/3')
     this.option3.position(200,210);
     this.option4.html('4. a) x^2/2  b) 2x^y')
     this.option4.position(200,240);
     this.button.position(650,300)
     this.button.mousePressed(
         ()=>{
             this.input.hide()
             this.input2.hide()
             this.button.hide();
             this.heading.hide();
             player.name = this.input.value()
             player.option = this.input2.value()
             contestantCount=contestantCount+1
             player.index = contestantCount
             player.update()
             player.updateCount(contestantCount)
             
         }
     )
    }
}