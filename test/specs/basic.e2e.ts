/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../dist/service.d.ts" />

import { SideBarView } from '../..'
import { ExplorerProjectsSection } from './explorerProjectsSection'
import { QuickInputHeader } from './quickInputHeader'
import * as locators from './locators';

describe('WDIO VSCode Service', () => {
    describe('page objects', () => {
        it('exports necessary components for custom pageobjects', async () => {

          const workbench = await browser.getWorkbench();

          const explorerViewControl = await workbench.getActivityBar().getViewControl('Explorer');
          const explorerSideBarView = await explorerViewControl!.openView();
          expect(explorerSideBarView).toBeInstanceOf(SideBarView);
      
          const projectsSection = new ExplorerProjectsSection(locators);
          expect(await projectsSection.getTitle()).toBe('NO FOLDER OPENED');
          await projectsSection.clickOpenFolderButton();
      
          const quickInputHeader = new QuickInputHeader(locators);
          await quickInputHeader.setOpenFolderExplorerTextboxValue("/var/lib/");
      
          await browser.pause(30000);
      
          await quickInputHeader.clickOpenFolderExplorerConfirmationButton();
        })
    })
})
