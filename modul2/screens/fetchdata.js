import React from "react";
import {Text,View,StyleSheet, FlatList} from 'react-native';

class  Posts extends React.Component{
    constructor(){
        super();
        this.state={
            posts:[]
        };
    }

    async componentDidMount(){
        try{
            const res =await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await res.json();
            this.setState({posts:jsonData});
        }catch(error){
            console.log("fetch error",error);
         };

    }

    render(){
        const{posts } = this.state;
        return(
            <View style={styles.container}  >
                <Text style={styles.title}>Posts</Text>

                <FlatList
                data={posts}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>{
                    <View style={styles.item}>
                        <Text>{item.id}</Text>
                        <Text>{item.title}</Text>
                    </View>
                } }/>
                </View>
        );
    }
}     
const styles = StyleSheet.create({
    container: {flex:1 , padding:16},
    title   : {fontSize:20, marginBottom:12},
    item: {paddingVertical:10 , borderBottomWidth:1}
});

export default  PostScreen;