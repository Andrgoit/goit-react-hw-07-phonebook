import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  border,
  grid,
  typography,
  position,
  shadow,
  background,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  border,
  grid,
  typography,
  position,
  shadow,
  background
);

// Пример

/* <Box
  bg="primary" - цвет берет из темы
  color="text"
  pt={5} - padding-top - значение берется из массива
  display="flex" - за дисплей отвечает layout
  alignItems="center"
>Содержание контейнера</Box> */

// Сайт с описанием
// site=>   https://styled-system.com/

//  https://styled-system.com/table

// space отвечает за:

// import { space } from 'styled-system';
// // or `import space from '@styled-system/space'`

// <Box m={2}>Tomato</Box>;

// m, margin
// mt, marginTop
// mr, marginRight
// mb, marginBottom
// ml, marginLeft
// mx, marginX	css => margin - left and margin - right
// my, marginY	css => margin - top and margin - bottom
// p, padding
// pt, paddingTop
// pr, paddingRight
// pb, paddingBottom
// pl, paddingLeft
// px, paddingX
// py, paddingY

//-----------------------------------

// color отвечает за:

// import { color } from 'styled-system';
// // or `import color from '@styled-system/color'`

// <Text color="white" bg="black">
//   Header
// </Text>;

// color
// bg, backgroundColor
// opacity

//-----------------------------------

// Typography отвечает за:

// import { typography } from 'styled-system';
// // or `import typography from '@styled-system/typography'`

// <Header fontFamily="Helvetica" fontSize={2}>
//   Hello!
// </Header>;

// fontFamily
// fontSize
// fontWeight
// lineHeight
// letterSpacing
// textAlign
// fontStyle

//-----------------------------------

// Layout отвечает за:

// import { layout } from 'styled-system';
// // or `import layout from '@styled-system/layout'`

// <Box width="100%" height={32} overflow="hidden" />;

// width;
// height;
// minWidth;
// maxWidth;
// minHeight;
// maxHeight;
// size;
// display;
// verticalAlign;
// overflow;
// overflowX;
// overflowY;

//-----------------------------------

// Flexbox отвечает за:

// import { flexbox } from 'styled-system';
// // or `import flexbox from '@styled-system/flexbox'`

// <Flex alignItems="center" justifyContent="space-between">
//   Blog
// </Flex>;

// alignItems;
// alignContent;
// justifyItems;
// justifyContent;
// flexWrap;
// flexDirection;
// flex;
// flexGrow;
// flexShrink;
// flexBasis;
// justifySelf;
// alignSelf;
// order;

//-----------------------------------

// Grid отвечает за:

// gridGap;
// gridRowGap;
// gridColumnGap;
// gridColumn;
// gridRow;
// gridArea;
// gridAutoFlow;
// gridAutoRows;
// gridAutoColumns;
// gridTemplateRows;
// gridTemplateColumns;
// gridTemplateAreas;

//-----------------------------------

// Background отвечает за:

// import { background } from 'styled-system';
// // or `import background from '@styled-system/background'`

// <Image
//   backgroundImage="url('/images/dog.png')"
//   backgroundPosition="center"
//   backgroundRepeat="no-repeat"
// />;

// background;
// backgroundImage;
// backgroundSize;
// backgroundPosition;
// backgroundRepeat;

//-----------------------------------

// Border отвечает за:

// import { border } from 'styled-system';
// // or `import border from '@styled-system/border'`

// <Box border={1} borderRadius={2}>
//   Card
// </Box>;

// border;
// borderWidth;
// borderStyle;
// borderColor;
// borderRadius;
// borderTop;
// borderTopWidth;
// borderTopStyle;
// borderTopColor;
// borderTopLeftRadius;
// borderTopRightRadius;
// borderRight;
// borderRightWidth;
// borderRightStyle;
// borderRightColor;
// borderBottom;
// borderBottomWidth;
// borderBottomStyle;
// borderBottomColor;
// borderBottomLeftRadius;
// borderBottomRightRadius;
// borderLeft;
// borderLeftWidth;
// borderLeftStyle;
// borderLeftColor;
// borderX;
// borderY;

//---------------------------------------------

// Position;

// import { position } from 'styled-system';
// // or `import position from '@styled-system/position'`

// <Box position="absolute" top={0} left={0} right={0} bottom={0}>
//   Cover
// </Box>;

// position
// zIndex
// top
// right
// bottom
// left

//----------------------------------------------

// Shadow;

// import { shadow } from 'styled-system';
// // or `import shadow from '@styled-system/shadow'`

// <Text textShadow="2px 2px #ff0000" boxShadow="5px 10px #888888">
//   Text with shadows
// </Text>;

// textShadow
// boxShadow
