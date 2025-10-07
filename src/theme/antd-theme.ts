import { ThemeConfig, theme as antdTheme } from 'antd';

export const theme: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: '#0bbe38ff',
  },
  components: {
    Layout: {
      headerBg: 'var(--ant-colorBgBase)',
    },
  },
  algorithm: [antdTheme.defaultAlgorithm],
};
