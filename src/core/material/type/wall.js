/**
 * @Author: Caven
 * @Date: 2021-02-27 23:30:43
 */

const { Cesium } = DC.Namespace

const WallLineTrailMaterial = require('../shader/wall/WallLineTrailMaterial.glsl')
const WallTrailMaterial = require('../shader/wall/WallTrailMaterial.glsl')

/**
 *  WallLineTrail
 * @type {string}
 */
Cesium.Material.WallLineTrailType = 'WallLineTrail'
Cesium.Material._materialCache.addMaterial(Cesium.Material.WallLineTrailType, {
  fabric: {
    type: Cesium.Material.WallLineTrailType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      image: Cesium.Material.DefaultImageId,
      repeat: new Cesium.Cartesian2(1, 1),
      speed: 3.0
    },
    source: WallLineTrailMaterial
  },
  translucent: function(material) {
    return true
  }
})

/**
 * WallTrail
 * @type {string}
 */
Cesium.Material.WallTrailType = 'WallTrail'
Cesium.Material._materialCache.addMaterial(Cesium.Material.WallTrailType, {
  fabric: {
    type: Cesium.Material.WallTrailType,
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 0.7),
      image: Cesium.Material.DefaultImageId,
      speed: 1
    },
    source: WallTrailMaterial
  },
  translucent: function(material) {
    return true
  }
})
