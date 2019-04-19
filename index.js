var frame = document.getElementById('mainFrame');
var courses = frame.contentWindow.document.getElementsByClassName('datagrid-btable');
var compulsory = courses[0].children[0];
var elected = courses[1].children[0];
var gradeCompTotal = 0;
var creditComp = 0;
var gradeElectedTotal = 0;
var creditElected = 0;
for(var i = 0; i < compulsory.childElementCount; i++){
  var credit = Number(compulsory.children[i].children[1].children[0].innerHTML);
  var grade = Number(compulsory.children[i].children[3].children[0].innerHTML);
  creditComp += credit;
  gradeCompTotal += credit * grade;
}
for(var i = 0; i < elected.childElementCount; i++){
  var credit = Number(elected.children[i].children[1].children[0].innerHTML);
  var grade = Number(elected.children[i].children[3].children[0].innerHTML);
  creditElected += credit;
  gradeElectedTotal += credit * grade;
}
var gradeComp = (gradeCompTotal / creditComp).toFixed(2);
var gradeElected = (gradeElectedTotal / creditElected).toFixed(2);
var gradeTotal = ((gradeElectedTotal + gradeCompTotal) / (creditElected + creditComp)).toFixed(2);
console.log(`必修成绩是${gradeComp}`);
console.log(`选修成绩是${gradeElected}`);
console.log(`总成绩是${gradeTotal}`);