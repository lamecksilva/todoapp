import { createStackNavigator } from "react-navigation";

import DrawerStack from "./stacks/drawerStack";

const Navigator = createStackNavigator(
  {
    drawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "none",
    initialRouteName: "drawerStack"
  }
);

export default Navigator;
