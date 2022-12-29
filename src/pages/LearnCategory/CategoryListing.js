import React,{useState,useEffect} from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import CategoryList from '../../components/Learn/Category/CategoryList';
import { getLearnByCategory } from '../../services/learn';
import { CenterLoadingBar, LoadingBar } from '../../components/loader/loader';
import InfiniteScrollling from '../../components/Pagination/InfiniteScrollling';

const CategoryListing = () => {
  const [learnCategoryTotalCount, setLearnCategoryTotalCount] = useState(0);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [learnCategoryLists, setLearnCategoryLists] = useState([]);
  const [learnCategoryPage, setLearnCategoryPage] = useState(0);

  useEffect(() => {
    getLearnBYCategory(learnCategoryPage + 1)
  }, [learnCategoryPage])

  const getLearnBYCategory = async (currentPage) => {
    setCategoryLoading(true)
    try {
      let res = await getLearnByCategory(currentPage)
      setLearnCategoryLists(res?.data?.response)
      setLearnCategoryTotalCount(res?.data?.countInfo?.[0]?.count)
      setCategoryLoading(false)

    } catch (err) {
      console.log('eeee', err)
    }
  }
  return (
    <>
      <div className='max__learn-wrapper'>
      <Header />
      {categoryLoading && learnCategoryPage === 1 ? (
          <CenterLoadingBar />
        ) : (
          <InfiniteScrollling
            dataLength={learnCategoryLists?.length}
            next={() => setLearnCategoryPage(learnCategoryPage + 1)}
            hasMore={learnCategoryLists?.length < learnCategoryTotalCount}
            loader={<LoadingBar />}
          >
            <CategoryList 
     learnCategoryLists={learnCategoryLists}
     learnCategoryTotalCount={learnCategoryTotalCount}
     setCategoryLoading={setCategoryLoading}
     categoryLoading={categoryLoading}
     setLearnCategoryPage={setLearnCategoryPage}
     learnCategoryPage={learnCategoryPage}
     />

          </InfiniteScrollling>
        )}
        <Footer />
      </div>
    </>
  );
};

export default CategoryListing;