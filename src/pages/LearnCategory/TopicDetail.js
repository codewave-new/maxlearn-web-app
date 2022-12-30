import React, { useState, useEffect } from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import TopicCategoryDetail from '../../components/Learn/Category/TopicCategoryDetail';
import {
  getTopiDetilsStats,
  getTopicFlashCards,
  getTopicWiseDecks, startLearingQuizExam,
  getLearnTakingTestNow
} from '../../services/learn';
import { CenterLoadingBar, LoadingBar } from '../../components/loader/loader';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';
import { useSelector } from 'react-redux';
import {
  useLocation,
  useParams,
  createSearchParams,
  useSearchParams,
  NavLink, useNavigate
} from 'react-router-dom';
import LearnQuizCatergoryCard from '../../components/Learn/Category/CatergoryCard';
import { QuizDetailCard } from '../../components/Learn/quizdetailCard';

let descriptionTypes=['Advance your topic learning level by answering questions. ',
'Remember, whether correct or incorrect, you still learn and gain points. ',
'Collect personal points (Note: this will count toward your personal score).',
'You are limited to five questions per session, and three sessions per day, if you have already done today’s session, come back tomorrow! '
]
const TopicDetail = () => {
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams()
  let topicId = searchParams.get('topic')
  const [learnDecktotalCount, setlearnDecktotalCount] = useState(0);
  const [deckLoading, setdeckLoading] = useState(false);
  const [learnDeckLists, setlearnDeckLists] = useState([]);
  const [flashCards, setFlashCards] = useState([]);
  const [learndeckStats, setlearndeckStats] = useState();
  const [flashCardId, setFlashCardId] = useState();
  const [learnDeckPage, setlearnDeckPage] = useState(0);
  const [isStartExam, setIsStartExam] = useState(false);
  const [isOpenExamPage, setOpenExamDetailPage] = useState(false);
  const [examStartDetails, setExamStartDetails] = useState([]);


  const [examStart, setExamStart] = useState({});

  useEffect(() => {
    if (flashCardId) getFlashCards(flashCardId)
  }, [flashCardId])

  useEffect(() => {
    getAllCatrgoryWiseStats()
  }, [])

  useEffect(() => {
    getLearnExamStartNOw()
  }, [])

  const getLearnExamStartNOw=async()=>{
    try{
      let res=getLearnTakingTestNow(authData.learnerId, topicId)
      setExamStartDetails(res?.data)
    }catch(err){
console.log(err)
    } 
  }



  useEffect(() => {
    if (examStart?.quizMe) {
      navigate({
        pathname: `/start-learn-module-quiz`,
        search: createSearchParams({
          learn: examStart?.learnModule,
          quiz: examStart?.quizMe
        }).toString(),
      })
    }
  }, [examStart])


  useEffect(() => {
    getLearnBYCategory(learnDeckPage + 1)
  }, [learnDeckPage])

  const getLearnBYCategory = async (currentPage) => {
    setdeckLoading(true)
    try {
      let res = await getTopicWiseDecks(topicId, currentPage)
      setlearnDeckLists(res?.data?.[0]?.response)
      setlearnDecktotalCount(res?.data?.countInfo?.[0]?.count)
      setdeckLoading(false)

    } catch (err) {
      console.log('eeee', err)
    }
  }
  const getAllCatrgoryWiseStats = async () => {
    try {
      let res = await getTopiDetilsStats(authData.learnerId, topicId)
      setlearndeckStats(res?.data)
    } catch (err) {
      console.log('eeee', err)
    }
  }

  const getFlashCards = async (deckId) => {
    try {
      let res = await getTopicFlashCards(deckId)
      setFlashCards(res?.data)
    } catch (err) {
      console.log('eeee', err)
    }
  }

  const handleExam = async () => {
    setIsStartExam(true)
    try {
      let res = await startLearingQuizExam({
        topic: topicId,
        learner: authData.learnerId,
      })
      setExamStart(res?.data)
      setIsStartExam(false)
    } catch (err) {
      console.log('eeee', err)
    }
  }
  console.log('mlnnn', examStartDetails)
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        {isOpenExamPage ?
          <QuizDetailCard
            name={authData?.fullName}
            description={descriptionTypes}
            ongoingChallenge={examStartDetails}
            handleClick={handleExam}
            isLoading={isStartExam}
            handleClose={()=>setOpenExamDetailPage(false)}
          />
          : <TopicCategoryDetail
            learndeckStats={learndeckStats}
            learnDeckLists={learnDeckLists}
            count={learnDecktotalCount}
            setlearnDeckPage={setlearnDeckPage}
            learnDeckPage={learnDeckPage}
            deckLoading={deckLoading}
            setFlashCardId={setFlashCardId}
            handleExam={handleExam}
            openExamPage={() => setOpenExamDetailPage(true)}
          />}
        <Footer />
      </div>
    </>
  );
};

export default TopicDetail;
