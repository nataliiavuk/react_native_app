import React from 'react';
import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
   } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const jobTypes=["Full-time", "Part-time", "Contract"]


const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-time")
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome, Nat</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput}    
          placeholder="What are you looking for?"   
          onChangeText={newText => setSearchTerm(newText)}
          defaultValue = {searchTerm}       
          
          />
        
        </View>
        <TouchableOpacity style={styles.searchBtn} 
        onPress={()=>{
          if (searchTerm){
            console.log(searchTerm); 
            router.push(`/search/${searchTerm}`)}
        }}>
          <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
      <FlatList
        data={jobTypes}
        renderItem={({item})=>(
          <TouchableOpacity
          style={styles.tab(activeJobType, item)}
          onPress={()=>{
            setActiveJobType(item);
            router.push(`search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item=>item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
      />

      </View>
    </View>
  )
}

export default Welcome