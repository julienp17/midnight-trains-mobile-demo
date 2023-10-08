import { NativeBaseProvider } from "native-base";
import TabsNavigation from "./navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <TabsNavigation />
    </NativeBaseProvider>
  );
}
