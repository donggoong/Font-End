
export function fnGetTheme() {
  let theme
  if (window.localStorage.getItem('themeStorage')) {
    theme = JSON.parse(window.localStorage.getItem('themeStorage'))
    let color
    if (theme['1']) {
      color = 'gray'
    }
    else if (theme['2']) {
      color = 'beige'
    }
    else {
      color = 'skyblue'
    }
    document.body.setAttribute('class', color)
  } else {
    theme = { 1: true, 2: false, 3: false }
    window.localStorage.setItem('themeStorage', JSON.stringify(theme))
  }
  return theme
}

export const fnSetShowCoatch = function(){
  const localCoatch = window.localStorage.getItem('localCoatch')
  if(localCoatch){
    if(parseInt(localCoatch) < Date.now()){
      window.localStorage.removeItem('localCoatch')
      return true 
    }
    else return false
  }
  else return true
}