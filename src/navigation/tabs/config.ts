import {NAVIGATION} from '../../constants';
import {HomeScreen, ProfileScreen, WelcomeScreen} from '../../screens';

export const getBottomTabs = () => {
  const TABS = [
    {
      name: NAVIGATION.TABS.HOME,
      component: HomeScreen,
    },
    {
      name: NAVIGATION.TABS.PROFILE,
      component: ProfileScreen,
    },
  ];
  return TABS;
};
