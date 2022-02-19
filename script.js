window.onload = () => {

  const firstLineInputs = document.querySelectorAll('.calc--js--1'),
    secondLineInputs = document.querySelectorAll('.calc--js--2'),
    thirdLineInputs = document.querySelectorAll('.calc--js--3'),
    fourthLineInputs = document.querySelectorAll('.calc--js--4');

  let firstLineValue = document.querySelector('.calc-column__value--1'),
    secondLineValue = document.querySelector('.calc-column__value--2'),
    thirdLineValue = document.querySelector('.calc-column__value--3'),
    fourthLineValue = document.querySelector('.calc-column__value--4');

  const InputChecker = {
    inputOne: this.inputOne,
    inputTwo: this.inputTwo,
    getResult: function () {
      if (this.inputOne > 0 && this.inputTwo > 0) {
        return true;
      } else {
        false;
      }
    }
  }

  const firstLine = Object.create(InputChecker),
    secondLine = Object.create(InputChecker),
    thirdLine = Object.create(InputChecker),
    fourthLine = Object.create(InputChecker);

  function inputGenerator(inputArray, obj) {
    inputArray.forEach(input => {
      input.addEventListener('keyup', () => {
        obj.inputOne = inputArray[0].value;
        obj.inputTwo = inputArray[1].value;

        switch (obj) {
          case firstLine:
            obj.getResult()
              ? firstLineValue.innerText = ((obj.inputOne * obj.inputTwo) / 100)
              : firstLineValue.innerText = '0';
            break;
          case secondLine:
            obj.getResult()
              ? secondLineValue.innerText = ((obj.inputOne / obj.inputTwo) * 100)
              : secondLineValue.innerText = '0';
            break;
          case thirdLine:
            obj.getResult()
              ? thirdLineValue.innerText = +obj.inputTwo + obj.inputOne * obj.inputTwo / 100
              : thirdLineValue.innerText = '0';
            break;
          case fourthLine:
            obj.getResult()
              ? fourthLineValue.innerText = +obj.inputTwo - obj.inputOne * obj.inputTwo / 100
              : fourthLineValue.innerText = '0';
            break;
        }

      })
    })
  };

  inputGenerator(firstLineInputs, firstLine);
  inputGenerator(secondLineInputs, secondLine);
  inputGenerator(thirdLineInputs, thirdLine);
  inputGenerator(fourthLineInputs, fourthLine);

}
