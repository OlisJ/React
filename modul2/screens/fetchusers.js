import React from "react";
import {Text,View,StyleSheet, FlatList, Button} from 'react-native';

class Users extends React.Component{
    constructor(){
        super();
        this.state={
            users :[]
        };
    }

    async componentDidMount(){
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await res.json();
            this.setState({users: jsonData});
        }catch(error){
            console.log("fetch error",error);
        };
    }

    render(){
        const {users} = this.state;
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Users</Text>

                <View style={styles.navRow}>
                    <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
                    <Button title="Photos" onPress={() => navigation.navigate('Photos')} />
                    <Button title="Posts" onPress={() => navigation.navigate('Posts')} />
                </View>

                <FlatList
                    data={users}
                    keyExtractor={(item)=>item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    renderItem={({item})=>(
                        <View style={styles.item}>
                            <Text style={styles.id}>{item.id}</Text>
                            <View style={styles.info}>
                                <Text style={styles.name}>
                                    {item.name} <Text style={styles.username}>@{item.username}</Text>
                                </Text>
                                <Text style={styles.email}>{item.email}</Text>
                                <Text style={styles.meta}>{item.address?.city} • {item.company?.name}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}     
const styles = StyleSheet.create({
    container: {flex:1 , padding:16, backgroundColor:'#f6f7fb'},
    title: {fontSize:22, marginBottom:14, fontWeight:'700', color:'#111', textAlign:'center'},
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
    info: {flex:1},
    name: {fontSize:16, fontWeight:'600', color:'#222'},
    username: {fontSize:13, fontWeight:'400', color:'#666'},
    email: {fontSize:14, color:'#444', marginTop:4},
    meta: {fontSize:12, color:'#888', marginTop:6}
});

export default Users;