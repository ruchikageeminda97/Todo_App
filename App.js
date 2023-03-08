import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";

import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems, setTaskItems] = useState ([]);
  
  const handleAddTask = () => {
  setTaskItems([...taskItems,task])
  setTask(null);
  }

  const comppleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container}>
        <View style={styles.task}>
            
            <Text style={styles.tasktext}>Today's Tasks</Text>

            <ScrollView>

            <View style={styles.items}>
              {
                  taskItems.map((item,index)=>{
                  return (
                    <TouchableOpacity key={index} onPress={() => comppleteTask()}>
                        
                        <Task text={item}/>

                    </TouchableOpacity>

                  )

                  })

              }
      
            </View>
            </ScrollView>

        </View>
        
      
        <KeyboardAvoidingView style={styles.writetask}>
             <TextInput style={styles.input} placeholder={' Write a task'} value={task} onChangeText={text => setTask(text)} />

             <TouchableOpacity onPress={()=>handleAddTask()}>
                <View style={styles.addwrapper}>
                    <Text style={styles.addtext}>+</Text>
                </View>
            </TouchableOpacity>
       
        </KeyboardAvoidingView>

      <StatusBar style="auto" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal:12,
  },

  task: {
    paddingTop:50
  },

  tasktext: {
    fontSize:24,
    fontWeight:'bold',
    color:'purple',
  },

  items: {
    marginTop:30,
    
  },

  writetask: {
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
   
    
  },

  input: {

    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
    width:325,
  
  },

  addwrapper: {
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,

    
  },

  addtext: {
    
  },

});
