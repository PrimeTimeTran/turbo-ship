import {View, Text, StyleSheet} from 'react-native';

export function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
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
