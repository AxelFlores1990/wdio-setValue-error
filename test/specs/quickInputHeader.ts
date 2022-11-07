import { BasePage, IPageDecorator, PageDecorator } from 'wdio-vscode-service';
import * as locatorsMap from './locators';
import { quickInputHeader as quickInputHeaderLocator } from './locators';

export interface QuickInputHeader extends IPageDecorator<typeof quickInputHeaderLocator> {}

@PageDecorator(quickInputHeaderLocator)
export class QuickInputHeader extends BasePage<typeof quickInputHeaderLocator, typeof locatorsMap> {
  public locatorKey = 'quickInputHeader' as const;

  public setOpenFolderExplorerTextboxValue(value: string): Promise<void> {
    return this.openFolderExplorerTextbox$.setValue(value);
  }

  public getOpenFolderExplorerTextboxValue(): Promise<string> {
    return this.openFolderExplorerTextbox$.getValue();
  }

  public clickOpenFolderExplorerConfirmationButton(): Promise<void> {
    return this.openFolderExplorerButton$.click();
  }
}
