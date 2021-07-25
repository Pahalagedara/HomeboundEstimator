import { React } from 'react'
import { connect } from 'react-redux'
import SectionA from './SectionA'
import SectionB from './SectionB'
import SectionC from './SectionC'
import SectionD from './SectionD'
import SectionE from './SectionE'
import SectionF from './SectionF'
import SectionG from './SectionG'
import SectionH from './SectionH'


const Quections = (props) => {
    
    const { landAvailability, isNaturalDisaster, progress } = props;
    
    return (
        <div className='quections'>

            <SectionA visibleLevel={10}/>
            { (progress >= 20) ? <SectionB />:null}
            { (progress >= 30) ? <SectionC />:null}
            { (progress >= 40) ? <SectionD visibleLevel={40} />:null}
            {/* normal flow end  */}
            
            {/* divide using  landAvailability */}
            { ((progress >= 50) && (landAvailability === "Need to buy land"))  ?  <SectionE /> : null}
            { ((progress >= 50) && (landAvailability === "I have land")) ? <SectionG visibleLevel={50} /> : null}
            
            {/* divide using  isNaturalDisaster state */}
            { ((progress >= 60) && (!isNaturalDisaster)) ? <SectionE />:null}
            { ((progress >= 60) && (isNaturalDisaster) && (landAvailability === "I have land")) ? <SectionH />:null}
            { ((progress >= 60) && (landAvailability === "Need to buy land")) ? <SectionF />: null}  
            
            {/* divide using  isNaturalDisaster state */}
            {((progress >= 70) && (!isNaturalDisaster)) ? <SectionF /> : null}
            {((progress >= 70) && (isNaturalDisaster)) ? <SectionE /> : null}
        
            { (progress >= 80) ? <SectionF />: null}     
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      landAvailability: state.estimate.landAvailability,
      isNaturalDisaster: state.estimate.isNaturalDisaster,
      progress: state.estimate.progress,
  };
};
export default connect(mapStateToProps)(Quections)
