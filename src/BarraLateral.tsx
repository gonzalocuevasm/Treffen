import React from 'react';

import DropboxIcon from '@atlaskit/icon/glyph/dropbox';
import FilterIcon from '@atlaskit/icon/glyph/filter';
import WorkIcon from '@atlaskit/icon/glyph/folder';
import LightbulbIcon from '@atlaskit/icon/glyph/lightbulb';
import CustomerIcon from '@atlaskit/icon/glyph/person';
import QueueIcon from '@atlaskit/icon/glyph/queues';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import LanguageIcon from '@atlaskit/icon/glyph/world';

import {
  ButtonItem,
  LinkItem,
  NavigationFooter,
  NavigationHeader,
  NestableNavigationContent,
  NestingItem,
  Section,
  SideNavigation,
} from '@atlaskit/side-navigation';

import AppFrame from './design-system/side-navigation/examples/common/app-frame.tsx';
import SampleFooter from './design-system/side-navigation/examples/common/sample-footer.tsx';
import SampleHeader from './design-system/side-navigation/examples/common/sample-header.tsx';

const BarraLateral = () => {
  return (
    <AppFrame shouldHideAppBar>
      <SideNavigation label="project" testId="side-navigation">
        <NavigationHeader>
          <SampleHeader />
        </NavigationHeader>
        <NestableNavigationContent
          initialStack={[]}
          testId="nestable-navigation-content"
        >
          <Section isList>
            <NestingItem
              id="2"
              testId="filter-nesting-item"
              title="Filters"
              iconBefore={<FilterIcon label="" />}
              iconAfter={<LightbulbIcon label="" />}
            >
              <Section>
                <ButtonItem>Search issues</ButtonItem>
              </Section>
              <Section title="Starred" isList>
                <ButtonItem>Everything me</ButtonItem>
                <ButtonItem>My open issues</ButtonItem>
                <ButtonItem>Reported by me</ButtonItem>
              </Section>
              <Section hasSeparator title="Other" isList>
                <ButtonItem>All issues</ButtonItem>
                <ButtonItem>Open issues</ButtonItem>
                <ButtonItem>Created recently</ButtonItem>
                <ButtonItem>Resolved recently</ButtonItem>
              </Section>
              <Section hasSeparator>
                <ButtonItem>View all filters</ButtonItem>
              </Section>
            </NestingItem>
            <NestingItem
              id="1"
              isSelected
              title="Queues view"
              iconBefore={<QueueIcon label="" />}
            >
              <Section title="Queues" isList>
                <ButtonItem>Untriaged</ButtonItem>
                <ButtonItem>My feature work</ButtonItem>
                <ButtonItem>My bugfix work</ButtonItem>
                <ButtonItem>Signals</ButtonItem>
                <ButtonItem>Assigned to me</ButtonItem>
              </Section>
              <Section hasSeparator>
                <ButtonItem>New queue</ButtonItem>
              </Section>
            </NestingItem>
            <NestingItem
              id="3"
              iconBefore={<SettingsIcon label="" />}
              title="Settings"
              testId="settings-nesting-item"
            >
              <Section>
                <NestingItem
                  iconBefore={<LanguageIcon label="" />}
                  id="3-1"
                  title="Language settings"
                >
                  <Section>
                    <ButtonItem>Customize</ButtonItem>
                    <NestingItem id="3-1-1" title="German Settings">
                      <Section>
                        <ButtonItem>Hallo Welt!</ButtonItem>
                      </Section>
                    </NestingItem>
                    <NestingItem id="3-1-2" title="English Settings">
                      <Section>
                        <ButtonItem>Hello World!</ButtonItem>
                      </Section>
                    </NestingItem>
                  </Section>
                </NestingItem>
              </Section>
            </NestingItem>
            <NestingItem
              id="4"
              iconBefore={<DropboxIcon label="" />}
              title="Dropbox"
              testId="dropbox-nesting-item"
              isDisabled
            >
              <span />
            </NestingItem>
            <ButtonItem iconBefore={<WorkIcon label="" />}>
              Your work
            </ButtonItem>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <LinkItem href="#" iconBefore={<CustomerIcon label="" />}>
              Your customers
            </LinkItem>
          </Section>
        </NestableNavigationContent>
        <NavigationFooter>
          <SampleFooter />
        </NavigationFooter>
      </SideNavigation>
    </AppFrame>
  );
};

export default BarraLateral;
