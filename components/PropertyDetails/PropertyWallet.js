import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PropertyWallet = ({ id, property }) => {
  return (
    <div>
      <Typography>Wallet {property.wallet.amount}</Typography>
      <Typography variant="caption" gutterBottom>
        {property.location}
      </Typography>
      <Button>Get Full breakdown</Button>
    </div>
  );
};
export default PropertyWallet;
