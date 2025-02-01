import { View,TouchableOpacity,Image} from "react-native";
 //image
 import home from '../../assets/images/home.png'

 import Mic from "../../assets/images/Mic.png"

 import set from "../../assets/images/set.png"
const BotLayout=()=>{
    return (
        <View
        style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
        }}
        >
            <TouchableOpacity>
                <Image source={home} style={{ width: 50, height: 50 }}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={Mic} style={{ width: 70, height: 70 }}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={set} style={{ width: 50, height: 50 }}/>
            </TouchableOpacity>
        </View>
    );
}

export default BotLayout;