import HandleInners from './HandleInners';
import useStyles from '../useStyles';

const List = ({ item }) => {
  const classes = useStyles();
  const {
    type,
    value,
    fieldProps,
    layoutProps,
    inners,
    listStyle,
    listNum,
    title,
  } = item;

  const CustomTag = fieldProps.variant === 'ol' ? 'ol' : 'ul';
  const disableIndent = fieldProps.disableIndent ? true : false;

  return (
    <CustomTag
      className={classes[fieldProps.variant]}
      type={fieldProps.type}
      start={fieldProps.start}
      reversed={fieldProps.reversed}
      style={{
        ...(disableIndent && {
          paddingLeft: '0',
        }),
      }}>
      <HandleInners inners={inners} />
    </CustomTag>
  );
};

export default List;
