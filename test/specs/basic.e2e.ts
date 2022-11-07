/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../dist/service.d.ts" />

import { SideBarView } from '../..'
import { ExplorerProjectsSection } from './explorerProjectsSection'
import { QuickInputHeader } from './quickInputHeader'
import * as locators from './locators';

describe('VSCode', () => {
    describe('Quick input header', () => {
        it('When value that contains "var" was setted, the same was not correctly processed', async () => {

          const workbench = await browser.getWorkbench();

          const explorerViewControl = await workbench.getActivityBar().getViewControl('Explorer');
          const explorerSideBarView = await explorerViewControl!.openView();
          expect(explorerSideBarView).toBeInstanceOf(SideBarView);
      
          const projectsSection = new ExplorerProjectsSection(locators);
          expect(await projectsSection.getTitle()).toBe('NO FOLDER OPENED');
          await projectsSection.clickOpenFolderButton();
      
          const pathToOpen = "/var/lib/";

          const quickInputHeader = new QuickInputHeader(locators);
          await quickInputHeader.setOpenFolderExplorerTextboxValue(pathToOpen);
      
          await browser.pause(5000);
      
          expect(await quickInputHeader.getOpenFolderExplorerTextboxValue()).toBe(pathToOpen);

          await quickInputHeader.clickOpenFolderExplorerConfirmationButton();
        })
    })
})
