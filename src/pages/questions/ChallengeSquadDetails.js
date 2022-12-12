import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { CardBody, CardFooter, CardHeader } from 'reactstrap';
import '../../styles/questions/challengs-question.scss';
import SquadImage from '../../assets/Images/usersquad/Group 3.png';
import DimondSvg from '../../assets/Images/usersquad/Diamond.svg';
import { Icon } from '@mui/material';
import { CloseButton } from '../../assets';

const ChallengeSquadDetails = () => {
  return (
    <div className='chaallenge_squad_bg  '>
      <div className='squaddetail_bg  '>
        <div className='w-100 col-sm-12 d-flex justify-content-center'>
          <div className='col-sm-5 ' style={{ marginTop: '40px' }}>
            <div className='user_name'> Hi Tessa </div>
            <div className='greet_msg'>
              Thankyou for taking part in challenge
            </div>
            <Card className='points_bg mt-4'>
              <div className=''>
                <img
                  src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670755725/Group_5_rcffqr.svg'
                  className='float-end mr-1 points_diamond'
                />
                <p className='points_card_header mb-0'>
                  congrats!! Great achievement{' '}
                </p>
                <p className='points_sm_txt'>You have earned</p>
                <p className='points'>
                  350 <span className='txt'>Points</span>
                </p>
              </div>
              <CardFooter className='points_footer '>
                <img src={SquadImage} className='pic_sm' />
                <span className='points_txt   '>
                  Hi.. team Roasters are leading in this challenge{' '}
                </span>
              </CardFooter>
            </Card>

            <div className='mt-4 header_txt '>
              Your opponents score details{' '}
            </div>
            <div className='mb-4'>
              <ul style={{ listStyle: 'none' }} className='p-0'>
                <li className='col-sm-10 d-flex list_bd p-2'>
                  <div className='col-sm-6'>
                    <img src={SquadImage} className='squad_img' />
                    <span className='squad_name'>Monsters</span>
                  </div>
                  <div className='col-sm-6 d-flex justify-content-end align-items-center '>
                    <img
                      src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                      className='diamond_size'
                    />
                    <span className='squad_points'>100 points</span>
                    <span>
                      <Icon />
                    </span>
                  </div>
                </li>

                <li className='col-sm-10 d-flex list_bd mt-3 p-2'>
                  <div className='col-sm-6'>
                    <img src={SquadImage} className='squad_img' />
                    <span className='squad_name'>Monsters</span>
                  </div>
                  <div className='col-sm-6 d-flex justify-content-end align-items-center '>
                    <img
                      src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                      className='diamond_size'
                    />
                    <span className='squad_points'>100 points</span>
                    <span>
                      <Icon />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-sm-5 ' style={{ marginTop: '40px' }}>
            <div>
              <a href='/to-do'>
                <button className='detail_close'>
                  <CloseButton.default />
                </button>
              </a>
            </div>
            <div className='w-100'>
              <Card className='card_squad_detail'>
                <div className='mt-4 detail_header'>
                  Your Squad's score details{' '}
                </div>
                <CardBody className='p-0'>
                  <div className='col-sm-12 w-100  d-flex  '>
                    <div className='col-sm-5 p-2 '>
                      <div className='ml-1'>
                        <img src={SquadImage} className='squad_img' />
                        <span className='squad_name'>Roasters</span>
                      </div>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-end align-items-center p-2  '>
                      <img
                        src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                        className='diamond_size'
                      />
                      <span className='squad_points'>100 points</span>
                    </div>
                  </div>
                  <div className='p-0'>
                    <hr />
                  </div>
                  <div className='w-100 p-0'>
                    <ul style={{ listStyle: 'none' }}>
                      <li className=''>
                        <div className='col-sm-12 d-flex'>
                          <div className='col-sm-5'>
                            <img src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg' />
                            <span className='listing_name p-1'>
                              {' '}
                              Johnson Willams{' '}
                            </span>
                          </div>
                          <div className='col-sm-5  d-flex justify-content-end align-items-center'>
                            <img
                              src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                              className='diamond_list_size'
                            />
                            <span className='listing_points p-2'>
                              {' '}
                              40 points
                            </span>
                          </div>
                        </div>
                      </li>

                      <li className='mt-3'>
                        <div className='col-sm-12 d-flex'>
                          <div className='col-sm-5'>
                            <img src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg' />
                            <span className='listing_name p-1'>
                              {' '}
                              Johnson Willams{' '}
                            </span>
                          </div>
                          <div className='col-sm-5  d-flex justify-content-end align-items-center'>
                            <img
                              src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                              className='diamond_list_size'
                            />
                            <span className='listing_points p-2'>
                              {' '}
                              40 points
                            </span>
                          </div>
                        </div>
                      </li>

                      <li className='mt-3'>
                        <div className='col-sm-12 d-flex'>
                          <div className='col-sm-5'>
                            <img src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg' />
                            <span className='listing_name p-1'>
                              {' '}
                              Johnson Willams{' '}
                            </span>
                          </div>
                          <div className='col-sm-5  d-flex justify-content-end align-items-center'>
                            <img
                              src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1670750389/Diamond_1_srz9kn.svg'
                              className='diamond_list_size'
                            />
                            <span className='listing_points p-2'>
                              {' '}
                              40 points
                            </span>
                          </div>
                        </div>
                      </li>

                      <li className='mt-3'>
                        <div className='col-sm-12 d-flex'>
                          <div className='col-sm-5'>
                            <img src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg' />
                            <span className='listing_name p-1'>
                              {' '}
                              Johnson Willams{' '}
                            </span>
                          </div>
                          <div className='col-sm-5  d-flex justify-content-end align-items-center'>
                            <Button className='nudge_btn'>Nudge player</Button>
                          </div>
                        </div>
                      </li>

                      <li className='mt-3'>
                        <div className='col-sm-12 d-flex'>
                          <div className='col-sm-5'>
                            <img src='https://res.cloudinary.com/dysdy7hjr/image/upload/v1665299456/Group_45_bpykjx.svg' />
                            <span className='listing_name p-1'>
                              {' '}
                              Johnson Willams{' '}
                            </span>
                          </div>
                          <div className='col-sm-5  d-flex justify-content-end align-items-center'>
                            <Button className='nudge_btn'>Nudge player</Button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <hr style={{ border: '1px solid black' }} />
        </div>
        <div className='col-sm-12 d-flex justify-content-end p-2 '>
          <Button className='leaderboard_chg '> View my leaderboard</Button>

          <div className=' ' style={{ marginLeft: '10px' }}>
            <Button className='explore_chg'>Explore Challenges</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSquadDetails;
