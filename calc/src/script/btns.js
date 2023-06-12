export const btnsArr = [
  {type : 'clear', char:<i className="fa-solid fa-c"></i>, id: '1'},
  {type : 'string', char:'(', id: '2'},
  {type : 'string', char:')', id: '3'},
  {type : 'string', char:'/', id: '4'},
  {type : 'string', char:'7', id: '5'},
  {type : 'string', char:'8', id: '6'},
  {type : 'string', char:'9', id: '7'},
  {type : 'string', char:'*', id: '8'},
  {type : 'string', char:'4', id: '9'},
  {type : 'string', char:'5', id: '10'},
  {type : 'string', char:'6', id: '11'},
  {type : 'string', char:'-', id: '12'},
  {type : 'string', char:'1', id: '13'},
  {type : 'string', char:'2', id: '14'},
  {type : 'string', char:'3', id: '15'},
  {type : 'string', char:'+', id: '16'},
  {type : 'del', char:<i className="fa-solid fa-delete-left"></i>, id: '17'},
  {type : 'string', char:'0', id: '18'},
  {type : 'string', char:'.', id: '19'},
  {type : 'equal', char:<i className="fa-solid fa-equals"></i>, id: '20'},
]

export const fnSetOutput = function(output,char,type){
  let showModal = false
  let errorMessage
  if(type==='string')output += char
  else if(type==='clear')output = ''
  else if(type==='del')output = output.slice(0, -1)
  else {
    try{
      const fnEqual = new Function(`return ${output}`)
      output = fnEqual()
      if(output === Infinity){
        errorMessage = '0으로 나눌 수 없습니다'
        showModal = true
        output = ''
      }
      if(output < Math.pow(10,21)){
        output = parseInt(output*10000)
        output = output / 10000
      }
      output = `${output} =\n${String(output)}`
    }
    catch{
      showModal = true
      errorMessage = '잘못된 계산식입니다.'
    }
  }
  return {output, showModal, errorMessage}
}