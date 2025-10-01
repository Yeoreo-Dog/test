import Image from 'next/image';

import { Stack } from '@mui/material';

import mainLogo from 'src/assets/images/logo/bg-heand.png';

const MainLogo = () => (
  <Stack flexDirection="row" alignItems="center">
    <Image src={mainLogo} style={{ height: 34, width: 'auto' }} alt="logo" priority />
  </Stack>
);

export default MainLogo;
