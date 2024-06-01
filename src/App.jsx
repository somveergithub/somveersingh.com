import './App.css'

function App() {

  return (
    <>
      <h1 className="heading">Color Changer</h1>
      <span className="button" id="Grey"></span>
      <span className="button" id="White"></span>
      <span className="button" id="Blue"></span>
      <span className="button" id="Yellow"></span>
      <h2>Try Clicking on one of the colors above to change the background-color of this page!</h2>
    </>
  )
}

const body = document.querySelector('body')
console.log(body);

const buttons = document.querySelectorAll('.button')
console.log(buttons);

function setButtonsBorder(buttons, color) {
  buttons.forEach(function (button) {
    button.style.border = `solid ${color} 2px`
  })
}

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log('target: ', e.target);
    const id = e.target.id
    console.log(id);

    switch (id) {
      case "Grey":
        body.style.backgroundColor = id
        body.style.color = "white"
        setButtonsBorder(buttons, 'black')
        break;
      case "White":
        body.style.backgroundColor = id
        body.style.color = "black"
        setButtonsBorder(buttons, 'black')
        break;
      case "Blue":
        body.style.backgroundColor = id
        body.style.color = "white"
        setButtonsBorder(buttons, 'Red')
        break;
      case "Yellow":
        body.style.backgroundColor = id
        body.style.color = "Red"
        setButtonsBorder(buttons, 'Blue')
        break;
      default:
        body.style.backgroundColor = "black"
        body.style.color = "white"
        setButtonsBorder(buttons, 'black')
    }
  })
});

export default App
