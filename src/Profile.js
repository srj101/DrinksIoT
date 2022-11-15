import { View,Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Profile = () => {
  return (
    <View style={{backgroundColor:'white'}}>
      <View style={{borderBottomColor:'#f3f3f3',borderBottomWidth:1,alignItems:"center",marginTop:100,marginBottom:50}}>
      <Image style={{
                height:110,
                width:110,
                borderRadius:100,
                marginBottom: 10,
                borderWidth:5,
                borderColor:'black'
              }} source={require("../assets/sakib.jpg")}/>
      <Text style={{fontSize:20,fontWeight:'600'}}>MD Sakib Sarker</Text>
      <Text>Department of CSE</Text>
      <Text style={{fontWeight:'800',marginBottom:50}}>43546</Text>
      </View>
      <View style={{marginLeft:20,marginBottom:'100%'}}>
        <TouchableOpacity >
      <View style={{marginLeft:20,marginRight:20,flexDirection:'row',marginBottom:20,marginTop:20}}>
        <Feather name='edit' size={25}/>
        <Text style={{fontSize:15,marginLeft:20}}>Edit You Profile</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{marginLeft:20,marginRight:20,flexDirection:'row',marginBottom:20,marginTop:20}}>
      <MaterialIcons name='airline-seat-recline-normal' size={25}/>
        <Text style={{fontSize:15,marginLeft:20}}>Room Number</Text>
      </View>
      </TouchableOpacity>


      <TouchableOpacity>
      <View style={{marginLeft:20,marginRight:20,flexDirection:'row',marginBottom:20,marginTop:20}}>
      <Ionicons name='exit-outline' size={25}/>
        <Text style={{fontSize:15,marginLeft:20}}>Logout</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={{marginLeft:20,marginRight:20,flexDirection:'row',marginBottom:20,
      marginTop:20,borderRadius:50}}>
      <MaterialCommunityIcons name='lock-smart' size={25}/>
        <Text style={{fontSize:15,marginLeft:20}}>Smart Menu</Text>
      </View>
      </TouchableOpacity>
      
      </View>
     
      
  </View>
  )
}

export default Profile