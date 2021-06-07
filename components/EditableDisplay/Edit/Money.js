import MoneyInput from '@/Components/Inputs/MoneyInput';

const MoneyEdit = ({ item, onChange }) => {
  return (
    <div>
      <MoneyInput
        id={`${item.key}-money-edit-field`}
        label={item.label}
        fieldProps={item.fieldProps}
        defaultValue={item.value ? item.value : null}
        onChange={e => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default MoneyEdit;
