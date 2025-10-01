import {
  Button,
  Stack,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  useTheme,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import { NavLi, NavUl } from 'src/components/nav-section';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';
import { NavMainProps } from '../types';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#00307E',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    borderRadius: '10px',
    color: '#fff',
  },
}));

export function CustomNavPc({ data, sx }: NavMainProps) {
  const theme = useTheme();
  const pathname: any = usePathname();
  const moveScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Stack component="nav" sx={{ height: 1, ...sx }}>
      <NavUl
        sx={{
          gap: 5,
          height: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {data.map((list) =>
          list.children ? (
            <NavLi key={list.title}>
              <LightTooltip
                key={list.title}
                title={
                  <Stack direction={'column'} justifyContent={'center'}>
                    {list.children[0].items.map((item: any) => (
                      <Button
                        key={item.title}
                        sx={{ color: 'white' }}
                        onClick={() => {
                          if (pathname === '/') {
                            moveScroll(item.path);
                          }
                        }}
                      >
                        {item.title}
                      </Button>
                    ))}
                  </Stack>
                }
                PopperProps={{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -10], // 두 번째 값이 y축 간격 (기본은 8px)
                      },
                    },
                  ],
                }}
              >
                <Button
                  size="large"
                  variant="text"
                  color="inherit"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: list.path === removeLastSlash(pathname) ? 700 : 350,
                    padding: 0,
                  }}
                  component={RouterLink}
                  href={list.path}
                >
                  {list.title}
                </Button>
              </LightTooltip>
            </NavLi>
          ) : (
            <Button
              key={list.title}
              size="large"
              variant="text"
              color="inherit"
              sx={{
                fontSize: '1rem',
                color: list.path === '/cs' ? 'rgb(0, 48, 126)' : '',
                fontWeight: list.path === removeLastSlash(pathname) ? 700 : 350,
                padding: 0,
              }}
              component={RouterLink}
              href={list.path}
            >
              {list.title}
            </Button>
          )
        )}
      </NavUl>
    </Stack>
  );
}
