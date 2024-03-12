import {Alert, Linking, Platform} from 'react-native';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

export async function getPermission() {
  let isBlockCase = false,
    isDenyCase = false;
  try {
    const permissionArray = Platform.select({
      android:
        Platform.constants['Release'] >= '13'
          ? [
              PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
              PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            ]
          : [
              PERMISSIONS.ANDROID.CAMERA,
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
              PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            ],
      ios: [
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.PHOTO_LIBRARY,
        PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY,
      ],
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
  } catch (err) {}
  return isBlockCase || isDenyCase
    ? {status: false, isBlocked: isBlockCase ? true : false}
    : {status: true};
}
