import { StackNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreenContainer';
import LoginScreen from './screens/LoginScreen';

const AppNavigator = StackNavigator({
  List: {
    screen: ListScreen,
  },
  Login: {
    screen: LoginScreen,
  },
});

export default AppNavigator;
