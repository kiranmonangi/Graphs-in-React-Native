import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Chart from './src/screens/Graph1';
import Login from './src/screens/login';
import Graph2 from './src/screens/Graph2';


const navigator = createStackNavigator(
  {
    Home: Login,
    Graph: Chart,
    AreaGraph: Graph2
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '',
    },
  },
);

export default createAppContainer(navigator);