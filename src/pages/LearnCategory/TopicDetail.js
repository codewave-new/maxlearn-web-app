import React,{useState,useEffect} from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import TopicCategoryDetail from '../../components/Learn/Category/TopicCategoryDetail';
import { Link, NavLink,useSearchParams } from 'react-router-dom';
import { getTopiDetilsStats,
  getTopicFlashCards,
  getTopicWiseDecks } from '../../services/learn';
import { CenterLoadingBar, LoadingBar } from '../../components/loader/loader';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';

const TopicDetail = () => {
    const [searchParams] = useSearchParams()
    let topicId=searchParams.get('topic')

  const [learnDecktotalCount, setlearnDecktotalCount] = useState(0);
  const [deckLoading, setdeckLoading] = useState(false);
  const [learnDeckLists, setlearnDeckLists] = useState([]);
  const [flashCards, setFlashCards] = useState([]);

  const [learndeckStats, setlearndeckStats] = useState();
  const [flashCardId, setFlashCardId] = useState();


  const [learnDeckPage, setlearnDeckPage] = useState(0);

  useEffect(() => {
   if(flashCardId) getFlashCards(flashCardId) 
  }, [flashCardId])

  useEffect(() => {
    getAllCatrgoryWiseStats()
  }, [])


  useEffect(() => {
    getLearnBYCategory(learnDeckPage + 1)
  }, [learnDeckPage])

const getLearnBYCategory = async (currentPage) => {
    setdeckLoading(true)
    try {
      let res = await getTopicWiseDecks(topicId,currentPage)
      setlearnDeckLists(res?.data?.response)
      setlearnDecktotalCount(res?.data?.countInfo?.[0]?.count)
      setdeckLoading(false)

    } catch (err) {
      console.log('eeee', err)
    }
  }
  const getAllCatrgoryWiseStats = async () => {
    try {
      let res = await getTopiDetilsStats(topicId)
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

  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <TopicCategoryDetail 
        learndeckStats={learndeckStats}
        learnDeckLists={learnDeckLists}
        count={learnDecktotalCount}
        setlearnDeckPage={setlearnDeckPage}
        learnDeckPage={learnDeckPage}
        deckLoading={deckLoading}
        setFlashCardId={setFlashCardId}
        />
        <Footer />
      </div>
    </>
  );
};

export default TopicDetail;
