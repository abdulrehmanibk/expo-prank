import { View, Text, Image, Pressable, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import  styles  from './Styles'
import { ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';
import newsList from '@/constants/newsList';

const News = () => {
    
    const images = [
        require('../assets/images/broken1.png'),
        require('../assets/images/broken2.png'),
        require('../assets/images/broken4.png'),
        require('../assets/images/broken5.png')
    ];

    const [selectedImge, setSelectedImage] = useState(0);
    const [imgaeEnable, setImgaeEnable] = useState(false);

    const handleBorkenImage = () => {         
        if(selectedImge >= images.length - 1) {
            setSelectedImage(0)
        } 
        else{
            setSelectedImage(selectedImge + 1);
        }
      
    };
    
    useEffect(() => {

      const randomNum = Math.floor(Math.random() * 4);
      setSelectedImage(randomNum);

      setTimeout(() => {
        setImgaeEnable(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      }, 4000); 
  
    }, []);
    
  return (
    <>
      <ScrollView>
    <View style={styles.container}>

    <View style={styles.navbar}>
      <Text style={{fontSize: 24, color:'grey'}}>
        Latest News 
      </Text>
      <Text style={{fontSize: 24, color:'grey', zIndex:10}}>
        {/* <TouchableOpacity onPress={handleBorkenImage} style={{  zIndex: 9999, position:'absolute'}}>
          <Text style={{fontSize: 24, color:'grey',   zIndex: 9999}}>
            ☰ 
          </Text>
        </TouchableOpacity> */}
        🌎
      </Text>
    </View>
      
    <Text style={styles.newsTitle}>{newsList[selectedImge].title}</Text>
    <Text style={styles.newsDescription}>{newsList[selectedImge].description}</Text>

      <Image source={newsList[selectedImge].img1} style={styles.newsImage}/>
          
      <Text style={styles.newsDetail}>{newsList[selectedImge].detail1}</Text>
      
      <Text style={styles.newsDetail}>{newsList[selectedImge].detail2}</Text>

      <Image source={newsList[selectedImge].img2} style={styles.newsImage}/>

      <Text style={styles.newsDetail}>{newsList[selectedImge].detail3}</Text>
            
      <Text style={styles.newsDetail}>{newsList[selectedImge].detail4}</Text>

      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    </View>
    </ScrollView>

    { imgaeEnable && <Image source={images[selectedImge]} style={styles.brokenImage} /> }
    </>
  )
}

export default News;