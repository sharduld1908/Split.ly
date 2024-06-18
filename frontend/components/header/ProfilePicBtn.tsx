import {Image, StyleSheet, ImageSourcePropType, TouchableOpacity, DimensionValue} from "react-native";
import {COLORS, SIZES} from "@/constants/";

interface ProfilePicBtnProps {
    iconUrl: ImageSourcePropType;
    dimension: DimensionValue;
    handlePress: () => void;
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 60,
        height: 60,
        marginLeft: 20,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
});

const ProfilePicBtn: React.FC<ProfilePicBtnProps> = ({iconUrl, dimension, handlePress}) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
            <Image
                source={require('@/assets/images/chopper.jpg')}
                resizeMode='cover'
                style={{
                    width: dimension,
                    height: dimension,
                    borderRadius: SIZES.small / 1.25,
                }}
            />
        </TouchableOpacity>
    );
};

export default ProfilePicBtn;