import { connectCurrentRefinements } from 'react-instantsearch-dom';
import {
  Box,
  Paper,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
} from '@material-ui/core';

const ClearRefinements = ({
  items,
  refine,
  enableBoundingBox,
  setEnableBoundingBox,
}) => {
  const handleCheckChange = () => {
    setEnableBoundingBox();
    refine(items.filter(item => item.id === 'boundingBox'));
  };

  return (
    <div style={{ padding: '16px' }}>
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={enableBoundingBox}
                onChange={handleCheckChange}
                name="enableBoundingBox"
              />
            }
            label="Enable bounding box"
          />
        </FormGroup>
        <FormHelperText>
          Only show results contained in the map area. (Hint: only applys when
          you interract with the map)
        </FormHelperText>
      </FormControl>
    </div>
  );
};

const EnableBoundingBox = connectCurrentRefinements(ClearRefinements);

export default EnableBoundingBox;
