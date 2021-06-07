import EditableDisplay from './index';

import { _hasPermission } from '@/Lib/_hasPermission';
const EditableDisplayItems = ({
  data,
  items,
  __typename,
  where,
  disableEdit,
  me,
  isAgent,
}) => {
  const hasPermissionsToEdit = item => {
    // permissions,
    // viewPermssions,
    // editPermssions,
    if (disableEdit) return false;
    if (item.editable === false) return false;

    const permissions = [];
    if (item.permissions) {
      permissions.push(...item.permissions);
    }
    if (item.editPermissions) {
      permissions.push(...item.editPermissions);
    }

    if (permissions.length > 0) {
      return _hasPermission(permissions, [
        ...me.permissions,
        isAgent ? 'AGENT' : '',
      ]);
    }

    return true;
  };

  const hasViewPermissions = item => {
    const permissions = [];
    if (item.permissions) {
      permissions.push(...item.permissions);
    }
    if (item.viewPermssions) {
      permissions.push(...item.viewPermssions);
    }

    if (permissions.length > 0) {
      return _hasPermission(permissions, [
        ...me.permissions,
        isAgent ? 'AGENT' : '',
      ]);
    }

    return true;
  };

  return (
    <div>
      {items.map((item, idx) => {
        return (
          <EditableDisplay
            key={item.key}
            item={{
              ...item,
              value: data[item.key],
              __typename,
              where,
              editable: hasPermissionsToEdit(item),
              viewable: hasViewPermissions(item),
              // ...(disableEdit && { editable: hasPermissionsToEdit(item) }),
            }}
          />
        );
      })}
    </div>
  );
};
export default EditableDisplayItems;
