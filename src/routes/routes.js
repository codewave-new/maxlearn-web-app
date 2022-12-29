/**
 * Global file for all routes
 */

import React from 'react';
import Home from '../pages/home';
import Login from '../pages/login';
import Layout from '../components/Layout/Layout';
import ProtectedRoute from './privateRoute';
import Todo from '../pages/todo';
import Rankings from '../pages/rankings';
import Learn from '../pages/learn';
import ResetPassword from '../components/Common/login/ResetPassword';
import ResetPasswordSuccessful from '../components/Common/login/ResetPasswordSuccessful';
import ConfirmPassword from '../components/Common/login/ConformPassword';
import UpdatePasswordSuccessful from '../components/Common/login/UpdatePasswordSuccessful';
import Help from '../pages/help';
import Profile from '../pages/profile';
import QuestionsNavbar from '../components/Common/Navbar/QuestionsNavbar';
import ChallengesDetail from '../pages/Challenges/ChallengesDetail';
import ChallengesQuestions from '../pages/questions/ChallengesQuestions';
import ChallengesCompleted from '../pages/Challenges/ChallengesCompleted';
import ChallengeSquadDetails from '../pages/questions/ChallengeSquadDetails';
import SquadDetails from '../components/Profile/SquadDetails';
import CategoryListing from '../pages/LearnCategory/CategoryListing';
import CategoryDetail from '../pages/LearnCategory/CategoryDetail';
import SubjectDetail from '../pages/LearnCategory/SubjectDetail';
// import CongratualtionsScreen from '../pages/questions/CongratualtionsScreen';
import TopicDetail from '../pages/LearnCategory/TopicDetail';
import CategoryFlashCard from '../pages/LearnCategory/CategoryFlashCard';
import CertQuestions from '../components/ToDo/questcerttab/CertQuestions';
import Score from '../components/ToDo/questcerttab/Score';
import StartQuizQuestions from '../pages/LearnCategory/start-quiz-questions';
import { QuizScore } from '../pages/LearnCategory/quiz-score';

export const appRoutes = [
  {
    // routes with Layout
    element: <Layout />,
    children: [
      {
        // protected routes
        element: <ProtectedRoute />,
        children: [
          {
            path: '/some-route-with-layout-protected',
            element: <p>Some route with layout and protected</p>,
          },
        ],
      },
      // unprotected routes
      {
        path: '/some-route-without-layout-protected',
        element: <p>Some route without layout and protected</p>,
      },
    ],
  },
  // routes w/o Layout
  {
    // protected routes
    element: <ProtectedRoute />,
    children: [
      {
        path: '/some-route-only-protected',
        element: <p>Some route with only protected</p>,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/to-do',
        element: <Todo />,
      },
      {
        path: '/rankings',
        element: <Rankings />,
      },
      {
        path: '/learn',
        element: <Learn />,
      },
      {
        path: '/learn/category-list',
        element: <CategoryListing />,
      },
      {
        path: '/learn/detail',
        element: <CategoryDetail />,
      },
      {
        path: '/learn/subject-detail',
        element: <SubjectDetail />,
      },
      {
        path: '/learn/topic-detail',
        element: <TopicDetail />,
      },
      {
        path: '/learn/flash-card',
        element: <CategoryFlashCard />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/profile/squad-details/:id',
        element: <SquadDetails />,
      },
      {
        path: '/to-do/challenge/detail/:id',
        element: <ChallengesDetail />,
      },
      {
        path: '/to-do/cert/start',
        element: <ChallengesDetail />,
      },

      {
        path: '/to-do/challenge/score-details/:id',
        element: <ChallengesCompleted />,
      },

      {
        path: '/start-challenge-exam/:id',
        element: <ChallengesQuestions />,
      },
      {
        path: '/start-cert-exam',
        element: <CertQuestions />,
      },
      {
        path: '/to-do/cert/score',
        element: <Score />,
      },
      {
        path: '/challenge-squad-detail',
        element: <ChallengeSquadDetails />,
      },
      // {
      //   path: '/team-score',
      //   element: <CongratualtionsScreen />,
      // },
      {
        path: '/questions/:id',
        element: <QuestionsNavbar />,
      },
      {
        path: '/start-learn-module-quiz/',
        element: <StartQuizQuestions />,
      },
      {
        path: '/learn/score-details/',
        element: <QuizScore />,
      },

    ],
  },
  // unprotected routes
  {
    path: '/some-route-public',
    element: <p>Public Route</p>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/reset_password',
    element: <ResetPassword />,
  },
  {
    path: '/reset_password_successful',
    element: <ResetPasswordSuccessful />,
  },
  {
    path: '/confirm_password',
    element: <ConfirmPassword />,
  },

  {
    path: '/update_password_successful',
    element: <UpdatePasswordSuccessful />,
  },
];
