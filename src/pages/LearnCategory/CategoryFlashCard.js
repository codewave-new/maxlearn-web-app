import React,{useState,useEffect} from 'react';
import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer/Footer';
import FlashCard from '../../components/Learn/Category/FlashCard';
import { QuestionBodyImage } from '../../assets';
import { Link, NavLink,useSearchParams } from 'react-router-dom';
import { getTopiDetilsStats,
  getTopicFlashCards,
  getTopicWiseDecks } from '../../services/learn';

const CategoryFlashCard = () => {

  const [searchParams] = useSearchParams();
  let deckId=searchParams.get('deck');

const [learnDecktotalCount, setlearnDecktotalCount] = useState(0);
const [deckLoading, setdeckLoading] = useState(false);
const [learnDeckLists, setlearnDeckLists] = useState([]);
const [flashCards, setFlashCards] = useState([]);

const [learndeckStats, setlearndeckStats] = useState();
const [flashCardId, setFlashCardId] = useState();


const [learnDeckPage, setlearnDeckPage] = useState(0);

useEffect(() => {
  getFlashCards() 
}, [])


const getFlashCards = async () => {
  try {
    let res = await getTopicFlashCards(deckId)
    setFlashCards(res?.data)
  } catch (err) {
    console.log('eeee', err)
  }
}

console.log('flashCards',flashCards)
  return (
    <>
      <div
        className='max__learn-wrapper'
        style={{
          // backgroundImage: `url(${QuestionBodyImage.default})`,
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
          backgroundColor: '#F1F9F2',
        }}
      >
        <Header />
        <FlashCard 
        flashCards={flashCards}
        />

        <Footer />
      </div>
    </>
  );
};

export default CategoryFlashCard;
