/** @jsx jsx */
import { Fragment, useCallback, useState, useContext } from 'react';

import { jsx } from '@emotion/react';

import { token } from '@atlaskit/tokens';

import {
  Banner,
  Content,
  LeftPanel,
  LeftSidebarWithoutResize,
  Main,
  PageLayout,
  RightPanel,
  RightSidebar,
  TopNavigation,
} from '@atlaskit/page-layout';

import GlobalNav from './design-system/side-navigation/examples/common/global-nav.tsx';
import BarraLateral from './BarraLateral.tsx';
import ScrollableContent from './design-system/page-layout/examples/common/scrollable-content.tsx';
import SlotLabel from './design-system/page-layout/examples/common/slot-label.tsx';
import SlotWrapper from './design-system/page-layout/examples/common/slot-wrapper.tsx';
import Toggle from './design-system/page-layout/examples/common/toggle.tsx';
import ToggleBox from './design-system/page-layout/examples/common/toggle-box.tsx';
import toKebabCase from './design-system/page-layout/examples/common/to-kebab-case.tsx';
import Navegacion from './design-system/page-layout/examples/common/Navegacion.tsx';
import { StoreContext } from './store/StoreProvider.js';

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

  const ToggleShown = useCallback(
    ({ slotName }: { slotName: SlotName }) => {
      const gridKey = `is${slotName}Shown` as keyof typeof gridState;
      return (
        <Toggle
          id={`toggle-${toKebabCase(slotName)}`}
          onChange={() =>
            setGridState({ ...gridState, [gridKey]: !gridState[gridKey] })
          }
          isChecked={!gridState[gridKey]}
        >{`${gridState[gridKey] ? 'Hide' : 'Show'} ${slotName}`}</Toggle>
      );
    },
    [gridState],
  );

  const ToggleExtraWide = useCallback(
    () => (
      <Fragment>
        <Toggle
          id={`toggle--extra-wide`}
          onChange={() =>
            setGridState({
              ...gridState,
              isMainExtraWide: !gridState.isMainExtraWide,
            })
          }
          isChecked={gridState.isMainExtraWide}
        >
          Toggle extra-wide content
        </Toggle>
        {gridState.isMainExtraWide && (
          <img
            src="https://picsum.photos/seed/picsum/1600"
            alt="wide placeholder"
            title="wide placeholder image"
          />
        )}
      </Fragment>
    ),
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
            <SlotWrapper borderColor={token('color.border', 'black')}>
              <SlotLabel>Main</SlotLabel>
              <ToggleExtraWide />
              
              <ToggleScrollable slotName="Main" />
            </SlotWrapper>
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
      
      <ToggleBox>
        <ToggleShown slotName="Banner" />
        <ToggleShown slotName="TopNavigation" />
        <ToggleShown slotName="LeftPanel" />
        <ToggleShown slotName="LeftSidebar" />
        <ToggleShown slotName="Main" />
        <ToggleShown slotName="RightSidebar" />
        <ToggleShown slotName="RightPanel" />
      </ToggleBox>
    </PageLayout>
  );
};

export default BasicGrid;
 