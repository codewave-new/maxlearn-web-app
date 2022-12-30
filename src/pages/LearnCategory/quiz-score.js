import React, { useEffect, useState } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import LearnExamScore from '../../components/Learn/Achievement'
// import '../../../styles/questions/congratulation.scss';
// import { CloseButton, CertTrophy, WhiteScoreDiamond } from '../../../assets';
// import { fetchCertReport } from '../../../services/certs';
import { Link, NavLink, useSearchParams, useParams, useNavigate, createSearchParams } from 'react-router-dom';
import { getLearnQuizResults } from '../../services/learn';
import HighScoreCard from '../../components/Learn/score/highScore';
import LowScoreCard from '../../components/Learn/score/lowScore';
import { LearnTrophy } from '../../assets';
import { useSelector } from 'react-redux';
export const QuizScore = () => {
  const authData = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  let learnModuleId = searchParams.get('learn')
  let quizId = searchParams.get('quiz')

  // const location = useLocation();
  // const { state } = location;
  // const navigate = useNavigate();
  // const [background, setBackground] = useState('blue');
  const [score, setScoreReport] = useState('');

  // const handleClose = () => {
  //   navigate('/to-do?tab=quest');
  // };

  const getReport = async () => {
    try {
      const resp = await getLearnQuizResults(learnModuleId, quizId);
      if (resp.statusCode === 200) {

        setScoreReport(resp?.data?.scoreDetails);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
   if(quizId&&learnModuleId) getReport();
  }, [quizId,learnModuleId]);
  return (
    <div>
      {(((score?.correctAnswers / score?.totalQuestions) * 100) > 50) ?
        <HighScoreCard
          score={score}
          name={authData?.fullName}
        />
        : <LowScoreCard
          score={score}
          name={authData?.fullName}
        />}
    </div>
  )
}
