# calcGrade
交大新买的“新版研究管理信息系统”的成绩查询居然还要自己算成绩，为了避免手动输入20+课程因为遗漏或按错导致成绩计算错误（反正不是因为懒，嗯），这种事情还是交给计算机吧，嗯。步骤如下

## 打开chrome
![chrome](https://github.com/dieice2030/calcGrade/blob/master/screenshot/chrome.png)

## 进入研究管理系统
![system](https://github.com/dieice2030/calcGrade/blob/master/screenshot/system.png)

## 进入成绩查询页面
![web](https://github.com/dieice2030/calcGrade/blob/master/screenshot/web.png)

## 打开控制台
`F12`或者`更多工具->开发者工具`
![console](https://github.com/dieice2030/calcGrade/blob/master/screenshot/console.png)

## 输入以下命令
复制以下命令，在控制台粘贴
```JS
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
```

## 得到结果
![result](https://github.com/dieice2030/calcGrade/blob/master/screenshot/result.png)