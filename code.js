 

onEvent("start", "click", function( ) {
  setScreen("Youroptions");
});
onEvent("addition", "click", function( ) {
  setScreen("lessona");
});
onEvent("subtraction", "click", function( ) {
  setScreen("sub");
});
onEvent("okay", "click", function( ) {
  setScreen("lessona2");
});
onEvent("Cool!", "click", function( ) {
  setScreen("complexadd");
});
onEvent("splendid", "click", function( ) {
  setScreen("carryove");
});
onEvent("coolokay", "click", function( ) {
  setScreen("videoandproceed");
});
onEvent("video", "click", function( ) {
  open("https://youtu.be/_NN8g2jWIAs");
  
});
onEvent("addquiz", "click", function( ) {
  setScreen("addquiz1");
  setText("text_input1", "");
  setText("text_input2", "");
   
  
});
onEvent("text_input1", "change", function() {
onEvent("Submit", "click", function( ) {
setScreen("addquiz2");
if (getNumber("text_input1")===174) {
  playSound("assets/category_male_voiceover/correct_male.mp3", false);
 
    }
    else{
      playSound("assets/category_male_voiceover/wrong_male.mp3");
      
    }
 });

    });
onEvent("button4", "click", function( ) {
 setScreen("End");
 playSound("assets/category_male_voiceover/wrong_male.mp3");
 
});
onEvent("Simple", "click", function( ) {
 setScreen("End");
 playSound("assets/category_male_voiceover/correct_male.mp3");
});
onEvent("fgc", "click", function( ) {
setScreen("End");
playSound("assets/category_male_voiceover/wrong_male.mp3");
 });
onEvent("End", "click", function( ) {
    setScreen("Youroptions");
 
 });
onEvent("button9", "click", function( ) {
  setScreen("Youroptions");
});
onEvent("Hom", "click", function( ) {
  setScreen("Youroptions"); 
});
onEvent("button10", "click", function( ) {
  setScreen("Home");
});
onEvent("button11", "click", function( ) {
  setScreen("Youroptions");
});
onEvent("button12", "click", function( ) {
  setScreen("lessona2");
});
onEvent("button13", "click", function( ) {
  setScreen("lessona");
});
onEvent("button14", "click", function( ) {
  setScreen("complexadd");
});
onEvent("button15", "click", function( ) {
  setScreen("lessona");
});
onEvent("button16", "click", function( ) {
  setScreen("carryove");
});
onEvent("button1", "click", function( ) {
  setScreen("complexadd");
});
onEvent("button2", "click", function( ) {
  setScreen("videoandproceed");
});
onEvent("button3", "click", function( ) {
  setScreen("carryove");
});
onEvent("button5", "click", function( ) {
  setScreen("videoandproceed");
});
onEvent("button6", "click", function( ) {
  setScreen("addquiz2");
});
onEvent("add", "click", function( ) {
  open("https://youtu.be/VWk8ygxRm54");
});
onEvent("text_input2", "change", function() {
onEvent("Submit3", "click", function( ) {
  if (getNumber("text_input2")===115) {
    playSound("assets/category_male_voiceover/correct_male.mp3", false);
      }
      else{
       
       playSound("assets/category_male_voiceover/wrong_male.mp3");
      }
});

    });
onEvent("Simple", "click", function( ) {
  setScreen("Addquiz3");
});
onEvent("fgc", "click", function( ) {
  setScreen("Addquiz3");
});
onEvent("button4", "click", function( ) {
  setScreen("Addquiz3");
});
onEvent("Submit3", "click", function( ) {
setScreen("addquiz4");
 });
onEvent("button7", "click", function( ) {
setScreen("screen1");
playSound("assets/category_male_voiceover/correct_male.mp3", false);

 });
onEvent("button8", "click", function( ) {
  setScreen("screen1");
  playSound("assets/category_male_voiceover/wrong_male.mp3");
});
onEvent("button17", "click", function( ) {
  setScreen("addquiz1");
  setText("text_input1", "");
  setText("text_input2", "");
});
onEvent("button18", "click", function( ) {
  setScreen("Youroptions");
});
onEvent("button20", "click", function( ) {
  setScreen("simplesub");
});
onEvent("button21", "click", function( ) {
  setScreen("compSub");
});
onEvent("button22", "click", function( ) {
  setScreen("videoandproceed");
});
onEvent("button23", "click", function( ) {
  setScreen("subproceed");
});
onEvent("button24", "click", function( ) {
  setScreen("subproceed");
});
onEvent("button25", "click", function( ) {
  open("https://youtu.be/qM7B2nwpV1M");
});
onEvent("button26", "click", function( ) {
  open("https://youtu.be/FKPl42IkRMw");
});
onEvent("button19", "click", function( ) {
  setScreen("subque1");
  setText("text_input3", "");
  setText("text_input4", "");
});
onEvent("text_input3", "change", function() {
onEvent("Submit4", "click", function( ) {
setScreen("subque2");
 
if (getNumber("text_input3")===31) {
  playSound("assets/category_male_voiceover/correct_male.mp3", false);
    }
    else{
      playSound("assets/category_male_voiceover/wrong_male.mp3");
      
    }
 });
});
onEvent("text_input4", "change", function() {
onEvent("submit5", "click", function( ) {
setScreen("subque2");
if (getNumber("text_input4")===9) {
  playSound("assets/category_male_voiceover/correct_male.mp3", false);
  setScreen("subque3");
    }
    else{
      playSound("assets/category_male_voiceover/wrong_male.mp3");
      setScreen("subque3");
    }
 });
});
onEvent("button30", "click", function( ) {
    playSound("assets/category_male_voiceover/wrong_male.mp3");
    setScreen("finished!");
});
onEvent("button31", "click", function( ) {
  playSound("assets/category_male_voiceover/correct_male.mp3", false);
  setScreen("finished!");
});
onEvent("button32", "click", function( ) {
  playSound("assets/category_male_voiceover/wrong_male.mp3");
  setScreen("finished!");
});
onEvent("button33", "click", function( ) {
  playSound("assets/category_male_voiceover/wrong_male.mp3");
  setScreen("finished!");
});
onEvent("button34", "click", function( ) {
  setScreen("Youroptions");
});
onEvent("button35", "click", function( ) {
  setScreen("subproceed");
  setText("text_input3", "");
  setText("text_input4", "");
});
onEvent("button27", "click", function( ) {
  setScreen("videoandproceed");
  setText("text_input1", "");
  setText("text_input2", "");
});
onEvent("button29", "click", function( ) {
  setScreen("Addquiz3");
});
onEvent("button37", "click", function( ) {
  setScreen("addquiz4");
});
onEvent("button28", "click", function( ) {
  setScreen("addquiz1");
});
onEvent("button36", "click", function( ) {
  setScreen("addquiz2");
});
onEvent("button39", "click", function( ) {
  setScreen("screen1");
});
onEvent("button40", "click", function( ) {
  setScreen("addquiz4");
});
onEvent("button38", "click", function( ) {
  setScreen("Addquiz3");
});
onEvent("button41", "click", function( ) {
  setScreen("sub");
});
onEvent("button42", "click", function( ) {
  setScreen("simplesub");
});
onEvent("button43", "click", function( ) {
  setScreen("sub");
  onEvent("button44", "click", function( ) {
    setScreen("Youroptions");
  });
});
 
