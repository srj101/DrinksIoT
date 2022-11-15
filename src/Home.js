import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Headerautomation from '../components/Headerautomatin'
const Home = () => {
  return (
    <View>
    <View>
      <Headerautomation/>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
        <TouchableOpacity>
          <View style={{backgroundColor:'gray',height:150,width:150,alignItems:'center',borderRadius:100}}>
              <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Coffee</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity >
          <View style={{backgroundColor:'Gray',height:150,width:150,alignItems:'center',borderRadius:100,marginLeft:30}}>
              <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Tea</Text>
          </View>
          </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',marginTop:100}}>
      <TouchableOpacity >
          <View style={{backgroundColor:'Gray',height:150,width:150,alignItems:'center',borderRadius:100}}>
              <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Water</Text>
          </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
          <View style={{backgroundColor:'Gray',height:150,width:150,alignItems:'center',borderRadius:100,marginLeft:30}}>
              <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Staff</Text>
          </View>
          </TouchableOpacity>
      </View>

      <View>

      </View>
    </View>
  </View>

  
  )}

export default Home;
