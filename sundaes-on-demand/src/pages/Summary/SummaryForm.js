import { useState } from 'react'

const SummaryForm = () => {

  const [acceptTerms, setAcceptTerms] = useState(false)
 
   return(
     <form aria-label="place order"> 
        <input
        type='checkbox'
        aria-checked={acceptTerms}
        checked={acceptTerms}
        aria-label='accept terms and conditons'
        onChange={(e) => setAcceptTerms(prev => !prev)}
       /> 
       <button disabled={!acceptTerms}>Place Order</button>
     </form> 
   )
 }
 
 export default SummaryForm