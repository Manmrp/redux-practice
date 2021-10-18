import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback, addTotalScore } from '../redux/action';

const FeedbackForm = ({userDetails, userFeedback, userScore}) => {

    const [totalScore, setTotalScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [answer, setAnswer] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const dispatch = useDispatch()

    let ratingStars = [1, 2, 3, 4, 5]

    const handleAnswer = (e) => {
        setAnswer(e.target.value)
    }

    const handleRating = (e) => {
        let rating = parseInt(e.target.value)
        let isChecked = e.target.checked
        setCurrentScore(rating)
        if (isChecked) {
            let ind = ratingStars.indexOf(rating)
            let total = 0
            for(let i=0; i<=ind; i++){
                total += ratingStars[i]
            }
            setTotalScore(total)
        }
    }

    const handleSubmit = () => {
        if(answer !== '' && totalScore !== 0) {
            dispatch(addFeedback(answer))
            dispatch(addTotalScore(totalScore))
            setShowThankYou(true)
        }
        else {
            alert('Please ensure that all fields are satisfied.')
        }
    }

    const resetRating = () => {
        setAnswer('')
        setCurrentScore(0)
        setTotalScore(0)
    }

    return (
        <div>
            <div className="w-50 py-3 mx-auto">
                {
                    !showThankYou ?
                    <div className="form">
                        <div className="form-group text-center">
                            <label className="h5">Give your feedback, <span className="font-weight-bold">{userDetails.username}</span></label>
                            <input value={answer} onChange={(e)=>handleAnswer(e)} type="text" placeholder="Your Answer..." className="form-control text-center shadow-sm border-0" />
                            <div className="py-2"></div>
                            <div>
                            {
                                ratingStars.map( (val, i) => (
                                    <label key={i} className="my-chk">
                                        <input checked={val<=currentScore} onChange={(e)=>handleRating(e)} name={`rating-${val}`} id={`chk_${val}`} type="radio" value={val} className="d-none" />
                                        <label className="btn px-1" htmlFor={`chk_${val}`}>
                                            <i className="fa fa-star"></i>
                                            <p className="mb-0">{val}</p>
                                        </label>
                                    </label>
                                ))
                            }
                            </div>
                            <div className="py-2"></div>
                            <label className="badge badge-warning fa-2x">Total Score:{totalScore}</label>
                            <div className="py-2"></div>
                            <button className="btn btn-light shadow-sm" onClick={resetRating}><i className="fa fa-redo"></i></button>
                            <button className="btn btn-light shadow-sm" onClick={handleSubmit}><i className="fa fa-arrow-right"></i></button>
                        </div>
                    </div> :
                        <div className="text-center py-5">
                            <h1>Thank you</h1>
                            <p>Your feedback is recorded successfull</p>
                            <div className="w-100 badge-light alert mb-3">Answer : {userFeedback.feedback}</div>
                            <label className="w-100 badge badge-warning fa-2x">Total Score:{userScore.score}</label>
                        </div>
                }
            </div>
        </div>
    );
};

export default FeedbackForm;