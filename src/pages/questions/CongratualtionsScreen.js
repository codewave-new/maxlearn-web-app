import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CardFooter } from 'reactstrap';

import '../../styles/questions/congratulation.scss';
import { CloseButton } from '../../assets';

function CongratualtionsScreen() {
  return (
    <div className='cong_bg'>
      <div className='banner_bg'>
        <div className=' col-sm-12 justify-content-center  mt-4'>
          <div>
            <div
              className='d-flex justify-content-end '
              style={{ marginTop: '40px' }}
            >
              <a href='/to-do'>
                <button className='detail_close'>
                  <CloseButton.default />
                </button>
              </a>
            </div>
            <div className='cong_intro s pt-4'>Congratualtions</div>
            <div className='cong_team_name pt-2'>Team Roaster</div>
            <div className='d-flex  justify-content-center   mt-3'>
              <img
                src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670992479/trophy_woqchp.png'
                className='cup_img'
              />
            </div>
            <div className='d-flex justify-content-center mt-2'>
              <Card className='  cong_card '>
                <div className='mt-4 d-flex justify-content-center card_intro'>
                  Points earned by team Roaster
                </div>
                <div className='mt-3 cong_points d-flex justify-content-center'>
                  150
                </div>

                <CardFooter className='cong_card_footer mt-4 cong_footer  d-flex justify-content-center'>
                  Now you can get the squad performance report!{' '}
                  <span className='cong_click'>Click here </span>
                </CardFooter>
              </Card>
            </div>
            <div className='d-flex justify-content-center mt-4 '>
              <Button className='explore_challenge'>Explore Challenges</Button>
            </div>
            <div className='d-flex justify-content-center mt-3 '>
              <Button className='view_leaderboard'>View my leaderboard</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CongratualtionsScreen;
