import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39296Navigator from '../features/BlankScreen39296/navigator';
import BlankScreen29295Navigator from '../features/BlankScreen29295/navigator';
import BlankScreen59294Navigator from '../features/BlankScreen59294/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39296: { screen: BlankScreen39296Navigator },
BlankScreen29295: { screen: BlankScreen29295Navigator },
BlankScreen59294: { screen: BlankScreen59294Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
