import helloMacro, {goodbye as goodbyeMacro} from './greeting.macro'

console.log(helloMacro, goodbyeMacro)

alert(goodbyeMacro, helloMacro)

function getSomeEmoji() {
  return [goodbyeMacro, helloMacro]
}
