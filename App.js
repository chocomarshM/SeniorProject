import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashboardScreen from './screens/DashboardScreen';

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
});

export default createAppContainer(AppNavigator);
