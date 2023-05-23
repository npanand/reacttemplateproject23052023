import { createContext, useContext } from 'react';

export interface IRbacRules {
  RoleId: number;
  RoleName: string;
  Features: IFeature[];
}

//create an interface for features
export interface IFeature {
  FeatureId: number;
  FeatureName: string;
}

//create an interface for roles
export interface IRoles {
  Roles: IRbacRules[];
}

//create an interface for user
export interface IUser {
  UserName: string;
  Password: string;
  RoleId: number;
}

//create an interface for user
export interface IAuth {
  UserName: string;
  Password: string;
}

//create an interface for user
export interface IAuthResponse {
  Message: string;
  RoleName: string;
  RoleId: number;
}

export const rbacRules: IRoles = {
  "Roles": [
    {
      "RoleId": 1,
      "RoleName": " Administrator",
      "Features": [
        {
          "FeatureId": 101,
          "FeatureName": "iSenzrMenu"
        },
        {
          "FeatureId": 102,
          "FeatureName": "DeviceStatus"
        },
        {
          "FeatureId": 103,
          "FeatureName": "HistoryPage"
        },
        {
          "FeatureId": 104,
          "FeatureName": "Diagnostics"
        },
        {
          "FeatureId": 105,
          "FeatureName": "PlantSwitch"
        },
        {
          "FeatureId": 106,
          "FeatureName": "PlantAdd"
        },
        {
          "FeatureId": 107,
          "FeatureName": "PlantUpdate"
        },
        {
          "FeatureId": 108,
          "FeatureName": "PlantView"
        },
        {
          "FeatureId": 109,
          "FeatureName": "LocationAdd"
        },
        {
          "FeatureId": 110,
          "FeatureName": "LocationUpdate"
        },
        {
          "FeatureId": 111,
          "FeatureName": "AssetAdd"
        },
        {
          "FeatureId": 112,
          "FeatureName": "AssetUpdate"
        },
        {
          "FeatureId": 113,
          "FeatureName": "AssetView"
        },
        {
          "FeatureId": 114,
          "FeatureName": "SensorConfigAdd"
        },
        {
          "FeatureId": 115,
          "FeatureName": "SensorConfigUpdae"
        },
        {
          "FeatureId": 116,
          "FeatureName": "SensorConfigDelete"
        },
        {
          "FeatureId": 117,
          "FeatureName": "GatewayReboot"
        },
        {
          "FeatureId": 118,
          "FeatureName": "GatewayFactoryReset"
        },
        {
          "FeatureId": 119,
          "FeatureName": "UpgradeFirmware"
        },
        {
          "FeatureId": 120,
          "FeatureName": "UserAdd"
        },
        {
          "FeatureId": 121,
          "FeatureName": "UserUpdate"
        },
        {
          "FeatureId": 122,
          "FeatureName": "UserView"
        },
        {
          "FeatureId": 123,
          "FeatureName": "Dashboard"
        },
        {
          "FeatureId": 124,
          "FeatureName": "Profile"
        }
      ]
    },
    {
      "RoleId": 2,
      "RoleName": "StandardUser",
      "Features": [

        {
          "FeatureId": 102,
          "FeatureName": "DeviceStatus"
        },
        {
          "FeatureId": 103,
          "FeatureName": "HistoryPage"
        },
        {
          "FeatureId": 104,
          "FeatureName": "Diagnostics"
        },
        {
          "FeatureId": 108,
          "FeatureName": "PlantView"
        },
        {
          "FeatureId": 113,
          "FeatureName": "AssetView"
        },
        {
          "FeatureId": 114,
          "FeatureName": "SensorConfigAdd"
        },
        {
          "FeatureId": 115,
          "FeatureName": "SensorConfigUpdae"
        },
        {
          "FeatureId": 116,
          "FeatureName": "SensorConfigDelete"
        },
        {
          "FeatureId": 117,
          "FeatureName": "GatewayReboot"
        },
        {
          "FeatureId": 119,
          "FeatureName": "UpgradeFirmware"
        },
        {
          "FeatureId": 122,
          "FeatureName": "UserView"
        },
        {
          "FeatureId": 123,
          "FeatureName": "Dashboard"
        },
        {
          "FeatureId": 124,
          "FeatureName": "Profile"
        },
        {
          "FeatureId": 125,
          "FeatureName": "LocationView"
        },
        {
          "FeatureId": 126,
          "FeatureName": "SensorView"
        }
      ]
    },
    {

      "RoleId": 3,
      "RoleName": "PlantAdmin",
      "Features": [
        {
          "FeatureId": 102,
          "FeatureName": "DeviceStatus"
        },
        {
          "FeatureId": 103,
          "FeatureName": "HistoryPage"
        },
        {
          "FeatureId": 104,
          "FeatureName": "Diagnostics"
        },
        {
          "FeatureId": 107,
          "FeatureName": "PlantUpdate"
        },
        {
          "FeatureId": 108,
          "FeatureName": "PlantView"
        },
        {
          "FeatureId": 109,
          "FeatureName": "LocationAdd"
        },
        {
          "FeatureId": 110,
          "FeatureName": "LocationUpdate"
        },
        {
          "FeatureId": 111,
          "FeatureName": "AssetAdd"
        },
        {
          "FeatureId": 112,
          "FeatureName": "AssetUpdate"
        },
        {
          "FeatureId": 113,
          "FeatureName": "AssetView"
        },
        {
          "FeatureId": 114,
          "FeatureName": "SensorConfigAdd"
        },
        {
          "FeatureId": 115,
          "FeatureName": "SensorConfigUpdae"
        },
        {
          "FeatureId": 116,
          "FeatureName": "SensorConfigDelete"
        },
        {
          "FeatureId": 117,
          "FeatureName": "GatewayReboot"
        },
        {
          "FeatureId": 118,
          "FeatureName": "GatewayFactoryReset"
        },
        {
          "FeatureId": 119,
          "FeatureName": "UpgradeFirmware"
        },
        {
          "FeatureId": 120,
          "FeatureName": "UserAdd"
        },
        {
          "FeatureId": 121,
          "FeatureName": "UserUpdate"
        },
        {
          "FeatureId": 122,
          "FeatureName": "UserView"
        },
        {
          "FeatureId": 123,
          "FeatureName": "Dashboard"
        },
        {
          "FeatureId": 124,
          "FeatureName": "Profile"
        },
        {
          "FeatureId": 125,
          "FeatureName": "LocationView"
        },
        {
          "FeatureId": 126,
          "FeatureName": "SensorView"
        }
      ]
    },
    {

      "RoleId": 4,
      "RoleName": "InfyIOTAdmin",
      "Features": [
        {
          "FeatureId": 102,
          "FeatureName": "DeviceStatus"
        },
        {
          "FeatureId": 103,
          "FeatureName": "HistoryPage"
        },
        {
          "FeatureId": 104,
          "FeatureName": "Diagnostics"
        },
        {
          "FeatureId": 105,
          "FeatureName": "PlantSwitch"
        },
        {
          "FeatureId": 106,
          "FeatureName": "PlantAdd"
        },
        {
          "FeatureId": 107,
          "FeatureName": "PlantUpdate"
        },
        {
          "FeatureId": 108,
          "FeatureName": "PlantView"
        },
        {
          "FeatureId": 109,
          "FeatureName": "LocationAdd"
        },
        {
          "FeatureId": 110,
          "FeatureName": "LocationUpdate"
        },
        {
          "FeatureId": 111,
          "FeatureName": "AssetAdd"
        },
        {
          "FeatureId": 112,
          "FeatureName": "AssetUpdate"
        },
        {
          "FeatureId": 113,
          "FeatureName": "AssetView"
        },
        {
          "FeatureId": 114,
          "FeatureName": "SensorConfigAdd"
        },
        {
          "FeatureId": 115,
          "FeatureName": "SensorConfigUpdae"
        },
        {
          "FeatureId": 116,
          "FeatureName": "SensorConfigDelete"
        },
        {
          "FeatureId": 117,
          "FeatureName": "GatewayReboot"
        },
        {
          "FeatureId": 118,
          "FeatureName": "GatewayFactoryReset"
        },
        {
          "FeatureId": 119,
          "FeatureName": "UpgradeFirmware"
        },
        {
          "FeatureId": 120,
          "FeatureName": "UserAdd"
        },
        {
          "FeatureId": 121,
          "FeatureName": "UserUpdate"
        },
        {
          "FeatureId": 122,
          "FeatureName": "UserView"
        },
        {
          "FeatureId": 123,
          "FeatureName": "Dashboard"
        },
        {
          "FeatureId": 124,
          "FeatureName": "Profile"
        },
        {
          "FeatureId": 125,
          "FeatureName": "LocationView"
        },
        {
          "FeatureId": 126,
          "FeatureName": "SensorView"
        }
      ]
     
    }
  ]
}

//create an interface for rbacRules

const initialRules = [{

  FeatureId: 0,
  FeatureName: ""

}]
export type RbacContextType = {
  rules: IFeature[];
  setRules: (rbacRules: IFeature[]) => void;
}

export  const checkAccess = (rulesArray, FeatureId: number) => {
  if (rulesArray.length > 0) {
    //check if the feature id is present in the rules
    const rule = rulesArray.find((rule) => rule.FeatureId === FeatureId);
    return (rule !== undefined) ? true : false;
  }
 
}
export const RBACContext = createContext<RbacContextType>({ rules: initialRules, setRules: rules => console.warn('no rbac provider') });
export const useRBACRules = () => useContext(RBACContext);