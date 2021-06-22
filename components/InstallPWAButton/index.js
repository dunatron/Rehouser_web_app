import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import { toast } from 'react-toastify';
import { COMPANY_LEGAL_NAME, COMPANY_NAME } from '@/Lib/const';

// https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent
const InstallPWAButton = () => {
  const [appInstalled, setAppInstalled] = useState(false);
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const interceptBeforeInstallHandler = e => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener(
      'beforeinstallprompt',
      interceptBeforeInstallHandler
    );

    return () =>
      window.removeEventListener(
        'transitionend',
        interceptBeforeInstallHandler
      );
  }, []);

  // Note: could be removed/changed
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/appinstalled_event
  useEffect(() => {
    const appinstalledListnerHandler = e => {
      //   e.preventDefault();
      toast.success(
        <Typography variant="h5">
          Welcome to the {COMPANY_NAME} Progressive Web App
        </Typography>
      );
      setAppInstalled(true);
    };
    window.addEventListener('appinstalled', appinstalledListnerHandler);

    return () =>
      window.removeEventListener('transitionend', appinstalledListnerHandler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  // currently not accounting for a. not installed/installing service wb & already installed... so just return null
  if (!supportsPWA) return null;
  // if (!supportsPWA) {
  //   return (
  //     <Typography>
  //       Browser does not support PWA. Try a different browser
  //     </Typography>
  //   );
  // }
  if (appInstalled) {
    return null;
  }
  return (
    <Button
      variant="outlined"
      id="install_button"
      aria-label="Install app"
      title="Install app"
      startIcon={<GetAppIcon />}
      onClick={onClick}>
      Install ReHouser Web App
    </Button>
  );
};

export default InstallPWAButton;
