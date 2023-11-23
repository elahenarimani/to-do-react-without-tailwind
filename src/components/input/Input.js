import './input.css'
function Input({valueStatuse,onchageHandler}){
    return(
      <input placeholder='Input here and return to add...' value={valueStatuse} onChange={onchageHandler}/>
    )
}
export default Input