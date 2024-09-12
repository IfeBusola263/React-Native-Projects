import Ionicons from "@expo/vector-icons/Ionicons";

export default function MyIcon({name, size, color}){
    return <Ionicons name={name} size={size} style={{marginRight: -20}} color={color}  />
}
