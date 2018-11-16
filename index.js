// add solution here
function theBeatlesPlay(musicians, instruments){
  var temp = [];
  for (var i=0; i < musicians.length; i++){
    temp[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return temp;
}

function johnLennonFacts(facts){
  var i= 0;
  while (i< facts.length){
    facts[i] = facts [i] + "`!!!`"
  }
  return facts;
}
