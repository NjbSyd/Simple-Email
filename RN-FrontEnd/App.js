import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator, Platform, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {styles} from './Design/Styles';
import {useEffect, useState} from "react";
import {SubmitData} from "./Logic/EmailProcessor";
import {handleCountryCodeChange} from "./Logic/InputHandler";
import {Loading} from "./Design/Loading";


export default function App() {
  const [data, setData] = useState({
    name: '', contact: '', countryCode: '+92', email: '', message: ''
  });
  const [example, setExample] = useState('3139919191')
  const [isLoading, setIsLoading] = useState(false);

  return (
<View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
    <Text style={styles.Title}>Contact Us</Text>
    <ScrollView
        style={styles.innerContainerScroll}
        contentContainerStyle={styles.innerContainerComponents}
        keyboardShouldPersistTaps={'never'}>
      <Text style={styles.label}>Name</Text>
      <TextInput
          style={styles.generalInput}
          cursorColor={'black'}
          placeholder={'Your name here...'}
          onChangeText={(text) => setData({...data, name: text})}
          maxLength={20}
          value={data.name}
      />

      <Text style={styles.label}>Phone No</Text>
      <PhoneInput
          placeholder={example}
          defaultCode={'PK'}
          containerStyle={styles.phoneInputContainerStyle}
          textContainerStyle={{borderRadius: 5}}
          textInputStyle={{fontSize: 16}}
          codeTextStyle={{fontSize: 16}}
          flagStyle={{width: 30, height: 20}}
          textInputProps={{maxLength: example.length, value: data.contact}}
          onChangeText={(text) => setData({...data, contact: text})}
          onChangeCountry={(country) => handleCountryCodeChange(country, data, setData, setExample)}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
          style={styles.generalInput}
          cursorColor={'black'}
          placeholder={'yourname@domain.com'}
          onChangeText={(text) => setData({...data, email: text})}
          value={data.email}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
          style={styles.generalInput}
          cursorColor={'black'}
          placeholder={'Your message here...'}
          maxLength={50}
          onChangeText={(text) => setData({...data, message: text})}
          value={data.message}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => {
        setIsLoading(true);
        SubmitData(data, setIsLoading);
        setData({name: '', contact: '', countryCode: data.countryCode, email: '', message: ''})
      }}>
        <Text style={styles.submitButtonTxt}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
    <StatusBar style="auto"/>
  </View>
    {isLoading && <Loading/>}
  </View>
  );
}
