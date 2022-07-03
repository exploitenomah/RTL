import { useState } from 'react'

const SummaryForm = () => {

  const [acceptTerms, setAcceptTerms] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
   return(
     <form aria-label="place order"> 
        <input
        type='checkbox'
        aria-checked={acceptTerms}
        checked={acceptTerms}
        aria-label='accept terms and conditons'
        id='tc'
        onChange={(e) => setAcceptTerms(prev => !prev)}
       /> 
       <label 
       htmlFor='tc'
       data-testid='terms-and-conditions'
       onMouseOver={() => setShowPopover(true)}
       onMouseOut={() => setShowPopover(false)}
        >
       accept terms and conditions
       </label> 
       <button disabled={!acceptTerms}>Place Order</button>
       {showPopover ? <p data-testid='tooltip'>there are no terms and conditions</p> : ''}
     </form> 
   )
 }
 
 export default SummaryForm