import React,{useState,useEffect} from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import { DetailCategory } from '../../components/Learn/Category/DetailCategory';
import { Link, NavLink,useSearchParams } from 'react-router-dom';
import { getCatrgoryWiseStats,getCatrgoryWiseSubjects } from '../../services/learn';
import { CenterLoadingBar, LoadingBar } from '../../components/loader/loader';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';
import { useSelector } from 'react-redux';

const CategoryDetail = () => {
  const authData = useSelector((state) => state.auth);
  const [searchParams] = useSearchParams();
  let categoryId=searchParams.get('category');

  const [learnCategoryTotalCount, setLearnCategoryTotalCount] = useState(0);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [learnCategorySubjects, setLearnCategorySubjects] = useState([]);
  const [learnCategoryStats, setLearnCategoryStats] = useState();

  const [learnCategoryPage, setLearnCategoryPage] = useState(0);

  useEffect(() => {
    getAllCatrgoryWiseStats()
  }, [])

  useEffect(() => {
    getLearnBYCategory(learnCategoryPage + 1)
  }, [learnCategoryPage])

const getLearnBYCategory = async (currentPage) => {
    setCategoryLoading(true)
    try {
      let res = await getCatrgoryWiseSubjects(authData.learnerId,categoryId,currentPage)
      setLearnCategorySubjects(res?.data?.response)
      setLearnCategoryTotalCount(res?.data?.countInfo?.[0]?.count)
      setCategoryLoading(false)

    } catch (err) {
      console.log('eeee', err)
    }
  }
  const getAllCatrgoryWiseStats = async () => {
    try {
      let res = await getCatrgoryWiseStats(authData.learnerId,categoryId)
      setLearnCategoryStats(res?.data)
    } catch (err) {
      console.log('eeee', err)
    }
  }
console.log('learnCategorySubjects',learnCategorySubjects,learnCategoryStats)
  return (
    <>
      <div className='max__learn-wrapper'>
        <Header />
        <DetailCategory 
        learnCategoryStats={learnCategoryStats}
        learnCategorySubjects={learnCategorySubjects}
        count={learnCategoryTotalCount}
        setLearnCategoryPage={setLearnCategoryPage}
        learnCategoryPage={learnCategoryPage}
        categoryLoading={categoryLoading}
        />
        <Footer />
      </div>
    </>
  );
};

export default CategoryDetail;
