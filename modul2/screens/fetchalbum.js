import React from "react";
import {Text,View,StyleSheet, FlatList, Button} from 'react-native';

class Albums extends React.Component{
    constructor(){
        super();
        this.state={
            albums :[]
        };
    }

    async componentDidMount(){
        try{
            const res =await fetch('https://jsonplaceholder.typicode.com/albums');
            const jsonData = await res.json();
            this.setState({albums: jsonData});
        }catch(error){
            console.log("fetch error",error);
         };

    }

    render(){
        const{albums } = this.state;
        const {navigation} = this.props;
        return(
            <View style={styles.container}  >
                <Text style={styles.title}>Albums</Text>

                {/* <View style={styles.navRow}>
                    <Button title="Users" onPress={() => navigation.navigate('Users')} />
                    <Button title="Photos" onPress={() => navigation.navigate('Photos')} />
                    <Button title="Posts" onPress={() => navigation.navigate('Posts')} />
                </View> */}

                <FlatList
                data={albums}
                keyExtractor={(item)=>item.id.toString()}
                contentContainerStyle={styles.listContent}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Text style={styles.id}>{item.id}</Text>
                        <Text style={styles.userId}>#{item.userId}</Text>
                        <Text style={styles.albumTitle}>{item.title}</Text>
                    </View>
                )}/>
                </View>
        );
    }
}     
const styles = StyleSheet.create({
    container: {flex:1 , padding:16, backgroundColor:'#f6f7fb'},
    title   : {fontSize:22, marginBottom:14, fontWeight:'700', color:'#111', textAlign:'center'},
    listContent: {paddingBottom:24},
    navRow: {flexDirection:'row', justifyContent:'space-between', marginBottom:10},
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
        shadowColor:'#000',
        shadowOpacity:0.06,
        shadowOffset:{width:0,height:1},
        shadowRadius:4
    },
    id: {width:40, fontWeight:'700', color:'#333'},
    userId: {width:48, color:'#777', fontSize:12},
    albumTitle: {flex:1, paddingLeft:10, color:'#444', fontSize:15, lineHeight:20}
});

export default Albums;