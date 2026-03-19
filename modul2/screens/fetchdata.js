import React from "react";
import {Text,View,StyleSheet, FlatList, Button} from 'react-native';

class Posts extends React.Component{
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
        const {navigation} = this.props;
        return(
            <View style={styles.container}  >
                <Text style={styles.title}>Posts</Text>

                {/* <View style={styles.navRow}>
                    <Button title="Users" onPress={() => navigation.navigate('Users')} />
                    <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
                    <Button title="Photos" onPress={() => navigation.navigate('Photos')} />
                </View> */}

                <FlatList
                data={posts}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Text style={styles.id}>{item.id}</Text>
                        <Text style={styles.postTitle}>{item.title}</Text>
                    </View>
                )}/>
                </View>
        );
    }
}     
const styles = StyleSheet.create({
    container: {flex:1 , padding:16, backgroundColor: '#f6f7fb'},
    title: {fontSize:20, marginBottom:12, fontWeight:'600', color:'#222'},
    navRow: {flexDirection:'row', justifyContent:'space-between', marginBottom:10},
    item: {
        paddingVertical:12,
        paddingHorizontal:12,
        borderRadius:8,
        borderBottomWidth:0,
        backgroundColor:'#fff',
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        elevation:1,
        shadowColor:'#000',
        shadowOpacity:0.04,
        shadowOffset:{width:0,height:1},
        shadowRadius:3
    },
    id: {width:40, fontWeight:'700', color:'#333'},
    postTitle: {flex:1, paddingLeft:8, color:'#444'}
});

export default Posts;