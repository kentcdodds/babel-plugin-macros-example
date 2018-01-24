import helloMacro, {goodbye as goodbyeMacro} from '../../greeting.macro'

console.log(helloMacro, goodbyeMacro)

alert(goodbyeMacro, helloMacro)

function getSomeGreetings() {
  return [goodbyeMacro, helloMacro]
}
