/**
 *
 * @param {*} permissions an array of permssions
 * @param {*} userPermissions an array of permssions
 *
 */
const _hasPermission = (permissions, userPermissions) => {
  for (const p of permissions) {
    if (userPermissions.includes(p)) {
      return true;
    }
  }
  return false;
};

export { _hasPermission };
export default _hasPermission;
