import { BasePage, IPageDecorator, PageDecorator } from 'wdio-vscode-service';
import * as locatorsMap from './locators';
import { explorerProjectsSection as ExplorerProjectsSectionLocator } from './locators';

export interface ExplorerProjectsSection extends IPageDecorator<typeof ExplorerProjectsSectionLocator> {}

@PageDecorator(ExplorerProjectsSectionLocator)
export class ExplorerProjectsSection extends BasePage<typeof ExplorerProjectsSectionLocator, typeof locatorsMap> {
  public locatorKey = 'explorerProjectsSection' as const;

  public getTitle(): Promise<string> {
    return this.elem$.getText();
  }

  public clickOpenFolderButton(): Promise<void> {
    return this.openFolderButton$.click();
  }
}
