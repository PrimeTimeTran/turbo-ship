import {View, Text, StyleSheet} from 'react-native';

export function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text>FeedScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
