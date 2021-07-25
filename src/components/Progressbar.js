import { React} from 'react';
import { connect } from 'react-redux';

const Progressbar = (props) => {
    const { progress } = props;
    const progressHight =progress+"%"
    return (
        <div className='progressShower'>
            <h6>{progressHight}</h6>
            <div className='progressbar-background' />
            <div className='progressbar' style={{height:progressHight}}/>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    progress: state.estimate.progress,
  };
};
export default connect(mapStateToProps)(Progressbar);
