import {Platform} from 'react-native';
import {
  requestMultiple,
  PERMISSIONS,
  RESULTS,
  openSettings,
  Permission,
} from 'react-native-permissions';

export default () => {
  const getAllPermission = async () => {
    let isBlockCase = false,
      isDenyCase = false;
    try {
      const permissionArray = Platform.select({
        android: [PERMISSIONS.ANDROID.CAMERA],
        ios: [PERMISSIONS.IOS.CAMERA],
      });
      const statuses = await requestMultiple(permissionArray);
      for (let i = 0; i < permissionArray.length; i++) {
        if (
          statuses[permissionArray[i]] === RESULTS.BLOCKED ||
          statuses[permissionArray[i]] === RESULTS.LIMITED
        ) {
          isBlockCase = true;
          break;
        } else if (statuses[permissionArray[i]] !== RESULTS.GRANTED) {
          isDenyCase = true;
          break;
        }
      }
      return isBlockCase || isDenyCase
        ? {status: false, isBlocked: isBlockCase ? true : false}
        : {status: true};
    } catch (err) {
      console.log('error requesting permission', err);
    }
  };
  const requestPermissions = async (permissionArray: Permission[]) => {
    let isBlockCase = false,
      isDenyCase = false;
    try {
      const statuses = await requestMultiple(permissionArray);
      for (let i = 0; i < permissionArray.length; i++) {
        if (
          statuses[permissionArray[i]] === RESULTS.BLOCKED ||
          statuses[permissionArray[i]] === RESULTS.LIMITED
        ) {
          isBlockCase = true;
          break;
        } else if (statuses[permissionArray[i]] !== RESULTS.GRANTED) {
          isDenyCase = true;
          break;
        }
      }
      return isBlockCase || isDenyCase
        ? {status: false, isBlocked: isBlockCase ? true : false}
        : {status: true};
    } catch (err) {
      console.log('error requesting permission', err);
    }
  };

  const openAppSettings = () => {
    try {
      return openSettings();
    } catch (err) {
      console.log('ERROR IN open settings ', err);
    }
  };

  return {getAllPermission, openAppSettings, requestPermissions};
};
