import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainerScroll: {
    width: '90%',
    borderRadius: 10,
    paddingTop: '5%',
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 0.3,
  },
  innerContainerComponents: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputContainerStyle: {
    width: '90%',
    borderWidth: 0.3,
    borderColor: '#000',
    borderRadius: 5,
    padding: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginLeft: '6%',
  },
  generalInput: {
    width: '90%',
    height: 60,
    borderWidth: 0.3,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  submitButton: {
    width: '50%',
    height: 60,
    backgroundColor: 'rgba(72,255,0,0.72)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  submitButtonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  Title: {
    elevation: 20,
    fontSize: 30,
    marginTop: 60,
    backgroundColor: '#4a6cef',
    color: 'white',
    padding: 10,
    borderRadius: 10,
  },
  Activity: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(87,87,87,0.34)',
  }
});