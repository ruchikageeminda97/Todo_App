import React,{useState} from "react";
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    const [task,setTask]=useState();
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.squre}>

                </View>

                <Text style={styles.itemtext}>{props.text}</Text>

            </View>

            <View style={styles.circular}>

            </View>

        </View>
    );
}

const styles=StyleSheet.create({
    item: {
        backgroundColor:'#fff',
        padding:15,
        borderRadius: 10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20

       
      },

      itemLeft: {
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap",
        
      },

      squre: {
        width:24,
        height:24,
        backgroundColor:'#55bcf6',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
        
      },

      itemtext: {
        maxWidth:'80%'
        
      },

      circular: {
        width:13,
        height:13,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:6,
        
      },


});

export default Task;