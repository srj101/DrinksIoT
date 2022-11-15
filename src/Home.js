import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Colors from '../components/Color'

const Home = () => {
  return (
    <View>
    <View>
      <Header/>
      
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:150}}>

          <View style={{backgroundColor:Colors.coffe,height:150,width:150,alignItems:'center',marginRight:15,borderRadius:10}}>
           
              <Text style={{marginTop:'40%',fontSize:20,fontWeight:'500',color:Colors.White}}>Coffee</Text>
          </View>

          <View style={{backgroundColor:Colors.tea,height:150,width:150,alignItems:'center',borderRadius:10,marginLeft:15}}>
              <Text style={{marginTop:'40%',fontSize:20,fontWeight:'500',color:Colors.White}}>Tea</Text>
          </View>
          
    </View>

    <View style={{flexDirection:'row',justifyContent:'center',marginTop:100}}>

<View style={{backgroundColor:Colors.water,height:150,width:150,alignItems:'center',borderRadius:10,marginRight:15}}>
    <Text style={{marginTop:'40%',fontSize:20,fontWeight:'500',color:Colors.White}}>Water</Text>
</View>

<View style={{backgroundColor:Colors.staff,height:150,width:150,alignItems:'center',borderRadius:10,marginLeft:15}}>
    <Text style={{marginTop:'40%',fontSize:20,fontWeight:'500',color:Colors.White}}>Call Staff</Text>
</View>

</View>

  </View>
  </View>

  
  )}

export default Home;
