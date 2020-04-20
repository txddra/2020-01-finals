
const makeRunOn = function(str) {
let result = '';
// return str.substring(0, str.length-1)
  
// tried replace, lol
  
  // result.replace('.',',')
// }
// zfor(let i =0; str.includes('.'); i++){
// return result.replace('.', ',');
// }

  for(let i = 0; i < str.length; i++){

    if (str[i]==="." && i!== str.length-1){
      result = result + ","
    }
    else {
      result = result + str[i]
    }
  }
  return result
}

// const stringOut = function(str){
// let result = "";
// // for(let i = 0; i > str.length; i++){
//   // str.split('.').join(',');
// }
// // return result
//   // tried split & join, lol
//   // return str.split("").join(" ");

// // }

const nightOwls = function(name){
return{

  }
}
const totalScore = function(level, score, multiplier){
level:[]
score: score
multiplier:multiplier
}
const getToBed =function(list){
let newList =

}
const findIndices = function(list,function){

}

const Faqtory = function(questions){
return {
  questions:[],
addQuestion(question,answered = false){

this.questions.push({
  question:question,
  answered: answered,
  id: this.questions.length
  })
  },
  answerQuestion(id, answer){
    
    
  
}
} 

}


if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof stringOut === 'undefined') {
  stringOut = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  stringOut,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
