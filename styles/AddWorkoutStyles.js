import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginLeft: '5%',
    marginTop: '5%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonGroupContainer: {
    borderRadius: 25,
    marginBottom: 20,
    borderColor: '#6200ea',
    borderWidth: 1,
    height: 70,
    overflow: 'hidden',
  },
  buttonGroupButton: {
    borderRadius: 25,
  },
  selectedButtonGroupButton: {
    backgroundColor: '#6200ea',
  },
  iconButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    marginTop: 5,
  },
  textInput: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
