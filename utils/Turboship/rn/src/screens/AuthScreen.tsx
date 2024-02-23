import {Text, View, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export function AuthScreen({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 10,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <View style={{maxWidth: '50%'}}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() =>
            navigation.navigate('Authenticated', {foo: 'bar', spam: 'ham'})
          }>
          Go To Home Screen
        </Button>
      </View>
    </ScrollView>
  );
}
