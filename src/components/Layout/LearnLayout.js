import React, { useState, useEffect } from 'react';
import { getHotTopicsOfTheDay, getLearnByCategory, getContinueLearning } from '../../services/learn';
import Footer from '../Common/Footer/Footer';
import Achievement from '../Learn/Achievement';
import Category from '../Learn/Category/Category';
import Learning from '../Learn/Learning';
import Topics from '../Learn/Topics';

const LearnLayout = () => {
  const [hotTopicPage, setHotTopicPage] = useState(0);
  const [hotTopicLoading, setHotTopicLoading] = useState(false);
  const [continueLearingLoading, setContinueLearingLoading] = useState(false);
  const [categoryLoading, setCategoryLoading] = useState(false);



  const [continuePage, setContinuePage] = useState(0);
  const [learnCategoryPage, setLearnCategoryPage] = useState(0);
  const [hotTopicTotalCount, setHotTopicTotalCount] = useState(0);
  const [continueTotalCount, setContinueTotalCount] = useState(0);
  const [learnCategoryTotalCount, setLearnCategoryTotalCount] = useState(0);

  const [hotTopicLists, setHotTopicLists] = useState([]);
  const [continueLists, setContinueLists] = useState([]);
  const [learnCategoryLists, setLearnCategoryLists] = useState([]);

  // countInfo


  useEffect(() => {
    getHotTopics(hotTopicPage + 1)
  }, [hotTopicPage])

  useEffect(() => {
    getContinueLearningList(continuePage + 1)
  }, [continuePage])

  useEffect(() => {
    getLearnBYCategory(learnCategoryPage + 1)
  }, [learnCategoryPage])


  const getHotTopics = async (currentPage) => {
    setHotTopicLoading(true)
    try {
      let res = await getHotTopicsOfTheDay(currentPage)
      console.log('resresres',res)
      if (res?.statusCode === 200) {
        setHotTopicLists((hotTopicLists) => [
          ...hotTopicLists,
          ...res?.data?.response,
        ]);
        setHotTopicTotalCount(res?.data?.countInfo?.[0]?.count)
        setHotTopicLoading(false)

      }
    } catch (err) {
      console.log('eeee', err)
    }
  }


  const getContinueLearningList = async (currentPage) => {
    setContinueLearingLoading(true)
    try {
      let res = await getContinueLearning(currentPage)
      if (res?.statusCode === 200) {
        setContinueLists((continueLists) => [
          ...continueLists,
          ...res?.data?.response,
        ]);
        setContinueTotalCount(res?.data?.countInfo?.[0]?.count)
        setContinueLearingLoading(false)
      }


    } catch (err) {
      console.log('eeee', err)
    }
  }


  const getLearnBYCategory = async (currentPage) => {
    try {
      let res = await getLearnByCategory(currentPage)
      setLearnCategoryLists(res?.data?.response)
      setLearnCategoryTotalCount(res?.data?.countInfo?.[0]?.count)

    } catch (err) {
      console.log('eeee', err)
    }
  }

console.log('fafaaa',continueTotalCount,learnCategoryTotalCount)
  return (
    <div className='container'>
      <div className='row margin-t'>
        <div className='col-12 col-md-4'>
          <Achievement />
        </div>
        <div className='col-12 col-md-8'>
          <Topics 
          hotTopicLists={hotTopicLists}
          hotTopicTotalCount={hotTopicTotalCount}
          setHotTopicLoading={setHotTopicLoading}
          hotTopicLoading={hotTopicLoading}
          hotTopicPage={hotTopicPage}
          setHotTopicPage={setHotTopicPage}   
          />
        </div>
      </div>
      {continueLists?.length?<div className='row'>
        <Learning 
        continueLists={continueLists}
        continueTotalCount={continueTotalCount}
        setContinueLearingLoading={setContinueLearingLoading}
        continueLearingLoading={continueLearingLoading}
        setContinuePage={setContinuePage}
        continuePage={continuePage}
        />
      </div>:''}
      {learnCategoryLists?.length?
     <div className='row'>
     <Category 
     learnCategoryLists={learnCategoryLists}
     learnCategoryTotalCount={learnCategoryTotalCount}
     setCategoryLoading={setCategoryLoading}
     categoryLoading={categoryLoading}
     setLearnCategoryPage={setLearnCategoryPage}
     learnCategoryPage={learnCategoryPage}
     />
   </div>:''  
}
     
    </div>
  );
};

export default LearnLayout;