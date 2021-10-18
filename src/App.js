import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FeedbackForm from './component/FeedbackForm';
import FrontPage from './component/FrontPage';
import Header from './component/Header';

function App({userInfo, userFeedback, userScore}) {

  const [flag, setFlag] = useState(false)

  useEffect(()=>{
    if (userInfo.username !== '') {
      setFlag(true)
    }
  },[userInfo.username])

  return (
    <>
    <div>
      <div className="container w-50 px-0 my-5 rounded shadow-sm" style={{background : '#fff'}}>
        <Header userDetails={userInfo}/>
        <div className="p-3">
          {
            !flag ?
              <FrontPage setFlag={setFlag} /> : 
                <FeedbackForm userDetails={userInfo} userFeedback={userFeedback} userScore={userScore}/>
          }
        </div>
      </div>
    </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userInfo : state.userNameReducer,
    userFeedback : state.feedbackReducer,
    userScore : state.scoreReducer
  }
}
export default connect(mapStateToProps)(App);