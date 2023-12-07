/** @jsx jsx */
import { Fragment, useCallback, useState, useContext } from 'react';

import { jsx } from '@emotion/react';

import { token } from '@atlaskit/tokens';
import { Box,xcss } from '@atlaskit/primitives';

import {

  Content,
  
  LeftSidebarWithoutResize,
  Main,
  PageLayout,

  RightSidebar,
  TopNavigation,
} from '@atlaskit/page-layout';

import GlobalNav from './design-system/side-navigation/examples/common/global-nav.tsx';
import BarraLateral from './BarraLateral.tsx';
import ScrollableContent from './design-system/page-layout/examples/common/scrollable-content.tsx';
import SlotLabel from './design-system/page-layout/examples/common/slot-label.tsx';
import SlotWrapper from './design-system/page-layout/examples/common/slot-wrapper.tsx';
import Toggle from './design-system/page-layout/examples/common/toggle.tsx';


import { StoreContext } from './store/StoreProvider.js';
import DefaultSearch from './design-system/search/Search.tsx';

import ProyectList from './design-system/proyects/proyectList.js';
type SlotName =
  | 'Banner'
  | 'TopNavigation'
  | 'LeftPanel'
  | 'LeftSidebar'
  | 'Main'
  | 'RightSidebar'
  | 'RightPanel';

const initialState = {
  isBannerShown: false,
  isTopNavigationShown: true,
  isLeftPanelShown: false,
  isLeftSidebarShown: true,
  isMainShown: true,
  isRightSidebarShown: true,
  isRightPanelShown: false,
  isBannerFixed: false,
  isTopNavigationFixed: true,
  isLeftPanelFixed: false,
  isLeftPanelScrollable: false,
  isLeftSidebarFixed: true,
  isLeftSidebarScrollable: false,
  isMainScrollable: true,
  isMainExtraWide: false,
  isRightSidebarFixed: false,
  isRightSidebarScrollable: false,
  isRightPanelFixed: false,
  isRightPanelScrollable: false,
};

const componentStyle = xcss({
  marginTop:'space.1000',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  
});

const componentStyle2 = xcss({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  padding:'space.100',

  
});

const boxRow = xcss({
  display:'flex',
  flexDirection:'row', 
});

const boxColumn = xcss({
  display:'flex',
  flexDirection:'column', 
});


const BasicGrid = () => {
  const [store,dispatch] = useContext(StoreContext)
  const [gridState, setGridState] = useState(initialState);

  const ToggleFixed = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Fixed` as keyof typeof gridState;
      return (
        <Toggle
          id={`${slotName}--fixed`}
          isChecked={gridState[gridKey]}
          onChange={() =>
            setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
          }
        >
          Toggle fixed
        </Toggle>
      );
    },
    [gridState],
  );

  const ToggleScrollable = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Scrollable` as keyof typeof gridState;
      return (
        <Fragment>
          <Toggle
            id={`${slotName}--scrollable`}
            isChecked={gridState[gridKey]}
            onChange={() =>
              setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
            }
          >
            Toggle scrollable content
          </Toggle>
          {gridState[gridKey] && <ScrollableContent />}
        </Fragment>
      );
    },
    [gridState],
  );



  return (
    <PageLayout>
      
      {gridState.isTopNavigationShown && (
        <TopNavigation
          testId="topNavigation"
          id="top-navigation"
          skipLinkTitle="Top Navigation"
          height={60}
          isFixed={gridState.isTopNavigationFixed}
        >
          <GlobalNav></GlobalNav>
        </TopNavigation>
      )}
      
      <Content testId="content">
        {gridState.isLeftSidebarShown && (
          <LeftSidebarWithoutResize
            testId="leftSidebar"
            id="left-sidebar"
            skipLinkTitle="Project Navigation"
            isFixed={gridState.isLeftSidebarFixed}
            width={250}
          >
            <BarraLateral></BarraLateral>

          </LeftSidebarWithoutResize>
        )}
        {gridState.isMainShown && (
          <Main testId="main" id="main" skipLinkTitle="Main Content">
            <Box xcss={boxRow}>
                <Box xcss={boxColumn}>
                  <Box xcss={componentStyle}>
                    <Box xcss={componentStyle2}>
                      <h1>Proyectos Activos</h1>
                      <DefaultSearch/>
                    </Box>
                    <div >
                      <ProyectList></ProyectList>
                    </div>
                  </Box>
                </Box>
            </Box>
            
          </Main>
        )}
        {gridState.isRightSidebarShown && (
          <RightSidebar
            testId="rightSidebar"
            id="right-sidebar"
            skipLinkTitle="Right Sidebar"
            isFixed={gridState.isRightSidebarFixed}
            width={200}
          >
            <SlotWrapper
              borderColor={token('color.border.accent.green', 'darkgreen')}
            >
              <SlotLabel>RightSidebar</SlotLabel>
              <ToggleFixed slotName="RightSidebar" />
              <ToggleScrollable slotName="RightSidebar" />
            </SlotWrapper>
          </RightSidebar>
        )}
      </Content>

    </PageLayout>
  );
};

export default BasicGrid;
 