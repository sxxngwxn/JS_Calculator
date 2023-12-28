// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무되되고 input의 값은 없어진다.
// undo를 클릭하면 이전 값으로 돌아간다.
// redo를 클릭하면 이후 값으로 되돌린다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

let total = 0;
let resultArray = [0];
let currnetIndex = 0;

let undoButton = document.getElementById("undoButton"),
  addButton = document.getElementById("addButton"),
  subButton = document.getElementById("subButton"),
  redoButton = document.getElementById("redoButton"),
  printValue = document.getElementById("value"),
  inputValue = document.getElementById("inputbox");

// =====  ===== //
function onload() {
  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

// ===== handlClick ===== //
function handleClick(event) {
  //   alert(event.target.id);
  console.log(event.target.id);

  // const id = event.target.id

  const { id } = event.target;
  let value, result;

  const calc = (r) => {
    printValue.innerHTML = r;
    inputValue.value = 0;
    currnetIndex++;
    resultArray = [
      // 배열을 풀어서 출력 (전개 연산자)
      ...resultArray.slice(0, currnetIndex + 1),
      result,
    ];
    console.log(`resultArray : ${resultArray}`);
  };

  switch (id) {
    case "addButton":
      /*
            [기능] 더하기
            1. 값 입력
            2. 입력한 값 가져옴
            3. 입력값 + 기존값
            4. 출력
            */
      value = Number(inputValue.value);
      result = value + resultArray[currnetIndex];
      calc(result);
      break;
      
    case "subButton":
      /*
            [기능] 빼기
            1. 값 입력
            2. 입력한 값 가져옴
            3. 기존값 - 입력값
            4. 출력
            */
      value = Number(inputValue.value);
      result = resultArray[currnetIndex] - value;
      calc(result);
      break;

    case "undoButton":
      if (currnetIndex > 0) {
        currnetIndex = currnetIndex - 1;
        printValue.innerHTML = resultArray[currnetIndex];
      } else "최초값입니다.";
      break;

    case "redoButton":
      if (currnetIndex < resultArray.length - 1) {
        currnetIndex = currnetIndex + 1;
        printValue.innerHTML = resultArray[currnetIndex];
      } else "마지막값입니다.";
      break;

    default:
      return;
  }
} // func
