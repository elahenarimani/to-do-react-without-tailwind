import './input.css'
function Input({valueStatuse,onchageHandler}){
    return(
      <input value={valueStatuse} onChange={onchageHandler}/>
    )
}
export default Input