import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
        padding: '5%',

    },
    brokenImage:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 8888,
    },
    navbar:{
        width: '100%',
        // height: 50,
        borderRadius: 20,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center',
        marginTop:20,
    },
    newsTitle:{
        fontSize:24,
        fontWeight:'600',
    },    
    newsDescription:{
        fontSize:20,
        color:'grey',
    },
    newsImage:{
        width: width * 0.9,
        height: width * 0.9,
        borderRadius: 10,
    },
    newsDetail:{
        fontSize:18,
        // color:'grey',
    },
});
export default styles;