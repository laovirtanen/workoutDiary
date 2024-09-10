import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200ea', 
  },
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#e0dbeb',
    padding: 15,
    marginBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  iconContainer: {
    width: 40, 
    alignItems: 'center', 
    marginRight: 10, 
    backgroundColor: '#6200ea',
    borderRadius: 30, 
    padding: 8, 
  },
  dateContainer: {
    justifyContent: 'center', 
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  textContainer: {
    marginTop: 5, 
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  buttonGroupContainer: {
    height: 70,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#6200ea', 
    backgroundColor: '#6200ea', 
  },
});
