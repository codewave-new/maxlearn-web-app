import React,{useState,useEffect} from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import SubjectDetailCategory from '../../components/Learn/Category/SubjectDetailCategory';
import { Link, NavLink,useSearchParams } from 'react-router-dom';
import { getSubjWiseTopics,getSubDetilsStats } from '../../services/learn';
import { CenterLoadingBar, LoadingBar } from '../../components/loader/loader';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';
import { useSelector } from 'react-redux';

const SubjectDetail = () => {
  const authData = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  let subId=searchParams.get('subject');

  const [learnTopicctotalCount, setlearnTopicctotalCount] = useState(0);
  const [topicLoading, settopicLoading] = useState(false);
  const [learnSubTopicc, setlearnSubTopicc] = useState([]);
  const [learnSubStats, setlearnSubStats] = useState();

  const [learnTopicPage, setlearnTopicPage] = useState(0);

  useEffect(() => {
    getAllCatrgoryWiseStats()
  }, [])

  useEffect(() => {
    getLearnBYCategory(learnTopicPage + 1)
  }, [learnTopicPage])

const getLearnBYCategory = async (currentPage) => {
    settopicLoading(true)
    try {
      let res = await getSubjWiseTopics(authData.learnerId,subId,currentPage)
      setlearnSubTopicc((previousState)=>[...previousState,...res?.data?.response])
      setlearnTopicctotalCount(res?.data?.countInfo?.[0]?.count)
      settopicLoading(false)

    } catch (err) {
      console.log('eeee', err)
    }
  }
  const getAllCatrgoryWiseStats = async () => {
    try {
      let res = await getSubDetilsStats(authData.learnerId,subId)
      setlearnSubStats(res?.data)
    } catch (err) {
      console.log('eeee', err)
    }
  }
console.log('nknnn',learnSubTopicc,learnSubStats)

  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <SubjectDetailCategory 
        learnSubStats={learnSubStats}
        learnSubTopicc={learnSubTopicc}
        count={learnTopicctotalCount}
        setlearnTopicPage={setlearnTopicPage}
        learnTopicPage={learnTopicPage}
        topicLoading={topicLoading}
        />
        <Footer />
      </div>
    </>
  );
};

export default SubjectDetail;
