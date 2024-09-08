import { StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

export const styles = StyleSheet.create({
  container: {
    width: '90%',  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,  //
    backgroundColor: '#f5f5f5',  
    borderRadius: 10,  
    marginLeft: '5%',  
    marginTop: '5%',  
  },
  
  input: {
    height: 50,  
    borderColor: '#6200ea',  
    borderWidth: 2,  
    borderRadius: 10,  
    marginBottom: 20,  
    width: '100%',  
    paddingHorizontal: 15,  
    backgroundColor: '#fff', 
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
  buttonGroupContainer: {
    borderRadius: 25, 
    marginBottom: 20, 
    borderColor: '#6200ea',
    borderWidth: 1,
    height: 50,  
    overflow: 'hidden',  
  },

  selectedButtonGroupButton: {
    backgroundColor: '#6200ea', 
  },
  
    header: {
        fontSize: 24,
        marginBottom: 20,  
        color: '#6200ea',  
    },

});
