import { Typography } from '@material-ui/core';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

const TeamInfoText = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Not your typical Property Management agency.
      </Typography>

      <Typography gutterBottom>
        Instead of subscribing to a technology provider (as most Property
        Management agencies do) and offsetting the cost onto landlords, we’ve
        developed our own software and offer direct access to all of our
        customers.
      </Typography>

      <Typography gutterBottom>
        We offer the full services of a Property Management agency, while giving
        full transparency into the process through your online {COMPANY_NAME}
        account.
      </Typography>

      <Typography gutterBottom>
        {COMPANY_NAME} management is one part Property Investor and one part
        Coder, both with the drive to collaborate to offer better value for
        local landlords.
      </Typography>
      <Typography gutterBottom>
        Get in touch to see how {COMPANY_NAME} can help manage your Property
        portfolio.
      </Typography>
    </>
  );
};

export default TeamInfoText;
